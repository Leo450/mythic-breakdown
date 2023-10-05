import { importDungeonData, importDungeonExport, writeDungeonExport } from '@/modules/FileManager'
import { fetchAbilities } from './Ability'
import { fetchNpcs } from './Npc'

export const scrapDungeon = async (dungeonSlug, refresh = false, limit = 0) => {
    console.log('Scraping dungeon', dungeonSlug)
    const dungeonData = await importDungeonData(dungeonSlug)
    let dungeonExport = await importDungeonExport(dungeonSlug)

    dungeonExport = await scrapNpcs(dungeonExport, dungeonData, refresh, limit)
    dungeonExport = await scrapAbilities(dungeonExport, dungeonData, refresh, limit)

    writeDungeonExport(dungeonSlug, dungeonExport)
}

export const scrapNpcs = async (dungeonExport, dungeonData, refresh = false, limit = 0) => {
    if (!dungeonExport.npcs) dungeonExport.npcs = []

    const missingIds = getMissingIds(dungeonData.npcs, dungeonExport.npcs, refresh, limit)
    const fetchedNpcs = await fetchNpcs(missingIds)

    dungeonExport.npcs = refresh ? fetchedNpcs : [...dungeonExport.npcs, ...fetchedNpcs]

    return dungeonExport
}

export const scrapAbilities = async (dungeonExport, dungeonData, refresh = false, limit = 0) => {
    if (!dungeonExport.abilities) dungeonExport.abilities = []

    // Get missing ability ids
    const abilities = dungeonData.npcs.map(t => t.abilities).flat()
    const missingIds = getMissingIds(abilities, dungeonExport.abilities, refresh, limit)
    const fetchedAbilities = await fetchAbilities(missingIds)

    dungeonExport.abilities = refresh ? fetchedAbilities : [...dungeonExport.abilities, ...fetchedAbilities]

    return dungeonExport
}

const getMissingIds = (dataCollection, exportCollection, refresh = false, limit = 0) => {
    const dataIds = (dataCollection ?? []).map(t => t.id)
    let missingIds = dataIds
    if (!refresh) {
        const exportedIds = (exportCollection ?? []).map(e => e.id)
        missingIds = dataIds.filter(s => !exportedIds.includes(s))
    }
    if (limit) missingIds.splice(limit)
    return missingIds
}
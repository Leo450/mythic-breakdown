import { importDungeonData, importDungeonExport } from '../modules/DungeonFiles'

export const getDungeonData = async (dungeonSlug) => {
    const dungeonData = await importDungeonData(dungeonSlug)
    const dungeonExport = await importDungeonExport(dungeonSlug)
    enrichAbilities(dungeonData, dungeonExport)
    return dungeonData
}

const enrichAbilities = (dungeonData, dungeonExport) => {
    for (let i = 0; i < dungeonData.npcs.length; i++) {
        const npc = dungeonData.npcs[i]
        const exportedNpc = dungeonExport.npcs.find(e => e.id === npc.id)
        npc.name = exportedNpc.name
        npc.image = exportedNpc.image

        for (let j = 0; j < npc.abilities.length; j++) {
            const ability = npc.abilities[j]
            const exportedAbility = dungeonExport.abilities.find(e => e.id === ability.id)
            ability.name = exportedAbility.name
            ability.icon = exportedAbility.icon
            const castType = ability.cast
            ability.cast = {
                type: castType,
                time: exportedAbility.castTime
            }
        }

    }
}
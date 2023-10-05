export const isBrowser = () => {
    return typeof window !== 'undefined'
}

export const srcBase = () => {
    return isBrowser() ? '../' : `${import.meta.dir}/..`
}

export const importDungeonData = async (dungeonSlug) => {
    return (await import(getDungeonFileMeta(dungeonSlug).path)).default
}

export const importDungeonExport = async (dungeonSlug) => {
    return (await import(getExportFileMeta(dungeonSlug).path)).default
}

export const getDungeonFileMeta = (dungeonSlug) => {
    const dir = `${srcBase()}/data/dungeon`
    const filename = `${dungeonSlug}.js`
    const path = `${dir}/${filename}`
    return { dir, filename, path }
}

export const getExportFileMeta = (dungeonSlug) => {
    const dir = `${srcBase()}/fetch/export`
    const filename = `${dungeonSlug}.json`
    const path = `${dir}/${filename}`
    return { dir, filename, path }
}

export const writeDungeonExport = (dungeonSlug, data) => {
    const fileMeta = getExportFileMeta(dungeonSlug)
    Bun.write(fileMeta.path, JSON.stringify(data, null, 4))
    console.log(`Wrote ${fileMeta.path}`)
}


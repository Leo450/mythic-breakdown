export const importDungeonData = async (dungeonSlug) => {
    return (await import(getDungeonFileMeta(dungeonSlug).path)).default
}

export const importDungeonExport = async (dungeonSlug) => {
    return (await import(getExportFileMeta(dungeonSlug).path)).default
}

export const getDungeonFileMeta = (dungeonSlug) => {
    const srcBase = typeof window === 'undefined' ? `${__dirname}/..` : '..'
    const dir = `${srcBase}/data/dungeon`
    const filename = `${dungeonSlug}.js`
    const path = `${dir}/${filename}`
    return { dir, filename, path }
}

export const getExportFileMeta = (dungeonSlug) => {
    const srcBase = typeof window === 'undefined' ? `${__dirname}/..` : '..'
    const dir = `${srcBase}/fetch/export`
    const filename = `${dungeonSlug}.json`
    const path = `${dir}/${filename}`
    return { dir, filename, path }
}
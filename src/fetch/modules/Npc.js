import { parse } from 'node-html-parser'

export const fetchNpc = async (npcId, locale = 'en') => {
    const localePath = locale === 'en' ? '' : locale + '/'

    try {
        console.log('Fetching npc', npcId)
        const response = await fetch(`https://www.wowhead.com/${localePath}npc=${npcId}`, {
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
                'Cache-Control': 'max-age=0',
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
            }
        })
        const root = parse(await response.text())

        const npc = {}
        npc.id = npcId
        npc.name = findName(root)
        npc.image = findImage(root)

        return npc

    } catch (e) {
        console.error(`Failed to fetch npc ${npcId}:`, `https://wowhead.com/${localePath}npc=${npcId}`)
        return null
    }
}

export const fetchNpcs = async (npcIds, locale = 'en') => {
    console.log(`Fetching ${npcIds.length} npcs`)
    const npcs = []
    for (const npcId of npcIds) {
        const npc = await fetchNpc(npcId, locale)
        if (npc) npcs.push(npc)
        await sleep(1000)
    }
    return npcs
}

const findName = (root) => {
    const title = root.querySelector('h1.heading-size-1')
    return title.innerText
}

const findImage = (root) => {
    const meta = root.querySelector('meta[property="og:image"]')
    return meta.attributes.content
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
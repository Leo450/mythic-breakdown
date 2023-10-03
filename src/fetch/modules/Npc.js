import { parse } from 'node-html-parser'
import axios from 'axios'

export const fetchNpc = async (npcId, locale = 'en') => {
    console.log(`Fetching npc ${npcId}`)
    const localePath = locale === 'en' ? '' : locale + '/'

    try {
        const response = await axios.get(`https://wowhead.com/${localePath}npc=${npcId}`)
        const root = parse(response.data)

        const npc = {}
        npc.id = npcId
        npc.name = findName(root)
        npc.image = findImage(root)

        return npc

    } catch (e) {
        console.log(`Error fetching npc ${npcId}`)
        console.error(e)
        return null
    }
}

export const fetchNpcs = async (npcIds, locale = 'en') => {
    const npcs = []
    for (const npcId of npcIds) {
        const npc = await fetchNpc(npcId, locale)
        npcs.push(npc)
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
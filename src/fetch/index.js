import { scrapDungeon } from '@/fetch/modules/Scrap'
import { Dungeon } from '@/data/enum/Dungeon'

const run = async () => {
    const slugs = Object.values(Dungeon)
    for (let i = 0; i < slugs.length; i++) {
        const slug = slugs[i]
        await scrapDungeon(slug)
    }
}

run()
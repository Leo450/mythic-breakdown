import { parse } from 'node-html-parser'

export const fetchAbility = async (abilityId, locale = 'en') => {
    const localePath = locale === 'en' ? '' : locale + '/'

    try {
        console.log('Fetching ability', abilityId)
        const response = await fetch(`https://wowhead.com/${localePath}spell=${abilityId}`, {
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
                'Cache-Control': 'max-age=0',
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
            }
        })
        const root = parse(await response.text())

        const ability = {}
        ability.id = abilityId
        ability.name = findName(root)
        ability.castTime = findDetails(root, 'Cast time', parseFloat)
        ability.range = findDetails(root, 'Range', parseFloat)
        ability.icon = findIcon(root)

        return ability

    } catch (e) {
        console.error(`Failed to fetch ability ${abilityId}:`, `https://wowhead.com/${localePath}spell=${abilityId}`)
        return null
    }
}

export const fetchAbilities = async (abilityIds, locale = 'en') => {
    console.log(`Fetching ${abilityIds.length} abilities`)
    const abilities = []
    for (const abilityId of abilityIds) {
        const ability = await fetchAbility(abilityId, locale)
        if (ability) abilities.push(ability)
    }
    return abilities
}

const findName = (root) => {
    const title = root.querySelector('h1.heading-size-1')
    return title.innerText
}

const findDetails = (root, label, transform = (v) => v) => {
    const rows = root.querySelectorAll('table#spelldetails tr')
    for (const row of rows) {
        const th = row.querySelector('th')
        const td = row.querySelector('td')
        if (!th || !td) continue
        if (th.innerText !== label) continue
        return transform(td.innerText)
    }
    return null
}

const findIcon = (root) => {
    const scripts = root.querySelectorAll('script')
    for (const script of scripts) {
        if (!script.innerText.startsWith('WH.Gatherer.addData')) continue
        return script.innerText.match(/"icon":"(.*)"/)[1]
    }
    return null
}
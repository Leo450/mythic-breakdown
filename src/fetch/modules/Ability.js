import { parse } from 'node-html-parser'
import axios from 'axios'

export const fetchAbility = async (abilityId, locale = 'en') => {
    console.log(`Fetching ability ${abilityId}`)
    const localePath = locale === 'en' ? '' : locale + '/'

    try {
        const response = await axios.get(`https://wowhead.com/${localePath}spell=${abilityId}`)
        const root = parse(response.data)

        const ability = {}
        ability.id = abilityId
        ability.name = findName(root)
        ability.castTime = findDetails(root, 'Cast time', parseFloat)
        ability.range = findDetails(root, 'Range', parseFloat)
        ability.icon = findIcon(root)

        return ability

    } catch (e) {
        console.log(`Error fetching ability ${abilityId}`)
        console.error(e)
        return null
    }
}

export const fetchAbilities = async (abilityIds, locale = 'en') => {
    const abilities = []
    for (const abilityId of abilityIds) {
        const ability = await fetchAbility(abilityId, locale)
        abilities.push(ability)
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
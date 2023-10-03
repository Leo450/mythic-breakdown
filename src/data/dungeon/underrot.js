import { TARGET } from '../enum/Target'
import { ABILITY } from '../enum/Ability'
import { CAST } from '../enum/Cast'
import { DO } from '../enum/Do'

export default {
    id: 9391,
    npcs: [
        {
            // Chosen Blood Matron
            id: 131436,
            area: 0,
            abilities: [
                {
                    // Blood Harvest
                    id: 265016,
                    target: TARGET.RANDOM,
                    cast: CAST.NON_INTERRUPTIBLE,
                    is: [ABILITY.CHARGE],
                    do: [DO.HEAL]
                },
                {
                    // Savage Cleave
                    id: 265019,
                    target: TARGET.NONE,
                    cast: CAST.NON_INTERRUPTIBLE,
                    is: [ABILITY.FRONTAL.STATIC, ABILITY.DEBUFF.BLEED],
                    do: [DO.DODGE],
                    important: true
                },
                {
                    // Warcry
                    id: 265081,
                    target: TARGET.ALLY,
                    cast: CAST.NON_INTERRUPTIBLE,
                    is: [ABILITY.BUFF.BUFF],
                    do: [DO.DISENRAGE]
                }
            ]
        },
        {
            // Fetid Maggot
            id: 130909,
            area: 0,
            abilities: [
                {
                    // Rotten Bile,
                    id: 265540,
                    target: TARGET.RANDOM,
                    cast: CAST.NON_INTERRUPTIBLE,
                    is: [ABILITY.FRONTAL.STATIC],
                    do: [DO.STUN, DO.DODGE],
                    important: true
                }
            ]
        },
        {
            // Fanatical Headhunter
            id: 133663,
            area: 0,
            abilities: [
                {
                    // Hooked Snare,
                    id: 265377,
                    target: TARGET.RANDOM,
                    cast: CAST.NON_INTERRUPTIBLE,
                    is: [ABILITY.IMMOBILIZE.NET, ABILITY.DOT],
                    do: [DO.FREE]
                },
                {
                    // Barbed Spear
                    id: 265376,
                    target: TARGET.RANDOM,
                    cast: CAST.NON_INTERRUPTIBLE,
                    is: [ABILITY.DAMAGE.CHUNK],
                    do: [DO.HEAL, DO.STUN]
                }
            ]
        },
        {
            // Devout Blood Priest
            id: 131492,
            area: 0,
            abilities: [
                {
                    // Gift of G'huun
                    id: 265091,
                    target: TARGET.ALLY,
                    cast: CAST.INTERRUPTIBLE,
                    is: [ABILITY.BUFF.ENRAGE],
                    do: [DO.INTERRUPT, DO.DISENRAGE],
                    important: true
                },
                {
                    // Dark Reconstitution
                    id: 265089,
                    target: TARGET.ALLY,
                    cast: CAST.INTERRUPTIBLE,
                    is: [ABILITY.HEAL.CHUNK],
                    do: [DO.INTERRUPT],
                    important: true
                }
            ]
        },
        {
            // Blood Tick
            id: 132051,
            area: 0,
            abilities: [
                {
                    // Serrated Fangs
                    id: 260455,
                    target: TARGET.NONE,
                    cast: CAST.ON_DEATH,
                    is: [ABILITY.DEBUFF.BLEED],
                    do: [DO.DELAY_DEATH]
                }
            ]
        },
        {
            // Befouled Spirit
            id: 133685,
            area: 0,
            abilities: [
                {
                    // Dark Omen
                    id: 265568,
                    target: TARGET.RANDOM,
                    cast: CAST.NON_INTERRUPTIBLE,
                    is: [ABILITY.CHANNEL, ABILITY.DAMAGE.TICKS, ABILITY.AOE.PULSE],
                    do: [DO.HEAL, DO.RUN_AWAY]
                },
                {
                    // Harrowing Despair
                    id: 278755,
                    target: TARGET.ALL,
                    cast: CAST.INTERRUPTIBLE,
                    is: [ABILITY.DAMAGE.CHUNK],
                    do: [DO.INTERRUPT]
                }
            ]
        },
        {
            // Living Rot
            id: 133852,
            area: 1,
            abilities: [
                {
                    // Wave of Decay
                    id: 265668,
                    target: TARGET.RANDOM,
                    cast: CAST.INTERRUPTIBLE,
                    is: [ABILITY.AOE.SWIRL],
                    important: false
                }
            ]
        },
        {
            // Diseased Lasher
            id: 133870,
            area: 1,
            abilities: [
                {
                    // Decaying Mind
                    id: 278961,
                    target: TARGET.RANDOM,
                    cast: CAST.INTERRUPTIBLE,
                    is: [ABILITY.STUN, ABILITY.DEBUFF.ABSORB_HEAL],
                    do: [DO.INTERRUPT],
                    important: true
                }
            ]
        },
        {
            // Feral Bloodswarmer
            id: 133835,
            area: 1,
            abilities: [
                {
                    // Thirst For Blood
                    id: 266107,
                    target: TARGET.RANDOM,
                    cast: CAST.INSTANT,
                    is: [ABILITY.FIXATE],
                    do: [DO.STUN, DO.RUN_AWAY]
                },
                {
                    // Sonic Screech
                    id: 266106,
                    target: TARGET.NONE,
                    cast: CAST.INTERRUPTIBLE,
                    is: [ABILITY.SILENCE],
                    do: [DO.INTERRUPT]
                }
            ]
        }
    ]
}
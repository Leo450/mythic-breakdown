<script setup>
    import { ref, watch } from 'vue'
    import { getDungeonData } from '@/data'
    import { I18n } from '@/modules/I18n'
    import Npc from '@/components/molecule/Npc.vue'
    import Icon from '@/components/atom/Icon.vue'

    const props = defineProps({
        dungeon: { type: String }
    })

    const i18n = I18n()

    const dungeonId = ref(null)
    const npcByArea = ref([])

    watch(() => props.dungeon, async () => {
        const dungeonData = await getDungeonData(props.dungeon)
        if (!dungeonData) return
        dungeonId.value = dungeonData.id
        npcByArea.value = []
        dungeonData.npcs.forEach((npc) => {
            if (!npcByArea.value[npc.area]) {
                npcByArea.value[npc.area] = []
            }
            npcByArea.value[npc.area].push(npc)
        })
    }, { immediate: true })
</script>

<template>
    <main class="main-dungeon">
        <div class="main-dungeon__head flex items-center justify-center my-8">
            <h1 class="text-5xl font-bold uppercase">
                {{ i18n.t(`dungeon:${dungeon}`) }}
            </h1>
            <a
                :href="`https://www.wowhead.com/zone=${dungeonId}`"
                target="_blank"
                class="ml-2"
            >
                <Icon
                    icon="launch"
                    color="yellow"
                    class="ml-2" />
            </a>
        </div>
        <section
            v-for="(npcArea, i) in npcByArea"
            :key="i"
            class="section-area flex flex-col items-center mb-4"
        >
            <div class="section-area__head">
                <h2 class="section-area__title font-bold uppercase">
                    {{ i18n.t(`area:freehold:${i}`, `Area ${i + 1}`) }}
                </h2>
            </div>
            <div class="section-area__body">
                <Npc
                    v-for="npc in npcArea"
                    :key="npc.id"
                    :npc="npc"
                />
            </div>
        </section>
    </main>
</template>

<style lang="scss">
    .section-area {
        &__title {
            opacity: .5;
        }
    }
</style>

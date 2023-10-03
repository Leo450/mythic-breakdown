<script setup>
    import Icon from '@/components/atom/Icon.vue'
</script>

<template>
    <main class="main-not-found h-screen flex items-center justify-center">
        <div class="flex items-center">
            <div class="main-not-found__icon">
                <Icon
                    class="main-not-found__icon-head"
                    icon="face_unlock"
                />
                <Icon
                    class="main-not-found__icon-question-mark"
                    icon="question_mark"
                />
            </div>
            <div class="ml-6">
                <h1 class="main-not-found__title font-bold uppercase">
                    Page not found
                </h1>
                <p>
                    The page you are looking for does not exist.
                </p>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
    .main-not-found {
        &__icon {
            position: relative;

            &-head {
                font-size: 200px;
                color: $color-yellow;
            }
            &-question-mark {
                position: absolute;
                bottom: 180px;
                left: 140px;
                font-size: 100px;
                color: $color-purple;
            }
        }

        &__title {
            font-size: 50px;
            color: $color-yellow;
        }
    }
</style>
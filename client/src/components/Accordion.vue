<template>
    <!--<div class="reb-Accordion">
        <div class="reb-Accordion__list">
            <div v-for="item in items"
                 class="reb-Accordion__item"
                 :class="{ 'reb-CatFilter__item-inactive': !item.enabled }"
                 v-on:click="itemClick(item)"
            >
                <span>
                    &lt;!&ndash;'../assets/' + item.icon + '.svg'"&ndash;&gt;
                    &lt;!&ndash;<img :src="itemToIconSrc(item)" width="24px" height="24px"/>&ndash;&gt;
                    &lt;!&ndash;<img :src="../assets/' + item.icon + '.svg'" width="24px" height="24px"/>&ndash;&gt;
                </span>
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>-->
    <v-list>
        <v-list-item-group
                v-model="model"
                :multiple="false"
                :mandatory="false"
                color="indigo"
        >
            <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="{ path: item.path}"
            >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
    export default {
        name: "Accordion",
        data: () => ({
            items: [
                {id: 'home', text: 'Задачи', icon: 'mdi-star', path: '/'},
                {id: 'forms', text: 'Конструктор форм', icon: 'mdi-wrench', path: '/forms'},
                {id: 'processes', text: 'Конструктор процессов', icon: 'mdi-shuffle-variant', path: '/processes'}
            ],
            model: 'cForm'
        }),
    }
</script>

<style scoped>

</style>
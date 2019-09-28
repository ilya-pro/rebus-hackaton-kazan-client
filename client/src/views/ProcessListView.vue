<template>
    <v-app>
        <v-navigation-drawer app
                             permanent
                             disable-resize-watcher>
            <Logo/>
            <v-divider></v-divider>
            <Accordion/>
        </v-navigation-drawer>
        <v-content>
            <Header/>
            <v-divider></v-divider>
            <h3>Процессы</h3>
        </v-content>
    </v-app>
</template>

<script>
    import Logo from "../components/Logo";
    import Accordion from "../components/Accordion";
    import Header from "../components/Header";
    export default {
        name: "ProcessListView",
        components: {Header, Accordion, Logo}
    }
</script>

<style scoped>

</style>
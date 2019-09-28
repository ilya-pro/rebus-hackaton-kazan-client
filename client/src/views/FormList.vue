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
            <div>Формы</div>
        </v-content>
    </v-app>
</template>

<script>
    import Accordion from "../components/Accordion";
    import Header from "../components/Header";
    import Logo from "../components/Logo";
    export default {
        name: "FormList",
        components: {Logo, Header, Accordion}
    }
</script>

<style scoped>

</style>
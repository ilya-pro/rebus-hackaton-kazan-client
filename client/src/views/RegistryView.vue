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
            <RegistryList/>
        </v-content>
    </v-app>
</template>

<script>
    import RegistryList from "../components/RegistryTable";
    import Header from "../components/Header";
    import Logo from "../components/Logo";
    import Accordion from "../components/Accordion";
    export default {
        name: "RegistryView",
        components: {Accordion, Logo, Header, RegistryList}
    }
</script>

<style scoped>

</style>
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
            <FormTable/>
        </v-content>
    </v-app>
</template>

<script>
    import Accordion from "../components/Accordion";
    import Header from "../components/Header";
    import Logo from "../components/Logo";
    import FormTable from "../components/FormTable";
    export default {
        name: "FormList",
        components: {FormTable, Logo, Header, Accordion}
    }
</script>

<style scoped>

</style>
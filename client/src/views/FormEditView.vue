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
            <FormEdit/>
        </v-content>
    </v-app>
</template>

<script>
    import FormEdit from "../components/FormEdit";
    import Logo from "../components/Logo";
    import Accordion from "../components/Accordion";
    import Header from "../components/Header";
    export default {
        name: "FormEditView",
        components: {Header, Accordion, Logo, FormEdit}
    }
</script>

<style scoped>

</style>
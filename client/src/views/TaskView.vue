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
            <TaskEdit/>
        </v-content>
    </v-app>
</template>

<script>
    import Logo from "../components/Logo";
    import Accordion from "../components/Accordion";
    import Header from "../components/Header";
    import TaskEdit from "../components/TaskEdit";
    export default {
        name: "TaskView",
        components: {TaskEdit, Header, Accordion, Logo}
    }
</script>

<style scoped>

</style>
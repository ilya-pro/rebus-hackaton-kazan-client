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
      <div>Общая</div>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from '../components/HelloWorld';
//import Accordion from "../components/Accordion";
import Logo from "../components/Logo";
import Accordion from "../components/Accordion";
import Header from "../components/Header";

export default {
  /*data: () => ({
    items: [
      {id: 'home', text: 'Задачи', icon: 'mdi-star', path: '/'},
      {id: 'forms', text: 'Конструктор форм', icon: 'mdi-wrench', path: '/forms'},
      {id: 'processes', text: 'Конструктор процессов', icon: 'mdi-shuffle-variant', path: '/processes'}
    ],
    model: 'cForm'
  }),*/
  components: {
    Header,
    Accordion,
    Logo
    //ccordion
  }
};
</script>

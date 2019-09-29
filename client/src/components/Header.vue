<template>
    <div class="reb-Header d-flex justify-space-between">
        <!--<div>Шапка {{ $route.params }} q {{ $route.query }} p {{ $route.path }}</div>-->
        <v-btn class="mx-2" dark fab small depressed color="blue"
               v-show="$route.name === 'processes' || $route.name === 'forms'"
               v-on:click.native="addButtonHandler()"><!--color="primary" dark mdi-add_circle mdi-checkbox-marked-circle-->
            <v-icon>mdi mdi-plus</v-icon>
        </v-btn>
        <v-btn class="justify-end" text>Выйти</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            addButtonHandler: function () {
                //console.info('yo', this.$route.name);
                if (this.$route.name === 'processes') {
                    this.$router.push('processes/new')
                } else if (this.$route.name === 'forms') {
                    this.$router.push('forms/new')
                }
            }
        }
    }
</script>

<style>
    .reb-Header {
        height: 75px;
        padding: 5px;
    }
</style>
<template>
    <div class="reb-TaskEdit">
        <v-progress-circular
                v-show="!isDataLoaded"
                :size="50"
                color="primary"
                indeterminate
        ></v-progress-circular>
        <h3>Подача заявления</h3>
        <!--:counter="10"-->
        <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="ФИО"
                required
        ></v-text-field>
        <v-btn class="mx-2" dark fab small depressed color="blue"
               v-show="$route.name === 'processes' || $route.name === 'forms'"
               v-on:click.native="addButtonHandler()"><!--color="primary" dark mdi-add_circle mdi-checkbox-marked-circle-->
            <v-icon>mdi mdi-plus</v-icon>
            Завершить
        </v-btn>
        <v-btn depressed small color="primary"
               v-on:click.native="completeClick()">Завершить
        </v-btn>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "TaskEdit",
        data () {
            return {
                isDataLoaded: false,
                firstname: 'asdf',
                nameRules: [
                    v => !!v || 'ФИО обязательно',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
                ],
            }
        },
        mounted() {
            this.updateData();
        },
        methods: {
            completeClick () {
                console.log('compl');
            }
        }
    }
</script>

<style>
    .reb-TaskEdit {
        padding: 5px;
    }
</style>
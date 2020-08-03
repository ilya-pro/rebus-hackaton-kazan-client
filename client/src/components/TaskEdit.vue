<template>
    <div class="reb-TaskEdit">
        <v-progress-circular
                v-show="!isDataLoaded"
                :size="50"
                color="primary"
                indeterminate
        ></v-progress-circular>
        <h3 v-if="taskMode === 'tickets_registration'">Подача заявления</h3>
        <h3 v-if="taskMode === 'r3'">Запрос в МВД</h3>
        <h3 v-if="taskMode === 'tickets_result'">Принять решение</h3>
        <!--:counter="10"-->
        <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="ФИО"
                required
        ></v-text-field>

        <v-divider></v-divider>
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
                isDataLoaded: true,
                taskMode: null,
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
            updateData () {
                let id = this.$route.params.id;
                console.log('updateData', id);
                axios
                    .get('http://10.42.0.1:8000/tasks/form/'+id+'/')
                    .then(response => {
                        this.taskMode = response.data.key;
                        //console.log(response);
                        //this.items = response.data;
                        this.isDataLoaded = true;

                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            completeClick () {
                let id = this.$route.params.id;
                console.log('compl', id);
                axios
                    .post('http://10.42.0.1:8000/tasks/'+id+'/complete/')
                    .then((/*response*/) => {
                        //console.log(response);
                        //this.items = response.data;
                        this.isDataLoaded = true;
                        this.$router.push('/tasks')
                    })
                    .catch(error => {
                        console.log(error.response);
                    });

            }
        }
    }
</script>

<style>
    .reb-TaskEdit {
        padding: 5px;
    }
</style>

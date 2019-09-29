<template>
    <div>
        <v-data-table
                v-show="isDataLoaded"
                :headers="headers"
                :items="items"
                :items-per-page="5"
                class="elevation-1"
                hide-default-footer
                single-select
                @click:row="clicked">
        </v-data-table>
        <v-progress-circular
                v-show="!isDataLoaded"
                :size="50"
                color="primary"
                indeterminate>
        </v-progress-circular>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "TaskTable",
        data () {
            return {
                headers: [
                    {
                        text: 'Наименование задачи',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Исполнитель', value: 'assignee' },
                    { text: 'Создано', value: 'created' }//,
                    //{ text: 'Услуга', value: 'process' }
                ],
                //debug
                items: [
                    {
                        id: '12227',
                        name: 'Зарегистрировать заявления 22',
                        assignee: 'GusarovAA',
                        created: '2019-09-29T00:57:50.160+0000',
                        process: 'Выдача и аннулирование охотничьего билета единого федерального образца'
                    }
                ],
                isDataLoaded: false
            }
        },
        mounted() {
            this.updateData();
        },
        methods: {
            updateData() {
                this.isDataLoaded = false;
                axios
                    .get('http://10.42.0.1:8000/tasks/?assignee=GusarovAA')
                    .then(response => {
                        //console.log(response);
                        this.items = response.data;
                        this.isDataLoaded = true;
                    })
                    .catch(error => {
                        debugger;
                        console.log(error.response);
                    });
                /*var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    console.log(xhr.responseText);
                    debugger;
                };
                xhr.onreadystatechange = function () {
                    console.log(xhr.responseText);
                    debugger;
                };
                xhr.open("GET", "http://10.42.0.1:8000/tasks/?assignee=GusarovAA", true);
                xhr.send();*/
            },

            clicked(item) {
                //this.expanded.push(value)
                let key = item.id;
                //console.log(item.id);
                //TODO send result
                this.$router.push('tasks/'+ key);
            }
        }

    }
</script>

<style scoped>

</style>
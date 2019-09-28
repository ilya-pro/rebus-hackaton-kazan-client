<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="items"
                :items-per-page="5"
                class="elevation-1"
                hide-default-footer
                single-select>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: "FormTable",
        data () {
            return {
                headers: [
                    {
                        text: 'UUID',
                        align: 'left',
                        sortable: false,
                        value: 'uuid',
                    },
                    { text: 'Наименование', value: 'name' },
                    { text: 'Ключ', value: 'key' },
                    { text: 'Код услуги', value: 'code' }
                ],
                items: [
                    {
                        uuid: 'me_terminate_registration',
                        name: 'МЕ.Реистрация.Прекращение.Выписка',
                        key:  'me_terminate_registration',
                        code: 'ME'
                    },
                    {
                        uuid: 'me_terminate_registration',
                        name: 'МЕ.Реистрация.Прекращение.Выписка',
                        key:  'me_terminate_registration',
                        code: 'ME'
                    },{
                        uuid: 'me_terminate_registration',
                        name: 'МЕ.Реистрация.Прекращение.Выписка',
                        key:  'me_terminate_registration',
                        code: 'ME'
                    },{
                        uuid: 'me_terminate_registration',
                        name: 'МЕ.Реистрация.Прекращение.Выписка',
                        key:  'me_terminate_registration',
                        code: 'ME'
                    },{
                        uuid: 'me_terminate_registration',
                        name: 'МЕ.Реистрация.Прекращение.Выписка',
                        key:  'me_terminate_registration',
                        code: 'ME'
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>
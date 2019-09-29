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
        name: "RegistryList",
        data () {
            return {
                headers: [
                    {
                        text: 'Номер билета',
                        align: 'left',
                        sortable: false,
                        value: 'ticket_number',
                    },
                    { text: 'ФИО', value: 'owner_name' },
                    { text: 'документ', value: 'owner_doc' },
                    { text: 'Дата выдачи', value: 'date_issue' }
                ],
                items: [
                    {
                        ticket_number: '543',
                        owner_name: 'Пирогов С. В.',
                        owner_doc:  '23',
                        date_issue: '2019-09-29'
                    }
                ]
            }
        }

    }
</script>

<style scoped>

</style>
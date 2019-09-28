<template>
    <div class="reb-Header d-flex justify-space-between">
        <div>Шапка {{ $route.params }} q {{ $route.query }} p {{ $route.path }}</div>
        <v-btn class="justify-end" text>Выйти</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style>
    .reb-Header {
        height: 75px;
        padding: 5px;
    }
</style>
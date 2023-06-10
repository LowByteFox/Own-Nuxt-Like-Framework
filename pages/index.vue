<script setup>
    import Counter from "/counter.vue";
    import Main from "/main.vue";
</script>

<template>
    <Main>
        <h1>Hello, World!</h1>
        <Counter />
    </Main>
</template>

<style>
    @import url("/IBMPlexSans-Regular.ttf");
    body {
        margin: 0;
        padding: 0;
    }

    * {
        font-family: 'IBM Plex Sans', sans-serif;
    }
</style>

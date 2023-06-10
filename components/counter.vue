<script setup>
    import { ref } from "vue";
    const count = ref(0);
    const increment = () => {
        count.value++;
    };
</script>

<template>
    <div>
        <h3>{{ count }}</h3>
        <button @click="increment">Increment</button>
    </div>
</template>

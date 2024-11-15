<template>
    <button @click="likePost">
        Like Counter
    </button>
</template>
    
    <script lang="ts" setup>
    const likePost = () => {
        console.log('likePost');
    }
    </script>
    
<style scoped>
    button {
        border: none;
        background: linear-gradient(cyan,blue);
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        transition: all 0.8s;
        cursor: pointer;
    }
    button:hover {
        transform: scale(1.1);
        background: blue;
    }
</style>
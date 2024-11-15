<template>

    <div v-if="isLoading">
        Loading..
    </div>
    <button v-else-if="likeCount===0" @click="likePost">
        Like this post
    </button>
    <button v-else @click="likePost">
        Likes {{ likeCount }}
    </button>
</template>
    
<script lang="ts" setup>
import { ref, watch } from 'vue';
import confetti from 'canvas-confetti';
import debounce from 'lodash.debounce';

interface Props{
    postId: string
}

const props= defineProps<Props>();

const likeCount= ref(0);
const likeClick= ref(0);
const isLoading= ref(true);

watch(likeCount,debounce(()=>{
    fetch(`/api/posts/likes/${props.postId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes: likeClick.value})
    });
    likeClick.value= 0;
    
},500))

    const likePost = () => {
        likeCount.value= likeCount.value + 1;
        likeClick.value= likeClick.value + 1;
        confetti({
            particleCount: 100,
            spread: 70,
            origin:{
                x:Math.random(),
                y:Math.random() - 0.2
            }

        })
    }

const getCurrentLikles = async()=>{
    const resp = await fetch(`/api/posts/likes/${props.postId}`);

    if (!resp.ok) return;

const data =  await resp.json();

likeCount.value= data.likes;
isLoading.value= false;

}

getCurrentLikles();

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
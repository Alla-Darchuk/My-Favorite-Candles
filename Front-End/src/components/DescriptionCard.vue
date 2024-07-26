<template>
    <div class="description-card" @click="closeCard" >
        <!-- <h1>This is description</h1> -->
      <h2 class="description-header">{{ candle.title }}</h2>
        <div class="description">
            <h2>Матеріал:</h2>
            <h2>{{ candle.material }}</h2>
            <h2>Аромат:</h2>
            <h2>{{ candle.aromas }}</h2>
            <h2>Час горіння:</h2>
            <h2>{{ candle.burning_time }}</h2>
            <h2>Ціна:</h2>
            <h2>{{ candle.price}} грн</h2>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';


 defineProps({
  candle: Object,
  index: Number
})

const emit = defineEmits(['close']);

const closeCard = () => {
  emit('close');
};
// console.log('price:'+ candle.price)
</script>


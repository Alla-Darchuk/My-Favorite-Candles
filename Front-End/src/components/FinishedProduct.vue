<template>
    <div class="app-item finished-product">
        <h1>Готові вироби</h1>
       
        <h2>Представленні свічки вже виготовленні. 
        Для перегляду деталей свічки натисніть на її фото</h2>
      
        <Carousel3d @after-slide-change="updateCurrentIndex" 
        :on-main-slide-click="click_function" 
        :clickable="true" :width="540" :height="405"
        class='carousel'>
            <Slide v-for="(slide, index) in slides" 
            :key="index" :index="index" class="slide" >
                    <img :src="slide.image" :alt="slide.title" />
                    <description-card
                    v-if="showDescription[index]"
                        :candle="slide"
                    />
            </Slide>
        </Carousel3d>

        <button @click="orderThisCandle" >Замовити свічку</button>
    </div>
</template>

<script setup>
import DescriptionCard from './DescriptionCard.vue';
import { ref } from 'vue';


import imagePeony from './pictures/peony.jpg'
import imageJasmine from './pictures/jasmine.jpg'
import imageLavanda from './pictures/Lavanda.jpg'
import image1 from './pictures/home1.jpg'
import image2 from './pictures/girls.jpg'
import image3 from './pictures/360_F_406328394_cF4ZguwWUbIPFAZjzetSjJ1TiFcAVKOx.jpg'

const slides = ref([
    {image: imagePeony, title: 'peony 1', price: 60, aromas:'Піонія', burning_time: '2 години', material: 'Харчовий парафін'},
    {image: imageJasmine, title: 'jasmine', price: 60, aromas:'Жасмін', burning_time: '2 години', material: 'Соєвий віск'},
    {image: imageLavanda, title: 'Lavanda 1', price: 60, aromas:'Лаванда', burning_time: '2 години', material: 'Харчовий парафін'},
    {image: image1, title: 'peony 1', price: 80, aromas:'Піонія', burning_time: '2 години', material: 'Соєвий віск'},
    {image: image2, title: 'Lavanda 2', price: 80, aromas:'Піонія', burning_time: '2 години', material: 'Харчовий парафін'},
    {image: image3, title: 'Lavanda 2', price: 80, aromas:'Піонія', burning_time: '2 години', material: 'Соєвий віск'},
    {image: imageJasmine, title: 'Lavanda 2', price: 80, aromas:'Жасмін', burning_time: '2 години', material: 'Соєвий віск'},
    {image: image2, title: 'Lavanda 2', price: 80, aromas:'Піонія', burning_time: '2 години', material: 'Харчовий парафін'}
])
const showDescription = ref([false, false, false,false, false, false,false, false]);
const currentIndex = ref(0);

const click_function = (obj) =>{
    showDescription.value[obj.index] = !showDescription.value[obj.index];
}
const updateCurrentIndex = (index) => {
  currentIndex.value = index;
};

const orderThisCandle = () =>{
    console.log(slides.value[currentIndex.value])
}

</script>


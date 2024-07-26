<template>
    <div class="app-item gallery">
        <h1 data-aos="zoom-in-up" data-aos-duration="1000">Галерея</h1>
        <!-- <h2>Тут ви можете переглянути свічки вже готові до відправлення</h2> -->
        <Carousel3d class='carousel' :width="540" :height="405" data-aos="zoom-in" data-aos-duration="1500">
            <Slide v-for="(slide, index) in slides" :key="index" :index="index" class="slide" >
                    <img :src="slide.image" :alt="slide.title" />
                    <div class="gallery-description-footer">
                    <h2 >{{ slide.material }}: {{ slide.priсe }}грн</h2>
                    </div>
            </Slide>
        </Carousel3d>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import image1 from './pictures/inGlass.jpg'
import image2 from './pictures/girls.jpg'
import image3 from './pictures/star.jpg'
import image4 from './pictures/eggs.jpg'
import image5 from './pictures/walves.jpg'
import image6 from './pictures/woman1.jpg'
import image7 from './pictures/girl.jpg'

const slides = ref([
    {image: image1, title: 'peony 1', priсe: 200, aromas:'Пеонія', burning_time: '2 години', material: 'Соєвий віск'},
    {image: image2, title: 'jasmine', priсe: 150, aromas:'Жасмін', burning_time: '2 години', material: 'Соєвий віск'},
    {image: image3, title: 'Lavanda 1', priсe: 80, aromas:'Лаванда', burning_time: '2 години', material: 'Харчовий парафін'},
    {image: image4, title: 'peony 1', priсe: 80, aromas:'Пеонія', burning_time: '2 години', material: 'Соєвий віск'},
    {image: image5, title: 'Lavanda 2', priсe: 150, aromas:'Пеонія', burning_time: '2 години', material: 'Харчовий парафін'},
    {image: image6, title: 'Lavanda 2', priсe: 200, aromas:'Пеонія', burning_time: '2 години', material: 'Соєвий віск'},
    {image: image7, title: 'Lavanda 2', priсe: 120, aromas:'Жасмін', burning_time: '2 години', material: 'Харчовий парафін'},
])
</script>


<script setup>
import { reactive, ref } from 'vue';
import form1 from './pictures/girl-form.jpg';
import form2 from './pictures/egg-form.jpg';
import form3 from './pictures/woman-form.jpg';
import form4 from './pictures/walves-form.jpg';
import form5 from './pictures/spiral-form.jpg';
import form6 from './pictures/inGlass-form.jpg';
import form7 from './pictures/penis-form.jpg';
import form8 from './pictures/cone-conch-form.jpg';
import form9 from './pictures/flower-ball-s-form.jpg';
import form10 from './pictures/flower-ball-m-form.jpg';

import craft1 from './pictures/eggs.jpg';
import craft2 from './pictures/girl.jpg';
import craft3 from './pictures/inGlass.jpg';
import craft4 from './pictures/spiral.jpg';
import craft5 from './pictures/walves.jpg';
import craft6 from './pictures/woman1.jpg';
import craft7 from './pictures/girls.jpg';

const carousel = ref(null)
const basket = reactive([])
const candle = reactive({
    img: '',
    form: '',
    material: '',
    color: '',
    aroma: '',
    comment: ''
})

const materials = ['Coєвий віск', 'Харчовий парафін']
const aromas = ['Жасмін', 'Піонія', 'Лаванда']
const colors = ['Червоний', 'Жовтий', 'Синій', 'Зелений', 'Бордовий', 'Пастельно фіолетовий', 'Фіолетовий', 'Голубий', 'Рожевий', 'Бірюзовий']
const forms = ref([
    {img:form1, title:'Дівчина',price1: 100, price2:170},
    {img:form2, title:'Яйце',price1: 60, price2:90},
    {img:form3, title:'Жінка',price1: 120, price2:200},
    {img:form4, title:'Хвилі',price1: 150, price2:230},
    {img:form5, title:'Спіраль',price1: 150, price2:230},
    {img:form6, title:'В стакані',price1: 120, price2:200},
    {img:form7, title:'Пеніс',price1: 150, price2:210},
    {img:form8, title:'Конус з ракушок',price1: 100, price2:170},
    {img:form9, title:'Квітковий шар 6см',price1: 70, price2:100},
    {img:form10, title:'Квітковий шар 7см',price1: 80, price2:120}
])
const crafts = reactive([
    {img: craft1, title: 'Яйце', price: 60, aromas:'Піонія', burning_time: '1 година', material: 'Харчовий парафін'},
    {img: craft7, title: 'Дівчина', price: 60, aromas:'Жасмін', burning_time: '1.5 години', material: 'Соєвий віск'},
    {img: craft2, title: 'Дівчина', price: 60, aromas:'Лаванда', burning_time: '1.5 години', material: 'Харчовий парафін'},
    {img: craft3, title: 'В стакані', price: 80, aromas:'Піонія', burning_time: '25 годин', material: 'Соєвий віск'},
    {img: craft4, title: 'Спіраль', price: 80, aromas:'Піонія', burning_time: '20 години', material: 'Харчовий парафін'},
    {img: craft5, title: 'Хвилі', price: 80, aromas:'Піонія', burning_time: '20 години', material: 'Соєвий віск'},
    {img: craft6, title: 'Жінка', price: 80, aromas:'Жасмін', burning_time: '2 години', material: 'Соєвий віск'}
])
const formCrafts = reactive([])
let checkout = reactive({visible:false})
const client = reactive({
  name: '',
  surname: '',
  phone: '',
  payment: '',
  delivery: '',
  address: '',
  comment: ''
})

const paymentMethod  = [`Оплата на карту`, `Накладений платіж`]
const deliveryMethod = ['Нова Пошта', 'Укр пошта']

function updateForm(index){
    if(index === 0){
        candle.form = ''
    } else{
        candle.form = forms.value[index-1].title
        candle.img = forms.value[index-1].img
        formCrafts.splice(0,formCrafts.length)
        for(let i=0; i<crafts.length; i++){
            if(crafts[i].title == forms.value[index-1].title){
                let craft = crafts[i]
                craft.visible = false
                formCrafts.push(crafts[i])
            }
        }
    } 
}

function showModalWindow(index){
    // console.log('index = '+index)
    formCrafts[index].visible = true
}
function showingCheckout(){
    checkout.visible = true
    console.log("showCheckout = "+checkout.visible)
}

function addToCard(index){
    let craft = {
        img: formCrafts[index].img,
        form: formCrafts[index].title,
        material: formCrafts[index].material,
        color: 'Як на фото',
        aroma: formCrafts[index].aromas,
        comment: 'Готова до відправлення',
        number: 1,
        price:formCrafts[index].price
    }
    basket.push(craft)
    closeWindow(index)
    formCrafts.splice(index,1)

}
function closeWindow(index){
    formCrafts[index].visible = false
}
function closeCheckout(){
    checkout.visible = false
}
function submitHandler() {
    if(candle.form.length == 0){
        alert('Будь-ласка, виберіть форму для своєї свічки')
    } else {
        let newCandle = JSON.parse(JSON.stringify(candle))
        console.log(newCandle)
        newCandle.number = 1
        const title = (e) => e.title == newCandle.form
        console.log(forms.value[0].title)
        // console.log(newCandle.title)
        let index = forms.value.findIndex(title)
        console.log(index)
        if(newCandle.material == 'Харчовий парафін'){
            newCandle.price = forms.value[index].price1
        } else {
            newCandle.price = forms.value[index].price2
        }
        basket.push(newCandle)
        candle.img = ''
        candle.form = ''
        candle.material = ''
        candle.color = ''
        candle.aroma = ''
        candle.comment = ''
        carousel.value.goSlide(0)
    }
}
function deliteCandleFromOrder(index){
    basket.splice(index, 1);
}
function createNewOrder(){
    closeCheckout()
    console.log('We have new order: user + order')
    console.log(client)
    console.log(basket)
    basket.splice(0,basket.length)
    client.name = ''
    client.surname= ''
    client.phone= ''
    client.payment= ''
    client.delivery= ''
    client.address= ''
    client.comment= ''
}

</script>

<template>
    <div class="app-item constructor">
        <h1>Зробити замовлення</h1>
        <div class="content">
            <form  @submit.prevent="submitHandler">
                <div style="display: flex;">
                    <div class="colum">
                        <carousel-3d 
                        ref="carousel"
                        @after-slide-change="updateForm"
                        :perspective="180"
                        :controls-visible="true"
                        :width="320" 
                        :height="270"
                        :display="1">
                            <slide :index="0" class="slide form-first-slide">
                                <div>
                                    <h2>Листайте, та виберіть бажану форму свічки</h2>
                                </div>
                            </slide>
                            <slide v-for="(formItem, i) in forms" :index="i+1" class="slide">
                                <img :src="formItem.img" :alt="formItem.title">
                                <div class="gallery-description-footer">
                                    <h2 >{{ formItem.title }}: {{ formItem.price1 }}/{{ formItem.prise2 }}грн</h2>
                                </div>
                            </slide>
                        </carousel-3d>
                    </div>
                    <div  class="colum">
                        <select v-model="candle.material" class="input select" required>
                            <option value="" disabled selected class="opinion-clasic"> Виберіть матеріал:</option>
                            <option v-for="material in materials" :value="material" class="opinion-clasic"> {{material}}</option>
                        </select>
                        <select v-model="candle.color" class="input select" required>
                            <option value="" disabled selected class="opinion-color"> Виберіть колір:</option>
                            <option v-for="color in colors" :value="color" class="opinion-color">
                                <!-- <div class="circle" style="background-color: blue;"></div> -->
                                <span> {{ color }} </span>
                                </option>
                        </select>
                        <select v-model="candle.aroma" class="input select" required>
                            <option value="" disabled selected class="opinion-clasic"> Виберіть аромат:</option>
                            <option v-for="aroma in aromas" :value="aroma" class="opinion-clasic">{{ aroma }}</option>
                        </select>
                    </div>
                </div>
                <textarea v-model="candle.comment" 
                    placeholder="Напишіть коментар до свічки якщо це потрібно"
                    class="input textarea">
                </textarea>
                <div class="finished-crafts" v-if="formCrafts.length>0">
                    <h2>Свічки готові до відправлення:</h2>
                    <div class="crafts">
                        <div class="craft" v-for="(craft, i) in formCrafts" :key="i" >
                            <img :src="craft.img" :alt="craft.title" @click="showModalWindow(i)">
                            <div class="details-window" v-if="craft.visible">
                                <div class="craft-item">
                                    <img :src="craft.img" :alt="craft.title">
                                    <!-- <div></div> -->
                                    <h1 class="craft-header">{{ craft.title }}</h1>
                                    <div class="craft-details">
                                        <h2>Матеріал</h2>
                                        <h2>{{ craft.material }}</h2>
                                        <h2>Аромат</h2>
                                        <h2>{{ craft.aromas }}</h2>
                                        <h2>Час горіння</h2>
                                        <h2>{{ craft.burning_time }}</h2>
                                    </div>
                                    <div class="craft-footer">
                                        <h2>Ціна: {{ craft.price }}</h2>
                                        <button @click="addToCard(i)" >Добавити до кошика</button>
                                        <button @click="closeWindow(i)">Х</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" style="cursor: cell;">Створити свічку</button>
            </form>
            <div class="order" v-if="basket.length>0">
                <h2>Замовлення:</h2>
                <ol>
                    <li v-for="(candle, i) in basket" :key="i" class="order-item">
                        <div class="basic-information">
                            <div class="img">
                                <img :src="candle.img" :alt="candle.title">
                            </div>
                            <div class="information">
                                <h2>{{ candle.material }}</h2>
                                <h2>{{ candle.color }}</h2>
                                <h2>{{ candle.aroma }}</h2>
                            </div>
                            <div class="order-control">
                                <div @click="deliteCandleFromOrder(i)" class="button-in-basket">X</div>
                                <div class="count">
                                    <div class="button-in-basket" @click="()=>{candle.number--}"> - </div>
                                    <h2>   {{ candle.number }}   </h2>
                                    <div class="button-in-basket" @click="()=>{candle.number++}"> + </div>
                                </div>
                                <h2> Ціна: {{ candle.number*candle.price }} грн</h2>
                            </div>
                        </div>
                        <div class="additional" v-if="candle.comment.length>0">
                            <p>Коментар:  <span>{{ candle.comment }}</span></p>
                        </div>


                        <!-- <div class="order-candle-header">
                            <h2>{{ candle.form }}</h2>
                            <h2 v-if="candle.material == 'Харчовий парафін'"> {{ pri }} </h2>
                            <div @click="deliteCandleFromOrder(i)" class="remove-button">X</div>
                        </div>
                        <div class="information">
                            <p>Матеріал</p>
                            <p>Колір</p>
                            <p>Аромат</p>
                            <p>{{ candle.material }}</p>
                            <p>{{ candle.color }}</p>
                            <p>{{ candle.aroma }}</p>
                        </div>
                        <div class="additional" v-if="candle.comment.length>0">
                            <p>Коментар:  <span>{{ candle.comment }}</span></p>
                        </div> -->
                    </li>
                </ol>
                <button @click="showingCheckout" class="checkout-button">Оформити замовлення</button>
                <div v-if="checkout.visible" class="modal-checkout">
                    <form class="checkout" @submit.prevent="createNewOrder">
                        <h2>Оформлення замовлення</h2>
                        <input type="text" v-model="client.name" placeholder="Ім'я" class="input" required >
                        <input type="text" v-model="client.surname" placeholder="Прізвище" class="input" required>
                        <input type="tel" v-model="client.phone" placeholder="Моб. тел: 099..." pattern="0[0-9]{9}" class="input" required>
                        <select v-model="client.payment" class="input select" required>
                            <option value="" disabled selected class="opinion-clasic"> Метод оплати:</option>
                            <option v-for="metod in paymentMethod" :value="metod" class="opinion-clasic"> {{ metod }}</option>
                        </select>
                        <select v-model="client.delivery" class="input select" required>
                            <option value="" disabled selected class="opinion-clasic"> Спосіб доставки:</option>
                            <option v-for="metod in deliveryMethod" :value="metod" class="opinion-clasic"> {{ metod }}</option>
                        </select>
                        <input type="text" v-model="client.address" placeholder="Номер та адреса відділення" class="input" required>
                        <input type="text" v-model="client.comment" placeholder="Коментар за необхідності" class="input" >
                        <div class="buttons">
                            <button type="submit">
                                Оформити замовлення
                            </button>
                            <button @click="closeCheckout">
                                Повернутись назад
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- :perspective="180"
:controls-visible="true"  -->
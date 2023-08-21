<template>
  <h2>Carrinho</h2>
  <div class="item" v-for="product in products" :key="product.id" >
    {{ product.quantity }} 
    {{ product.title }} 
    : R$ {{ product.price }} <!-- não sei porque não mostra o totalPrice-->
  </div>
  <div> 
    <p v-show="isDelivery=='true'" class="info">Taxa de entrega: R$ {{ taxDelivery }}</p>
    <h2>Total: {{ totalPrice }}</h2>
  </div>
  <div class="info"> 
    <p> Nome: <input type="text" v-model="name"></p>
    <p><input type="radio" value="false" v-model="isDelivery">Retirar no local</p>
    <p><input type="radio" value="true" v-model="isDelivery">Entrega</p>   
    <p v-show="isDelivery=='true'"> Endereço: <textarea /></p>
  </div>
  <div>
    <button>Finalizar Compra</button>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Product } from "../entities/product.entity";

export default {
  props: {
      products: {
        type: Array as PropType<Product[]>,
        required: true
      }
    },  
  components: {
  },
  methods: {
  },
  computed: {
    taxDelivery(){
      return this.isDelivery == "true" ? 5.00 : 0.00; 
    },
    totalPrice() {
        return this.products.reduce((sum, product) => sum + (product.price * product.quantity), 0) + this.taxDelivery;
    }
  },
  data: () => (
    {
      isDelivery: "false",
      name: ""
    }),
};  
</script>

<style scoped>

.item {
    display: flex;
}

.info {
  text-align: left;
}

diva {
  border: 1px solid black;
}
</style>


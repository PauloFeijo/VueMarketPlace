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
    <p> Nome: <input type="text" class="text" v-model="name" required></p>
    <p>
      <input type="radio" value="false" v-model="isDelivery">Retirar no local
      <input type="radio" value="true" v-model="isDelivery">Entrega
    </p>   
    <p v-show="isDelivery=='true'"> 
      Endereço: <textarea class="address-text" v-model="address"></textarea></p>
  </div>
  <div>
    <button @click="$router.back">Voltar</button>
    <button @click="confirmOrder">Finalizar Compra</button>
  </div>
</template>

<script lang="ts">
  import { productsData } from "../infra/products-data";

  export default {
    methods: {
      confirmOrder(){
        if (this.name != ""){
          // como criar um novo order e passar para a order.vue?  
          this.$router.push({ name: 'order' });
        }      
      }
    },
    computed: {
      products()
      {
        return productsData.filter(x => x.quantity > 0);
      },
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
        name: "",
        address: ""
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

  .text {
    width: 100%;
  }

  .address-text {
    width: 100%;
    height: 50px;
  }
</style>


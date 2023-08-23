<template>
  <h2>Pedido</h2>
  <div class="item" v-for="product in userStore.order.products" :key="product.id" >
    {{ product.quantity }} 
    {{ product.title }} 
    : R$ {{ product.price }}
  </div>
  <div> 
    <p v-show="userStore.order.isDelivery" class="info">Taxa de entrega: R$ {{ userStore.order.taxDelivery }}</p>
    <h2>Total: {{ userStore.order.totalPrice }}</h2>
  </div>
  <div class="info"> 
    <p> Nome: {{ userStore.order.name }}</p>
  
    <p v-show="userStore.order.isDelivery"> 
      Endereço: {{ userStore.order.address }}</p>
  </div>
  <div>    
    <button @click="$router.push({ name: 'products' })">Nova Compra</button>
  </div>
</template>

<script lang="ts">
  import { Order } from "../entities/order.entity.ts";
  import { mapStores } from 'pinia';
  import useOrderStore from "../store/order-store";

  export default {
    setup() {
      //const order = 
    },
    data: () => (
    {
      //order: useOrderStore.state.order
    }),
    methods: {
      ...mapStores(useOrderStore),
    }
    /*props: {
      order: {
        type: Order,
        required: true
      }
    }*/
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


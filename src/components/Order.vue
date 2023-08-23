<template>
  <h2>Pedido</h2>
  <div class="item" v-for="product in order.products" :key="product.id" >
    {{ product.quantity }} 
    {{ product.title }} 
    : R$ {{ product.price }}
  </div>
  <div> 
    <p v-show="order.isDelivery" class="info">Taxa de entrega: R$ {{ order.taxDelivery }}</p>
    <h2>Total: {{ order.totalPrice }}</h2>
  </div>
  <div class="info"> 
    <p> Nome: {{ order.name }}</p>
  
    <p v-show="order.isDelivery"> 
      Endereço: {{ order.address }}</p>
  </div>
  <div>
    <button @click="$router.back">Nova Compra</button>
  </div>
</template>

<script lang="ts">
  import { Order } from "../entities/order.entity.ts";

  export default {
    props: {
      order: {
        type: Order,
        required: true
      }
    }
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


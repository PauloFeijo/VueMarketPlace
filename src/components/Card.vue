<template>
  <div class="card">
    <img :src="product.imageSrc">
    <div class="card-content">
      <h3>{{ product.title }}</h3>  
      <p> {{ product.description }} </p>
      <p> R$ {{ product.price }} </p>
    </div>
    <div class="card-buttons">
      <button @click="Remove" >-</button>
      <label>{{product.quantity}}</label>
      <button @click="Add">+</button>
    </div>  
  </div>
</template>
  
<script lang="ts">
  import { Product } from "../entities/product.entity";

  export default {
    props: {
      product: {
        type: Product,
        required: true
      }
    },
    computed: {      
    },
    methods: {
      Remove() {
        this.$emit("remove-product", this.product)
      },
      Add() {
        this.$emit("add-product", this.product)
      }
    }
  };
</script>
  
  <style scoped>
  .card {
    display: flex;
    border: 1px solid #000;
    border-radius: 8px;
  }
  
  .card img {
    width:200px;
    height: fit-content;
    align-self: center;
  }
  
  .card-content {
    width: 600px;
    align-self: center;
    background-color: beige;
  }

  .card-buttons {
    width: 150px;
    align-self: self-end;
  }
  
  div {
    /*border: 1px solid #000;*/
  }
  </style>
  
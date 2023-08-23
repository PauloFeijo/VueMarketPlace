<template>
  <h2>Produtos</h2>
  <div class="item" v-for="product in products" :key="product.id" >
    <Card 
      :product=product
      @add-product="addProduct"
      @remove-product="removeProduct"
    />          
  </div>
  <div> 
    <h2>Total: {{ totalPrice }}</h2>
  </div>
  <div>
    <button @click="goCart">Ir para o carrinho</button>
  </div>
</template>

<script lang="ts">
import { Product } from "../entities/product.entity";
import Card from "./Card.vue";
import { productsData } from "../infra/products-data";

export default {
  components: {
    Card,
  },
  methods: {
    addProduct(product: Product){
        product.quantity +=1;
    },
    removeProduct(product: Product){
        if (product.quantity > 0)
        {
            product.quantity -=1;
        }        
    },
    goCart(){      
      this.$router.push({ name: 'cart' });
    }
  },
  computed: {
    totalPrice() {
        return this.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    },
    selectedProducts(){
        return this.products.filter(x => x.quantity > 0);
    }
  },
  data: () => (
    {
      products: productsData
    }),
  };  
</script>

<style scoped>
  .item {
      display: flex;
  } 
</style>


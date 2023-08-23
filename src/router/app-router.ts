import { createRouter, createWebHistory } from 'vue-router';
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';
import Order from '../components/Order.vue';
import { productsData } from '../infra/products-data';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'products',
        component: Products,
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
      },
    ],
  });
  
  router.beforeEach((to, from, next) => {
    const productAdded = productsData.filter(x => x.quantity > 0).length > 0;
    console.log(productAdded);
    if (!productAdded && to.name == 'cart') {
      next({ name: 'products' });
    } else
    {
        next();
    }
  });
  
  export default router;

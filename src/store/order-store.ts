import { defineStore } from 'pinia';
import { Order } from "../entities/order.entity"

const ORDER_STORE = 'order';

const useOrderStore = defineStore(ORDER_STORE, {
  state: () => ({
    order: {
        id: null,
        name: null,
        isDelivery: null,
        taxDelivery: null,
        address: null,
        totalPrice: null,
        products: []  
    }      
  }),
  getters: {
    getOrder: (state) => state.order,
  },
  actions: {
    setOrder(order: any) {
      this.order = order;
    }
  },
});

export default useOrderStore;
<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import ProductCard from '@/components/ProductCard.vue';
</script>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // type inference enabled
  
  data() {
    return {
      products:[
        
      ]
    }
    
  },
  mounted() {
      this.getProductsData();
    },
    methods:{
       getProductsData(){
          fetch("http://localhost:3001/products")
          .then(res=>res.json())
          .then((data)=>{
            this.products=data;
          })
      }
    }
  
})
</script>

<template>
  <main>
    <div class="container" >
      <div class="row" >
      <div class="col s12 m4" v-for="product in products" >
        <ProductCard :productTitle="product"/>
      </div>
      
    </div>
      </div>
  </main>
</template>

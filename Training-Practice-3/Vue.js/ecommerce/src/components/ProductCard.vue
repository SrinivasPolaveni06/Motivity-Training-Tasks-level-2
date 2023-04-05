<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // type inference enabled
  props:
    ["productTitle"],
    
  
  data() {
    return {
      
    }
  },
  mounted(){
    console.log(this.productTitle.image)
  }
  
})
</script>

<template>
    <div class="card">
        <div class="card-image">
          <img :src=productTitle.image alt="image"> 
          
        </div>
        <div>
            <span class="card-title title">{{ productTitle.title }}</span>
        </div>
        <div class="card-content">
          <p> {{productTitle.description}}</p>
        </div>
        <div >
          <p> {{productTitle.price}}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
</template>
<style scoped>
  .title{
    color: #000 !important;
    font-weight: bold !important;
    
  }
  
</style>
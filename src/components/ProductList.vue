<template>
  <div class="hello">
    <div class="products-container" :data-bgTitle="category.category_desc.name" v-for="category in products">
      <h2 class="products_heading">
      {{ category.category_desc.name }}
      </h2>
      <div class="flex">
        <div class="product_box" v-for="product in category.products">
          x
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/products'
import { mapState } from 'pinia'
export default {
  name: 'ProductList',
  props: {
    msg: String,
  },
  computed: {
    ...mapState(useProductsStore, ['products'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.products-container{
  padding:20px 100px;
  width:100%;
  margin:0 auto;
  height:50vh;
  position:relative;
  background-color: #bde0fe;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  &:nth-child(even){
    background-color: #a2d2ff;
  }
  &:before {
	content: attr(data-bgTitle);
  position:absolute;
  left:50%;
  top:50%;
  font-size:11rem;
  text-transform: uppercase;
  letter-spacing: 20px;
  transform:translate(-50%,-50%) rotate(-10deg);
  font-weight:bold;
  z-index:1;
  overflow:hidden;
  opacity:.5;
  color:white;
  white-space: pre;
  }
  .products_heading{
    font-size:1.5rem;
    font-weight: bold;
    text-align: left;
    width:100%;
    color:white;
  }
  .flex{
    margin:20px 0;
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    .product_box{
    width:300px;
    height:150px;
    background-color: white;
    border-radius: 6px;
    z-index:2;
  }
  }
  
}
</style>

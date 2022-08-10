<template>
  <div v-on:scroll.native="handleScroll" class="hello">
    <div id="carousel-products" class="navigation-container navigation-visible">
      <Splide  :options="{ rewind: true, perPage:3, gap:'1rem', pagination:false }" aria-label="My Favorite Images">
        <SplideSlide class="navigation-box"  v-for="product in products">
            <router-link class="navigation-link" to="#">
              <img class="category-icon" :src="getImgUrl(product.category_desc.category_icon,product.category_desc.directory )" alt="">
              <p>{{product.category_desc.name}}</p>
            </router-link>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '../stores/products'
import { mapState } from 'pinia'
// or only core styles
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// eslint-disable-next-line
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
   components: { Splide, SplideSlide },
  name: 'TheNavigation',
  data() {
    return {
      menuSticked:false,
    }
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapState(useProductsStore, ['products'])
  },
  mounted() {
    this.handleScroll();
  },
  methods: {
    getImgUrl: function (imagePath, directory) {
      return require(`@/assets/products/${directory}/${imagePath}`);
    },
    handleScroll(){
      var myElement = document.getElementById('carousel-products');
      var bounding = myElement.getBoundingClientRect();
      var hiddenAt = bounding.top + myElement.offsetHeight/2;
      window.addEventListener('scroll',()=>{
        console.log(window.scrollY)
        console.log(hiddenAt)
      if(window.scrollY > hiddenAt){
        myElement.classList.add('navigation-container--sticky')
        document.querySelector('.hello').classList.add('hello-padding');
      }else{
        myElement.classList.remove('navigation-container--sticky')
        document.querySelector('.hello').classList.remove('hello-padding');
      }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/_variables.scss'; //
.category-icon{
  width:50px;
  height: 50px;
}
.splide{
  width:90vw;
  @media(min-width:768px){
  width:60vw;
  }
  @media(min-width:992px){
    width:50vw;
  }
  @media(min-width:1200px){
    width:40vw;
  }
}
.navigation-container{
  margin:20px auto;
  display:flex;
  justify-content: center;
  gap:20px;
  position:relative;
  .navigation-box{
  padding:10px;
  width:120px;
  height:140px;
  z-index:221;
  background-color: #bde0fe;
  transition: .2s;
  &:hover{
    z-index:3;
    height:130px;
    width:150px;
  }
  &:nth-child(even){
  background-color: #a2d2ff;
  }
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
    cursor: pointer;
    .navigation-link{
      width:100%;
      height:100%;
      display:flex;
      flex-direction: column;
      justify-content: center;
      gap:10px;
      color:White;
      align-items:center;
    }
  .navigation-link{
    color:white;
    font-weight:bold;
    text-decoration: none;
  }
}
}
.navigation-container--sticky{
  margin:0;
  z-index:25;
  background-color: white;
  position:fixed;
  align-items: center;
  left:0;
  top:0;
  width:100vw;
  height:70px;
  .navigation-box{
    border:1px solid white;
    padding:15px 10px;
    height:50px;
    &:has(.router-link-active){
    border:1px solid white;
    }
  }
  img{
    display:none;
  }
}
.hello-padding{
  padding-top:150px;
}


</style>

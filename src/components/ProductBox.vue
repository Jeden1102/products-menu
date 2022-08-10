<template>
    <div class="product_box">
        <div class="image-box">
            <img class="product-img" :src="getImgUrl(product.img,directory )" alt="">
        </div>
        <div class="info-box">
            <h2>
                {{product.name}}
            </h2>
            <p>
                {{product.desc}}
            </p>
            <h3>
                {{product.price}}zł
            </h3>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            product:{
                type:Object,
                required:true,
            },
            directory:{
                type:String,
                required:true
            }
        },
        methods: {
            getImgUrl: function (imagePath, directory) {
            return require(`@/assets/products/${directory}/${imagePath}`);
            },
        },
    }
</script>

<style lang="scss" scoped>
    .product_box{
    padding:5px;
    width:300px;
    height:150px;
    background-color: white;
    border-radius: 6px;
    color:black;
    display:flex;
    justify-content: center;
    align-items: center;
    transition:.2s;
    cursor:pointer;
    &:hover{
        transform: scale(1.1);
        -webkit-box-shadow: 0px 0px 24px -16px rgba(66, 68, 90, 1);
-moz-box-shadow: 0px 0px 24px -16px rgba(66, 68, 90, 1);
box-shadow: 0px 0px 24px -16px rgba(66, 68, 90, 1);
    }
    .image-box{
        .product-img{
            width:80px;
            height:80px;
        }
    }
    .info-box{
        padding:10px;
        h2{
            font-size:1.2rem;
        }
        p{
            font-size:.8rem;
            font-weight: 200;
        }
        h3{
            font-size:1.1rem;
        }
    }
  }
</style>
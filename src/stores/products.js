// @ts-check
import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
  id: 'user',
  state: () => ({
    products : [
       {
            "category_desc" : { name : "T-Shirt", category_icon : "tshirt1.png", directory : "tshirts" },
            "products" : [
                { name:"Black T-Shirt", price: 19.99, img : "tshirt1.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
                { name:"Blue T-Shirt", price: 29.99, img : "tshirt2.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
                { name:"Green T-Shirt", price: 24.99, img : "tshirt3.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
                { name:"Red T-Shirt", price: 14.99, img : "tshirt4.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
            ],
        },
        {
          "category_desc" : { name : "Shoes", category_icon : "shoe1.png", directory: "shoes" },
          "products" : [
              { name:"Grey Shoe", price: 19.99, img : "shoe1.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Black Shoe", price: 29.99, img : "shoe2.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Blue Shoe", price: 24.99, img : "shoe3.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Multicolour Shoe", price: 14.99, img : "shoe4.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
          ],
        },
        {
          "category_desc" : { name : "Accessories", category_icon : "acc1.png", directory: "accessories" },
          "products" : [
              { name:"Grey Watch", price: 19.99, img : "acc1.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Black Watch", price: 29.99, img : "acc2.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Blue Sunglasses", price: 24.99, img : "acc3.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Multicolour Sunglasses", price: 14.99, img : "acc4.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Brown  watch", price: 14.99, img : "acc5.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
          ],
        },
        {
          "category_desc" : { name : "Hats", category_icon : "hat1.png", directory: "hats" },
          "products" : [
              { name:"Grey hat", price: 19.99, img : "hat1.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Black hat", price: 29.99, img : "hat2.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Blue hat", price: 24.99, img : "hat3.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Multicolour hat", price: 14.99, img : "hat4.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Multicolour hat", price: 14.99, img : "hat5.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
          ],
        },
        {
          "category_desc" : { name : "Shoes", category_icon : "shoe1.png", directory: "shoes" },
          "products" : [
              { name:"Grey Shoe", price: 19.99, img : "shoe1.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Black Shoe", price: 29.99, img : "shoe2.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Blue Shoe", price: 24.99, img : "shoe3.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Multicolour Shoe", price: 14.99, img : "shoe4.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
          ],
        },
        {
          "category_desc" : { name : "Hoodies", category_icon : "hoodie1.png", directory: "hoodie" },
          "products" : [
              { name:"Grey hoodie", price: 19.99, img : "hoodie1.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Black hoodie", price: 29.99, img : "hoodie2.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Blue hoodie", price: 24.99, img : "hoodie3.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Multicolour hoodie", price: 14.99, img : "hoodie4.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Multicolour hoodie", price: 14.99, img : "hoodie5.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
          ],
        },
        {
          "category_desc" : { name : "Trousers", category_icon : "tr1.png", directory: "trousers" },
          "products" : [
              { name:"Grey trousers", price: 19.99, img : "tr1.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Black trousers", price: 29.99, img : "tr2.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Blue trousers", price: 24.99, img : "tr3.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Multicolour trousers", price: 14.99, img : "tr4.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
              { name:"Brown trousers", price: 14.99, img : "tr5.png", desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repellat mollitia tempore, beatae saepe maxime fuga sit rem aut dolore!", special : false, discount : 0, vege : false, banner: false },
          ],
        },
    ]
  }),
})


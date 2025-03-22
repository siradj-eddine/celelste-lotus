import Shoes from './photo/shoes/shoes.jpg'
import shoes1 from './photo/shoes/shoes1.png'
import Shoes2 from './photo/shoes/shoes2.jpg'
import shoes3 from './photo/shoes/shoes3.jpg'
import shoes5 from './photo/shoes/shoes5.avif'
import shoes6 from './photo/shoes/shoes6.webp'
import shoes7 from './photo/shoes/shoes7.webp'
import shoes8 from './photo/shoes/shoes8.jpg'
import shoes9 from './photo/shoes/shoes9.webp'

import Pant from './photo/pants/pant.jpg'
import Pant2 from './photo/pants/pant2.jpg'
import Pant3 from './photo/pants/pant3.jpg'
import Pant4 from './photo/pants/pant4.jpg'
import Pant5 from './photo/pants/pant5.webp'
import Pant6 from './photo/pants/pant6.webp'
import Pant7 from './photo/pants/pant7.jpg'
import Pant8 from './photo/pants/pant8.webp'

import shirt from './photo/shirts/shirt.webp'
import shirt1 from './photo/shirts/shirt1.jpg'
import shirt2 from './photo/shirts/shirt2.webp'
import shirt3 from './photo/shirts/shirt3.jpg'
import shirt4 from './photo/shirts/shirt4.jpg'
import shirt5 from './photo/shirts/shirt5.jpg'
import shirt6 from './photo/shirts/shirt6.jpg'
import shirt7 from './photo/shirts/shirt7.webp'
import shirt8 from './photo/shirts/shirt8.jpg'

import hat0 from './photo/hats/hat0.avif'
import hat from './photo/hats/hat.jpg'
import hat1 from './photo/hats/hat1.jpg'
import hat2 from './photo/hats/hat2.jpg'
import hat3 from './photo/hats/hat3.avif'
import hat4 from './photo/hats/hat4.avif'
import hat5 from './photo/hats/hat5.jpeg'
import hat6 from './photo/hats/hat6.jpg'

// import converse from './photo/brands/converse.png';
// import zara from './photo/brands/zara.jpg';
// import vans from './photo/brands/vans.png';
// import puma from './photo/brands/puma.png';
// import nike from './photo/brands/nike.png';
// import adidas from './photo/brands/adidas.png';

import stylishJacjet from './photo/homePhoto/stylishJacket.webp'
import casualTshirt from './photo/homePhoto/casualTshirt.webp'
import ElegantDress from './photo/homePhoto/ElegantDress.avif'
import TrendySneakers from './photo/homePhoto/converse.webp'

// import ShopForMen from './photo/homePhoto/shopForMen.avif'
// import ShopForWomen from './photo/homePhoto/shopForWomen.jpg'
// import accessories from './photo/homePhoto/accessories.avif'

// import ClassicWinterCollection from './photo/homePhoto/ClassicWinterCollection.jpg'

// import costumer1 from './photo/homePhoto/johndoe.jpeg'
// import costumer2 from './photo/homePhoto/johndoe2.jpeg'
// import costumer3 from './photo/homePhoto/johndoe3.jpeg'
// import costumer4 from './photo/homePhoto/johndoe4.jpeg'


const products = [
    {id: 1, Category: 'Shoes', price: 50,image:Shoes,describe: 'This is a pair of shoes'},
    {id: 2, Category: 'Shoes', price: 50,image:Shoes2,describe: 'This is a pair of shoes'},
    {id: 3, Category: 'Shoes', price: 50,image:shoes3,describe: 'This is a pair of shoes'},
    {id: 4, Category: 'Shoes', price: 50,image:shoes1,describe: 'This is a pair of shoes'},
    {id: 5, Category: 'Shoes', price: 50,image:shoes5,describe: 'This is a pair of shoes'},
    {id: 6, Category: 'Shoes', price: 50,image:shoes6,describe: 'This is a pair of shoes'},//
    {id: 7, Category: 'Shoes', price: 50,image:shoes7,describe: 'This is a pair of shoes'},
    {id: 8, Category: 'Shoes', price: 50,image:shoes8,describe: 'This is a pair of shoes'},
    {id: 9, Category: 'Shoes', price: 50,image:shoes9,describe: 'This is a pair of shoes'},
    {id:10, Category: 'Pants', price: 50,image:Pant,describe: 'This is a pair of pants'},
    {id:11, Category: 'Pants', price: 50,image:Pant2,describe: 'This is a pair of pants'}, 
    {id:12, Category: 'Pants', price: 50,image:Pant3,describe: 'This is a pair of pants'},
    {id:13, Category: 'Pants', price: 50,image:Pant4,describe: 'This is a pair of pants'},
    {id:14, Category: 'Pants', price: 50,image:Pant5,describe: 'This is a pair of pants'},
    {id:15, Category: 'Pants', price: 50,image:Pant6,describe: 'This is a pair of pants'},
    {id:16, Category: 'Pants', price: 50,image:Pant7,describe: 'This is a pair of pants'},
    {id:17, Category: 'Pants', price: 50,image:Pant8,describe: 'This is a pair of pants'},  
    {id:19, Category: 't-shirts', price: 50,image:shirt,describe: 'This is a t-shirt'},
    {id:20, Category: 't-shirts', price: 50,image:shirt1,describe: 'This is a t-shirt'},
    {id:21, Category: 't-shirts', price: 50,image:shirt2,describe: 'This is a t-shirt'},
    {id:22, Category: 't-shirts', price: 50,image:shirt3,describe: 'This is a t-shirt'},
    {id:23, Category: 't-shirts', price: 50,image:shirt4,describe: 'This is a t-shirt'},
    {id:24, Category: 't-shirts', price: 50,image:shirt5,describe: 'This is a t-shirt'},
    {id:25, Category: 't-shirts', price: 50,image:shirt6,describe: 'This is a t-shirt'},
    {id:26, Category: 't-shirts', price: 50,image:shirt7,describe: 'This is a t-shirt'},
    {id:27, Category: 't-shirts', price: 50,image:shirt8,describe: 'This is a t-shirt'},
    { id: 100, name: 'Stylish Jacket', image: stylishJacjet, describe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sed?`, price: 49.99, category: 'Men' },
    {id:32, Category: 'hats', price: 50,image:hat0,describe: 'This is a Hat'} ,
    {id:33, Category: 'hats', price: 50,image:hat,describe: 'This is a Hat'} ,
    {id:34, Category: 'hats', price: 50,image:hat1,describe: 'This is a Hat'} ,
    {id:35, Category: 'hats', price: 50,image:hat2,describe: 'This is a Hat'} ,
    { id: 103, name: 'Trendy Sneakers', image: TrendySneakers, describe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sed?`, price: 59.99, category: 'Accessories' },
    {id:36, Category: 'hats', price: 50,image:hat3,describe: 'This is a Hat'} ,
    {id:37, Category: 'hats', price: 50,image:hat4,describe: 'This is a Hat'} ,
    { id: 102, name: 'Elegant Dress', image: ElegantDress, describe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sed?`, price: 79.99, category: 'Women' },
    {id:38, Category: 'hats', price: 50,image:hat5,describe: 'This is a Hat'} ,
    {id:39, Category: 'hats', price: 50,image:hat6,describe: 'This is a Hat'} ,
    { id: 101, name: 'Casual T-Shirt', image: casualTshirt, describe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,`, price: 19.99, category: 'Men' },
    
];

export default products;
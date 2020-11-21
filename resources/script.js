// PRODUCTS STORAGE
const Products = [
  {name: 'apple pie', price: 100, image: 'images/apple-pie.gif', category: 'fluffy'},
  {name: 'blueberry', price: 130, image: 'images/blueberry.jpg', category: 'soft'},
  {name: 'cake', price: 110, image: 'images/cake.jpg', category: 'tasty'},
  {name: 'choco top', price: 120, image: 'images/choco-top.jpg', category: 'fluffy'},
  {name: 'cinnamon roll', price: 125, image: 'images/cinnamon-roll.gif', category: 'soft'},
  {name: 'cupcake', price: 146, image: 'images/cupcake.gif', category: 'tasty'},
  {name: 'donuts', price: 183, image: 'images/donuts.jpg', category: 'fluffy'},
  {name: 'farmers bread', price: 90, image: 'images/farmers-bread.jpg', category: 'soft'},
  {name: 'long bread', price: 98, image: 'images/long-bread.gif', category: 'tasty'},
  {name: 'mixed berries', price: 113, image: 'images/mixed-berris.gif', category: 'fluffy'},
  {name: 'muffin', price: 150, image: 'images/muffin.jpg', category: 'soft'},
  {name: 'pretzel', price: 156, image: 'images/pretzel.jpg', category: 'tasty'},
  {name: 'roll', price: 103, image: 'images/roll.jpg', category: 'fluffy'},
  {name: 'spanish bread', price: 172, image: 'images/spanish-bread.gif', category: 'soft'},
  {name: 'sweet bread', price: 121, image: 'images/sweet-bread.jpg', category: 'fluffy'},
  {name: 'tasty bread', price: 164, image: 'images/tasty-bread.gif', category: 'tasty'}
  ];
  
  const Cart = [];
  
class Item {
  constructor(name, price){
    this.name = name;
    this.price = price;
    this.qty = 1;
  }
  amount(){
     return this.qty * this.price;
    }
}
  
// UI Class: Handle UI Task
class UI {
  
  static loopArray() {
    for(let product of Products) {
    UI.displayItem(product);  
    }
  }
  
  static displayItem(product) {
    const menuList = document.querySelector('#menu-list');
    const menuItem = document.createElement('div');
    menuItem.className = `menu-item`;
    menuItem.innerHTML = `
            <img class="image" src="${product.image}" alt="" />
            <div class="left">
             <h4 id="name">${product.name}</h4>
             <p>&#8369;<span id="price">${product.price}</span></p> 
            </div>
            <div class="right">
             <a class="add-cart-btn" href="#">add to cart</a>
            </div>
            <div class="clear-fix"></div> 
    `; 
    menuList.appendChild(menuItem);
  }
  
}//-->UI block

// When the page is loaded
document.addEventListener('DOMContentLoaded', UI.loopArray);
// When searching product
document.querySelector('#searchbar').addEventListener('keyup', e => {
  const searchString = e.target.value.toLowerCase(); 
  const filteredString = Products.filter(character => {
    return (character.name.toLowerCase().includes(searchString));
  });
   let tabList = document.querySelector('#tab-list');
   tabList.querySelectorAll('li').forEach(link => {
     link.classList.remove('active');
   })
  document.querySelector('#menu-list').innerHTML = "";
  for(let product of filteredString){
    UI.displayItem(product);
  }
});
//When clicking the tabs
document.querySelector('#tab-list').addEventListener('click', e => {
  let classTab = e.target.classList[0];
  if(e.target.classList.contains(classTab)){
   let tab = Products.filter(product => {
     return product.category == classTab
   });
   let tabList = document.querySelector('#tab-list');
   tabList.querySelectorAll('li').forEach(link => {
     link.classList.remove('active');
   })
   e.target.classList.add('active')
   document.querySelector('#menu-list').innerHTML = "";
   for(let product of tab){
     UI.displayItem(product);
   }
  }
});

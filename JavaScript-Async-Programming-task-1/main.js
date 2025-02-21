let addToCart = document.querySelector('.add_to_cart_btn'); 
let note = document.querySelector('.note'); 
addToCart.disabled=false;
addToCart.addEventListener('click',()=>{
    addToCart.disabled=true;
    addToCart.innerHTML='Adding to Cart...';
    setTimeout(()=>{
        note.innerHTML='Added to Cart!';
        setTimeout(()=>{
            note.innerHTML=''
            addToCart.innerHTML='Add to Cart';
            addToCart.disabled=false

        },2000)
    },3000)

})
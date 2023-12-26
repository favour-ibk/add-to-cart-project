const product = [
    {
        id: 0,
        image: 'images/cloth-1.jpg',
        title: 'Andreilee sweater',
        price: 40,
    },
    {
        id: 1,
        image: 'images/cloth-2.jpg',
        title: 'Louis Vuitton jacket',
        price: 60,
    },
    {
        id: 2,
        image: 'images/cloth-3.jpg',
        title: 'ARCTERYX polo',
        price: 45,
    },
    {
        id: 3,
        image: 'images/shoe-1.jpg',
        title: 'Nova highlander',
        price: 150,
    },
    {
        id: 4,
        image: 'images/shoe-2.jpg',
        title: 'OGiy highlander',
        price: 100,
    },
    {
        id: 5,
        image: 'images/cloth-4.jpg',
        title: 'Zara hoodie',
        price: 80,
    },
    {
        id: 6,
        image: 'images/cloth-5.jpg',
        title: 'hoodie & sweatpants',
        price: 110,
    },
    {
        id: 7,
        image: 'images/shoe-3.jpg',
        title: 'Nike Air Force',
        price: 130,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
             <div class='img-box'>
                <img class='images' src=${image}></img>
             </div>
         <div class='bottom'>
         <p>${title}</p>
         <h2>$ ${price}.00</h2>`+
         "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
         `</div>
        </div>`      
    )
}).join('')    

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = " Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
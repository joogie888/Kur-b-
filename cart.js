let Arrproducts = [
        
    {
            id: 1,
            name: "Asta White Shirt V1",
            image: "shirt1.png",
            price: 99,
        },
        {
            id: 2,
            name: "Black Clover White Shirt",
            image: "shirt2.png",
            price: 99,
        },
        {
            id: 3,
            name: "Asta Black Hoodie",
            image: "hood9.png",
            price: 120,
        },
        {
            id: 4,
            name: "Yami Sukehiro White Hoodie",
            image: "hoodie3.png",
            price: 120,
        },
        {
            id: 5,
            name: "Black Clover Black Hoodie",
            image: "hood8.png",
            price: 99,
        },
        {
            id: 6,
            name: "Black Clover White Hoodie",
            image: "hood4.png",
            price: 99,
        },
        {
            id: 7,
            name: "Yami Sukehiro Black Shirt",
            image: "shirt7.png",
            price: 99,
        },
        {
            id: 8,
            name: "Yuno White Shirt",
            image: "shirt8.png",
            price: 99,
        },
        {
            id: 9,
            name: "Couple White Shirt(Yami V.)",
            image: "shirt9.png",
            price: 99,
        },
        {
            id: 10,
            name: "Couple Black Shirt(Yami V.)",
            image: "shirt10.png",
            price: 99,
        },
        {
            id: 11,
            name: "Couple White Shirt(Charlotte V.)",
            image: "shirt11.png",
            price: 99,
        },
        {
            id: 12,
            name: "Couple Black Shirt(Charlotte V.)",
            image: "shirt12.png",
            price: 99,
        },
        {
            id: 13,
            name: "Asta Keychain",
            image: "key6.png",
            price: 50,
        },
        {
            id: 14,
            name: "Luck Voltia Keychain",
            image: "key9.png",
            price: 50,
        },
        {
            id: 15,
            name: "Yami Sukehiro Keychain",
            image: "key10.png",
            price: 50,
        },
        {
            id: 16,
            name: "Zora Ideale Keychain",
            image: "key14.png",
            price: 50,
        }
];

const body = document.querySelector("body");
products = document.querySelector(".products");
iconcart = document.querySelector(".icon-cart");
closecart = document.querySelector(".close");
productList = document.querySelector(".productList");
quantity = document.querySelector(".quantity");
total = document.querySelector(".total")
button = document.querySelector('button')

button.addEventListener('click', () => {
    button.classList.add('active');
})

let checkOutList = [];

iconcart.onclick = () => {
    body.classList.add("active");
}
closecart.onclick = () => {
    body.classList.remove("active");
}


function onInIt() {
    Arrproducts.forEach((item, key) =>{
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
        <img src="shirts/${item.image}" />
        <div class="name">${item.name}</div>
        <div class="price"><small>$</small>${item.price}</div>
        <button onclick="addToCart(${key})">Add to Cart<span>Added</span></button>
        `;

        products.appendChild(div);
    });
}
onInIt();

function addToCart(Id) {
    if(checkOutList[Id] == null){
        checkOutList[Id] = Arrproducts[Id];
        checkOutList[Id].quantity = 1;
    }else{
        checkOutList[Id].quantity += 1;
    }
    reloadCart();
}

function reloadCart(){
    productList.innerHTML = ""; 
    let count = 0;
    let totalPrice = 0;

    checkOutList.forEach((item,key) => {
        totalPrice += parseInt(item.price * item.quantity);
        count += item.quantity;
        let lis = document.createElement("lis");
        lis.innerHTML = `
        <img src="shirts/${item.image}">
        <div>${item.name}</div>
        <div>${item.price}</div>
        <div>
        <button onclick="changeQuantity(${key}, ${item.quantity-1})">-</button>
        <div class="count">${item.quantity}</div>
        <button onclick="changeQuantity(${key}, ${item.quantity+1})">+</button>
        </div>
        `;

        productList.appendChild(lis);
    });

    total.innerHTML = `<small>Subtotal (${count} items) $</small>` +totalPrice;
    quantity.innerHTML = count;
}

function changeQuantity(key, quantity) {
    if(quantity == 0){
        delete checkOutList[key];
    }
    else{
        checkOutList[key].quantity=quantity;
    }
    reloadCart();

}

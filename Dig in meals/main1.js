let carts = document.querySelectorAll('.add-cart');

let products = [{
        name: "Manchow Soup",
        tag: "Manchow",
        price: 199,
        inCart: 0
    },

    {
        name: "Tomato basil Soup",
        tag: "TomatoBasilSoup",
        price: 249,
        inCart: 0
    },

    {
        name: "Spring Rolls",
        tag: "SpringRolls",
        price: 140,
        inCart: 0
    },

    {
        name: "DimSums",
        tag: "DimSums",
        price: 120,
        inCart: 0
    },

    {
        name: "Dumplings",
        tag: "Dumplings",
        price: 120,
        inCart: 0
    },

    {
        name: "Chilli potato",
        tag: "ChilliPotato",
        price: 249,
        inCart: 0
    },

    {
        name: "Stir fried Tofu",
        tag: "StirFriedTofu",
        price: 499,
        inCart: 0
    },

    {
        name: "Chinese Combo",
        tag: "ChineseCombo",
        price: 299,
        inCart: 0
    },

    {
        name: "Veg Chop Suey",
        tag: "VegChopSuey",
        price: 349,
        inCart: 0
    },

    {
        name: "Mulligatawny Soup",
        tag: "MulligatawnySoup",
        price: 359,
        inCart: 0
    },

    {
        name: "Tomato soup",
        tag: "TomatoSoup",
        price: 249,
        inCart: 0
    },

    {
        name: "Paneer Tikka",
        tag: "PaneerTikka",
        price: 199,
        inCart: 0
    },

    {
        name: "Seekh kabab",
        tag: "SeekhKabab",
        price: 199,
        inCart: 0
    },

    {
        name: "Kachhori Platter",
        tag: "KachhoriPlatter",
        price: 149,
        inCart: 0
    },

    {
        name: "Khandvi Platter",
        tag: "KhandviPlatter",
        price: 149,
        inCart: 0
    },

    {
        name: "Chole Bhature",
        tag: "CholeBhature",
        price: 299,
        inCart: 0
    },

    {
        name: "Litti chokha",
        tag: "LittiChokha",
        price: 349,
        inCart: 0
    },

    {
        name: "Rajma Chawal",
        tag: "RajmaChawal",
        price: 299,
        inCart: 0
    },

    {
        name: "Mushroom soup",
        tag: "MushroomSoup",
        price: 249,
        inCart: 0
    },

    {
        name: "Miso soup",
        tag: "Misosoup",
        price: 249,
        inCart: 0
    },

    {
        name: "Onigiri",
        tag: "Onigiri",
        price: 299,
        inCart: 0
    },

    {
        name: "Senbei",
        tag: "Senbei",
        price: 299,
        inCart: 0
    },

    {
        name: "Dorayaki",
        tag: "Dorayaki",
        price: 299,
        inCart: 0
    },

    {
        name: "Sushi",
        tag: "Sushi",
        price: 249,
        inCart: 0
    },

    {
        name: "Udon",
        tag: "Udon",
        price: 299,
        inCart: 0
    },

    {
        name: "Okonomiyaki",
        tag: "Okonomiyaki",
        price: 499,
        inCart: 0
    },

    {
        name: "Omurice",
        tag: "Omurice",
        price: 399,
        inCart: 0
    },

    {
        name: "Italian Soup",
        tag: "ItalianSoup",
        price: 149,
        inCart: 0
    },

    {
        name: "Robollita Soup",
        tag: "RobollitaSoup",
        price: 199,
        inCart: 0
    },

    {
        name: "Pizza",
        tag: "Pizza",
        price: 299,
        inCart: 0
    },

    {
        name: "Pasta",
        tag: "Pasta",
        price: 249,
        inCart: 0
    },

    {
        name: "Bruschetta",
        tag: "Bruschetta",
        price: 299,
        inCart: 0
    },

    {
        name: "Pinwheel",
        tag: "Pinwheel",
        price: 199,
        inCart: 0
    },

    {
        name: "Vegan Spaghetti",
        tag: "VeganSpaghetti",
        price: 299,
        inCart: 0
    },

    {
        name: "Crespelle",
        tag: "Crespelle",
        price: 399,
        inCart: 0
    },

    {
        name: "Grilled vegetable",
        tag: "GrilledVegetable",
        price: 349,
        inCart: 0
    },
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}

function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");
    console.log(cartItems);

    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
               <span>${item.name}</span>
            </div>
            <div class="price">Rs.${item.price}.00</div>
            <div class="quantity">
                <ion-icon class="increse" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increse" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
                Rs.${item.inCart * item.price}.00
            </div>
      `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle"> Basket Total</h4>
                <h4 class="basketTotal">Rs.${cartCost}.00
            </div>

    `;
    }
}


onLoadCartNumbers();
displayCart();
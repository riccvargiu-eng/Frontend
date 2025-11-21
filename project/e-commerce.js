// Generare UUID
const id = crypto.randomUUID();
console.log(id);
//catalogo prodotti
const catalogo = [
  {
    id: crypto.randomUUID(),
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: crypto.randomUUID(),
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric...",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: crypto.randomUUID(),
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions...",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: crypto.randomUUID(),
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice...",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: crypto.randomUUID(),
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: crypto.randomUUID(),
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: crypto.randomUUID(),
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3, count: 400 },
  },
  {
    id: crypto.randomUUID(),
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: crypto.randomUUID(),
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: crypto.randomUUID(),
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: crypto.randomUUID(),
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds. Remarkable transfer speeds...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: crypto.randomUUID(),
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy setup...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: crypto.randomUUID(),
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21.5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: crypto.randomUUID(),
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 999.99,
    description:
      "49 inch super ultrawide curved gaming monitor with QLED technology...",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: crypto.randomUUID(),
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "US standard size, Material: 100% Polyester; Detachable liner fabric; Adjustable hood...",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: crypto.randomUUID(),
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "Faux leather material for style and comfort, 2 pockets in front, hooded denim style...",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: crypto.randomUUID(),
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight, long sleeve with hood, adjustable waist, zipper closure, stripes lined...",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: crypto.randomUUID(),
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    description:
      "95% Rayon 5% Spandex, lightweight fabric, ribbed sleeves, double stitching...",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: crypto.randomUUID(),
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% polyester, moisture wicking fabric, lightweight and breathable...",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: crypto.randomUUID(),
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95% Cotton, 5% Spandex, casual short sleeve, letter print, V-neck...",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: { rate: 3.6, count: 145 },
  },
];

// Carrello vuoto
var cart = [];

// Mostra il catalogo dei prodotti
function showCatalog() {
  var catalogContainer = document.querySelector(".cataloglist");
  catalogContainer.innerHTML = ""; // cancella il contenuto precedente

  for (var i = 0; i < catalogo.length; i++) {
    var prodotto = catalogo[i];

    // Crea il contentore per ogni prodotto
    var box = document.createElement("div");
    box.className = "product-box";

    // Inserisce immagine, titolo, prezzo e bottone
    box.innerHTML =
      "<img src='" +
      prodotto.image +
      "' alt='" +
      prodotto.title +
      "' class='product-image'>" +
      "<h3>" +
      prodotto.title +
      "</h3>" +
      "<p>Prezzo: $" +
      prodotto.price +
      "</p>" +
      "<button data-id='" +
      prodotto.id +
      "'>Add to Cart</button>";

    catalogContainer.appendChild(box); //attacco come figlio al catalog
  }

  // Chiamo i bottoni
  var buttons = catalogContainer.getElementsByTagName("button");
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].onclick = function () {
      var productId = this.getAttribute("data-id");
      addToCart(productId);
    };
  }
}

// Aggiunge un prodotto al carrello
function addToCart(productId) {
  var trovato = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].productId == productId) {
      cart[i].quantity = cart[i].quantity + 1; //aumenta di 1
      trovato = true; //il prodotto è presente
    }
  }
  // il prodotto non è stato trovato !
  if (!trovato) {
    cart.push({ productId: productId, quantity: 1 });
  }

  updateCart();
  updateTotal();
}

// Aggiorna la lista
function updateCart() {
  var cartList = document.getElementById("cart");
  if (!cartList) return;
  cartList.innerHTML = "";

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];

    // cerca il prodotto nel catalogo
    for (var j = 0; j < catalogo.length; j++) {
      //verifica lunghezza e aumenta
      if (catalogo[j].id == item.productId) {
        var li = document.createElement("li");
        li.innerHTML =
          catalogo[j].title +
          " - $" +
          catalogo[j].price +
          " x " +
          item.quantity;
        cartList.appendChild(li);
      }
    }
  }
}

// Aggiorna il totale del carrello
function updateTotal() {
  var totalElement = document.getElementById("total");
  if (!totalElement) return;

  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < catalogo.length; j++) {
      if (catalogo[j].id == cart[i].productId) {
        total = total + catalogo[j].price * cart[i].quantity;
      }
    }
  }

  totalElement.innerHTML = "Totale: $" + total.toFixed(2); //numeri decimali
}

// Mostra il catalogo all'avvio
showCatalog();

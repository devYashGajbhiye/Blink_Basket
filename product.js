// PRODUCT DATABASE
const products = {
     "Electronics": [
        { name: "Smartphone A1", price: "₹14,999", img: "./images/electronics/Samsung-Galaxy-S24-Ultra-5G.jpg" },
        { name: "Ultra Slim Laptop ", price: "₹54,999", img: "./images/ultra-slim-laptop.jpeg" },
        { name: "Wireless Headphones", price: "₹1999", img: "./images/wireless-headphones.jpeg" },
        { name: "Earbuds", price: "₹1300", img: "./images/electronics/earbuds.jpeg" },
        { name: "Smart TV", price: "₹79,999", img: "./images/Smart-led-tv.jpeg" },
        { name: "Smart Galaxy Tab S10, 8 GB RAM, 256 GB, Grey", price: "₹17,999", img: "./images/electronics/Samsung-Galaxy-Tab.jpeg" },
        { name: "Smart Galaxy Watch Ultra Smart Watch", price: "₹59,999", img: "./images/electronics/Samsung-Galaxy-Watch-Ultra-Smart-Watch.jpeg" },
        { name: "Apple iPhone 17 256 GB, Black", price: "₹82,900", img: "./images/electronics/Apple-Iphone17-Black.jpeg" },
        { name: "Apple iPhone 16 512 GB, Teal", price: "99,999", img: "./images/electronics/Apple-iphone16-black.jpeg" },
        { name: "Apple iPad Pro 5th Gen, 256 GB, Space Black", price: "₹86,990", img: "./images/electronics/Apple-ipad-pro.jpeg" },   
        { name: "Google Pixel 9a, 256 GB, Obsidian", price: "₹44,990", img: "./images/electronics/Google Pixel 9a, 256 GB, Obsidian.jpeg" } ,     
        { name: "One Plus Nord 5 5G, 256 GB, Phantom ", price: "₹31,999", img: "./images/electronics/One-Plus-Nord5.jpeg" },
        {name: "Apple MGN63HNA MacBook Air", price:"₹51,990", img:"./images/electronics/Apple-MacBook-Air.jpeg"}      
    ],
    "Fashion": [
        { name: "Men's Jacket", price: "₹999", img: "./images/fashion/fashion1.jpeg" },
        { name: "Women's Kurti", price: "₹799", img: "./images/fashion/fashion2.jpeg" },
        { name: "Brown plain oversized shirt", price: "₹899", img: "./images/fashion/fashion3.jpeg" },
        { name: "Oversized T-shirt Women", price: "₹899", img: "./images/fashion/fashion4.jpeg" },
        { name: "Lehenga Choli", price: "₹628", img: "./images/fashion/fashion5.jpeg" },
        { name: "Hoodies", price: "₹749", img: "./images/fashion/fashion6.jpeg" },
        { name: "Formal Shirts", price: "₹1199", img: "./images/fashion/fashion7.jpeg" },
        { name: "Sarees", price: "₹1499", img: "./images/fashion/fashion8.jpeg" },
        { name: "Western Dress for Women", price: "₹899", img: "./images/fashion/fashion9.jpeg" },
        { name: "Brown plain oversized shirt", price: "₹899", img: "./images/fashion/fashion10.jpg" },
    ],
   "Home": [
    { name: "Table Lamp", price: "₹499", img: "./images/home/home1.jpeg" },
    { name: "Wall Decor", price: "₹799", img: "./images/home/home2.jpeg" },
    { name: "Cushion Cover Set", price: "₹299", img: "./images/home/home3.jpeg" },
    { name: "Wooden Flower Vase", price: "₹399", img: "./images/home/home4.jpeg" },
    { name: "Study Table", price: "₹2,499", img: "./images/home/home5.jpeg" },
    { name: "LED Wall Clock", price: "₹599", img: "./images/home/home6.jpeg" },
    { name: "Floor Mat", price: "₹249", img: "./images/home/home7.jpeg" },
    { name: "Curtains Set", price: "₹899", img: "./images/home/home8.jpeg" },
    { name: "Kitchen Storage Box", price: "₹199", img: "./images/home/home9.jpeg" },
    { name: "Decorative Mirror", price: "₹749", img: "./images/home/home10.jpeg" }
],

    "Beauty": [
    { name: "Face Cream", price: "₹199", img: "./images/beauty/beauty1.jpeg" },
    { name: "Shampoo", price: "₹399", img: "./images/beauty/beauty2.jpeg" },
    { name: "Sunscreen SPF 50", price: "₹249", img: "./images/beauty/beauty3.jpeg" },
    { name: "Lip Balm", price: "₹99", img: "./images/beauty/beauty4.jpeg" },
    { name: "Hair Oil", price: "₹149", img: "./images/beauty/beauty5.jpeg" },
    { name: "Face Wash", price: "₹129", img: "./images/beauty/beauty6.jpeg" },
    { name: "Makeup Kit", price: "₹699", img: "./images/beauty/beauty7.jpeg" },
    { name: "Nail Polish Set", price: "₹249", img: "./images/beauty/beauty8.jpeg" },
    { name: "Perfume Spray", price: "₹349", img: "./images/beauty/beauty9.jpeg" },
    { name: "Hair Conditioner", price: "₹299", img: "./images/beauty/beauty10.jpeg" }
],
"Sports": [
    { name: "Football", price: "₹699", img: "./images/sports/sports1.jpeg" },
    { name: "Badminton Set", price: "₹499", img: "./images/sports/sports2.jpeg" },
    { name: "Cricket Bat", price: "₹999", img: "./images/sports/sports3.jpeg" },
    { name: "Tennis Racket", price: "₹1,499", img: "./images/sports/sports4.jpeg" },
    { name: "Yoga Mat", price: "₹349", img: "./images/sports/sports5.jpeg" },
    { name: "Skipping Rope", price: "₹149", img: "./images/sports/sports6.jpeg" },
    { name: "Gym Gloves", price: "₹249", img: "./images/sports/sports7.jpeg" },
    { name: "Basketball", price: "₹799", img: "./images/sports/sports8.jpeg" },
    { name: "Sports Water Bottle", price: "₹199", img: "./images/sports/sports9.jpeg" },
    { name: "Running Shoes", price: "₹1,899", img: "./images/sports/sports10.jpeg" }
],

   "Food": [
    { name: "Organic Rice", price: "₹120", img: "./images/food/food1.jpeg" },
    { name: "Dry Fruits", price: "₹349", img: "./images/food/food2.jpeg" },
    { name: "Olive Oil", price: "₹599", img: "./images/food/food3.jpeg" },
    { name: "Instant Noodles Pack", price: "₹99", img: "./images/food/food4.jpeg" },
    { name: "Honey (Pure)", price: "₹199", img: "./images/food/food5.jpeg" },
    { name: "Bread Loaf", price: "₹45", img: "./images/food/food6.jpeg" },
    { name: "Chocolate Cookies", price: "₹69", img: "./images/food/food7.jpeg" },
    { name: "Breakfast Cereal", price: "₹199", img: "./images/food/food8.jpeg" },
    { name: "Tea Powder", price: "₹150", img: "./images/food/food9.jpeg" },
    { name: "Coffee", price: "₹299", img: "./images/food/food10.jpeg" }
],

    "Baby": [
    { name: "Baby Diapers", price: "₹299", img: "./images/baby/baby1.jpeg" },
    { name: "Baby Lotion", price: "₹199", img: "./images/baby/baby2.jpeg" },
    { name: "Baby Soap", price: "₹59", img: "./images/baby/baby3.jpeg" },
    { name: "Baby Powder", price: "₹85", img: "./images/baby/baby4.jpeg" },
    { name: "Feeding Bottle", price: "₹149", img: "./images/baby/baby5.jpeg" },
    ],

    "Automotive": [
    { name: "Car Shampoo", price: "₹149", img: "./images/automotive/automotive1.jpeg" },
    { name: "Car Perfume", price: "₹199", img: "./images/automotive/automotive2.jpeg" },
    { name: "Bike Chain Oil", price: "₹120", img: "./images/automotive/automotive3.jpeg" },
    { name: "Microfiber Cleaning Cloth", price: "₹79", img: "./images/automotive/automotive4.jpeg" },
    { name: "Car Phone Holder", price: "₹249", img: "./images/automotive/automotive5.jpeg" },
    { name: "Helmet", price: "₹899", img: "./images/automotive/automotive6.jpeg" },
    { name: "Tyre Inflator", price: "₹999", img: "./images/automotive/automotive7.jpeg" },
    { name: "Bike Cover", price: "₹349", img: "./images/automotive/automotive8.jpeg" },
    { name: "Car Vacuum Cleaner", price: "₹1,299", img: "./images/automotive/automotive9.jpeg" },
    { name: "Scratch Remover", price: "₹199", img: "./images/automotive/automotive10.jpeg" }
],

   "Books": [
    { name: "The Alchemist", price: "₹299", img: "./images/books/books1.jpeg" },
    { name: "Notebook Pack", price: "₹149", img: "./images/books/books2.jpeg" },
    { name: "Rich Dad Poor Dad", price: "₹199", img: "./images/books/books3.jpeg" },
    { name: "Atomic Habits", price: "₹350", img: "./images/books/books4.jpeg" },
    { name: "Diary Journal", price: "₹120", img: "./images/books/books5.jpeg" },
    { name: "Encyclopedia for Kids", price: "₹499", img: "./images/books/books6.jpeg" },
    { name: "Story Book – Panchatantra", price: "₹99", img: "./images/books/books7.jpeg" },
    { name: "Comic – Marvel Edition", price: "₹199", img: "./images/books/books8.jpeg" },
    { name: "English Grammar Book", price: "₹159", img: "./images/books/books9.jpeg" },
    { name: "Science Textbook", price: "₹299", img: "./images/books/books10.jpeg" }
],

   "Pets": [
    { name: "Dog Food", price: "₹499", img: "./images/pets/pets1.jpeg" },
    { name: "Pet Shampoo", price: "₹199", img: "./images/pets/pets2.jpeg" },
    { name: "Cat Litter", price: "₹249", img: "./images/pets/pets3.jpeg" },
    { name: "Pet Treats", price: "₹149", img: "./images/pets/pets4.jpeg" },
    { name: "Pet Feeding Bowl", price: "₹99", img: "./images/pets/pets5.jpeg" },
    { name: "Pet Collar", price: "₹129", img: "./images/pets/pets6.jpeg" },
    { name: "Pet Bed", price: "₹799", img: "./images/pets/pets7.jpeg" },
    { name: "Chew Toy", price: "₹99", img: "./images/pets/pets8.jpeg" },
    ]
};

let loadedProducts = [];

// LOAD CATEGORY
function showCategory(categoryName) {
    const catSection = document.getElementById("categorySection");
    const proSection = document.getElementById("productsSection");
    const title = document.getElementById("selectedCategoryTitle");
    const grid = document.getElementById("productsGrid");

    catSection.classList.add("hidden");
    proSection.classList.remove("hidden");

    title.innerText = categoryName === "All" ? "All Products" : categoryName;

    // Load products
    if (categoryName === "All") {
        loadedProducts = Object.values(products).flat();

        // Show category filter
        document.getElementById("categoryFilterBox").classList.remove("hidden");

        // Fill category filter dropdown
        const catDrop = document.getElementById("categoryFilter");
        catDrop.innerHTML = '<option value="all">All Categories</option>';
        Object.keys(products).forEach(cat => {
            catDrop.innerHTML += `<option value="${cat}">${cat}</option>`;
        });

    } else {
        loadedProducts = products[categoryName];
        document.getElementById("categoryFilterBox").classList.add("hidden");
    }

    renderProducts(loadedProducts);
}

// RENDER FUNCTION
function renderProducts(list) {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";

    list.forEach(p => {
        grid.innerHTML += `
         <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p class="price">${p.price}</p>

            <button class="add-btn"
                onclick='addToCart("${p.name}", "${p.price}", "${p.img}")'>
                Add to Cart
            </button>
        </div>`;
    });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, img) {
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name,
            price,
            img,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}


// FILTER + SORT HANDLING
function applyFilters() {
    let filtered = [...loadedProducts];

    // SEARCH FILTER
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    if (searchText) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchText));
    }

    // PRICE FILTER
    const priceValue = document.getElementById("priceFilter").value;
    if (priceValue !== "all") {
        const [min, max] = priceValue.split("-").map(Number);
        filtered = filtered.filter(p => {
            const price = Number(p.price.replace("₹", "").replace(",", ""));
            return price >= min && price <= max;
        });
    }

    // CATEGORY FILTER (only for All)
    const catVal = document.getElementById("categoryFilter").value;
    if (catVal !== "all" && products[catVal]) {
        filtered = products[catVal];
    }

    // SORT
    const sortVal = document.getElementById("sortSelect").value;

    if (sortVal === "priceLow") {
        filtered.sort((a, b) =>
            parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""))
        );
    }
    if (sortVal === "priceHigh") {
        filtered.sort((a, b) =>
            parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, ""))
        );
    }
    if (sortVal === "nameAZ") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortVal === "nameZA") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderProducts(filtered);
}

function applySorting() {
    let sorted = [...loadedProducts];

    const sortVal = document.getElementById("sortSelect").value;

    // Price Low → High
    if (sortVal === "priceLow") {
        sorted.sort((a, b) =>
            parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""))
        );
    }

    // Price High → Low
    if (sortVal === "priceHigh") {
        sorted.sort((a, b) =>
            parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, "")) 
        );
    }

    // Name A → Z
    if (sortVal === "nameAZ") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Name Z → A
    if (sortVal === "nameZA") {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderProducts(sorted);
}

// EVENT LISTENERS
document.getElementById("searchInput").addEventListener("input", applyFilters);
document.getElementById("priceFilter").addEventListener("change", applyFilters);
document.getElementById("categoryFilter").addEventListener("change", applyFilters);
document.getElementById("sortSelect").addEventListener("change", applyFilters);

// BACK BUTTON
function goBack() {
    document.getElementById("categorySection").classList.remove("hidden");
    document.getElementById("productsSection").classList.add("hidden");
}

document.getElementById("sortSelect").addEventListener("change", applySorting);

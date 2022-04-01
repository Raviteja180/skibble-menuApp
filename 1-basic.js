const menu = [
  {
    id: 1,
    title: "Idli",
    category: "breakfast",
    price: 40,
    img: "./images-i-collected/idli.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Diner double",
    category: "lunch",
    price: 210,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 100,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Dosa",
    category: "breakfast",
    price: 50,
    img: "./images-i-collected/dosa.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 200,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 110,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Vada",
    category: "breakfast",
    price: 40,
    img: "./images-i-collected/vada.webp",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 150,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 80,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id : 10,
    title : "Bombay Biryani",
    category : "biryani",
    price : 200,
    img : "./images-i-collected/bombay-biryani.jfif",
    desc : `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id : 11,
    title : "Butter Chicken Biryani",
    category : "biryani",
    price : 300,
    img : "./images-i-collected/butter-chicken-biryani.jfif",
    desc : `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id : 12,
    title : "Hyderabad Biryani",
    category : "biryani",
    price : 180,
    img : "./images-i-collected/hyderabad-biryani.jfif",
    desc : `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id : 13,
    title : "Fish Biryani",
    category : "biryani",
    price : 300,
    img : "./images-i-collected/fish-biryani.jfif",
    desc : `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  }
];

const sectionCenter = document.querySelector(".section-center");
function allItems() {
  let displayMenu = menu.map(function (item) {
    return `<div class="menu-item">
          <div class="image">
            <img src=${item.img} alt=${item.title} class="photo" />
          </div>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">Rs.${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

window.addEventListener("DOMContentLoaded", allItems);
function show(value) {
  let displayMenu = menu.map(function(item){
    if(item.category == value)
    return `<div class="menu-item">
            <div class="image">
              <img src=${item.img} alt=${item.title} class="photo" />
            </div>
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">Rs.${item.price}</h4>
              </header>
              <p class="item-text">
                  ${item.desc}
              </p>
            </div>
          </div>`;
  })
  displayMenu = displayMenu.join("");
  console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;

}

(function () {
  let fruits = [
    {
      src: "./images/apple-braeburn.png",
      width: "200",
      height: "200",
      alt: "Braeburn Apple",
      fruit: "Braeburn Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-cortland.png",
      width: "200",
      height: "200",
      alt: "Cortland Apple",
      fruit: "Cortland Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-gala.png",
      width: "200",
      height: "200",
      alt: "Gala Apple",
      fruit: "Gala Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-ginger-gold.png",
      width: "200",
      height: "200",
      alt: "Ginger Gold Apple",
      fruit: "Ginger Gold Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-golden-delicious.png",
      width: "200",
      height: "200",
      alt: "Golden Delicious Apple",
      fruit: "Golden Delicious Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-granny-smith.png",
      width: "200",
      height: "200",
      alt: "Granny Smith Apple",
      fruit: "Granny Smith Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-honeycrisp.png",
      width: "200",
      height: "200",
      alt: "Honeycrisp Apple",
      fruit: "Honeycrisp Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-jonagold.png",
      width: "200",
      height: "200",
      alt: "Jonagold Apple",
      fruit: "Jonagold Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-jonathan.png",
      width: "200",
      height: "200",
      alt: "Jonathan Apple",
      fruit: "Jonathan Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-mcintosh.png",
      width: "200",
      height: "200",
      alt: "Mcintosh Apple",
      fruit: "Mcintosh Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-pacific-rose.png",
      width: "200",
      height: "200",
      alt: "Pacific Rose Apple",
      fruit: "Pacific Rose Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-paula-red.png",
      width: "200",
      height: "200",
      alt: "Paula Red Apple",
      fruit: "Paula Red Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-red-delicious.png",
      width: "200",
      height: "200",
      alt: "Red Delicious Apple",
      fruit: "Red Delicious Apple",
      type: "Apple",
    },
    {
      src: "./images/apple-wealthy.png",
      width: "200",
      height: "200",
      alt: "Wealthy Apple",
      fruit: "Wealthy Apple",
      type: "Apple",
    },
    {
      src: "./images/orange-blood.png",
      width: "200",
      height: "200",
      alt: "Blood Orange",
      fruit: "Blood Orange",
      type: "Orange",
    },
    {
      src: "./images/orange-cara-cara.png",
      width: "200",
      height: "200",
      alt: "Cara Cara Orange",
      fruit: "Cara Cara Orange",
      type: "Orange",
    },
    {
      src: "./images/orange-clementine.png",
      width: "200",
      height: "200",
      alt: "Clementine Orange",
      fruit: "Clementine Orange",
      type: "Orange",
    },
    {
      src: "./images/orange-florida-grapefruit.png",
      width: "200",
      height: "200",
      alt: "Florida Grapefruit",
      fruit: "Florida Grapefruit",
      type: "Orange",
    },
    {
      src: "./images/orange-golden-nugget.png",
      width: "200",
      height: "200",
      alt: "Golden Nugget Orange",
      fruit: "Golden Nugget Orange",
      type: "Orange",
    },
    {
      src: "./images/orange-heirloom-navel.png",
      width: "200",
      height: "200",
      alt: "Heirloom Navel Orange",
      fruit: "Heirloom Navel Orange",
      type: "Orange",
    },
    {
      src: "./images/orange-mandarin.png",
      width: "200",
      height: "200",
      alt: "Mandarin Orange",
      fruit: "Mandarin Orange",
      type: "Orange",
    },
    {
      src: "./images/orange-murcott.png",
      width: "200",
      height: "200",
      alt: "Murcott Mandarin",
      fruit: "Murcott Mandarin",
      type: "Orange",
    },
    {
      src: "./images/orange-pink-grapefruit.png",
      width: "200",
      height: "200",
      alt: "Pink Grapefruit",
      fruit: "Pink Grapefruit",
      type: "Orange",
    },
    {
      src: "./images/orange-seville-sour.png",
      width: "200",
      height: "200",
      alt: "Seville Sour Orange",
      fruit: "Seville Sour Orange",
      type: "Orange",
    },
    {
      src: "./images/orange-tangerine.png",
      width: "200",
      height: "200",
      alt: "Tangerine",
      fruit: "Tangerine",
      type: "Orange",
    },
  ];

  for (value of fruits) {
    const createImgTag = document.createElement("img");
    const createFigureTag = document.createElement("figure");
    const createFigureCaption = document.createElement("figcaption");
    createImgTag.src = value.src;
    createImgTag.width = value.width;
    createImgTag.height = value.height;
    createImgTag.alt = value.alt;
    createFigureCaption.innerText = `${value.fruit}`;
    createFigureTag.append(createImgTag);
    createFigureTag.append(createFigureCaption);
    if (value.type === "Apple") {
      document.getElementById("apples").append(createFigureTag);
    } else if (value.type === "Orange") {
      document.getElementById("oranges").append(createFigureTag);
    }
  }
})();

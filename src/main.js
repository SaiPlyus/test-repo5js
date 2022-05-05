(function () {
  let apples = [
    {
      src: "./images/apple-braeburn.png",
      width: "200",
      height: "200",
      alt: "Braeburn Apple",
      type: "Braeburn Apple",
    },
    {
      src: "./images/apple-cortland.png",
      width: "200",
      height: "200",
      alt: "Cortland Apple",
      type: "Cortland Apple",
    },
    {
      src: "./images/apple-gala.png",
      width: "200",
      height: "200",
      alt: "Gala Apple",
      type: "Gala Apple",
    },
    {
      src: "./images/apple-ginger-gold.png",
      width: "200",
      height: "200",
      alt: "Ginger Gold Apple",
      type: "Ginger Gold Apple",
    },
    {
      src: "./images/apple-golden-delicious.png",
      width: "200",
      height: "200",
      alt: "Golden Delicious Apple",
      type: "Golden Delicious Apple",
    },
    {
      src: "./images/apple-granny-smith.png",
      width: "200",
      height: "200",
      alt: "Granny Smith Apple",
      type: "Granny Smith Apple",
    },
    {
      src: "./images/apple-honeycrisp.png",
      width: "200",
      height: "200",
      alt: "Honeycrisp Apple",
      type: "Honeycrisp Apple",
    },
    {
      src: "./images/apple-jonagold.png",
      width: "200",
      height: "200",
      alt: "Jonagold Apple",
      type: "Jonagold Apple",
    },
    {
      src: "./images/apple-jonathan.png",
      width: "200",
      height: "200",
      alt: "Jonathan Apple",
      type: "Jonathan Apple",
    },
    {
      src: "./images/apple-mcintosh.png",
      width: "200",
      height: "200",
      alt: "Mcintosh Apple",
      type: "Mcintosh Apple",
    },
    {
      src: "./images/apple-pacific-rose.png",
      width: "200",
      height: "200",
      alt: "Pacific Rose Apple",
      type: "Pacific Rose Apple",
    },
    {
      src: "./images/apple-paula-red.png",
      width: "200",
      height: "200",
      alt: "Paula Red Apple",
      type: "Paula Red Apple",
    },
    {
      src: "./images/apple-red-delicious.png",
      width: "200",
      height: "200",
      alt: "Red Delicious Apple",
      type: "Red Delicious Apple",
    },
    {
      src: "./images/apple-wealthy.png",
      width: "200",
      height: "200",
      alt: "Wealthy Apple",
      type: "Wealthy Apple",
    },
  ];
  let oranges = [
    {
      src: "./images/orange-blood.png",
      width: "200",
      height: "200",
      alt: "Blood Orange",
      type: "Blood Orange",
    },
    {
      src: "./images/orange-cara-cara.png",
      width: "200",
      height: "200",
      alt: "Cara Cara Orange",
      type: "Cara Cara Orange",
    },
    {
      src: "./images/orange-clementine.png",
      width: "200",
      height: "200",
      alt: "Clementine Orange",
      type: "Clementine Orange",
    },
    {
      src: "./images/orange-florida-grapefruit.png",
      width: "200",
      height: "200",
      alt: "Florida Grapefruit",
      type: "Florida Grapefruit",
    },
    {
      src: "./images/orange-golden-nugget.png",
      width: "200",
      height: "200",
      alt: "Golden Nugget Orange",
      type: "Golden Nugget Orange",
    },
    {
      src: "./images/orange-heirloom-navel.png",
      width: "200",
      height: "200",
      alt: "Heirloom Navel Orange",
      type: "Heirloom Navel Orange",
    },
    {
      src: "./images/orange-mandarin.png",
      width: "200",
      height: "200",
      alt: "Mandarin Orange",
      type: "Mandarin Orange",
    },
    {
      src: "./images/orange-murcott.png",
      width: "200",
      height: "200",
      alt: "Murcott Mandarin",
      type: "Murcott Mandarin",
    },
    {
      src: "./images/orange-pink-grapefruit.png",
      width: "200",
      height: "200",
      alt: "Pink Grapefruit",
      type: "Pink Grapefruit",
    },
    {
      src: "./images/orange-seville-sour.png",
      width: "200",
      height: "200",
      alt: "Seville Sour Orange",
      type: "Seville Sour Orange",
    },
    {
      src: "./images/orange-tangerine.png",
      width: "200",
      height: "200",
      alt: "Tangerine",
      type: "Tangerine",
    },
  ];
  for (value of apples) {
    let createImgTag = document.createElement("img");
    let createFigureTag = document.createElement("figure");
    let createFigureCaption = document.createElement("figcaption");
    createImgTag.src = value.src;
    createImgTag.width = value.width;
    createImgTag.height = value.height;
    createImgTag.alt = value.alt;
    createFigureCaption.innerText = `${value.type}`;
    document.getElementById("apples").append(createFigureTag);
    createFigureTag.append(createImgTag);
    createFigureTag.append(createFigureCaption);
  }
  for (value of oranges) {
    let createImgTag = document.createElement("img");
    let createFigureTag = document.createElement("figure");
    let createFigureCaption = document.createElement("figcaption");
    createImgTag.src = value.src;
    createImgTag.width = value.width;
    createImgTag.height = value.height;
    createImgTag.alt = value.alt;
    createFigureCaption.innerText = `${value.type}`;
    document.getElementById("oranges").append(createFigureTag);
    createFigureTag.append(createImgTag);
    createFigureTag.append(createFigureCaption);
  }
})();

let productos = [
  { id: 1, name: "PixelArt Mario", category:'gaming', stock: 10, img:'img/mariKart1.jpg' },
  { id: 2, name: "PixelArt Hero", category:'gaming', stock: 1, img:'img/pixel-hero.jpg' },
  { id: 3, name: "Landscape 1", category:'nature', stock: 5, img:'img/Landscape-1.jpg' },
  { id: 4, name: "Landscape 2", category:'nature', stock: 12, img:'img/Landscape-2.jpg' },
  { id: 5, name: "Landscape 3", category:'nature', stock: 20, img:'img/Landscape-3.jpg' },
];

const gFetch = () => {
  return new Promise((res, rej) => {
    // Create
    setTimeout(() => res(productos) , 1000);
  });
};

export default gFetch;

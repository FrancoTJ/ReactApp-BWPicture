let productos = [
  { id: 1, name: "PixelArt Mario", category:'gaming', stock: 10, img:'https://graceful-pothos-e73712.netlify.app/img/mariKart1.jpg' },
  { id: 2, name: "PixelArt Hero", category:'gaming', stock: 4, img:'https://graceful-pothos-e73712.netlify.app/img/pixel-hero.jpg' },
  { id: 3, name: "Landscape 1", category:'nature', stock: 5, img:'https://graceful-pothos-e73712.netlify.app/img/Landscape-1.jpg' },
  { id: 4, name: "Landscape 2", category:'nature', stock: 12, img:'https://graceful-pothos-e73712.netlify.app/img/Landscape-2.jpg' },
  { id: 5, name: "Landscape 3", category:'nature', stock: 20, img:'https://graceful-pothos-e73712.netlify.app/img/Landscape-3.jpg' },
];

const gFetch = () => {
  return new Promise((res, rej) => {
    // Create
    setTimeout(() => res(productos) , 1000);
  });
};

export const findProducto = (filtro) => {
  // return productos[0]
  return productos.find(prod => prod.id == filtro)
};

export const filterCategory = (category) => {
  // return productos[0]
  return productos.filter(prod => prod.category == category)
};

export default gFetch;
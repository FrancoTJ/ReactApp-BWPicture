// Ya no en uso, utilizado como mock durante etapa de Desarrollo

let productos = [
  { id: 1, name: "PixelArt Mario", category:'gaming', price:100, stock: 10, img:'https://graceful-pothos-e73712.netlify.app/img/mariKart1.jpg' },
  { id: 2, name: "PixelArt Hero", category:'gaming', price:120, stock: 4, img:'https://graceful-pothos-e73712.netlify.app/img/pixel-hero.jpg' },
  { id: 3, name: "Landscape 1", category:'nature', price:80, stock: 5, img:'https://graceful-pothos-e73712.netlify.app/img/Landscape-1.jpg' },
  { id: 4, name: "Landscape 2", category:'nature', price:45, stock: 12, img:'https://graceful-pothos-e73712.netlify.app/img/Landscape-2.jpg' },
  { id: 5, name: "Landscape 3", category:'nature', price:72, stock: 20, img:'https://graceful-pothos-e73712.netlify.app/img/Landscape-3.jpg' },
];

const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(productos) , 500);
  });
};

export const findProduct = (idProduct) => {
  return productos.find(prod => prod.id == idProduct)
};

export const filterCategory = (category) => {
  return productos.filter(prod => prod.category == category)
};

export default gFetch;

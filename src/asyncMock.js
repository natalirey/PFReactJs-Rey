const products = [
  {
    id: 1,
    nombre: "Zapatillas Air Jordan 1 Mid",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/n/dn3706-401-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 800.0,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "0",
  },
  {
    id: 2,
    nombre: "Zapatillas Air Jordan Retro 4",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/h/dh6927-140-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900.0,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 3,
    nombre: "Zapatillas Air Jordan Retro 3",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/c/k/ck9246-136-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900.0,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 4,
    nombre: "Zapatillas Air Jordan 1 Mid",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/x/dx4332-800_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 800.0,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 5,
    nombre: "Zapatillas Air Jordan 1 Low",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/n/dn3739-060-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900.0,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 6,
    nombre: "Zapatillas Air Jordan 1 Low",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/q/dq8396-600-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 800,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 7,
    nombre: "Zapatillas Air Jordan 1 Mid",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/q/dq8417-006-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 800,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 8,
    nombre: "Zapatillas Air Jordan 1 Mid",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/q/dq8397-500-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 9,
    nombre: "Zapatillas Air Jordan 11 Retro Low",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/a/v/av2187-001-phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 10,
    nombre: "Zapatillas Air Jordan 11 Retro Low",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/9/1/919712-102-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 11,
    nombre: "Zapatillas Air Jordan 1 Retro Low",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/c/z/cz0775-001-frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 12,
    nombre: "Zapatillas Air Jordan 1 Mid",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/q/dq8426-301_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900,
    marca: "Air Jordan",
    category: "jordan",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 13,
    nombre: "Zapatillas Nike Air More Uptempo",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/v/dv6993-200-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 900,
    marca: "Nike",
    category: "nike",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 14,
    nombre: "Zapatillas Nike Dunk Low Lx",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/v/dv3054-001-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 600,
    marca: "Nike",
    category: "nike",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 15,
    nombre: "Zapatillas Nike Dunk Low Se",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/v/dv1694-900-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 600,
    marca: "Nike",
    category: "nike",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 16,
    nombre: "Zapatillas Nike Dunk Low Disrupt",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/d/v/dv4024-002-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 600,
    marca: "Nike",
    category: "nike",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 17,
    nombre: "Zapatillas Adidas Forum Exhibit Mid",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/g/x/gx4119-1-footwear-photography-side_lateral_center_view-transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 700,
    marca: "Adidas",
    category: "adidas",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 18,
    nombre: "Zapatillas Adidas Forum Low",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/f/y/fy7756_slc_ecom.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 700,
    marca: "Adidas",
    category: "adidas",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 19,
    nombre: "Zapatillas Adidas Forum Low",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/h/q/hq6807_1_footwear_photography_side_lateral_center_view_transparent_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 700,
    marca: "Adidas",
    category: "adidas",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
  {
    id: 20,
    nombre: "Zapatillas Adidas NMD_V3",
    imagen:
      "https://www.kicks.com.co/media/catalog/product/g/y/gy6818-1-footwear-photography-side_lateral_center_view-transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    precio: 700,
    marca: "Adidas",
    category: "adidas",
    descripcion: "Una colección que fusiona la herencia urbana con la modernidad. Cada diseño captura la esencia de la moda deportiva, conectando el pasado con el futuro.",
    stock: "50",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 500)
  })
}

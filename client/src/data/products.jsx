const products = [
    {
      name: "Nike Shoes",
      price: 4500,
      code:'X-001',
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Uniqlo Clothes",
      price: 450,
      code:'X-002',
      image:
        "https://images.unsplash.com/photo-1613461920867-9ea115fee900?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Owndays Glassess",
      price: 2500,
      code:'X-003',
      image:
        "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ikea cloth bags",
      price: 250,
      code:'X-004',
      image:
        "https://images.unsplash.com/photo-1628752660419-ad1c751abe72?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Apple Iphone15 ",
      price: 48000,
      code:'X-005',
      image:
        "https://images.unsplash.com/photo-1697120397972-cee0865a6fd6?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Keychron K4 Pro",
      price: 5500,
      code:'X-006',
      image:
        "https://images.unsplash.com/photo-1616933067445-4b556aa759c7?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marshall Stanmore",
      price: 13900,
      code:'X-007',
      image:
        "https://images.unsplash.com/photo-1613130338397-3aa779444c69?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Apple Macbook M1",
      price: 38000,
      code:'X-008',
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fossil Smartwatch",
      price: 3000,
      code:'X-009',
      image: "https://images.unsplash.com/photo-1613541409730-a106bc0b03ab?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Nike Soccer Ball",
      price: 500,
      code:'X-010',
      image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Levi's Denim Jacket",
      price: 1500,
      code:'X-011',
      image: "https://images.unsplash.com/photo-1573662073208-1f58a071c756?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dell XPS Laptop",
      price: 35000,
      code:'X-012',
      image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Converse Chuck Taylor Sneakers",
      price: 800,
      code:'X-013',
      image: "https://images.unsplash.com/photo-1527128296579-fce16948f060?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Casio G-Shock Watch",
      price: 2200,
      code:'X-014',
      image: "https://images.unsplash.com/photo-1631289990702-4134435297f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sony Noise-Canceling Earbuds",
      price: 2000,
      code:'X-015',
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Toon",
      code: "X-999",
      price: "999",
      avatars: [
          {
              "url": "https://res.cloudinary.com/dpsrbpkav/image/upload/v1702453601/xsurface/bhmq7se31trkldqimuuo.jpg",
              "publicId": "xsurface/bhmq7se31trkldqimuuo"
          }
      ]
    }
  ];
  
  export default products;
  
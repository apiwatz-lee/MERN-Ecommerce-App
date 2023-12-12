const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Step into style and comfort with our trendy casual sneakers. From classic to contemporary. ",
    },
    {
      id: 2,
      name: "Uniqlo Clothes",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1613461920867-9ea115fee900?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Discover a fusion of minimalist design and exceptional quality in our clothing. ",
    },
    {
      id: 3,
      name: "Owndays Glassess",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Elevate your look with our curated collection of glasses, where fashion meets functionality. ",
    },
    {
      id: 4,
      name: "Ikea cloth bags",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1628752660419-ad1c751abe72?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Step into sustainability with our chic cloth bags, where fashion meets conscience.",
    },
    {
      id: 5,
      name: "Apple Iphone15 ",
      price: 48000,
      image:
        "https://images.unsplash.com/photo-1697120397972-cee0865a6fd6?q=80&w=2797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Experience the future of mobile technology where innovation meets sophistication. ",
    },
    {
      id: 6,
      name: "Keychron K4 Pro",
      price: 5500,
      image:
        "https://images.unsplash.com/photo-1616933067445-4b556aa759c7?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A mechanical keyboard meticulously designed to redefine your typing experience.",
    },
    {
      id: 7,
      name: "Marshall Stanmore",
      price: 13900,
      image:
        "https://images.unsplash.com/photo-1613130338397-3aa779444c69?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Experience audio excellence with the Marshall Urban Beat. ",
    },
    {
      id: 8,
      name: "Apple Macbook M1",
      price: 38000,
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Unleash your creativity with unparalleled performance, stunning visuals, and a sleek design.",
    },
    {
      id: 9,
      name: "Fossil Smartwatch",
      price: 3000,
      image: "https://images.unsplash.com/photo-1613541409730-a106bc0b03ab?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Stay connected and stylish with the Fossil Smartwatch.",
    },
    {
      id: 10,
      name: "Nike Soccer Ball",
      price: 500,
      image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Kick it like a pro with our high-quality Nike Soccer Ball.",
    },
    {
      id: 11,
      name: "Levi's Denim Jacket",
      price: 1500,
      image: "https://images.unsplash.com/photo-1573662073208-1f58a071c756?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Complete your look with the timeless Levi's Denim Jacket.",
    },
    {
      id: 12,
      name: "Dell XPS Laptop",
      price: 35000,
      image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Experience powerful computing with the sleek Dell XPS Laptop.",
    },
    {
      id: 13,
      name: "Converse Chuck Taylor Sneakers",
      price: 800,
      image: "https://images.unsplash.com/photo-1527128296579-fce16948f060?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Step out in style with the iconic Converse Chuck Taylor Sneakers.",
    },
    {
      id: 14,
      name: "Casio G-Shock Watch",
      price: 2200,
      image: "https://images.unsplash.com/photo-1631289990702-4134435297f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Stay on time and on trend with the durable Casio G-Shock Watch.",
    },
    {
      id: 15,
      name: "Sony Noise-Canceling Earbuds",
      price: 2000,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Immerse yourself in crystal-clear audio with Sony Noise-Canceling Earbuds.",
    }
  ];
  
  export default products;
  
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
      name: "Orange Cat",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Embrace the joy of having an Orange Cat as your loyal and loving companion",
    },
    {
      id: 10,
      name: "Golden Retriever",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Meet the Golden Harmony Retriever, where boundless joy meets a heart of gold. ",
    },
    {
      id: 10,
      name: "Golden Retriever",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Meet the Golden Harmony Retriever, where boundless joy meets a heart of gold. ",
    },
    {
      id: 10,
      name: "Golden Retriever",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Meet the Golden Harmony Retriever, where boundless joy meets a heart of gold. ",
    },
    {
      id: 10,
      name: "Golden Retriever",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Meet the Golden Harmony Retriever, where boundless joy meets a heart of gold. ",
    },
    {
      id: 10,
      name: "Golden Retriever",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Meet the Golden Harmony Retriever, where boundless joy meets a heart of gold. ",
    },
    {
      id: 10,
      name: "Golden Retriever",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Meet the Golden Harmony Retriever, where boundless joy meets a heart of gold. ",
    },
  ];
  
  export default products;
  
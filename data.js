export const blogs = [
  {
    title: "Cairo’s Crown Jewel",
    description:
      "If you ever find yourself wandering the streets of Cairo, there’s one place that will call out to youfrom the city’s skyline—the magnificent Mohammed Ali Mosque, perched high atop the Cairo Citadel. It's asight that you can’t miss, its gleaming domes rising above the hustle and bustle of the city",
    author: {
      name: "Jesica Koli",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-10-18T21:26:50.408Z",
    city: "London",
    categories: ["Travel", "Bike Riding", "Adventure"],
    image: "https://picsum.photos/id/15/600/500",
  },
  {
    title: "The best weekend trips",
    description:
      "Barcelona, Spain For a mix of culture and beach vibes, Barcelona offers stunning architecture, vibrant street life, and a coastline perfect for unwinding.Amsterdam, Netherlands - Explore charming canals, art museums, and the famous flower markets in this vibrant yet peaceful European city.",
    author: {
      name: "Eman Reda",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-10-18T21:26:50.408Z",
    city: "Cairo",
    categories: ["Fun", "Desert"],
    image: "https://picsum.photos/id/14/600/500",
  },
  {
    title: "Egypt’s Underwater Paradise",
    description:
      "I joined a snorkeling trip to Ras Mohammed National Park, a protectedmarine reserve. The boat ride was scenic, with the sun shining bright on the turquoise water. Once I jumped into the water with my snorkel gear, I was speechless. ",
    author: {
      name: "Esraa Abass",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-10-11T21:26:50.408Z",
    city: "Lebonan",
    categories: ["Entertainment", "Travel"],
    image: "https://picsum.photos/id/13/600/500",
  },
  {
    title: "A beginner's guid too hotel's",
    description:
      "Set a clear budget before booking. Hotels range from budget-friendly to luxury, so knowing how much you're willing to spend helps narrow down options.Choose a hotel close to the attractions you want to visit. Being centrally located can save you time and money on transportation.",
    author: {
      name: "John Doe",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-09-02T21:26:50.408Z",
    city: "New York",
    categories: ["Camel Riding", "Cinema"],
    image: "https://picsum.photos/id/17/600/500",
  },
  {
    title: "How to use less plastic when you travel",
    description:
      "Reducing plastic use while traveling is simple and impactful. Start by carrying a reusable water bottle to avoid buying single-use plastic bottles. Pack a reusable shopping bag for your purchases and snacks, and say no to plastic straws by bringing your own reusable straw and cutlery.",
    author: {
      name: "Jesica Koli",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-10-18T21:26:50.408Z",
    city: "London",
    categories: ["Travel", "Bike Riding", "Adventure"],
    image: "https://picsum.photos/id/27/600/500",
  },
  {
    title: "How to use less plastic when you travel",
    description:
      "Reducing plastic use while traveling is simple and impactful. Start by carrying a reusable water bottle to avoid buying single-use plastic bottles. Pack a reusable shopping bag for your purchases and snacks, and say no to plastic straws by bringing your own reusable straw and cutlery.",
    author: {
      name: "Jesica Koli",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-10-18T21:26:50.408Z",
    city: "London",
    categories: ["Travel", "Bike Riding", "Adventure"],
    image: "https://picsum.photos/id/10/600/500",
  },
  {
    title: "The best weekend trips",
    description:
      "Barcelona, Spain For a mix of culture and beach vibes, Barcelona offers stunning architecture, vibrant street life, and a coastline perfect for unwinding.Amsterdam, Netherlands - Explore charming canals, art museums, and the famous flower markets in this vibrant yet peaceful European city.",
    author: {
      name: "Eman Reda",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-10-18T21:26:50.408Z",
    city: "Cairo",
    categories: ["Fun", "Desert"],
    image: "https://picsum.photos/id/11/600/500",
  },
  {
    title: "Tips and tricks to plan yours next adventure",
    description:
      "Decide how much you want to spend and stick to it. Look for last-minute deals on flights, accommodations, and activities to save money, Opt for nearby places to minimize travel time and maximize your exploration. Weekend getaways or short-haul flights can offer just as much fun as long trips, ",
    author: {
      name: "Esraa Abass",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-10-11T21:26:50.408Z",
    city: "Lebonan",
    categories: ["Entertainment", "Travel"],
    image: "https://picsum.photos/id/12/600/500",
  },
  {
    title: "A beginner's guid too hotel's",
    description:
      "Set a clear budget before booking. Hotels range from budget-friendly to luxury, so knowing how much you're willing to spend helps narrow down options.Choose a hotel close to the attractions you want to visit. Being centrally located can save you time and money on transportation.",
    author: {
      name: "John Doe",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-09-02T21:26:50.408Z",
    city: "New York",
    categories: ["Camel Riding", "Cinema"],
    image: "https://picsum.photos/id/28/600/500",
  },
  {
    title: "How to use less plastic when you travel",
    description:
      "Reducing plastic use while traveling is simple and impactful. Start by carrying a reusable water bottle to avoid buying single-use plastic bottles. Pack a reusable shopping bag for your purchases and snacks, and say no to plastic straws by bringing your own reusable straw and cutlery.",
    author: {
      name: "Jesica Koli",
      avatar: "https://picsum.photos/50",
    },
    createdAt: "2024-10-18T21:26:50.408Z",
    city: "London",
    categories: ["Travel", "Bike Riding", "Adventure"],
    image: "https://picsum.photos/id/29/600/500",
  },
];

const uniqueArr = (arr) => arr.filter((elem, index) => arr.indexOf(elem) == index);

const allCategories = blogs.map((blog) => blog.categories).flat();

export const categories = uniqueArr(allCategories);

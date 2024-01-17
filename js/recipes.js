const recipes = [
  {
    id: 0,
    name: "Chicken Adobo",
    description:
      "A savory and slightly tangy dish made with meat, soy sauce, vinegar, and garlic.",
    ingredients: [
      "1.5 to 2 pounds chicken pieces (legs, thighs, or a combination)",
      "1 onion, peeled and sliced thinly",
      "1 head of garlic, peeled and minced",
      "1 cup soy sauce",
      "1 cup white vinegar",
      "1 teaspoon whole peppercorns",
      "2 bay leaves",
      "1 tablespoon cooking oil",
      "1 cup water (optional, for a less intense flavor)",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a large bowl, combine the chicken, soy sauce, vinegar, minced garlic, and peppercorns.",
      "Marinate the chicken in the refrigerator for at least 30 minutes to an hour. For a richer flavor, marinate it longer, even overnight.",
      "Heat oil in a wide, heavy-bottomed skillet or pot over medium heat.",
      "Add the sliced onions and cook until they become soft and translucent.",
      "Add the marinated chicken, including the marinade, to the pot.",
      "Add bay leaves and bring the mixture to a boil. Boil for 2-3 minutes.",
      "Reduce heat to low, cover, and let it simmer for about 30-40 minutes or until the chicken is tender. Add water if you want to mellow down the flavor.",
      "Stir occasionally to make sure the chicken is evenly coated with the sauce.",
      "Taste the adobo and adjust the seasoning by adding salt and pepper according to your preference.",
      "Serve the Chicken Adobo over steamed rice.",
    ],
    cookTime: "1 hour",
    image: "chicken_adobo.jpg",
    category: "chicken",
  },
  {
    id: 1,
    name: "Pork Sinigang",
    description: "A sour tamarind-based soup with various vegetables and pork.",
    ingredients: [
      "1 pound pork ribs or pork belly, cut into serving pieces",
      "1 packet (about 1.4 ounces) sinigang mix (tamarind soup base)",
      "1 onion, peeled and sliced",
      "1 tomato, sliced",
      "1 radish, peeled and sliced",
      "1 cup string beans, cut into 2-inch lengths",
      "1 bunch water spinach (kangkong), washed and trimmed",
      "2 eggplants, sliced",
      "2 green chili peppers",
      "Salt and fish sauce to taste",
    ],
    instructions: [
      "In a pot, bring about 8 cups of water to a boil.",
      "Add pork ribs or pork belly and sinigang mix. Simmer until pork is tender.",
      "Add sliced onion and tomato. Continue simmering until vegetables are almost tender.",
      "Add radish, string beans, eggplants, and green chili peppers. Simmer until all vegetables are cooked.",
      "Season with salt and fish sauce to taste.",
      "Serve hot and enjoy your Pork Sinigang!",
    ],
    cookTime: "45 minutes",
    image: "pork_sinigang.jpg",
    category: "pork",
  },
  {
    id: 2,
    name: "Lechon Kawali",
    description: "Crispy fried pork belly served with a side of liver sauce.",
    ingredients: [
      "Pork belly",
      "Salt",
      "Pepper",
      "Garlic",
      "Water",
      "Oil for frying",
    ],
    instructions: [
      "Boil pork belly until tender.",
      "Air-dry or refrigerate to dry the skin.",
      "Deep fry until crispy.",
      "Serve with liver sauce.",
    ],
    cookTime: "1.5 hours",
    image: "lechon_kawali.jpg",
    category: "pork",
  },
  {
    id: 3,
    name: "Pinakbet",
    description:
      "A flavorful Filipino vegetable dish made with mixed vegetables and shrimp paste.",
    ingredients: [
      "1/2 pound pork belly, sliced",
      "1 cup squash, peeled and sliced",
      "1 cup eggplant, sliced",
      "1 cup okra",
      "1 cup string beans, cut into 2-inch pieces",
      "1 medium-sized bitter gourd (ampalaya), sliced",
      "2 medium-sized tomatoes, sliced",
      "1 medium-sized onion, sliced",
      "4 cloves garlic, minced",
      "2 tablespoons shrimp paste (bagoong)",
      "2 cups water",
      "Salt and pepper to taste",
      "2 tablespoons cooking oil",
    ],
    instructions: [
      "In a pot, heat oil and sauté garlic, onion, and tomatoes until soft.",
      "Add pork belly and cook until browned.",
      "Stir in shrimp paste and cook for a few minutes.",
      "Pour water into the pot and bring it to a boil.",
      "Add squash, eggplant, bitter gourd, string beans, and okra. Simmer until vegetables are tender.",
      "Season with salt and pepper to taste.",
      "Serve hot and enjoy your Pinakbet!",
    ],
    cookTime: "45 minutes",
    image: "pinakbet.jpg",
    category: "vegetable",
  },
  {
    id: 4,
    name: "Chopsuey",
    description:
      "A delightful mixed vegetable stir-fry with meat, commonly served in a savory sauce.",
    ingredients: [
      "1/2 pound chicken breast, sliced",
      "1/2 pound pork, thinly sliced",
      "1 cup shrimp, peeled and deveined",
      "1 cup cauliflower florets",
      "1 cup broccoli florets",
      "1 cup snow peas",
      "1 cup carrots, sliced",
      "1 cup bell peppers, sliced",
      "1 cup cabbage, shredded",
      "1 cup baby corn, halved",
      "1 cup mushrooms, sliced",
      "1 cup chicken broth",
      "3 tablespoons oyster sauce",
      "2 tablespoons soy sauce",
      "1 tablespoon cornstarch, dissolved in water",
      "3 cloves garlic, minced",
      "1 medium-sized onion, sliced",
      "2 tablespoons cooking oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a wok or large pan, heat oil and sauté garlic and onions until fragrant.",
      "Add chicken and pork slices. Cook until browned.",
      "Add shrimp and continue cooking until they turn pink.",
      "Stir in vegetables - cauliflower, broccoli, snow peas, carrots, bell peppers, cabbage, baby corn, and mushrooms.",
      "In a bowl, mix chicken broth, oyster sauce, soy sauce, and dissolved cornstarch. Pour the mixture into the pan.",
      "Season with salt and pepper to taste. Stir well.",
      "Simmer until the vegetables are cooked but still crisp.",
      "Serve hot and enjoy your delicious Chopsuey!",
    ],
    cookTime: "30 minutes",
    image: "chopsuey.jpg",
    category: "vegetable",
  },
  {
    id: 5,
    name: "Paksiw na Isda",
    description:
      "A Filipino dish of fish cooked in vinegar, garlic, ginger, and spices for a flavorful and tangy taste.",
    ingredients: [
      "1 pound fish (mackerel, bangus/milkfish, or any firm-fleshed fish), cleaned and sliced",
      "1/2 cup vinegar",
      "1/2 cup soy sauce",
      "1 cup water",
      "1 thumb-sized ginger, sliced",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "2-3 pieces green chili peppers",
      "1 teaspoon peppercorns",
      "2 bay leaves",
      "Salt to taste",
      "2 tablespoons cooking oil",
    ],
    instructions: [
      "In a wide pan, arrange fish slices at the bottom.",
      "In a bowl, mix vinegar, soy sauce, water, ginger, garlic, onion, green chili peppers, peppercorns, and bay leaves.",
      "Pour the mixture over the fish slices. Add salt to taste.",
      "Cover and simmer over medium heat until the fish is cooked and the sauce thickens.",
      "Drizzle with cooking oil and continue to simmer for a few more minutes.",
      "Serve hot and enjoy your Paksiw na Isda with steamed rice!",
    ],
    cookTime: "30 minutes",
    image: "paksiw_na_isda.jpg",
    category: "fish",
  },
  {
    id: 6,
    name: "Menudo",
    description:
      "A hearty Filipino stew made with pork, liver, potatoes, carrots, and bell peppers in a flavorful tomato sauce.",
    ingredients: [
      "1 pound pork, cut into small cubes",
      "1/2 cup pork liver, sliced into small pieces",
      "1 large potato, peeled and diced",
      "1 carrot, peeled and diced",
      "1 red bell pepper, diced",
      "1 green bell pepper, diced",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "1 cup tomato sauce",
      "1/2 cup soy sauce",
      "1/2 cup water",
      "1 teaspoon sugar",
      "Salt and pepper to taste",
      "3 tablespoons cooking oil",
    ],
    instructions: [
      "In a pan, heat cooking oil and sauté garlic and onion until fragrant.",
      "Add pork and liver. Cook until browned.",
      "Stir in tomato sauce, soy sauce, and water. Simmer for 15-20 minutes.",
      "Add potatoes, carrots, and bell peppers. Continue cooking until vegetables are tender.",
      "Season with sugar, salt, and pepper to taste.",
      "Simmer for an additional 10-15 minutes until the sauce thickens.",
      "Serve hot and enjoy your delicious Menudo with steamed rice!",
    ],
    cookTime: "45 minutes",
    image: "menudo.jpg",
    category: "pork",
  },
  {
    id: 7,
    name: "Beef Steak (Bistek Tagalog)",
    description:
      "Filipino beef steak marinated and cooked with soy sauce, calamansi juice, and garlic.",
    ingredients: [
      "1 pound beef sirloin, thinly sliced",
      "1/2 cup soy sauce",
      "1/4 cup calamansi juice (or lemon juice)",
      "4 cloves garlic, minced",
      "1 onion, sliced into rings",
      "1/2 teaspoon pepper",
      "2 tablespoons cooking oil",
      "1 cup water",
      "Salt to taste",
    ],
    instructions: [
      "In a bowl, combine soy sauce, calamansi juice, minced garlic, and pepper. Marinate the beef slices for at least 30 minutes.",
      "Heat cooking oil in a pan. Sauté onion rings until soft and translucent. Set aside.",
      "In the same pan, pan-fry the marinated beef slices until browned on both sides.",
      "Add the marinade and water. Simmer until the beef is tender and the sauce thickens.",
      "Season with salt to taste.",
      "Top the beef slices with sautéed onions.",
      "Serve hot and enjoy your Beef Steak (Bistek Tagalog) over steamed rice!",
    ],
    cookTime: "1 hour",
    image: "beef_steak.jpg",
    category: "beef",
  },
  {
    id: 9,
    name: "Kusido",
    description:
      "A hearty Filipino fish stew with a medley of vegetables and rich broth.",
    ingredients: [
      "1 pound fish fillet (maya-maya, lapu-lapu, or any firm white fish)",
      "1 cup potatoes, diced",
      "1 cup carrots, sliced",
      "1 cup green bell pepper, sliced",
      "1 cup corn kernels",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "2 tomatoes, diced",
      "1 thumb-sized ginger, julienned",
      "2 green chili peppers",
      "1/4 cup fish sauce",
      "1 teaspoon ground black pepper",
      "2 tablespoons cooking oil",
      "4 cups fish or vegetable broth",
    ],
    instructions: [
      "In a pot, heat cooking oil and sauté garlic, onion, and ginger until fragrant.",
      "Add tomatoes and cook until softened.",
      "Pour in fish or vegetable broth. Bring to a boil.",
      "Add fish fillet, potatoes, carrots, green bell pepper, corn, and green chili peppers.",
      "Simmer until the fish is cooked and the vegetables are tender.",
      "Season with fish sauce and ground black pepper. Adjust to taste.",
      "Serve hot and enjoy your comforting Fish Cocido with steamed rice!",
    ],
    cookTime: "45 minutes",
    image: "kusido.jpg",
    category: "fish",
  },
  {
    id: 10,
    name: "Adobong Manok sa Gata",
    description:
      "A delicious Filipino chicken adobo with a twist, cooked with coconut milk for a creamy and savory flavor.",
    ingredients: [
      "1.5 to 2 pounds chicken pieces (legs, thighs, or a combination)",
      "1 onion, peeled and sliced thinly",
      "4 cloves garlic, peeled and minced",
      "1 cup coconut milk",
      "1 cup soy sauce",
      "1 cup vinegar",
      "1 teaspoon whole peppercorns",
      "2 bay leaves",
      "1 tablespoon cooking oil",
      "1 cup water (optional, for a less intense flavor)",
      "Salt to taste",
      "Pepper to taste",
    ],
    instructions: [
      "Marinate the chicken in a mixture of soy sauce, vinegar, minced garlic, and peppercorns for at least 30 minutes to an hour.",
      "Heat oil in a pot and sauté sliced onions until soft and translucent.",
      "Add the marinated chicken, bay leaves, and bring to a boil. Boil for 2-3 minutes.",
      "Reduce heat to low, cover, and simmer for 30-40 minutes or until the chicken is tender. Add water if desired.",
      "Adjust seasoning with salt and pepper according to your preference.",
      "Pour in coconut milk and simmer for an additional 10-15 minutes or until the sauce thickens.",
      "Serve the Adobong Manok sa Gata over steamed rice.",
    ],
    cookTime: "1 hour",
    image: "adobong_manok_gata.jpg",
    category: "chicken",
  },
  {
    id: 11,
    name: "Nilagang Baka",
    description:
      "A hearty Filipino beef soup with boiled beef, corn on the cob, and various vegetables.",
    ingredients: [
      "2 pounds beef shank, cut into serving pieces",
      "4 pieces corn on the cob, each cut into 3 parts",
      "4 pieces saba banana, peeled and halved",
      "2 pieces potato, peeled and quartered",
      "2 pieces sweet potato, peeled and quartered",
      "1 bundle pechay (bok choy), leaves separated",
      "1 piece plantain banana (saging na saba), peeled and halved",
      "1 medium-sized onion, peeled and quartered",
      "4 cloves garlic, peeled and crushed",
      "Salt to taste",
      "Pepper to taste",
      "Fish sauce or shrimp paste (bagoong) for dipping",
    ],
    instructions: [
      "In a large pot, combine beef shank, onion, and garlic. Add enough water to cover the meat.",
      "Bring to a boil and skim off any scum that rises to the surface.",
      "Lower the heat and let it simmer until the beef is tender, usually takes about 2-3 hours.",
      "Once the beef is tender, add corn on the cob, saba banana, plantain banana, potato, and sweet potato. Simmer until the vegetables are cooked.",
      "Season with salt and pepper to taste.",
      "Add pechay leaves and cook for an additional 2 minutes or until the leaves are wilted.",
      "Serve hot and enjoy your comforting Nilagang Baka with fish sauce or shrimp paste on the side.",
    ],
    cookTime: "2-3 hours",
    image: "nilagang_baka.jpg",
    category: "beef",
  },
  {
    id: 12,
    name: "Tortang Talong",
    description:
      "A Filipino eggplant omelette typically served with rice and a side of fish sauce or vinegar dip.",
    ingredients: [
      "4 large eggplants",
      "3 large eggs",
      "Salt to taste",
      "Pepper to taste",
      "Cooking oil for frying",
      "Fish sauce or vinegar for dipping",
    ],
    instructions: [
      "Roast the eggplants over an open flame or grill until the skin is charred and the flesh is soft. Allow them to cool.",
      "Peel the skin off the eggplants, leaving the stems intact. Flatten the eggplants by gently pressing down on them with the back of a fork or spoon.",
      "In a bowl, beat the eggs and season with salt and pepper to taste.",
      "Dip each flattened eggplant in the beaten eggs, making sure to coat both sides.",
      "In a pan, heat cooking oil over medium heat. Fry the egg-coated eggplants until golden brown on both sides.",
      "Place the fried eggplants on a serving plate and serve hot with fish sauce or vinegar on the side.",
      "Enjoy your delicious Tortang Talong with steamed rice!",
    ],
    cookTime: "30 minutes",
    image: "tortang_talong.jpg",
    category: "vegetable",
  },
  {
    id: 13,
    name: "Pork Sisig",
    description:
      "A popular Filipino dish made from minced pork, usually served on a sizzling plate. It's known for its savory, sour, and slightly spicy flavors.",
    ingredients: [
      "1 pound pork belly, finely chopped",
      "1 onion, minced",
      "3 cloves garlic, minced",
      "3-4 green chili peppers, minced",
      "1 red chili pepper, minced (optional for extra heat)",
      "1 tablespoon soy sauce",
      "1 tablespoon oyster sauce",
      "1 tablespoon mayonnaise",
      "1 tablespoon calamansi or lemon juice",
      "Salt and pepper to taste",
      "Cooking oil for sautéing",
      "Chopped green onions and sliced red chili for garnish",
      "Sizzling plate for serving",
    ],
    instructions: [
      "In a pan, heat cooking oil over medium heat. Sauté minced garlic until golden brown.",
      "Add minced pork belly and cook until it turns crispy and golden brown.",
      "Add minced onion, green chili peppers, and red chili pepper (if using). Sauté until the onions are translucent.",
      "Stir in soy sauce, oyster sauce, and mayonnaise. Mix well to coat the pork evenly.",
      "Season with salt and pepper to taste. Cook for a few more minutes until everything is well combined.",
      "Drizzle calamansi or lemon juice over the sisig and mix thoroughly.",
      "Transfer the Pork Sisig to a sizzling plate, garnish with chopped green onions and sliced red chili, and serve hot.",
      "Enjoy your sizzling and flavorful Pork Sisig with steamed rice!",
    ],
    cookTime: "30 minutes",
    image: "pork_sisig.jpg",
    category: "pork",
  },
  {
    id: 14,
    name: "Escabeche",
    description:
      "A Filipino sweet and sour fish dish made with fried fish, sweet and tangy sauce, and colorful vegetables. It's a delightful and flavorful dish commonly served during special occasions.",
    ingredients: [
      "1 whole fish (tilapia or lapu-lapu), cleaned and scaled",
      "1 cup flour, for dredging",
      "Salt and pepper to taste",
      "Cooking oil for frying",
      "1 red bell pepper, sliced into strips",
      "1 green bell pepper, sliced into strips",
      "1 carrot, julienned",
      "1 onion, sliced into rings",
      "3 cloves garlic, minced",
      "1 thumb-sized ginger, julienned",
      "1/2 cup vinegar",
      "1/2 cup water",
      "1/4 cup soy sauce",
      "1/4 cup sugar",
      "1 tablespoon cornstarch, dissolved in 2 tablespoons water",
      "Salt and pepper to taste",
      "Green onions for garnish",
      "Sesame seeds for garnish",
    ],
    instructions: [
      "Clean and scale the whole fish. Dredge the fish in flour, salt, and pepper, then fry until golden brown and crispy. Set aside.",
      "In a separate pan, sauté garlic and ginger until aromatic. Add the sliced onions, bell peppers, and julienned carrots. Stir-fry until the vegetables are slightly tender.",
      "In a bowl, mix together vinegar, water, soy sauce, and sugar to create the sweet and sour sauce. Pour the sauce into the pan with vegetables and bring to a simmer.",
      "Add the dissolved cornstarch to the sauce to thicken it. Adjust the taste with salt and pepper if needed.",
      "Place the fried fish on a serving plate and pour the sweet and sour sauce over it, ensuring the fish is well-coated.",
      "Garnish with green onions and sesame seeds for added flavor and presentation.",
      "Serve the Escabeche hot with steamed rice and enjoy this delightful sweet and sour fish dish!",
    ],
    cookTime: "30 minutes",
    image: "escabeche.jpg",
    category: "fish",
  },
  {
    id: 15,
    name: "Beef Tapa",
    description:
      "Beef Tapa is a classic Filipino dish made with thinly sliced beef marinated in a flavorful blend of soy sauce, garlic, and other seasonings. It's often enjoyed as a breakfast dish and is commonly served with garlic fried rice (sinangag) and fried eggs (itlog).",
    ingredients: [
      "1 pound beef sirloin or tenderloin, thinly sliced",
      "1/4 cup soy sauce",
      "3 tablespoons vinegar",
      "3 tablespoons brown sugar",
      "4 cloves garlic, minced",
      "1 teaspoon ground black pepper",
      "1/2 teaspoon salt",
      "Cooking oil for frying",
      "Garlic fried rice (sinangag) and fried eggs (itlog) for serving",
    ],
    instructions: [
      "In a bowl, combine soy sauce, vinegar, brown sugar, minced garlic, black pepper, and salt. Mix well until the sugar is dissolved.",
      "Add the thinly sliced beef to the marinade, ensuring each piece is well-coated. Marinate the beef for at least 2 hours or overnight in the refrigerator for better flavor absorption.",
      "In a pan over medium heat, add cooking oil. Fry the marinated beef slices until browned and caramelized, ensuring they are cooked to your desired level of doneness.",
      "Serve the Beef Tapa hot over a bed of garlic fried rice (sinangag) and with fried eggs (itlog) on the side.",
      "Enjoy this delicious and savory Filipino breakfast dish!",
    ],
    cookTime: "20 minutes",
    image: "beef_tapa.jpg",
    category: "beef",
  },
];

module.exports = { recipes };

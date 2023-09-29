import { AuthUser, Session, User } from "@supabase/supabase-js"
import {
  Meal,
  MealCategories,
  MealPerCategory,
  Meals,
  MealsPerCategory,
} from "@/types/meal"

import { Profile } from "@/types/database"

// SUPABASE DATA
export const fakeUser: User = {
  id: "11111a4-e2cc-1111-2222-111111111ew11",
  aud: "authenticated",
  role: "authenticated",
  email: "test@gmail.com",
  email_confirmed_at: "2023-09-22T18:21:20.330287Z",
  phone: "",
  confirmation_sent_at: "2023-09-22T18:20:51.853919Z",
  confirmed_at: "2023-09-22T18:21:20.330287Z",
  last_sign_in_at: "2023-09-26T13:58:07.571113895Z",
  app_metadata: {
    provider: "email",
    providers: ["email"],
  },
  user_metadata: {},
  identities: [
    {
      id: "11111a4-e2cc-1111-2222-111111111ew11",
      user_id: "11111a4-e2cc-1111-2222-111111111ew11",
      identity_data: {
        email: "test@gmail.com",
        sub: "11111a4-e2cc-1111-2222-111111111ew11",
      },
      provider: "email",
      last_sign_in_at: "2023-09-22T18:20:51.851035Z",
      created_at: "2023-09-22T18:20:51.851076Z",
      updated_at: "2023-09-22T18:20:51.851076Z",
    },
  ],
  created_at: "2023-09-22T18:20:51.847305Z",
  updated_at: "2023-09-26T13:58:07.574434Z",
}
export const fakeUserEmailTaken: User = {
  id: "11111a4-e2cc-1111-2222-111111111ew11",
  aud: "authenticated",
  role: "authenticated",
  email: "test@gmail.com",
  email_confirmed_at: "2023-09-22T18:21:20.330287Z",
  phone: "",
  confirmation_sent_at: "2023-09-22T18:20:51.853919Z",
  confirmed_at: "2023-09-22T18:21:20.330287Z",
  last_sign_in_at: "2023-09-26T13:58:07.571113895Z",
  app_metadata: {
    provider: "email",
    providers: ["email"],
  },
  user_metadata: {},
  identities: [],
  created_at: "2023-09-22T18:20:51.847305Z",
  updated_at: "2023-09-26T13:58:07.574434Z",
}
export const fakeUserAuth: AuthUser = {
  id: "123",
  app_metadata: {},
  user_metadata: {},
  aud: "12345",
  email: "test@gmail.com",
  created_at: "2022-05-17T10:30:00Z",
}
export const fakeUserProfile: Profile = {
  avatar_url: null,
  bio: "Nothing yet",
  id: "123",
  username: "testuser",
  favourites: [],
  recipes: [],
  updated_at: "2022-05-17T10:30:00Z",
}
export const fakeUserSession: Session = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsImtwefwefwefwefc sjchskucbwekucvbuewycvjewcvjygvkxbqiwdcfg",
  token_type: "bearer",
  expires_in: 3600,
  expires_at: 1695740287,
  refresh_token: "SKmJZxc7q6bEsEVjLjubmQ",
  user: {
    id: "11111a4-e2cc-1111-2222-111111111ew11",
    aud: "authenticated",
    role: "authenticated",
    email: "test@gmail.com",
    email_confirmed_at: "2023-09-22T18:21:20.330287Z",
    phone: "",
    confirmation_sent_at: "2023-09-22T18:20:51.853919Z",
    confirmed_at: "2023-09-22T18:21:20.330287Z",
    last_sign_in_at: "2023-09-26T13:58:07.571113895Z",
    app_metadata: {
      provider: "email",
      providers: ["email"],
    },
    user_metadata: {},
    identities: [
      {
        id: "11111a4-e2cc-1111-2222-111111111ew11",
        user_id: "11111a4-e2cc-1111-2222-111111111ew11",
        identity_data: {
          email: "test@gmail.com",
          sub: "11111a4-e2cc-1111-2222-111111111ew11",
        },
        provider: "email",
        last_sign_in_at: "2023-09-22T18:20:51.851035Z",
        created_at: "2023-09-22T18:20:51.851076Z",
        updated_at: "2023-09-22T18:20:51.851076Z",
      },
    ],
    created_at: "2023-09-22T18:20:51.847305Z",
    updated_at: "2023-09-26T13:58:07.574434Z",
  },
}
export const fakeUserEmailTakenSession: Session = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsImtwefwefwefwefc sjchskucbwekucvbuewycvjewcvjygvkxbqiwdcfg",
  token_type: "bearer",
  expires_in: 3600,
  expires_at: 1695740287,
  refresh_token: "SKmJZxc7q6bEsEVjLjubmQ",
  user: {
    id: "11111a4-e2cc-1111-2222-111111111ew11",
    aud: "authenticated",
    role: "authenticated",
    email: "test@gmail.com",
    email_confirmed_at: "2023-09-22T18:21:20.330287Z",
    phone: "",
    confirmation_sent_at: "2023-09-22T18:20:51.853919Z",
    confirmed_at: "2023-09-22T18:21:20.330287Z",
    last_sign_in_at: "2023-09-26T13:58:07.571113895Z",
    app_metadata: {
      provider: "email",
      providers: ["email"],
    },
    user_metadata: {},
    identities: [],
    created_at: "2023-09-22T18:20:51.847305Z",
    updated_at: "2023-09-26T13:58:07.574434Z",
  },
}
export const fakeUserCreate = {
  user: fakeUser,
  session: fakeUserSession,
}
export const fakeUserEmailTakenCreate = {
  user: fakeUserEmailTaken,
  session: fakeUserSession,
}
export const fakeUrlImage = "url_test.png"

// MEAL DATA
export const fakeMeal: Meal = {
  idMeal: "52977",
  strMeal: "Corba",
  strDrinkAlternate: null,
  strCategory: "Side",
  strArea: "Turkish",
  strInstructions:
    "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you\u2019ll have to break up later\r\nIn a large pot over medium-high heat, saut\u00e9 the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
  strTags: "Soup",
  strYoutube: "https://www.youtube.com/watch?v=VVnZd8A84z4",
  strIngredient1: "Lentils",
  strIngredient2: "Onion",
  strIngredient3: "Carrots",
  strIngredient4: "Tomato Puree",
  strIngredient5: "Cumin",
  strIngredient6: "Paprika",
  strIngredient7: "Mint",
  strIngredient8: "Thyme",
  strIngredient9: "Black Pepper",
  strIngredient10: "Red Pepper Flakes",
  strIngredient11: "Vegetable Stock",
  strIngredient12: "Water",
  strIngredient13: "Sea Salt",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strMeasure1: "1 cup ",
  strMeasure2: "1 large",
  strMeasure3: "1 large",
  strMeasure4: "1 tbs",
  strMeasure5: "2 tsp",
  strMeasure6: "1 tsp ",
  strMeasure7: "1/2 tsp",
  strMeasure8: "1/2 tsp",
  strMeasure9: "1/4 tsp",
  strMeasure10: "1/4 tsp",
  strMeasure11: "4 cups ",
  strMeasure12: "1 cup ",
  strMeasure13: "Pinch",
  strMeasure14: " ",
  strMeasure15: " ",
  strMeasure16: " ",
  strMeasure17: " ",
  strMeasure18: " ",
  strMeasure19: " ",
  strMeasure20: " ",
  strSource:
    "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/",
  dateModified: null,
}
export const fakeMeals: Meals = {
  meals: [
    {
      idMeal: "52977",
      strMeal: "Corba",
      strDrinkAlternate: null,
      strCategory: "Side",
      strArea: "Turkish",
      strInstructions:
        "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you\u2019ll have to break up later\r\nIn a large pot over medium-high heat, saut\u00e9 the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
      strTags: "Soup",
      strYoutube: "https://www.youtube.com/watch?v=VVnZd8A84z4",
      strIngredient1: "Lentils",
      strIngredient2: "Onion",
      strIngredient3: "Carrots",
      strIngredient4: "Tomato Puree",
      strIngredient5: "Cumin",
      strIngredient6: "Paprika",
      strIngredient7: "Mint",
      strIngredient8: "Thyme",
      strIngredient9: "Black Pepper",
      strIngredient10: "Red Pepper Flakes",
      strIngredient11: "Vegetable Stock",
      strIngredient12: "Water",
      strIngredient13: "Sea Salt",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "1 cup ",
      strMeasure2: "1 large",
      strMeasure3: "1 large",
      strMeasure4: "1 tbs",
      strMeasure5: "2 tsp",
      strMeasure6: "1 tsp ",
      strMeasure7: "1/2 tsp",
      strMeasure8: "1/2 tsp",
      strMeasure9: "1/4 tsp",
      strMeasure10: "1/4 tsp",
      strMeasure11: "4 cups ",
      strMeasure12: "1 cup ",
      strMeasure13: "Pinch",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource:
        "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/",
      dateModified: null,
    },
    {
      idMeal: "53065",
      strMeal: "Sushi",
      strDrinkAlternate: null,
      strCategory: "Seafood",
      strArea: "Japanese",
      strInstructions:
        "STEP 1\r\nTO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.\r\n\r\nSTEP 2\r\nSpread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.\r\n\r\nSTEP 3\r\nAdd the filling. Get your child to top the mayonnaise with a line of their favourite fillings \u2013 here we\u2019ve used tuna and cucumber.\r\n\r\nSTEP 4\r\nRoll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.\r\n\r\nSTEP 5\r\nStick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.\r\n\r\nSTEP 6\r\nWrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.\r\n\r\nSTEP 7\r\nTO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.\r\n\r\nSTEP 8\r\nCover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.\r\n\r\nSTEP 9\r\nTip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.\r\n\r\nSTEP 10\r\nTO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.\r\n\r\nSTEP 11\r\nMake into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=ub68OxEypaY",
      strIngredient1: "Sushi Rice",
      strIngredient2: "Rice wine",
      strIngredient3: "Caster Sugar",
      strIngredient4: "Mayonnaise",
      strIngredient5: "Rice wine",
      strIngredient6: "Soy Sauce",
      strIngredient7: "Cucumber",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "300ml ",
      strMeasure2: "100ml",
      strMeasure3: "2 tbs",
      strMeasure4: "3 tbs",
      strMeasure5: "1 tbs",
      strMeasure6: "1 tbs",
      strMeasure7: "1",
      strMeasure8: " ",
      strMeasure9: " ",
      strMeasure10: " ",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource: "https://www.bbcgoodfood.com/recipes/simple-sushi",
      dateModified: null,
    },
    {
      idMeal: "53060",
      strMeal: "Burek",
      strDrinkAlternate: null,
      strCategory: "Side",
      strArea: "Croatian",
      strInstructions:
        "Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200\u00baC/392\u00baF for half an hour and cut in quarters and serve.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
      strTags: "Streetfood, Onthego",
      strYoutube: "https://www.youtube.com/watch?v=YsJXZwE5pdY",
      strIngredient1: "Filo Pastry",
      strIngredient2: "Minced Beef",
      strIngredient3: "Onion",
      strIngredient4: "Oil",
      strIngredient5: "Salt",
      strIngredient6: "Pepper",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "1 Packet",
      strMeasure2: "150g",
      strMeasure3: "150g",
      strMeasure4: "40g",
      strMeasure5: "Dash",
      strMeasure6: "Dash",
      strMeasure7: " ",
      strMeasure8: " ",
      strMeasure9: " ",
      strMeasure10: " ",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource:
        "https://www.visit-croatia.co.uk/croatian-cuisine/croatian-recipes/",
      dateModified: null,
    },
    {
      idMeal: "52978",
      strMeal: "Kumpir",
      strDrinkAlternate: null,
      strCategory: "Side",
      strArea: "Turkish",
      strInstructions:
        "If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There\u2019s then a row of other toppings that you can just point at to your heart\u2019s content \u2013 sweetcorn, olives, salami, coleslaw, Russian salad, allsorts \u2013 and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer.\r\n\r\nGrate (roughly \u2013 you can use as much as you like) 150g of cheese.\r\nFinely chop one onion and one sweet red pepper.\r\nPut these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional).",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
      strTags: "SideDish",
      strYoutube: "https://www.youtube.com/watch?v=IEDEtZ4UVtI",
      strIngredient1: "Potatoes",
      strIngredient2: "Butter",
      strIngredient3: "Cheese",
      strIngredient4: "Onion",
      strIngredient5: "Red Pepper",
      strIngredient6: "Red Chile Flakes",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "2 large",
      strMeasure2: "2 tbs",
      strMeasure3: "150g",
      strMeasure4: "1 large",
      strMeasure5: "1 large",
      strMeasure6: "Pinch",
      strMeasure7: " ",
      strMeasure8: " ",
      strMeasure9: " ",
      strMeasure10: " ",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource:
        "http://www.turkeysforlife.com/2013/10/firinda-kumpir-turkish-street-food.html",
      dateModified: null,
    },
  ],
}
export const fakeMealCategory: MealPerCategory = {
  strMeal: "Ayam Percik",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
  idMeal: "53050",
}

export const fakeMealCategories: MealCategories = {
  categories: [
    {
      idCategory: "1",
      strCategory: "Beef",
      strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
      strCategoryDescription:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
    },
    {
      idCategory: "2",
      strCategory: "Chicken",
      strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
      strCategoryDescription:
        "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      strCategoryDescription:
        "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
    },
    {
      idCategory: "4",
      strCategory: "Lamb",
      strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
      strCategoryDescription:
        "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/miscellaneous.png",
      strCategoryDescription:
        "General foods that don't fit into another category",
    },
    {
      idCategory: "6",
      strCategory: "Pasta",
      strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
      strCategoryDescription:
        "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
    },
    {
      idCategory: "7",
      strCategory: "Pork",
      strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
      strCategoryDescription:
        "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.",
    },
  ],
}
export const fakeMealByCategory: MealsPerCategory = {
  meals: [
    {
      strMeal: "Kapsalon",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
      idMeal: "52769",
    },
    {
      strMeal: "Keleya Zaara",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg",
      idMeal: "52974",
    },
    {
      strMeal: "Lamb and Lemon Souvlaki",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/rjhf741585564676.jpg",
      idMeal: "53009",
    },
    {
      strMeal: "Lamb and Potato pie",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sxrpws1511555907.jpg",
      idMeal: "52877",
    },
    {
      strMeal: "Lamb Biryani",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
      idMeal: "52805",
    },
    {
      strMeal: "Lamb Rogan josh",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg",
      idMeal: "52808",
    },
    {
      strMeal: "Lamb Tagine",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg",
      idMeal: "52843",
    },
  ],
}
export const fakeRecipe: Meals = {
  meals: [
    {
      idMeal: "53065",
      strMeal: "Sushi",
      strDrinkAlternate: null,
      strCategory: "Seafood",
      strArea: "Japanese",
      strInstructions:
        "STEP 1\r\nTO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.\r\n\r\nSTEP 2\r\nSpread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.\r\n\r\nSTEP 3\r\nAdd the filling. Get your child to top the mayonnaise with a line of their favourite fillings \u2013 here we\u2019ve used tuna and cucumber.\r\n\r\nSTEP 4\r\nRoll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.\r\n\r\nSTEP 5\r\nStick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.\r\n\r\nSTEP 6\r\nWrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.\r\n\r\nSTEP 7\r\nTO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.\r\n\r\nSTEP 8\r\nCover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.\r\n\r\nSTEP 9\r\nTip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.\r\n\r\nSTEP 10\r\nTO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.\r\n\r\nSTEP 11\r\nMake into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=ub68OxEypaY",
      strIngredient1: "Sushi Rice",
      strIngredient2: "Rice wine",
      strIngredient3: "Caster Sugar",
      strIngredient4: "Mayonnaise",
      strIngredient5: "Rice wine",
      strIngredient6: "Soy Sauce",
      strIngredient7: "Cucumber",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "300ml ",
      strMeasure2: "100ml",
      strMeasure3: "2 tbs",
      strMeasure4: "3 tbs",
      strMeasure5: "1 tbs",
      strMeasure6: "1 tbs",
      strMeasure7: "1",
      strMeasure8: " ",
      strMeasure9: " ",
      strMeasure10: " ",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource: "https://www.bbcgoodfood.com/recipes/simple-sushi",
      dateModified: null,
    },
  ],
}

const menu = [
    {
        id: 1,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Soft Drinks`,
        price: 'Varies',
        calories: [0, 200],
        description: `22 oz. ice-cold soft drink`
    },
    {
        id: 2,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Signature Diner Blend Coffee`,
        price: 'Varies',
        calories: [0],
        description: `Our 100% Arabica beans are sustainably harvested.`
    },
    {
        id: 3,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Hot Tea`,
        price: 2.39,
        calories: [0],
        description: `Lipton® Black Hot Tea`
    },
    {
        id: 4,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Hot Chocolate`,
        price: 2.59,
        calories: [190],
        description: `Cup of hot chocolate`
    },
    {
        id: 5,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Fresh Brewed Iced Tea`,
        price: 'Varies',
        calories: [5],
        description: `22 oz. ice-cold Fresh Brewed Iced Tea`
    },
    {
        id: 6,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Minute Maid® Lemonade`,
        price: 'Varies',
        calories: [150],
        description: `Premium Minute Maid® lemonades are made with real lemons and natural flavors.`
    },
    {
        id: 7,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Smoothies`,
        price: 'Varies',
        calories: [320, 340],
        description: `Made with fruit and nonfat vanilla yogurt`
    },
    {
        id: 8,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Juice`,
        price: 'Varies',
        calories: [210],
        description: `Glass of juice`
    },
    {
        id: 9,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Milk`,
        price: 'Varies',
        calories: [230, 290],
        description: `Glass of Milk`
    },
    {
        id: 10,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Dasani® Bottled Water`,
        price: 1.49,
        calories: [0],
        description: `Bottle of Dasani® water`
    },
    {
        id: 11,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `America's Diner Double`,
        price: 'Varies',
        calories: [820, 2930],
        description: `American cheese, caramelized onions and Diner Q sauce on a brioche bun.`
    },
    {
        id: 12,
        toGoFave: true,
        glutenFree: false,
        category: 'Dinner',
        name: `Build Your Own Burger`,
        price: 'Varies',
        calories: [270, 1250],
        description: `Lettuce, tomato, red onions and pickles included. Served with wavy-cut fries or seasonal fruit.`
    },
    {
        id: 13,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Double Cheeseburger`,
        price: 10.99,
        calories: [920, 1580],
        description: `Choice of American, Swiss or aged white cheddar cheese with lettuce, tomato, red onions and pickles on a brioche bun.`
    },
    {
        id: 14,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Bacon Avocado Cheeseburger`,
        price: 11.99,
        calories: [1020, 1510],
        description: `Bacon, fresh avocado, aged white cheddar cheese, mayo, lettuce, tomato, red onions and pickles on a brioche bun.`
    },
    {
        id: 15,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Bourbon Bacon Burger`,
        price: 11.29,
        calories: [870, 1360],
        description: `Cheddar cheese, bacon, sautéed mushrooms, fire-roasted bell peppers & onions, bourbon sauce, lettuce, tomato, red onions and pickles on a brioche bun. Served with wavy-cut fries or seasonal fruit.`
    },
    {
        id: 16,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Slamburger™`,
        price: 10.69,
        calories: [840, 1520],
        description: `Hash browns, an egg*, bacon and American cheese on a brioche bun. Served with wavy-cut fries or seasonal fruit.`
    },
    {
        id: 17,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Flamin' 5-Pepper Burger`,
        price: 10.79,
        calories: [1000, 1490],
        description: `Aged white cheddar cheese, bacon, jalapenos, 5-pepper sauce, mayo, lettuce, tomato, red onions and pickles on a brioche bun.`
    },
    {
        id: 18,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Chicken & Gravy Biscuit Bowl`,
        price: 9.89,
        calories: [330, 1120],
        description: `Two open-faced biscuits topped with premium golden-fried chicken tenders, country gravy, cheddar cheese and two eggs*`
    },
    {
        id: 19,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Classic Benny Breakfast`,
        price: 9.79,
        calories: [340, 1130],
        description: `Toasted English muffin topped with ham, over-medium eggs* and Hollandaise sauce. Served with hash browns.`
    },
    {
        id: 20,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Southwestern Benny Breakfast`,
        price: 9.99,
        calories: [580, 1370],
        description: `Toasted English muffin topped with chorizo, over-medium eggs* and Hollandaise sauce then drizzled with five pepper sauce and topped with pico de gallo. Served with hash browns.`
    },
    {
        id: 21,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Prime Rib Benny Breakfast`,
        price: 10.49,
        calories: [650, 1440],
        description: `Bacon Cheddar potato cakes topped with prime rib, over-medium eggs* and Hollandaise sauce. Served with hash browns.`
    },
    {
        id: 22,
        toGoFave: true,
        glutenFree: false,
        category: 'Breakfast',
        name: `Moons Over My Hammy®`,
        price: 10.29,
        calories: [780, 1270],
        description: `Ham and scrambled egg sandwich with Swiss & American cheeses on grilled sourdough. Served with hash browns.`
    },
    {
        id: 23,
        toGoFave: true,
        glutenFree: false,
        category: 'Breakfast',
        name: `The Grand Slamwich®`,
        price: 10.79,
        calories: [1140, 1630],
        description: `Scrambled eggs, sausage, bacon, ham and American cheese on potato bread grilled with a maple spice spread. Served with hash browns.`
    },
    {
        id: 24,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Country Fried Steak & Eggs`,
        price: 11.99,
        calories: [400, 1640],
        description: `A chopped beef steak smothered in country gravy. Served with two eggs* hash browns and choice of bread.`
    },
    {
        id: 25,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `T-Bone Steak & Eggs`,
        price: 16.99,
        calories: [500, 1740],
        description: `A 13 oz. seasoned T-Bone steak. Served with two eggs*, hash browns and choice of bread.`
    },
    {
        id: 26,
        toGoFave: false,
        glutenFree: true,
        category: 'Breakfast',
        name: `Santa Fe Sizzlin' Skillet`,
        price: 9.79,
        calories: [720, 1020],
        description: `Chorizo sausage, fire-roasted bell peppers & onions, mushrooms and seasoned red-skinned potatoes. Topped with Cheddar cheese and eggs*.`
    },
    {
        id: 27,
        toGoFave: false,
        glutenFree: true,
        category: 'Breakfast',
        name: `Supreme Sizzlin' Skillet`,
        price: 9.99,
        calories: [580, 960],
        description: `Sausage, fresh spinach, fire-roasted bell peppers & onions, mushrooms, grape tomatoes and seasoned red-skinned potatoes. Topped with Cheddar cheese and eggs*.`
    },
    {
        id: 28,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Turkey & Dressing`,
        price: 10.79,
        calories: [760, 1650],
        description: `Tender carved turkey breast, savory stuffing, turkey gravy and cranberry sauce. Served with 2 sides and dinner bread.`
    },
    {
        id: 29,
        toGoFave: false,
        glutenFree: true,
        category: 'Dinner',
        name: `Crazy Spicy Sizzlin' Skillet`,
        price: 10.49,
        calories: [990],
        description: `Chorizo sausage, fire-roasted bell peppers & onions, mushrooms, jalapeños and seasoned red-skinned potatoes. Topped with grilled seasoned chicken breast, Cheddar cheese, a spicy five pepper sauce and Pepper Jack queso.`
    },
    {
        id: 30,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Mama D's Pot Roast Bowl`,
        price: 12.19,
        calories: [580],
        description: `Slow-cooked pot roast atop red-skinned mashed potatoes with roasted carrots, celery and onions all covered in rich gravy. Served with dinner bread.`
    },
    {
        id: 31,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Chicken Addiction Bowl`,
        price: 11.49,
        calories: [680],
        description: `A grilled seasoned chicken breast atop whole grain rice and broccoli with grilled mushrooms and creamy Alfredo sauce. Served with dinner bread.`
    },
    {
        id: 32,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Bourbon Chicken Sizzlin' Skillet`,
        price: 11.29,
        calories: [840],
        description: `Grilled seasoned chicken breasts covered with a bourbon glaze atop seasoned red-skinned potatoes, broccoli, fire-roasted bell peppers & onions and mushrooms.`
    },
    {
        id: 33,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Plate Lickin' Chicken Fried Chicken`,
        price: 11.99,
        calories: [1070, 1960],
        description: `Golden-fried boneless chicken breasts smothered in country gravy. Served with two sides and dinner bread.`
    },
    {
        id: 34,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Sirloin Steak`,
        price: 12.79,
        calories: [530, 1420],
        description: `A USDA choice cut, 8 oz. seasoned sirloin steak.* Served with two sides and dinner bread.`
    },
    {
        id: 35,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `T-Bone Steak`,
        price: 16.69,
        calories: [680, 1570],
        description: `A 13 oz. seasoned T-Bone steak.* Served with two sides and dinner bread.`
    },
    {
        id: 36,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Fried Fish Platter`,
        price: 11.49,
        calories: [1080],
        description: `Wild-caught Alaska pollock fillets fried golden-brown, plus tartar sauce. Served with two sides and dinner bread.`
    },
    {
        id: 37,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Country-Fried Steak Dinner`,
        price: 13.49,
        calories: [960, 1850],
        description: `Two chopped beef steaks smothered in country gravy. Served with two sides and dinner bread.`
    },
    {
        id: 38,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Pumpkin Pie`,
        price: 'Varies',
        calories: [400, 3040],
        description: `Slice or whole pumpkin pie`
    },
    {
        id: 39,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Pecan Pie`,
        price: 'Varies',
        calories: [520, 4160],
        description: `Slice or whole pecan pie`
    },
    {
        id: 40,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Caramel Apple Pie Crisp`,
        price: 3.79,
        calories: [830],
        description: `Warm apple pie crisp topped with premium vanilla ice cream, salted caramel and powdered sugar.`
    },
    {
        id: 41,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `New York Style Cheesecake`,
        price: 3.99,
        calories: [490],
        description: `Plain or with strawberry topping and whipped cream.`
    },
    {
        id: 42,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Signature Panookie`,
        price: 4.29,
        calories: [820],
        description: `Warm chocolate chip cookie filled with molten chocolate and topped with premium vanilla ice cream and salted caramel.`
    },
    {
        id: 43,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Pecan Panookie`,
        price: 4.59,
        calories: [960],
        description: `Warm chocolate chip cookie filled with molten chocolate, topped with premium vanilla ice cream, pecan pie sauce and glazed pecans.`
    },
    {
        id: 44,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Cheesecake Pack`,
        price: 11.99,
        calories: [2250],
        description: `4 slices of New York-style cheesecake with a side of strawberry topping.`
    },
    {
        id: 45,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Pumpkin Pecan Pancake Pack`,
        price: 31.99,
        calories: [2720, 4790],
        description: `8 buttermilk pancakes made with real pumpkin and cooked with pecans plus pecan pie sauce. Includes 4 bacon strips, 4 sausage links, 8 scrambled eggs† and hash browns. Serves 4-5. No substitutions. †EGGS ARE SCRAMBLED AND SERVED IN A SEPARATE CONTAINER. ONLY SCRAMBLED EGGS ARE OFFERED.`
    },
    {
        id: 46,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Grand Slam® Pack`,
        price: 27.99,
        calories: [2320, 4390],
        description: `8 buttermilk pancakes, 8 scrambled eggs, 4 bacon strips, 4 sausage links and hash browns. Serves 4-5.`
    },
    {
        id: 47,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Lumberjack Slam® Pack`,
        price: 34.99,
        calories: [3240, 5310],
        description: `8 buttermilk pancakes, 8 scrambled eggs, 8 bacon strips, 8 sausage links, 4 grilled ham slices, hash browns and white toast. Serves 4-5.`
    },
    {
        id: 48,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Cheeseburger Pack`,
        price: 29.99,
        calories: [2680, 4640],
        description: `Start with 4 hand-pressed 100% beef patties topped with American cheese and build your own custom burger with lettuce, tomatoes, red onions, pickles, mayo, ketchup, mustard and brioche buns. Served with your choice of side. Serves 4.`
    },
    {
        id: 49,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `Fish & Chips Pack`,
        price: 35.99,
        calories: [3590, 5550],
        description: `12 wild-caught Alaska pollock fillets fried golden-brown, plus tartar sauce. Served with wavy-cut fries. Serves 4-5.`
    },
    {
        id: 50,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Jr. Birthday Cake Pancakes`,
        price: 4.49,
        calories: [330, 730],
        description: `Buttermilk silver dollar pancakes filled with confetti sprinkles and topped with vanilla cream and more confetti sprinkles. Pair it with any side you want—whatever, whenever.`
    },
    {
        id: 51,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Jr. Chocolate Chip Pancakes`,
        price: 3.99,
        calories: [220, 620],
        description: `Ghirardelli® chocolate chips cooked inside buttermilk silver dollar pancakes. Pair it with any side you want—whatever, whenever.`
    },
    {
        id: 52,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Build Your Own Jr. Grand Slam®`,
        price: 4.49,
        calories: [170, 480],
        description: `Pick any 3 items and make it your own.`
    },
    {
        id: 53,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Jr. Cheeseburger`,
        price: 4.79,
        calories: [490, 890],
        description: `100% beef patty topped with American cheese. Pair it with any side you want—whatever, whenever.`
    },
    {
        id: 54,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `Mac & Cheese`,
        price: 4.49,
        calories: [300, 700],
        description: `Kraft® Macaroni & Cheese. Pair it with any side you want—whatever, whenever.`
    },
    {
        id: 55,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Jr. Ice Cream`,
        price: 'Varies',
        calories: [250, 270],
        description: `One scoop of ice cream`
    },
    {
        id: 56,
        toGoFave: false,
        glutenFree: true,
        category: 'Dessert',
        name: `Jr. Milk Shake`,
        price: 1.99,
        calories: [620, 680],
        description: `Choose from Strawberry, Chocolate, or Vanilla.`
    },
    {
        id: 57,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Jr. Oreo Blender Blaster™`,
        price: 1.99,
        calories: [760],
        description: `Vanilla ice cream milk shake blended with OREO® Cookie Pieces.`
    },
    {
        id: 58,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Jr. Cake Batter Milk Shake`,
        price: 1.99,
        calories: [730],
        description: `Made with premium vanilla ice cream blended with cake batter and confetti sprinkles. Topped with whipped cream and more confetti sprinkles.`
    },
    {
        id: 59,
        toGoFave: false,
        glutenFree: false,
        category: 'Beverage',
        name: `Kids Beverage`,
        price: 'Varies',
        calories: [0, 190],
        description: `Your choice of beverage`
    },
    {
        id: 60,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `Cali Club Sandwich`,
        price: 11.79,
        calories: [890, 1380],
        description: `Turkey breast, ham, bacon, Swiss cheese, fresh avocado, sun-dried tomato mayo, lettuce and tomato on toasted 7-grain bread. Served with wavy-cut fries.`
    },
    {
        id: 61,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `The Super Bird®`,
        price: 10.19,
        calories: [680, 1170],
        description: `Turkey breast with Swiss cheese, bacon and tomato on grilled sourdough. Served with wavy-cut fries.`
    },
    {
        id: 62,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `Diner Classic Patty Melt`,
        price: 10.19,
        calories: [1100, 1590],
        description: `A 100% beef patty with caramelized onions, Swiss & American cheeses and Diner Q sauce on grilled potato bread.`
    },
    {
        id: 63,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `Nashville Hot Chicken Melt`,
        price: 10.79,
        calories: [1260, 1750],
        description: `A golden-fried chicken breast tossed in Nashville Hot sauce with Swiss cheese, tomato, pickles and mayo on grilled Texas toast. Served with wavy-cut fries.`
    },
    {
        id: 64,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `The Big Dipper Melt`,
        price: 11.79,
        calories: [1140, 1630],
        description: `Tender pot roast with melted Swiss cheese, caramelized onions and mayo on grilled Texas toast. Served with French onion au jus for dipping. Served with wavy-cut fries.`
    },
    {
        id: 65,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Mile High Denver Omelette`,
        price: 'Varies',
        calories: [660, 1600],
        description: `Three-egg omelette with ham, fire-roasted bell peppers & onions and American cheese. Served with hash browns and choice of bread.`
    },
    {
        id: 66,
        toGoFave: true,
        glutenFree: false,
        category: 'Breakfast',
        name: `Ultimate Omelette®`,
        price: 'Varies',
        calories: [720, 1660],
        description: `Sausage, bacon, fire-roasted bell peppers & onions, mushrooms, tomatoes and Cheddar cheese. Served with hash browns and choice of bread.`
    },
    {
        id: 67,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Philly Cheesesteak Omelette`,
        price: 'Varies',
        calories: [710, 1650],
        description: `Three-egg omelette with grilled prime rib, fire-roasted bell peppers & onions, sautéed mushrooms and Swiss cheese. Served with hash browns and choice of bread.`
    },
    {
        id: 68,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Loaded Veggie Omelette`,
        price: 'Varies',
        calories: [500, 1440],
        description: `Three-egg omelette with fresh spinach, sautéed mushrooms, fire-roasted bell peppers & onions, tomatoes and Swiss cheese. Served with hash browns and choice of bread.`
    },
    {
        id: 69,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Pumpkin Pecan Pancake Breakfast`,
        price: 9.69,
        calories: [680, 1620],
        description: `Pumpkin pancakes made with real pumpkin and cooked with pecans, then drizzled with a pecan pie sauce. Served with eggs*, hash browns and bacon strips or sausage links.`
    },
    {
        id: 70,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Cinnamon Roll Pancake Breakfast`,
        price: 10.79,
        calories: [1030, 1970],
        description: `Buttermilk pancakes cooked with cinnamon crumb topping and topped with whipped cream and cream cheese icing. Served with eggs,* hash browns, plus bacon strips or sausage links.`
    },
    {
        id: 71,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Salted Caramel & Banana Cream Pancake Breakfast`,
        price: 10.79,
        calories: [930, 1870],
        description: `Buttermilk pancakes cooked with shortbread pieces and topped with vanilla cream, bananas, more shortbread pieces and salted caramel. Served with eggs,* hash browns, plus bacon strips or sausage links.`
    },
    {
        id: 72,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Double Berry Pancake Breakfast`,
        price: 9.79,
        calories: [540, 1480],
        description: `Buttermilk pancakes cooked with blueberries and topped with fresh seasonal berries, bananas and whipped cream. Served with eggs,* hash browns, plus bacon strips or sausage links.`
    },
    {
        id: 73,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Hearty 9-Grain Pancake Breakfast`,
        price: 8.99,
        calories: [410, 1350],
        description: `Multigrain wheat pancakes made with flaxseeds, cinnamon & brown sugar. Served with eggs,* hash browns, plus bacon strips or sausage links.`
    },
    {
        id: 74,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Choconana Pancake Breakfast`,
        price: 9.79,
        calories: [870, 1810],
        description: `Ghirardelli® chocolate chips cooked inside buttermilk pancakes. Topped with bananas, more Ghirardelli® chocolate chips and whipped cream. Served with eggs,* hash browns, plus bacon strips or sausage links.`
    },
    {
        id: 75,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Berry Vanilla Crepe Breakfast`,
        price: 'Varies',
        calories: [530, 1470],
        description: `Folded with vanilla cream and topped with fresh seasonal berries, strawberry sauce and powdered sugar. Berry selection based on seasonality. Served with two eggs,* hash browns plus two bacon strips or two sausage links.`
    },
    {
        id: 76,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `House Salad`,
        price: 6.39,
        calories: [190, 390],
        description: `Cucumbers, grape tomatoes, Cheddar cheese and croutons atop a bed of iceberg mix. Served with choice of dressing.`
    },
    {
        id: 77,
        toGoFave: false,
        glutenFree: true,
        category: 'Lunch',
        name: `Cobb Salad`,
        price: 7.49,
        calories: [480, 680],
        description: `Bacon, fresh avocado, grape tomatoes, Cheddar cheese, hard-boiled egg and potato sticks atop a bed of iceberg mix. Served with choice of dressing.`
    },
    {
        id: 78,
        toGoFave: true,
        glutenFree: false,
        category: 'Breakfast',
        name: `Build Your Own Grand Slam®`,
        price: 8.79,
        calories: [360, 1920],
        description: `Pick any four items and make it your own.`
    },
    {
        id: 79,
        toGoFave: true,
        glutenFree: false,
        category: 'Breakfast',
        name: `Lumberjack Slam®`,
        price: 12.29,
        calories: [100, 2470],
        description: `Buttermilk pancakes, grilled ham, bacon strips, sausage links, eggs,* hash browns and choice of bread`
    },
    {
        id: 80,
        toGoFave: true,
        glutenFree: false,
        category: 'Breakfast',
        name: `All-American Slam®`,
        price: 11.79,
        calories: [490, 1740],
        description: `Three scrambled eggs with Cheddar cheese, bacon strips, sausage links, hash browns and choice of bread.`
    },
    {
        id: 81,
        toGoFave: true,
        glutenFree: false,
        category: 'Breakfast',
        name: `French Toast Slam®`,
        price: 10.99,
        calories: [640, 1250],
        description: `Served with eggs,* bacon strips and sausage links.`
    },
    {
        id: 82,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Original Grand Slam®`,
        price: 8.79,
        calories: [630, 1640],
        description: `Two buttermilk pancakes, two eggs,* two bacon strips and two sausage links.`
    },
    {
        id: 83,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Grand Slam Slugger®`,
        price: 10.99,
        calories: [1020, 2160],
        description: `Buttermilk pancakes, eggs,* bacon strips and sausage links. Served with hash browns or choice of bread, plus coffee and juice.`
    },
    {
        id: 84,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Fit Slam®`,
        price: 9.79,
        calories: [260, 450],
        description: `Egg whites scrambled together with fresh spinach and grape tomatoes, plus turkey bacon strips, an English muffin and seasonal fruit.`
    },
    {
        id: 85,
        toGoFave: false,
        glutenFree: true,
        category: 'Starter',
        name: `Zesty Nachos`,
        price: 9.29,
        calories: [1660],
        description: `Tortilla chips cooked fresh to order. Served with Pepper Jack queso, shredded Cheddar cheese, seasoned nacho meat, freshly made pico de gallo and sour cream on the side to keep chips crispy until you’re ready to assemble & devour!`
    },
    {
        id: 86,
        toGoFave: false,
        glutenFree: false,
        category: 'Starter',
        name: `Mozzarella Cheese Sticks`,
        price: 6.99,
        calories: [560, 780],
        description: `8 Mozzarella cheese sticks. Served with your choice of dipping sauce.`
    },
    {
        id: 87,
        toGoFave: false,
        glutenFree: false,
        category: 'Starter',
        name: `Onion Rings Appetizer`,
        price: 6.99,
        calories: [800, 1020],
        description: `Crispy fried onion rings served with your choice of dipping sauce.`
    },
    {
        id: 88,
        toGoFave: false,
        glutenFree: false,
        category: 'Starter',
        name: `Loaded Bacon Cheddar Tots`,
        price: 7.69,
        calories: [730],
        description: `Ten crispy tots made with shredded potatoes, bacon and Cheddar cheese. Topped with Pepper Jack queso, more Cheddar cheese, bacon and sour cream.`
    },
    {
        id: 89,
        toGoFave: false,
        glutenFree: false,
        category: 'Starter',
        name: `Bacon Cheddar Tots with Sour Cream`,
        price: 7.19,
        calories: [500],
        description: `Ten crispy tots made with shredded potatoes, bacon and Cheddar cheese. Served with sour cream.`
    },
    {
        id: 90,
        toGoFave: false,
        glutenFree: false,
        category: 'Starter',
        name: `Double Chocolate Pancake Puppies®`,
        price: 'Varies',
        calories: [760, 1120],
        description: `Made with Ghirardelli® cocoa and chocolate chips, tossed in powered sugar and served with cream cheese icing.`
    },
    {
        id: 91,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Slice of French Toast`,
        price: 2.99,
        calories: [320],
        description: `Sprinkled with powdered sugar.`
    },
    {
        id: 92,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Stack of Pancakes`,
        price: 1.99,
        calories: [450],
        description: `Add two buttermilk pancakes to any meal.`
    },
    {
        id: 93,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Choconana Stack & Bacon`,
        price: 5.99,
        calories: [870, 970],
        description: `Ghirardelli® chocolate chips cooked inside two buttermilk pancakes and topped with bananas, more Ghirardelli® chocolate chips and whipped cream. Served with bacon.`
    },
    {
        id: 94,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Everyday Value Slam®`,
        price: 4.99,
        calories: [560, 1480],
        description: `Buttermilk pancakes, eggs and bacon or sausage links.`
    },
    {
        id: 95,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `Wings & Rings`,
        price: 3.99,
        calories: [710, 930],
        description: `Four all-white-meat Boneless Chicken Wings tossed in Buffalo sauce plus Beer-Battered Onion Rings and a side of dipping sauce.`
    },
    {
        id: 96,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `Classic Burger`,
        price: 6.99,
        calories: [590, 1080],
        description: `Hand pressed 100% beef patty with lettuce, tomato, red onions and pickles on a brioche bun. Served with wavy-cut fries.`
    },
    {
        id: 97,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `Triple Play`,
        price: 7.99,
        calories: [820, 1370],
        description: `Three eggs,* three pancakes and three bacon strips or sausage links.`
    },
    {
        id: 98,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `55+ Scrambled Eggs & Cheddar Breakfast`,
        price: 8.29,
        calories: [300, 1640],
        description: `Scrambled eggs with Cheddar cheese, plus bacon strips, sausage links and buttermilk pancakes.`
    },
    {
        id: 99,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `55+ Starter™`,
        price: 'Varies',
        calories: [330, 670],
        description: `An egg* with one bacon strip or one sausage link. Served with hash browns and choice of bread.`
    },
    {
        id: 100,
        toGoFave: false,
        glutenFree: false,
        category: 'Breakfast',
        name: `55+ Omelette`,
        price: 8.49,
        calories: [480, 1010],
        description: `Two-egg omelette with sautéed onions, bacon, tomatoes and Cheddar cheese. Served with hash browns and choice of bread.`
    },
    {
        id: 101,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `55+ Turkey & Dressing Dinner`,
        price: 8.49,
        calories: [640, 1530],
        description: `A smaller portion of turkey with stuffing, gravy and cranberry sauce. Served with 2 sides and dinner bread.`
    },
    {
        id: 102,
        toGoFave: false,
        glutenFree: false,
        category: 'Lunch',
        name: `55+ Grilled Cheese Sandwich and Soup`,
        price: 6.99,
        calories: [440, 780],
        description: `American cheese on grilled sourdough bread and a cup of soup.`
    },
    {
        id: 103,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `55+ Wild Alaska Salmon`,
        price: 9.99,
        calories: [350, 840],
        description: `A grilled wild-caught Alaska salmon fillet with a delicious blend of garlic & herbs. Served with side and dinner bread.`
    },
    {
        id: 104,
        toGoFave: false,
        glutenFree: false,
        category: 'Dinner',
        name: `55+ Country-Fried Steak`,
        price: 9.49,
        calories: [400, 890],
        description: `A chopped beef steak smothered in country gravy. Served with side and dinner bread.`
    },
    {
        id: 105,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Stack of Pancakes`,
        price: 1.99,
        calories: [450],
        description: `Add two pancakes to any meal.`
    },
    {
        id: 106,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Stack of Pumpkin Pecan Pancakes`,
        price: 5.49,
        calories: [680],
        description: `Pumpkin pancakes made with real pumpkin and cooked with pecans, then drizzled with a pecan pie sauce.`
    },
    {
        id: 107,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Stack of Pumpkin Pancakes`,
        price: 2.59,
        calories: [500],
        description: `Pumpkin pancakes made with real pumpkin.`
    },
    {
        id: 108,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Stack of Hearty 9 -Grain Pancakes`,
        price: 2.49,
        calories: [410],
        description: `Multigrain wheat pancakes made with flaxseeds, cinnamon & brown sugar.`
    },
    {
        id: 109,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Stack of Cinnamon Roll Pancakes`,
        price: 4.49,
        calories: [1030],
        description: `Buttermilk pancakes cooked with cinnamon crumb topping and topped with whipped cream and cream cheese icing.`
    },
    {
        id: 110,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Stack of Salted Carmel & Banana Cream Pancakes`,
        price: 5.49,
        calories: [930],
        description: `Buttermilk pancakes cooked with shortbread pieces and topped with vanilla cream, bananas, more shortbread pieces and salted caramel.`
    },
    {
        id: 111,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Stack of Choconana Pancakes`,
        price: 4.49,
        calories: [870],
        description: `Ghirardelli® chocolate chips cooked inside buttermilk pancakes. Topped with bananas, more Ghirardelli® chocolate chips and whipped cream.`
    },
    {
        id: 112,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Stack of Double Berry Banana Strawberry Pancakes`,
        price: 4.49,
        calories: [540],
        description: `Buttermilk pancakes cooked with blueberries and topped with fresh seasonal berries, bananas and whipped cream.`
    },
    {
        id: 113,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Strawberry Vanilla Crepe`,
        price: 'Varies',
        calories: [270, 530],
        description: `Folded with vanilla cream and topped with fresh seasonal berries, strawberry sauce and powdered sugar. Berry selection based on seasonality.`
    },
    {
        id: 114,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Hash Browns`,
        price: 'Varies',
        calories: [180, 310],
        description: `Side of hash browns`
    },
    {
        id: 115,
        toGoFave: false,
        glutenFree: true,
        category: 'Side',
        name: `Seasonal Fruit`,
        price: 2.99,
        calories: [110],
        description: `Fresh Seasonal Fruit (Selection may vary.)`
    },
    {
        id: 116,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Slices of Toast`,
        price: 'Varies',
        calories: [180, 340],
        description: `2 slices of toast`
    },
    {
        id: 117,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `English Muffin`,
        price: 'Varies',
        calories: [180, 190],
        description: `1 English Muffin`
    },
    {
        id: 118,
        toGoFave: false,
        glutenFree: true,
        category: 'Side',
        name: `Egg`,
        price: 1.99,
        calories: [40, 190],
        description: `1 egg cooked to order`
    },
    {
        id: 119,
        toGoFave: false,
        glutenFree: true,
        category: 'Side',
        name: `Bacon`,
        price: 'Varies',
        calories: [140, 210],
        description: `Choose four bacon strips or turkey bacon strips.`
    },
    {
        id: 120,
        toGoFave: false,
        glutenFree: true,
        category: 'Side',
        name: `Sausage`,
        price: 'Varies',
        calories: [150, 310],
        description: `4 sausage links`
    },
    {
        id: 121,
        toGoFave: false,
        glutenFree: true,
        category: 'Side',
        name: `Grilled Ham Slice`,
        price: 3.99,
        calories: [110],
        description: `1 Grilled Ham Slice`
    },
    {
        id: 122,
        toGoFave: false,
        glutenFree: true,
        category: 'Side',
        name: `Wavy Cut French Fries`,
        price: 3.19,
        calories: [400],
        description: `Side of wavy cut French Fries`
    },
    {
        id: 123,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Seasoned Fries`,
        price: 3.79,
        calories: [490],
        description: `Side of Seasoned Fries`
    },
    {
        id: 124,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Beer-Battered Onion Rings`,
        price: 3.89,
        calories: [400],
        description: `Crispy-fried onion rings`
    },
    {
        id: 125,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Red-Skinned Mashed Potatoes`,
        price: 3.19,
        calories: [140],
        description: `Side of red-skinned mashed potatoes`
    },
    {
        id: 126,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Red Skinned Potatoes`,
        price: 2.99,
        calories: [200],
        description: `Side of red-skinned potatoes`
    },
    {
        id: 127,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Broccoli`,
        price: 3.19,
        calories: [35],
        description: `Side of Broccoli`
    },
    {
        id: 128,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Fresh Sautéed Squash and Zucchini`,
        price: 3.19,
        calories: [70],
        description: `Side of Fresh Sautéed Squash and Zucchini`
    },
    {
        id: 129,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Sweet Petite Corn`,
        price: 3.19,
        calories: [210],
        description: `Side of Sweet Petite Corn`
    },
    {
        id: 130,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Whole Grain Rice`,
        price: 3.19,
        calories: [240],
        description: `Side of Whole Grain Rice`
    },
    {
        id: 131,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Garden Side Salad`,
        price: 3.99,
        calories: [170],
        description: `Garden Side Salad with your choice of dressing`
    },
    {
        id: 132,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Sauces and Dressings`,
        price: 0.89,
        calories: [10, 200],
        description: `You can never have too much dressing or sauce. Order extra condiments here`
    },
    {
        id: 133,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Soup of the day`,
        price: 'Varies',
        calories: [200, 340],
        description: `Our soups are kettle-cooked to be rich and hearty. Available from 11 am to 10 pm.`
    },
    {
        id: 134,
        toGoFave: false,
        glutenFree: false,
        category: 'Side',
        name: `Chips & Salsa`,
        price: 1.69,
        calories: [430],
        description: `Freshly cooked tortilla chips served with a side of salsa.`
    },
    {
        id: 135,
        toGoFave: true,
        glutenFree: true,
        category: 'Dessert',
        name: `Milk Shakes`,
        price: 'Varies',
        calories: [760, 1090],
        description: `Made with premium ice cream and topped with whipped cream.`
    },
    {
        id: 136,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Strawberry Shake Pack`,
        price: 6.99,
        calories: [1520],
        description: `Two milk shakes made with premium ice cream and topped with whipped cream.`
    },
    {
        id: 137,
        toGoFave: false,
        glutenFree: false,
        category: 'Dessert',
        name: `Oreo Shake Pack`,
        price: 6.99,
        calories: [2100],
        description: `Two OREO® milk shakes made with premium ice cream and topped with whipped cream.`
    }
]

module.exports = { menu };
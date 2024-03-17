// database.js

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');

db.serialize(() => {
    //Creating Table
    db.run(`CREATE TABLE Recipe (
        recipe_id NUMBER(10) PRIMARY KEY,
        recipe_name VARCHAR2(60),
        description VARCHAR2(60),
        instructions VARCHAR2(60),
        quantity VARCHAR2(60),
        recipe_type VARCHAR2(60),
        ingredient_id NUMBER(10),
        category_id NUMBER(10),
        FOREIGN KEY (ingredient_id) REFERENCES Ingredient(ingredient_id),
        FOREIGN KEY (category_id) REFERENCES Category(category_id)
    )`);
    //Creating Table
    db.run(`CREATE TABLE Ingredient (
        ingredient_id NUMBER(10) PRIMARY KEY,
        ingredient_name VARCHAR2(60),
        ingredient_type VARCHAR2(60),
        ing_amount VARCHAR2(60)
    )`);
    //Creating Table
    db.run(`CREATE TABLE Category (
        category_id NUMBER(10) PRIMARY KEY,
        category_name VARCHAR2(60),
        is_veg BOOLEAN,
        recipe_id NUMBER(10),
        regional VARCHAR2(60),
        FOREIGN KEY (recipe_id) REFERENCES Recipe(recipe_id)
    )`);
    //Creating Table
    db.run(`CREATE TABLE Users (
        user_id NUMBER(10) PRIMARY KEY,
        username VARCHAR2(60) UNIQUE,
        password VARCHAR2(60),
        sign_in_account VARCHAR2(60)
    )`);
    // Insert data into the Recipe table
    db.run(`INSERT INTO Recipe (recipe_id, recipe_name, description, instructions, quantity, recipe_type, ingredient_id, category_id)
    VALUES 
    (1, 'Spaghetti Carbonara', 'Classic Italian pasta dish', '1. Boil pasta. 2. Cook pancetta and garlic. 3. Mix with eggs and cheese...', 'Serves 4', 'Main Dish', 1, 2),
    (2, 'Vegetable Stir Fry', 'Healthy and flavorful vegetable stir fry', '1. Chop vegetables. 2. Stir-fry with sauce...', 'Serves 2', 'Vegetarian', 2, 1),
    (3, 'Chicken Parmesan', 'Crispy breaded chicken with marinara sauce and cheese', '1. Bread chicken. 2. Fry until golden. 3. Top with sauce and cheese...', 'Serves 6', 'Main Dish', 3, 2),
    (4, 'Chocolate Chip Cookies', 'Classic homemade cookies with chocolate chips', '1. Mix ingredients. 2. Scoop onto baking sheet. 3. Bake until golden...', 'Makes 24 cookies', 'Dessert', 2, 1),
    (5, 'Caesar Salad', 'Fresh salad with Caesar dressing and croutons', '1. Toss lettuce with dressing. 2. Add croutons and Parmesan cheese...', 'Serves 2', 'Salad', 3, 1),
    (6, 'Tacos', 'Mexican-style tacos with seasoned meat and toppings', '1. Cook meat with seasoning. 2. Assemble tacos with toppings...', 'Makes 8 tacos', 'Main Dish', 1, 3),
    (7, 'Pumpkin Soup', 'Creamy soup made with roasted pumpkin and spices', '1. Roast pumpkin. 2. Blend with broth and spices. 3. Simmer until thick...', 'Serves 4', 'Soup', 4, 1),
    (8, 'Lemon Garlic Shrimp Pasta', 'Zesty pasta dish with garlic shrimp', '1. Cook pasta. 2. Sauté shrimp with garlic and lemon. 3. Toss with pasta...', 'Serves 2', 'Main Dish', 5, 2),
    (9, 'Caprese Salad', 'Simple Italian salad with tomatoes, mozzarella, and basil', '1. Slice tomatoes and mozzarella. 2. Arrange with basil leaves. 3. Drizzle with balsamic glaze...', 'Serves 2', 'Salad', 6, 1),
    (10, 'Beef Stew', 'Hearty stew with beef, vegetables, and broth', '1. Brown beef. 2. Add vegetables and broth. 3. Simmer until tender...', 'Serves 6', 'Stew', 7, 2),
    (11, 'Mango Salsa', 'Fresh salsa with mango, red onion, and cilantro', '1. Chop mango and vegetables. 2. Mix with lime juice and cilantro...', 'Makes 2 cups', 'Appetizer', 8, 1),
    (12, 'Lentil Curry', 'Spicy Indian curry with lentils and aromatic spices', '1. Cook lentils. 2. Sauté onions, garlic, and spices. 3. Combine with lentils...', 'Serves 4', 'Vegetarian', 9, 2),
    (13, 'Ratatouille', 'Traditional French vegetable stew', '1. Sauté vegetables with herbs. 2. Layer in baking dish. 3. Bake until tender...', 'Serves 4', 'Vegetarian', 10, 1),
    (14, 'Greek Salad', 'Refreshing salad with cucumbers, olives, and feta cheese', '1. Toss vegetables with vinaigrette. 2. Top with olives and feta...', 'Serves 2', 'Salad', 11, 1),
    (15, 'Beef Tacos', 'Mexican-style tacos with seasoned beef and toppings', '1. Cook beef with seasoning. 2. Assemble tacos with toppings...', 'Makes 8 tacos', 'Main Dish', 12, 3)`);

    // Insert data into the Ingredient table
    db.run(`INSERT INTO Ingredient (ingredient_id, ingredient_name, ingredient_type, ing_amount)
    VALUES 
    (1, 'Pasta', 'Dry', '8 oz'),
    (2, 'Vegetables', 'Produce', '2 cups'),
    (3, 'Chicken Breast', 'Meat', '1 lb'),
    (4, 'Chocolate Chips', 'Baking', '1 cup'),
    (5, 'Lemon', 'Produce', '1'),
    (6, 'Shrimp', 'Seafood', '1 lb'),
    (7, 'Pumpkin', 'Produce', '1 small'),
    (8, 'Shrimp', 'Seafood', '1 lb'),
    (9, 'Tomatoes', 'Produce', '2 medium'),
    (10, 'Beef Stew Meat', 'Meat', '1.5 lb'),
    (11, 'Mango', 'Produce', '1'),
    (12, 'Lentils', 'Legumes', '1 cup'),
    (13, 'Eggplant', 'Produce', '1 medium'),
    (14, 'Cucumbers', 'Produce', '1'),
    (15, 'Ground Beef', 'Meat', '1 lb')`);

    // Insert data into the Category table
    db.run(`INSERT INTO Category (category_id, category_name, is_veg, recipe_id, regional)
    VALUES 
    (1, 'Main Dishes', FALSE, 1, 'Italian'),
    (2, 'Vegetarian', TRUE, 2, 'International'),
    (3, 'Desserts', FALSE, 3, 'Italian'),
    (4, 'Appetizers', TRUE, 4, 'American'),
    (5, 'Salads', TRUE, 5, 'Mediterranean'),
    (6, 'Soups', TRUE, 6, 'French'),
    (7, 'Stews', FALSE, 7, 'American'),
    (8, 'Mexican', FALSE, 8, 'Mexican'),
    (9, 'Indian', TRUE, 9, 'Indian'),
    (10, 'French', TRUE, 10, 'French'),
    (11, 'Greek', TRUE, 11, 'Mediterranean'),
    (12, 'Mexican', FALSE, 12, 'Mexican'),
    (13, 'Italian', FALSE, 13, 'Italian'),
    (14, 'Greek', TRUE, 14, 'Mediterranean'),
    (15, 'Mexican', FALSE, 15, 'Mexican')`);

    // Insert data into the Users table
    db.run(`INSERT INTO Users (user_id, username, password, sign_in_account)
    VALUES 
    (1, 'admin', 'admin123', 'admin@example.com'), -- Administrator user
    (2, 'john_doe', 'john123', 'john.doe@example.com'), -- Regular user
    (3, 'jane_smith', 'jane456', 'jane.smith@example.com'), -- Regular user
    (4, 'alice_wonder', 'alice789', 'alice.wonder@example.com'), -- Regular user
    (5, 'bob_smith', 'bob123', 'bob.smith@example.com'), -- Regular user
    (6, 'chef_mario', 'chef456', 'chef.mario@example.com'), -- Chef user
    (7, 'manager_mark', 'manager789', 'manager.mark@example.com'), -- Manager user
    (8, 'assistant_anna', 'assistant123', 'assistant.anna@example.com'), -- Assistant user
    (9, 'customer_cathy', 'customer456', 'customer.cathy@example.com'), -- Customer user
    (10, 'guest_user', 'guest123', 'guest.user@example.com'), -- Guest user
    (11, 'tech_support', 'tech456', 'tech.support@example.com'), -- Technical support user
    (12, 'finance_john', 'finance123', 'finance.john@example.com'), -- Finance user
    (13, 'hr_sarah', 'hr456', 'hr.sarah@example.com'), -- HR user
    (14, 'inventory_manager', 'inventory789', 'inventory.manager@example.com'), -- Inventory manager user
    (15, 'marketing_james', 'marketing123', 'marketing.james@example.com')`);
});

// Close the database connection
db.close();

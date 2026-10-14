
🚀 Interactive Product Inventory & Analytics Dashboard

📌 Project Overview

The Interactive Product Inventory & Analytics Dashboard is a JavaScript-based mini project that manages product inventory and generates useful inventory statistics. It demonstrates core JavaScript concepts through a practical product management example.

Users can enter a product name and price, add the product to the inventory, categorize products based on price, calculate the total inventory value, filter affordable products, and generate a formatted inventory report.

🎯 Objectives

- Store and manage product information using arrays and objects.
- Accept user input using JavaScript's "prompt()" function.
- Validate product names and prices.
- Categorize products as Budget, Standard, or Premium.
- Calculate the total value of the inventory.
- Filter products priced below $200.
- Generate a formatted report using JavaScript array methods.

🛠️ Technologies Used

- HTML5 – Basic webpage structure.
- JavaScript – Input handling, conditions, loops, functions, and inventory calculations.
- Visual Studio Code – Code editor.
- Google Chrome – Running and testing the project.
- Git and GitHub – Version control and project hosting.

✨ Features

1. Product Input: Accepts a product name and price from the user.
2. Input Validation: Checks for missing names and invalid or non-positive prices.
3. Product Categorization: Assigns Budget, Standard, or Premium categories based on price.
4. Inventory Listing: Displays all products and their categories.
5. Inventory Analytics: Calculates the total value of all products.
6. Affordable Product Filtering: Finds products priced below $200.
7. Formatted Report: Generates an uppercase product report with prices.

📚 JavaScript Concepts Demonstrated

- Variables and constants
- Arrays and objects
- "prompt()" and type conversion
- Conditional statements ("if...else")
- Loops and flow control
- Functions and arrow functions
- Array methods: "forEach()", "filter()", "map()", and "reduce()"
- Input validation and string interpolation

📂 Project Structure

interactive-product-inventory/
├── assign.html
├── first.js
└── README.md

▶️ How to Run the Project

1. Clone or download this repository.

2. Open the project folder in Visual Studio Code.

3. Make sure "assign.html" includes the following script reference before the closing "</body>" tag:
   
   <script src="first.js"></script>

4. Open "assign.html" in Google Chrome, or run it using the Live Server extension in VS Code.

5. Enter a product name when prompted.

6. Enter the product price in the next prompt.

7. Right-click the webpage and select Inspect.

8. Open the Console tab to view the inventory and analytics output.

🧪 Sample Input

Product Name: Monitor
Product Price: 150

📊 Expected Output

--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ['Mouse', 'Monitor']
Formatted Report List:
['LAPTOP: $800', 'MOUSE: $25', 'MONITOR: $150']

Note: The sample output assumes that Laptop ($800) and Mouse ($25) are already present in the initial inventory.

🔮 Future Enhancements

- Display inventory information in a visual dashboard.
- Add options to update and delete products.
- Store inventory data using browser local storage.
- Add search and sorting functionality.
- Support multiple currencies.
- Add charts for inventory analytics.

👩‍💻 Author
R.naga harini
Project: Interactive Product Inventory & Analytics Dashboard

Type: JavaScript Capstone Mini Project

📄 License

This project is intended for educational and learning purposes.

console.log("--- Initializing Inventory System ---");

// Initial inventory
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get input from the user
const productName = prompt("Enter product name:");
const priceInput = prompt("Enter product price:");

// Validate input
if (
    productName !== null &&
    productName.trim() !== "" &&
    priceInput !== null &&
    priceInput.trim() !== "" &&
    Number.isFinite(Number(priceInput)) &&
    Number(priceInput) > 0
) {
    const price = Number(priceInput);

    // Add new product
    inventory.push({
        name: productName.trim(),
        price: price
    });

    console.log(
        `[Prompt executed: User adds "${productName.trim()}" at "$${price}"]`
    );

    // Determine category
    function getCategory(price) {
        if (price < 100) {
            return "Budget";
        } else if (price <= 500) {
            return "Standard";
        } else {
            return "Premium";
        }
    }

    // Display inventory
    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach(item => {
        console.log(
            `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
        );
    });

    // Calculate total value
    const totalValue = inventory.reduce(
        (total, item) => total + item.price,
        0
    );

    // Filter affordable items
    const affordableItems = inventory.filter(
        item => item.price < 200
    );

    // Format report
    const report = inventory.map(
        item => `${item.name.toUpperCase()}: $${item.price}`
    );

    // Display final analytics
    console.log("\n--- Financial Analytics ---");
    console.log("Total Inventory Value: $" + totalValue);
    console.log(
        "Filtered Affordable Items (Under $200):",
        affordableItems.map(item => item.name)
    );
    console.log("Formatted Report List:", report);

} else {
    console.log("Invalid input. Please enter a product name and a valid price.");
}
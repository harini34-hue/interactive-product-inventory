const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

const runButton = document.getElementById("runButton");
const output = document.getElementById("output");
const status = document.getElementById("status");

function getCategory(price) {
    if (price < 100) return "Budget";
    if (price <= 500) return "Standard";
    return "Premium";
}

runButton.addEventListener("click", function () {
    const nameInput = prompt("Enter product name:");
    if (nameInput === null) return;

    const name = nameInput.trim();

    if (name === "") {
        alert("Product name cannot be empty.");
        return;
    }

    const priceInput = prompt("Enter product price:");
    if (priceInput === null) return;

    if (priceInput.trim() === "") {
        alert("Please enter a valid price.");
        return;
    }

    const price = Number(priceInput);

    if (!Number.isFinite(price) || price <= 0) {
        alert("Price must be a positive number.");
        return;
    }

    inventory.push({ name, price });

    const total = inventory.reduce(
        (sum, item) => sum + item.price,
        0
    );

    const affordable = inventory
        .filter(item => item.price < 200)
        .map(item => item.name);

    const report = inventory.map(
        item => `${item.name.toUpperCase()}: $${item.price}`
    );

    const lines = [
        "--- Initializing Inventory System ---",
        `[Prompt executed: User adds "${name}" at "$${price}"]`,
        "",
        "--- Processing Inventory Roster (forEach) ---"
    ];

    inventory.forEach(item => {
        lines.push(
            `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
        );
    });

    lines.push(
        "",
        "--- Financial Analytics ---",
        `Total Inventory Value: $${total}`,
        `Filtered Affordable Items (Under $200): ${JSON.stringify(affordable)}`,
        `Formatted Report List: ${JSON.stringify(report, null, 2)}`
    );

    output.textContent = lines.join("\n");
    status.textContent = "Inventory analysis completed successfully!";

    console.log(lines.join("\n"));
});

// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
displayMenuItems(menu);
// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuEl = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    Object.entries(menu).map(([item, itemMenu ])=> {
        // Create an element to represent the category
        let category = document.createElement('h2');

        // Set the text content of the category element to the category name
        category.textContent = item;

        // Append the category element to the menu container
        menuEl.appendChild(category);

        // Create an element to represent a list of items
        const itemEl = document.createElement('ul');
        // Append a list of items element to the menu container
        menuEl.appendChild(itemEl);
        // Loop through the items in the category and create list items
        itemMenu.forEach(ListItem => {
           // Create a list item element
           const menuItem = document.createElement('li');

           // Set the text content of the list item element to the item name
           menuItem.textContent = ListItem;
           // Attach a click event listener to the list item to add it to the order
           // Append the list item to the list of items
           itemEl.appendChild(menuItem);
        });
         

    });
           
}


// // Callback function for adding an item to the order
// function addToOrder(itemName) {
//     // Get the order items list and the order total element from the HTML

//     // Create a list item for the order

//     // Set the text content of the list item to the item name

//     // Append the list item to the order items list

//     // Calculate and update the total price

//     // Update the text content of the order total element with the new total
// }

// // Function to initialize the menu system
// function initMenuSystem(menu) {
//     // Call the function to display menu items
// }

// // Start the menu system by calling the init function
// initMenuSystem(menu);

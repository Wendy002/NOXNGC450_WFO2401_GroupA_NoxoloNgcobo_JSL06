// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuEl = document.getElementById('menu');
    const orderEl = document.getElementById('order-items');
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
        itemMenu.forEach(listItem => {
           // Create a list item element
           const menuItem = document.createElement('li');

           // Set the text content of the list item element to the item name
           menuItem.textContent = listItem;
           
           // Append the list item to the list of items
           itemEl.appendChild(menuItem);

           // Attach a click event listener to the list item to add it to the order
           menuItem.addEventListener('click', function (event){
            event.preventDefault(); // prevents default behaviour when item is clicked
            addToOrder(listItem); // clone the menu items


           });

        });
         

    });
           
}


// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderEl = document.getElementById('order-items');
    const orderTotalEl = document.getElementById('order-total');
    let total = parseFloat(orderTotalEl.textContent); ;
    // Create a list item for the order
    const listItem = document.createElement('li');
    // Set the text content of the list item to the item name
    listItem.textContent = itemName;
    // Append the list item to the order items list
    orderEl.appendChild(listItem);
    // Calculate and update the total price
    total += 60;
    orderTotalEl.textContent = total;

    //Attach a click event listener to the list item to remove it from the order
    removeFromOrder(listItem,total,orderTotalEl);

}

//function to remove list item from order
function removeFromOrder(item,total,orderTotalElement){

    item.addEventListener('click', function(event){
        event.preventDefault();
        item.remove();
        total -= 60;
        orderTotalElement.textContent = total;

    });

}




// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);

}

// Start the menu system by calling the init function
initMenuSystem(menu);

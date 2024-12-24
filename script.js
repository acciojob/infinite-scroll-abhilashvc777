//your code here!
// Select the list
let list = document.querySelector('#infi-list');

// Function to add items to the list
function addItems(numItems) {
    for (let i = 0; i < numItems; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = 'Item ' + (list.children.length + 1);
        list.appendChild(listItem);
    }
}

// Add 10 items by default
addItems(10);

// Add event listener to window scroll
list.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // User has scrolled to the bottom, add more items
        addItems(2);
    }
});

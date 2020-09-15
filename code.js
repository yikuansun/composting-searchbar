// initiate search items
searchitems = document.getElementById("compostableitems").innerText.split("\n");

// add search bar
searchbarelem = document.createElement("input");
searchbarelem.type = "text";
searchbarelem.style.width = "100%";
searchbarelem.style.padding = "15px";
searchbarelem.style.boxSizing = "border-box";
searchbarelem.placeholder = "Search here";
document.body.appendChild(searchbarelem);

// update the display
function draw(query) {
    // display all items that include the query
    for (item of searchitems) {
        if (item.includes(query)) {
            itemelem = document.createElement("div");
            itemelem.innerText = item;
            itemelem.class = "searcheditem";
            document.body.appendChild(itemelem);
        }
    }
}

// do it ig
draw("");

// update display everytime bar is changed
searchbarelem.onkeyup = function() {
    draw(this.value);
}
// initiate search items
searchitems = document.getElementById("compostableitems").innerText.split("\n");

// add search bar
searchbarelem = document.createElement("input");
searchbarelem.type = "text";
searchbarelem.style.width = "100%";
searchbarelem.style.padding = "15px";
searchbarelem.style.boxSizing = "border-box";
searchbarelem.style.borderRadius = "0";
searchbarelem.style.position = "fixed";
searchbarelem.style.bottom = "0";
searchbarelem.style.left = "0";
searchbarelem.placeholder = "Find an item";
document.body.appendChild(searchbarelem);

// update the display
function draw(query) {
    // display all items that include the query
    for (item of searchitems) {
        if (item.toUpperCase().includes(query.toUpperCase())) {
            itemelem = document.createElement("div");
            itemelem.innerText = item;
            itemelem.setAttribute("class", "searcheditem");
            document.body.appendChild(itemelem);
            console.log(item);
        }
    }
}

// do it ig
console.clear();
draw("");

// update display everytime bar is changed
searchbarelem.onkeyup = function() {
    // clear old
    console.clear();
    searcheditems = document.getElementsByClassName("searcheditem");
    while (searcheditems[0]) {
        searcheditems[0].remove();
    }
    // add new
    draw(this.value);
}
// create loading thing
loadingsign = document.createElement("h1");
loadingsign.innerText = "Fetching data from web...";
document.body.appendChild(loadingsign);

// request data
var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/yikuansun/composting-searchbar/master/data.txt', false);
request.send();

// remove loading thing
loadingsign.remove();

// initiate search items
searchitems = request.responseText.split("\n");
for (i = 0; i < searchitems.length; i++) {
    searchitems[i] = {
        name: searchitems[i].split(":")[0],
        compostable_home: parseInt(searchitems[i].split(":")[1]),
        compostable_orangecounty: parseInt(searchitems[i].split(":")[2])
    };
}

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
        if (item.name.toUpperCase().includes(query.toUpperCase())) {
            itemelem = document.createElement("div");
            itemelem.innerText = item.name;
            itemelem.setAttribute("class", "searcheditem");
            document.body.appendChild(itemelem);
            console.log(item.name);

            // show compostable?
            typeelem = document.createElement("div");
            typeelem.innerHTML = "Compostable at home: " + (item.compostable_home?"<span style='color: #005500'>yes</span>":"<span style='color: #550000'>no</span>");
            itemelem.appendChild(typeelem);
            typeelem = document.createElement("div");
            typeelem.innerHTML = "Compostable by Orange County drop off: " + (item.compostable_orangecounty?"<span style='color: #005500'>yes</span>":"<span style='color: #550000'>no</span>");
            itemelem.appendChild(typeelem);
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
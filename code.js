// create loading thing
loadingsign = document.createElement("h1");
loadingsign.innerText = "Fetching data from web...";
document.body.appendChild(loadingsign);

// request data
try {
    dataRequest = fileFetcher.url("https://raw.githubusercontent.com/yikuansun/composting-searchbar/master/data.txt");
    data = fileFetcher.readTextValue(dataRequest);
}
// check for error
catch(err) {
    loadingsign.innerText = "Oops! Error fetching data.";
    throw "ball"; // throw fatal error ig
}

// remove loading thing
loadingsign.remove();

// initiate search items
searchitems = data.split("\n");
for (i = 0; i < searchitems.length; i++) {
    searchitems[i] = {
        name: searchitems[i].split(":")[0],
        compostable_home: parseInt(searchitems[i].split(":")[1]),
        compostable_orangecounty: parseInt(searchitems[i].split(":")[2])
    };
}

// add fixed div at bottom
myDiv = document.createElement("div");
//myDiv.style.position = "fixed";
//myDiv.style.bottom = "0";
myDiv.style.width = "100%";
myDiv.style.backgroundColor = "white";
document.body.appendChild(myDiv);
myDiv.id = "searchbardiv"; // for the css

// add search bar
searchbarelem = document.createElement("input");
searchbarelem.type = "text";
searchbarelem.style.width = "100%";
searchbarelem.style.padding = "15px";
searchbarelem.style.boxSizing = "border-box";
searchbarelem.style.borderRadius = "0";
searchbarelem.style.left = "0";
searchbarelem.placeholder = "Find an item";
myDiv.appendChild(searchbarelem); // add it to the fixed div

// add a key
myDiv.innerHTML += "<img alt='Compostable at home' src='house_icon.svg' style='height: 1em; width: 1em; vertical-align: middle;'/>: is it compostable at home?<br/><img alt='Compostable by Orange County drop off' src='orange_icon.svg' style='height: 1em; width: 1em; vertical-align: middle;'/>: is it compostable via Orange County drop off?";

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
            typeelem.innerHTML = "<img alt='Compostable at home' src='house_icon.svg' style='height: 1em; width: 1em; vertical-align: middle;'/>: " + (item.compostable_home?"<img src='check_icon.svg' style='color: #005500; height: 1em; width: 1em; vertical-align: middle;' alt='yes'/>":"<img src='x_icon.svg' style='color: #550000; height: 1em; width: 1em; vertical-align: middle;' alt='no'/>");
            itemelem.appendChild(typeelem);
            typeelem = document.createElement("div");
            typeelem.innerHTML = "<img alt='Compostable by Orange County drop off' src='orange_icon.svg' style='height: 1em; width: 1em; vertical-align: middle;'/>: " + (item.compostable_orangecounty?"<img src='check_icon.svg' style='color: #005500; height: 1em; width: 1em; vertical-align: middle;' alt='yes'/>":"<img src='x_icon.svg' style='color: #550000; height: 1em; width: 1em; vertical-align: middle;' alt='no'/>");
            itemelem.appendChild(typeelem);
        }
    }
}

// do it ig
console.clear();
draw("");

// update display everytime bar is changed
document.getElementsByTagName("input")[0].onkeyup = function() { // encountered a weird bug when using searchbarelem alias. idk why
    // clear old
    console.clear();
    searcheditems = document.getElementsByClassName("searcheditem");
    while (searcheditems[0]) {
        searcheditems[0].remove();
    }
    // add new
    draw(this.value);
}
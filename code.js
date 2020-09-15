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
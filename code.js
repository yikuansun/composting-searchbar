// initiate search items
searchitems = document.getElementById("compostableitems").split("\n");

// add search bar
searchbarelem = document.createElement("input");
searchbarelem.type = "text";
searchbarelem.style.width = "100%";
searchbarelem.style.padding = "15px";
document.body.appendChild(searchbarelem);
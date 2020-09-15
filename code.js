// initiate search items
searchitems = document.getElementById("compostableitems").innerText.split("\n");

// add search bar
searchbarelem = document.createElement("input");
searchbarelem.type = "text";
searchbarelem.style.width = "98%";
searchbarelem.style.padding = "1%";
document.body.appendChild(searchbarelem);
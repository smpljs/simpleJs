
// Updates the content of an HTML element with the id "range" based on the value of an input element with the id "count."
function ranges() {
    var x = document.getElementById("count").value;
    document.getElementById("range").innerHTML = x;
}

// Writes the specified string to the document using document.write().
function Print(str) {
    document.write(str);
}

// Evaluates the provided string as JavaScript code and returns the result.
function evl(ev) {
    return eval(ev);
}

// Displays an alert with the content passed as an argument.
function flash(flh) {
    return alert(flh);
}

// Retrieves the DOM element with the specified id.
function dom_id(id) {
    return document.getElementById(id);
}

// Retrieves an array of DOM elements with the specified name attribute.
function dom_name(nm) {
    return document.getElementsByName(nm);
}

// Copies the provided text to the clipboard using the Clipboard API.
function copy_text(cp) {
    return navigator.clipboard.writeText(cp);
}

// Converts the provided string to uppercase.
function upper(ml) {
    return ml.toUpperCase();
}

// Converts the provided string to lowercase.
function lower(lw) {
    return lw.toLowerCase();
}

// Retrieves the first DOM element that matches the specified CSS selector.
function selector(sl) {
    return document.querySelector(sl);
}

// Retrieves a NodeList of all DOM elements that match the specified CSS selector.
function selectAll(sll) {
    return document.querySelectorAll(sll);
}

// Retrieves a collection of DOM elements with the specified class name.
function dom_class(clss) {
    return document.getElementsByClassName(clss);
}

// Returns the length of the provided string or array.
function len(ln) {
    return ln.length;
}

// Navigates to the specified URL, effectively redirecting the page.
function open(rdc) {
    return window.location.href = rdc;
}

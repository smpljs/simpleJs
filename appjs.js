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
function dom_class(clssssss) {
    return document.getElementsByClassName(clssssss);
}

// Returns the length of the provided string or array.
function len(ln) {
    return ln.length;
}

// Navigates to the specified URL, effectively redirecting the page.
function open(rdc) {
    return window.location.href = rdc;

}

// dom using Class Dom

function dom_class(dmcl) {

    return document.getElementsByClassName(dmcl);

}

// Add data device  storage as database

function set_item(kye, Vlu) {
  return window.localStorage.setItem(kye, Vlu);
}

// get Stored item from device

function get_item(itm){
  return window.localStorage.getItem(itm);
    
}
// Throw Erro message if Something went Wrong
function error_msg(err = "Try again Something Went Wrong") {
  document.write(err);
}

// eventListener
function event(e1, e2, e3){
  e1.addEventListener(e2, e3);
}



//  host ip Address Coded by Usman Alibaba


function host_ip(domain, callback) {
    fetch("https://perfectionistic-own.000webhostapp.com/index.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "text=" + domain,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('There was a problem with the request.');
            }
            return response.text();
        })
        .then(ip => {
            if (callback && typeof callback === 'function') {
                callback(null, ip);
            }
        })
        .catch(error => {
            if (callback && typeof callback === 'function') {
                callback(error, null);
            }
        });
}


function erro_msg(msg) {
return msg = "something";

document.write(msg)

}

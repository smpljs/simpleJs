
// Simplejs Library Coded by Usman Alibaba

// Writes the specified string to the document using document.write().

function Print(str) {
    document.write(str);
}

// write the string to the document  

function print(ptr){
  document.write(ptr);

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

function open_url(rdc) {
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


function event(element, eventType, callback) {
  element.addEventListener(eventType, callback);
}

// remove event

function remove(elem, eventType, callback) {
    elem.removeEventListener(eventType, callback);
}


 
// get langueg in HTML DOC


function dom_lang(lng = "lang") {
  return document.documentElement.getAttribute(lng);

}




// Check if Network is Available


async function status() {
  try {
    await fetch('https://www.google.com', { method: 'HEAD' });
    return true; // Online
  } catch (error) {
    return false; // Offline
  }
}

// Event listener for online status changes

function onOnline() {
  console.log('Online');
  
  // Additional actions when online
}

// Event listener for offline status changes

function onOffline() {
  console.log('Offline');
  
  // Additional actions when offline
}

// Add event listeners to your library

function addStatusListeners() {
  window.addEventListener('online', onOnline);
  window.addEventListener('offline', onOffline);
}

// Remove event listeners when necessary

function removeStatusListeners() {
  window.removeEventListener('online', onOnline);
  window.removeEventListener('offline', onOffline);
}








// return user Platforn

function platform(pltf = navigator.platform){
 return navigator.platform;
}


// Return user browser And platform

function user_agent(brz = navigator.userAgent){
return navigator.userAgent;
}



// return app version 

function app_version(apvs = navigator.appVersion){
return navigator.appVersion;
}


// return app code name

function app_code(apcde = navigator.appCodeName){
 return navigator.appCodeName;
}



// return The languege of the app
function app_lang(aplng = navigator.language){
 return navigator.language;
}


// return app name

function app_name(apnme){
 return navigator.appName;
}


// A simple list like array

function list(...args) {
  return args;
}



// Change Html background color//
function bg_color(bgcl){
return document.body.style.backgroundColor = bgcl;
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




// Host IP Address function



function source_code(domain, callback) {
    fetch("https://perfectionistic-own.000webhostapp.com/source_code.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "source=" + encodeURIComponent(domain),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('There was a problem with the request.');
        }
        return response.text();
    })
    .then(result => {
        if (callback && typeof callback === 'function') {
            callback(null, result);
        }
    })
    .catch(error => {
        if (callback && typeof callback === 'function') {
            callback(error, null);
        }
    });
}


// item key
function item_key(itk) {

  return window.localStorage.key(itk);
}



// remove item in local storage
function remove_item(rmvi){
return window.localStorage.removeItem(rmvi);
}

// Clear All data in local storage

function clear_item(cli = localStorage.clear()){

return window.localStorage.clear();
}

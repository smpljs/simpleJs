
function ranges(){
var x = document.getElementById("count").value;

document.getElementById("range").innerHTML = x;
}


function Print(str){
document.write(str)
}


function evl(ev){
return eval(ev);
}


function flash(flh){

return alert(flh);

}

function dom_id(id){
return document.getElementById(id);

}

function dom_name(nm) {
 return document.getElementsByName(nm);

}

function copy_text(cp) {

return navigator.clipboard.writeText(cp);
}


function upper(ml) {
 return ml.toUpperCase();
}

function lower(lw){
 return lw.toLowerCase();
}

function selector(sl){

return document.querySelector(sl);

}

function selectAll(sll) {
return document.querySelectorAll(sll);
 
 }
 
function dom_class(clss) {
return document.getElementsByClassName(clss);
}

function len(ln) {

 return ln.length;
}



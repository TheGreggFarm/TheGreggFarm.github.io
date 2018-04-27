document.getElementById("animalddl").addeventlistener("change",make_carousel(Selection, "animal"))


function make_carousel(type,location){
    alert(type)
    alert(location)
var carArray = {};
    switch(type){
case cat:
carArray = {Pumpkin,BusyBee};
case dog:
carArray = {Belle,Otis,Lucky}
case rabbit:
carArray = {Sawyer}
case donkey:
carArray = {Sam,Mrs_T,Biscuit}
case pony:
carArray = {Pony}
case horse:
carArray= {Harley,Sassy,Wendigo,Ajay,Andy,Red,Aria,Big_Dan,Sunshine}
case goat:
carArray= {Sheldon,Zoe,Lilly,Willy}
    }


var html= ""
html += "<div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">"
html += "    <div cklass=\"carousel-inner\">"
html += "    <div class=\"carousel-item active\">"
html += "       <img class=\"d-block w-100\"  src=\"\images\" chair.jpg\" alt=\"First Slide\">"
html += "       </div>"
for (i = 1; i< type.length;i++){
    html += "      <div class=\"carousel-item\">"
    html += "       <img class=\"d-block w-100\"  src=\"\images\chair2.jpg\" alt=\"Second Slide\">"
    html += "       </div>"
        
       
        }
        html += "      </div> "


        html += "   </div> "


alert(i)



};

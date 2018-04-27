
function make_carousel(type,location){
    alert(type)
    alert(location)
var carArray = [];
    switch(type){
case Cat:
            alert(type)
carArray = ['Pumpkin','BusyBee'];
            break;
case Dog:
            alert(type)
carArray = ['Belle','Otis','Lucky'];
            break;
case Rabbit:
            alert(type)
carArray = ['Sawyer'];
            break;
case Donkey:
            alert(type)
carArray = ['Sam','Mrs_T','Biscuit'];
            break;
case Pony:
            alert(type)
carArray = ['Pony'];
            break;
case Horse:
            alert(type)
carArray= ['Harley','Sassy','Wendigo','Ajay','Andy','Red','Aria','Big_Dan','Sunshine'];
            break;
case Goat:
            alert(type)
carArray= ['Sheldon','Zoe','Lilly','Willy'];
            break;
    }

alert(cararray);
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

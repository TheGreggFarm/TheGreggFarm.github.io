
function make_carousel(type,location){
    alert(type)
    alert(location)
var carArray = [];
    switch(type){
case "Cat":
           
carArray = ['Pumpkin','BusyBee'];
            break;
case "Dog":
           
carArray = ['Belle','Otis','Lucky'];
            break;
case "Rabbit":
          
carArray = ['Sawyer'];
            break;
case "Donkey":
        
carArray = ['Sam','Mrs_T','Biscuit'];
            break;
case "Pony":
          
carArray = ['Pony'];
            break;
case "Horse":
          
carArray= ['Harley','Sassy','Wendigo','Ajay','Andy','Red','Aria','Big_Dan','Sunshine'];
            break;
case "Goat":
          
carArray= ['Sheldon','Zoe','Lilly','Willy'];
            break;
    }

alert(carArray);
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


alert(i);
       $( "#animal_text" ).text( type );
$( "#animal_carousel" ).html( html );



};

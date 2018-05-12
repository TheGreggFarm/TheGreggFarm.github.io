
function make_carousel(type,location){
   
var carArray = [];
    switch(type){
case "Cats":
           
carArray = ['Pumpkin','BusyBee'];
            break;
case "Dogs":
           
carArray = ['Belle','Otis','Lucky'];
            break;
case "Rabbit":
          
carArray = ['Sawyer'];
            break;
case "Donkeys":
        
carArray = ['Sam','MrsT','Biscuit'];
            break;
case "Pony":
          
carArray = ['Pony'];
            break;
case "Horses":
          
carArray= ['Harley','Sassy','Wendigo','Ajay','Andy','Red','Aria','BigDan','Sunshine'];
            break;
case "Goats":
          
carArray= ['Sheldon','Zoe','Lilly','Willy'];
            break;
    }


var html= ""
html += "<div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">"
html += "    <div class=\"carousel-inner\">"
html += "    <div class=\"carousel-item active\">"
   
html += "       <img class=\"d-block w-100\"  src=\"images\\"+ carArray[0] +".jpg\" alt=\"First Slide\">"
   if carArray.length > 1 then {
      html += "  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\"> "
html += "    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>"
html += "    <span class=\"sr-only\">Previous</span>"
html += "  </a> "
html += "  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">"
 html += "   <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>"
html += "    <span class=\"sr-only\">Next</span>"
html += "  </a>"
   }
html += "       </div>"
for (i = 1; i< carArray.length;i++){
    html += "      <div class=\"carousel-item\">"
    html += "       <img class=\"d-block w-100\"  src=\"images\\"+ carArray[i] +".jpg\" alt=\"Second Slide\">"
    html += "       </div>"
        
       
        }
        html += "      </div> "

html += "  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\"> "
html += "    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>"
html += "    <span class=\"sr-only\">Previous</span>"
html += "  </a> "
html += "  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">"
 html += "   <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>"
html += "    <span class=\"sr-only\">Next</span>"
html += "  </a>"
        html += "   </div> "


       $( "#animal_text" ).text( type );
$( "#animal_carousel" ).html( html );



};

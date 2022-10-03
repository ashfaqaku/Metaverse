
var h = "hello";

document(h);
$(document).ready(function(){
   $('#hr').click(function(){
          var foo = "<hr/>";
          $('#sample').after(foo);        
       });
   });​

   console.log(h);
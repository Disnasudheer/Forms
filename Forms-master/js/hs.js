function myFunction() {
                var a = document.getElementById("myDIV");
                var b = document.getElementById("button1");
                if (a.style.display == "none"){
                b.innerHTML="hide"; 
                  a.style.display = "inline";
                } else {

                  a.style.display = "none";
                  b.innerHTML='show'
                }
              } 
              
              
function validate(){
if(document.getElementById('fullname').value=='')
{
     document.getElementById('error1').innerHTML='please enter your name'
      return false
     } 
     if(document.getElementById('password').value=='')
     {
         document.getElementById('error2').innerHTML='please enter your password'
          return false 
        }
                  else
                  {
                   document.getElementById('registration').submit()
                    return true
                    } 
                  } 
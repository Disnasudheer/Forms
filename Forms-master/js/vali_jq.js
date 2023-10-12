function validate(){
        if($('#fullname').val()=='')
        {
             $('#error1').html('please enter your name')
              return false
             } 
             if($('#password').val()=='')
             {
                 $('#error2').html('please enter your password')
                  return false 
                }
                          else
                          {
                           $('#registration').submit()
                            return true
                            } 
                          } 

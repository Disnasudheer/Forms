function validate() {
    if ($('#fullname').val() == '') {
        $('#error1').html('please enter your name')
    } else if ($('#password').val()== '') {
        document.getElementById('error2').innerHTML = 'please enter your password'
    } 
    else if (document.getElementById('email').value == '') {
        document.getElementById('error3').innerHTML = 'please enter your email'
    } 
    else if (document.getElementById('phone').value == '') {
        document.getElementById('error4').innerHTML = 'please enter your Phone number'
    } 
    else {
        document.getElementById('registration').submit()
    }
}
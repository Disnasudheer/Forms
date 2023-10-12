function validate() {
    if ($('#fullname').val() == '') {
        $('#error1').html('please enter your name')
    } else if ($('#password').val()== '') {
        $('#error2').html('please enter your password')
    } 
    else if ($('#email').val() == '') {
        $('#error3').html('please enter your email')
    } 
    else if ($('#phone').val() == '') {
        $('#error4').html('please enter your Phone number')
    } 
    else {
        $('#registration').submit()
    }
}
$(document).ready(function() {
    console.log('ready');
    var errorun = true;
    var errorem = true;
    var errorps = true;
    var errorsn = true;
    $('#username').keyup(function() {
        checkusername();
    });
    $('#e-mail').keyup(function() {
        checkemail();
    });
    $('#psw').keyup(function() {
        checkpsw();
    });
    $('#sn').keyup(function() {
        checksn();
    });
    $('#username').focusout(function() {
        checkusername();
    });
    $('#e-mail').focusout(function() {
        checkemail();
    });
    $('#psw').focusout(function() {
        checkpsw();
    });
    $('#sn').focusout(function() {
        checksn();
    });

    function checkusername() {
        var username_length = $('#username').val().length;
        if(username_length < 5 && username_length != 0 || username_length > 20) {
            $('#imgun2').css('display', 'none');
            $('#imgun1').show();
            $('#um').show();
            $('#ur').css('display', 'none');
        } else if(username_length == 0 || username_length == null) {
            $('#ur').show();
            $('#imgun2').css('display', 'none');
            $('#um').css('display', 'none');
            $('#imgun1').show();
        } else {
            $('#imgun1').css('display', 'none');
            $('#imgun2').show();
            $('#um').css('display', 'none');
            $('#ur').css('display', 'none');
            errorun = false;
        }
    }

    function checkemail() {
        var emaillength = $('#e-mail').val().length;
        var pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if(!pattern.test($('#e-mail').val()) && emaillength != 0) {
            $('#imgem2').css('display', 'none');
            $('#imgem1').show();
            $('#ev').show();
            $('#er').css('display', 'none');
        } else if(emaillength == 0) {
            $('#er').show();
            $('#ev').css('display', 'none');
        } else {
            $('#imgem1').css('display', 'none');
            $('#imgem2').show();
            $('#ev').css('display', 'none');
            $('#er').css('display', 'none');
            errorem = false;
        }
    }

    function checkpsw() {
        var password = $('#psw').val().length;
        if(password < 5 && password != 0|| password > 20 ) {
            $('#imgps2').css('display', 'none');
            $('#imgps1').show();
            $('#pr').css('display', 'none');
            $('#pv').show();
        } else if(password == 0) {
            $('#pv').css('display', 'none');
            $('#pr').show();
        } else {
            $('#imgps1').css('display', 'none');
            $('#imgps2').show();
            $('#pv').css('display', 'none');
            $('#pr').css('display', 'none');
            errorps = false;
        }
    }

    function checksn() {
        var serialnumber = $('#sn').val().length;
        if(serialnumber == 5) {
            $('#imgsn1').css('display', 'none');
            $('#imgsn2').show();
            errorsn = false;
        } else {
            $('#imgsn2').css('display', 'none');
            $('#imgsn1').show();
        }
    }
    $('#reset').click(function() {
        $('#imgsn2').css('display', 'none');
        $('#imgsn1').css('display', 'none');
        $('#imgps1').css('display', 'none');
        $('#imgps2').css('display', 'none');
        $('#imgem1').css('display', 'none');
        $('#imgem2').css('display', 'none');
        $('#imgun1').css('display', 'none');
        $('#imgun2').css('display', 'none');
    })
    $('#returnform').submit(function() {
        checkusername();
        checkemail();
        checksn();
        checkpsw();
        if(errorun == false && errorsn == false && errorem == false && errorps == false) {
            return true;
        } else {
            return false;
        }
    })
});


document.getElementById('user').innerHTML = 'Thank You ' + GetUrlParameter('u');
document.getElementById('email').innerHTML = 'We will be reaching out via Email to ' + GetUrlParameter('e') + ' shortly!';


function press() {
    console.log(document.getElementById('txtUserName').value);
    var email = document.getElementById('txtEmail').value;
}

function submit() {

    window.location = 'admin.html?u=' + document.getElementById('txtUserName').value + '&e='+ document.getElementById('txtEmail').value;
}

function getEmail(){
    var emailName = document.getElementById('txtEmail').value;
   return emailName;
}
function GetUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
var users = [{ username:'ali el', password:'ali123456' }, { username:'amine ze', password:'12345678' } ]
function add(){
var Username1= document.getElementById('zou').value;
var password1=document.getElementById('gha').value;
if(password1.length<8){
    document.getElementById('less').innerHTML="password must contains 8 characters";
    return false;

}

else{
    var tab={};
    tab.username=Username1;
    tab.password=password1;
    users.push(tab);
    console.log(tab);
    return true;
}
}
function showPss(){
var passVal=document.getElementById('gha');


if(passVal.type=='text'){
    passVal.type='password';
}
else if (passVal.type=='password'){
    passVal.type='text';
   
}


}


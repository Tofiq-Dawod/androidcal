var Name ;
function myrep(){
    Name = document.getElementById('inp').value;
}
function Myfunction(){
    var P = document.getElementById('Nam').outerHTML;
    var re = P.replace('Person',Name);
    document.getElementById('Nam').innerHTML = re;
}
var x;var y;
function Slice1(){
x = parseInt(document.getElementById('inp1').value);
y = parseInt(document.getElementById('inp2').value);
}
function Slice(){
    x=x-1;
    var fruits=["Banana" , "Orange" , "Lemon" , "Apple" , "Mango"];
    var citrus=fruits.slice(x, y);
    document.getElementById('Nam1').innerHTML = citrus;
    }
var z;var c;
function ind(){
z = document.getElementById("inp3").value;
c = parseInt(document.getElementById("inp4").value);
}
function myindof(){
    var i = Name.indexOf(z,c);
    document.getElementById('Nam2').innerHTML = i;
}
function myspl(){
    var j = Name.split("");
    document.getElementById('Nam3').innerHTML = j;
}
function myACC(){
    var q = String(document.getElementById("inp").value);
    document.getElementById("Nam4").innerHTML=q.charCodeAt(0);
}
function myCA(){
    var e = String(document.getElementById("inp").value);
    document.getElementById("Nam5").innerHTML=e.charAt(0);
}
function Trim(){
    var t = String(document.getElementById("inp").value);
    document.getElementById("Nam6").innerHTML=t.trim();
}
var a;
function Sort(){
    a = document.getElementById("inp5").value;
}
function sorting(){
var s =" ";
if(a%2==0){
    for(var i =1;i<=parseInt(a);i++){
    s += i+" ";
    }
    document.getElementById("Nam7").innerHTML= s ;
    s="";
}
else{
    if(a%2==1){
        document.getElementById("Nam7").innerHTML= "Welcome";
    }
    else{
        alert("it is number wrong");
    }
}
}





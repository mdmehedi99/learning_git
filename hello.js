var a = 10
var b = 20
var c = a+b
console.log(c);

var d = 30
var e = 40
console.log(d * e);

var f = 10
for (var i = 0 ; i<f; i++){
    if(i%2 == 0){
        console.log(i);
    }
}


function sub(){
    for(var i = 0; i< 10; i++){
        if(i%2 == 1){
            console.log(i);
        }
    }
}

sub()
var x = 1;
for (var i=0; i<20; i++) {
    if (x % 2 != 0){
        console.log(x);
        x=x+1;
    } else if (x % 2 == 0) {
        x=x+1;
    }
}
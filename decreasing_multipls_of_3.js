var x = 100;
for (var i = 0; i <= 100; i++) {
    if (x % 3 == 0){
        console.log(x);
        x=x-1;
    } else if (x % 3 != 0) {
        x=x-1;
    }
}
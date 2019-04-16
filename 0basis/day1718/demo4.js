for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 || ((i - 30) >= 0 && (i - 30) <= 9) || ((i - 3) % 10 == 0)){
        console.log('PA');
    }else{
        console.log(i);
    }
}
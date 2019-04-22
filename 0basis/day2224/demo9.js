var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];

function dx(a, b){
    return b - a;
}

function sx(a, b){
    return a - b;
}

console.log(arr.sort(sx));

var arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];


function z2a(str1, str2){
    var i = 0;
    for(; i < str1.length && i < str2.length; i++){
        if(str1.charAt(i) < str2.charAt(i)){
            return 1;
        }else if(str1.charAt(i) > str2.charAt(i)){
            return -1;
        }
    }
    return str2.length - str1.length;
}
console.log(arr.sort(z2a));

var arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];

function sortBy2(a, b){
    return b[1] - a[1];
}

console.log(arr.sort(sortBy2));

var arr = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

function sortByValue(a, b){
    return a.value - b.value;
}

console.log(arr.sort(sortByValue));
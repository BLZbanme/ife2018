var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

function obj2Arr(){
    debugger;
    var result= [];
    for(obj in scoreObject){
        var tmp = [];
        tmp.push(obj.valueOf());
        tmp.push(scoreObject[obj].Math);
        tmp.push(scoreObject[obj]['English']);
        tmp.push(scoreObject[obj]['Music']);
        result.push(tmp);
    }
    console.log(result);
}

obj2Arr();

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

function creatObj(name, subMenu){
    this.name = name;
    this.subMenu = subMenu;
}

function arr2Obj(){
    var menuObject = new Object();
    for(var i = 0; i < menuArr.length; i++){
        if(menuArr[i][2] == -1){
            
        }
    }
}
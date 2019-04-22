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

function node(name){
    this.name = name;
}

function findId(objs, n){
    for(obj in objs){
        if(obj == n){
            return objs[obj];
        }else{
            var tmp = findSub(objs[obj], n);
            if(tmp != null){
                return tmp;
            }
        }
    }
}

function findSub(objs, n){
    if(objs != null && objs.subMenu != null){
        objs = objs.subMenu;
        for(obj in objs){
            if(obj == n){
                return objs[obj];
            }else{
                findSub(objs[obj], n);
            }
        }
    }   
}

function arr2Obj(){
    debugger;
    var menuObject = new Object();
    for(var i = 0; i < menuArr.length; i++){
        if(menuArr[i][2] == -1){
            if(menuObject[menuArr[i][0]] == null){
                menuObject[menuArr[i][0]] = new node(menuArr[i][1]);
            }else{
                menuObject[menuArr[i][0]].name =  menuObject[menuArr[i][1]];
            }
        }else{
            var fatherNo = menuArr[i][2];
            var obj = findId(menuObject, fatherNo);
            if(obj != null){
                if(obj.subMenu == null){
                    obj.subMenu = new Object();
                }
                obj.subMenu[menuArr[i][0]] = new node(menuArr[i][1]);
            }
        }
    }
    return menuObject;
}

arr2Obj();
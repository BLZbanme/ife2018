var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    var queue = [tree];
    var a;
    while(queue.length != 0){
        a = queue.shift();
        if(a.name == name){
            return a.id;
        };
        if(a.left != null){
            queue.push(a.left);
        }
        if(a.right != null){
            queue.push(a.right);
        }
    }
    return;
}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    var queue = [tree];
    var a;
    while(queue.length != 0){
        a = queue.shift();
        if(a.id == id){
            return a.name;
        };
        if(a.left != null){
            queue.push(a.left);
        }
        if(a.right != null){
            queue.push(a.right);
        }
    }
    return;
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
    firstQuery(tree);
}

function firstQuery(node){
    if(node == null){
        return;
    }
    console.log(node.name);
    firstQuery(node.left);
    firstQuery(node.right);
}

function midQuery(node){
    if(node == null){
        return;
    }
    midQuery(node.left);
    console.log(node.name);  
    midQuery(node.right);
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
    midQuery(tree);
}


function lastQuery(node){
    if(node == null){
        return;
    }
    lastQuery(node.left);
    lastQuery(node.right);
    console.log(node.name);   
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    lastQuery(tree);
}
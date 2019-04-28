function makeCheckBox(obj){
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = obj.value;
    checkbox.defaultChecked = true;
    return checkbox;
}

function makeLabel(obj){
    var label = document.createElement('label');
    label.innerHTML = obj.text;
    return label;
}
function creatCheckBox(str, arr){
    var div = document.querySelector('#' + str);
    for(let i in arr){
        var checkbox = makeCheckBox(arr[i])
        div.appendChild(checkbox);
        var label = makeLabel(arr[i])
        div.appendChild(label);
    }
}
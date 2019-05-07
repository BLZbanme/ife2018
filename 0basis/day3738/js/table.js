function createTableHeader(table){
    var thr = document.createElement('tr');
    var one = document.createElement('th');
    var two = document.createElement('th');
    if(oneRegionAndHowMuchProduct() != null && oneRegionAndHowMuchProduct() != 1 ){
        one.innerHTML = '地区';
        two.innerHTML = '商品';
    }else{
        one.innerHTML = '商品';
        two.innerHTML = '地区';
    }
    thr.appendChild(one);
    thr.appendChild(two);
    for(let i = 0; i < 12; i++){
        var month = document.createElement('th');
        month.innerHTML = months[i];
        thr.appendChild(month);
    }
    table.appendChild(thr);
}

function ArrayContain(arr, str){
    for(let i in arr){
        if(arr[i] == str){
            return true;
        }
    }
    return false;
}


function filterSourceData(){
    var regionBox = document.querySelectorAll('#region-radio-wrapper input');
    var productBox = document.querySelectorAll('#product-radio-wrapper input');
    var regionArr = [];
    for(let i in regionBox){
        if(regionBox[i].checked){
            regionArr.push(regionArray[regionBox[i].value]);
        }
    }
    var productArr = [];
    for(let i in productBox){
        if(productBox[i].checked){
            productArr.push(productArray[productBox[i].value]);
        }
    }
    let result = [];
    var data = JSON.parse(localStorage.getItem('saleData')) || sourceData;
    for(let obj in data){
        if(ArrayContain(regionArr, data[obj].region) && ArrayContain(productArr, data[obj].product)){
            result.push(data[obj]);
        }
    }
    return result
}

function mergeSp(sp){
    if(sp.innerHTML == spTmp){
        return;
    }
    spTmp = sp.innerHTML;
    var regionInputs = document.querySelectorAll('#region-radio-wrapper input');
    var regionNum = 0;
    var productNum = 0;
    for(let i in regionInputs){
        if(regionInputs[i].checked == true){
            regionNum++;
        }
    }
    sp.rowSpan = regionNum + '';
}

function mergeDq(dq){
    if(dq.innerHTML == dqTmp){
        return;
    }
    dqTmp = dq.innerHTML;
    var productInputs = document.querySelectorAll('#product-radio-wrapper input');
    var productNum = 0;
    for(let i in productInputs){
        if(productInputs[i].checked == true){
            productNum++;
        }
    }
    dq.rowSpan = productNum + '';
}

var spTmp = '';
var dqTmp = '';

function oneRegionAndHowMuchProduct(){
    var regionInputs = document.querySelectorAll('#region-radio-wrapper input');
    var productInputs = document.querySelectorAll('#product-radio-wrapper input');
    var regionNum = 0;
    var productNum = 0;
    for(let i in regionInputs){
        if(regionInputs[i].checked == true){
            regionNum++;
        }
    }
    for(let i in productInputs){
        if(productInputs[i].checked == true){
            productNum++;
        }
    }
    if(regionNum == 1){
        return productNum;
    }
}

function addPen(){
    var a = document.createElement('a');
    var img = document.createElement('img');
    a.className = 'pen';
    img.src = './pen.png';
    img.style.width = '0.5rem';
    img.style.height = '0.5rem';
    a.appendChild(img);
    a.style.display = 'none';
    img.addEventListener('click', editData);
    return a;
}

    window.onclick = qxEdit;

let preval;

let clickStack = [];

function qrEdit(e){
    var td = clickStack[clickStack.length - 1];
    var div = td.querySelector('div');
    var input = div.querySelector('input');
    var val = input.value;
    if(parseFloat(val).toString() != "NaN" && !isNaN(val)){
        var td = div.parentElement;
        td.innerHTML = val;
        td.appendChild(addPen());
        td.pop();
    }else{
        alert('不是数字');
    }
}

function qxEdit(e){
    if(e == null || (e.target.innerHTML != '确定' && e.target.tagName !='INPUT' && e.target.tagName !='IMG' && clickStack.length != 0) ){
        var td = clickStack.pop();
        td.innerHTML = preval;
        td.appendChild(addPen());
    }
}

function inputVal(e){
    switch(e.keyCode){
        case 13:
            qrEdit();
            break;
        case 27:
            qxEdit();
            break;
        default:
            break;
    }
}

function editData(e){
    var td = e.target.parentElement.parentElement;
    clickStack.push(td);
    preval = Number(td.textContent);
    td.textContent = '';
    var div = document.createElement('div');
    div.className = 'edit-div';
    td.appendChild(div);
    var input = document.createElement('input');
    input.style.width = "50%";
    input.style.height = "50%";
    input.type = 'text';
    input.value = preval;
    input.addEventListener('keydown', inputVal);
    div.appendChild(input);
    input.focus();
    var p = document.createElement('p');
    p.className = 'edit-p';
    var qr = document.createElement('a');
    qr.innerHTML = '确定';
    qr.addEventListener('click', qrEdit);
    var qx = document.createElement('a');
    qx.innerHTML = '取消';
    qx.addEventListener('click', qxEdit);
    p.appendChild(qr);
    p.appendChild(qx);
    div.appendChild(p);
}

function penShow(e){
    var td = e.target;
    var a = td.querySelector('.pen');
    if(a != null){
        a.style.display = 'inline';
    }
    
}

function penHidden(e){
    var td = e.target;
    var a = td.querySelector('.pen');
    if(a != null){
        a.style.display = 'none';
    }
}

function createtableRow(table){
    var data = filterSourceData();
    for(let i = 0; i < data.length; i++){
        var tr = document.createElement('tr');
            var sp = document.createElement('td');
            sp.innerHTML = data[i].product;
            tr.appendChild(sp);
        var dq = document.createElement('td'); 
        dq.innerHTML = data[i].region;
        tr.appendChild(dq);
        var saleArr = data[i].sale;
        for(let i = 0; i < saleArr.length; i++){
            var td = document.createElement('td');
            td.addEventListener('mousemove', penShow);
            td.addEventListener('mouseleave', penHidden);
            td.innerHTML = saleArr[i];
            td.appendChild(addPen());
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    dqTmp = '';
    spTmp = '';
}

function isTheLastOne(e){
    var checked = e.target;
    var str = checked.parentElement.id;
    var inputs = document.querySelectorAll('#' + str + ' input');
    var num = 0;
    for(let i in inputs){
        if(inputs[i].checked == false){
            num++;
        }
    }
    if(num == 3){
        e.target.checked = true;
    }
}
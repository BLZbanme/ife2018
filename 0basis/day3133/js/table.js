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
    for(let obj in sourceData){
        if(ArrayContain(regionArr, sourceData[obj].region) && ArrayContain(productArr, sourceData[obj].product)){
            result.push(sourceData[obj]);
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

function createtableRow(table){
    var data = filterSourceData();
    if(oneRegionAndHowMuchProduct() != null && oneRegionAndHowMuchProduct() != 1 ){
        for(let i = 0; i < data.length; i++){
            var tr = document.createElement('tr');
            if(data[i].region != dqTmp){
                var dq = document.createElement('td');
                dq.innerHTML = data[i].region;
                mergeDq(dq);
                tr.appendChild(dq);
            }
            var sp = document.createElement('td'); 
            sp.innerHTML = data[i].product;
            tr.appendChild(sp);
            var saleArr = data[i].sale;
            for(let i = 0; i < saleArr.length; i++){
                var td = document.createElement('td');
                td.innerHTML = saleArr[i];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }    
    }else{
        for(let i = 0; i < data.length; i++){
            var tr = document.createElement('tr');
            if(data[i].product != spTmp){
                var sp = document.createElement('td');
                sp.innerHTML = data[i].product;
                mergeSp(sp);
                tr.appendChild(sp);
            }
            var dq = document.createElement('td'); 
            dq.innerHTML = data[i].region;
            tr.appendChild(dq);
            var saleArr = data[i].sale;
            for(let i = 0; i < saleArr.length; i++){
                var td = document.createElement('td');
                td.innerHTML = saleArr[i];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
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
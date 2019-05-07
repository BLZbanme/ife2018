function changeTable(e){
    if(e != null){
        isTheLastOne(e);
    }
    document.querySelector('#table-wrapper').innerHTML = '';
    var table = document.createElement('table'); 
    table.border = '1px solid black'; 
    table.rules = 'all';
    var div = document.querySelector('#table-wrapper');
    div.appendChild(table);
    createTableHeader(table);
    createtableRow(table);
}

function saveData(){
    var table = document.querySelector('table');
    var trList = table.children;
    let ls = [];
    for(let i = 1; i < trList.length; i++){
        var tr = trList[i];
        var cells = tr.cells;
        var obj = new Object();
        ls.push(obj);
        obj.product = cells[0].textContent;
        obj.region = cells[1].textContent;
        obj.sale = [];
        for(let j = 2; j < cells.length; j++){
            obj.sale.push(Number(cells[j].textContent));
        }
    }
    localStorage.setItem('saleData', JSON.stringify(ls));
}

function clearData(){
    localStorage.clear();
}

var productDiv = document.querySelector("#product-radio-wrapper");
var regionDiv = document.querySelector("#region-radio-wrapper");
productDiv.addEventListener('click', changeTable);
regionDiv.addEventListener('click', changeTable);

var saveButton = document.querySelector('#save');
saveButton.addEventListener('click', saveData);

var clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearData);




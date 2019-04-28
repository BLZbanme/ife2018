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
var productDiv = document.querySelector("#product-radio-wrapper");
var regionDiv = document.querySelector("#region-radio-wrapper");
productDiv.addEventListener('click', changeTable);
regionDiv.addEventListener('click', changeTable);

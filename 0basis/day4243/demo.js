function Restaurant(restaurant){
    this.cash = restaurant.cash;
    this.seats = restaurant.seats;
    this.staff = restaurant.staff;
    this.hire = function(employee){
        this.staff.push(employee);
    };
    this.fire = function(employee){
        this.staff = this.staff.filter(e => e != employee);
    }
}

function Employee(id, name, salary){
    this.id = id;
    this.salary = salary;
    this.name = name;
}

Employee.prototype.finishAWork = function(){

}

function Waiter(id, name, salary){
    Employee.call(this, [id, name, salary]);
    this.finishWork = function(args){
        if(typeof args == "array"){
            console.log("记录点菜");
        }else{
            console.log("上菜");
        }
    }
}

function Cook(id, name, salary){
    Employee.call(this, [id, name, salary]);
    this.finishWork = function(args){
        console.log("烹饪出菜品");
    }
}

function Customer(){
    this.order = function(){
        console.log("点菜吃菜")
    }
}

function Food(name, cost, price){
    this.name = name;
    this.cost = cost;
    this.price = price;
}

var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
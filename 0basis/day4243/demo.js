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

Employee.prototype.finishWork = function(){

}

function Waiter(id, name, salary){
    Employee.apply(this, [id, name, salary]);
}

Waiter.prototype = new Employee();
Waiter.prototype.constructor = Waiter;
Waiter.prototype.finishWork = function(args){
    if(typeof args == "array"){
        console.log("记录点菜");
    }else{
        console.log("上菜");
    }
} 


function Cook(id, name, salary){
    Employee.apply(this, [id, name, salary]);
}

Cook.prototype = new Employee();
Cook.prototype.constructor = Cook;
Cook.prototype.finishWork = function(){
    console.log("烹饪出菜品");
}

function Customer(){
}

Customer.prototype.order = function(){
    console.log("点菜吃菜")
};

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


/***********es6版*********/
class Restaurant {
    constructor(restaurant){
        this.cash = restaurant.cash;
        this.seats = restaurant.seats;
        this.staff = restaurant.staff;
    };
    
    hire(employee){
        this.staff.push(employee);
    };

    fire(employee){
        this.staff = this.staff.filter(e => e != employee);
    }
}

class Employee {
    constructor(id, name, salary){
        this.id = id;
        this.salary = salary;
        this.name = name;
    }

    finishWork(){

    }
}

class Waiter extends Employee{
    constructor(id, name, salary){
        super(id, name, salary);
    }

    finishWork(args){
        if(typeof args == "array"){
            console.log("记录点菜");
        }else{
            console.log("上菜");
        }
    }
}

class Cook extends Employee{
    constructor(id, name, salary){
        super(id, name, salary);
    }

    finishWork(){
        console.log("烹饪出菜品");
    }
}

class Customer{
    order(){
        console.log("点菜吃菜");
    }
}

class Food{
    constructor(name, cost, price){
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
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
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
    if(typeof Waiter.instance === 'object'){
        return Waiter.instance;
    }
    Employee.apply(this, [id, name, salary]);
    Waiter.instance = this;
}

Waiter.prototype = new Employee();
Waiter.prototype.constructor = Waiter;
Waiter.prototype.finishWork = function(args){
    if(typeof args == "array"){
        console.log("记录点菜");
    }else{
        console.log("上菜" + args);
        customers[0].eat();
        customers[0].out();
    }
} 

Waiter.prototype.order = function(customer){
    
    new Cook().finishWork(customer.order());
} 

function Cook(id, name, salary){
    if(typeof Cook.instance === 'object'){
        return Cook.instance;
    }
    Employee.apply(this, [id, name, salary]);
    Cook.instance = this;
}

Cook.prototype = new Employee();
Cook.prototype.constructor = Cook;
Cook.prototype.finishWork = function(orderFood){
    console.log("烹饪出菜品" + orderFood.name);
    new Waiter().finishWork(orderFood.name);
}

function Customer(){
}

Customer.prototype.coming = function(){
    debugger;
    console.log("客人进来了");
    new Waiter().order(this);
};

Customer.prototype.order = function(){
    console.log("顾客点菜");
    return new Menu().order();
};


Customer.prototype.eat = function(){
    console.log("顾客吃菜");
};

Customer.prototype.out = function(){
    console.log("顾客离开");
    customers.shift();
    if(customers.length != 0){
        customers[0].coming();
    }
};

function Menu(foods){
    if(typeof Menu.instance === 'object'){
        return Menu.instance;
    }
    this.foods = foods;
    Menu.instance = this;
}

Menu.prototype.order = function(){
    let length = this.foods.length;
    return this.foods[parseInt(length * Math.random())];
}

new Menu([{name: "冒菜", price: 27},{name: "烧烤", price: 55}])


const customers = [new Customer(), new Customer()];

var newCook = new Cook("Tony", 10000);

customers[0].coming();
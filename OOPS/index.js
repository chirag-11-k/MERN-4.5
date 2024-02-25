class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    voice=()=>{
        console.log("Function is called by " + this.name);
    }
}

class pet extends Animal{
    
    constructor(name,age,petname){
        super(name,age)
        this.petname = petname;
    }
    
}
let p1 = new Animal("dog",2,"tommy");
let pet1 = new pet("cat",4,"kitty")

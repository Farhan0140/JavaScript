class Student {
    constructor(Name, Id, CGPA) {
        this.Name = Name;
        this.Id = Id;
        this.CGPA = CGPA
    }
}

let Student_1 = new Student("Farhan", 11, 2.77)
console.log(Student_1)  //-----> Student { Name: 'Farhan', Id: 11, CGPA: 2.77 }




//-----------> Class Expression

let _Student = class{
    constructor(name, id, age, cgpa) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.cgpa = cgpa;
    }
}

let Student_2 = new _Student("nadim", 1, 23, 1.19);
console.log(Student_2) //-----> _Student { name: 'nadim', id: 1, age: 23, cgpa: 1.19 }




// --------------------> ES6 Static Methods

class Hudai{
    Print() {
        console.log("Hi")
    }
}

let hudai = new Hudai();
console.log(hudai.Print()) //---> Hi

//-----------> ES6

class Hi{
    static Print_1() {
        console.log("Hi! Farhan")
    }
}

Hi.Print_1() // Hi! Farhan



//----------------------------> ES6 Inheritance & Super


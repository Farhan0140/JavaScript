//----------------> For Single Object

var MyInfo = {
    Name: "Farhan",          
    Id: 19,                   
    Present_Address: "Dhaka",
    CGPA: 2.01
}

console.log(MyInfo) //--> { Name: 'Farhan', Id: 19, Present_Address: 'Dhaka', CGPA: 2 }
console.log(MyInfo.Name) //---> Farhan
console.log(MyInfo.Id) //---> 19
console.log(MyInfo.CGPA) //---> 2.01



//-----------> For Multiple Object

function Info(Name, ID, Address, CGPA) {
    this.Name = Name;           //
    this.ID = ID                //
    this.Address = Address      //----> in ES6, we don't need to do that
    this.CGPA = CGPA            // 
}

//------------> ----> Object Literals ----------> ES6
function Info(Name, ID, Address, CGPA) {
    return {
        Name,
        ID,
        Address,
        CGPA
    }
}

var Student_1 = new Info("Farhan", 1, "Dhaka", 2.01)
var Student_2 = new Info("Motin", 3, "Narayanganj", 4.00)

console.log(Student_1) //----> { Name: 'Farhan', ID: 1, Address: 'Dhaka', CGPA: 2.01 }
console.log(Student_1.Name) //---> Farhan

console.log(Student_2) //----> { Name: 'Motin', ID: 3, Address: 'Narayanganj', CGPA: 4 }
console.log(Student_2.Address) //----> Narayanganj



function Info(Name, ID, Address, CGPA) {
    this.Name = Name;
    this.ID = ID
    this.Address = Address
    this.CGPA = CGPA

    this.Print = function() {
        console.log(this.Name)
        console.log(this.ID)
        console.log(this.Address)
        console.log(this.CGPA)
    }
}

var Student_1 = new Info("Farhan", 1, "Dhaka", 2.01)
var Student_2 = new Info("Motin", 3, "Narayanganj", 4.00)

Student_1.Print()
console.log("Break ")
Student_2.Print()



//---------------> Object Destructuring---------------------------> ES6
var MyInfo = {
    Name: "Farhan",          
    Id: 19,                   
    Present_Address: "Dhaka",
    CGPA: 2.01
}

console.log(MyInfo) 
console.log(MyInfo.Name) 
console.log(MyInfo.Id) 
console.log(MyInfo.CGPA)

//----------> ES6

const {Name, Id, Present_Address, CGPA} = MyInfo
console.log(Name)
console.log(Id)
//..........................
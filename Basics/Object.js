//-----------> For Single Object
/*
let MyInfo = {
    Name: "Farhan",
    Id: 19,
    Present_Address: "Dhaka",
    CGPA: 2.01
}

console.log(MyInfo) //--> { Name: 'Farhan', Id: 19, Present_Address: 'Dhaka', CGPA: 2 }
console.log(MyInfo.Name) //---> Farhan
console.log(MyInfo.Id) //---> 19
console.log(MyInfo.CGPA) //---> 2.01
*/

//-----------> For Multiple Object
/*
function Info(Name, ID, Address, CGPA) {
    this.Name = Name;
    this.ID = ID
    this.Address = Address
    this.CGPA = CGPA
}

let Student_1 = new Info("Farhan", 1, "Dhaka", 2.01)
let Student_2 = new Info("Motin", 3, "Narayanganj", 4.00)

console.log(Student_1) //----> { Name: 'Farhan', ID: 1, Address: 'Dhaka', CGPA: 2.01 }
console.log(Student_1.Name) //---> Farhan

console.log(Student_2) //----> { Name: 'Motin', ID: 3, Address: 'Narayanganj', CGPA: 4 }
console.log(Student_2.Address) //----> Narayanganj
*/


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

let Student_1 = new Info("Farhan", 1, "Dhaka", 2.01)
let Student_2 = new Info("Motin", 3, "Narayanganj", 4.00)

Student_1.Print()
console.log("Break ")
Student_2.Print()
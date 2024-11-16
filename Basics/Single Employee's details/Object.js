class Gradebook {
  constructor() {
      this.students = {};
  }

  addStudent(name) {
      if (!this.students[name]) {
          this.students[name] = [];
      } else {
          console.log(`Student ${name} already exists.`);
      }
  }

  addGrade(name, grade) {
      // Adds a grade for a specific student
      if (this.students[name]) {
          this.students[name].push(grade);
      } else {
          console.log(`Student ${name} does not exist.`);
      }
  }

  calculateAverageGrade(name) {
      // Calculates the average grade for a specific student
      if (this.students[name] && this.students[name].length > 0) {
          const total = this.students[name].reduce((sum, grade) => sum + grade, 0);
          return total / this.students[name].length;
      } else {
          console.log(`No grades available for student ${name}.`);
          return null;
      }
  }

  findHighestAndLowestGrades(name) {
      // Finds the highest and lowest grades for a specific student
      if (this.students[name] && this.students[name].length > 0) {
          const highest = Math.max(...this.students[name]);
          const lowest = Math.min(...this.students[name]);
          return { highest, lowest };
      } else {
          console.log(`No grades available for student ${name}.`);
          return { highest: null, lowest: null };
      }
  }
}

// Usage Example:

const gradebook = new Gradebook();
gradebook.addStudent("Alice");
gradebook.addGrade("Alice", 88);
gradebook.addGrade("Alice", 76);
gradebook.addGrade("Alice", 92);

// Calculate average
const average = gradebook.calculateAverageGrade("Alice");
console.log(`Alice's average grade: ${average}`);

// Find highest and lowest grades
const { highest, lowest } = gradebook.findHighestAndLowestGrades("Alice");
console.log(`Alice's highest grade: ${highest}`);
console.log(`Alice's lowest grade: ${lowest}`);

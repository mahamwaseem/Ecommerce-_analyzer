const Student = require('./student.js');
const GradeProcessor = require('./gradeprocessor.js');

const students = [
  new Student('Alice', [85, 89, 87]),
  new Student('Bob', [95, 97, 93])
];

const processor = new GradeProcessor(students);
console.log(processor.generateReport());

const Student = require('./student.js');
const GradeProcessor = require('./gradeprocessor.js');

test('GradeProcessor generates correct report', () => {
  const students = [
    new Student('Alice', [85, 89, 87]), // avg = 87 → B
    new Student('Bob', [95, 97, 93])    // avg = 95 → A
  ];

  const processor = new GradeProcessor(students);
  const report = processor.generateReport();

  expect(report).toEqual({
    Alice: { average: 87, grade: 'B' },
    Bob: { average: 95, grade: 'A' }
  });
});

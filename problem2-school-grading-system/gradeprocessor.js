class GradeProcessor {
  constructor(students) {
    this.students = students;
  }

  #getGradeLetter(avg) {
    if (avg >= 80) return 'A';
    if (avg >= 70) return 'B';
    if (avg >= 60) return 'C';
    if (avg >= 50) return 'D';
    return 'F';
  }

  generateReport() {
    const report = {};
    for (const { name, grades } of this.students) {
      const sum = grades.reduce((a, b) => a + b, 0);
      const average = sum / grades.length;
      report[name] = {
        average: Math.round(average),
        grade: this.#getGradeLetter(average)
      };
    }
    return report;
  }
}

module.exports = GradeProcessor;

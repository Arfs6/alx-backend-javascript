export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const grade = grades.find((grade) => grade.studentId === student.id);
      const newStudent = { ...student };
      newStudent.grade = grade === undefined ? 'N/A' : grade.grade;
      return newStudent;
    });
}

//part two 
const LightContainer = document.querySelector("div")
console.log(LightContainer)

//part three
const students = [{
    name: "Tasha",
    grades: [80, 67, 75, 62]
  },
  {
    name: "Tuvok",
    grades: [90, 88, 91, 92]
  },
  {
    name: "Dax",
    grades: [88, 90, 89, 85]
  },
  {
    name: "Neelix",
    grades: [60, 54, 48, 50]
  }
]

const studentsScholarship = []

for (const i of students) {
  let total = i.grades.reduce((a, b) => a + b, 0) / i.grades.length;
  if (total >= 80) {
    const grade = {
      name: i.name,
      gradeAvg: total
    }
    studentsScholarship.push(grade)
  }
}

console.log(studentsScholarship)

//part four
const divOne = document.querySelector(".light-theme");
divOne.classList.add("dark-theme")
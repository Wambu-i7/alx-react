const { Map, Seq } = require('immutable');

function printBestStudents(grades) {
  const studentsMap = Map(grades);

  const filtered = studentsMap
    .toSeq()
    .filter(student => student.get('score') >= 70)
    .map(student => student.set('firstName', capitalizeFirstLetter(student.get('firstName')))
                            .set('lastName', capitalizeFirstLetter(student.get('lastName'))));

  console.log(filtered.toJS());
}

function capitalizeFirstLetter(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

module.exports = printBestStudents;


const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const personAge = person.yearOfDeath - person.yearOfBirth;
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

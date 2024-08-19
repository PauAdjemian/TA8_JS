function findTheOldest(people) {

    let oldest = people.reduce((oldest, person) => {
      let personAge = person.yearOfDeath - person.yearOfBirth;
      let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
  
      
      return personAge > oldestAge ? person : oldest;
    });
  
    
    let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
  
  
    return {
      name: oldest.name,
      age: oldestAge
    };
  }
  
  // Ejemplo de uso:
  let people = [
    {
      name: "Pedro",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Luna",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Juan Manuel",
      yearOfBirth: 1500,
      yearOfDeath: 2020,
    },
    {
      name: "Paula",
      yearOfBirth: 2004,
      yearOfDeath: 2025,
    }

  ];
  
  console.log(findTheOldest(people));
  
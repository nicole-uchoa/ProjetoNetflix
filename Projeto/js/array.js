const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 21,
        gender: gender.MAN
    },
    {
        name: 'Paula',
        age: 43,
        gender: gender.WOMAN
    }
]

//console.log('Itens: ', persons.length);

//console.log('Avariável persons é um array: ', Array.isArray(persons));

persons.forEach((persons, index, arr) => {
   // console.log(`Nome: ${persons.name}, index: ${index}, arr`);
});

const mens = persons.filter(person => person.gender === gender.MAN);
//console.log('\nSomente homens: ', mens);

const personWithCourse = persons.map(person => {
    person.course = 'JavaScript';
    return person;
});
//console.log('Adição do curso: ', personWithCourse);

// primeiro parmetro é o que vai ser retornado, dps item ...
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log(totalAge);

const totalPar = persons
                    .filter(person => person.age % 2 === 0)
                    .reduce((age, person) => {
                        age += person.age;
                        return age;
                    }, 0);

console.log(totalPar);
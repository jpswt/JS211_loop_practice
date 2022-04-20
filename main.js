// 1. Use a do while loop to console.log the numbers from 1 to 1000

// Declaring a function that starts at zero, will increment the number plus one and
// log it each time until the the number is less than 1000
const numbersTo1000 = () => {
	let i = 0;
	do {
		i++;
		console.log(i);
	} while (i < 1000);
};

numbersTo1000();

//2. Create an object (with keys and values) called person with the following data:

let person = {
	firstName: 'Jane',
	lastName: 'Doe',
	birthDate: 'Jan 5, 1925',
	gender: 'female',
};

console.log('The person object has the following values: ', person);

//3. Create a function that logs out the key of the object using Object.keys

const personKeys = (obj) => {
	let objKeys = Object.keys(obj);
	console.log(`The object key of the person are: ${objKeys}`);
};

personKeys(person);

//4. Create a function that logs out the keys and values of the object using Object.entries()

const personEntries = (obj) => {
	for (let [key, value] of Object.entries(obj)) {
		console.log(
			`The keys and values of the person object are ${key}: ${value}`
		);
	}
};

personEntries(person);

// 5. Create an array of persons that contains multiple "people" objects

const arrayOfPersons = [
	{
		firstName: 'Jane',
		lastName: 'Doe',
		birthDate: 'Jan 5, 1995',
		gender: 'female',
	},
	{
		firstName: 'John',
		lastName: 'Smith',
		birthDate: 'Apr 15, 1978',
		gender: 'male',
	},
	{
		firstName: 'Neil',
		lastName: 'Peart',
		birthDate: 'Oct 25, 1965',
		gender: 'male',
	},
	{
		firstName: 'Shannon',
		lastName: 'Lamont',
		birthDate: 'Dec 25, 2002',
		gender: 'female',
	},
	{
		firstName: 'Reggie',
		lastName: 'Jackson',
		birthDate: 'July 14, 2005',
		gender: 'male',
	},
	{
		firstName: 'Brianna',
		lastName: 'Stewart',
		birthDate: 'May 22, 1980',
		gender: 'female',
	},
];

console.log(arrayOfPersons);

// 6. Create a function that uses a for...of loop and an if statement to log the value
// associated with the key birthDate of each object if the birthYear is an odd number

const oddBirthDate = (arr) => {
	// For of loop that iterate through every element in the array
	for (let key of arr) {
		// A variable of date that converts the last four values in birthDate(which
		// is a year) into a number
		let date = parseInt(key.birthDate.slice(-4));
		// if the date is not and even number(odd birth year)
		if (date % 2 !== 0) {
			// console.log the entire birth date value
			console.log(`The values of odd birth dates is ${key.birthDate}`);
		}
	}
};

oddBirthDate(arrayOfPersons);

// 7. Use .map() to map over the persons array and log their information.
// For every person in the arrayOfPersons, it will create a new array,
// which will return that person's information
const mapPersons = arrayOfPersons.map(function (person) {
	return person;
});

console.log('The object information for each person is', mapPersons);

// 8. Use the .filter() to filter the persons array and log only "males" in the array
// For every person in the arrayOfPersons, it will return every person that
// whose gender is "male" if true
const filteredMale = arrayOfPersons.filter(function (person) {
	return person.gender === 'male';
});

console.log('Persons that are male are: ', filteredMale);

// 9. Create a function that returns true if the value of birthDate is before Jan 1, 1990
// Declaring a function that determines if a birth date is before 1990
const before1990 = (date) => {
	// A variable of birthYear that converts the last four values of the birthDate to a number
	let birthYear = parseInt(date.birthDate.slice(-4));
	// if condition is is met will return true
	return birthYear < 1990;
};

// 10. Use .filter() to filter the persons array and log only people that were born before 1990

let filteredBirthDates = arrayOfPersons.filter(before1990);

console.log('Persons born before 1990 are: ', filteredBirthDates);

// BONUS #1 - Create a function that returns true if the date passed to it is >= 21 years in the past.
// Declaring a function of datePassed21 that has a parameter of date and determines if date passed to it
// is >= 21 years from current year
const datePassed21 = (date) => {
	// variable currentYear that is equal to the current year and converted to a number
	let currentYear = parseInt(new Date().getFullYear());
	//Variable birthYear that is equal to the birthYear and converted to a number
	let birthYear = parseInt(date.birthDate.slice(-4));
	// returns true if condition is met
	return currentYear - birthYear >= 21;
};

// BONUS #2 - .filter() out the people in the array who are younger than 21

// Using the filter method with a callback function of datePassed21 to determine if a person
// is younger than 21
let youngerThan21 = arrayOfPersons.filter(function (element) {
	// if the callback element is false, it will return person's younger than 21
	if (datePassed21(element) === false) {
		return element;
	}
});
console.log('Younger than 21 are: ', youngerThan21);
//
//
//
//
//
// Test Array for find and findIndex from scratch
let testArray = [3, 6, 24, 35, 27, 31, 40, 60, 100];

// find from scratch
// This function returns the first number in the
// array if it meets the criteria by the callback function
let myFind = function (arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		// if callback function returns true, then the element
		// gets returned
		if (callback(arr[i])) {
			return arr[i];
		}
	}
	// If callback function criteria is not met after iterating through
	// the entire array, it will return undefined
	return undefined;
};

//Testing myFind
let number = myFind(testArray, function (element, index) {
	if (element > 20) {
		return true;
	}
});
console.log('The output of myFind is the number: ', number);

// findIndex from scratch
// This function returns the index of the first number
// in the array if it meets the criteria by the callback function
let myFindIndex = function (arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			return i;
		}
	}
	// If callback function criteria is not met after iterating through
	// the entire array, it will return undefined
	return undefined;
};

//Testing myFindIndex
let numberIndex = myFindIndex(testArray, function (element, index) {
	if (element > 30) {
		return true;
	}
});
console.log('The output of myFindIndex is the index: ', numberIndex);

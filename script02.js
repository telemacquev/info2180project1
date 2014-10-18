var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    alert(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lname) {
	for (var i = 0; i < contacts.length; i++) {
		if (contacts[i].lastName===lname) {
		    printPerson(contacts[i]);  
		}
	}
}

function add(firstName, lastName, email, phoneNumber) { 
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
    };
};


function runMe2() {
    add("Leon","Jones","leon@gmail.com","(845) 848-9585");
    list();
}
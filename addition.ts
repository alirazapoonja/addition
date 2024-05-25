let a: number = 5;
let b: number = 2; 
let c: Number = 0; 

c = ++a + a++ + --b + b-- + a + b++ + b;


// c = a++ answer = 6
// c= ++a answer = 6
// c = --b answer = 1
// c = b-- answer = 1
// c= a++ + a++ answer = 12
// c= --b + b-- answer = 2
// c= a+ b++ +b answer = 10 
// c= a = 5
// c= b = 2


console.log(c);


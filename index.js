// EXAMPLE 1 - Split a String by Special Characters

const str = 'a.b-c=d/e_f';

const result = str.split(/[.\-=/_]/);

// 👇️ ['a', 'b', 'c', 'd' ,'e' ,'f']
console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 2 - A regular expression that splits on all special characters

// const str = 'a.b,c-d_e=f\\g/h';

// const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
// const result = str.split(specialChars);

// // 👇️ ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// console.log(result);

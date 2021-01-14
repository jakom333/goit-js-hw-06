import users from './users.js';

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   const skills = users.reduce((allSkills, user) => {
//     allSkills.push(...user.skills);
//     return allSkills;
//   }, []);
//   let result = [];
//   return skills
//     .filter(skill => (!result.includes(skill) ? result.push(skill) : ''))
//     .sort();
// };
// console.log(getSortedUniqueSkills(users));

// const getSortedUniqueSkills = users => {
//   const skills = users.flatMap(user => user.skills);
//   return [...new Set(skills)].sort();
// };
// console.log(getSortedUniqueSkills(users));

const getSortedUniqueSkills = users =>
  [...new Set(users.flatMap(user => user.skills))].sort();
console.log(getSortedUniqueSkills(users));

// let contentID = document.getElementById(`content`);
// console.log(contentID);
// let rulesID = document.getElementById(`rules`);
// console.log(rulesID);
// contentID.style.backgroundColor = 'red';
// contentID.innerText = `Перше правило бійцівського клубу – не говорити про бійцівський клуб!`;
// rulesID.innerText = `Друге правило Бійцівського клубу: не згадувати ніде про бійцівський клуб`;

// //  color by class
// let fcIbp = document.getElementsByClassName('fc bp');
// for (let i = 0; i < fcIbp.length; i++) {
//   fcIbp[i].style.backgroundColor = 'red';
//   fcIbp[i].style.color = 'blue';
// }

// // color in li elements
// let LiT = document.getElementsByTagName('li');

// for (let i = 0; i < LiT.length; i++) {
//   LiT[i].style.backgroundColor = 'red';
//   LiT[i].style.color = `blue`;
// }
// // class list
// let ClassList = document.getElementById('rules');
// console.log(ClassList.classList);

let fcRules = document.getElementsByClassName('fc_rules');
for (let i = 0; i < fcRules.length; i++) {
  console.log(fcRules[i]);
  fcRules[i].style.color = 'red';
}

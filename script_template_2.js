// let mainHead = document.getElementById('main_header');
// mainHead.style.color = 'pink';
// console.log(mainHead.innerText);

// //  width of

// let ElUl = document.getElementsByTagName('ul');
// for (let i = 0; i < ElUl.length; i++) {
//   ElUl[i].style.width = '400px';
// }

// // from link list

// let LinkList = document.getElementsByClassName('linkList');
// for (i = 0; i < LinkList.length; i++) {
//   LinkList[i].style.width = '50%';
// }

// //  Text from

// let TextList = document.getElementsByClassName('listElement2');
// for (let i = 0; i < TextList[i]; i++) {
//   console.log(TextList[i].innerText);
//   document.write(TextList[i].innerText);
//   document.body.appendChild(TextList);
// }

//  li elements

let lishki = document.getElementsByTagName('li');
for (let i = 0; i < lishki.length; i++) {
  lishki[i].style.backgroundColor = 'grey';
}

//  all a

// let AElem = document.getElementsByTagName('a');
// for (let i = 0; i < AElem.length; i++) {
//   AElem[i].classList.add('anchor');
// }
// for (let i = 0; i < AElem.length; i++) {
//   if (AElem[i].text === 'link3') {
//     AElem[i].style.fontSize = '40px';
//   }
// }
// for (let i = 0; i < AElem.length; i++) {
//   // const a = AElem[i];
//   const xxx = AElem[i].innerText;
//   AElem[i].classList.add(xxx);
// }

// subheader

// let subHeader = document.getElementsByClassName('sub-header');
// let PColor = prompt('background color');
// // for (let i = 0; i < subHeader.length; i++) {
// //   subHeader[i].backgroundColor = 'PColor';
// // }

// for (let i = 0; i < subHeader.length; i++) {
//   if (subHeader[i].innerText === 'content 2 segment') {
//     subHeader[i].backgroundColor = 'PColor';
//   }
// }

// // text from content

// let ContTexts = document.getElementsByClassName('content_1');
// for (i = 0; i < ContTexts.length; i++) {
//   const te = prompt('text'); //const or let???
//   ContTexts[i].innerText = te;
//   console.log(ContTexts[i]);
// }

// let ElemPs = document.getElementsByTagName('p');
// for (i = 0; i < ElemPs.length; i++) {
//   // for (const ElemP of ElemPs)  ???
//   Elemps[i].style.padding = '5px';
// }

let elemTextTwos = document.getElementsByClassName('text2');
for (const elemTextTwo of elemTextTwos) {
  elemTextTwo.innerText = 'dovilne znchennja';
}

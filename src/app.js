/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["before the class","when I was sleeping","while I was exercising","during my lunch","while I was praying"];

  let indexwho = Math.floor(Math.random() * who.length);
  let indexaction = Math.floor(Math.random() * action.length);
  let indexwhat = Math.floor(Math.random() * what, length);
  let indexwhen = Math.floor(Math.random() * when.length);

  let excusa = who[indexwho] + ' ' + action[indexaction] + ' ' + what[indexwhat] + ' ' + when[indexwhen];


  const textexcuse = document.querySelector('#excuse');
  textexcuse.innerHTML = excusa;
};

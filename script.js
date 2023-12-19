// --------------- task-1 -----------------
{
  let task1input = document.getElementById("task1-input");
  let task1btn = document.getElementById("task-btn");
  let task1output = document.getElementById("task1-output");

  task1btn.addEventListener("click", function () {
    let data = task1input.value;

    if (data.match(/[0-9]/g)) {
      task1output.innerText = "this is number";
    } else {
      task1output.innerHTML = "this is string ";
    }
  });
}

// ----------------- task 2 --------------
// 2). Write a JavaScript function to check whether a string is blank or not.
// task 1 is ans.

// ------------- task 3 -------------------
// 3). Write a JavaScript function to extract a specified number of characters from a string.
{
  let specified = "specified";

  const remove = () => {
    return specified.slice(2, 7);
  };
  // console.log(remove()); // console is ecifi
}

//----------------- task 4 ----------------
// 4). Write a JavaScript function to convert a string in abbreviated form.
// {
let abbreviated_input = document.getElementById("abbreviated-text");
let abbreviated_result = document.querySelector(".abbreviated-result");

const sortText = () => {
  let textInput = abbreviated_input.value.replace(/[aeiou]/gi, "");
  abbreviated_result.innerText = `Abbreviated Form :- ${textInput}`;
};
// }
// {
//   let abbreviated_input = document.getElementById("abbreviated-text");
//   let abbreviated_result = document.querySelector(".abbreviated-result");

//   function sortText() {
//     let textInput = abbreviated_input.value.replace(/[aeiouAEIOU]/g, "";
//     abbreviated_result.innerText = textInput;
//   }
// }

// ---------------- task 5 --------------
// 5). Write a JavaScript function to hide email addresses to protect from unauthorized user.

//  ------------------ task 5 --------------------

const protectEmail = () => {
  let emailRes = document.querySelector(".email-result");
  let email = document.getElementById("email-5").value.split("@");
  let part1 = email[0];
  let avg = part1.length / 2;
  let part2 = part1.substring(0, part1.length - avg);
  let res = `${part2}${"*".repeat(avg)}@${email[1]} `;
  emailRes.innerHTML = res;
};

// -------------------- task-6-input --------------------
// 6). Write a JavaScript function to parameterize a string.

const parameterize = () => {
  let input = document
    .getElementById("task-6-input")
    .value.trim()
    .toLowerCase()
    .replace(/\s/g, "-");
  let res = document.querySelector(".parameterize-res");

  res.innerHTML = input;
};

// ----------------------- task 7 --------------------
// 7).  Write a JavaScript function to capitalize the first letter of a string.
const capitalizeF = () => {
  let capitalINput = document.getElementById("CP1-input").value;
  let res = document.querySelector(".task7-res");
  let FLetter = capitalINput.charAt(0).toUpperCase() + capitalINput.slice(1);

  res.innerHTML = FLetter;
};

// --------------- task 8 -------------
const capitalizeAll = () => {
  let capitalINput = document.getElementById("task-8-int").value;
  let res = document.querySelector(".task8-res");
  let words = capitalINput.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  capitalINput = words.join(" ");

  res.innerHTML = capitalINput;
};

// ---------------- task 9 ------------------
// Write a JavaScript function that takes a string which has lower and upper case
// letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
const UpperLover = () => {
  let input = document.getElementById("task-9-int").value;
  let res = document.querySelector(".task9-res");

  let words = input.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });

  res.innerHTML = words;
};

// ---------------- task 10 -------------------

const camelCase = () => {
  let input = document.getElementById("task-10-int").value;
  let res = document.querySelector(".task10-res");
  
  let words = input
    .replace(/(?:abc)^\w|[A-Z]|\b\w/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");

  res.innerHTML = words;
};

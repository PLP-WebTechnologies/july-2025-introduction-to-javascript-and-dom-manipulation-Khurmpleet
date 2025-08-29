console.log("JS is working");

// ===============================
// Part 1: Basics (variables + conditionals)
// ===============================
let fruits = ["apple", "banana", "cherry"]; // array of fruits

function checkFruit() {
  // 1. Get what the user typed into the input
  let input = document.getElementById("fruitInput");
  let name = input.value.trim().toLowerCase();

  // 2. Condition: is this fruit inside the array?
  if (fruits.indexOf(name) !== -1) {
    document.getElementById("result").textContent = name + " is available.";
  } else {
    document.getElementById("result").textContent = name + " is not available.";
  }
}

// ===============================
// Part 2: Functions (reusability)
// ===============================
function isInStock(name) {
  name = name.toLowerCase().trim();
  return fruits.indexOf(name) !== -1;
}

function stockMessage(name) {
  if (isInStock(name)) {
    return name + " is available.";
  } else {
    return name + " is not available.";
  }
}

// ===============================
// Part 3: Loops
// ===============================
function showFruits() {
  let list = document.getElementById("list");
  list.innerHTML = ""; // clear old items

  // for loop → show all fruits
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }

  // while loop → simple countdown (for assignment)
  let count = 3;
  while (count > 0) {
    console.log("Countdown: " + count);
    count--;
  }
}

// ===============================
// Part 4: DOM interactions
// ===============================
function addFruit() {
  let input = document.getElementById("fruitInput");
  let name = input.value.trim().toLowerCase();

  if (!name) {
    alert("Please type a fruit");
    return;
  }

  // prevent duplicates
  if (fruits.indexOf(name) !== -1) {
    document.getElementById("result").textContent = name + " already exists.";
    input.value = name; // keep it so Check Fruit can use it
    return;
  }

  // add to array
  fruits.push(name);

  // feedback → DOM updates
  document.getElementById("result").textContent = "Added " + name;
  document.getElementById("intro").textContent = "Fruit Checker (updated)";
  document.getElementById("body").style.backgroundColor = "lightyellow";

  // keep the new fruit in the input so you can check it right away
  input.value = name;

  // re-render list
  showFruits();

  // auto-check it immediately
  checkFruit();
}

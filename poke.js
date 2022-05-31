"use strict";
// Getting data from the API

// for (let i = 1; i < 899; i++) {
//   let url = `https://pokeapi.co/api/v2/pokemon/${i}`;

//   fetch(url)
//     .then((data) => data.json())
//     .then((poke2) => multiply(poke2));

//   const multiply = function (poke2) {
//     const firstLetter2 = poke2.name.slice(0, 1).toUpperCase();
//     const restName2 = poke2.name.slice(1, poke2.name.length);
//     const nameFixed2 = firstLetter2.concat(restName2);
//     const firstLetterType2 = poke2.types[0].type.name.slice(0, 1).toUpperCase();
//     const restType2 = poke2.types[0].type.name.slice(
//       1,
//       poke2.types[0].type.name.length
//     );
//     const typeFixed2 = firstLetterType2.concat(restType2);

//     const html =
//       poke2.types.length > 1
//         ? `
//       <div id=${poke2.id} class='flex-item flex-item${poke2.id} ${poke2.types[0].type.name} ${poke2.name} ${poke2.name[0]}'>
//         <p class='num-name'>#${i} ${nameFixed2}</p>
//         <img class='sprite' src='${poke2.sprites.front_default}'  loading='lazy'>
//         <p class='description'> ${typeFixed2} / ${poke2.types[1].type.name} </p>
//       <div class='stats hidden'>
//       <div class='hp'>HP: ${poke2.stats[0].base_stat}</div>
//       <div class='attack'>Attack: ${poke2.stats[1].base_stat}</div>
//       <div class='defense'>Defense: ${poke2.stats[2].base_stat}</div>
//       <div class='special-attack'>Special-attack: ${poke2.stats[3].base_stat}</div>
//       <div class='special-defense'>Special-defense: ${poke2.stats[4].base_stat}</div>
//       <div class='speed'>Speed: ${poke2.stats[5].base_stat}</div>
//       </div>
//       </div>`
//         : `
//       <div id=${poke2.id} class='flex-item flex-item${poke2.id} ${poke2.types[0].type.name} ${poke2.name} ${poke2.name[0]}'>
//         <p class='num-name'>#${i} ${nameFixed2}</p>
//         <img class='sprite' src='${poke2.sprites.front_default}'  loading='lazy'>
//         <p class='description'> ${typeFixed2} </p>
//       <div class='stats hidden'>
//       <div class='hp'>HP: ${poke2.stats[0].base_stat}</div>
//       <div class='attack'>Attack: ${poke2.stats[1].base_stat}</div>
//       <div class='defense'>Defense: ${poke2.stats[2].base_stat}</div>
//       <div class='special-attack'>Special-attack: ${poke2.stats[3].base_stat}</div>
//       <div class='special-defense'>Special-Defense: ${poke2.stats[4].base_stat}</div>
//       <div class='speed'>Speed: ${poke2.stats[5].base_stat}</div>
//       </div>
//       </div>`;

//     const container = document.querySelector(".flex-container");
//   };
// }

/// function completed

//
//

//
//

// Now, a function for the sort buttons to display their values

// first, get the value from select drop-down boxes

// type filter function------------------------------------------------------------------

const selectType = document.getElementById("type");
const selectGen = document.getElementById("generation");

const updateType = function () {
  const typeOption = selectType.options[selectType.selectedIndex].text;
  console.log(typeOption);

  switch (typeOption) {
    case typeOption:
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);

        if (div.classList.contains(typeOption.toLowerCase())) {
          div.classList.remove("hidden");
        } else if (!div.classList.contains(typeOption.toLowerCase())) {
          div.classList.add("hidden");
        }
      }
  }
};

// generation filter function------------------------------------------------------

const updateGen = function () {
  const genOption = selectGen.options[selectGen.selectedIndex].text;
  const typeOption = selectType.options[selectType.selectedIndex].text;
  console.log(typeOption, genOption);

  switch (genOption) {
    case "Gen 1":
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.add("hidden");
      }
      for (let i = 1; i < 152; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
      break;
    case "Gen 2":
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.add("hidden");
      }
      for (let i = 152; i < 252; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
      break;
    case "Gen 3":
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.add("hidden");
      }
      for (let i = 252; i < 387; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
      break;
    case "Gen 4":
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.add("hidden");
      }
      for (let i = 387; i < 495; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
      break;
    case "Gen 5":
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.add("hidden");
      }
      for (let i = 495; i < 650; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
      break;
    case "Gen 6":
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.add("hidden");
      }
      for (let i = 650; i < 722; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
      break;

    case "Gen 7":
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.add("hidden");
      }
      for (let i = 722; i < 810; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
      break;
    case "Gen 8":
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.add("hidden");
      }
      for (let i = 810; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
      break;
  }
};

// Remove filters function---------------------------------------------------------------

const removeFilters = function () {
  for (let i = 1; i < 899; i++) {
    let div = document.querySelector(`.flex-item${i}`);
    div.classList.add("hidden");
  }

  for (let i = 1; i < 899; i++) {
    let div = document.querySelector(`.flex-item${i}`);
    div.classList.remove("hidden");
  }

  if (
    !selectGen.hasAttribute("onchange") &&
    !selectType.hasAttribute("onchange")
  ) {
    selectGen.setAttribute("onchange", "updateGen()");
    selectType.setAttribute("onchange", "updateType()");
  }
};

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", removeFilters);

//
//
//
//

// a function to add a paragraph containing a description---------------------------

const flavorText = [];

setTimeout(function () {
  for (let i = 1; i < 899; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;

    fetch(url)
      .then((data) => data.json())
      .then((poke3) => addDescription(poke3));

    const addDescription = function (poke3) {
      const [...values] = poke3.flavor_text_entries.values();
      const eng = values.find((obj) => obj.language.name === "en");

      const flav = eng.flavor_text;

      let arr = flav.split("\f");
      arr.join();

      let arr2 = arr.reduce((acc, el) => acc + " " + el);

      flavorText.push(arr2);
    };
  }

  console.log(flavorText);
}, 2500);

setTimeout(function () {
  for (let i = 0; i < flavorText.length; i++) {
    let div = document.querySelector(`.flex-item${i + 1}`);

    let description = flavorText[i];

    let html = `<p class='flav-text hidden'>${description}</p>`;

    div.insertAdjacentHTML("beforeend", html);
  }
}, 4000);

// function for showing stats and description on click:---------------------------

const showStats = function (el) {
  const info = el.target.getAttribute("id");
  const element = document.querySelector(`.flex-item${info}`);

  element.removeEventListener("click", showStats);

  console.log(element);

  for (let i = 1; i < 899; i++) {
    let div = document.querySelector(`.flex-item${i}`);
    div.classList.add("hidden");
  }

  element.children[0].style.fontSize = "45px";

  element.classList.remove("hidden");
  element.classList.add("focused-flex-item");

  console.log(element.children);

  element.children[3].classList.remove("hidden");
  element.children[3].classList.add("text-fix");
  element.children[4].classList.remove("hidden");

  // add close button and close function on current element:

  const closeBtn = document.createElement("button");

  const newContent = document.createTextNode("X");
  closeBtn.classList.add("close-btn2");
  closeBtn.appendChild(newContent);

  element.appendChild(closeBtn);

  ///
  /// add a delete functionality:-------------------

  const clear = function () {
    console.log("btn working");

    element.children[0].style.fontSize = "36px";
    element.children[3].classList.remove("text-fix");
    element.children[4].classList.add("hidden");
    element.children[3].classList.add("hidden");

    closeBtn.parentElement.classList.remove("focused-flex-item");
    closeBtn.parentElement.classList.add("flex-item");

    //remove deleted item from searched array

    element.removeChild(closeBtn);

    for (let i = 1; i < 899; i++) {
      let div = document.querySelector(`.flex-item${i}`);
      div.classList.remove("hidden");
      div.addEventListener("click", showStats);
    }
  };

  closeBtn.addEventListener("click", clear);
};

const divs = document.querySelectorAll(".flex-item");

divs.forEach((el) => el.addEventListener("click", showStats));

//
//

// First, an array to store all searched results

const searchArr = [];

// SEARCH FUNCTION /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const search = function () {
  //getting text value from text input, assigning it to variable,
  //and pushing it to array

  let txt = document.querySelector(".text-input").value;
  txt.toLowerCase();
  let txtBar = document.querySelector(".text-input");

  //select every new text-input by class with template literal

  if (txt === "") {
    alert(`You must enter a Pokemon's name to search`);
  }

  if (document.querySelector(`.${txt}`) === null) {
    alert(
      "You must search a valid Pokemon name. Double-check your spelling and try searching again!"
    );
  }

  const searchedPoke = document.querySelector(`.${txt}`);

  // remove stat showing function
  searchedPoke.removeEventListener("click", showStats);

  // make stats visible
  searchedPoke.children[0].style.fontSize = "45px";

  searchedPoke.classList.remove("hidden");
  searchedPoke.classList.add("focused-flex-item");

  console.log(searchedPoke.children);

  searchedPoke.children[3].classList.remove("hidden");
  searchedPoke.children[3].classList.add("text-fix");
  searchedPoke.children[4].classList.remove("hidden");

  //if null error is found due to misspelled input

  //create delete button and attach TO EACH SEARCHED POKEMON

  let closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  let newContent = document.createTextNode("X");
  closeBtn.appendChild(newContent);

  searchedPoke.appendChild(closeBtn);

  // if same pokemon is searched/exists in searched array

  if (searchArr.includes(searchedPoke)) {
    alert("You cannot search the same pokemon twice. Try a different Pokemon!");
    searchedPoke.removeChild(closeBtn);
    searchArr.pop(searchedPoke);
  }

  //if there is no input at all

  if (!searchedPoke) {
    alert(`You must enter a Pokemon's name to search`);
  }

  //array push

  searchArr.push(searchedPoke);

  //DISPLAYING SEARCHED POKEMON:
  // First, hide EVERYTHING

  for (let i = 1; i < 899; i++) {
    let div = document.querySelector(`.flex-item${i}`);
    div.classList.add("hidden");
  }

  // remove the hidden class on the searched pokemon so we can see it
  // and additionally, make it focused on the screen

  searchedPoke.classList.remove("hidden");
  searchedPoke.classList.add("focused-flex-item");
  searchedPoke.classList.remove("flex-item");

  //create delete function, add event listener, and restore main page
  //values:

  const clear = function () {
    //

    searchedPoke.children[0].style.fontSize = "36px";
    searchedPoke.children[3].classList.remove("text-fix");
    searchedPoke.children[4].classList.add("hidden");
    searchedPoke.children[3].classList.add("hidden");

    //hide the searched pokemon and remove focus class

    searchedPoke.addEventListener("click", showStats);

    closeBtn.parentElement.classList.add("hidden");
    closeBtn.parentElement.classList.remove("focused-flex-item");
    closeBtn.parentElement.classList.add("flex-item");

    //remove deleted item from searched array

    searchArr.pop(searchedPoke);
    searchedPoke.removeChild(closeBtn);

    //condition created based on number of pokemon in array
    // if less than 1 pokemon is left in searched, restore original
    //values to get main page

    if (searchArr.length < 1) {
      for (let i = 1; i < 899; i++) {
        let div = document.querySelector(`.flex-item${i}`);
        div.classList.remove("hidden");
      }
    }

    if (
      !selectGen.hasAttribute("onchange") &&
      !selectType.hasAttribute("onchange")
    ) {
      selectGen.setAttribute("onchange", "updateGen()");
      selectType.setAttribute("onchange", "updateType()");
    }

    resetBtn.addEventListener("click", removeFilters);
  };

  closeBtn.addEventListener("click", clear);

  //on initial search, restore search bar to blank after pressing search

  txtBar.value = "";
  txt = "";

  //once searched, remove the event listener and add a new one for a new
  //search

  searchBtn.removeEventListener("click", search);
  searchBtn.addEventListener("click", search);

  //can check array length here

  console.log(searchArr.length);

  //remove filter functionality
  if (
    selectGen.hasAttribute("onchange") &&
    selectType.hasAttribute("onchange")
  ) {
    selectGen.removeAttribute("onchange");
    selectType.removeAttribute("onchange");
  }

  resetBtn.removeEventListener("click", removeFilters);
};

//////
/////

////// attach function to buttons

const searchBtn = document.querySelector(".btn-search");

searchBtn.addEventListener("click", search);

// add enter button functionality

const txtBar = document.querySelector(".text-input");

txtBar.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.click();
  }
});

// add sticky button to allow quick scroll back to top
const upBtn = document.querySelector(".sticky-btn");

const addSticky = function () {
  //TOP
  if (
    document.querySelector(".flex-container").getBoundingClientRect().top <
    -1600
  ) {
    console.log("TRIGGER: top of div reached.");
    if (upBtn.classList.contains("hidden")) {
      upBtn.style.display = "flex";
      upBtn.classList.remove("hidden");
    }

    upBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      setTimeout(function () {
        upBtn.classList.add("hidden");
        upBtn.style.display = "none";
      }, 600);
    });
  }
};

window.addEventListener("scroll", addSticky);

// note: added sticky btn, works until usage of search or showStats

// after 6 seconds, remove intro message:

setTimeout(function () {
  const introMsg = document.querySelector(".intro");
  introMsg.remove();
}, 4500);

//

// bugs needing worked out:

// when showing stats, reset btn and filters can still mess up

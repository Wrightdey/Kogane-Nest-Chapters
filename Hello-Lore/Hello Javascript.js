const paragraphs = [
  "Hello is his name. Code namename.. Due to the dangers of being a public sorcerer, codenames were rather common. So Hello was Hello.The special grade who, allegedly, barely spoke. The special grade went MIssion after MIssion. Check after Check. Meal after Meal. It was how he lived. It was a life he preferred. A life of, what he considered, relaxation.",

  "This was another mission. Hunting down a Curse User that had been causing far too much trouble to be left alone.",

  "His name was John Werry. He committed a bank robbery resulting in 50 people dead, 30 people injured, and 200,000 dollars stolen.  The mission had gone up immediately and as usual, Hello got to the mission just as quickly.",

  "So much money stolen Hello thought as he jumped from building to building,, But you could’ve made more by just being a sorcerer. It was strange for a curse user of this caliber to steal money but also not uncommon. Some people just",

  "John was currently jumping on the rooftops with Hello hot on his heels. Hello thought of picking up the pace as he usually liked to be done early but he sensed something wrong and kept a distance. He saw he was right as John suddenly stopped and a knife(?) swiped right below Hello’s Chin with perfect form.",

  "Hello was able to dodge just in time before his throat could be cut open. Was that a knife? No I don’t think so. Hello thought",

  "John waved his right hand in a circle and Hello felt himself get blown by a wind gust. Ah so it wasn’t an actual knife, Hello thought, but wind. Hello would strengthen his cursed energy and hold his ground and start pushing through. John looked surprised an  used his left hand to  intensify it however Hello used one of his techniques, Acceleration along with Cursed energy enhancements to push through and land a right in his gut. John spit out blood and waved his hand again but Hello wouldn’t let him get that technique off again. While they were still close, Hello grabbed the front of his collar with his left hand and used an Electric Shock in his right to fully shock him.",

  "He let go of his collar and pulled Werry’s head up and made eye contact with him but before Hello could fully knock him out, Werry Threw his arms up for a big air tornado. Hello managed to react in time though and used Acceleration once again to back away from him",
];

let currentParagraph = 0;
let charIndex = 0;
let typing = false;

const textOutput = document.getElementById("text-output");
const cursor = document.getElementById("cursor");
const nextBtn = document.getElementById("next-btn");

function typeParagraph() {
  typing = true;
  const paragraph = paragraphs[currentParagraph];
  if (charIndex < paragraph.length) {
    // textOutput.innerHTML += paragraph.charAt(charIndex);
    document.getElementById("typed-text").textContent += paragraph.charAt(charIndex);
    charIndex++;
    setTimeout(typeParagraph, 30); // typing speed
  } else {
    typing = false;
    nextBtn.style.display = "inline-block";
  }
}

nextBtn.addEventListener("click", () => {
  if (typing) return;
  currentParagraph++;
  if (currentParagraph < paragraphs.length) {
    document.getElementById("typed-text").textContent = "";
    // textOutput.innerHTML = "";
    charIndex = 0;
    nextBtn.style.display = "none";
    typeParagraph();
  } else {
    cursor.style.display = "none";
    nextBtn.style.display = "none";
    textOutput.innerHTML += "\n\n[End of story]";
  }
});

// Start typing the first paragraph
typeParagraph();
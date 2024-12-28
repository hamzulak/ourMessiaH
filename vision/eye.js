// The decryption key
const decryptionKey = {
  messiah: "a",
  herald: "b",
  rhinoceros: "c",
  beetle: "d",
  spiral: "e",
  staircase: "f",
  singularity: "g",
  hydrangea: "h",
  desolation: "i",
  point: "j",
  angel: "k",
  corruption: "l",
  dolorosa: "m",
  giotto: "o",
  moon: "p",
  skies: "q",
  utter: "r",
  phrase: "s",
  shell: "t",
  follower: "u",
  presence: "v",
  wither: "w",
  halo: "x",
  bandage: "y",
  genesis: "z",
  serial: "/", // Mapping for '/'
  hex: ":", // Mapping for ':'
  honesty: ".", // Mapping for '.'
  famine: "t", // Custom mapping for 't'
  tear: ".",
  lullaby: '1',
  saint: '2',
  debilitate: '3',
  unluck: '4',
  heal: '5',
  luna: '6',
  sola: '7',
  diffusion: '8',
  believer: '9',
};

// Function to decrypt the text
function decryptText() {
  const encryptedText = document.getElementById("encryptedText").value;
  const words = encryptedText.split(" ");
  let decryptedMessage = "";

  words.forEach((word) => {
    // Check for custom characters and handle them accordingly
    let decryptedWord = decryptionKey[word.toLowerCase()];

    if (decryptedWord) {
      // If the word is found in the key, append it to the message
      decryptedMessage +=
        word === word.toUpperCase()
          ? decryptedWord.toUpperCase()
          : decryptedWord;
    } else {
      // If the word is not found, append a question mark (could be used for custom words too)
      decryptedMessage += "?";
    }
  });

  document.getElementById("decryptedText").textContent = decryptedMessage;
}

// Function to encrypt the text (new function for the reverse process)
function encryptText() {
  const plaintext = document.getElementById("encryptedText").value;
  let encryptedMessage = "";

  // Convert each character to the encrypted word
  for (let char of plaintext) {
    // Convert to lowercase to match the decryption key
    let encryptedChar = Object.keys(decryptionKey).find(
      (key) => decryptionKey[key] === char.toLowerCase()
    );

    if (encryptedChar) {
      encryptedMessage += encryptedChar + " ";
    } else {
      // For special characters, map them to their encrypted form directly
      if (char === "/") {
        encryptedMessage += "serial ";
      } else if (char === ":") {
        encryptedMessage += "hex ";
      } else if (char === ".") {
        encryptedMessage += "honesty ";
      } else if (char === "t") {
        encryptedMessage += "famine ";
      } else {
        encryptedMessage += char + " "; // For characters that don't need encryption
      }
    }
  }

  document.getElementById("decryptedText").textContent =
    encryptedMessage.trim();
}

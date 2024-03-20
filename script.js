
// Get the HTML input and XML output elements
const htmlInput = document.getElementById('htmlInput');
const xmlOutput = document.getElementById('xmlOutput');

// Get the convert button
const convertBtn = document.getElementById('convertBtn');

// Get the download button
const downloadBtn = document.getElementById('downloadBtn');

// Add click event listener to the convert button
convertBtn.addEventListener('click', () => {
  const htmlCode = htmlInput.value;
  const xmlCode = convertToXML(htmlCode);
  xmlOutput.value = xmlCode;
  downloadBtn.href = `data:text/xml;charset=utf-8,${encodeURIComponent(xmlCode)}`;
});

// Function to convert HTML to XML
function convertToXML(htmlCode) {
  // Your conversion logic goes here
  // Replace this placeholder logic with your own implementation

  // Replace < and > symbols with their XML entities
  const encodedCode = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Generate XML output
  const xmlCode = `&lt;xml&gt;\n${encodedCode}\n&lt;/xml&gt;`;
  return xmlCode;
}

// Popup functionality
const popupLinks = document.querySelectorAll('.popup-link');
const closeBtns = document.querySelectorAll('.close-btn');

popupLinks.forEach(link => {
  link.addEventListener('click', () => {
    const popupSelector = link.dataset.popup;
    const popup = document.querySelector(popupSelector);
    popup.style.display = 'block';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const popupSelector = btn.dataset.popup;
    const popup = document.querySelector(popupSelector);
    popup.style.display = 'none';
  });
});
// Get the clear and copy buttons
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

// Add click event listener to the clear button
clearBtn.addEventListener('click', () => {
xmlOutput.value = '';
});

// Add click event listener to the copy button
copyBtn.addEventListener('click', () => {
xmlOutput.select();
document.execCommand('copy');
});

// Add an event listener to clear the XML code when the HTML code is changed
htmlInput.addEventListener('input', () => {
xmlOutput.value = '';
});

 
//Gerador de senha
function generatePassword() {
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const special = document.getElementById("special").checked;

  let charset = "";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charset += "0123456789";
  if (special) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById("password").value = password;
}

//Gerador de link para whatsapp 
function generateWhatsAppLink() {
  const phone = document.getElementById("phone").value;
  const message = encodeURIComponent(document.getElementById("message").value);
  const link = `https://wa.me/${phone}?text=${message}`;

  document.getElementById("whatsappLink").href = link;
  document.getElementById("whatsappLink").innerText = "Clique aqui para abrir o WhatsApp";
}

//Contador de caracteres
function count() {
  const text = document.getElementById("text").value;
  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).length;
  const lineCount = text.trim().split('\n').length;
  
  document.getElementById("charCount").textContent = charCount;
  document.getElementById("wordCount").textContent = wordCount;
  document.getElementById("lineCount").textContent = lineCount;
}

 //Sorteador 
 function drawWinner() {
  const wordsInput = document.getElementById("words").value;
  const wordsArray = wordsInput.split(/\s*,\s*|\s+/).filter(Boolean);
  
  if (wordsArray.length === 0) {
    document.getElementById("winner").textContent = "Por favor, insira algumas palavras para sortear.";
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  const winner = wordsArray[randomIndex];
  
  document.getElementById("winner").textContent = winner;
}    

//Localizar e Substituir 
function replaceAll() {
  const editor = document.getElementById("editor");
  const searchText = document.getElementById("searchText").value;
  const replaceText = document.getElementById("replaceText").value;

  const newText = editor.value.split(searchText).join(replaceText);
  editor.value = newText;
}

//Calculadora 
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Erro';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}


//Gerador de lorem ipsum 
  function generateLoremIpsum() {
      const paragraphs = document.getElementById("paragraphs").value;
      const result = document.getElementById("result");
      result.innerHTML = '';

      for (let i = 0; i < paragraphs; i++) {
        const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        result.innerHTML += `<p>${lorem}</p>`;
      }
    }
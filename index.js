let inputText;
let inputValue;
let counterKeys = 0;
let spaceKeyPressed = 0;
let keysPressed = 0;
let totalKeysPressed = 0;
let isUpperChar = false;
let keys = ['.', ',', '-', '?', '!', ':',
 ' ', 'a', 'b', 'c', '2',
  ' ', 'd', 'e', 'f', '3',
   ' ', 'g', 'h', 'i', '4',
    ' ', 'j', 'k', 'l', '5',
     ' ', 'm', 'n', 'o', '6',
      ' ', 'p', 'q', 'r', 's', '7',
       ' ', 't', 'u', 'v', '8',
        ' ', 'w', 'x', 'y', 'z', '9',
         ' ', '0'];

let lastLength = 0;
let interval = setInterval(analize, 100);
let resultValue = document.getElementById("result");

function analize() {
	inputText = document.getElementById('input');
	inputValue = inputText.value;
	while (lastLength < inputValue.length) {
		for (let i = 0; i < inputValue.length; ++i) {
			for (let j = 0; j < keys.length; ++j) {
				if (inputValue[i] !== ' ') {
					++counterKeys;
					if (keys[j] === ' ') {
						counterKeys = 0;
					}
					if (inputValue[i] === keys[j]) {
						if (isUpperChar) {
							++counterKeys;
							isUpperChar = false;
						}
						keysPressed += counterKeys;
						j = keys.length;
					} else if (inputValue[i] === keys[j].toUpperCase()) {
						if (!isUpperChar) {
							++counterKeys;
							isUpperChar = true;
						}
						keysPressed += counterKeys;
						j = keys.length;
					}
				} else {
					++spaceKeyPressed;
					j = keys.length;
				}
			}
			counterKeys = 0;
			totalKeysPressed = keysPressed + spaceKeyPressed;
			resultValue.textContent = totalKeysPressed;
		}
		lastLength = inputValue.length;
	}
	isUpperChar = false;
	totalKeysPressed = 0;
	keysPressed = 0;
	spaceKeyPressed = 0;
	if (lastLength > inputValue.length) {
		lastLength = inputValue.length - 1;
		totalKeysPressed = 0;
		keysPressed = 0;
		spaceKeyPressed = 0;
	} else if (inputValue.length == 0) {
		lastLength = inputValue.length;
		totalKeysPressed = 0;
		keysPressed = 0;
		spaceKeyPressed = 0;
		resultValue.textContent = totalKeysPressed;
	}
}
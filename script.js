const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


const checkWord = () => {
//get text input and check if any thing has been written
  const textInputVal = textInput.value;
  if(textInputVal === ""){
    alert("Please input a value");
    return
  }
  //do the palindrom check below/ call function here
  const cleanedWord = cleanInput(textInputVal)
  palindromeCheck(cleanedWord);
}

const cleanInput = (word) => {
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '')
  return cleanedWord.toLowerCase();
}

const palindromeCheck = (word) => {
  ///do palindrome check
  let reversedWord = word[word.length-1];
  for(let i = word.length-2 ; i > -1 ; i-- ){
    reversedWord += word[i]
  }
  if(word === reversedWord){
    result.innerHTML = `<h3>${textInput.value} is a palindrome</h3>` 
  }else{
    result.innerHTML = `<h3>${textInput.value} is not a palindrome</h3>` 
  }
}

checkBtn.addEventListener("click",checkWord)

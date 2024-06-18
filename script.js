const userInput = document.getElementById("text-input");
const palindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = input => {

  if(input === ""){
    alert("Please input a value");
    return;
  }

  resultDiv.replaceChildren();
  const lowerCaseStr = input.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const copy = [...lowerCaseStr].reverse().join('');
  if (lowerCaseStr === copy){
    //console.log("Palindrome");
    resultDiv.innerHTML = `${input} is a palindrome`
  }
  else {
    //console.log(`Not Palindrome`)
    resultDiv.innerHTML = `${input} is not a palindrome`
  }

  resultDiv.classList.remove("hidden");
}

palindromeBtn.addEventListener( "click" , () => {
  checkPalindrome(userInput.value);
  userInput.value = "";
})
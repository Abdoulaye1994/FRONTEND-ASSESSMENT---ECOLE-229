function isPalindrome() {
    let word = String(prompt("Saisir un mot"))
    if(word === word.split('').reverse().join ('')){
       alert(word + "is a palindrome")
    }else {
        alert(word + "is not a palindrome")
    }
}
isPalindrome()
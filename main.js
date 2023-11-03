function check_Palindrome(Str){
 let Arr=Str.split('');
 let reverseArr= Arr.reverse();
 let reverseStr=reverseArr.join('');
 if(Str==reverseStr){
return 'It is a palindrome'
 }else{return'It is not a palindrome' }
 }

console.log(check_Palindrome("amal"))
 console.log(check_Palindrome("radar"))
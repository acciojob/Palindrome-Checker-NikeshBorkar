// complete the given function

function palindrome(str){
	let end=str.length-1;
	let start=0;
	while (start<end) {
		if(str[end]==str[start]){
			end--;
			start++;
		}else{
			return false
		}
		
	}
	return true;

}
module.exports = palindrome

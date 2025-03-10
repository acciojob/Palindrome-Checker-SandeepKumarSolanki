// complete the given function

function palindrome(str){
	let len = str.length-1;
	for(let i=0 ; i<len/2 ; i++){
		if(str[i] !== str[len-i]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome

// complete the given function

function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
	let len = str.length;
	for (let i = 0; i < len / 2; i++) {
	    if (str[i] !== str[len - 1 - i]) {
	      return false;
	    }
	}
	return true;
}

module.exports = palindrome;


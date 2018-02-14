const alphabet = "abcdefghijklmnopqrstuvwxyz";

const encode = function(text, key) {
	let result = '';
	const alphabetArray = Array.from(alphabet)

	Array.from(text).forEach(function(element) {
		const index = alphabetArray.indexOf(element);
		if(index == -1) {
			result += ' ';
		} else {
			const shiftedIndex = (index + Number(key)) % alphabetArray.length;
			const shiftedCharacter = alphabetArray[shiftedIndex];
			result += shiftedCharacter;
		}
	});

	return result;
}

const decode = function(text, key) {
	let result = '';
	const alphabetArray = Array.from(alphabet)

	Array.from(text).forEach(function(element) {
		const index = alphabetArray.indexOf(element);
		if(index == -1) {
			result += ' ';
		} else {
			let shiftedIndex = index - Number(key);
			if(shiftedIndex < 0) {
				shiftedIndex += alphabetArray.length
			}
			const shiftedCharacter = alphabetArray[shiftedIndex];
			result += shiftedCharacter;
		}
	});

	return result;
}

$(document).ready(function () {
    $("#cipher-encode").click(function () {
        const result = encode($('#cipher-text').val(), $('#cipher-key').val());
        $('#encrypted').html(result);
    });

    $("#cipher-decode").click(function () {
        const result = decode($('#cipher-text').val(), $('#cipher-key').val());
        $('#encrypted').html(result);
    });
});
//自定义一个阶乘函数，就是有n个数相乘，从m开始，每个数减1，如factorial(5,4)就是5*(5-1)*(5-2)*(5-3),相乘的数有4个
export const newFactorial = (m,n) => {
	var num = 1;
	var count = 0;
	for(var i = m;i > 0;i--){
			if(count == n){//当循环次数等于指定的相乘个数时，即跳出for循环
					break;
			}
			num = num * i;
			count++;
	}
	return num;
} 

//计算一个数的阶乘
export const factorial = (num) => {
	if(num <= 1) {
		return 1;
	} else {
			return num * factorial(num - 1); 
	}
}

/**
 * Accept a number and return the letter it corresponds to in alphabetic table, up to 6
 * e.g. 1 => A, 2 => B, 3 => C...
 * @param Number index 
 * @returns String
 */
export const getLetterIndex = (index) => {
	const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
	if( Number.isInteger(Number(index)) && index >= 1 && index <= 6 ) {
		return letters[index-1];
	} else {
		return false;
	}
}
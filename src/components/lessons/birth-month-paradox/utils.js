
export const isMatch = (months) => {
	for (let i = 0; i < months.length - 1; i++){
		for (let j = i+ 1; j < months.length; j++){
			if(months[i] === months[j]){
				return true;
			}
		}
	}
	return false;
};

export const isBirthDayMatch = (birthday) => {

	for (let i = 0; i < birthday.length - 1; i++){
		for (let j = i + 1; j < birthday.length; j++){
			if(birthday[i].month === birthday[j].month &&
				birthday[i].day === birthday[j].day){
				return true;
			}
		}
	}
	return false;
};

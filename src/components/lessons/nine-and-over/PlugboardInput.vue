<template>  
	<div class="app--plugboard mt-2">
		<div class="app--plugboard-number-container" v-for="i in 5" :key="i">
			<div class="app--plugboard-number">
				<input 
					class="app--plugboard-number-input"
					:style="{visibility: 6-i>totalDigit ? 'hidden' : 'visible' }" 
					type="number" :min="0" :max="9"
					:disabled="isDisable"
					:data-digit="i"
					v-model="digital[i-1]"
					@input="handleSetNumber"
				>
				<i class="fas fa-check text-success" v-if="numberToCheck && digital[i-1] && numberToCheckArr[i-1]==digital[i-1]"></i>
			</div>	<!-- Input -->
		</div>
	</div> 
</template>

<script>
export default {
	props: ['totalDigit','inputNumber','form','isDisable', 'countingSet', 'numberToCheck', 'isCreatingNewNumber'],
	data: function() {
		return {
			digital: [],	// Digital for input,
			// isDisable: false
			numberToCheckArr:[]
		}
	},
	watch: {
		isCreatingNewNumber(value, prevValue) {
			if(prevValue === false && value === true) {
				this.digital = [];
				this.numberToCheckArr = [];
			}
		},
		inputNumber(value, prevValue) {	// Change number to an array with 5 elements
		// e.g. 352 -> [0, 0, 3, 5, 2]
			if(value===null) {
				this.digital=[];
				return;
			}
			if(value !== prevValue){
				this.digital = [];
			}
			let number = Number(value);
			if(number >= 0) {
				const numberArr = number.toString().split('');	// convert to array
				// e.g. 352 -> [3, 5, 2]
				for(let i = 0; i <= 4; i++) {
					// 在前面补0以凑足指定位数
					if(Number(numberArr[numberArr.length-i-1]) >= 0) {						
						this.digital.unshift(Number(numberArr[numberArr.length-i-1]));
					} else {
						this.digital.unshift(0);
					}
				}
			}
		},
		numberToCheck(value) {
			if(value) {
				const numberArr = value.toString().split('');
				for(let i = 0; i <= 4; i++) {
					// 在前面补0以凑足指定位数
					if(Number(numberArr[numberArr.length-i-1]) >= 0) {
						this.numberToCheckArr.unshift(Number(numberArr[numberArr.length-i-1]));
					} else {
						this.numberToCheckArr.unshift(0);
					}
				}
			}
		}
	},
	methods: {
		handleSetNumber(e) {
			let inputNumber = e.target.value;
			let digit = e.target.getAttribute('data-digit');
			this.digital[digit-1] = inputNumber;
			console.log(this.digital);
			this.$emit('setInputNumber', this.digital)
			// console.log(e.target.getAttribute('data-digit'));
			// console.log(inputNumber);
		}
	},
	created() { 
	}
}
</script>

<style scoped>	
.app--plugboard {
	display: flex;
}
.app--plugboard-number-container { 
	width: 18%;
}
.app--plugboard-number {
	display: flex;
	justify-content: center;
	align-items: center;
}
.app--plugboard-number-input {
	width: 60%;
	height: 30px;
	border: 1px solid #000;
	display: flex;
	justify-content: center;
	padding-left: 12%;
}
 
</style>

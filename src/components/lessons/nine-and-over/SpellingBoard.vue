<template>
	<div>
		<div class="form-group form-check">
			<input 
				type="checkbox" 
				id="counting-style" 
				class="form-check-input" 
				v-model="isUsaStyle">
			<label 
				for="counting-style" 
				class="form-check-label"
			>USA style of counting</label>
		</div>
		<div style="display: flex; position: relative">
			<textarea 
				class="app--spelling-word" 
				v-model="spellingWord"
				:disabled="isDisable"
				@change="() => { $emit('setSpellingWord', spellingWord) }"
			></textarea>
			<i v-if="numberToCheck && isCorrectSpelling"
				class="fas fa-check text-success" 
				style="position: absolute; right: 0;"></i>
		</div>
	</div>
	
</template>

<script>
import converter from 'number-to-words';
export default {
	props: [
		'spellingNumber', 
		'form', 
		'isDisable', 
		'countingSet', 
		'numberToCheck',
		'spelling',
		'isCreatingNewNumber'
	],
	data: function() {
		return {
			spellingWord: null,
			isUsaStyle: false,
			// isDisable: false
		}
	},
	computed: {
		isCorrectSpelling() {
			if(!this.numberToCheck || !this.spellingWord) return false;
			return this.spellingWord.replace('-' , ' ').trim() == converter.toWords(this.numberToCheck).replace('-' , ' ').trim() ||
				this.spellingWord.replace('-' , ' ').trim() == converter.toWords(this.numberToCheck).replace('-' , ' ').replace('hundred', 'hundred and').trim();
		},
		numberToCheckSpell() {
			return converter.toWords(this.numberToCheck);
		}
	},
	watch: {
		isCreatingNewNumber(value, prevValue) {
			if(prevValue === false && value === true) {
				this.spellingWord = null;
			}
		},
		spelling(value) {
			if(value) {
				this.spellingWord = value;
			}
		},
		spellingNumber(value, prevValue) {
			if(value===null) {
				this.spellingWord = '';
				return;
			}
			let number = Number(value);
			if(number >= 0) {
				this.spellingWord = converter.toWords(number);
				if(!this.isUsaStyle) {
					this.spellingWord = this.spellingWord.replace('hundred ', 'hundred and ');
				}
			}
		},
		isUsaStyle(value) {
			if(!this.spellingWord) {
				return;
			}
			if(value === false && this.spellingWord) { 
				this.spellingWord = this.spellingWord.replace('hundred ', 'hundred and ');
			} else {
				this.spellingWord = this.spellingWord.replace('hundred and ', 'hundred ');
			}
		}
	},
	
}
</script>

<style scoped>
.app--spelling-word {
	border: 1px solid #ddd;
	min-height: 3rem;
	width: 100%;
}
</style>

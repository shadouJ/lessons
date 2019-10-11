<template>
  <div class="app--container container mt-4 mb-5">
    <h3 class="text-success text-center">Select your favourite animal</h3>
    <div class="form-check form-check-inline d-flex justify-content-center">
      <input
        class="form-check-input"
        type="radio"
        name="numberOfAnimals"
        :value="2"
        v-model="numberOfAnimals"
        id="2-animals"
      >
      <label for="2-animals" class="form-check-label mr-3">2 Animals</label>
      <input
        class="form-check-input"
        type="radio"
        name="numberOfAnimals"
        :value="3"
        v-model="numberOfAnimals"
        id="3-animals"
      >
      <label for="3-animals" class="form-check-label">3 Animals</label>
    </div>

    <div class="app--animals-table mt-3">
      <div class="app--animal-list">
        <div class="app--animal-item" v-for="(item,index) in allAnimals" :key="index">
          <h5 class="form-check form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              name="selectedAnimal"
              :id="item.animal"
              :value="item.combination.join(',')"
              v-model="selectedAnimal"
            >
            <label class="form-check-label" :for="item.animal">{{ item.animal }}</label>
          </h5>
        </div>
      </div>
    </div>
    <div class="app--action text-center mt-5">
      <button
        class="btn btn-outline-success"
        @click="handleSelectAnimal"
        :disabled="!selectedAnimal"
      >Select</button>
    </div>
    <div class="app--prompt">
      <div
        class="alert alert-danger text-center mt-2"
        style="max-width: 500px;"
      >Change the number of animals or select your favourite animal</div>
    </div>
  </div>
</template>

<script>
import { generateAnimalsParts, generateCombinations } from "./utils";

export default {
  props: ["trialNumber"],
  data: function() {
    return {
      numberOfAnimals: 3,
      allAnimals: [],
      selectedAnimal: null // The animal selected in the form of combination array
    };
  },
  computed: {
    animalsParts() {
      return generateAnimalsParts(this.numberOfAnimals);
    },
    combinations() {
      return generateCombinations(this.numberOfAnimals);
    }
  },
  watch: {
    numberOfAnimals(value, preValue) {
      if (value !== preValue) {
        this.selectedAnimal = null;
        this.generateAnimals();
      }
    }
  },
  methods: {
    generateAnimals() {
      this.allAnimals = [];
      for (let i = 0; i < this.combinations.length; i++) {
        let combination = this.combinations[i];
        let animal =
          this.animalsParts[0][this.combinations[i][0]] +
          this.animalsParts[1][this.combinations[i][1]] +
          this.animalsParts[2][this.combinations[i][2]];
        this.allAnimals.push({
          animal,
          combination
        });
      }
    },
    handleSelectAnimal() {
      const selectedAnimalData = {
        selectedAnimal: this.selectedAnimal,
        numberOfAnimals: this.numberOfAnimals
      };
      this.$emit("selectAnimal", selectedAnimalData);
    }
  },
  created() {
    this.generateAnimals();
  }
};
</script>

<style scoped>
.app--animal-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1.5rem;
}
.app--animal-item {
  display: flex;
  justify-content: space-around;
}
.app--prompt {
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div>
    <h6 class="text-success">Spelling help</h6>
    <div class="app--spelling-help">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(item, index) in sortedSpellingList"
          :key="index"
          :data-word="item"
          @click="handleSelectWord"
        >{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isDisable"],
  data: function() {
    return {
      spellingList: [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "zero",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred",
        "thousand",
        "and"
      ]
    };
  },
  computed: {
    sortedSpellingList() {
      const sorted = this.spellingList.slice().sort(function(s1, s2) {
        return s1 <= s2 ? -1 : 1;
      });
      return sorted;
    }
  },
  methods: {
    handleSelectWord(e) {
      if (this.isDisable) {
        return;
      }
      let word = e.target.getAttribute("data-word");
      // console.log(word);
      this.$emit("setSpelling", word);
    }
  }
};
</script>

<style scoped>
.app--spelling-help {
  height: 350px;
  overflow-y: scroll;
}
.app--spelling-help li {
  cursor: pointer;
}
</style>

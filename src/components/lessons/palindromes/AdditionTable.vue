<template>
  <div class="app--table-container">
    <table class="table app--table">
      <tbody v-for="k in 3" :key="k-1">
        <tr class="table-success">
          <td>{{tableData && tableData[k-1] && tableData[k-1].number }}</td>
        </tr>
        <tr class="table-success">
          <td>{{tableData && tableData[k-1] && `+ ${tableData[k-1].addition}` }}</td>
        </tr>
        <tr class="table-danger">
          <td>{{tableData && tableData[k-1] && `= ${tableData[k-1].currentNumber}` }}</td>
        </tr>
      </tbody>
      <tbody v-for="(data, index) in remainTableData" :key="index+3">
        <tr class="table-success">
          <td>{{data.number }}</td>
        </tr>
        <tr class="table-success">
          <td>+ {{data.addition }}</td>
        </tr>
        <tr class="table-danger">
          <td>= {{data.currentNumber }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["tableData"],
  computed: {
    remainTableData() {
      if (!this.tableData || this.tableData.length <= 3) {
        return [];
      } else {
        let arr = [];
        for (let i = 3; i < this.tableData.length; i++) {
          arr.push(this.tableData[i]);
        }
        return arr;
      }
    }
  }
};
</script>

<style scoped>
.app--table-container {
  max-width: 100%;
  max-height: 470px;
  overflow-y: auto;
  overflow-x: auto;
}
.app--table td {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1.5rem;
}
</style>
<template>
  <tr class="clients-table-row">
    <td> <i ref="status" class="fa-solid fa-circle"></i></td>
    <td v-for="prop in Object.entries(clientInfo).filter(p => p[0] != 'connected')" :key="prop[0]">
      {{ prop[1] }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ClientsTableRow',
  props: {
    clientInfo: Object,
  },
  watch: {
    clientInfo() {
      this.calcStatus();
    },
  },

  mounted() {
    this.calcStatus();
  },
  methods: {
    calcStatus() {
      if (this.clientInfo.connected) {
        this.$refs.status.classList.add('green');
      } else {
        this.$refs.status.classList.add('red');
      }
    },
  },
};
</script>

<style>
  .red {
    color: red;
  }

  .green {
    color: green;
  }
</style>

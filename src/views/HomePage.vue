<template>
  <div class="home">
    <h1>CFTP Server Statistics</h1>
    <ClientsTable />
  </div>
</template>

<script>
import ClientsTable from '../components/ClientsTable.vue';

export default {
  name: 'HomePage',
  components: {
    ClientsTable,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
</style>

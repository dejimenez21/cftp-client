<template>
  <table class="clients-table">
    <thead>
      <tr>
        <th>Status</th>
        <th>Address</th>
        <th>Channels</th>
        <th>Action</th>
        <th>Received</th>
        <th>Sent</th>
      </tr>
    </thead>
    <tbody>
      <ClientsTableRow v-for="client in clients" :key="client.address" :clientInfo="client" />
    </tbody>
  </table>
</template>

<script>

import ClientsTableRow from './ClientsTableRow.vue';

export default {
  name: 'ClientsTable',
  components: {
    ClientsTableRow,
  },
  data() {
    return {
      clients: [
        {
          connected: true,
          address: 'localhost:1234',
          channels: ['chn1', 'chn2'],
          action: 'Sending [test.txt] file to 192.168.1.4:7848 throuhg channel chn3...',
          received: 0,
          sent: 485,
        },
        {
          connected: false,
          address: 'localhost:1234',
          channels: ['chn3'],
          action: 'Receiving [test.txt] file from localhost:1234 through channel chn3...',
          received: 345123,
          sent: 154024457,
        },
      ],
    };
  },
};
</script>

<style>
  .clients-table {
    width: 0;
  }
</style>

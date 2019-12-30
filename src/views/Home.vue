<template>
  <div class="home-page">
    <div class="container">
      <customers-table url="users" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
    CustomersTable: () => import('@/components/AppTable'),
  },
};
</script>

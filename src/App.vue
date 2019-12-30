<template>
  <div id="app">
    <TheHeader />
    <router-view class="app"/>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/Header.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
  },
};
</script>

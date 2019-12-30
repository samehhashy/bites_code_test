<template>
  <nav class="navbar is-fixed-top">
    <div class="container d-flex-center-between">
      <div class="navbar-item navbar-start">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img class="navbar-brand__img" src="@/assets/imgs/logo.png" />
          </router-link>
        </div>
      </div>

      <div class="navbar-end navbar-item">

        <button class="button is-primary">
          Login
        </button>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

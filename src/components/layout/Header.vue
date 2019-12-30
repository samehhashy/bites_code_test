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
        <div v-if="loggedIn" class="buttons">
          <figure class="image is-48x48">
            <img
              src="@/assets/imgs/user-avatar-placeholder.png"
              class="is-rounded avatar"
            />
          </figure>
          <button @click.prevent="handleLogout" class="button is-text">
            Logout
          </button>
        </div>

        <router-link v-else :to="{ name: 'login' }">
          <button
            class="button is-primary"
            :class="{ 'is-loading': loading.logout }"
          >
            Login
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheHeader',

  data() {
    return {
      loading: { logout: false },
    };
  },

  computed: {
    ...mapGetters(['loggedIn']),
  },

  methods: {
    handleLogout() {
      this.loading = true;
      this.$store
        .dispatch('Logout')
        .then(() => {
          this.loading = false;
          this.$router.push({ name: 'login' });
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

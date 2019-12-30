<template>
  <div class="login-page">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <form @submit.prevent="handleLogin">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" v-model="form.email" />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" v-model="form.password" />
              </div>
            </div>

            <div class="buttons modal-actions">
              <button
                :disabled="submitDisabled"
                type="submit"
                class="button is-primary"
                :class="{ 'is-loading': loading }"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loading: false,
    };
  },

  computed: {
    submitDisabled() {
      return !this.form.email || !this.form.password;
    },
  },

  methods: {
    handleLogin() {
      this.loading = true;
      this.$store
        .dispatch('Login', this.form)
        .then(() => {
          this.loading = false;
          this.$router.push({ name: 'home' });
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

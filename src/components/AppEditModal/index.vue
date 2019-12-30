<template>
  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background" @click.stop="toggleAction(false)" />
      <div class="modal-card">
        <section class="modal-card-body">
          <form @submit.prevent="toggleAction(true)">
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input class="input" type="text" v-model="form.first_name" />
              </div>
            </div>

            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input class="input" type="text" v-model="form.last_name" />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" v-model="form.email" />
              </div>
            </div>

            <div class="buttons modal-actions">
              <button
                :disabled="submitDisabled"
                type="submit"
                class="button is-success"
              >
                Save
              </button>
              <button
                class="button is-danger"
                @click.prevent="toggleAction(false)"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import isEqual from "lodash/isEqual"; // eslint-disable-line

export default {
  name: 'EditModal',

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
      },
    };
  },

  computed: {
    submitDisabled() {
      return isEqual(this.item.item, this.form);
    },
  },

  watch: {
    isActive(val) {
      if (val) {
        this.initForm();
      }
    },
  },

  methods: {
    toggleAction(isEdited) {
      this.$emit('toggle', { isEdited, editedItem: this.form });
    },

    initForm() {
      this.form = { ...this.item.item };
    },
  },
};
</script>

<template>
  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click.stop="toggleAction(false)" />
      <div class="modal-card">
        <section class="modal-card-body">
          <h2>
            Are you sure that you want to delete this item?
          </h2>
          <div class="buttons modal-actions are-large">
            <button class="button is-success" @click.stop="toggleAction(true)">
              Yes
            </button>
            <button class="button is-danger" @click.stop="toggleAction(false)">
              No
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteModal',

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggleAction(action) {
      this.$emit('toggle', action);
    },
  },
};
</script>

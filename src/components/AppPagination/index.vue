<template>
  <nav
    class="pagination is-rounded is-small"
    role="navigation"
    aria-label="pagination"
  >
    <ul class="pagination-list d-flex-justify-center">
      <li v-if="hasPrevious">
        <button
          class="button is-rounded is-small pagination-previous"
          @click="handlePageChange(currPage - 1)"
          v-text="'Previous'"
        />
      </li>

      <!-- TODO limit the number of items -->

      <li v-for="page in meta.total_pages" :key="page">
        <button
          class="button pagination-link"
          :class="{ 'is-current': page === currPage }"
          v-text="page"
          @click="handlePageChange(page)"
        />
      </li>

      <li v-if="hasNext">
        <button
          @click="handlePageChange(currPage + 1)"
          class="button pagination-next is-rounded is-small"
          v-text="'Next'"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppPagination',

  props: {
    meta: {
      type: Object,
      required: true,
    },
  },

  computed: {
    currPage() {
      return this.$route.query.page ? Number(this.$route.query.page) : 1;
    },

    hasNext() {
      return this.currPage < this.meta.total_pages;
    },

    hasPrevious() {
      return this.currPage > 1;
    },
  },

  methods: {
    handlePageChange(page) {
      if (page !== this.currPage) {
        this.$router.push({ query: { page } });
      }
    },
  },
};
</script>

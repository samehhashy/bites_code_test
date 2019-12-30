<template>
  <nav
    class="pagination is-rounded is-small"
    role="navigation"
    aria-label="pagination"
  >
    <ul class="pagination-list d-flex-justify-center">
      <li>
        <button class="button is-rounded is-small">Previous</button>
      </li>

      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
      <li>
        <a
          class="pagination-link is-current"
          aria-label="Page 46"
          aria-current="page"
          >46</a
        >
      </li>
      <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>

      <li>
        <button class="button is-rounded is-small">Next</button>
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
};
</script>

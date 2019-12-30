<template>
  <div>
    <table class="table is-responsive is-hoverable">
      <thead>
        <tr>
          <th
            class="has-text-centered"
            v-for="(header, i) in tHeaders"
            :key="i"
            v-text="header"
          />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td class="has-text-centered">
            <figure class="image is-48x48 customer-avatar">
              <img :src="item.avatar" class="is-rounded" />
            </figure>
          </td>
          <td class="has-text-centered">
            {{ item.first_name + " " + item.last_name }}
          </td>
          <td class="has-text-centered">{{ item.email }}</td>
          <td class="has-text-centered">
            <div class="buttons">
              <button class="button button--icon is-info">
                <span class="icon">
                  <i>&#9998;</i>
                </span>
              </button>
              <button class="button button--icon is-danger">
                <span class="icon">
                  <i>&#10008;</i>
                </span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination :meta="meta" />
  </div>
</template>

<script>
export default {
  name: 'AppTable',

  components: {
    Pagination: () => import('@/components/AppPagination'),
  },

  props: {
    url: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      items: [],
      meta: {},
      tHeaders: ['', 'Name', 'Email', 'Action'],
    };
  },

  methods: {
    indexData() {
      this.$axios(this.url).then((res) => {
        this.items = res.data.data;
        ({
          page: this.meta.page,
          per_page: this.meta.per_page,
          total: this.meta.total,
          total_pages: this.meta.total_pages,
        } = res.data);
      });
    },
  },

  created() {
    this.indexData();
  },
};
</script>

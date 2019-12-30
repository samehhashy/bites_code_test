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
              <button
                class="button button--icon is-info"
                @click="initModal(item, i, 'edit')"
              >
                <span class="icon">
                  <i>&#9998;</i>
                </span>
              </button>
              <button
                @click="initModal(item, i, 'delete')"
                class="button button--icon is-danger"
              >
                <span class="icon">
                  <i>&#10008;</i>
                </span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <delete-modal :is-active="modal.delete" @toggle="handleDelete" />
    <edit-modal
      :is-active="modal.edit"
      :item="currentItem"
      @toggle="handleEdit"
    />

    <pagination v-if="meta.total_pages > 1" :meta="meta" />
  </div>
</template>

<script>
export default {
  name: 'AppTable',

  components: {
    Pagination: () => import('@/components/AppPagination'),
    DeleteModal: () => import('@/components/AppDeleteModal'),
    EditModal: () => import('@/components/AppEditModal'),
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
      currentItem: { item: {}, index: null },
      tHeaders: ['', 'Name', 'Email', 'Action'],
      modal: {
        delete: false,
        edit: false,
      },
    };
  },

  computed: {
    currPage() {
      return this.$route.query.page;
    },
  },

  watch: {
    currPage: {
      immediate: true,
      handler(val) {
        this.indexData(val);
      },
    },
  },

  methods: {
    indexData(page = 1) {
      this.$axios(this.url, { params: { page } }).then((res) => {
        this.items = res.data.data;
        ({
          page: this.meta.page,
          per_page: this.meta.per_page,
          total: this.meta.total,
          total_pages: this.meta.total_pages,
        } = res.data);
      });
    },

    initModal(item, itemIndex, type) {
      this.modal[type] = true;
      this.currentItem.index = itemIndex;
      this.currentItem.item = item;
    },

    handleDelete(confirmed) {
      if (confirmed) {
        this.items.splice(this.currentItem.index, 1);
      }
      this.resetModal('delete');
    },

    handleEdit({ isEdited, editedItem }) {
      if (isEdited) {
        const i = this.currentItem.index;
        this.items[i] = editedItem;
      }
      this.resetModal('edit');
    },

    resetModal(type) {
      this.modal[type] = false;
      this.currentItem = {};
    },
  },
};
</script>

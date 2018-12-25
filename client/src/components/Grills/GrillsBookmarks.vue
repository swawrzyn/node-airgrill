<template>
  <panel title="Bookmarks">
    <v-data-table
      v-if="user"
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" scope="props">
        <td class="text-xs-left">
          {{ props.item.name }}
        </td>
        <td class="text-xs-left">
          {{ props.item.description }}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex';
import BookmarksService from '@/services/BookmarksService';

export default {
  data() {
    return {
      headers: [
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Description',
          value: 'description',
        },
      ],
      pagination: {
        sortBy: 'bookmarkCreatedAt',
        descending: true,
      },
      bookmarks: [],
    };
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index({
        userId: this.user.id,
      })).data;
    }
  },
  computed:  {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
};
</script>

<style>

</style>

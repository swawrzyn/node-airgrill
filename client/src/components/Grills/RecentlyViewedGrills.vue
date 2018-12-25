<template>
  <panel title="View History">
    <v-data-table
      v-if="user"
      :headers="headers"
      :pagination.sync="pagination"
      :items="grills">
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
import GrillHistoryService from '@/services/GrillHistoryService';

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
        sortBy: 'historyCreatedAt',
        descending: true,
      },
      grills: [],
    };
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.grills = (await GrillHistoryService.index({
        userId: this.user.id,
      })).data;
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
};
</script>

<style>

</style>

<template>
  <v-layout>
    <v-flex xs8 offset-xs2>
       <panel v-if="grill" :title="this.grill.name">
        <div class="name">
          {{ grill.name }}
        </div>
        <div class="owner">
          {{ grill.owner }}
        </div>
        <div class="description">
          {{ grill.description }}
        </div>
        <div class="price">
          ${{ grill.price }}/day
        </div>
        <div class="location">
          {{ grill.location }}
        </div>
        <v-btn
          dark
          class="cyan"
          :to="{ name: 'grill-edit', params: { grillId: grill.id } }">
          Edit
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && this.bookMark"
          dark
          class="cyan"
          @click="unBookmark">
          Unbookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && !this.bookMark"
          dark
          class="cyan"
          @click="bookmark">
          Bookmark
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import GrillsService from '@/services/GrillsService';
import BookmarksService from '@/services/BookmarksService';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      grill: null,
      bookMark: null,
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
    ]),
  },
  async mounted() {
    const grillId = this.$store.state.route.params.grillId;
    const bm = (await BookmarksService.index({
      grillId,
      userId: this.$store.state.user.id,
    })).data;
    this.bookMark = bm;
    this.grill = (await GrillsService.show(grillId)).data;
  },
  components: {
  },
  methods: {
    async bookmark() {
      const grillId = this.$store.state.route.params.grillId;
      try {
        this.bookMark = (await BookmarksService.post({
          GrillId: grillId,
          UserId: this.$store.state.user.id,
        })).data;
      } catch (_) {
        // todo
      }
    },
    async unBookmark() {
      const grillId = this.$store.state.route.params.grillId;
      try {
        await BookmarksService.delete(this.bookMark.id);
        this.bookMark = null;
      } catch (_) {
        // todo
      }
    },
  },
};
</script>

<style>
.name {
  font-size: 56px;
}

.owner {
  font-size: 32px;
}

.description {
  font-size: 32px;
  font-style: italic;
}

.price {
  font-size: 20px;
}

.location {
  font-size: 20px;
}
</style>

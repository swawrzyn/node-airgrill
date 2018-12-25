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
          v-if="isUserLoggedIn && this.bookmark"
          dark
          class="cyan"
          @click="unBookmark">
          Unbookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && !this.bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Bookmark
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import GrillsService from '@/services/GrillsService';
import BookmarksService from '@/services/BookmarksService';
import GrillHistoryService from '@/services/GrillHistoryService';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      grill: null,
      bookmark: null,
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
  async mounted() {
    const grillId = this.$store.state.route.params.grillId;
    const bm = (await BookmarksService.index({
      grillId,
      userId: this.user.id,
    })).data;
    if (bm.length) {
      this.bookmark = bm[0];
    }
    this.grill = (await GrillsService.show(grillId)).data;

    if (this.isUserLoggedIn) {
      GrillHistoryService.post({
        GrillId: this.grill.id,
        UserId: this.user.id,
      });
    }
  },
  components: {
  },
  methods: {
    async setAsBookmark() {
      const grillId = this.$store.state.route.params.grillId;
      try {
        const bookmark = (await BookmarksService.post({
          GrillId: grillId,
          UserId: this.user.id,
        })).data;
        bookmark.bookmarkId = bookmark.id;
        this.bookmark = bookmark;
      } catch (_) {
        // todo
      }
    },
    async unBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.bookmarkId);
        this.bookmark = null;
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

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
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import GrillsService from '@/services/GrillsService';
import Panel from '@/components/Panel';

export default {
  data() {
    return {
      grill: null,
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.grillId;
    this.grill = (await GrillsService.show(songId)).data;
  },
  components: {
    Panel,
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

<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title='Grills'>
        <div v-for="grill in grills"
          class="grill"
          :key="grill.id">

          <v-layout>
            <v-flex xs6>
              <div class="grill-name">
                {{grill.name}}
              </div>
              <div class="grill-description">
                {{grill.description}}
              </div>
              <div class="grill-price">
                {{grill.price}}
              </div>
              <v-btn
                dark
                class="cyan"
                :to="{ name: 'grill', params: { grillId: grill.id } }"
                >View</v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="grill-image" :src="grill.imageUrl" />
            </v-flex>
          </v-layout>
        </div>
        <v-btn
          round
          small
          absolute
          right
          middle
          light
          slot="action"
          to="/grills/create"
          class="white">
          <v-icon>add</v-icon>
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import GrillsService from '@/services/GrillsService';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      grills: null,
    };
  },
  async mounted() {
    // request to backend all grills
    this.grills = (await GrillsService.index()).data;
  },
};
</script>

<style>
.grill {
  padding: 20px;
  height: 330px;
  overflow: hidden;

}
.grill-name {
  font-size: 30px;
  font-weight: bold;
}
.grill-description {
  font-size: 20px;
  font-style: italic;
}

.grill-price {
  font-size: 18px;
}
.grill-image {
  width: 100px;
  margin: 0 auto;
}
</style>

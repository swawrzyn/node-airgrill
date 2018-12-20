<template>
  <v-layout>
    <v-flex xs8 offset-xs2>
      <panel title="Grill Details">
    <v-text-field
      label="name"
      required
      :rules="[required]"
      v-model="grill.name"></v-text-field>
    <v-textarea
      label="description"
      required
      :rules="[required]"
      v-model="grill.description"></v-textarea>
    <v-text-field
      required
      label="Image URL"
      :rules="[required]"
      v-model="grill.imageUrl"></v-text-field>
    <v-text-field
      required
      label="price"
      :rules="[required]"
      v-model="grill.price"></v-text-field>
    <v-text-field
      required
      label="location"
      :rules="[required]"
      v-model="grill.location"></v-text-field>

    <v-alert
        class="ml-4"
        :value="error"
        transition="scale-transition"
        error>
        {{error}}
    </v-alert>

    <v-btn
      dark
      class="cyan"
      @click="create">
      Create Grill
    </v-btn>

  </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import GrillsService from '@/services/GrillsService';

export default {
  data() {
    return {
      grill: {
        name: null,
        description: null,
        owner: 1,
        imageUrl: null,
        price: null,
        location: null,
      },
      required: value => !!value || 'Required',
      error: null,
    };
  },
  methods: {
    async create() {
      this.error = null;
      const areAllFieldsFilledIn = Object
        .keys(this.grill)
        .every(key => !!this.grill[key]);
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields';
        return;
      }
      try {
        const returnedGrill = await GrillsService.post(this.grill);
        this.$router.push({
          name: 'grill',
          params: { grillId: returnedGrill.id },
        });
      } catch (_) {
        // todo
      }
    },
  },
  components: {
    Panel,
  },
};
</script>

<style>
.danger-alert {
  color: red;
}
</style>

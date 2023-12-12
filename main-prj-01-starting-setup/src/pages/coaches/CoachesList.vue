<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: { CoachItem, CoachFilter },
  computed: {

    isCoach(){
        return this.$store.getters['coaches/isCoach']
    },
    filteredCoaches() {
      
      const coaches = this.$store.getters['coaches/coaches'];
      console.log(this.activeFilters);
      console.log(coaches);
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;

        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<template>
  <div>
    <coach-filter @change-filter="setFilters"></coach-filter>
    <base-card>
      <section>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/register" v-if="!isCoach"> Register to Coach </base-button>
        </div>
        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h1 v-else>No Found</h1>
      </section>
    </base-card>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

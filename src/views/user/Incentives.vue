<template>
  <div class="">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Claim Incentives</h4>
          </div>
        </div>
      </div>
    </div>
    <br />
    <template v-if="loading">
      <div class="alert alert-info">Please wait</div>
    </template>
    <template v-else>
      <template v-if="incentives_claim_statuses.length > 0">
        <div class="row">
          <template v-for="(ele, i) in incentives_claim_statuses">
            <Incentive
              :level="ele.incentive"
              :claim_status="ele.status"
              :key="i"
            ></Incentive>
          </template>
        </div>
      </template>
      <template v-else>
        <div class="alert alert-info">There are no incentives</div>
      </template>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import Incentive from "../../components/Incentive";
export default {
  name: "Incentives",
  components: { Incentive },
  data() {
    return {};
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      processing: state => state.processing
    }),
    ...mapGetters(["user"]),
    ...mapGetters("userStore", ["incentiveClaimStatuses"]),

    incentives_claim_statuses: function() {
      if (this.incentiveClaimStatuses.length > 0) {
        return this.incentiveClaimStatuses.filter(val => {
          return val.level.id > 0;
        });
      }
      return [];
    }
  },
  created() {
    if (Object.keys(this.incentiveClaimStatuses).length === 0) {
      this.claimStatuses();
    }
  },

  methods: {
    ...mapActions("userStore", { claimStatuses: "incentiveClaimStatuses" })
  }
};
</script>

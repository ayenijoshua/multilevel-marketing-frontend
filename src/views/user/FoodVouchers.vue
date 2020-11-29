<template>
  <div class="">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Claim Food Vouhers</h4>
          </div>
        </div>
      </div>
    </div>
    <br />
    <template v-if="filtered_statuses.length > 0">
      <div class="row">
        <template v-for="(ele, i) in filtered_statuses">
          <FoodVoucher
            :level="ele.level"
            :claim_status="ele.status"
            :levels="levels"
            :key="i"
          ></FoodVoucher>
        </template>
      </div>
    </template>
    <template v-else>
      <div class="alert alert-info">....please wait</div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import FoodVoucher from "../../components/FoodVoucher";
export default {
  name: "FoodVouchers",
  components: { FoodVoucher },
  data: function() {
    return {
      // selected: "",
      // form: {
      //   claim_type: "",
      //   level_id: null
      // }
    };
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      processing: state => state.processing
    }),
    ...mapGetters(["user"]),
    ...mapGetters("userStore", ["levels", "voucherClaimStatuses"]),
    filtered_levels: function() {
      if (this.levels.length > 0) {
        return this.levels.filter(val => {
          return val.id > 0;
        });
      }
      return [];
    },
    filtered_statuses: function() {
      if (this.voucherClaimStatuses.length > 0) {
        return this.voucherClaimStatuses.filter(val => {
          return val.level.id > 0;
        });
      }
      return [];
    }
  },

  mounted() {
    if (Object.keys(this.levels).length === 0) {
      this.getLevels();
    }

    if (Object.keys(this.voucherClaimStatuses).length === 0) {
      //get user claim status for eaxh level\
      //this.multipleClaimStatus(this.levels.length);
      this.multipleClaimStatus();
    }
  },

  created() {},

  methods: {
    ...mapActions("userStore", {
      getLevels: "levels",
      //claim: "claimVoucher",
      claimStatus: "foodVoucherClaimStatus",
      multipleClaimStatus: "foodVoucherClaimStatuses"
    }),


    // claimVoucher(level_id) {
    //   this.form.level_id = level_id;
    //   this.claim(this.form);
    // },

    // checkStatus(level_id) {
    //   var statuses = this.voucherClaimStatuses;
    //   if (statuses.length > 0) {
    //     var claim = statuses.find({ level_id: level_id });
    //     return claim.status;
    //   }
    //   return null;
    // }
    //console.log(claim);

    //claimStatus(level_id);
  }
};
</script>

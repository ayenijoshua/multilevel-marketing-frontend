<template>
  <div class="col-md-4" style="margin-bottom:5px;">
    <div class="card no-b" v-if="level.food_stuff_bonus">
      <div class="card-header bg-white">
        <h4 class="blue-text">
          <strong class="font-weight-bold">Stage {{ level.id }}</strong>
        </h4>
        <small>Choose an option to spend your voucher bonus</small>
      </div>
      <div class="collapse show" id="invoiceCard" v-if="!claim_status">
        <div class="col-md-4">
          <div class="card-body p-0">
            <img src="../assets/img/choose.png" />
          </div>
          <h5 class="font-weight-bold">&#8358;{{ level.food_stuff_bonus }}</h5>
        </div>
        <div class="card-body">
          <form
            method="POST"
            action="/user/claimLevelFoodstuffBonus"
            @submit.prevent=""
          >
            <div class="form-row">
              <div class="col-md-12 mb-3">
                <select v-model="form.claim_type" class="custom-select select2">
                  <option value="">Claim Option</option>
                  <option value="shop">Shoprite Voucher</option>
                  <option value="cash">Cash</option> </select
                ><br /><br />

                <button
                  class="btn btn-primary btn-sm m-0"
                  type="submit"
                  v-if="user.level_id > level.id"
                  @click="claimVoucher(level.id)"
                >
                  Claim Vouchar
                </button>

                <span
                  class="alert alert-primary"
                  v-else-if="user.level_id == level.id"
                >
                  You need to complete Level {{ level.id }} To Claim
                </span>

                <span class="alert alert-primary" v-else>
                  You need to get to Level {{ level.id }} To Claim
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="alert alert-success"
        v-else-if="claim_status == 'approved'"
      >
        You have claimed your Food voucher for this stage
      </div>
      <div
        class="alert alert-warning"
        v-else-if="claim_status == 'pending'"
      >
        Your Food voucher Claim is in Process
      </div>
    </div>

    <div class="card no-b" v-else>
      <div class="card-header bg-white">
        <h4 class="blue-text">
          <strong class="font-weight-bold">Stage {{ level.id }}</strong>
        </h4>
        <div class="alert alert-danger">
          There are no food vouchers for
          <strong>Stage {{ level.id }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "FoodVoucher",
  props: {
    level: Object,
    levels: Array,
    claim_status: String
  },
  data() {
    return {
      
      form: {
        claim_type: "",
        level_id: null
      }
    };
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      processing: state => state.processing
    }),

    ...mapGetters(["user"]),
    ...mapGetters("userStore", ["voucherClaimStatuses"])
  },

  created() {
    // if (Object.keys(this.levels).length === 0) {
    //   this.getLevels();
    // }
    // if(!this.voucherClaimStatuses.find({level_id: this.level.id})){
    //     this.claimStatus(level.id);
    // }
    // if (Object.keys(this.voucherClaimStatuses).length === 0) {
    //   //get user claim status for eaxh level
    //   for (var i = 1; i <= this.levels.length+1; i++) {
    //     this.claimStatus(i);
    //   }
    // }
    //console.log(this.level.id);
    //this.claim_status = this.checkStatus(this.level.id);
    
  },

  methods: {
    ...mapActions("userStore", {
      //getLevels: "levels",
      claim: "claimVoucher",
      //claimStatus: "foodVoucherClaimStatus",
      //multipleClaimStatus: "multipleFoodVoucherClaimStatus"
    }),

    claimVoucher(level_id) {
      this.form.level_id = level_id;
      this.claim(this.form);
    },

    // checkStatus(level_id) {
    //   var statuses = this.voucherClaimStatuses;
    //   console.log(statuses.length);
    //     //var self = this;
    //   if (statuses.length > 0) {
    //      return statuses.find(ele=>ele.level_id===level_id);
    //     //   for(const ele of statuses){
    //     //       if(ele.level_id == level_id){
    //     //           console.log(ele.status);
    //     //           return ele.status;
    //     //       }else{
    //     //            console.log(ele.level_id);
    //     //           return null;
    //     //       }
    //     //   }
    //   }
    //    console.log('none')
    //   return null;
    // }
    //console.log(claim);

    //claimStatus(level_id);
  }
};
</script>

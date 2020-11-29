<template>
  <div class="col-md-6 mb-3">
    <div class="card ">
      <div class="card-header bg-white">
        <h4 class="blue-text">
          <strong class="font-weight-bold">
            Stage {{ incentive.level_id }}
          </strong>
        </h4>
      </div>

      <div class="card-body">
        <div v-if="!claim_status" class="row p-3">
          <div class="col-md-6">
            <img
              class="gift"
              :src="`${process.env.API_URL}` + incentive.img_name"
            />
          </div>
          <div class="col-md-6">
            <div class="card-body p-3">
              <h6>Cash Equivalent</h6>
              <div class="my-3">
                <div>
                  <small>₦{{ incentive.value }}</small>
                </div>
              </div>
              <hr />
              <h6>Description</h6>
              <div class="my-3">
                <div>
                  <small>{{ incentive.description }}</small>
                </div>
              </div>
              <hr />
              <h6>Incentives</h6>
              <div class="my-3">
                <div>
                  <small>{{ incentive.title }}</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <a
              v-if="user.level_id > icentive.level_id"
              id="claimLevelIncentives"
              class="btn btn-sm btn-primary"
              >Claim</a
            >

            <a
              v-else-if="user.level_id == incentive.level_id"
              class="alert alert-info"
              >You need to complete Level {{ incentive.level_id }} To Claim</a
            >

            <a v-else class="alert alert-info"
              >You need to get to Level {{ incentive.level_id }} To Claim</a
            >
          </div>
        </div>
        <div v-if="claim_status == 'approved'" class="alert alert-success">
          You have claimed your Incentives for this stage
        </div>
        <div v-else-if="claim_status == 'pending'" class="alert alert-warning">
          Your Incentive Claim is in Process
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Incentive",
  props: {
    incentive: Object,
    claim_status: String
  },
  data() {
    return {};
  }
};
</script>

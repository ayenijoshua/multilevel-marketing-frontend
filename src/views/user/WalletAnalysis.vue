<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Wallet Analysis</h4>
          </div>
        </div>
      </div>
    </div>
    <br />

    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-hovered">
              <thead>
                <tr>
                  <th>S/n</th>
                  <th>Level</th>
                  <th>Downline Bonus (DB)</th>
                  <th>No of downlines (ND)</th>
                  <th>Level Downline Bonus LDB (DB x ND)</th>
                  <th>Level completion Bonus(CB)</th>
                  <th>Level Total Bonus TB (LDB + CB)</th>
                  <th>Withdrawals (W)</th>
                  <th>Level Net Bonus (TB - W)</th>
                  <!-- <th>Food vouchar Status</th>
                    <th>Incentive Status</th> -->
                </tr>
              </thead>
              <tbody v-if="!loading">
                <tr
                  v-for="(analysis, i) in walletAnalysis"
                  :key="analysis.level_name"
                >
                  <td>{{ ++i }}</td>
                  <td>{{ analysis.level_name }}</td>
                  <td>{{ analysis.downline_bonus }}</td>
                  <td>{{ analysis.num_of_downlines }}</td>
                  <td>₦{{ analysis.level_downline_bonus }}</td>
                  <td>₦{{ analysis.level_completion_bonus }}</td>
                  <td>₦{{ analysis.level_total_bonus }}</td>
                  <td>₦{{ analysis.withdrawals }}</td>
                  <td>₦{{ analysis.level_net_bonus }}</td>
                </tr>
                <tr>
                  <th colspan="8">Total net bonus</th>
                  <td>₦{{ walletSummary.wallet_balance }}</td>
                </tr>
              </tbody>
              <template v-else>
                <tr>
                  <td colspan="8">
                    <div class="alert alert-info">...Please wait</div>
                  </td>
                </tr>
              </template>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "wallet-Analysis",
  data() {
    return {
     incr: 1
    };
  },

  computed: {
    ...mapState({
      loading: state => state.loading
      //user: state => state.authUser
    }),
    ...mapGetters("userStore", ["walletAnalysis", "walletSummary"]),
     
  },

  created() {
    if (Object.keys(this.walletAnalysis).length === 0) {
      this.getWalletAnalysis();
    }
    if (Object.keys(this.walletSummary).length === 0) {
      this.getWalletSummary();
    }
  },

  methods: {
    ...mapActions("userStore", {
      getWalletAnalysis: "walletAnalysis",
      getWalletSummary: "walletSummary"
    }),

    increment() {
         return (this.incr = Number(this.incr) + 1);
    }
  }
};
</script>

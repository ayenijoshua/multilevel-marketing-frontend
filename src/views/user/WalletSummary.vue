<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Wallet Summary</h4>
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
                  <th>Welcome Bonus (WB)</th>
                  <th>Total Referal Bonus (TRB)</th>
                  <th>Total Level Downline Bonus (TLDB)</th>
                  <th>Total Level Completion Bonus (TCB)</th>
                  <th>Total Pin Purchase (TPP)</th>
                  <th>Total Bonus (TB=WB+TLDB+TCB+TRB)</th>
                  <th>Total withdrawals (TW)</th>
                  <th>Wallet balance (TB-TW-TPP)</th>
                </tr>
              </thead>
              <tbody v-if="!loading">
                <tr>
                  <td>₦{{ walletSummary.welcome_bonus }}</td>
                  <td>₦{{ walletSummary.total_referral_bonus }}</td>
                  <td>₦{{ walletSummary.total_matrix_bonus }}</td>
                  <td>₦{{ walletSummary.total_completion_bonus }}</td>
                  <td>₦{{ walletSummary.total_pin_purchase }}</td>
                  <td>₦{{ walletSummary.total_bonus }}</td>
                  <td>₦{{ walletSummary.total_withdrawals }}</td>
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
  name: "WalletSummary",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      loading: state => state.loading
      //user: state => state.authUser
    }),
    ...mapGetters("userStore", ["walletSummary"])
  },

  created() {
    if (Object.keys(this.walletSummary).length === 0) {
      this.getWalletSummary();
    }
  },

  methods: {
    ...mapActions("userStore", { getWalletSummary: "walletSummary" })
  }
};
</script>

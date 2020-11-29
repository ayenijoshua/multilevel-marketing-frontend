<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Withdrawal Request</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card no-b">
          <div class="card-header bg-white text-primary ">
            <h4 class="card-title font-weight-bold">REQUEST FOR CASH</h4>
            <small class="card-subtitle mb-2">Cash Request</small>
          </div>
          <br />

          <div class="collapse show text-center" id="invoiceCard">
            <div class="col-md-12">
              <div class="card-body p-0">
                <img src="../../assets/img/cashout.png" />
              </div>
            </div>
            <div class="card-body p-">
              <form
                class="form-horizontal form-materia"
                id="cash-req-form"
                method="POST"
                @submit.prevent
              >
                <div class="form-group">
                  <div class="col-md-12">
                    <template v-if="withdrawalStatus == 'pending'">
                      <span class="alert alert-info">
                        Your cash request is in process
                      </span>
                    </template>
                    <template v-else>
                      <input
                        type="text"
                        name="amount"
                        v-model="form.amount"
                        class="form-control form-control-line"
                        placeholder="Enter amount"
                      />
                      <div class="form-group">
                        <br />
                        <div class="col-sm-12">
                          <button
                            @click="withdraw()"
                            type="submit"
                            class="btn btn-sm btn-primary"
                            id="cash-req"
                          >
                            Cash request
                          </button>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card no-b">
          <div class="card-header bg-white text-primary ">
            <h4 class="card-title font-weight-bold ">NOTIFICATION</h4>
            <small class="card-subtitle mb-2">Payout Periods</small>
          </div>
          <br />
          <div class="collapse show text-center" id="invoiceCard">
            <div class="col-md-12">
              <div class="card-body p-0">
                <img src="../../assets/img/notify2.png" />
              </div>
            </div>
            <div class="card-body p-">
              <p class="font-weight-bold">
                <br />
                We honour withdrawals 2 times in a month.<br />
                Minimum Withdrawal is ₦2000. Thank You.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card no-b">
          <div class="card-header bg-white text-primary ">
            <h4 class="card-title font-weight-bold">WALLET</h4>
            <small class="card-subtitle mb-2">Your Current Balance</small>
          </div>
          <br />
          <div class="collapse show text-center" id="invoiceCard">
            <div class="col-md-12">
              <div class="card-body p-0">
                <img src="../../assets/img/wallet2.png" />
              </div>
            </div>
            <div class="card-body p-">
              <p>Your Current Wallet Account</p>
              <h1 class="font-weight-bold">
                ₦{{ walletSummary.wallet_balance }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "WithdrawalRequest",
  data() {
    return {
      form: {
        amount: 0,
        level_id: null
      }
    };
  },

  computed: {
    ...mapState({
      loading: state => state.loading
      //user: state => state.authUser
    }),

    ...mapGetters(["user"]),

    ...mapGetters("userStore", ["withdrawalStatus", "walletSummary"])
  },

  created() {
    if (!this.withdrawalStatus) {
      this.getWithdrawalStatus();
    }
    if (Object.keys(this.walletSummary).length === 0) {
      this.getWalletSummary();
    }
  },

  methods: {
    ...mapActions("userStore", {
      getWithdrawalStatus: "withdrawalStatus",
      cashRequest: "withdrawalRequest",
      getWalletSummary: "walletSummary"
    }),
    withdraw() {
      this.form.level_id = this.user.level_id;
      this.cashRequest(this.form);
    }
  }
};
</script>

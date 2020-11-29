<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Withdrawal history</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <div class="table-responsive">
                <table class="table table-bordered table-hovered">
                  <thead>
                    <tr>
                      <th>S/n</th>
                      <th>Amount</th>
                      <th>Level</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="!loading">
                      <template v-if="withdrawalHistory.length > 0">
                        <tr
                          v-for="withdrawal in withdrawalHistory"
                          :key="withdrawal.id"
                        >
                          <td>{{ 1 }}</td>
                          <td>₦{{ withdrawal.amount }}</td>
                          <td>{{ withdrawal.level_id }}</td>
                          <td>{{ withdrawal.created_at }}</td>
                        </tr>
                        <tr>
                          <th></th>
                          <th>Total withdrawals (TW)</th>
                          <td colspan="2">₦{{ totalWithdrawals }}</td>
                        </tr>
                      </template>
                      <template v-else>
                        <tr>
                          <td colspan="4">
                            <div class="alert alert-info text-center">
                              There are no withdrawals
                            </div>
                          </td>
                        </tr>
                      </template>
                    </template>
                    <template v-else>
                      <tr>
                        <td colspan="4">
                          <div class="alert alert-success text-center">
                            ...please wait
                          </div>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
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
  name: "withdrawal-history",
  data() {
    return {};
  },

  computed: {
    ...mapState({
      loading: state => state.loading
      //user: state => state.authUser
    }),

    ...mapGetters("userStore", ["withdrawalHistory", "totalWithdrawals"])
  },

  created() {
    if (Object.keys(this.withdrawalHistory).length === 0) {
      this.getWithdrawalHistory();
    }
    //Array.keys()
  },

  methods: {
    ...mapActions("userStore", { getWithdrawalHistory: "withdrawalHistory" })
  }
};
</script>

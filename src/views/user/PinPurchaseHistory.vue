<template>
  <div>
    <div class="row mb-3">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Pin Purchase History</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-hovered">
              <thead>
                <tr>
                  <th>S/n</th>
                  <th>Units</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody v-if="!loading">
                <tr v-for="(pin, i) in pinPurchaseHistory" :key="pin.id">
                  <td>{{ ++i }}</td>
                  <td>{{ pin.units }}</td>
                  <td>₦{{ pin.amount }}</td>
                </tr>
                <tr></tr>
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
  name: "PinPurchaseHistory",
  data() {
    return {};
  },

  computed: {
    ...mapState({
      loading: state => state.loading
      //user: state => state.authUser
    }),
    ...mapGetters("userStore", ["pinPurchaseHistory"])
  },

  created() {
    if (Object.keys(this.pinPurchaseHistory).length === 0) {
      this.getPinPurchaseHistory();
    }
  },

  methods: {
    ...mapActions("userStore", { getPinPurchaseHistory: "pinPurchaseHistory" })
  }
};
</script>

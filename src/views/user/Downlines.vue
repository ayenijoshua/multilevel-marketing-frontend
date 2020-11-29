<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card no-b">
        <div class="card-header bg-white text-primary ">
          <h4 class="card-title text-primary">
            <strong class="font-weight-bold">DOWNLINES</strong>
          </h4>
          <small class="card-subtitle mb-2">Your direct downlines</small>
        </div>
        <div class="collapse show" id="invoiceCard">
          <div class="card-body p-">
            <div class="table-responsive">
              <template v-if="downlines.length > 0">
                <table
                  id="recent-orders"
                  class="table table-hover table-bordered mb-0 ps-container ps-theme-default"
                >
                  <thead class="bg-light">
                    <tr>
                      <th>s/n</th>
                      <th>Full name</th>
                      <th>Username</th>
                      <th>Level</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="(downline, i) in downlines">
                      <tr :key="downline.id">
                        <td>{{ i++ }}</td>
                        <td>{{ downline.full_name }}</td>
                        <td>{{ downline.username }}</td>
                        <td>{{ downline.level_id }}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </template>
              <template v-else>
                <div class="alert alert-info">There are no downlines</div>
              </template>
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
  name: "downlines",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    }),

    ...mapGetters("userStore", ["downlines"])
  },

  created() {
    if (Object.keys(this.downlines).length === 0) {
      this.getDownlines();
    }
  },

  methods: {
    ...mapActions("userStore", { getDownlines: "downlines" })
  }
};
</script>

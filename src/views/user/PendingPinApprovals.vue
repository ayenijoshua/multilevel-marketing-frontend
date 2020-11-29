<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="text-primary">Pending Pin Approvals</h4>
          </div>
        </div>
      </div>
    </div>
    <br />

    <div class="row">
      <div class="col-md-12">
        <div class="card no-b">
          <div class="collapse show" id="invoiceCard">
            <div class="card-body p-">
              <div class="table-responsie" style="overflow:unset !important;">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th style="border:1px !important;">S/n</th>
                      <th>Full name</th>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Date Of reg.</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <template v-if="!loading">
                      <template v-if="pendingPinApprovals.length > 0">
                        <tr
                          v-for="(reg, i) in pendingPinApprovals"
                          :key="reg.id"
                        >
                          <td>{{ ++i }}</td>
                          <td>{{ reg.buyer.full_name }}</td>
                          <td>{{ reg.buyer.email }}</td>
                          <td>{{ reg.buyer.username }}</td>
                          <td>{{ reg.created_at }}</td>
                          <td>
                            <div class="dropdown">
                              <button
                                class="btn btn-sm btn-info dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="caret"></i>
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                                style="position:relative"
                              >
                                <a
                                  href="`/user/approvePinRegistration/${reg.id}`"
                                  class="dropdown-item"
                                  >Approve</a
                                >
                                <a
                                  href=" `/user/disapprovePinRegistration/${reg.id}` "
                                  class="dropdown-item"
                                  >Disapprove</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                      </template>

                      <template v-else>
                        <tr>
                          <td colspan="6">
                            <div class="alert alert-info">
                              There are no Pin Registrations
                            </div>
                          </td>
                        </tr>
                      </template>
                    </template>
                    <template v-else>
                      <tr>
                        <td colspan="6">
                          <div class="alert alert-info">... Pease wait</div>
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
  name: "PendingPinApprovals",
  data() {
    return {};
  },

  computed: {
    ...mapState({
      loading: state => state.loading
      //user: state => state.authUser
    }),
    ...mapGetters("userStore", ["pendingPinApprovals"])
  },

  created() {
    if (Object.keys(this.pendingPinApprovals).length === 0) {
      this.getPendingPinApprovals();
    }
  },

  methods: {
    ...mapActions("userStore", {
      getPendingPinApprovals: "pendingPinApprovals"
    })
  }
};
</script>

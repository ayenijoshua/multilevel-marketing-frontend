<template>
  <div>
    <div class="row row-eq-height my-3">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div><i class="icon-timer s-18"></i></div>
                  <div>
                    <span class="badge badge-pill badge-primary">4:30</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">Active</div>
                  Status
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div><i class="icon-user-circle-o s-18"></i></div>
                  <div>
                    <span class="badge badge-pill badge-danger"></span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">
                    {{ user.level_id }}
                  </div>
                  Level
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div><i class="icon-package s-18"></i></div>
                  <div><span class="text-success">40+35</span></div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">
                    {{ dashboardData.wallet }}
                  </div>
                  Wallet
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div><i class="icon-user-times s-18"></i></div>
                  <div><span class="text-danger">50</span></div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">95</div>
                  Pins
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div><i class="icon-package s-18"></i></div>
                  <div><span class="text-success">40+35</span></div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">35</div>
                  Referents
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div><i class="icon-user-times s-18"></i></div>
                  <div><span class="text-danger">50</span></div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">95</div>
                  Referral Bonus
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div><i class="icon-timer s-18"></i></div>
                  <div>
                    <span class="badge badge-pill badge-primary">4:30</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">68</div>
                  Pin Purchased
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card no-b mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div><i class="icon-user-circle-o s-18"></i></div>
                  <div>
                    <span class="badge badge-pill badge-danger">4:30</span>
                  </div>
                </div>
                <div class="text-center">
                  <div class="s-48 my-3 font-weight-lighter">170</div>
                  Withdrawals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card no-b p-2">
          <div class="card-body">
            <div class="card-body">
              <div style="height: 300px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card no-b">
      <div class="card-body">
        <div class="row my-3 no-gutters">
          <div class="col-md-3">
            <h1>Tasks</h1>
            Currently assigned tasks to team.
          </div>
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-3">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="mb-3">
                    <h6>New Layout</h6>
                    <small>75% Completed</small>
                  </div>
                  <figure class="avatar">
                    <img src="assets/img/dummy/u12.png" alt="" />
                  </figure>
                </div>
                <div class="progress progress-xs mb-3">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 75%;"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="mb-3">
                    <h6>New Layout</h6>
                    <small>75% Completed</small>
                  </div>
                  <figure class="avatar">
                    <img src="assets/img/dummy/u2.png" alt="" />
                  </figure>
                </div>
                <div class="progress progress-xs mb-3">
                  <div
                    class="progress-bar bg-indigo"
                    role="progressbar"
                    style="width: 75%;"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="mb-3">
                    <h6>New Layout</h6>
                    <small>75% Completed</small>
                  </div>
                  <div class="avatar-group">
                    <figure class="avatar">
                      <img src="assets/img/dummy/u4.png" alt="" />
                    </figure>
                    <figure class="avatar">
                      <img src="assets/img/dummy/u11.png" alt="" />
                    </figure>
                    <figure class="avatar">
                      <img src="assets/img/dummy/u1.png" alt="" />
                    </figure>
                  </div>
                </div>
                <div class="progress progress-xs mb-3">
                  <div
                    class="progress-bar yellow"
                    role="progressbar"
                    style="width: 75%;"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="mb-3">
                    <h6>New Layout</h6>
                    <small>75% Completed</small>
                  </div>
                  <figure class="avatar">
                    <img src="assets/img/dummy/u5.png" alt="" />
                  </figure>
                </div>
                <div class="progress progress-xs mb-3">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 75%;"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-deck my-3 pt-3">
      <div class="card b-0">
        <div class="card-body p-5">
          <canvas id="shadowChart" style="height: 450px"></canvas>
        </div>
      </div>
      <div class="card no-b">
        <div class="card-body">
          <table class="table table-hover earning-box">
            <tbody>
              <tr class="no-b">
                <td class="w-10">
                  <a href="panel-page-profile.html" class="avatar avatar-lg">
                    <img src="assets/img/dummy/u6.png" alt="" />
                  </a>
                </td>
                <td>
                  <h6>Sara Kamzoon</h6>
                  <small class="text-muted">Marketing Manager</small>
                </td>
                <td>25</td>
                <td>$250</td>
              </tr>
              <tr>
                <td class="w-10">
                  <a href="panel-page-profile.html" class="avatar avatar-lg">
                    <img src="assets/img/dummy/u7.png" alt="" />
                  </a>
                </td>
                <td>
                  <h6>Sara Kamzoon</h6>
                  <small class="text-muted">Marketing Manager</small>
                </td>
                <td>25</td>
                <td>$250</td>
              </tr>
              <tr>
                <td class="w-10">
                  <a href="panel-page-profile.html" class="avatar avatar-lg">
                    <img src="assets/img/dummy/u9.png" alt="" />
                  </a>
                </td>
                <td>
                  <h6>Sara Kamzoon</h6>
                  <small class="text-muted">Marketing Manager</small>
                </td>
                <td>25</td>
                <td>$250</td>
              </tr>
              <tr>
                <td class="w-10">
                  <a href="panel-page-profile.html" class="avatar avatar-lg">
                    <img src="assets/img/dummy/u11.png" alt="" />
                  </a>
                </td>
                <td>
                  <h6>Sara Kamzoon</h6>
                  <small class="text-muted">Marketing Manager</small>
                </td>
                <td>25</td>
                <td>$250</td>
              </tr>
              <tr>
                <td class="w-10">
                  <a href="panel-page-profile.html" class="avatar avatar-lg">
                    <img src="assets/img/dummy/u12.png" alt="" />
                  </a>
                </td>
                <td>
                  <h6>Sara Kamzoon</h6>
                  <small class="text-muted">Marketing Manager</small>
                </td>
                <td>25</td>
                <td>$250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
//import api from "../../api/user-api";
export default {
  name: "UserDashboard",
  data: () => ({
    wallet: 0,
    withdrals: 0
  }),

  computed: {
    ...mapState({
      loading: state => state.loading
      //user: state => state.authUser
    }),

    ...mapGetters(["user"]),

    ...mapGetters("userStore", ["dashboardData"])
  },

  created() {
    if (Object.keys(this.dashboardData).length === 0) {
      this.basicData();
    }
    //this.user = this.authUser;
  },

  methods: {
    ...mapActions("userStore", {
      basicData: "dashboardData"
    })
  }
};
</script>

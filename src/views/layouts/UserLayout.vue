<template>
  <div>
    <div
      class="navbar navbar-expand d-flex navbar-dark justify-content-between bd-navbar blue accent-3 shadow"
    >
      <div class="relative">
        <div class="d-flex">
          <a v-b-toggle.sidebar-1 class="paper-nav-toggle pp-nav-toggle">
            <i></i>
          </a>
          <b-sidebar
            id="sidebar-1"
            class="shadow"
            bg-variant="white"
            z-index="99999"
            backdrop
            shadow="lg"
            width="250px"
          >
            <div class="">
              <section class="sidebar">
                <div class="w-80px mt-3 mb-3 ml-3">
                  <img src="../../assets/img/basic/logo.png" alt="" />
                </div>
                <div class="relative">
                  <a v-b-toggle.collapse-settings
                    class="btn-fab btn-fab-sm absolute fab-right-bottom fab-top btn-primary shadow1 "
                  >
                    <i class="icon icon-cogs"></i>
                  </a>
                  <div class="user-panel p-3 light mb-2">
                    <div>
                      <div class="float-left image">
                        <img
                          class="user_avatar"
                          src="../../assets/img/dummy/u8.png"
                          alt="User Image"
                        />
                      </div>
                      <div class="float-left info">
                        <h6 class="font-weight-light mt-2 mb-1">
                          Alexander Pierce
                        </h6>
                        <a href="#"
                          ><i class="icon-circle text-primary blink"></i>
                          Online</a
                        >
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <b-collapse id="collapse-settings"
                      class="collapse multi-collapse"
                    >
                    
                      <div class="list-group mt-3 shadow">
                        <a
                          href="index.html"
                          class="list-group-item list-group-item-action "
                        >
                          <i class="mr-2 icon-umbrella text-blue"></i>Profile
                        </a>
                        <a
                          href="#"
                          class="list-group-item list-group-item-action"
                          ><i class="mr-2 icon-cogs text-yellow"></i>Settings</a
                        >
                        <a
                          href="#"
                          class="list-group-item list-group-item-action"
                          ><i class="mr-2 icon-security text-purple"></i>Change
                          Password</a
                        >
                      </div>
                    
                    </b-collapse>
                  </div>
                </div>
                <ul class="sidebar-menu">
                  <li class="treeview active">
                    <router-link :to="{ name: 'user-dashboard' }">
                      <i class="icon icon-barometer2 blue-text s-18"></i
                      ><span class="blue-text">Dashboard</span>
                    </router-link>
                  </li>
                  <li class="treeview">
                    <router-link :to="{ name: 'user-profile' }">
                      <i class="icon icon-vcard blue-text s-18"></i>
                      <span class="blue-text">Profile</span>
                    </router-link>
                  </li>
                  <li class="treeview @yield('downlines-active')">
                    <router-link :to="{ name: 'downlines' }"
                      ><i class="icon icon-people blue-text s-18"></i
                      ><span class="blue-text">Downlines</span></router-link
                    >
                  </li>
                  <li class="treeview @yield('geneology-active')">
                    <a href="/user/network">
                      <i class="icon icon-gear blue-text s-18"></i
                      ><span class="blue-text">Geneology</span>
                    </a>
                  </li>
                  <li class="treeview">
                    <a v-b-toggle.collapse-wallet>
                      <i
                        class="icon icon-account_balance_wallet blue-text s-18"
                      ></i
                      ><span class="blue-text">Wallet &caret;</span><i class="fa fa-caret"></i>
                    </a>
                    <b-collapse id="collapse-wallet" class="mt-2">
                      <b-card>
                        <ul class="sidebar-menu">
                          <li class="treeview">
                            <router-link :to="{ name: 'wallet-summary' }">
                              <i class="icon icon-barometer2 blue-text s-18"></i>
                              <span class="blue-text">Wallet Summery</span>
                            </router-link>
                          </li>
                          <li class="treeview">
                            <router-link :to="{ name: 'wallet-analysis' }">
                              <i class="icon icon-barometer2 blue-text s-18"></i>
                              <span class="blue-text">Wallet Analysis</span>
                            </router-link>
                          </li>
                          
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>
                  <li class="treeview">
                    <a v-b-toggle.collapse-withdrawal>
                      <i
                        class="icon icon-account_balance_wallet blue-text s-18"
                      ></i
                      ><span class="blue-text">Withdrawal</span><i class="fa fa-caret"></i>
                    </a>
                    <b-collapse id="collapse-withdrawal" class="mt-2">
                      <b-card>
                        <ul class="sidebar-menu">
                          <li class="treeview">
                            <router-link :to="{ name: 'withdrawal-history' }">
                              <i class="icon icon-barometer2 blue-text s-18"></i>
                              <span class="blue-text">Withdrawal Histoy</span>
                            </router-link>
                          </li>
                          <li class="treeview">
                            <router-link :to="{ name: 'withdrawal-request' }">
                              <i class="icon icon-barometer2 blue-text s-18"></i>
                              <span class="blue-text">Withdrawal Request </span>
                            </router-link>
                          </li>
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>
                  <li class="treeview @yield('notification-active')">
                    <a href="/user/notifications">
                      <i class="icon icon-chat_bubble blue-text s-18"></i>
                      <span class="blue-text">Notification</span>
                    </a>
                  </li>
                  <li class="treeview @yield('pin-active')">
                    <a v-b-toggle.collapse-pin-transactions>
                      <i class=" blue-text s-18 "></i>
                      <span class="blue-text">Pin Transactions</span>
                    </a>
                    <b-collapse id="collapse-pin-transactions" class="mt-2">
                      <b-card>
                        <ul class="sidebar-menu">
                          <li class="treeview">
                            <router-link :to="{ name: 'pending-pin-approvals' }">
                              <i class="icon icon-barometer2 blue-text s-18"></i>
                              <span class="blue-text">Pending Pin Approvals</span>
                            </router-link>
                          </li>
                          <li class="treeview">
                            <router-link :to="{ name: 'withdrawal-request' }">
                              <i
                                class="icon icon-barometer2 blue-text s-18"
                              ></i>
                              <span class="blue-text">Pin Transaction History </span>
                            </router-link>
                          </li>
                          <li class="treeview">
                            <router-link :to="{ name: 'pin-purchase-history' }">
                              <i class="icon icon-barometer2 blue-text s-18"></i>
                              <span class="blue-text">Pin Purchase History </span>
                            </router-link>
                          </li>
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>
                  <li class="treeview @yield('food-vouchers-active')">
                    <router-link :to="{ name: 'food-vouchers' }">
                      <i class="icon icon-shop blue-text s-18 "></i>
                      <span class="blue-text">Food Vouchers</span>
                    </router-link>
                  </li>
                  <li class="treeview ">
                    <router-link :to="{ name: 'incentives' }">
                      <i class="icon icon-box blue-text s-18 "></i>
                      <span class="blue-text">Incentives</span>
                    </router-link>
                  </li>
                  <li class="treeview">
                    <a v-b-toggle.collapse-security>
                      <i class="icon icon-lock3 blue-text s-18"></i>
                      <span class="blue-text">Security</span>
                    </a>
                    <b-collapse id="collapse-security" class="mt-2">
                      <b-card>
                        <ul class="sidebar-menu">
                          <li class="treeview">
                            <router-link :to="{ name: 'pending-pin-approvals' }">
                              <i class="icon icon-barometer2 blue-text s-18"></i>
                              <span class="blue-text">Change Password</span>
                            </router-link>
                          </li>
                          <li class="treeview">
                            <router-link :to="{ name: 'two-factor-authentication' }">
                              <i
                                class="icon icon-barometer2 blue-text s-18"
                              ></i>
                              <span class="blue-text">Two Factor Authentication</span>
                            </router-link>
                          </li>
                        </ul>
                      </b-card>
                    </b-collapse>
                  </li>
                </ul>
              </section>
            </div>
          </b-sidebar>

          <div class="d-none d-md-block">
            <h1 class="nav-title text-white">Dashboard</h1>
          </div>
        </div>
      </div>
      <!--Top Menu Start -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages-->
          <li class="dropdown custom-dropdown messages-menu">
            <a href="#" class="nav-link" data-toggle="dropdown">
              <i class="icon-message "></i>
              <span class="badge badge-success badge-mini rounded-circle"
                >4</span
              >
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu pl-2 pr-2">
                  <!-- start message -->
                  <li>
                    <a href="#">
                      <div class="avatar float-left">
                        <img src="assets/img/dummy/u4.png" alt="" />
                        <span class="avatar-badge busy"></span>
                      </div>
                      <h4>
                        Support Team
                        <small><i class="icon icon-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                  <!-- start message -->
                  <li>
                    <a href="#">
                      <div class="avatar float-left">
                        <img src="assets/img/dummy/u1.png" alt="" />
                        <span class="avatar-badge online"></span>
                      </div>
                      <h4>
                        Support Team
                        <small><i class="icon icon-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                  <!-- start message -->
                  <li>
                    <a href="#">
                      <div class="avatar float-left">
                        <img src="assets/img/dummy/u2.png" alt="" />
                        <span class="avatar-badge idle"></span>
                      </div>
                      <h4>
                        Support Team
                        <small><i class="icon icon-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                  <!-- start message -->
                  <li>
                    <a href="#">
                      <div class="avatar float-left">
                        <img src="assets/img/dummy/u3.png" alt="" />
                        <span class="avatar-badge busy"></span>
                      </div>
                      <h4>
                        Support Team
                        <small><i class="icon icon-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                </ul>
              </li>
              <li class="footer s-12 p-2 text-center">
                <a href="#">See All Messages</a>
              </li>
            </ul>
          </li>
          <!-- Notifications -->
          <li class="dropdown custom-dropdown notifications-menu">
            <a
              href="#"
              class=" nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="icon-notifications "></i>
              <span class="badge badge-danger badge-mini rounded-circle"
                >4</span
              >
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li class="header">You have 10 notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <a href="#">
                      <i class="icon icon-data_usage text-success"></i> 5 new
                      members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon icon-data_usage text-danger"></i> 5 new
                      members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon icon-data_usage text-yellow"></i> 5 new
                      members joined today
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer p-2 text-center"><a href="#">View all</a></li>
            </ul>
          </li>
          <li>
            <a
              class="nav-link "
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class=" icon-search3 "></i>
            </a>
          </li>
          <!-- Right Sidebar Toggle Button -->
          <li>
            <a class="nav-link ml-2" data-toggle="control-sidebar">
              <i class="icon-tasks "></i>
            </a>
          </li>
          <!-- User Account-->
          <li class="dropdown custom-dropdown user user-menu ">
            <a href="#" class="nav-link" data-toggle="dropdown">
              <img
                src="assets/img/dummy/bootstrap.png"
                class="user-image"
                alt="User Image"
              />
              <i class="icon-more_vert "></i>
            </a>
            <div class="dropdown-menu p-4 dropdown-menu-right">
              <div class="row box justify-content-between my-4">
                <div class="col">
                  <a href="#">
                    <i class="icon-apps purple lighten-2 avatar  r-5"></i>
                    <div class="pt-1">Apps</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
                    <div class="pt-1">Profile</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i
                      class="icon-perm_data_setting indigo lighten-2 avatar  r-5"
                    ></i>
                    <div class="pt-1">Settings</div>
                  </a>
                </div>
              </div>
              <div class="row box justify-content-between my-4">
                <div class="col">
                  <a href="#">
                    <i class="icon-star light-green lighten-1 avatar  r-5"></i>
                    <div class="pt-1">Favourites</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-save2 orange accent-1 avatar  r-5"></i>
                    <div class="pt-1">Saved</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i
                      class="icon-perm_data_setting grey darken-3 avatar  r-5"
                    ></i>
                    <div class="pt-1">Settings</div>
                  </a>
                </div>
              </div>
              <hr />
              <div class="row box justify-content-between my-4">
                <div class="col">
                  <a href="#">
                    <i class="icon-apps purple lighten-2 avatar  r-5"></i>
                    <div class="pt-1">Apps</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
                    <div class="pt-1">Profile</div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i
                      class="icon-perm_data_setting indigo lighten-2 avatar  r-5"
                    ></i>
                    <div class="pt-1">Settings</div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid relative animatedParent animateOnce p-lg-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  props: {
    source: String
  },
  data: () => ({
    active: false,
    notExpand: false,
    reduce: true
  }),

  created() {
    /*
     *  Add sidebar classes (sidebar-mini sidebar-collapse sidebar-expanded-on-hover) in body tag
     *  you can remove this script tag and add classes directly to body
     *  this is only for demo
     */
    //document.body.className += ' sidebar-mini' + ' sidebar-collapse' + ' theme-dark';
  }
};
</script>

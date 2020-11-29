<template>
  <div class="row">
    <div class="col-md-12">
      <b-tabs content-class="mt-3 nav nav-material nav-material-white">
        <b-tab title="First" active style="width:100%">
          <template v-slot:title>
            <i class="icon icon-profile"></i>Profile
          </template>
          <div class="row">
            <div class="col-md-3">
              <div class="card ">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <i class="icon icon-user-circle-o text-primary"></i
                    ><strong class="s-12">Full name</strong>
                    <span class="float-right s-12">{{ user.full_name }}</span>
                  </li>
                  <li class="list-group-item">
                    <i class="icon icon-phone2 text-primary"></i
                    ><strong class="s-12">Phone</strong>
                    <span class="float-right s-12">{{ user.phone }}</span>
                  </li>
                  <li class="list-group-item">
                    <i class="icon icon-email2 text-primary"></i
                    ><strong class="s-12">Email</strong>
                    <span class="float-right s-12">{{ user.email }}</span>
                  </li>
                  <li class="list-group-item">
                    <i class="icon icon-address-card-o  text-primary"></i>
                    <strong class="s-12">Username</strong>
                    <span class="float-right s-12">{{ user.username }}</span>
                  </li>
                  <li class="list-group-item">
                    <i class="icon icon-level-up text-primary"></i
                    ><strong class="s-12">Level</strong>
                    <span class="float-right s-12">
                      {{ user.level_id }}
                    </span>
                  </li>
                </ul>
              </div>

              <div class=" my-3">
                <div class="card" style="background-color:#03a9f4;">
                  <div class="card-body text-center  p-5 ">
                    <div class="avatar avatar-xl mb-3 ">
                      <img class="user_avatar" src="" alt="" />
                    </div>
                    <div>
                      <h6 class="p-t-10 text-white">{{ user.full_name }}</h6>
                      <span class="text-white">{{ user.username }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <template v-if="profile_data.dowlines">
                <div class="" style="height:300px; overflow-y:scroll;">
                  <template v-for="downline in profile_data.downlines">
                    <div class="card no-b p-3" :key="downline.id">
                      <small>DOWNLINE</small>
                      <hr />
                      <div>
                        <div class="image mr-3 avatar-lg float-left">
                          <img class="user_avatar" src="" alt="" />
                        </div>
                        <div class="mt-1 text-center">
                          <div>
                            <strong>{{ downline.full_name }}</strong>
                          </div>
                          <small>{{ downline.username }}</small>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </template>
            </div>
            <div class="col-md-9">
              <div class="row ">
                <!-- bar charts group -->
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header bg-white text-primary">
                      <h6 class="text-primary">Profile data</h6>
                    </div>

                    <div class="card-body">
                      <form
                        action="/user/updateBasicDetails"
                        method="POST"
                        @submit.prevent
                      >
                        <div class="card no-b  no-r">
                          <div class="card-body">
                            <div class="form-row">
                              <div class="col-md-8">
                                <div class="form-group m-0">
                                  <label for="name" class="col-form-label s-12"
                                    >FULL NAME</label
                                  >
                                  <input
                                    name="full_name"
                                    v-model="profile.name"
                                    placeholder="Enter full Name"
                                    class="form-control r-0 light s-12 "
                                    type="text"
                                  />
                                </div>

                                <div class="form-row">
                                  <div class="form-group col-6 m-0">
                                    <label
                                      for="cnic"
                                      class="col-form-label s-12"
                                      ><i class="icon-phon"></i>Phone
                                      number</label
                                    >
                                    <input
                                      name="phone"
                                      v-model="profile.phone"
                                      placeholder="Enter Form B or CNIC Number"
                                      class="form-control r-0 light s-12 date-picker"
                                      type="text"
                                    />
                                  </div>
                                  <div class="form-group col-6 m-0">
                                    <label for="dob" class="col-form-label s-12"
                                      ><i class="icon-emai mr-2"></i
                                      >Email</label
                                    >
                                    <input
                                      name="email"
                                      v-model="profile.email"
                                      placeholder="email address"
                                      class="form-control r-0 light s-12 datePicker"
                                      type="email"
                                    />
                                  </div>
                                </div>

                                <div class="form-group m-0">
                                  <label for="dob" class="col-form-label s-12"
                                    >GENDER</label
                                  >
                                  <br />

                                  <div class="">
                                    <select
                                      v-model="profile.gender"
                                      name="gender"
                                      class="form-control"
                                    >
                                      <template v-for="gen in gender">
                                        <template v-if="gen == profile.gender">
                                          <option
                                            selected
                                            :value="gen"
                                            :key="gen"
                                            >{{ gen }}</option
                                          >
                                        </template>
                                        <template v-else>
                                          <option :value="gen" :key="gen">
                                            {{ gen }}
                                          </option>
                                        </template>
                                      </template>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="form-row mt-1">
                              <div class="form-group col-4 m-0">
                                <label for="email" class="col-form-label s-12"
                                  ><i class=" mr-2"></i>Country</label
                                >
                                <input
                                  name="country"
                                  v-model="profile.country"
                                  placeholder="Country"
                                  class="form-control r-0 light s-12 "
                                  type="text"
                                />
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-9 m-0">
                                <label for="address" class="col-form-label s-12"
                                  >Address</label
                                >
                                <textarea
                                  v-model="profile.address"
                                  name="address"
                                  rows="5"
                                  type="text"
                                  class="form-control r-0 light s-12"
                                  id="address"
                                  placeholder="Enter Address"
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div class="card-body">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg"
                              @click="updateProfileDetails"
                            >
                              <i class="icon-save mr-2"></i>Update Data
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- /bar charts group -->
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Second" style="width:100% !important">
          <template v-slot:title>
            <i class="icon icon-bank"></i>Bank Details
          </template>
          <div class="row" style="width:100% !important">
            <div class="col-md-12">
              <div class="card no-b">
                <div class="card-header bg-white text-primary">
                  <h4 class="card-title text-primary">
                    <strong class="font-weight-bold"
                      >Bank Account Details</strong
                    >
                  </h4>
                </div>
                <div class="collapse show" id="invoiceCard">
                  <div class="card-body p-0">
                    <div class="card no-b  no-r">
                      <div class="card-body">
                        <div class="form-row">
                          <div class="col-md-8">
                            <form
                              action="/user/updateBankDetails"
                              method="POST"
                              @submit.prevent
                            >
                              <div class="form-group m-0">
                                <label for="name" class="col-form-label s-12"
                                  >Bank Name</label
                                >
                                <input
                                  name="bank_name"
                                  v-model="bank_details.bank_name"
                                  placeholder="Enter full Name"
                                  class="form-control r-0 light s-12 "
                                  type="text"
                                />
                              </div>

                              <div class="form-row">
                                <div class="form-group col-6 m-0">
                                  <label for="cnic" class="col-form-label s-12"
                                    ><i class=""></i>Bank Account Name</label
                                  >
                                  <input
                                    name="bank_account_name"
                                    v-model="bank_details.bank_account_name"
                                    placeholder="Enter Form B or CNIC Number"
                                    class="form-control r-0 light s-12 date-picker"
                                    type="text"
                                  />
                                </div>
                                <div class="form-group col-6 m-0">
                                  <label for="dob" class="col-form-label s-12"
                                    ><i class=" mr-2"></i>Bank Account
                                    Number</label
                                  >
                                  <input
                                    name="bank_account_number"
                                    v-model="bank_details.bank_account_number"
                                    placeholder="email address"
                                    class="form-control r-0 light s-12 datePicker"
                                    type=""
                                  />
                                </div>
                              </div>
                              <div class="card-body">
                                <button
                                  type="submit"
                                  class="btn btn-primary btn-lg float-right"
                                  @click="updateBankDetails"
                                >
                                  <i class="icon-save mr-2"></i>Update Bank
                                  details
                                </button>
                              </div>
                            </form>
                          </div>

                          <div class="col-md-4">
                            <div class="float-center">
                              <img
                                class="img-responsive"
                                src="../../assets/img/bank1.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab style="width:100% !important">
          <template v-slot:title>
            <i class="icon icon-profile"></i
            ><i class="icon icon-camera"></i>Profile Photo
          </template>
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="card no-b">
                <div class="card-header bg-white ">
                  <h4 class="card-title text-primary">
                    <strong class="font-weight-bold">Display Picture</strong>
                  </h4>
                </div>
                <div class="collapse show" id="invoiceCard">
                  <div class="card-body p-">
                    <form
                      class="form-horizontal"
                      id="update-profile-photo-form"
                      action="/user/updateProfilePhoto"
                      method="POST"
                      enctype="multipart/form-data"
                    >
                      <div class="form-group">
                        <label class="col-md-12">Profile Photo</label>
                        <div class="col-md-12">
                          <input
                            required
                            type="file"
                            name="img"
                            data-default-file=""
                            class="form-control form-control-line dropify"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="col-sm-12">
                          <button
                            class="btn btn-primary"
                            id="update-profile-photo"
                          >
                            Update Profile Photo
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab style="width:100% !important">
          <template v-slot:title>
            <i class="icon icon-user"></i>Upline
          </template>
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class=" my-3">
                <div class="card" style="background-color:#03a9f4;">
                  <div class="card-body text-center  p-5 ">
                    <template v-if="profile_data.upline">
                      <div class="avatar avatar-xl mb-3 ">
                        <img class="user_avatar" src="" alt="" />
                      </div>
                      <h5 class="p-t-10 text-white">
                        Name - {{ profile_data.upline.full_name }}
                      </h5>
                      <h5 class="p-t-10 text-white">
                        Username - {{ profile_data.upline.username }}
                      </h5>
                      <h5 class="p-t-10 text-white">
                        Email - {{ profile_data.upline.email }}
                      </h5>
                      <h5 class="p-t-10 text-white">
                        Level - {{ profile_data.upline.level_id }}
                      </h5>
                    </template>
                    <template v-else>
                      <div class="alert alert-info">You have noupline</div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "UserProfile",
  data() {
    return {
      gender: ["male", "female"],
      bank_details: {
        bank_name: "",
        bank_account_name: "",
        banK_account_number: ""
      },
      profile: {
        name: "",
        phone: "",
        email: "",
        gender: "",
        country: "",
        address: ""
      },
      profile_photo: "",
      upline: {},
      downlines: []
    };
  },

  computed: {
    ...mapState({
      loading: state => state.loading,
      processing: state => state.processing
    }),

    ...mapGetters(["user"]),
    ...mapGetters("userStore", { profile_data: "profile" })
  },

  created() {
    if (Object.keys(this.profile_data).length === 0) {
      this.profileData();
      //console.log(this.profile_data);
    }
    /**
     * set bank details
     */
    this.bank_details.bank_name = this.user.bank_name;
    this.bank_details.bank_account_name = this.user.bank_account_name;
    this.bank_details.bank_account_number = this.user.bank_account_number;

    /**
     * set profile data
     */
    this.profile.name = this.user.name;
    this.profile.phone = this.user.phone;
    this.profile.email = this.user.email;
    this.profile.gender = this.user.gender;
    this.profile.country = this.user.country;
    this.profile.address = this.user.address;
  },

  methods: {
    ...mapActions("userStore", [
      "updateProfileDetails",
      "updateBankDetails",
      "updateProfilePhoto",
      "profileData"
    ]),

    handleProfileUpdate() {
      this.updateProfileDetails(this.profile);
    },

    handleBankUpdate() {
      this.updateBankDetails(this.bank_details);
    },

    handlePhotoUpdate() {
      this.updateprofilePhoto();
    }
  }
};
</script>

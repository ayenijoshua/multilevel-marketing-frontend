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
      <div class="col-md-4">
        <div class="card">
          <img class="img-responsive" src="../../assets/img/step1.png" />
          <hr />
          <div class="card-body">
            <!-- Big Heading -->
            <div class="text-center">
              <h4 class="font-weight-bold">Download App</h4>
              <br />
              <img class="img-responsive" src="../../assets/img/GA.png" />
            </div>
            <div class="text-center">
              <h4 class="font-weight-bold">Let's Begin The Protection...</h4>
              <h6>Click below to Download Google Authenticator</h6>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en
                            "
                ><img
                  class="img-responsive"
                  src="../../assets/img/playstore.png"
              /></a>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/google-authenticator/id388497605
                            "
                ><img class="img-responsive" src="../../assets/img/apple.png"
              /></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img src="../../assets/img/step2.png" class="img-responsive" />
          <hr />
          <div class="card-body">
            <form action="/user/generateQr" method="post" id="generateQr">
              <div class="text-center">
                <h4 class="font-weight-bold">Scan QRcode</h4>
                <!-- @if($qr) -->
                <div><img src="" height="" /></div>
                <!-- @else -->
                <img class="img-responsive" src="../../assets/img/qrcode.png" />
                <!-- @endif -->
              </div>
              <div class="text-center">
                <h5 class="font-weight-bold">Click To Generate QR Code</h5>
                <h6>You are steps away from protecting your Back-Office</h6>
                <br />
                <input type="hidden" name="type" value="user" />
                <button class="btn btn-primary" disabled id="generate-qr-code">
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <img src="../../assets/img/step3.png" class="img-responsive" />
          <hr />
          <div class="card-body">
            <div class="text-center">
              <h4 class="font-weight-bold">Complete Your Protection</h4>
              <p>Enter the code generated from Google Authenticator</p>
            </div>
            <div class="text-center">
              <img
                class="img-responsive text-center"
                src="../../assets/img/lock.png"
              />
            </div>
            <br />
            <div class="text-center">
              <h4 class="font-weight-bold">Enter Code</h4>
            </div>
            <form
              class="form-horizontal "
              method="POST"
              action="/user/verifyQrCode"
              id="verifyQrCodeForm"
            >
              <label class="col-form-label"></label>
              <input
                placeholder="Enter generated code"
                disabled
                name="qrCode"
                type="number"
                class="form-control form-control-line"
              />
              <input type="hidden" name="type" value="user" />
              <button
                class="text-center btn  btn-primary mt-2"
                disabled
                id="verify-qr-code"
              >
                <i class="icon-arrow_forward mr-2"></i>Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoFactorAuthentication",
  data() {}
};
</script>

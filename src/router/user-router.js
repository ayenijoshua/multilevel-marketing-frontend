import Dashboard from "../views/user/Dashboard.vue";
import Profile from "../views/user/Profile.vue";
import Downlines from "../views/user/Downlines.vue";
import FoodVouchers from "../views/user/FoodVouchers.vue";
import Incentives from "../views/user/Incentives.vue";
import WalletSummary from "../views/user/WalletSummary.vue";
import WalletAnalysis from "../views/user/WalletAnalysis.vue";
import WithdrawalHistory from "../views/user/WithdrawalHistory.vue";
import WithdrawalRequest from "../views/user/WithdrawalRequest.vue";
import PendingPinApprovals from "../views/user/PendingPinApprovals.vue";
import PinPurchaseHistory from "../views/user/PinPurchaseHistory.vue";
import TwoFactorAuthentication from "../views/user/TwoFactorAuthentication.vue";
import Layout from "../views/layouts/UserLayout.vue";

const routes = [
  {
    path: "/user",
    component: Layout,
    meta: {
      auth: true,
      is_admin: false
    },
    children: [
      {
        path: "dashboard",
        component: Dashboard,
        name: "user-dashboard"
      },
      {
        path: "profile",
        component: Profile,
        name: "user-profile"
      },
      {
        path: "downlines",
        component: Downlines,
        name: "downlines"
      },
      {
        path: "food-vouchers",
        component: FoodVouchers,
        name: "food-vouchers"
      },
      {
        path: "incentives",
        component: Incentives,
        name: "incentives"
      },
      {
        path: "wallet-summary",
        component: WalletSummary,
        name: "wallet-summary"
      },
      {
        path: "wallet-analysis",
        component: WalletAnalysis,
        name: "wallet-analysis"
      },
      {
        path: "withdrawal-history",
        component: WithdrawalHistory,
        name: "withdrawal-history"
      },
      {
        path: "withdrawal-request",
        component: WithdrawalRequest,
        name: "withdrawal-request"
      },
      {
        path: "pending-pin-approvals",
        component: PendingPinApprovals,
        name: "pending-pin-approvals"
      },
      {
        path: "pin-purchase-history",
        component: PinPurchaseHistory,
        name: "pin-purchase-history"
      },
      {
        path: "two-factor-authentication",
        component: TwoFactorAuthentication,
        name: "two-factor-authentication"
      }

    ]
  }
];

export default routes;

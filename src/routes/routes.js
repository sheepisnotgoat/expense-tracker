import Vue from "vue";
import VueRouter from "vue-router";
import RecordView from "../views/RecordView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: RecordView,
  },
];

export default routes;

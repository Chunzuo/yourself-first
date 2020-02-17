<template>
  <div class="body_wrap">
    <my-header></my-header>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import jQuery from "jquery";
export default {
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {
    jQuery("body").addClass(
      "home2 index2 page-template-default cloe_brooks_body body_style_wide body_transparent layout_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide woocommerce woocommerce-page"
    );
  }
};
</script>

<style></style>

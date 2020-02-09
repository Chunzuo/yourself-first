<template>
  <div>
    <home-slider></home-slider>

    <!-- content -->
    <div class="content">
      <div class="post_item post_item_single post_featured_default">
        <section class="post_content">
          <div class="wrapper">
            <home-service></home-service>
          </div>

          <home-about-me></home-about-me>

          <home-help-you></home-help-you>

          <home-client-say></home-client-say>

          <home-articles></home-articles>

          <home-contact-form></home-contact-form>
        </section>
      </div>
    </div>
    <!-- /content -->
  </div>
</template>

<script>
import HomeSlider from "./components/HomeSlider";
import HomeService from "./components/HomeService";
import HomeAboutMe from "./components/HomeAboutMe";
import HomeHelpYou from "./components/HomeHelpYou";
import HomeClientSay from "./components/HomeClientSay";
import HomeArticles from "./components/HomeArticles";
import HomeContactForm from "./components/HomeContactForm";
export default {
  components: {
    HomeSlider,
    HomeService,
    HomeAboutMe,
    HomeHelpYou,
    HomeClientSay,
    HomeArticles,
    HomeContactForm
  }
};
</script>

<style lang="css" scoped>
.contact_bg {
  background-image: url("../../assets/img/background_img_1.png");
}
</style>

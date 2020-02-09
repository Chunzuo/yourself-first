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

          <!-- Contact Form -->
          <div class="contact_bg">
            <div class="content_wrap">
              <div class="column-5_7">
                <div class="align_left content_wrap">
                  <div
                    class="columns_wrap sc_columns columns_nofluid sc_columns_count_12 col468_100p "
                  >
                    <h1
                      class="h1_home sc_title sc_title_regular sc_align_left margin_top_huge margin_bottom_null"
                    >
                      Book An Appointment Now!
                    </h1>
                    <div class="vc_custom_heading ls1px new1">
                      MAKE A BOOKING WITH OUR ONLINE FORM
                    </div>
                    <div class="sc_form_wrap scheme_dark">
                      <div
                        class="sc_form sc_form_style_form_2 aligncenter margin_top_small margin_bottom_huge"
                      >
                        <form
                          data-formtype="form_2"
                          method="post"
                          action="include/admin-ajax.php"
                          class="contact_form_home"
                        >
                          <div class="sc_form_info">
                            <div
                              class="columns_wrap sc_columns columns_nofluid sc_columns_count_2"
                            >
                              <div
                                class="column-1_2 sc_column_item sc_column_item_1 odd first"
                              >
                                <div
                                  class="sc_form_item sc_form_field label_over"
                                >
                                  <label class="required" for="sc_form_username"
                                    >Name</label
                                  >
                                  <input
                                    id="sc_form_username"
                                    type="text"
                                    name="username"
                                    placeholder="Name *"
                                  />
                                </div>
                              </div>
                              <div
                                class="column-1_2 sc_column_item sc_column_item_2 even last"
                              >
                                <div
                                  class="sc_form_item sc_form_field label_over"
                                >
                                  <label class="required" for="sc_form_phone"
                                    >Phone</label
                                  >
                                  <input
                                    id="sc_form_phone"
                                    type="text"
                                    name="phone"
                                    placeholder="Phone *"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="sc_form_item sc_form_field label_over">
                            <label class="required" for="sc_form_email"
                              >E-mail</label
                            >
                            <input
                              id="sc_form_email"
                              type="text"
                              name="email"
                              placeholder="E-mail Address *"
                            />
                          </div>

                          <div class="sc_form_item sc_form_message label_over">
                            <label class="required" for="sc_form_message"
                              >Message</label
                            >
                            <textarea
                              id="sc_form_message"
                              name="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                          <div class="sc_form_item sc_form_button">
                            <button>Send Message</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/ Contact Form -->
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
export default {
  components: {
    HomeSlider,
    HomeService,
    HomeAboutMe,
    HomeHelpYou,
    HomeClientSay,
    HomeArticles
  }
};
</script>

<style lang="css" scoped>
.contact_bg {
  background-image: url("../../assets/img/background_img_1.png");
}
</style>

<template>
  <div class="page_wrap">
    <div class="top_panel_fixed_wrap"></div>
    <!-- Header -->
    <header class="top_panel_wrap top_panel_style_1 scheme_ menu_show">
      <div class="top_panel_wrap_inner top_panel_inner_style_1 top_panel_position_above">
        <div class="scheme_dark">
          <div class="top_panel_middle top_panel_inner_style_1">
            <div class="content_wrap">
              <div class="columns_wrap columns_fluid">
                <div class="column-2_5 contact_logo">
                  <div class="logo">
                    <router-link to="/">
                      <img src="@/assets/img/logo4.png" class="logo_main" alt />
                    </router-link>
                  </div>
                </div>
                <div class="column-1_5 contact_field contact_address">
                  <span class="contact_icon icon-house158"></span>
                  <span class="contact_label contact_address_1">{{ profile.address }}</span>
                </div>
                <div class="column-1_5 contact_field contact_address">
                  <span class="contact_icon icon-mail"></span>
                  <span class="contact_label contact_address_1">
                    <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
                  </span>
                </div>
                <div class="column-1_5 contact_field contact_phone">
                  <span class="contact_icon icon-telephone51"></span>
                  <span class="contact_label contact_phone">
                    <a href="tel:+2015462442">{{ profile.phone }}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="scheme_light">
          <div class="top_panel_bottom top_panel_inner_style_1">
            <div class="content_wrap">
              <div class="menu_main_wrap">
                <nav class="menu_main_nav_area">
                  <ul id="menu_main" class="menu_main_nav">
                    <li
                      v-for="(item, index) in headerItems"
                      :key="`header-item-${index}`"
                      class="menu-item"
                      :class="{
                        'current-menu-item': currentHeaderItem == item.text
                      }"
                    >
                      <router-link :to="item.link">{{ item.text }}</router-link>
                    </li>
                    <li
                      class="menu-item menu-item-has-children"
                      :class="{
                        'current-menu-item': currentHeaderItem == 'About'
                      }"
                    >
                      <router-link to="/aboutme">About</router-link>
                      <ul class="sub-menu">
                        <li class="menu-item">
                          <router-link to="/aboutme">About Me</router-link>
                        </li>
                        <li class="menu-item">
                          <router-link to="/testimonial">Testimonials</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- /Header -->

    <!-- header_mobile -->
    <div class="header_mobile">
      <div class="content_wrap">
        <div class="menu_button icon-menu"></div>
        <div class="logo">
          <a href="index.html">
            <img src="http://placehold.it/330x53" class="logo_main" alt />
          </a>
        </div>
      </div>
      <div class="side_wrap">
        <div class="close">Close</div>
        <!-- panel_top -->
        <div class="panel_top">
          <ul id="menu_main_mobile" class="menu_main_nav">
            <li class="menu-item current-menu-item current_menu_item">
              <router-link to="/">Home</router-link>
            </li>
          </ul>
        </div>
        <!-- /panel_top -->

        <!-- panel_middle -->
        <div class="panel_middle">
          <div class="contact_field contact_phone">
            <span class="contact_icon icon-phone"></span>
            <span class="contact_label contact_phone">123-456-7890</span>
            <span class="contact_email">info@yoursite.com</span>
          </div>
        </div>
        <!-- /panel_middle -->
      </div>
      <div class="mask"></div>
      <!-- /header_mobile -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    currentHeaderItem() {
      return this.$store.state.header.currentItem;
    }
  },
  data() {
    return {
      headerItems: [
        { text: "Home", link: "/" },
        { text: "Services", link: "/services" },
        { text: "Contact", link: "/contact" },
        { text: "FAQ", link: "/faq" },
        { text: "Blog", link: "/blog" },
        { text: "Store", link: "/store" }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
@import url("../assets/css/style.css");
@import url("../assets/css/skin.responsive.css");
@import url("../assets/css/responsive.css");
@import url("../assets/css/font-awesome.min.css");
@import url("../assets/css/shortcodes/theme.shortcodes.css");
@import url("../assets/css/fontello/css/fontello.css");
@import url("../assets/css/skins/less/skin.css");
@import url("../assets/css/custom-style.min.css");

@import url("../assets/js/testimonialcarousel/slick/style.min.css");
@import url("../assets/js/draggabletimeline/css/perfect-scrollbar.min.css");
@import url("../assets/js/draggabletimeline/css/style.css");
@import url("../assets/js/woocommerce/css/woocommerce-layout.css");
@import url("../assets/js/woocommerce/css/woocommerce-smallscreen.css");
@import url("../assets/js/woocommerce/css/woocommerce.css");
@import url("../assets/js/woocommerce/css/plugin.woocommerce.css");
@import url("../assets/js/woocommerce/css/prettyPhoto.css");
@import url("../assets/js/revslider/css/settings.css");
@import url("../assets/js/tooltipster/css/tooltipster.min.css");
@import url("../assets/js/tooltipster/css/tooltipster-light.min.css");
</style>

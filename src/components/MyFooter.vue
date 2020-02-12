<template>
  <div>
    <!-- footer -->
    <footer class="contacts_wrap scheme_light">
      <div class="contacts_wrap_inner">
        <div class="content_wrap">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/img/logo_foot.png" class="logo_footer" alt />
            </router-link>
          </div>
          <div class="contacts_address">
            <address class="address_right">
              Phone:
              <a href="tel:+1234567890">{{ profile.phone }}</a>
              <br />Email:
              <a href="mailto:jillianh@yourselffirst.org">
                {{
                profile.email
                }}
              </a>
            </address>
            <address class="address_left">{{ profile.address }}</address>
          </div>
          <div class="sc_socials sc_socials_type_icons sc_socials_shape_round sc_socials_size_tiny">
            <div class="sc_socials_item">
              <a :href="profile.instagram" target="_blank" class="social_icons">
                <span class="icon-instagramm"></span>
              </a>
            </div>
            <div class="sc_socials_item">
              <a :href="profile.facebook" target="_blank" class="social_icons">
                <span class="icon-facebook"></span>
              </a>
            </div>
            <div class="sc_socials_item">
              <a :href="profile.twitter" target="_blank" class="social_icons">
                <span class="icon-twitter"></span>
              </a>
            </div>
            <div class="sc_socials_item">
              <a :href="profile.linkedIn" target="_blank" class="social_icons">
                <span class="icon-linkedin"></span>
              </a>
            </div>
            <div class="sc_socials_item">
              <a :href="profile.pinterest" target="_blank" class="social_icons">
                <span class="icon-pinterest-circled"></span>
              </a>
            </div>
            <div class="sc_socials_item">
              <a :href="profile.zocdoc" target="_blank" class="social_icons">
                <b style="cursor: pointer;">z</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- /footer -->

    <!-- copyright_wrap footer-->
    <div class="copyright_wrap copyright_style_text scheme_dark">
      <div class="copyright_wrap_inner">
        <div class="content_wrap">
          <div class="copyright_text">
            <a
              href="https://themerex.net/"
              target="_blank"
              class="copyright_link"
            >YourselfFirst © 2020 All Rights Reserved</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /copyright_wrap footer -->
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>

<style lang="scss" scoped></style>

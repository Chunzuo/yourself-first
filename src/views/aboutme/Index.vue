<template>
  <div>
    <about-me-slide></about-me-slide>
    <div class="wrapper" style="margin-bottom: 5rem;">
      <div class="sc_content content_wrap">
        <div class="columns_wrap sc_columns columns_nofluid autoheight sc_columns_count_12">
          <div class="column-5_12 sc_column_item sc_column_item_1 odd first span_5">
            <div class="about_img">
              <img src="@/assets/img/jillian2.png" alt />
            </div>
          </div>
          <div class="column-7_12 sc_column_item sc_column_item_6 even span_7">
            <div class="sc_section sc_section_block margin_left_large alignleft">
              <div class="sc_section_inner">
                <div class="sc_section_content_wrap">
                  <h1 class="sc_title sc_title_regular h1_home">Dr. Jillian L. Holguin</h1>
                  <div class="expert_clinical">LCSW, CCTP-II - Psychotherapist</div>
                  <div class="text_column content_element">
                    <div class="wrapper">
                      <p
                        class="about_text_2"
                      >My name is Jillian Holguin and I am a Licensed Clinical Social Worker practicing in Hudson County, New Jersey specifically downtown Jersey city- Exchange Place. I received a Bachelors of Arts in Social work from Seton Hall University. From there, I completed the accelerated program at Rutger's University receiving a Masters in Social Work graduating Summa Cum Laude and was inducted in the Phi Alpha Honor's society. I received a certification in Telehealth facilitation from Thomas Jefferson University Hospital as well as a Certificate in Advanced Assessment and Diagnosis from New York University.</p>
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
</template>

<script>
import AboutMeSlide from "./components/AboutMeSlide";
export default {
  mounted() {
    this.$store.commit("setCurrentHeaderItem", "About Me");
  },
  data() {
    return {};
  },
  components: {
    AboutMeSlide
  }
};
</script>

<style lang="scss" scoped>
</style>
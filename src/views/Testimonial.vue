<template>
  <div>
    <div class="page_content_wrap page_paddings_no">
      <div class="content_wrap">
        <div class="content">
          <h3 class="sc_title sc_title_regular home_h2">HAPPY CLIENTS</h3>

          <div
            v-for="(review, index) in reviews"
            :key="`review - ${index}`"
            style="background: white;"
          >
            <!-- <blockquote>{{review.content}}</blockquote> -->
            <b>{{ review.content }}</b>

            <div class="margin_left_small">
              —
              <em>{{ review.clientName }}</em>
            </div>
            <!-- <div class="sc_line sc_line_position_center_center sc_line_style_solid"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  mounted() {
    this.$store.commit("setCurrentHeaderItem", "About");
    window.scrollTo(0, 0);
    this.getFeedbacks();
  },
  data() {
    return {
      reviews: []
    };
  },
  methods: {
    getFeedbacks() {
      this.$vs.loading();
      axios
        .get("/review")
        .then(response => {
          this.reviews = response.data;
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.page_content_wrap {
  // background-color: #eaf5f9;
  padding-top: 20px;
  padding-bottom: 6rem;
}
blockquote {
  margin: 0px;
  color: #6f6f6f;
  background: white;
}
blockquote::after,
blockquote::before {
  color: black;
}
</style>

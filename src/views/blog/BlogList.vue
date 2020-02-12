<template>
  <div>
    <div
      class="top_panel_title top_panel_style_3  title_present breadcrumbs_present scheme_dark"
    >
      <div
        class="top_panel_title_inner top_panel_inner_style_3  title_present_inner breadcrumbs_present_inner panel_img"
      >
        <div class="content_wrap">
          <h1 class="page_title">@JILLOLOGY_ |BLOG</h1>
        </div>
      </div>
    </div>

    <div class="page_content_wrap page_paddings_yes">
      <div class="content_wrap">
        <div class="content">
          <div
            class="columns_wrap sc_columns columns_nofluid sc_columns_count_2"
          >
            <div
              class="column-1_2 margin_bottom_small"
              v-for="(blog, index) in blogList"
              :key="`blog-${index}`"
            >
              <div
                class="post_item post_item_masonry post_item_masonry_2 post_format_standard odd"
              >
                <div class="post_featured">
                  <div class="post_thumb">
                    <router-link
                      class="hover_icon hover_icon_link"
                      :to="`/blog/${index}`"
                    >
                      <img
                        alt="Dealing with Mental Trauma of Severe Desease"
                        :src="blog.image"
                      />
                    </router-link>
                  </div>
                </div>
                <div class="post_content isotope_item_content">
                  <div class="post_info">
                    <span class="post_info_item post_info_posted">
                      <router-link :to="`/blog/${index}`" class="post_info_date"
                        >February 12, 2020</router-link
                      >
                    </span>
                    <span class="post_info_item post_info_counters">
                      <a
                        class="post_counters_item post_counters_comments icon-chat"
                        title="Comments - 0"
                        href="#"
                      >
                        <span class="post_counters_number">0</span>
                      </a>
                      <a
                        class="post_counters_item post_counters_likes icon-heart-empty enabled"
                        title="Like"
                        href="#"
                      >
                        <span class="post_counters_number">0</span>
                      </a>
                    </span>
                  </div>
                  <h5 class="post_title">
                    <router-link :to="`/blog/${index}`">
                      {{ blog.title }}
                    </router-link>
                  </h5>
                  <div class="post_descr">
                    <p>
                      {{ getShortContent(blog.content) }}
                    </p>
                    <router-link
                      :to="`/blog/${index}`"
                      class="post_readmore sc_button sc_button_style_filled "
                    >
                      <span class="post_readmore_label">Read more</span>
                    </router-link>
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
export default {
  mounted() {
    this.$store.commit("setCurrentHeaderItem", "Blog");
    window.scrollTo(0, 0);
  },
  methods: {
    getShortContent(content) {
      const maxLength = 100;
      if (content.length > maxLength) {
        return content.substr(0, maxLength) + "...";
      }
      return content;
    }
  },
  computed: {
    blogList() {
      return this.$store.state.blog.list;
    }
  }
};
</script>

<style lang="scss" scoped>
.panel_img {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.6)
    ),
    url("../../assets/img/blog_top_image.jpeg");

  background-size: cover;
}
</style>

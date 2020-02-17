<template>
  <div>
    <div class="content_wrap">
      <div class="page_content_wrap page_paddings_yes">
        <div class="content_wrap">
          <div class="content">
            <div class="columns_wrap sc_columns columns_nofluid sc_columns_count_3">
              <div
                class="margin_bottom_small"
                v-for="(product, index) in products"
                :key="`product-${index}`"
              >
                <div class="product-item">
                  <img :src="product.thumbnail" class="product-image" />

                  <div class="margin_left_small" style="text-align: center; width: 100%">
                    <h3>
                      <router-link :to="`/store/${index}`">{{product.title}}</router-link>
                    </h3>
                    <span>{{getShortContent(product.description)}}</span>
                    <br />
                    <span class="price">{{product.price}}</span>
                    <br />
                    <a
                      href="#"
                      id="button2"
                      class="sc_button sc_button_square sc_button_style_filled sc_button_size_small margin_top_tiny margin_right_tiny"
                    >Add to cart</a>
                  </div>
                </div>

                <div
                  class="sc_line sc_line_position_center_center sc_line_style_solid margin_top_medium"
                ></div>
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
    this.$store.commit("setCurrentHeaderItem", "Store");
    window.scrollTo(0, 0);
  },
  computed: {
    products() {
      return this.$store.state.product.list;
    }
  },
  methods: {
    getShortContent(content) {
      const maxLength = 200;
      if (content.length > maxLength) {
        return content.substr(0, maxLength) + "...";
      }
      return content;
    }
  }
};
</script>

<style lang="scss" scoped>
.price {
  color: #72b5ca;
  font-weight: 500;
  font-size: 18px;
}
.product-item {
  display: flex;
}
.product-image {
  width: 20rem;
}
</style>
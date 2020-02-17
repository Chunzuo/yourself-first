<template>
  <div>
    <div class="page_content_wrap page_paddings_yes">
      <div class="content_wrap">
        <div class="content">
          <!-- post content -->
          <div class="post_item post_item_single post_item_product">
            <div
              class="product type-product has-post-thumbnail product_cat-all product_cat-magazines first instock shipping-taxable purchasable product-type-simple"
            >
              <div class="images">
                <a
                  :href="product.thumbnail"
                  target="_blank"
                  class="woocommerce-main-image zoom"
                  title
                  data-rel="prettyPhoto"
                >
                  <img
                    :src="product.thumbnail"
                    class="attachment-shop_single size-shop_single"
                    alt="product-12"
                    title="product-12"
                  />
                </a>
              </div>
              <!-- entry-summary -->
              <div class="summary entry-summary">
                <h1 class="product_title entry-title">{{ product.title }}</h1>
                <div>
                  <p class="price">
                    <span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol"></span>
                      {{ product.price }}
                    </span>
                  </p>
                </div>
                <div></div>
                <form class="cart">
                  <div class="quantity">
                    <input
                      type="number"
                      step="1"
                      min="1"
                      max="100"
                      name="quantity"
                      value="1"
                      title="Qty"
                      class="input-text qty text"
                      size="4"
                    />
                  </div>
                  <input type="hidden" name="add-to-cart" value="215" />
                  <button
                    type="submit"
                    class="single_add_to_cart_button button alt"
                  >
                    Add to cart
                  </button>
                </form>

                <!-- product_meta -->
                <!-- <div class="product_meta">
                  <span class="posted_in">
                    Categories:
                    <a href="#" rel="tag">All</a>,
                    <a href="#" rel="tag">Magazines</a>
                  </span>
                  <span class="product_id">
                    Product ID:
                    <span>215</span>
                  </span>
                </div> -->
                <!-- /product_meta -->
              </div>
              <!-- /entry-summary -->

              <div
                class="woocommerce-tabs wc-tabs-wrapper trx-stretch-width woocommerce-tabs1"
              >
                <ul class="tabs wc-tabs">
                  <li class="description_tab active ">
                    <a href="#tab-description">Description</a>
                  </li>
                </ul>
                <div
                  class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                  id="tab-description"
                  style="display: block;"
                >
                  <h2>Product Description</h2>
                  <p>
                    {{ product.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- /post content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    product() {
      return this.$store.state.product.list[this.id];
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
.product-detail {
  display: flex;
}
.product-image {
  max-height: 500px;
  max-width: 300px;
}
</style>

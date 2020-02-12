<template>
  <div>
    <div
      class="top_panel_title top_panel_style_3 title_present breadcrumbs_present scheme_dark"
    >
      <div
        class="top_panel_title_inner top_panel_inner_style_3 title_present_inner breadcrumbs_present_inner panel_img"
      >
        <div class="content_wrap">
          <h1 class="page_title">Feel free to contact me anytime.</h1>
        </div>
      </div>
    </div>

    <div class="page_content_wrap page_paddings_no">
      <div class="content_wrap">
        <div class="content">
          <div
            class="post_item post_item_single post_featured_default post_format_standard page type-page"
          >
            <div class="wrapper text_contact_page margin_bottom_huge">
              <div
                class="columns_wrap sc_columns columns_nofluid sc_columns_count_3 margin_top_huge"
              >
                <div
                  class="column-1_3 sc_column_item sc_column_item_1 odd first"
                >
                  <div class="sc_section sc_section_block aligncenter">
                    <div class="sc_section_inner">
                      <div class="sc_section_content_wrap">
                        <figure class="sc_image sc_image_shape_square">
                          <img src="@/assets/img/mail.png" alt />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div class="text_column content_element">
                    <div class="wrapper">
                      <p>
                        <strong>
                          <a href="mailto:Jillianh@yourselffirst.org"
                            >Jillianh@yourselffirst.org</a
                          >
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="column-1_3 sc_column_item sc_column_item_2 even">
                  <div class="sc_section sc_section_block aligncenter">
                    <div class="sc_section_inner">
                      <div class="sc_section_content_wrap">
                        <figure class="sc_image sc_image_shape_square">
                          <img src="@/assets/img/phone.png" alt />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_text_column wpb_content_element">
                    <div class="wrapper">
                      <p>
                        <strong>
                          <a href="tel:+2015462442">201-546-2442</a>
                        </strong>
                        <br />
                        <strong>
                          <a href="tel:+2014856647">201-485-6647</a>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="column-1_3 sc_column_item sc_column_item_3 odd">
                  <div class="sc_section sc_section_block aligncenter">
                    <div class="sc_section_inner">
                      <div class="sc_section_content_wrap">
                        <figure class="sc_image sc_image_shape_square">
                          <img src="@/assets/img/check.png" alt />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div class="text_column content_element">
                    <div class="wrapper">
                      <p>
                        101 Hudson Street, Suite 2100,
                        <br />Jersey City, NJ 07302
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <b>Hours Of Operation</b>
                <ul>
                  <li>Monday: 12PM - 9PM</li>
                  <li>Tuesday: 5PM - 9PM</li>
                  <li>Wednesday: 10AM - 9PM</li>
                  <li>Thursday: 9AM - 9PM</li>
                  <li>Friday: Closed</li>
                  <li>Saturday: 9AM - 3PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form_contact_page_bg margin_top_medium">
        <div class="page_content_wrap page_paddings_no">
          <div class="content_wrap">
            <div class="content">
              <div class="wrapper">
                <div class="sc_form_wrap scheme_light">
                  <div
                    class="sc_form sc_form_style_form_1 aligncenter margin_top_huge"
                  >
                    <h2 class="sc_form_title sc_item_title">
                      Contact Us Today
                    </h2>
                    <form
                      data-formtype="form_1"
                      method="post"
                      action="include/sendmail.php"
                    >
                      <div class="form_info">
                        <div class="form_columns">
                          <div class="form_column">
                            <div class="sc_form_item sc_form_field label_over">
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
                          <div class="form_column">
                            <div class="sc_form_item sc_form_field label_over">
                              <label class="required" for="sc_form_email"
                                >E-mail</label
                              >
                              <input
                                id="sc_form_email"
                                type="text"
                                name="email"
                                placeholder="E-mail *"
                              />
                            </div>
                          </div>
                          <div class="form_column">
                            <div class="sc_form_item sc_form_field label_over">
                              <label class="required" for="sc_form_subj"
                                >Subject</label
                              >
                              <input
                                id="sc_form_subj"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                        </div>
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

      <gmap-map
        :center="mapCenter"
        :zoom="15"
        style="width: 100%; height: 500px"
      >
        <gmap-marker :position="mapCenter" :clickable="true"></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setCurrentHeaderItem", "Contact");
    window.scrollTo(0, 0);
  },
  data() {
    return {
      mapCenter: {
        lat: 40.716131,
        lng: -74.035049
      }
    };
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
    url("../assets/img/entrance.jpg");
  background-size: cover;
}
</style>

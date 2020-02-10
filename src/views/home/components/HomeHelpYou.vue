<template>
  <div>
    <!-- How I Can Help You -->
    <div class="page_content_wrap page_paddings_no">
      <div class="content_wrap">
        <div class="content">
          <div
            class="itemscope post_item post_item_single post_featured_default post_format_standard"
          >
            <section class="post_content">
              <div class="wrapper">
                <div class="sc_services_wrap">
                  <div
                    class="sc_services sc_services_style_services-1 sc_services_type_images margin_top_huge margin_bottom_huge"
                  >
                    <h2 class="home_h2 sc_services_title sc_item_title">How I Can Help You</h2>
                    <div class="sc_services_descr sc_item_descr">
                      It's my goal to create a comfortable, safe environment,
                      where we'll work to achieve the goal together
                    </div>

                    <swiper :options="swiperOption">
                      <!-- slides -->
                      <swiper-slide>
                        <div class="swiper-slide">
                          <div class="sc_services_item_wrap">
                            <div class="sc_services_item sc_services_item_1 even">
                              <div class="sc_services_item_featured post_featured">
                                <div class="post_thumb" data-title="Stress Management">
                                  <a class="hover_icon hover_icon_link" href="#">
                                    <img alt="Stress Management" src="@/assets/img/service-1.jpg" />
                                  </a>
                                </div>
                              </div>
                              <div class="sc_services_item_content">
                                <h4 class="sc_services_item_title">
                                  <a href="#">Stress Management</a>
                                </h4>
                                <div class="sc_services_item_description">
                                  <p>
                                    Many things can trigger stress reaction,
                                    including danger, threat, news, illness,
                                    etc.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="swiper-slide">
                          <div class="sc_services_item_wrap">
                            <div class="sc_services_item sc_services_item_2 even">
                              <div class="sc_services_item_featured post_featured">
                                <div class="post_thumb" data-title="Dating  Relationships">
                                  <a class="hover_icon hover_icon_link" href="#">
                                    <img
                                      alt="Dating  Relationships"
                                      src="@/assets/img/service-2.jpg"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div class="sc_services_item_content">
                                <h4 class="sc_services_item_title">
                                  <a href="#">Dating Relationships</a>
                                </h4>
                                <div class="sc_services_item_description">
                                  <p>
                                    Loving each other makes it easier to solve
                                    the invariable issues that come up daily
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="swiper-slide">
                          <div class="sc_services_item_wrap">
                            <div class="sc_services_item sc_services_item_3 even">
                              <div class="sc_services_item_featured post_featured">
                                <div class="post_thumb" data-title="Self-Esteem Issues">
                                  <a class="hover_icon hover_icon_link" href="#">
                                    <img alt="Self-Esteem Issues" src="@/assets/img/service-3.jpg" />
                                  </a>
                                </div>
                              </div>
                              <div class="sc_services_item_content">
                                <h4 class="sc_services_item_title">
                                  <a href="#">Self-Esteem Issues</a>
                                </h4>
                                <div class="sc_services_item_description">
                                  <p>
                                    The most common and dangerous features of
                                    low self-esteem is negative self-talk.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="swiper-slide">
                          <div class="sc_services_item_wrap">
                            <div class="sc_services_item sc_services_item_4 even">
                              <div class="sc_services_item_featured post_featured">
                                <div class="post_thumb" data-title="Self-Esteem Issues">
                                  <a class="hover_icon hover_icon_link" href="#">
                                    <img alt="Self-Esteem Issues" src="@/assets/img/service-4.jpg" />
                                  </a>
                                </div>
                              </div>
                              <div class="sc_services_item_content">
                                <h4 class="sc_services_item_title">
                                  <a href="#">Self-Esteem Issues</a>
                                </h4>
                                <div class="sc_services_item_description">
                                  <p>
                                    The most common and dangerous features of
                                    low self-esteem is negative self-talk.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="swiper-slide">
                          <div class="sc_services_item_wrap">
                            <div class="sc_services_item sc_services_item_5 even">
                              <div class="sc_services_item_featured post_featured">
                                <div class="post_thumb" data-title="Family Psychology">
                                  <a class="hover_icon hover_icon_link" href="#">
                                    <img alt="Family Psychology" src="@/assets/img/service-5.jpg" />
                                  </a>
                                </div>
                              </div>
                              <div class="sc_services_item_content">
                                <h4 class="sc_services_item_title">
                                  <a href="#">Family Psychology</a>
                                </h4>
                                <div class="sc_services_item_description">
                                  <p>
                                    Principles of theory with the interpersonal
                                    system of the family, focus of assessment
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="swiper-slide">
                          <div class="sc_services_item_wrap">
                            <div class="sc_services_item sc_services_item_6 even">
                              <div class="sc_services_item_featured post_featured">
                                <div class="post_thumb" data-title="Social Anxiety Disorder">
                                  <a class="hover_icon hover_icon_link" href="#">
                                    <img
                                      alt="Social Anxiety Disorder"
                                      src="@/assets/img/service-6.jpg"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div class="sc_services_item_content">
                                <h4 class="sc_services_item_title">
                                  <a href="#">Social Anxiety Disorder</a>
                                </h4>
                                <div class="sc_services_item_description">
                                  <p>
                                    The anxiety can interfere significantly with
                                    daily routines, your job, social life etc.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="swiper-slide">
                          <div class="sc_services_item_wrap">
                            <div class="sc_services_item sc_services_item_7 even">
                              <div class="sc_services_item_featured post_featured">
                                <div class="post_thumb" data-title="Elderly Couples Issues">
                                  <a class="hover_icon hover_icon_link" href="#">
                                    <img
                                      alt="Elderly Couples Issues"
                                      src="@/assets/img/service-7.jpg"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div class="sc_services_item_content">
                                <h4 class="sc_services_item_title">
                                  <a href="#">Elderly Couples Issues</a>
                                </h4>
                                <div class="sc_services_item_description">
                                  <p>
                                    Here’s another challenge that many married
                                    couples encounter in the later stages
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="swiper-slide">
                          <div class="sc_services_item_wrap">
                            <div class="sc_services_item sc_services_item_8 even">
                              <div class="sc_services_item_featured post_featured">
                                <div class="post_thumb" data-title="Depression Treatment">
                                  <a class="hover_icon hover_icon_link" href="#">
                                    <img
                                      alt="Depression Treatment"
                                      src="@/assets/img/service-8.jpg"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div class="sc_services_item_content">
                                <h4 class="sc_services_item_title">
                                  <a href="#">Depression Treatment</a>
                                </h4>
                                <div class="sc_services_item_description">
                                  <p>
                                    Depression is currently fourth among the top
                                    10 leading causes of the global burden
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                      <!-- Optional controls -->
                      <!-- <div
                        class="swiper-pagination sc_slider_pagination_wrap"
                        slot="pagination"
                      ></div>-->
                      <!-- <div slot="button-prev">
                        <div
                          class="sc_slider_swiper swiper-slider-container sc_slider_nopagination sc_slider_controls sc_slider_controls_bottom"
                        ></div>
                        <div class="sc_slider_controls_wrap">
                          <a class="sc_slider_prev" href="javascript:;"></a>
                        </div>
                      </div>
                      <div slot="button-next">
                        <div
                          class="sc_slider_swiper swiper-slider-container sc_slider_nopagination sc_slider_controls sc_slider_controls_bottom"
                        ></div>
                        <div class="sc_slider_controls_wrap">
                          <a class="sc_slider_next" href="#"></a>
                        </div>
                      </div>-->
                      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
                    </swiper>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- /How I Can Help You -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: 4000,
        loop: true,
        speed: 2800,
        grabCursor: true
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>

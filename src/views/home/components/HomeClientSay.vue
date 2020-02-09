<template>
  <div>
    <!-- WHAT HAPPY CLIENTS SAY -->
    <div class="page_content_wrap page_paddings_no testimonials_bg">
      <div class="content_wrap">
        <div class="content">
          <div
            class="itemscope post_item post_item_single post_featured_default post_format_standard"
          >
            <div class="wrapper">
              <h1
                class="h1_home sc_title sc_align_center margin_top_huge margin_bottom_null text_center testimonial_text"
              >
                Testimonials
              </h1>
              <div class="vc_custom_heading ls1px happy_clients">
                WHAT HAPPY CLIENTS SAY
              </div>

              <div
                class="sc_testimonials sc_testimonials_style_testimonials-3 margin_top_medium margin_bottom_huge index_testimonials"
              >
                <swiper :options="swiperOption">
                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="sc_testimonial_item">
                        <div class="sc_testimonial_content">
                          <p>
                            Being parents is sometimes hectic, and now me and my
                            husband understand that it's Ok to ask for
                            professional help. Instead of putting the
                            relationship between you and your children at risk,
                            you might want to try some couseling. Dr. Cloe
                            Brooks is an amazing woman, who helped our family to
                            deal with major problems. Thank you and God bless!
                          </p>
                        </div>
                        <div class="sc_testimonial_avatar">
                          <img
                            alt="Alex & Donna Racco"
                            src="@/assets/img/testimonials-1.jpg"
                          />
                        </div>
                        <div class="sc_testimonial_author">
                          <span class="sc_testimonial_author_name"
                            >Alex & Donna Racco</span
                          >
                          <span class="sc_testimonial_author_position"
                            >Accountant</span
                          >
                        </div>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="sc_testimonial_item">
                        <div class="sc_testimonial_content">
                          <p>
                            During my sessions with Dr. Brooks I feel like I am
                            speaking with a friend rather than a stranger. After
                            them I feel that i am a new person who is in charge
                            of her life, mind and actions. The Self-Esteem
                            Seminars have been truly amazing for all the
                            attendants, including myself. Thank you kindly and
                            good luck with the new book!
                          </p>
                        </div>
                        <div class="sc_testimonial_avatar">
                          <img
                            alt="Emily Smith"
                            src="@/assets/img/testimonials-2.jpg"
                          />
                        </div>
                        <div class="sc_testimonial_author">
                          <span class="sc_testimonial_author_name"
                            >Emily Smith</span
                          >
                          <span class="sc_testimonial_author_position"
                            >Housekeeper</span
                          >
                        </div>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide>
                    <div class="swiper-slide">
                      <div
                        id="sc_testimonials_419197376_3"
                        class="sc_testimonial_item"
                      >
                        <div class="sc_testimonial_content">
                          <p>
                            For me this was a wonderful experience. I thought
                            there would be no solution for countless issues in
                            our marriage, but Dr. Brooks has so far proven me
                            and my husband wrong. I appreciate your help a lot!
                            Your books are fantastic. Please continue working
                            with couples, and help people save their marriages!
                          </p>
                        </div>
                        <div class="sc_testimonial_avatar">
                          <img
                            alt="Samantha Lee"
                            src="@/assets/img/testimonials-3.jpg"
                          />
                        </div>
                        <div class="sc_testimonial_author">
                          <span class="sc_testimonial_author_name"
                            >Samantha Lee</span
                          >
                          <span class="sc_testimonial_author_position"
                            >Sales Manager</span
                          >
                        </div>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="sc_testimonial_item">
                        <div class="sc_testimonial_content">
                          <p>
                            I attended one of your conferences the other day,
                            and I must say that I am really impressed. For such
                            a delicate and young woman, Cloe Brooks seems to
                            have accomplished a lot and is truly the doctor who
                            will gladly offer her help. I recommend her services
                            to anyone who lives in struggle.
                          </p>
                        </div>
                        <div class="sc_testimonial_avatar">
                          <img
                            alt="Nicole Stone"
                            src="@/assets/img/testimonials-4.jpg"
                          />
                        </div>
                        <div class="sc_testimonial_author">
                          <span class="sc_testimonial_author_name"
                            >Nicole Stone</span
                          >
                          <span class="sc_testimonial_author_position"
                            >Manager</span
                          >
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /WHAT HAPPY CLIENTS SAY -->
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
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

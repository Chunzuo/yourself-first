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
                  <swiper-slide
                    v-for="(review, index) in reviews"
                    :key="`review-${index}`"
                  >
                    <div class="swiper-slide">
                      <div class="sc_testimonial_item">
                        <div class="sc_testimonial_content">
                          <p>{{ review.content }}</p>
                        </div>
                        <div class="sc_testimonial_author">
                          <span class="sc_testimonial_author_name">{{
                            review.patientName
                          }}</span>
                          <span class="sc_testimonial_author_position">{{
                            review.date
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>

                <div style="text-align: center;">
                  <router-link
                    class="sc_button sc_button_square sc_button_style_filled sc_button_size_small"
                    to="/testimonial"
                  >
                    Show more
                  </router-link>
                </div>
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
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: 4000,
        loop: true,
        speed: 2800,
        grabCursor: true
      },
      reviews: [
        {
          content:
            "My experience with Jillian Holguin was nothing short of life-changing. What started as therapy for generalized anxiety disorder and a recent breakup at the lead to the exploration and inner healing of my family life. She allowed me to vocalize things I'd never said out loud without judgment. She watched me cry and break down and hyperventilate and never made me feel weaker for it. Over the last two years, she has shown herself to be an astonishingly strong, honest, and genuine person with a real commitment to personal growth and helping other people. Her influence, her work, and the bond we share are things I am endlessly grateful for. I could not recommend her highly enough.",
          patientName: "",
          date: "Feb 05, 2020"
        },
        {
          content:
            "She’s so sweet and caring she’s really nice and goes out her way to go above and beyond understanding what’s wrong. One of a kind therapist",
          patientName: "Sophia C",
          date: "December 25, 2019"
        },
        {
          content:
            "Jillian’s feedback is unique, reassuring, and top of the line in therapeutic skills. I’ve been in therapy my whole life and love her approach.",
          patientName: "Melissa G",
          date: "September 13, 2019"
        },
        {
          content:
            "Jillian was very warm welcoming and kind. She could careless about money and really cared about my well being. She even forgot to collect my copay that’s how invested she was in my care. She can come off ingenuine but I think she genuinely is a generous soul and would go above and beyond for her clients.",
          patientName: "Carolyn M",
          date: "September 13, 2019"
        },
        {
          content:
            "Jillian is always respectable of my time in session. I've been in therapy before and I respect the fact that she's the only therapist I feel that is truly listening and provides feedback.",
          patientName: "Nick T",
          date: "May 22, 2019"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

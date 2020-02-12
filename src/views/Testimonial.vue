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
            <b>{{review.content}}</b>

            <div class="margin_left_small">
              —
              <em>{{review.clientName}}</em>
            </div>
            <!-- <div class="sc_line sc_line_position_center_center sc_line_style_solid"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setCurrentHeaderItem", "About");
    window.scrollTo(0, 0);
  },
  data() {
    return {
      reviews: [
        {
          content:
            "It was Jillian's self-love approach that kept me coming back. Jillian Knew how to put situations into perspective for me as well as making therapy fun.",
          clientName: "Julia"
        },
        {
          content:
            "I've been seeing Jillian for about a month and a half now. She helps guide me and educates me on useful methods to cope with issues in my life. It is such a pleasure seeing her each week and has significiantly helped me in my path towards self improvement.",
          clientName: "Casey"
        },
        {
          content:
            "Amazing doctor. I can really rely on Jillian to be there for me and be a positive support system.",
          clientName: "Daniel"
        },
        {
          content:
            "Really helped me get through issues I was having with my girlfriend and I!",
          clientName: "Natalia"
        },
        {
          content: "I am greatful for your support",
          clientName: "Kattie"
        },
        {
          content:
            "When I first spoke to Jillian, I felt immediately comfortable",
          clientName: "Justin"
        },
        {
          content:
            "She's so sweet and caring she's really nice and goes out her way to go above and beyond understanding what's wrong. One of a kind therapist",
          clientName: "Sophia"
        },
        {
          content:
            "Jillian was very warm welcoming and kind. She could careless about money and really cared about my well being. She even forgot to collect my copay that's how invested she was in my care. She can come off ingenuine but I think she genuinely is a generous soul and would go above and beyond for her clients.",
          clientName: "Carolyn"
        },
        {
          content:
            "She was SO helpful and truly an amazing therapist!! She really wants whats best for her patients.",
          clientName: "Marissa"
        },
        {
          content:
            "Jillian is Awesome, engaging and knows how to make therapy fun! I high recommend her!",
          clientName: "Julia"
        },
        {
          content:
            "I felt very comfortable opening up to her and I felt safe in her space",
          clientName: "Thomas"
        },
        {
          content:
            "Jillian has helped me for the past two years get through the toughest times in my life and. I can always count on her when I need her. I'm so grateful I am able to have her as a therapist as it has been hard to open up to anyone.",
          clientName: "Willbert"
        },
        {
          content:
            "I've been in therapy before and I really felt that Jillian was the first therapist that was actually engaging and listening to every detail I was saying. Its refreshing to know there are people like Jillian out there. You can really tell she goes above and beyond for her client's and is truly dedicated to her profession.",
          clientName: "Jennifer"
        },
        {
          content:
            "I admire Jillian's professionalism and her ability to meet her client's needs. She is truly admirable and genuinely wants whats best for her patients.",
          clientName: "Melissa"
        }
      ]
    };
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

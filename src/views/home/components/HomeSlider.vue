<template>
  <div>
    <carousel :perPage="1" :autoplay="true">
      <slide style="display: flex">
        <!-- <img
          src="@/assets/img/slide_bg1.jpeg"
          alt
          title="Empathy"
          data-bgposition="center center"
          data-bgfit="cover"
          data-bgrepeat="no-repeat"
          class="rev-slidebg"
          data-no-retina
          style="width: 100%"
        />-->
        <div class="slide1">
          <span id="slide1_text1">
            Put Yourself First -
            <p style="margin-top: 30px; font-size: 32px;">Let's begin your Better World.</p>
          </span>
          <div class="tp-caption rev-btn slide1_btn" id="slide-1-layer-3">More Information</div>
        </div>
        <!-- <p>Let's begin your better World</p> -->
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="css" scoped>
#slide1_text1 {
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: 65px;
  font-weight: 300;
  font-family: Aller;
  top: 250px;
  left: 100px;
}

.slide1_btn {
  left: 100px;
  top: 370px;
}

.slide1 {
  width: 100%;
  height: 600px;
  /* background-image: url("../../../assets/img/slide_bg1.jpeg"); */
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(250, 250, 250, 0.1)
    ),
    url("../../../assets/img/slide_bg1.jpeg");
  background-size: cover;
}
</style>

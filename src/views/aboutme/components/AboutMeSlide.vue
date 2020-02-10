<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <img src="@/assets/img/slide_img1.jpeg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide_img2.jpeg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide_img3.jpeg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide_img4.jpeg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide_img5.jpeg" alt />
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: 3000,
        loop: true,
        speed: 2800,
        grabCursor: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
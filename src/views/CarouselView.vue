<script setup>
import Carousel from "../components/Carousel.vue";
import CarouselContent from "../components/CarouselContent.vue";
import CarouselSlide from "../components/CarouselSlide.vue";
</script>

<script>
export default {
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
  },
  data() {
    return {
      slides: [
        {
          header: "Үйл ажиллагаа",
          description: "Мэдээллийн технологийн салбарт электроник суурьтай технологийн нэвтрүүлэлтийг хэрэгжүүлэгч СИМ /Систем инженерчлэл монгол/ компани нь 2012 онд байгуулагдан үйл ажиллагаа явуулж байна.",
        },
        {
          header: "Алсын хараа",
          description: "Олон улсад өрсөлдөхүйц үндэсний тэргүүлэгч электроникийн компани байна.",
        },
        {
          header: "Эрхэм зорилго",
          description: "Чадварлаг инженерүүд, инновацлаг технологийн хүчээр дэвшилтэт бүтээгдэхүүн бүтээж, хэрэглэгчдийн амьдралд эерэг өөрчлөлтийг авчирна.",
        },
        {
          header: "Үнэт зүйл",
          description: "Чадварлаг инженерүүд, инновацлаг технологи",
        },
      ],
      visibleSlide: 0,
    };
  },
};
</script>

<template>
  <h3 class="why-screen__header">{{ $t('companyName') }}</h3>
  
  <p class="why-screen__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum perferendis labore? Culpa architecto quia consequatur voluptas sequi, esse laborum!</p>
  <Carousel @next="next" @prev="prev">
    <CarouselSlide
      v-for="(slide, index) in slides"
      :key="slide"
      :index="index"
      :visibleSlide="visibleSlide"
      :backgroundImg="slide.imgLink"
    >
      <CarouselContent
        :header="slide.header"
        :description="slide.description"
      ></CarouselContent>
    </CarouselSlide>
  </Carousel>
</template>

<style scoped>
.why-screen__header {
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: var(--text-color-primary)
}

.why-screen__description {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--muted-color)
}

@media (max-width: 541px) {
  .why-screen__description{
    font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: var(--muted-color)
}
.why-screen__header {
  font-weight: 700;
  font-size: 30px;
  text-align: center;
}
}
</style>

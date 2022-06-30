<template>
  <div class="container mx-auto px-4">
    <swiper class="swiper" :modules="modules" :space-between="30" :centered-slides="true" :navigation="true"
      :pagination="{
        clickable: true
      }" :autoplay="{
  delay: 3000,
  disableOnInteraction: false
}">
      <swiper-slide class="slide flex justify-center gap-4 items-center pr-5"><img
          src="../assets/images/slides/slide-1.png" class="h-40 md:h-60 lg:h-80">
        <p class="hidden xl:flex xl:flex-col lg:text-2xl xl:text-3xl">REDES SOCIALES</p>
      </swiper-slide>
      <swiper-slide class="slide flex justify-center gap-4 items-center pr-5"><img
          src="../assets/images/slides/slide-2.png" class="h-40 md:h-60 lg:h-80">
        <p class="hidden xl:flex xl:flex-col lg:text-2xl xl:text-3xl">RALCO <span class="text-base">DISTRIBUIDOR
            EXCLUSIVO</span> <br> <span class="text-sm">NEUMATICOS DE
            ORIGEN INDIO</span>
        </p>
      </swiper-slide>
      <swiper-slide class="slide flex justify-center gap-4 items-center pr-5"><img
          src="../assets/images/slides/slide-3.png" class="h-40 md:h-60 lg:h-80">
        <p class="hidden xl:flex xl:flex-col lg:text-2xl xl:text-3xl">LUBRICANTE</p>
      </swiper-slide>
      <swiper-slide class="slide flex justify-center gap-4 items-center pr-5"><img
          src="../assets/images/slides/slide-4.png" class="h-40 md:h-60 lg:h-80">
        <p class="hidden xl:flex xl:flex-col lg:text-2xl xl:text-3xl">NEUMÁTICOS <span class="text-base">AUTOS,
            CAMIONETAS,
            CAMIONES...</span></p>
      </swiper-slide>
      <swiper-slide class="slide flex justify-center gap-4 items-center pr-5"><img
          src="../assets/images/slides/slide-5.png" class="h-40 md:h-60 lg:h-80">
        <p class="hidden xl:flex xl:flex-col lg:text-2xl xl:text-3xl">METRO <span class="text-base">CUBIERTAS
            BICICLETAS</span></p>
      </swiper-slide>
      <swiper-slide class="slide flex justify-center gap-4 items-center pr-5"><img
          src="../assets/images/slides/slide-6.png" class="h-40 md:h-60 lg:h-80">
        <p class="hidden xl:flex xl:flex-col lg:text-2xl xl:text-3xl">METRO <br> <span class="text-base">CAMARAS
            BICICLETAS</span> <span class="text-sm">VALVULA DE AUTO</span></p>
      </swiper-slide>

    </swiper>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default defineComponent({
  name: 'swiper-example-autoplay',
  title: 'Autoplay',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay]
    }
  }
})
</script>

<style scoped>
</style>
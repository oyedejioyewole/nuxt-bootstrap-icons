<script lang="ts" setup>
import { register, type SwiperContainer } from 'swiper/element/bundle'

const { data, refresh } = useAsyncData('slide-icons', async () => getIcons(6))
const slides = useTemplateRef<SwiperContainer>('slides')

watch(slides, (_new) => {
  if (!_new) return

  Object.assign(_new, {
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: true,
    },
    breakpoints: {
      '@0.00': {
        slidesPerView: 2,
      },
      '@0.75': {
        slidesPerView: 3,
      },
      '@1.00': {
        direction: 'vertical',
        slidesPerView: 3,
      },
    },
    spaceBetween: 30,
    on: {
      activeIndexChange: () => refresh(),
    },
  })

  _new.initialize()
})

register()
</script>

<template>
  <ClientOnly>
    <swiper-container
      ref="slides"
      class="order-first w-full lg:order-last lg:basis-[15%]"
      init="false"
    >
      <swiper-slide
        v-for="(icon, index) of data"
        :key="index"
        class="flex items-center justify-center rounded-lg border border-primary-900 p-10 text-primary-900 lg:rounded-l-lg lg:border-dashed lg:hover:border-solid lg:hover:bg-primary-900/10 dark:border-primary-100 dark:text-primary-100 dark:hover:bg-primary-100/10"
      >
        <BootstrapIcon
          class="text-3xl lg:text-5xl 2xl:text-7xl"
          :name="icon"
        />
      </swiper-slide>
    </swiper-container>

    <template #fallback>
      <div
        class="order-first flex flex-row gap-y-[30px] lg:order-last lg:basis-[15%] lg:flex-col"
      >
        <div
          v-for="(_, index) in 3"
          :key="index"
          class="h-1/3 w-1/3 rounded-lg bg-primary-900/10 lg:h-1/3 lg:w-full"
        />
      </div>
    </template>
  </ClientOnly>
</template>

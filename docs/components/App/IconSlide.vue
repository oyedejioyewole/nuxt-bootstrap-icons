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
      1024: {
        direction: 'vertical',
      },
    },
    slidesPerView: 3,
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
      class="basis-[15%]"
      init="false"
    >
      <swiper-slide
        v-for="(icon, index) of data"
        :key="index"
        class="flex items-center justify-center border-dashed border-primary-900 hover:border-solid hover:bg-primary-900/10 lg:border dark:border-primary-100 dark:hover:bg-primary-100/10 rounded-l-lg"
      >
        <BootstrapIcon
          class="text-5xl text-primary-900 dark:text-primary-100"
          :name="icon"
        />
      </swiper-slide>
    </swiper-container>

    <template #fallback>
      <div class="flex flex-col gap-y-[30px] w-[15%]">
        <div
          v-for="(_, index) in 3"
          :key="index"
          class="h-1/3 w-full bg-primary-900/10 rounded-lg"
        />
      </div>
    </template>
  </ClientOnly>
</template>

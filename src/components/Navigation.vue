<template>
  <header>
    <div class="contact-info bg-sky-100 text-sm" v-if="!mobile">
      <div class="container flex sm:justify-center space-x-4 text-gray-600 gap-4 items-center m-auto">
        <a href="#"><i class="fa-solid fa-phone"></i> 0800-666-2465</a>
        <a href="#">Oficinas Comerciales (223) 482-0388 / (223) 482-8822 int 106</a>
        <a href="#">info@oagsa.com</a>
        <a href="https://www.facebook.com/profile.php?id=100063653886728" target="_blank"
          class="hover:text-black p-1"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/oag.s.a/" target="_blank" class="hover:text-black"><i
            class="fa-brands fa-instagram p-2"></i></a>
      </div>
    </div>
    <nav>

    </nav>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const scrollNav = ref(false)
const windowWidth = ref(Number)
const mobile = ref(Boolean())

onMounted(() => {
  window.addEventListener('resize', checkScreen)
  checkScreen
})

onMounted(() => {
  window.addEventListener('scroll', updatedScroll)
  updatedScroll
})

const updatedScroll = () => {
  const scrollPosition = window.scrollY
  if (scrollPosition > 500) {
    scrollNav.value = true
    return
  }
  scrollNav.value = false
}

const checkScreen = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value <= 800) {
    mobile.value = true
    return
  }
  mobile.value = false
  return
}
</script>
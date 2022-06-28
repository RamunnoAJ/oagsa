<template>
  <header>
    <div class="contact-info bg-sky-100 text-xs" v-if="!mobile">
      <div class="container flex sm:justify-center space-x-4 text-gray-600 gap-4 items-center m-auto">
        <a href="#" class="hover:text-black ease-in-out duration-300"><i class="fa-solid fa-phone"></i>
          0800-666-2465</a>
        <a href="#" class="hover:text-black ease-in-out duration-300">Oficinas Comerciales (223) 482-0388 / (223)
          482-8822 int 106</a>
        <a href="#" class="hover:text-black ease-in-out duration-300">info@oagsa.com</a>
        <a href="https://www.facebook.com/profile.php?id=100063653886728" target="_blank"
          class="hover:text-black p-1 ease-in-out duration-300"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/oag.s.a/" target="_blank"
          class="hover:text-black ease-in-out duration-300"><i class="fa-brands fa-instagram p-2"></i></a>
      </div>
    </div>
    <nav class="flex items-center justify-between flex-wrap p-6 container mx-auto">
      <div class="flex items-center flex-shrink-0 mr-6">
        <img class="fill-current w-32 lg:w-48 mr-2" src="../assets/images/logo.png" alt="branding logo">
      </div>
      <div class="block lg:hidden">
        <button @click="toggleMobileNav"
          class="flex items-center px-3 py-2 border rounded text-amber-600 border-amber-800 hover:text-black hover:border-black ease-in-out duration-300">
          <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center"
        :class="{ 'hidden': mobileNav }">
        <ul class="text-md lg:flex-grow font-bold">
          <li class="block mt-4 lg:inline-block lg:mt-0 hover:text-amber-600 mx-4 ease-in-out duration-300">
            <router-link :to="{ name: 'home' }">Inicio</router-link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 hover:text-amber-600 mx-4 ease-in-out duration-300">
            <router-link :to="{ name: '' }">Empresa</router-link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 hover:text-amber-600 mx-4 ease-in-out duration-300">
            <router-link :to="{ name: '' }">Catalogo</router-link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 hover:text-amber-600 mx-4 ease-in-out duration-300">
            <router-link :to="{ name: '' }">Novedades</router-link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 hover:text-amber-600 mx-4 ease-in-out duration-300">
            <router-link :to="{ name: '' }">Contactenos</router-link>
          </li>
        </ul>
        <router-link :to="{ name: '' }">
          <div
            class="flex text-xs text-white text-center items-center py-2 px-4 border rounded border-sky-300 bg-sky-300 hover:bg-sky-400 ease-in-out duration-300">
            <i class="fa-solid fa-lock mr-1"></i>
            <p>Login</p>
          </div>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const scrollNav = ref(false)
const windowWidth = ref(Number)
const mobile = ref(Boolean())
const mobileNav = ref(true)

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
  mobileNav.value = true
  return
}

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
}
</script>
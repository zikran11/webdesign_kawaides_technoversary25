<template>
  <nav id="main-nav" :class="['fixed w-full z-50 transition-all duration-500', scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6']">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-gradient-to-br from-earth-500 to-ocean-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <Leaf :size="24" class="text-white" />
          </div>
          <span :class="['font-bold text-xl transition-colors', scrolled ? 'text-earth-800' : 'text-white']">
            EcoVibe
          </span>
        </router-link>

        <button @click="toggleMenu" class="lg:hidden">
          <Menu v-if="!menuOpen" :size="28" :class="scrolled ? 'text-earth-800' : 'text-white'" />
          <X v-else :size="28" :class="scrolled ? 'text-earth-800' : 'text-white'" />
        </button>

        <div :class="['lg:flex items-center gap-8', menuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-xl p-8 lg:relative lg:w-auto lg:bg-transparent lg:shadow-none lg:p-0' : 'hidden']">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            :class="['font-semibold transition-all hover:text-earth-500', scrolled || menuOpen ? 'text-earth-800' : 'text-white', 'relative group']"
            @click="menuOpen = false"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-earth-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
          <button @click="handleDonateClick" class="px-6 py-2.5 bg-gradient-to-r from-earth-500 to-ocean-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
            Donasi Sekarang
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Leaf, Menu, X } from 'lucide-vue-next'
import Swal from 'sweetalert2'

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/about' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleDonateClick = () => {
  Swal.fire({
    title: 'Terima Kasih!',
    html: 'Donasi Anda membantu kami melindungi bumi untuk generasi mendatang. <br><br><strong>Transfer ke:</strong><br>Bank Hijau: 1234-5678-9000',
    icon: 'success',
    confirmButtonText: 'Tutup',
    confirmButtonColor: '#22c55e'
  })
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

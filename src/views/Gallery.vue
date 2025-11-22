<template>
  <div id="gallery-page" class="min-h-screen bg-gradient-to-br from-earth-50 to-ocean-50">
    <section id="gallery-hero" class="relative py-32 bg-gradient-to-br from-earth-600 to-ocean-600 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center gallery-hero-content">
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-6">Galeri Kami</h1>
        <p class="text-2xl text-white/90 max-w-3xl mx-auto">
          Dokumentasi perjalanan kami dalam menjaga kelestarian bumi
        </p>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4 mb-12 filter-buttons">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105',
              activeCategory === category 
                ? 'bg-gradient-to-r from-earth-500 to-ocean-500 text-white shadow-lg' 
                : 'bg-white text-earth-700 hover:bg-earth-50'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(item, index) in filteredGallery" 
            :key="index" 
            class="gallery-item group cursor-pointer"
            @click="openLightbox(item)"
          >
            <div class="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <img 
                :src="item.image" 
                :alt="item.title" 
                class="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span class="text-ocean-300 text-sm font-semibold mb-2">{{ item.category }}</span>
                <h3 class="text-white text-xl font-bold mb-2">{{ item.title }}</h3>
                <p class="text-white/80 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div 
      v-if="lightboxOpen" 
      class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <button class="absolute top-8 right-8 text-white hover:text-earth-400 transition-colors" @click="closeLightbox">
        <X :size="36" />
      </button>
      <div class="max-w-5xl w-full" @click.stop>
        <img 
          :src="currentImage.image" 
          :alt="currentImage.title" 
          class="w-full rounded-2xl shadow-2xl lightbox-image"
        />
        <div class="text-center mt-6 lightbox-info">
          <h3 class="text-white text-3xl font-bold mb-2">{{ currentImage.title }}</h3>
          <p class="text-white/80 text-lg">{{ currentImage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { X } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import mangroveImg from '../assets/mangrove.jpg'
import daurulangImg from '../assets/daurulang.jpg'
import hematairImg from '../assets/hematair.png'
import seminarImg from '../assets/seminar.jpg'

const activeCategory = ref('Semua')
const lightboxOpen = ref(false)
const currentImage = ref(null)

const categories = ['Semua', 'Penanaman Pohon', 'Konservasi Air', 'Daur Ulang', 'Edukasi']

const galleryItems = [
  {
    category: 'Penanaman Pohon',
    title: 'Program Penanaman di Jawa Barat',
    description: '5.000 pohon ditanam oleh 200 relawan',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=600&fit=crop&search_term=planting,trees,volunteers,environmental'
  },
  {
    category: 'Konservasi Air',
    title: 'Kampanye Hemat Air',
    description: 'Edukasi masyarakat tentang pentingnya konservasi air',
    image: hematairImg
  },
  {
    category: 'Daur Ulang',
    title: 'Workshop Kreasi Sampah',
    description: 'Mengubah sampah plastik menjadi produk berguna',
    image: daurulangImg},
  {
    category: 'Edukasi',
    title: 'Seminar Lingkungan di Sekolah',
    description: 'Membangun kesadaran lingkungan sejak dini',
    image: seminarImg
  },
  {
    category: 'Penanaman Pohon',
    title: 'Reboisasi Hutan Lindung',
    description: 'Memulihkan ekosistem hutan yang telah rusak',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&h=600&fit=crop&search_term=forest,reforestation,nature,trees'
  },
  {
    category: 'Konservasi Air',
    title: 'Pembersihan Sungai',
    description: 'Aksi bersih-bersih sungai dari sampah plastik',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&h=600&fit=crop&search_term=river,cleaning,volunteers,water'
  },
  {
    category: 'Daur Ulang',
    title: 'Bank Sampah Komunitas',
    description: 'Sistem pengelolaan sampah berbasis masyarakat',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&h=600&fit=crop&search_term=waste,management,recycling,community'
  },
  {
    category: 'Edukasi',
    title: 'Kampanye Go Green',
    description: 'Sosialisasi gaya hidup ramah lingkungan',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=600&fit=crop&search_term=campaign,green,environmental,awareness'
  },
  {
    category: 'Penanaman Pohon',
    title: 'Mangrove Conservation',
    description: 'Penanaman mangrove untuk lindungi pesisir',
    image: mangroveImg}
]

const filteredGallery = computed(() => {
  if (activeCategory.value === 'Semua') {
    return galleryItems
  }
  return galleryItems.filter(item => item.category === activeCategory.value)
})

const openLightbox = (item) => {
  currentImage.value = item
  lightboxOpen.value = true
  gsap.from('.lightbox-image', {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    ease: 'power3.out'
  })
  gsap.from('.lightbox-info', {
    opacity: 0,
    y: 30,
    duration: 0.5,
    delay: 0.2,
    ease: 'power3.out'
  })
}

const closeLightbox = () => {
  lightboxOpen.value = false
  currentImage.value = null
}

onMounted(() => {
  gsap.from('.gallery-hero-content', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.filter-buttons', {
    scrollTrigger: {
      trigger: '.filter-buttons',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  })

  gsap.from('.gallery-item', {
    scrollTrigger: {
      trigger: '.gallery-item',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 60,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out'
  })
})
</script>

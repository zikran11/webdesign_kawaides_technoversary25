<template>
  <div id="home-page" class="min-h-screen">
    <section id="home-hero" class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-earth-600 via-ocean-600 to-earth-700"></div>
      <div class="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&search_term=forest,nature,trees,green"
          alt="Nature Background" class="w-full h-full object-cover" />
      </div>
      <div class="relative z-10 text-center px-6 hero-content">
        <div class="floating-element mb-8">
          <div class="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Sprout :size="48" class="text-white" />
          </div>
        </div>
        <h1 class="hero-title text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Bumi Kita,<br />
          <span class="text-ocean-200">Tanggung Jawab Kita</span>
        </h1>
        <p class="hero-subtitle text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Mari bersama menjaga kelestarian alam untuk masa depan yang lebih hijau dan berkelanjutan
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
          <router-link to="/about"
            class="group px-8 py-4 bg-white text-earth-700 rounded-full font-bold text-lg hover:bg-earth-50 transition-all transform hover:scale-105 hover:shadow-2xl">
            Pelajari Lebih Lanjut
            <ArrowRight :size="20" class="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </router-link>
          <router-link to="/gallery"
            class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all transform hover:scale-105">
            Lihat Galeri
          </router-link>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <ChevronDown :size="32" class="text-white animate-bounce" />
      </div>
    </section>

    <section id="home-mission" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="mission-image">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop&search_term=environmental,conservation,nature,sustainability"
              alt="Environmental Mission" class="rounded-3xl shadow-2xl drop-shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
          </div>
          <div class="mission-text space-y-6">
            <h2 class="text-5xl font-bold text-earth-800">
              Misi Kami untuk Bumi
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              EcoVibe adalah gerakan edukasi dan kampanye lingkungan yang bertujuan meningkatkan kesadaran masyarakat
              tentang pentingnya menjaga kelestarian alam.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Melalui berbagai program inovatif, kami mengajak setiap individu untuk berkontribusi dalam menciptakan
              perubahan positif bagi lingkungan.
            </p>
            <div class="flex gap-4 pt-4">
              <div class="stat-card flex-1 bg-earth-50 p-6 rounded-2xl">
                <div class="text-4xl font-bold text-earth-600">50K+</div>
                <div class="text-sm text-earth-700 mt-2">Pohon Ditanam</div>
              </div>
              <div class="stat-card flex-1 bg-ocean-50 p-6 rounded-2xl">
                <div class="text-4xl font-bold text-ocean-600">100+</div>
                <div class="text-sm text-ocean-700 mt-2">Komunitas Aktif</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="home-features" class="py-24 bg-gradient-to-br from-earth-50 to-ocean-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 feature-header">
          <h2 class="text-5xl font-bold text-earth-800 mb-4">Program Unggulan</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Berbagai inisiatif kreatif untuk menjaga kelestarian lingkungan
          </p>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div
              class="w-16 h-16 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 feature-icon">
              <Trees :size="32" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-4">Penanaman Pohon</h3>
            <p class="text-gray-600 leading-relaxed">Program penanaman pohon massal di berbagai wilayah untuk
              mengembalikan hutan yang telah rusak dan meningkatkan kualitas udara.</p>
          </div>

          <div
            class="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div
              class="w-16 h-16 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 feature-icon">
              <Droplet :size="32" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-4">Konservasi Air</h3>
            <p class="text-gray-600 leading-relaxed">Edukasi pentingnya menghemat air dan menjaga sumber air bersih agar
              tetap lestari untuk kehidupan masa depan.</p>
          </div>

          <div
            class="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div
              class="w-16 h-16 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 feature-icon">
              <RecycleIcon :size="32" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-4">Daur Ulang Sampah</h3>
            <p class="text-gray-600 leading-relaxed">Kampanye kreatif mengolah sampah menjadi barang bernilai ekonomis
              dan mengurangi pencemaran lingkungan.</p>
          </div>

          <div
            class="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div
              class="w-16 h-16 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 feature-icon">
              <Users :size="32" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-4">Komunitas Hijau</h3>
            <p class="text-gray-600 leading-relaxed">Membangun jaringan komunitas peduli lingkungan di seluruh Indonesia
              untuk aksi bersama yang lebih berdampak.</p>
          </div>

          <div
            class="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div
              class="w-16 h-16 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 feature-icon">
              <BookOpen :size="32" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-4">Edukasi Lingkungan</h3>
            <p class="text-gray-600 leading-relaxed">Workshop dan seminar interaktif tentang cara hidup ramah lingkungan
              untuk berbagai kalangan usia.</p>
          </div>

          <div
            class="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div
              class="w-16 h-16 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 feature-icon">
              <Heart :size="32" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-4">Kampanye Sosial</h3>
            <p class="text-gray-600 leading-relaxed">Gerakan media sosial yang menginspirasi jutaan orang untuk
              mengambil tindakan nyata bagi kelestarian bumi.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="home-cta" class="py-32 bg-gradient-to-r from-earth-600 to-ocean-600 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10 cta-content">
        <h2 class="text-5xl md:text-6xl font-bold text-white mb-6">
          Bergabunglah dengan Gerakan Hijau
        </h2>
        <p class="text-xl text-white/90 mb-10">
          Setiap tindakan kecil membawa perubahan besar. Mulai perjalanan hijau Anda bersama kami hari ini!
        </p>
        <router-link to="/contact"
          class="inline-block px-10 py-5 bg-white text-earth-700 rounded-full font-bold text-lg hover:bg-earth-50 transition-all transform hover:scale-105 shadow-2xl">
          Hubungi Kami Sekarang
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {
  Sprout,
  ArrowRight,
  ChevronDown,
  Trees,       // icon pengganti TreeDeciduous
  Droplet,
  RecycleIcon,
  Users,
  BookOpen,
  Heart
} from 'lucide-vue-next'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.hero-title', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  })

  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  })

  gsap.from('.hero-buttons', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.7,
    ease: 'power3.out'
  })

  gsap.to('.floating-element', {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  gsap.from('.mission-image', {
    scrollTrigger: {
      trigger: '.mission-image',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -100,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.mission-text', {
    scrollTrigger: {
      trigger: '.mission-text',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.stat-card', {
    scrollTrigger: {
      trigger: '.stat-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    // prevent GSAP from immediately applying the 'from' values
    // so elements don't remain hidden if ScrollTrigger doesn't fire
    immediateRender: false,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: 'back.out(1.7)'
  })

  gsap.from('.feature-header', {
    scrollTrigger: {
      trigger: '.feature-header',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    immediateRender: false,
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '.feature-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    immediateRender: false,
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out'
  })

  gsap.from('.cta-content', {
    scrollTrigger: {
      trigger: '.cta-content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: 'back.out(1.7)'
  })
})
</script>

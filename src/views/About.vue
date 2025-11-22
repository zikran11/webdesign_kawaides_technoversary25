<template>
  <div id="about-page" class="min-h-screen">
    <section id="about-hero" class="relative py-32 bg-gradient-to-br from-ocean-600 to-earth-600 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=800&fit=crop&search_term=nature,mountains,landscape,environmental" 
          alt="About Background" 
          class="w-full h-full object-cover"
        />
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center about-hero-content">
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-6">Tentang EcoVibe</h1>
        <p class="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Gerakan kolektif untuk menciptakan perubahan positif bagi lingkungan hidup kita
        </p>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div class="lg:col-span-2 story-image">
            <div class="relative">
              <img 
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=700&fit=crop&search_term=beach,ocean,coast,environmental" 
                alt="Our Story" 
                class="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-3xl opacity-50"></div>
            </div>
          </div>
          <div class="lg:col-span-3 story-text space-y-6">
            <h2 class="text-5xl font-bold text-earth-800 mb-8">Kisah Kami</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              EcoVibe hadir sebagai inisiatif kreatif untuk mengajak masyarakat lebih peduli terhadap lingkungan. Website ini dibuat sebagai platform edukasi dan kampanye hijau yang menginspirasi perubahan positif.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Dimulai dari sebuah proyek kecil penanaman pohon, EcoVibe kini berkembang menjadi gerakan komunitas dengan misi sederhana: menciptakan masa depan yang lebih bersih, sehat, dan berkelanjutan bagi semua.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Melalui artikel, galeri kegiatan, dan program donasi, EcoVibe berupaya mendorong lebih banyak orang untuk mengambil langkah nyata dalam menjaga bumi.            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-earth-50 to-ocean-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 values-header">
          <h2 class="text-5xl font-bold text-earth-800 mb-4">Nilai-Nilai Kami</h2>
          <p class="text-xl text-gray-600">Prinsip yang memandu setiap langkah kami</p>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="value-card text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <div class="w-20 h-20 mx-auto bg-gradient-to-br from-earth-400 to-ocean-400 rounded-full flex items-center justify-center mb-6 value-icon">
              <Target :size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-3">Komitmen</h3>
            <p class="text-gray-600">Dedikasi penuh terhadap pelestarian lingkungan dalam setiap tindakan</p>
          </div>

          <div class="value-card text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <div class="w-20 h-20 mx-auto bg-gradient-to-br from-earth-400 to-ocean-400 rounded-full flex items-center justify-center mb-6 value-icon">
              <Users :size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-3">Kolaborasi</h3>
            <p class="text-gray-600">Kekuatan bersama untuk menciptakan perubahan yang lebih besar</p>
          </div>

          <div class="value-card text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <div class="w-20 h-20 mx-auto bg-gradient-to-br from-earth-400 to-ocean-400 rounded-full flex items-center justify-center mb-6 value-icon">
              <Lightbulb :size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-3">Inovasi</h3>
            <p class="text-gray-600">Solusi kreatif untuk tantangan lingkungan masa kini</p>
          </div>

          <div class="value-card text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <div class="w-20 h-20 mx-auto bg-gradient-to-br from-earth-400 to-ocean-400 rounded-full flex items-center justify-center mb-6 value-icon">
              <Shield :size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-3">Integritas</h3>
            <p class="text-gray-600">Transparansi dan tanggung jawab dalam setiap program</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 team-header">
          <h2 class="text-5xl font-bold text-earth-800 mb-4">Tim Kami</h2>
          <p class="text-xl text-gray-600">Orang-orang di balik gerakan EcoVibe</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          <div v-for="(member, index) in team.slice(0, 2)" :key="index" class="team-card group w-full max-w-sm">
            <div class="relative overflow-hidden rounded-3xl mb-6">
              <img 
                :src="member.image" 
                :alt="member.name" 
                class="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p class="text-white text-sm">{{ member.bio }}</p>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-earth-800 mb-1 text-center">{{ member.name }}</h3>
            <p class="text-ocean-600 font-semibold text-center">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 bg-gradient-to-r from-earth-600 to-ocean-600 achievements-section">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-white mb-4">Pencapaian Kami</h2>
          <p class="text-xl text-white/90">Dampak nyata yang telah kami ciptakan</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(achievement, index) in achievements" :key="index" class="achievement-card text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl">
            <div class="text-5xl font-bold text-white mb-2">{{ achievement.number }}</div>
            <div class="text-white/90">{{ achievement.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Target, Users, Lightbulb, Shield, Award } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import zikranImg from '../assets/zikran.jpg'
import shafiraImg from '../assets/shafira1.jpg'

const team = [
  {
    name: 'Muhammad Zikran Mazaya Rinadi',
    role: 'Founder & CEO',
    image: zikranImg
  },
  {
    name: 'Shafira Nurliza',
    role: 'Program Director',
    image: shafiraImg
  },
]

const achievements = [
  { number: '50K+', label: 'Pohon Ditanam' },
  { number: '100+', label: 'Komunitas Aktif' },
  { number: '200+', label: 'Program Terlaksana' },
  { number: '1M+', label: 'Orang Terinspirasi' }
]

onMounted(() => {
  gsap.from('.about-hero-content', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.story-image', {
    scrollTrigger: {
      trigger: '.story-image',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -100,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.story-text', {
    scrollTrigger: {
      trigger: '.story-text',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.values-header', {
    scrollTrigger: {
      trigger: '.values-header',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    // prevent immediate hiding before ScrollTrigger runs
    immediateRender: false,
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.value-card', {
    scrollTrigger: {
      trigger: '.value-card',
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

  gsap.from('.team-header', {
    scrollTrigger: {
      trigger: '.team-header',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.team-card', {
    scrollTrigger: {
      trigger: '.team-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 60,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.achievement-card', {
    scrollTrigger: {
      trigger: '.achievements-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.1,
    duration: 0.8,
    ease: 'back.out(1.7)'
  })
})
</script>

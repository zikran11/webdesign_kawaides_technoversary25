<template>
  <div id="contact-page" class="min-h-screen">
    <section id="contact-hero" class="relative py-32 bg-gradient-to-br from-ocean-600 to-earth-600 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center contact-hero-content">
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-6">Hubungi Kami</h1>
        <p class="text-2xl text-white/90 max-w-3xl mx-auto">
          Mari berkolaborasi untuk menciptakan masa depan yang lebih hijau
        </p>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-earth-50 to-ocean-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div class="contact-info space-y-8">
            <h2 class="text-4xl font-bold text-earth-800 mb-8">Informasi Kontak</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Kami senang mendengar dari Anda! Baik untuk kolaborasi, pertanyaan, atau sekadar berbagi ide tentang
              pelestarian lingkungan, jangan ragu untuk menghubungi kami.
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-earth-800 mb-1">Email</h3>
                  <p class="text-gray-600">info@ecovibe.com</p>
                  <p class="text-gray-600">partnership@ecovibe.com</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-earth-800 mb-1">Telepon</h3>
                  <p class="text-gray-600">‪+62 812 3456 7890‬</p>
                  <p class="text-gray-600">‪+62 821 9876 5432‬</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-earth-400 to-ocean-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-earth-800 mb-1">Alamat</h3>
                  <p class="text-gray-600">Jl. Hijau Lestari No. 123</p>
                  <p class="text-gray-600">Jakarta Selatan 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-3xl shadow-xl">
              <h2 class="text-3xl font-bold text-earth-800 mb-8">Kirim Pesan</h2>
              <div class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-semibold text-earth-800 mb-2">Nama Lengkap</label>
                  <input type="text" id="name" v-model="formData.name" required
                    class="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-earth-500 focus:ring-2 focus:ring-earth-200 outline-none transition-all"
                    placeholder="Masukkan nama Anda" />
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-earth-800 mb-2">Email</label>
                  <input type="email" id="email" v-model="formData.email" required
                    class="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-earth-500 focus:ring-2 focus:ring-earth-200 outline-none transition-all"
                    placeholder="nama@email.com" />
                </div>

                <div>
                  <label for="subject" class="block text-sm font-semibold text-earth-800 mb-2">
                    Subjek
                  </label>

                  <select id="subject" v-model="formData.subject" required class="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-earth-500 
           focus:ring-2 focus:ring-earth-200 outline-none transition-all">
                    <option disabled value="">Pilih subjek</option>
                    <option>Menjadi Relawan</option>
                    <option>Kerjasama</option>
                    <option>Donasi</option>
                    <option>Informasi Umum</option>
                    <option>Lainnya</option>
                  </select>
                </div>


                <div>
                  <label for="message" class="block text-sm font-semibold text-earth-800 mb-2">Pesan</label>
                  <textarea id="message" v-model="formData.message" required rows="6"
                    class="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-earth-500 focus:ring-2 focus:ring-earth-200 outline-none transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."></textarea>
                </div>

                <button type="submit"
                  class="w-full px-8 py-4 bg-gradient-to-r from-earth-500 to-ocean-500 text-white rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12 social-header">
          <h2 class="text-4xl font-bold text-earth-800 mb-4">Ikuti Kami di Media Sosial</h2>
          <p class="text-xl text-gray-600">Dapatkan update terbaru tentang program dan kegiatan kami</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'
import Swal from 'sweetalert2'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  Swal.fire({
    title: 'Pesan Terkirim!',
    text: 'Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.',
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#22c55e'
  })
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

onMounted(() => {
  gsap.from('.contact-hero-content', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -100,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.social-header', {
    scrollTrigger: {
      trigger: '.social-header',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.social-icons a', {
    scrollTrigger: {
      trigger: '.social-icons',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.8,
    ease: 'back.out(1.7)'
  })
})
</script>

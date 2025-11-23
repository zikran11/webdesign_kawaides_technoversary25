<template>
  <footer id="main-footer" class="bg-gradient-to-br from-earth-900 via-earth-800 to-ocean-900 text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-12 h-12 bg-gradient-to-br from-earth-500 to-ocean-500 rounded-full flex items-center justify-center">
              <Leaf :size="28" class="text-white" />
            </div>
            <span class="font-bold text-2xl">EcoVibe</span>
          </div>
          <p class="text-earth-100 leading-relaxed">
            Bersama menjaga bumi, menciptakan masa depan yang berkelanjutan untuk generasi mendatang.
          </p>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-4">Navigasi</h3>
          <ul class="space-y-2">
            <li v-for="link in navLinks" :key="link.path">
              <router-link :to="link.path" class="text-earth-100 hover:text-earth-400 transition-colors">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-4">Hubungi Kami</h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-earth-100">
              <Mail :size="18" class="text-ocean-400" />
              <span>info@ecovibe.org</span>
            </li>
            <li class="flex items-center gap-2 text-earth-100">
              <Phone :size="18" class="text-ocean-400" />
              <span>+62 812 3456 7890</span>
            </li>
            <li class="flex items-center gap-2 text-earth-100">
              <MapPin :size="18" class="text-ocean-400" />
              <span>Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-4">Ikuti Kami</h3>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 bg-earth-700 hover:bg-earth-600 rounded-full flex items-center justify-center transition-colors">
              <Facebook :size="20" />
            </a>
            <a href="#" class="w-10 h-10 bg-earth-700 hover:bg-earth-600 rounded-full flex items-center justify-center transition-colors">
              <Instagram :size="20" />
            </a>
            <a href="#" class="w-10 h-10 bg-earth-700 hover:bg-earth-600 rounded-full flex items-center justify-center transition-colors">
              <Twitter :size="20" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-earth-700 py-4">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center text-sm text-earth-200">
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-vue-next'

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/about' },
]
</script>

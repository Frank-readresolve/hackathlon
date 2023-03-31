<script>
import HomeLead from '../components/home/HomeLead.vue';
import HomeAmbience from '../components/home/HomeAmbience.vue';
import HomeTestimonials from '../components/home/HomeTestimonials.vue';
import HomePartners from '../components/home/HomePartners.vue';

export default {
  components: { HomeLead, HomeAmbience, HomeTestimonials, HomePartners }
};
</script>
<template>
  <Header />
  <main>
    <section class="container-xxl mb-4">
      <HomeLead />
    </section>
    <section class="bg-secondary py-4">
      <div class="container-xxl">
        <HomeAmbience />
      </div>
    </section>
    <section class="bg-light py-4">
      <div class="container-xxl">
        <HomeTestimonials />
      </div>
    </section>
    <section class="py-4 container-xxl">
      <HomePartners />
    </section>
  </main>
  <Footer />
</template>

<script>
import ContactForm from '../components/contact/ContactForm.vue';
import ContactAside from '../components/contact/ContactAside.vue';
export default {
  components: { ContactForm, ContactAside }
};
</script>
<template>
  <Header />
  <div class="container-xxl">
    <h1 class="display-6 mb-4">CONTACTEZ-NOUS</h1>
    <div class="row align-items-center">
      <main class="col-12 col-md-7 mb-4 mb-md-0">
        <ContactForm />
      </main>
      <aside class="col-12 col-md-5 mb-4 mb-md-0">
        <ContactAside />
      </aside>
    </div>
  </div>
  <Footer />
</template>

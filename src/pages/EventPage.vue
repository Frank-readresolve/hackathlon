<script>
import EventInfo from '../components/event/EventInfo.vue';
import EventLocation from '../components/event/EventLocation.vue';

export default {
  components: { EventInfo, EventLocation }
};
</script>
<template>
  <Header />
  <div class="container-xxl">
    <main>
      <h1 class="display-6 mb-4">PROCHAIN ÉVÉNEMENT</h1>
      <EventInfo />
    </main>
    <aside class="mt-4">
      <EventLocation />
    </aside>
  </div>
  <Footer />
</template>

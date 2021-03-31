<template>
  <div class="home">
    <FirstSection />
    <SecondSection />
  </div>
</template>

<script>
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';

export default {
  name: 'Home',

  components: {
    FirstSection,
    SecondSection,
  },
}
</script>

<style scoped>

</style>

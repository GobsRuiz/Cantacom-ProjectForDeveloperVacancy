<template>
  <div class="home">
    <FirstSection />
    <SecondSection />
    <ThirdSection />
  </div>
</template>

<script>
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';

export default {
  name: 'Home',

  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
  },
}
</script>

<style scoped>

</style>

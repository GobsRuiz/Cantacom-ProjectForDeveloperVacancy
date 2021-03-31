<template>
  <v-footer color="#e3e3e3" class="py-6">
      <div class="container text-center">
        <v-btn
            v-for="link in links"
            :key="link"
            class="text-caption text-capitalize"
            color="#848484"
            text
        >
            {{ link }}
        </v-btn>
      </div>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      links: [
        'Contact',
        'Download',
        'Press',
        'Email',
        'Support',
        'Privacy Policy',
      ],
    }),
}
</script>

<style>

</style>
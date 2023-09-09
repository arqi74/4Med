<template>
  <headerSection></headerSection>
  <RouterView></RouterView>
</template>

<script>

export default {
  name: 'App',
  components: {
    headerSection
  }
}
  import headerSection from '/src/components/header.vue';
</script>

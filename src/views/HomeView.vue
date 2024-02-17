<template>
  <div class="home">
    <nav-section/>
    <home-section/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavSection from "@/components/NavSection.vue";
import HomeSection from "@/components/homeSection.vue";
export default {
  components: {
       NavSection,
       HomeSection,
       
  },
  
}
</script>

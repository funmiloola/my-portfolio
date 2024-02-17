<template>
    <div class="contact-section">
     <nav-section/>
    <contact-section/>
    </div>
</template>
<script>
import NavSection from "@/components/NavSection.vue";
import ContactSection from "@/components/contactSection.vue";
export default{
    components:{
      NavSection,
     ContactSection
    },
    data() {
       return{

       } 
    },
}
</script>
<style scoped>
* {
  margin: 0;
  padding:0;
}
.contact-section{
    background: rgb(43, 43, 246);
    height:100vh;
    width:100%;
    margin:0;
}
</style>
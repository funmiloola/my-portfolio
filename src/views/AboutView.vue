<template>
<div class="about-section">
    <div>
        <nav-section/>
     <about-section/>
    </div>
</div>
</template>
<script>
import NavSection from "@/components/NavSection.vue";
import AboutSection from "@/components/AboutSection.vue"
export default{
    components:{
        NavSection,
       AboutSection
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
.about-section{
    background: rgb(43, 43, 246);
    height:100vh;
    width:100%;
    margin:0;
}
</style>
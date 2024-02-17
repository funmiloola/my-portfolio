<template>
    <div>
        <nav-section/>
    <project-section/>
    </div>
</template>
<script>
import NavSection from "@/components/NavSection.vue"
import ProjectSection from "@/components/ProjectSection.vue";
export default{
    components:{
        NavSection,
      ProjectSection
    },
    data() {
       return{

       } 
    },
}
</script>
<style scoped>

</style>
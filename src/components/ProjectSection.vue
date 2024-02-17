<template>
    <div>
<div>
      <h1>Projects</h1>
      <div class="project-section">
        <div class="project">
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/utfcwjgwmfwu5rfsazoo.jpg"
            alt="" class="project-image"
          />
          <a href="https://github.com/funmiloola/space-tourism-website-design.git" target="_blank"
            >Space tourism website</a
          >
        </div>
        <div class="project">
          <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ybtjzutfxmkmbaqgcysz.jpg" alt=""  class="project-image" />
          <a href="https://github.com/funmiloola/Ecommerce-project.git" target="_blank">Ecommerce single page</a>
        </div>
        <div class="project">
          <img src="@/assets/images/image/Slice 1 1.svg" alt="" class="project-image">
          <a href="https://github.com/funmiloola/freahfarm-product-deisgn.git"  target="_blank">Freshfarm landing page</a>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
       return{

       } 
    },
}
</script>
<style scoped>
h1{
  font-size: 40px;
  font-family: Barlow Condensed;
  font-weight: 600;
  text-align: center;
  padding-top: 72px;
}
.project-section{
  display:flex;
  justify-content:center;
  gap:64px;
  align-items: center;
  padding-top:48px;
}
@media (max-width: 799px) {
  .project-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
}
.project{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:24px;
}
.project-image{
  width:320px;
}
@media (min-width: 800px) and (max-width: 1190px) {
  .project-image {
    width: 160px;
  }
}
@media (min-width: 590px) and (max-width: 799px) {
  .project-image {
    width: 250px;
  }
}
@media (max-width: 589px) {
  .project-image {
    width: 200px;
  }
}
a{
  text-decoration: none;
  color:black;
    font-size:20px;
  font-family: Barlow Condensed;
  font-weight: 600;
}
@media (max-width: 799px) {
  a {
    border-bottom: 2px solid rgb(213, 212, 212);
    font-size: 16px;
  }
}
</style>
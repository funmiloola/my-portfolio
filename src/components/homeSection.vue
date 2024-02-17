<template>
  <div>
    <div class="hero-section">
      <div class="hero">
        <h1>Hi, I am <span>FAVOUR</span></h1>
        <h2>A Frontend Developer</h2>
      </div>
      <div class="hero-profile">
        <img
          src="data:image/png;base64,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"
          alt=""
          class="profile-pic"
        />
      </div>
    </div>
    <div class="about-section">
      <h3>About Me</h3>
      <p>
        I am a fourth-year computer science student who explored web development
        in 2023, acquiring robust expertise in HTML,CSS,JAVASCRIPT and
        VUEJS.Outside of my studies and classes, I engage in coding and
        continuous learning to stay abreast of the latest development trends.
      </p>

      <div class="skills">
        <div><h4>SKILLS</h4></div>
        <div class="logos">
          <div v-for="(logo, index) in logos" :key="index" class="logo">
            <img :src="logo.image" alt="" class="logo-id" />
            <span>{{ logo.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h5>Projects</h5>
      <div class="project-section">
        <div class="project">
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/utfcwjgwmfwu5rfsazoo.jpg"
            alt=""
            class="project-image"
          />
          <a
            href="https://github.com/funmiloola/space-tourism-website-design.git" target="_blank" class="project-desc"
            >Space tourism website</a
          >
        </div>
        <div class="project">
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ybtjzutfxmkmbaqgcysz.jpg"
            alt=""
            class="project-image"
          />
          <a href="https://github.com/funmiloola/Ecommerce-project.git" target="_blank"  class="project-desc"
            >Ecommerce single page</a
          >
        </div>
        <div class="project">
          <img
            src="@/assets/images/image/Slice 1 1.svg"
            alt=""
            class="project-image"
          />
          <a href="https://github.com/funmiloola/freahfarm-product-deisgn.git" target="_blank" class="project-desc"
            >Freshfarm landing page</a
          >
        </div>
      </div>
    </div>
    <div class="contacts">
      <h6>Contact Me</h6>
      <div class="contact-section">
        <div v-for="(contact,index) in contacts" :key="index" class="contact">
          <img :src="contact.image" alt=""  class="contact-logo"/>
          <a :href="contact.link" target="_blank" class="contact-desc">{{contact.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logos: [
        {
          name: "HTML",
          image: require("@/assets/images/icons/icons8-html-5.svg"),
        },
        { name: "CSS", image: require("@/assets/images/icons/icons8-css.svg") },
        {
          name: "JS",
          image: require("@/assets/images/icons/icons8-javascript.svg"),
        },
        {
          name: "VUEJS",
          image: require("@/assets/images/icons/icons8-vuejs.svg"),
        },
      ],
      contacts:[
        {
          image:require("@/assets/images/icons/icons8-instagram-logo.svg"),
          link:"https://www.instagram.com/fun.mii_?igsh=NXJ4ZG5weGE5d2ty&utm_source=qr",
          name:"Instagram Profile"
        },
        {
          image:require("@/assets/images/icons/icons8-linkedin.svg"),
          link:"https://www.linkedin.com/in/adebiyi-favour-7a7845240/",
          name:"LinkedIn Profile"
        },
        {
           image:require("@/assets/images/icons/icons8-twitter.svg"),
          link:"https://twitter.com/Favvvy04",
          name:"Twitter Profile"
        }
      ]
    };
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 64px;
  padding-right: 56px;
  padding-left: 56px;
}
@media (min-width: 1127px) and (max-width: 1300px) {
  .hero-section {
    padding-right: 40px;
    padding-left: 40px;
  }
}
@media (min-width: 1021px) and (max-width: 1127px) {
  .hero-section {
    padding-right: 38px;
    padding-left: 38px;
  }
}
@media (min-width: 855px) and (max-width: 1020px) {
  .hero-section {
    padding-right: 36px;
    padding-left: 36px;
  }
}
@media (min-width: 600px) and (max-width: 854px) {
  .hero-section {
    gap: 24px;
    padding-right: 24px;
    padding-left: 24px;
  }
}
@media (max-width: 665px) {
  .hero-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 124px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
.profile-pic {
  width: 500px;
}
@media (min-width: 1600px) and (max-width: 2500px) {
  .profile-pic {
    width: 600px;
  }
}
@media (min-width: 1021px) and (max-width: 1127px) {
  .profile-pic {
    width: 420px;
  }
}
@media (min-width: 855px) and (max-width: 1020px) {
  .profile-pic {
    width: 400px;
  }
}
@media (min-width: 600px) and (max-width: 854px) {
  .profile-pic {
    width: 300px;
  }
}
@media (max-width: 665px) {
  .profile-pic {
    width: 220px;
  }
}
h1 {
  font-size: 56px;
  font-family: Barlow Condensed;
  font-weight: 600;
  color: rgb(48, 48, 48);
}
@media (min-width: 1600px) and (max-width: 2500px) {
  h1 {
    font-size: 68px;
  }
}
@media (min-width: 1021px) and (max-width: 1127px) {
  h1 {
    font-size: 40px;
  }
}
@media (min-width: 855px) and (max-width: 1020px) {
  h1 {
    font-size: 40px;
  }
}
@media (min-width: 600px) and (max-width: 854px) {
  h1 {
    font-size: 36px;
  }
}
@media (max-width: 665px) {
  h1 {
    font-size: 36px;
  }
}
h1 span {
  color: rgb(43, 43, 246);
}
h2 {
  font-size: 50px;
  font-family: Barlow Condensed;
  font-weight: 600;
  color: rgb(48, 48, 48);
}
@media (min-width: 1600px) and (max-width: 2500px) {
  h2 {
    font-size: 60px;
  }
}
@media (min-width: 1021px) and (max-width: 1127px) {
  h2 {
    font-size: 38px;
  }
}
@media (min-width: 855px) and (max-width: 1020px) {
  h2 {
    font-size: 36px;
  }
}
@media (min-width: 600px) and (max-width: 854px) {
  h2 {
    font-size: 24px;
  }
}
@media (max-width: 655px) {
  h2 {
    font-size: 24px;
  }
}
.about-section {
  background: rgb(43, 43, 246);
  margin-top: 56px;
}
h3 {
  font-size: 56px;
  font-family: Barlow Condensed;
  font-weight: 600;
  color: rgb(213, 212, 212);
  text-align: center;
  padding-top: 24px;
}
@media (max-width: 599px) {
  h3 {
    font-size: 36px;
  }
}
.about-section p {
  font-size: 24px;
  font-family: Barlow Condensed;
  font-weight: 400;
  color: rgb(213, 212, 212);
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 24px;
  padding-bottom: 18px;
}
@media (max-width: 599px) {
  p {
    font-size: 16px;
  }
}
.skills {
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 650px) {
  .skills {
    padding-top: 24px;
  }
}
h4 {
  font-size: 28px;
  font-family: Barlow Condensed;
  font-weight: 600;
  color: rgb(213, 212, 212);
  text-align: center;
  padding-top: 24px;
}
@media (max-width: 650px) {
  h4 {
    font-size: 22px;
  }
}
.logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-top: 24px;
}
@media  (min-width:400px) and  (max-width:650px){
  .logos{
    gap:12px;
    padding-top:18px;
  }
}
@media (max-width:399px){
  .logos{
    gap:10px;
  }
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 24px;
}
@media (max-width: 650px) {
  .logo {
    gap: 14px;
  }
}
.logo-id {
  width: 120px;
}
@media (min-width:400px) and (max-width:650px){
  .logo-id{
    width:65px;
  }
}
@media (max-width:399px){
  .logo-id{
    width:43px;
  }
}
.logo span {
  font-family: Barlow Condensed;
  font-weight: 600;
  color: rgb(213, 212, 212);
  font-size: 20px;
}
@media (min-width:400px) and(max-width:650px){
  .logo span{
    font-size: 16px;
  }
}
@media (max-width:399px){
  .logo span{
    font-weight: 400;
  }
}
h5 {
  font-size: 40px;
  font-family: Barlow Condensed;
  font-weight: 600;
  text-align: center;
  padding-top: 72px;
}
.project-section {
  display: flex;
  justify-content: center;
  gap: 64px;
  align-items: center;
  padding-top: 48px;
}
@media (max-width: 799px) {
  .project-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
}
.project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.project-image {
  width: 320px;
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
.project-desc {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-family: Barlow Condensed;
  font-weight: 600;
}
@media (max-width: 799px) {
  .project-desc  {
    border-bottom: 2px solid rgb(213, 212, 212);
    font-size: 16px;
  }
}
.contacts{
  background: rgb(43, 43, 246);
  margin-top: 72px;
}
h6{
   font-size: 36px;
  font-family: Barlow Condensed;
  font-weight: 600;
  text-align: center;
  padding-top: 24px;
  color:rgb(213, 212, 212);
}
.contact-section{
  display:flex;
  justify-content: center;
  align-items: center;
  gap:24px;
}
@media(max-width:599px){
    .contact-section{
      gap:4px;
        flex-direction: column;
        /* padding-top:30px; */
    }
}
.contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:4px;
  padding-top:36px;
   padding-bottom:36px;
}
.contact-desc{
  color:rgb(213, 212, 212);
  text-decoration: none;
  font-size:16px;
  font-weight: 600;
  font-family: Barlow Condensed;
}
@media(max-width:599px){
    .contact-desc{
        font-weight:600;
    }
}
</style>
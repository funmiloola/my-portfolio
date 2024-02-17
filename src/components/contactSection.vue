<template>
    <div>
       <div class="contacts">
      <h1>Contact Me</h1>
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

export default{
    data() {
       return{
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
       } 
    }
}
</script>
<style scoped>
h1 {
   font-size: 36px;
  font-family: Barlow Condensed;
  font-weight: 600;
  text-align: center;
  padding-top:15rem;
  color:rgb(213, 212, 212);
}
@media(max-width:599px){
    h1{
        font-size: 30px;
        padding-top:2.5rem;
    }
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
        padding-top:30px;
    }
}
.contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:4px;
  padding-top:0px;
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
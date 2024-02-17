 <template>
 <div>
     <div class="about-section">
      <h1>About Me</h1>
      <p>
        I am a fourth-year computer science student,I delved into web development in
        2023 where I gained strong knowledge in HTML,CSS,JAVASCRIPT and VUEJS.When I'm not studying or in class, I also enjoy coding and keeping up with the latest development trends.
      </p>
      <div class="skills">
        <div><h4>SKILLS</h4></div>
        <div class="logos">
          <div v-for="(logo,index) in logos" :key="index" class="logo">
            <img :src="logo.image" alt="" class="logo-id">
            <span>{{logo.name}}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
 </template>
<script>
export default {
  data() {
    return {
      logos:[
        {name:'HTML', image:require('@/assets/images/icons/icons8-html-5.svg')},
        {name:'CSS', image:require('@/assets/images/icons/icons8-css.svg')},
        {name:'JS', image:require('@/assets/images/icons/icons8-javascript.svg')},
        {name:'VUEJS',image:require('@/assets/images/icons/icons8-vuejs.svg')}
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
.about-section{
      padding-top: 64px;
}
h1{
      font-size: 56px;
  font-family: Barlow Condensed;
  font-weight: 600;
  color:rgb(213, 212, 212);
  text-align: center;

}
@media(max-width:599px){
    h1{
        font-size: 36px;
    }
}
p{
      font-size:24px;
  font-family: Barlow Condensed;
  font-weight:400;
  color:rgb(213, 212, 212);
  text-align: center;
  padding-left:12px;
  padding-right:12px;
  padding-top:24px;
  padding-bottom: 18px;
}
@media(max-width:599px){
    p{
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
@media (max-width:650px){
  .skills{
    padding-top:18px;
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
@media (max-width:650px){
  h4{
    font-size: 22px;
  }
}
.logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:24px;
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
  gap:18px;
padding-bottom:24px;
}
@media (max-width:650px){
  .logo{
    gap:14px;
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
.logo span{
       font-family: Barlow Condensed;
  font-weight: 600;
  color: rgb(213, 212, 212);
  font-size:20px;
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
</style>
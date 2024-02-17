<template>
  <div>
    <nav>
        <sidebar-section v-if="showSidebar"/>
      <ul>
        <li v-for="(nav, index) in navs" :key="index">
          <router-link :to="nav.path" class="router-link">{{
            nav.name
          }}</router-link>
        </li>
      </ul>
      <div class="nav-icons" @click="toggleIcon">
        <img
          src="@/assets/images/icons/hamburger-icon.svg"
          alt=""
          v-if="!showSidebar"
        />
        <img src="@/assets/images/icons/close-icon.svg" alt="" v-else />
      </div>
    </nav>
  </div>
</template>
<script>
import SidebarSection from "@/components/SidebarSection.vue";
export default {
  components: {
    SidebarSection
  },
  data() {
    return {
      navs: [
        { name: "Home", path: "/" },
        { name: "About", path: "/About" },
        {name:"Projects", path:"/project"},
        { name: "Contact-Me", path: "/contact" },
      ],
      showSidebar:false,
    };
  },
  methods: {
      toggleIcon(){
        this.showSidebar =! this.showSidebar;
      }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
nav {
  padding-right: 56px;
  padding-top:20px;
}

ul {
  display: flex;
  justify-content: flex-end;
  gap: 86px;
}
@media (max-width: 665px){
     ul{
        display:none;
     }
}
ul li {
  list-style-type: none;
  font-size: 24px;
  font-family: Barlow Condensed;
  font-weight: 400;
  color: rgb(214, 214, 214);
}
.router-link {
  text-decoration: none;
  color: inherit;
}
.router-link-exact-active{
  border-bottom: 2px solid rgb(214, 214, 214);
}
.nav-icons {
  display: none;
  position: absolute;
  top:2.5rem;
  right:3rem;
}
@media (max-width: 665px) {
  .nav-icons {
    display: block;
  }
}
</style>
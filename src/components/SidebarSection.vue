<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li v-for="(nav, index) in navs" :key="index">
          <router-link :to="nav.path" class="router-link">{{
            nav.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        { name: "Home", path: "/" },
        { name: "About", path: "/About" },
         {name:"Projects", path:"/project"},
        { name: "Contact-Us", path: "/contact" },
      ],
    };
  },
};
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.sidebar {
  position: fixed;
  width:60vw;
  height: 100%;
  right: 0;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background:rgba(43, 43, 112, 0.5);;
  backdrop-filter: blur(40.774227142333984px);
}
ul{
      display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 108.4px;
  padding-left: 32px;
}
ul li{
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
</style>
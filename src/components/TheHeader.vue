<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="logotype" class="logo__image">
    </div>
    <div>Count posts {{postsCount}}</div>
    <nav class="group group-nav">
      <router-link to="/" class="btn btn-primary">
        <span >Go Home</span> 
      </router-link >
          <router-link to="cards" class="btn btn-primary">
        <span >Go cards apge</span> 
      </router-link>
    </nav>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters(['postsCount'])
}
</script>


<style>
a{
  text-decoration: none;
}
header{
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  background: rgb(237, 231, 238);
}
nav{
  display: flex;
  gap: 2rem;
}
.logo img{
  width: 2rem;
  height: auto;
}
.btn{
  border-radius: 5px;
  border:none;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 8px;
  cursor: pointer;
}
.btn-primary{
  background: rgb(91, 227, 161);
  color: rgb(31, 33, 36);
}
.btn-primary:hover{
   background: rgb(67, 229, 150);
   color: rgb(36, 28, 96);
}
.active{
 outline: dashed  2px rgb(61, 85, 203);
}
</style>

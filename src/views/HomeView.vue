<template>

<section  class="home-page">
  <h1> Lorem ipsum dolor sit.</h1>
  <br/>
  <article>
    <span>Click me for change page</span>
    <router-link to="cards">
          <figure title="Click me boy">
          <img src="@/assets/logo.png" alt="">
        </figure>
    </router-link>
  </article>
</section>

</template>

<script>
export default {

}
</script>

<style>
h1{
  margin: 0;
}
.home-page{
  text-align: center;
  background: rgb(49, 49, 52);
  height: 100%;
  color: aliceblue;
}
figure{
  display: grid;
  margin: 0 auto;
  width: min-content;
  border-radius: 5px;
  background: rgb(218, 209, 222);
  padding: 3rem;
  transition: 1s;
}

figure:hover{
  background: rgb(190, 171, 198);
  cursor: pointer;
  transform: scale(1.2);
}
figure:hover img{
  transform: rotate(360deg);
  transition: 1s;
}
</style>
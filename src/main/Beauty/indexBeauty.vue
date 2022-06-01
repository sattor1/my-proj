<template>
  <div class="beauty">
    <Header />

    <div class="name-author">
      <p>beauty ретушь</p>
    </div>

    <div class="beauty-content">
      <div class="beauty-row">
        <viewer
          ><img src="@/assets/buti/1.jpg" alt="beauty girl" class="beauty-img"
        /></viewer>
        <viewer
          ><img src="@/assets/buti/2.jpg" alt="beauty girl" class="beauty-img"
        /></viewer>
      </div>
      <div class="beauty-row">
        <viewer
          ><img src="@/assets/buti/3.jpg" alt="beauty girl" class="beauty-img"
        /></viewer>
        <viewer
          ><img src="@/assets/buti/4.jpg" alt="beauty girl" class="beauty-img"
        /></viewer>
      </div>
      <div class="beauty-row">
        <viewer
          ><img src="@/assets/buti/5.jpg" alt="beauty girl" class="beauty-img"
        /></viewer>
        <viewer
          ><img src="@/assets/buti/6.jpg" alt="beauty girl" class="beauty-img"
        /></viewer>
      </div>
      <div class="beauty-row">
        <viewer
          ><img src="@/assets/buti/7.jpg" alt="beauty girl" class="beauty-img"
        /></viewer>
        <viewer
          ><img src="@/assets/buti/8.jpg" alt="beauty girl" class="beauty-img"
        /></viewer>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../Header/indexHeader.vue'
export default { components: { Header } }
</script>
<style>
.beauty-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

@font-face {
  font-family: 'Futura PT';
  src: url(../../assets/fonts/FuturaPT-Book.woff) format('woff');
}

.name-author {
  padding-bottom: 75px;
  font-family: 'Futura PT';
  padding-top: 55px;
  text-align: center;
  font-weight: 400;
  font-size: 35px;
  text-transform: uppercase;
}

.beauty-img {
  width: 100%;
  height: 713px;
  object-fit: cover;
  cursor: zoom-in;
}
</style>

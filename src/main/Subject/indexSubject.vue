<template>
  <div class="subject">
    <Header />
    <div class="name-author">
      <p>предметная ретушь</p>
    </div>
    <div class="subject-content">
      <div class="subject-row">
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/0.1.jpg"
            alt="Пробирочка"
        /></viewer>
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/0.2.jpg"
            alt="Пробирочки"
        /></viewer>
      </div>
      <div class="subject-row">
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/1.png"
            alt="Пробирочка"
        /></viewer>
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/2.jpg"
            alt="Пробирочка"
        /></viewer>
      </div>
      <div class="subject-row">
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/3.png"
            alt="Пробирочка"
        /></viewer>
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/4.jpg"
            alt="Пробирочка"
        /></viewer>
      </div>
      <div class="subject-row">
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/5.jpg"
            alt="Пробирочка"
        /></viewer>
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/6.jpg"
            alt="Пробирочка"
        /></viewer>
      </div>
      <div class="subject-row">
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/7.jpg"
            alt="Пробирочка"
        /></viewer>
        <viewer
          ><img
            class="subject-img"
            src="@/assets/subject/8.jpg"
            alt="Пробирочка"
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
.subject-row {
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

.subject-img {
  width: 100%;
  height: 713px;
  object-fit: cover;
  cursor: zoom-in;
}
</style>

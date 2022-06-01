<template>
  <div class="own">
    <Header />

    <div class="name-author">
      <p>собственные проекты</p>
    </div>
    <div class="own-content">
      <div class="own-row">
        <viewer>
          <img
            @click="toggleZoom"
            src="@/assets/own_projects/1.jpg"
            alt="own img"
            class="own-img"
          />
        </viewer>

        <viewer>
          <img
            src="@/assets/own_projects/2.jpg"
            alt="own img"
            class="own-img"
          />
        </viewer>
      </div>
      <div class="own-row">
        <viewer
          ><img src="@/assets/own_projects/3.jpg" alt="own img" class="own-img"
        /></viewer>
        <viewer
          ><img src="@/assets/own_projects/4.jpg" alt="own img" class="own-img"
        /></viewer>
      </div>
      <div class="own-row">
        <viewer>
          <img
            src="@/assets/own_projects/5.jpg"
            alt="own img"
            class="own-img"
          />
        </viewer>
        <viewer>
          <img
            src="@/assets/own_projects/6.jpg"
            alt="own img"
            class="own-img"
          />
        </viewer>
      </div>
      <div class="own-row">
        <viewer>
          <img
            src="@/assets/own_projects/7.jpg"
            alt="own img"
            class="own-img"
          />
        </viewer>
        <viewer>
          <img
            src="@/assets/own_projects/8.jpg"
            alt="own img"
            class="own-img"
          />
        </viewer>
      </div>
      <div class="own-row">
        <viewer>
          <img
            src="@/assets/own_projects/9.jpg"
            alt="own img"
            class="own-img"
          />
        </viewer>
        <viewer>
          <img
            src="@/assets/own_projects/10.jpg"
            alt="own img"
            class="own-img"
          />
        </viewer>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../Header/indexHeader.vue'
export default { components: { Header } }
</script>
<style>
.own-row {
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

.own-img {
  width: 100%;
  height: 713px;
  object-fit: cover;
  cursor: zoom-in;
}
</style>

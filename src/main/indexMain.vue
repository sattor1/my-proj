<template>
  <div class="mian">
    <Header />

    <div class="name-author">
      <p>KSENIA METKA</p>
      <p class="name-second">PORTFOLIO</p>
    </div>

    <div class="content">
      <div class="content_img">
        <div @click="goToSubject" class="content_img_text">
          <img class="main-img" src="../assets/subject/0.2.jpg" alt="Девочка" />
          <div class="content_text">
            <p>предметная ретушь</p>
            <p>{{ year }}</p>
          </div>
        </div>

        <div @click="goToBeauty" class="content_img_text">
          <img class="main-img" src="../assets/buti/4.jpg" alt="Девочка" />
          <div class="content_text">
            <p>beauty ретушь</p>
            <p>{{ year }}</p>
          </div>
        </div>

        <div @click="goToOwn" class="content_img_text">
          <img
            class="main-img"
            src="../assets/own_projects/8.jpg"
            alt="Девочка"
          />
          <div class="content_text">
            <p>собственные проекты</p>
            <p>{{ year }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Header/indexHeader.vue'

export default {
  data: () => ({
    year: new Date().getFullYear()
  }),
  components: { Header },

  methods: {
    goToSubject() {
      this.$router.push({ path: '/subject' })
    },
    goToBeauty() {
      this.$router.push({ path: '/beauty' })
    },
    goToOwn() {
      this.$router.push({ path: '/own' })
    }
  }
}
</script>

<style>
.main {
  background: #fff;
}

@font-face {
  font-family: 'Futura PT';
  src: url(../assets/fonts/FuturaPT-Book.woff) format('woff');
}

.name-author {
  padding-bottom: 75px;
  font-family: 'Futura PT';
  padding-top: 55px;
  text-align: center;
  font-weight: 400;
  font-size: 35px;
}

.name-second {
  color: #757575;
  font-size: 19px;
  font-weight: 400;
  line-height: 42px;
  text-align: center;
}

.content_img {
  display: flex;
  gap: 20px;
}

p {
  text-transform: uppercase;
}

.content_text {
  display: none;
}

.main-img {
  width: 385px;
  height: 513px;
  object-fit: cover;
  position: relative;
  cursor: pointer;
}

.main-img:hover {
  transition: 0.5s;
  opacity: 0.1;
  z-index: 1;
}

.main-img:hover + .content_text {
  display: inline;
  position: relative;
  bottom: 275px;
  text-align: center;
  font-family: 'Futura PT';
  font-weight: 600;
}
</style>

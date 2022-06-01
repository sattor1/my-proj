<template>
  <div class="main-header">
    <span @click="goBack">work</span>
    <strong>kseniiametlina@yandex.ru</strong>
  </div>
</template>
<script>
export default {
  data: () => ({}),

  methods: {
    goBack() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style>
.main-header {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;
}

span {
  display: inline-block;
  font-family: "Titillium Web", sans-serif;
  color: #333;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
}

strong {
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  color: #333;
  font-style: normal;
  font-weight: 400;
}

span:after {
  display: block;
  content: "";
  height: 2px;
  width: 0%;
  background-color: #ffeb3b;
  transition: width 0.6s ease-in-out;
}

span:hover:after,
span:focus::after {
  width: 100%;
}
</style>

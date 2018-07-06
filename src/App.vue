<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import "@/assets/css/reset.css";

  export default {
    name: "App"
  };
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>

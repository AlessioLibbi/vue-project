<script>


import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: { TheHeader },

}
</script>


<template>
<div>
    <TheHeader />
    <router-view></router-view>
</div>

</template>



<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
</style>
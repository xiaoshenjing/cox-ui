<template>
  <div class="contain">
    <p class="common">hello {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "alert",
  data() {
    return {
      name: "tom"
    }
  }
}
</script>

<style>
.contain {
  font-size: 20px;
}
</style>

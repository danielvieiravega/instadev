<template>
  <div class="full-width row justify-around">
    <q-img width="24px" src="../../assets/house.svg"></q-img>
    <q-img width="28px" src="../../assets/search.svg"></q-img>
    <q-img width="30px" src="../../assets/add.svg"></q-img>
    <q-img width="32px" src="../../assets/heart.svg"></q-img>
    <q-avatar size="28px" class="cursor-pointer" @click="goTo('my-area')">
      <img src="https://cdn.quasar.dev/img/avatar.png" alt="avatar">
    </q-avatar>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  methods: {
    goTo(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}
</style>

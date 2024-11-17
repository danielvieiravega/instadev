<template>
  <div class="full-width row justify-around">
    <q-img width="24px" src="../../assets/house.svg" @click="goTo('main')"></q-img>
    <q-img width="28px" src="../../assets/search.svg"></q-img>
    <q-img width="30px" src="../../assets/add.svg"></q-img>
    <q-img width="32px" src="../../assets/heart.svg"></q-img>
    <q-avatar size="28px" class="cursor-pointer" @click="goTo('my-area')">
      <img :src="user.avatar || 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'" alt="avatar">
    </q-avatar>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.loadProfileData();
  },
  methods: {
    goTo(route) {
      this.$router.push({ path: route });
    },
    async loadProfileData() {
      this.user = this.$store.getters['user/getUserData'];
    },
  },
};
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}
</style>

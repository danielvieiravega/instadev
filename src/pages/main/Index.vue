<template>
  <q-page class="flex">
    <div class="container-top full-width q-pt-lg">
      <TopBar/>
      <q-separator class="full-width q-mt-sm" />
    </div>
    <q-scroll-area
      horizontal
      :visible="false"
      class="full-width scroll-area q-px-sm"
    >
      <div class="row no-wrap">
        <div class="full-width" v-for="item in 10" :key="item">
          <div class="column items-center justify-center q-mr-md">
            <q-avatar class="avatar" size="62px">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <span>Nome</span>
          </div>
        </div>
      </div>
    </q-scroll-area>
    <Posts v-for="item in 10" :key="item"/>
    <div class="container-bottom full-width q-pb-lg">
      <q-separator class="full-width q-mb-sm" />
      <BottomBar/>
    </div>

  </q-page>
</template>

<script>
import TopBar from 'components/TopBar/Index.vue';
import BottomBar from 'components/BottomBar/Index.vue';
import Posts from 'components/Posts/Index.vue';

export default {
  name: 'MainPage',
  components: { BottomBar, TopBar, Posts },
};
</script>

<style lang="scss" scoped>
.container-top {
  top: 0;
  z-index: 6000;
  position: fixed;
  background-color: $background-light;
}
.scroll-area {
  height: 98px;
  margin-top: 70px;
}
.q-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: linear-gradient(#FBAA47, #D91A46, #A60F93);
  padding: 2px;
  .avatar {
    width: 57px;
    height: 57px;
    border: solid 2px #ffffff;
  }
}
</style>

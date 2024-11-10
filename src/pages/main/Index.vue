<template>
  <q-page class="flex flex-center">
    <div class="full-width absolute-top q-mt-lg">
      <TopBar/>
      <q-separator class="full-width q-mt-sm" />
    </div>
    <div class="container-bottom full-width absolute-bottom q-pb-lg">
      <q-separator class="full-width q-mb-sm" />
      <BottomBar/>
    </div>

  </q-page>
</template>

<script>
import TopBar from 'components/TopBar/Index.vue';
import BottomBar from 'components/BottomBar/Index.vue';

export default {
  name: 'MainPage',
  components: { BottomBar, TopBar },
};
</script>

<style lang="scss" scoped>
.container-bottom {
  background-color: #FAFAFA;
}
</style>

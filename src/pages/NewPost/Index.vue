<template>
  <q-page class="flex column justify-between">
    <div>
      <div class="full-width row items-center justify-between bg-grey-2 q-py-lg">
        <q-btn flat color="primary" label="Cancel"/>
        <div>
          <strong>Recents</strong>
          <q-icon
            name="fas fa-chevron-down"
            class="q-ml-xs"
            size="11px"
          />
        </div>
        <q-btn flat color="primary" label="Done"/>
      </div>
      <q-img
        :ratio="1"
        class="selected-image"
        src="https://picsum.photos/500/300/"
      />

      <q-scroll-area
        :visible="false"
        class="full-width scroll-area q-ma-none"
      >
        <div class="row q-mb-xl">
          <q-img
            v-for="item in 24" :key="item"
            class="cursor-pointer col-4"
            src="https://picsum.photos/seed/dogs/500/300/"
            :ratio="1"
          />
        </div>
      </q-scroll-area>
    </div>
    <q-tabs
      v-model="tab"
      class="text-grey-6 full-width container-bottom"
      active-color="grey-9"
      indicator-color="grey-9"
    >
      <q-tab name="library" label="Library"/>
      <q-tab name="photo" label="Photo"/>
      <q-tab name="video" label="Video"/>
    </q-tabs>
  </q-page>
</template>

<script>
export default {
  name: 'NewPostPage',
  data() {
    return {
      tab: 'grid',
    };
  },
};
</script>

<style lang="scss" scoped>
strong {
  font-size: 16px;
}

.q-btn {
  text-transform: none;
  font-size: 16px;
}

.q-tabs {
  height: 78px;
}

.scroll-area {
  height: calc(100vw / 2);
  @media (min-height: 800px) {
    height: 100vw;
    padding-bottom: 75px;
  }
}

.selected-image {
  width: 100vw;
  height: 90vw;
}
</style>

<template>
  <q-page class="flex">
    <div class="full-width row items-center justify-between bg-grey-2">
      <q-btn flat color="grey-9" label="Cancel" @click="goTo('my-area')"/>
      <strong>Edit Profile</strong>
      <q-btn flat color="primary" label="Done" @click="updateUserData"/>
    </div>
    <div class="full-width column items-center justify-center">
      <q-avatar size="95px">
        <img :src="avatar">
      </q-avatar>
      <q-btn flat color="primary" label="Change Profile Photo"/>
    </div>
    <div class="full-width column q-px-sm">
      <div class="container-input row justify-center items-center">
        <span>Name</span>
        <q-input v-model="name" placeholder="name"/>
      </div>
      <div class="container-input row justify-center items-center">
        <span>Username</span>
        <q-input v-model="userName" placeholder="username" disable/>
      </div>
      <div class="container-input row justify-center items-center">
        <span>Website</span>
        <q-input v-model="webSite" placeholder="website"/>
      </div>
      <div class="container-input row justify-center items-center">
        <span>Bio</span>
        <q-input v-model="bio" autogrow placeholder="bio"/>
      </div>
    </div>
    <div class="column full-width q-px-md items-start">
      <q-separator class="full-width q-my-sm"/>
      <q-btn flat color="primary" label="Switch to professional account"/>
      <strong class="q-ml-md q-my-md">Private Information</strong>
      <div class="full-width">
        <div class="container-input row justify-center items-center">
          <span>Email</span>
          <q-input v-model="email" placeholder="e-mail" disable />
        </div>
        <div class="container-input row justify-center items-center">
          <span>Phone</span>
          <q-input v-model="phone" placeholder="phone"/>
        </div>
        <div class="container-input row justify-center items-center">
          <span>Gender</span>
          <q-input v-model="gender" placeholder="gender"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      name: '',
      userName: '',
      webSite: '',
      bio: '',
      email: '',
      phone: '',
      gender: '',
      avatar: '',
    };
  },
  methods: {
    loadProfileData() {
      const userData = this.$store.getters['user/getUserData'];
      this.name = userData.name;
      this.userName = userData.user_name;
      this.bio = userData.bio;
      this.email = userData.email;
      this.gender = userData.gender;
      this.avatar = userData.avatar;
    },
    goTo(route) {
      this.$router.push({ path: route });
    },
    async updateUserData() {
      const token = this.$store.getters['auth/getJWT'];
      const body = {
        name: this.name,
        bio: this.bio,
        gender: this.gender,
      };
      await this.$store.dispatch('user/updateUserProfile', { token, body });
    },
  },
  mounted() {
    this.loadProfileData();
  },
};
</script>

<style lang="scss" scoped>
.container-input {
  font-size: 15px;

  span {
    width: 22%;
  }

  .q-textarea,
  .q-input {
    width: 70%;
  }
}

strong {
  font-size: 16px;
}

.q-btn {
  text-transform: none;
  font-size: 16px;
}
</style>

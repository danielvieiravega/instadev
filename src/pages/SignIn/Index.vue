<template>
    <q-page class="flex flex-center column justify-center q-px-md">
        <q-icon
            name="fas fa-chevron-left"
            size="23px"
            color="black"
            class="absolute-left q-ma-lg">
        </q-icon>
        <div class="full-width column items-center justify-center">
            <q-img class="logo q-mb-lg" src="../../assets/instadev-logo.svg"></q-img>
            <q-input filled v-model="email" label="E-mail" class="full-width q-mb-md"/>
            <q-input filled v-model="password" label="Password" type="password" class="full-width"/>
            <div class="column items-end full-width">
                <a class="q-mt-md link" href="">Forgot password?</a>
            </div>
            <q-btn
                color="primary"
                :disabled="true"
                label="Log in"
                class="sign-in-button full-width q-mt-lg"
            />
            <div class="flex full-width row items-center q-mt-xl justify-center">
                <q-img src="../../assets/facebook-logo.svg" class="facebook-icon"></q-img>
                <a class="link q-ml-xs" href="">Log in with Facebook</a>
            </div>
            <div class="full-width row items-center justify-center q-my-xl">
                <q-separator inset class="separator"/>
                OR
                <q-separator inset class="separator"/>
            </div>
            <div class="full-width row items-center justify-center">
                <span class="text-black-opacity">
                    Don't have an account?
                </span>
                <a class="link q-ml-xs" href="">Sign up</a>
            </div>
        </div>
        <div class="full-width column items-center absolute-bottom">
            <q-separator class="full-width"/>
            <div class="q-my-lg">
                <span class="text-black-opacity">Instagram on Facebook</span>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  mounted() {
    console.log(process.env.API_URL);
  },
};
</script>

<style lang="scss" scoped>
.logo {
    width: 200px;
    margin-bottom: 20px;
}

.sign-in-button {
    width: 343px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 5px;
    background:  $instablue;
}

.facebook-icon {
    width: 17px;
    height: 17px;
}

.separator {
    width: 35%;
}
</style>

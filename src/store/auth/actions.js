import Vue from 'vue';

const vm = new Vue({});

export async function makeLogin({ commit }, body) {
  const {
    credential,
    password,
  } = body;
  const formattedCredential = {};
  if (credential.includes('@')) {
    formattedCredential.email = credential;
  } else {
    formattedCredential.username = credential;
  }
  try {
    const { data } = await vm.$axios.post('/auth', {
      ...formattedCredential,
      password,
    });
    await this.$router.push({ path: 'main' });
    console.log(JSON.stringify(data));
    console.log(commit);
  } catch (e) {
    console.log(e);
  }
}

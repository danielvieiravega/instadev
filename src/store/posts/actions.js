import Vue from 'vue';

const vm = new Vue({});

export async function listAllPosts(_, params) {
  const { token } = params;
  try {
    const { data } = await vm.$axios.get('/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (e) {
    vm.$q.notify({
      color: 'negative',
      message: 'Falha ao carregar posts!',
      position: 'top',
      icon: 'warning',
    });
    return false;
  }
}

export async function listMyPosts(_, params) {
  const { token } = params;
  try {
    const { data } = await vm.$axios.get('/posts/my-posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (e) {
    vm.$q.notify({
      color: 'negative',
      message: 'Falha ao carregar posts!',
      position: 'top',
      icon: 'warning',
    });
    return false;
  }
}

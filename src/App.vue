<script setup>
import HelloWorld from './components/HelloWorld.vue'
import User from '@/api/user'
import { onMounted } from 'vue'

const username = 'aaa'
const password = '132453t34f'
const login = async() => {
  const res = await User.login(username, password)
  console.log(res, '----------')
}

onMounted(() => {
  login();
})


</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <IxButton>test</IxButton>
  <IxButton icon="search">Search</IxButton>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

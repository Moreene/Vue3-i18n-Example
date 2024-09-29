<template>
  <div class="navbar">
    <div>
      <router-link to="/">{{ $t('Home') }}</router-link>
      <router-link to="/about">{{ $t('About') }}</router-link>
    </div>
    <select v-model="selected" @change="changeLang">
      <option disabled value="">{{ $t('Choose Language') }}</option>
      <option value="zh">{{ $t('zh') }}</option>
      <option value="en">{{ $t('en') }}</option>
    </select>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const selected = ref('');

const changeLang = (e) => {
  locale.value = e.target.value;
  selected.value = e.target.value;
};
</script>

<style scoped>
a {
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  margin-right: 16px;
}

.navbar {
  background: #000;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
}
</style>
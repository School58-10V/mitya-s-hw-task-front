<template>
  <div id="app">
    <nav class="main_header">
    <a href="/">
      <h1 class="schedule-icon">ScheduleApp</h1>
    </a>
    <router-link to="/ping">ping</router-link>
    <router-link to="/">Home</router-link>
  </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  margin-top: 60px
}
</style>

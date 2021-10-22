<template>
  <div class="notification-container">
    <Notification v-for="notification in notifications" :key="notification.id" :id="notification.id" :type="notification.type" :duration="notification.duration" :title="notification.title" :message="notification.message"></Notification>
  </div>
</template>

<script>
import Notification from './components/Notification.vue';

export default {
  name: 'App',
  components: {
    Notification
  },
  data() {
    return {
      notifications: [{
        id: 0,
        type: 0,
        duration: 5000,
        title: 'fdsfsdf',
        message: 'fdsfsd',
        icon: ''
      }]
    }
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.notification-container {
  position: fixed;
  width: 25vw;
  max-height: 100%;
  right: 0;
  top: 0;
}
</style>

<template>
  <div class="notification-container">
    <Notification v-for="notification in notifications" :key="notification.id" :id="notification.id" :type="notification.type" :duration="notification.duration" :title="notification.title" :message="notification.message"></Notification>
  </div>
</template>

<script>
import Notification from './components/Notification.vue'

export default {
  name: 'App',
  components: {
    Notification
  },
  data () {
    return {
      notifications: []
    }
  },
  created () {
    if ('alt' in window) {
      alt.on('notifications:create', (data) => {this.createNotification(data); console.log('emit success')})
    }
  },
  methods: {
    createNotification (data) {
      this.notifications.push({
        id: data.id,
        type: data.type,
        duration: data.duration * 1000,
        title: data.title,
        message: data.message
      })
    }
  }
}
</script>

<style>
@font-face {
  font-family: Poppins;
  src: url(./assets/fonts/poppins.ttf) format("truetype");
}

#app {
  font-family: Poppins, sans-serif;
}

.notification-container {
  position: fixed;
  width: 20vw;
  max-height: 100%;
  right: 0;
  top: 0;
}
</style>

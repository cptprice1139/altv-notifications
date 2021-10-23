<template>
  <transition name="notification-slide" @after-enter="afterEnter" @after-leave="afterLeave" appear>
    <div v-if="visible" class="notification">
      <div class="notification-icon">
        <font-awesome-icon :style="{color: getIconColor()}" :icon="getIcon()" class="icon" />
      </div>

      <div class="notification-body">
        <span class="body-title">{{$props.title}}</span><br>
        <span class="body-message">{{$props.message}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { icons, iconColors } from '../utils/icons'

export default {
  name: 'Notification',
  props: {
    id: {
      type: Number,
      default: 0
    },
    type: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1000
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false,
      elapsed: 0
    }
  },
  mounted () {
    this.visible = true
  },
  methods: {
    afterEnter () {
      setTimeout(() => {
        this.hide()
      }, this.$props.duration)
    },
    afterLeave () {
      this.$el.remove()
    },
    hide () {
      this.visible = false
    },
    getIcon () {
      return icons[this.type]
    },
    getIconColor () {
      return iconColors[this.type]
    }
  }
}
</script>

<style scoped>

.notification-slide-enter-from,
.notification-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-slide-enter-to,
.notification-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.notification-slide-enter-active,
.notification-slide-leave-active {
  transition: all .4s ease;
}

.notification {
  display: flex;
  flex-direction: column;
  width: 18.5vw;
  min-height: 4vw;
  background: #15171a;
  border-radius: 18px;
  margin-top: 0.5vw;
}

.notification-icon {
  position: absolute;
  width: 2.2vw;
  height: 2.2vw;
  background: #36393e;
  margin-left: 0.75vw;
  margin-top: 0.9vw;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(55, 55, 60, 0.25);
}

.icon {
  position: absolute;
  width: 1.25vw;
  height: 1.25vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.5vw;
}

.notification-body {
  position: relative;
  width: 76%;
  min-height: 3vw;
  border-radius: 0 18px 18px 0;
  margin-left: 20%;
  margin-top: 0.65vw;
  margin-bottom: 0.5vw;
  color: white;
}

.body-title {
  font-size: 18px;
  font-weight: 600;
}

.body-message {
  font-size: 15px;
  font-weight: 400;
  word-wrap: break-word;
}
</style>

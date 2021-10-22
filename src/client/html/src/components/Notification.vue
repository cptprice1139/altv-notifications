<template>
  <transition name="notification-slide" @after-enter="afterEnter" @after-leave="afterLeave" appear>
    <div v-if="visible" class="notification">
      <div class="notification-icon">
        <i :style="{backgroundImage: $props.icon}"></i>
      </div>

      <div class="notification-body">
        <span class="body-title">{{$props.title}}</span>
        <span class="body-message">{{$props.message}}</span>
      </div>

      <div class="notification-progress">
        <div class="progress-thumb" :style=" { width: (100 - (elapsed / $props.duration * 100)) + '%' }"></div>
      </div>
    </div>
  </transition>
</template>

<script>

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
    },
    icon: {
      type: String,
      default: '../assets/images/normal.png'
    }
  },
  data() {
    return {
      visible: false,
      elapsed: 0
    }
  },
  mounted() {
    this.visible = true;
  },
  methods: {
    afterEnter() {
      const elapsed = setInterval(() => {
        if (this.elapsed >= this.$props.duration) {
          clearInterval(elapsed);
          return;
        }

        this.elapsed += 4.1;
      }, 1)

      setTimeout(() => {
        this.hide();
      }, this.$props.duration)
    },
    afterLeave() {
      this.$el.remove();
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>

@keyframes notification-slide-out {
  0% {
    transform: translateX(0%)
  }

  50% {
    transform: translateX(-10%)
  }
  100% {
    transform: translateX(110%)
  }
}

.notification-slide-leave-active,
.notification-slide-enter-active {
  transition: .4s ease
}

.notification-slide-enter {
  transform: translateX(110%);
}

.notification-slide-leave-active {
  animation: notification-slide-out .5s
}

.notification {
  display: flex;
  flex-direction: column;
  width: 12.5vw;
  min-height: 3.5vh;
  background: aqua;
}

</style>

<template>
  <a
    :href="href"
    class="rect-btn"
    :target="blank ? '_blank' : '_self'"
  >
    <slot />
  </a>
</template>

<script setup>
  defineProps({
    href: {
      type: String,
      required: true,
    },
    blank: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style scoped>
.rect-btn {
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  background: var(--primary-gradient);
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.rect-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  transition: left 0.4s ease;
}

.rect-btn:hover::after {
  left: 100%;
}

.rect-btn:hover {
  background: var(--primary-color);
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-3px) scale(1.02);
}

</style>
<template>
  <a
    :href="href"
    :target="blank ? '_blank' : '_self'"
    class="circle-btn"
    aria-label="Social link"
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
  .circle-btn {
    background: var(--radial-dark-gradient);
    color: white;
    border: none;
    padding: 1.2rem;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .circle-btn::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.4s ease;
  }

  .circle-btn:hover::after {
    transform: scale(1);
  }

  .circle-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.25);
  }
</style>

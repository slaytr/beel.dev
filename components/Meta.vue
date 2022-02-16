<template>
  <div id="meta-wrapper">
    <slot></slot>
  </div>
</template>

<script>
    export default {
      head () {
        return {
          link: [
            {
              href: "https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css",
              rel: "stylesheet",
            }
            ]
        }
      }
    }
</script>

<style scoped>

</style>

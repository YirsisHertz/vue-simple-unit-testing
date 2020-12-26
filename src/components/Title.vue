<template>
  <h1>
    {{ title }}
  </h1>

  <h3>
    {{ number }}
  </h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Hello",
    },
    number: {
      type: Number,
      default: 0,
    },
  },
};
</script>

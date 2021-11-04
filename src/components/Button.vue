<template>
  <button @click="e => $emit('click', e)" class="button">
      <slot/>
  </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false
        },
    }
}
</script>

<style scoped>
.button {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    background-color: #2295F5;
    color: white;
    font-weight: bold;
    border: 0;
    font-size: 18px;
}
</style>
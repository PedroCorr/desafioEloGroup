<template>
  <div class="input-container">
      <div class="label-container">
        <label :for="id">{{ label }}</label>
        <span v-show="required" class="label">*</span>
      </div>
      <input :type="type" :id="id" :value="value" @input="$emit('input', $event.target.value)" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        required: {
            type: Boolean,
            default: () => false
        },
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        id: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            required: false
        }
    },
    methods: {
    }
}
</script>

<style scoped>
input {
    width: 100%;
    border: 1px solid black;
    padding: 4px;
}
.input-container {
    margin-top: 18px;
    width: 100%;
}
.label-container {
    margin-bottom: 4px;
}
</style>
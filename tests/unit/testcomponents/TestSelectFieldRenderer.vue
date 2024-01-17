<template>
  <json-forms
    :data="props.data"
    :schema="JSON.parse(schema)"
    :uischema="JSON.parse(uiSchema)"
    :renderers="renderers"
    :validationMode="'ValidateAndShow'"
  />
</template>

<script lang="ts" setup>
import { rankWith, uiTypeIs } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/vue";
import { vuetifyRenderers } from "@jsonforms/vue-vuetify";
import selectFieldRenderer from "@/components/SelectFieldRenderer.vue";

const props = defineProps({
  data: { type: Object, required: true },
  schema: { type: String, required: true },
  uiSchema: { type: String, required: true },
});

const renderers = Object.freeze([
  ...vuetifyRenderers,
  {
    tester: rankWith(15, uiTypeIs("SelectField")),
    renderer: selectFieldRenderer,
  },
]);
</script>

<style scoped />

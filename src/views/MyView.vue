<template>
  <json-forms
    :data="data"
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
import { ref } from "vue";

const data = ref({ select: "First" });
const schema = ref(
  // eslint-disable-next-line max-len
  `{"properties":{"select":{"title":"This is a title","type":"string","enum":["First","Second"]}},"type":"object"}`
);
const uiSchema = ref(
  `{"type":"VerticalLayout","elements":[{"type":"SelectField","scope":"#/properties/select"}]}`
);

const renderers = Object.freeze([
  ...vuetifyRenderers,
  {
    tester: rankWith(15, uiTypeIs("SelectField")),
    renderer: selectFieldRenderer,
  },
]);
</script>

<style scoped />

<template>
  <control-wrapper
    v-bind="controlWrapper"
    :styles="styles"
    :isFocused="isFocused"
    :appliedOptions="appliedOptions"
  >
    <v-row class="ml-1 mr-1" style="flex-wrap: nowrap">
      <v-select
        :id="control.path.replaceAll('.', '-')"
        :class="styles.control.input"
        :disabled="false"
        :autofocus="appliedOptions.focus"
        :density="'compact'"
        :variant="'underlined'"
        :label="control.label"
        :required="control.required"
        :model-value="control.data"
        :items="useItems"
        :item-title="(item) => item['label']"
        validate-on-blur
        item-value="value"
        v-bind="vuetifyProps('v-select')"
        @update:model-value="onChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </v-row>
  </control-wrapper>
</template>

<script lang="ts">
import { ControlElement } from "@jsonforms/core";
import {
  rendererProps,
  RendererProps,
  useJsonFormsEnumControl,
} from "@jsonforms/vue";
import { defineComponent } from "vue";
import { ControlWrapper, DisabledIconFocus } from "@jsonforms/vue-vuetify";
import { useVuetifyControl } from "@jsonforms/vue-vuetify";

const selectFieldRenderer = defineComponent({
  name: "SelectFieldRenderer",
  components: {
    ControlWrapper,
  },
  directives: {
    DisabledIconFocus,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: RendererProps<ControlElement>) {
    return {
      ...useVuetifyControl(useJsonFormsEnumControl(props), (value) =>
        value !== null ? value : undefined
      ),
    };
  },
  computed: {
    useItems(): unknown[] {
      return (this.control.schema as { enum: string[] }).enum;
    },
  },
});

export default selectFieldRenderer;
</script>

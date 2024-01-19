import "@testing-library/jest-dom/vitest";
import TestSelectFieldRenderer from "../testcomponents/TestSelectFieldRenderer.vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { render } from "@testing-library/vue";
import { describe, it, expect } from "vitest";

describe("The SelectFieldRenderer component", () => {
  it("displays selected value", async () => {
    const { getByLabelText, getByText } = await setupComponent("First");

    expect(getByLabelText("This is a title")).toBeInTheDocument();
    expect(getByText("First")).toBeInTheDocument();
  });

  const setupComponent = async (value: "First" | "Second" | undefined) => {
    const vuetify = createVuetify({ components, directives });

    return {
      ...render(TestSelectFieldRenderer, {
        global: {
          plugins: [vuetify],
        },
        props: {
          data: { select: value },
          schema:
            // eslint-disable-next-line max-len
            `{"properties":{"select":{"title":"This is a title","type":"string","enum":["First","Second"]}},"type":"object"}`,
          uiSchema:
            '{"type":"VerticalLayout","elements":[{"type":"SelectField","scope":"#/properties/select"}]}',
        },
      }),
    };
  };
});

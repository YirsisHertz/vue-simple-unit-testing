import { mount } from "@vue/test-utils";
import Title from "@/components/Title";

describe("Title.vue", () => {
  it("Debe tener como valor por defecto la palabra Hello", () => {
    const wrapper = mount(Title);
    expect(wrapper.text()).toMatch("Hello");
  });

  it("Debe cambiar el valor si mando el prop title", () => {
    const newTitle = "my new title";
    const wrapper = mount(Title, {
      props: { title: newTitle },
    });

    expect(wrapper.text()).toMatch(newTitle);
  });

  it("El valor number debe ser 0 por defecto", () => {
    const wrapper = mount(Title);
    expect(wrapper.html()).toMatch("<h3>0</h3>");
  });

  it("El valor number debe cambiar cuando se mande como prop", () => {
    const number = 10;
    const wrapper = mount(Title, {
      props: { number },
    });
    expect(wrapper.html()).toMatch(`<h3>${number}</h3>`);
  });
});

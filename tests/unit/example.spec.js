import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("render props.title when passed", () => {
    const title = "Hello";
    const wrapper = shallowMount(HelloWorld, {
      props: { title },
    });
    // console.log(wrapper.text());
    expect(wrapper.text()).toMatch(title);
  });
});

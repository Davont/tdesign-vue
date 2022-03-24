import { mount } from '@vue/test-utils';
import demo from '@/examples/dropdown/demos/base.vue';
import buttonUsageExample from '@/examples/dropdown/demos/button.vue';
import CustomUsageExample from '@/examples/dropdown/demos/custom.vue';
import DisableUsageExample from '@/examples/dropdown/demos/disabled.vue';
import EventUsageExample from '@/examples/dropdown/demos/event.vue';
import LongUsageExample from '@/examples/dropdown/demos/long.vue';
import MultipleUsageExample from '@/examples/dropdown/demos/multiple.vue';
import SplitUsageExample from '@/examples/dropdown/demos/split.vue';

// unit test for component in examples.
describe('Dropdown', () => {
  it('base demo works fine', () => {
    const wrapper = mount(demo);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('Demo buttonUsageExample works fine', () => {
    const wrapper = mount(buttonUsageExample);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('Demo CustomUsageExample works fine', () => {
    const wrapper = mount(CustomUsageExample);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('Demo DisableUsageExample works fine', () => {
    const wrapper = mount(DisableUsageExample);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('Demo EventUsageExample works fine', () => {
    const wrapper = mount(EventUsageExample);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('Demo LongUsageExample works fine', () => {
    const wrapper = mount(LongUsageExample);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('Demo MultipleUsageExample works fine', () => {
    const wrapper = mount(MultipleUsageExample);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('Demo SplitUsageExample works fine', () => {
    const wrapper = mount(SplitUsageExample);
    expect(wrapper.element).toMatchSnapshot();
  });
});

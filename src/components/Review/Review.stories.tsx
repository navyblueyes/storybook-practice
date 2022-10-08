import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Review } from './Review'

export default {
  title: 'Components/Review',
  component: Review,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
} as ComponentMeta<typeof Review>

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />

export const Default = Template.bind({})

export const Excellent = Template.bind({})
Excellent.args = {
  rating: 5.0,
}
export const VeryGood = Template.bind({})
VeryGood.args = {
  rating: 4.4,
}
export const Adequate = Template.bind({})
Adequate.args = {
  rating: 2.4,
}
export const VeryPoor = Template.bind({})
VeryPoor.args = {
  rating: 1,
}

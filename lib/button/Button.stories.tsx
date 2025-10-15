import { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Interactions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    const btn = canvas.getByRole('button', { name: /click me/i })

    await userEvent.click(btn)

    await expect(args.onClick).toHaveBeenCalled()
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  }
};


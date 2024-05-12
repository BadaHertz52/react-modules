import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';

import { BottomModal } from '../lib';

const meta: Meta<typeof BottomModal> = {
  title: 'Modal',
  component: BottomModal,
  argTypes: {
    setOpenModal: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BottomModalSample: Story = {
  args: {
    openModal: true,
    setOpenModal: () => {},
    children: (
      <>
        <h1>Bottom Modal</h1>
        <BottomModal.Button isCloseModal={true}>close</BottomModal.Button>
      </>
    ),
  },
};
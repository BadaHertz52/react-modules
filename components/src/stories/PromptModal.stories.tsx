import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';
import { AppCancelButton, AppConfirmButton, ModalTitle } from '../App';
import { PromptModal } from '../lib';

const meta: Meta<typeof PromptModal> = {
  title: 'Modal',
  component: PromptModal,
  argTypes: {
    closeModal: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PromptModalSample: Story = {
  args: {
    openModal: true,
    closeModal: () => {},
    modalTargetEl: null,
    title: <ModalTitle>alert modal</ModalTitle>,
    label: 'prompt modal',
    input: (
      <input
        className="input-test"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    ),
    buttonContainerJustifyContent: 'space-between',
    children: (
      <>
        <AppCancelButton />
        <AppConfirmButton />
      </>
    ),
  },
};

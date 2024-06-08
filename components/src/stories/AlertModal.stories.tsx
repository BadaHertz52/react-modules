import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';
import { AppModalContents, ModalTitle } from '../App';
import { AlertModal } from '../lib';
import { BASIC_BORDER_RADIUS } from '../lib/constants/modal';

const meta: Meta<typeof AlertModal> = {
  title: 'Modal',
  component: AlertModal,
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

export const AlertModalSample: Story = {
  args: {
    openModal: true,
    closeModal: () => {},
    modalTargetEl: null,
    title: <ModalTitle>alert modal</ModalTitle>,
    contents: (
      <AppModalContents>
        <p>open</p>
        <p>alert modal</p>
      </AppModalContents>
    ),
    buttonContainerJustifyContent: 'right',
    button: (
      <button style={{ backgroundColor: '#111111ed', color: '#ffff', borderRadius: BASIC_BORDER_RADIUS }}>확인</button>
    ),
  },
};

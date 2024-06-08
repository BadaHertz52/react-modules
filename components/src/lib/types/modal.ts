import { ReactElement, ReactNode } from 'react';

export type ModalType = 'center' | 'bottom' | 'toast';

export interface ModalContentsProps {
  children: ReactNode;
}
export interface ModalPosition {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}
export interface Background {
  modal?: string;
  backdrop?: string;
}
export interface ModalCommonProps {
  modalTargetEl: HTMLElement | null;
  openModal: boolean;
  closeModal: () => void;
  isCloseOnEsc?: boolean;
  isCloseOnBackdrop?: boolean;
  contentsPadding?: string;
  borderRadius?: string;
  backgroundColor?: Background;
  children: ReactNode;
  boxShadow?: string;
}

export interface ModalContainerProps extends ModalCommonProps, AnimationProps {}

export interface AnimationProps {
  animationDuration?: number; //단위:ms
  isNeedAnimation?: boolean;
}
export interface BottomModalProps extends ModalCommonProps, AnimationProps {}
export interface ToastModalProps extends ModalCommonProps, AnimationProps {
  position?: ModalPosition;
  toastDuration?: number; //단위:ms
}
export type ButtonContainerJustifyContent =
  | 'center'
  | 'right'
  | 'left'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface AlertModalProps extends Omit<ModalCommonProps, 'children'> {
  title?: ReactNode;
  contents: ReactNode;
  buttonContainerJustifyContent?: ButtonContainerJustifyContent;
  button: ReactNode;
}

export interface ConfirmModalProps extends ModalCommonProps {
  title?: ReactNode;
  contents: ReactNode;
  buttonContainerJustifyContent?: ButtonContainerJustifyContent;
}

export interface PromptModalProps extends Omit<ConfirmModalProps, 'contents'> {
  label: string;
  input: ReactElement<HTMLInputElement>;
}

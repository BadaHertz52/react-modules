import styled from 'styled-components';

import ModalContainer from '@/lib/components/ModalContainer';
import { ModalContents, ModalContentsStyleProps } from '@/lib/components/ModalContainer/Contents';
import { useToastModalAnimation } from '@/lib/hooks';
import { ToastModalProps } from '@/lib/types/modal';

const ToastModalContents = styled(ModalContents)<ModalContentsStyleProps>`
  position: fixed;
  opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
  transition: opacity ${({ $timeout }) => $timeout}ms ease-in-out;
  min-height: initial;
  width: fit-content;
  min-width: initial;
  max-width: initial;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $position }) =>
    $position &&
    `
      top: ${$position.top}px;
      right: ${$position.right}px;
      bottom: ${$position.bottom}px;
      left: ${$position.left}px;
    `};
`;

export default function ToastModal(props: ToastModalProps) {
  const {
    openModal,
    closeModal,
    children,
    borderRadius,
    backgroundColor,
    contentsPadding,
    animationDuration,
    position,
    isNeedAnimation,
    toastDuration,
  } = props;

  if (!position) {
    throw new Error('position을 지정해주세요.');
  }

  const { isOn, timeout } = useToastModalAnimation({
    closeModal,
    animationDuration,
    isNeedAnimation,
    toastDuration,
    openModal,
  });

  return (
    <ModalContainer {...props} closeModal={closeModal}>
      <ToastModalContents
        $position={position}
        $timeout={timeout}
        $isOn={isOn}
        $borderRadius={borderRadius}
        $backgroundColor={backgroundColor}
        $contentsPadding={contentsPadding}
      >
        {children}
      </ToastModalContents>
    </ModalContainer>
  );
}

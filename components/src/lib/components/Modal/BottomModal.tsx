import { ReactElement } from 'react';
import styled from 'styled-components';

import ModalContainer from '@/lib/components/ModalContainer';
import { ModalContents, ModalContentsStyleProps } from '@/lib/components/ModalContainer/Contents';
import { BASIC_BORDER_RADIUS, BASIC_BOTTOM_MODAL_ANIMATION_DURATION } from '@/lib/constants/modal';
import { BottomModalContext } from '@/lib/contexts';
import { useBottomModalAnimation, useModalContext } from '@/lib/hooks';
import { BottomModalProps } from '@/lib/types/modal';

const BottomModalContents = styled(ModalContents)<ModalContentsStyleProps>`
  min-height: 50px;
  position: fixed;
  bottom: 0;
  transform: translateY(${({ $isOn }) => ($isOn ? '0' : '100%')});
  transition: transform ${({ $timeout }) => $timeout}ms ease;
  border-radius: 0;
  border-top-right-radius: ${({ $borderRadius }) => $borderRadius || BASIC_BORDER_RADIUS};
  border-top-left-radius: ${({ $borderRadius }) => $borderRadius || BASIC_BORDER_RADIUS};
  width: inherit;
  min-width: initial;
  max-width: initial;
  box-sizing: border-box;
`;

function BottomModal(props: BottomModalProps) {
  const { closeModal, children, ...rest } = props;
  const {
    isNeedAnimation = true,
    animationDuration = BASIC_BOTTOM_MODAL_ANIMATION_DURATION,
    borderRadius,
    backgroundColor,
    contentsPadding,
    openModal,
  } = rest;

  const { isOn, fadeOutModal, timeout } = useBottomModalAnimation({
    isNeedAnimation,
    animationDuration,
    closeModal,
    openModal,
  });

  return (
    <ModalContainer {...rest} closeModal={closeModal}>
      <BottomModalContext.Provider value={{ handleCloseModal: fadeOutModal }}>
        <ModalContainer.Backdrop handleCloseModal={fadeOutModal} />
        <BottomModalContents
          $isOn={isOn}
          $timeout={timeout}
          $borderRadius={borderRadius}
          $backgroundColor={backgroundColor}
          $contentsPadding={contentsPadding}
        >
          {children}
        </BottomModalContents>
      </BottomModalContext.Provider>
    </ModalContainer>
  );
}

function BottomModalCloseButtonWrapper({ children }: { children: ReactElement<HTMLButtonElement> }) {
  const { handleCloseModal } = useModalContext(BottomModalContext);

  return <div onClick={handleCloseModal}>{children}</div>;
}

BottomModal.CloseButtonWrapper = BottomModalCloseButtonWrapper;

export default BottomModal;

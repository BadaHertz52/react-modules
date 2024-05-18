import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import Backdrop from './Backdrop';
import Contents from './Contents';
import ModalCloseButtonWrapper from './ModalCloseButtonWrapper';

import ModalPortal from '@/lib/components/ModalPortal';
import { ModalContainerContext } from '@/lib/contexts';
import { ModalContainerProps } from '@/lib/types/modal';
import '@/lib/styles/reset.css';

interface ModalWrapperProps {
  $width: string | number;
  $margin: string | number;
}

const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  width: ${({ $width }) => $width};
  height: 100vh;
  margin: ${({ $margin }) => $margin};
`;

function ModalContainer(props: ModalContainerProps) {
  const { openModal, children, modalTargetEl, ...rest } = props;
  const [styleProps, setStyleProps] = useState<ModalWrapperProps>({
    $width: '100vw',
    $margin: 'inherit',
  });

  useLayoutEffect(() => {
    if (!modalTargetEl) return;

    const computedStyle = window.getComputedStyle(modalTargetEl);
    const { width } = modalTargetEl.getBoundingClientRect();
    const { margin } = computedStyle;

    setStyleProps({ $width: `${width}px`, $margin: margin });
  }, [modalTargetEl]);

  return (
    <>
      {openModal && (
        <ModalPortal>
          <ModalContainerContext.Provider value={{ ...rest }}>
            <ModalWrapper {...styleProps}>{children}</ModalWrapper>
          </ModalContainerContext.Provider>
        </ModalPortal>
      )}
    </>
  );
}

ModalContainer.Backdrop = Backdrop;
ModalContainer.CloseButtonWrapper = ModalCloseButtonWrapper;
ModalContainer.Contents = Contents;

export default ModalContainer;

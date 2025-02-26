import { ReactNode } from 'react';
import styled from 'styled-components';

import { BASIC_BACKGROUND_COLOR, BASIC_BORDER_RADIUS, BASIC_BOX_SHADOW, BASIC_PADDING } from '@/lib/constants/modal';
import { ModalContainerContext } from '@/lib/contexts';
import { useModalContext } from '@/lib/hooks';
import { Background, ModalPosition } from '@/lib/types/modal';

export interface ModalContentsStyleProps {
  $borderRadius: string | undefined;
  $backgroundColor: Background | undefined;
  $contentsPadding: string | undefined;
  $isOn?: boolean;
  $timeout?: number;
  $position?: ModalPosition;
  $boxShadow?: string;
}
/**
 * Modal 내의 children을 감싸는 Contents의 동일한 스타일을 적용할 수 있도록 하는 스타일 컴포넌트,
 * ModalContents를 상속받아서 모달 타입별로 다른 Contents를 만들 수 있다.
 */
export const ModalContents = styled.div<ModalContentsStyleProps>`
  border-radius: ${({ $borderRadius }) => $borderRadius || BASIC_BORDER_RADIUS};
  min-width: 50%;
  max-width: 90%;
  min-height: 1rem;
  max-height: 90vh;
  background-color: ${({ $backgroundColor }) => $backgroundColor?.modal || BASIC_BACKGROUND_COLOR.modal};
  padding: ${({ $contentsPadding }) => $contentsPadding || BASIC_PADDING};
  position: relative;
  box-sizing: border-box;
  -webkit-box-shadow: ${({ $boxShadow }) => $boxShadow ?? BASIC_BOX_SHADOW};
  box-shadow: ${({ $boxShadow }) => $boxShadow ?? BASIC_BOX_SHADOW};

  @media screen and (max-width: 435px) {
    min-width: 80vw;
  }
`;
/**
 * Modal 내의 children을 감싸는 Contents의 동일한 스타일을 적용할 수 있도록 하는 컴포넌트
 * @returns
 */
export default function Contents({ children }: { children: ReactNode }) {
  const {
    borderRadius = BASIC_BORDER_RADIUS,
    backgroundColor = BASIC_BACKGROUND_COLOR,
    contentsPadding = BASIC_PADDING,
    boxShadow,
  } = useModalContext(ModalContainerContext);

  return (
    <ModalContents
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      $contentsPadding={contentsPadding}
      $boxShadow={boxShadow}
    >
      {children}
    </ModalContents>
  );
}

import styled from 'styled-components';

import { ModalCommonProps } from '../../types/modal';
import ModalContainer from '../ModalContainer';

const CenterContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function CenterModal(props: ModalCommonProps) {
  const { setOpenModal, children, ...rest } = props;

  const closeModal = () => setOpenModal(false);
  return (
    <ModalContainer {...rest} closeModal={closeModal}>
      <ModalContainer.Backdrop handleCloseModal={closeModal} />
      <CenterContentsWrapper>
        <ModalContainer.Contents>{children}</ModalContainer.Contents>
      </CenterContentsWrapper>
    </ModalContainer>
  );
}

export default CenterModal;
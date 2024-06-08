import CenterModal from './CenterModal';

import ButtonContainer from '@/lib/components/ButtonContainer';
import { AlertModalProps } from '@/lib/types/modal';

export default function AlertModal(props: AlertModalProps) {
  const { closeModal, title, contents, buttonContainerJustifyContent = 'right', button } = props;

  return (
    <CenterModal {...props}>
      {title}
      {contents}
      <ButtonContainer $buttonContainerJustifyContent={buttonContainerJustifyContent} onClick={closeModal}>
        {button}
      </ButtonContainer>
    </CenterModal>
  );
}

import { useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';

import {
  AlertModal,
  BottomModal,
  CenterModal,
  ConfirmModal,
  ModalContainer,
  PromptModal,
  ToastModal,
  usePosition,
} from './lib';
import { BASIC_BORDER_RADIUS } from './lib/constants/modal';

export const ModalTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const AppModalContents = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  p {
    margin-bottom: 0.625rem;
  }
`;

export function AppConfirmButton() {
  return (
    <button
      style={{ backgroundColor: 'black', color: '#ffff', borderRadius: BASIC_BORDER_RADIUS }}
      onClick={() => alert('확인')}
    >
      확인
    </button>
  );
}
export function AppCancelButton() {
  return <button style={{ backgroundColor: '#ffff', color: 'black', borderRadius: BASIC_BORDER_RADIUS }}>취소</button>;
}

function App() {
  const [openCenterModal, setOpenCenterModal] = useState(false);
  const [openBottomModal, setOpenBottomModal] = useState(false);
  const [openToastModal, setOpenToastModal] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openPromptModal, setOpenPromptModal] = useState(false);
  const positionRef = useRef<HTMLDivElement>(null);
  const { position } = usePosition(positionRef.current);
  const rootEl = document.getElementById('root');
  return (
    <>
      <button onClick={() => setOpenCenterModal(true)}> center modal open</button>
      <button onClick={() => setOpenBottomModal(true)}> bottom modal open</button>
      <button onClick={() => setOpenToastModal(true)}> toast modal open</button>
      <button onClick={() => setOpenAlertModal(true)}> alert modal open</button>
      <button onClick={() => setOpenConfirmModal(true)}> confirm modal open</button>
      <button onClick={() => setOpenPromptModal(true)}> prompt modal open</button>

      <BottomModal openModal={openBottomModal} closeModal={() => setOpenBottomModal(false)} modalTargetEl={rootEl}>
        <h1>Bottom Modal</h1>
        <BottomModal.CloseButtonWrapper>
          <button>close</button>
        </BottomModal.CloseButtonWrapper>
      </BottomModal>

      <CenterModal openModal={openCenterModal} closeModal={() => setOpenCenterModal(false)} modalTargetEl={rootEl}>
        <h1>Center Modal</h1>
        <ModalContainer.CloseButtonWrapper>
          <button>close</button>
        </ModalContainer.CloseButtonWrapper>
      </CenterModal>

      <ToastModal
        openModal={openToastModal}
        closeModal={() => setOpenToastModal(false)}
        modalTargetEl={rootEl}
        position={position}
        isNeedAnimation={true}
        backgroundColor={{ modal: 'rgb(248, 255, 188)' }}
        contentsPadding="1rem 0.875rem"
        boxShadow=""
      >
        <div style={{ width: '300px', height: '2rem', textAlign: 'center' }}>
          <h2>toast modal</h2>
        </div>
      </ToastModal>
      <div ref={positionRef} id="toast-modal-position">
        toast modal position
      </div>

      <AlertModal
        openModal={openAlertModal}
        closeModal={() => setOpenAlertModal(false)}
        modalTargetEl={rootEl}
        title={<ModalTitle>alert modal</ModalTitle>}
        contents={
          <AppModalContents>
            <p>open</p>
            <p>alert modal</p>
          </AppModalContents>
        }
        buttonContainerJustifyContent="right"
        button={
          <button style={{ backgroundColor: '#111111ed', color: '#ffff', borderRadius: BASIC_BORDER_RADIUS }}>
            확인
          </button>
        }
      />

      <ConfirmModal
        openModal={openConfirmModal}
        closeModal={() => setOpenConfirmModal(false)}
        modalTargetEl={rootEl}
        title={<ModalTitle>alert modal</ModalTitle>}
        contents={
          <AppModalContents>
            <p>open</p>
            <p>confirm modal</p>
          </AppModalContents>
        }
        buttonContainerJustifyContent="space-between"
      >
        <AppConfirmButton />
        <AppCancelButton />
      </ConfirmModal>
      <PromptModal
        openModal={openPromptModal}
        closeModal={() => setOpenPromptModal(false)}
        modalTargetEl={rootEl}
        title={<ModalTitle>alert modal</ModalTitle>}
        label="prompt modal"
        input={
          <input
            className="input-test"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        }
        buttonContainerJustifyContent="space-between"
      >
        <AppCancelButton />
        <AppConfirmButton />
      </PromptModal>
    </>
  );
}

export default App;

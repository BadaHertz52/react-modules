# badahertz52-react-modules-components

**react의 createPortal을 사용한 모달 모듈을 제공하는 라이브러리 입니다.**

  <img src="https://raw.githubusercontent.com/BadaHertz52/react-modules/step2/components/reademeImg/modal.gif" width="500px" style='border:2px solid black'>

### Skill

- react (with Vite)
- typescript
- styled-components

## Install

```
npm i badahertz52-react-modules-components
```

## How to use?

### 모달이 열렸을 경우 dom 구조

모달은 `modal-root`안에서 열립니다.
모달의 너비는 `modalTargetElement` 의 뷰상 너비와 동일하며(기본값은 100vw), 높이는 100vh입니다.

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

### Modal 구조

children에 모달 타입별 모달들(ex: AlertModal, ConfirmModal)이 들어갑니다.

```tsx
{
  openModal && (
    <ModalPortal>
      <ModalContainerContext.Provider value={{ ...rest }}>
        <ModalWrapper>{children}</ModalWrapper>
      </ModalContainerContext.Provider>
    </ModalPortal>
  );
}
```

### ModalContainer 하위 컴포넌트

```tsx
function ModalCloseButtonWrapper({ children }: { children: ReactElement<HTMLButtonElement> }): JSX.Element;

function Backdrop({ handleCloseModal }: { handleCloseModal: () => void }): JSX.Element;

function Contents({ children }: { children: `ReactNode` }): JSX.Element;
```

| 구조                              | 설명                                                                                                                                                                                                                                                                                           |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ModalContainer.CloseButtonWrapper | <ul><li>모달 닫기 기능을 제공하는 ModalContainer의 하위 컴포넌트</li><li> ModalContainer.CloseButtonWrapper의 하위에 button element를 두어서 사용하면 됨</li><li>BottomModal의 경우 BottomModal.closeButtonWrapper를 사용하면 애니메이션 효과가 담긴 모달 닫기 기능을 사용할 수 있음</li></ul> |
| ModalContainer.Backdrop           | <ul><li>모달의 배경을 담당</li> <li>isCloseOnBackdrop이 true이면 배경 클릭 시 모달창 닫힘 </li> <li>isCloseOnEsc이 true이면 esc키를 눌러서 모달창 닫기 가능</li></ul>                                                                                                                          |
| ModalContainer.Contents           | 모달의 children props가 들어가는 공간으로, 기본적인 스타일이 적용됨                                                                                                                                                                                                                            |

### Modal props

#### 기본값

```tsx
const BASIC_BOTTOM_MODAL_ANIMATION_DURATION = 600;

const BASIC_PADDING = '2rem 1.5rem';

const BASIC_BORDER_RADIUS = '0.625rem';

const BASIC_BACKGROUND_COLOR = {
  modal: '#ffff',
  backdrop: '#5959599b',
};

const BASIC_BUTTON_STYLE: CSSProperties = {
  padding: '0.625rem 0.875rem',
  backgroundColor: '#ffff',
  color: 'black',
  fontSize: '1rem',
};

const BASIC_BOX_SHADOW = '0px 0px 18px -4px rgba(0, 0, 0, 0.21)';
```

```ts
interface Background {
  modal?: string;
  backdrop?: string;
}

type`ButtonContainerJustifyContent` = 'center' | 'right' | 'left' | 'space-around' | 'space-between' | 'space-evenly';
```

#### AlertModal

| Prop                          | 설명                                                                                                                                                                                                                                                             | 타입                                | 필수 여부 | 기본값                   |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- | ------------------------ |
| openModal                     | 모달의 가시성을 제어합니다.                                                                                                                                                                                                                                      | `boolean`                           | Y         | -                        |
| setOpenModal                  | openModal의 상태를 설정하는 함수입니다.                                                                                                                                                                                                                          | `Dispatch<SetStateAction<boolean>>` | Y         | -                        |
| isCloseOnEscEsc               | 키를 눌렀을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                           | `boolean`                           | N         | `true`                   |
| isCloseOnBackdrop             | 배경을 클릭했을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                       | `boolean`                           | N         | `true`                   |
| contentsPadding               | 모달 내용의 패딩입니다.                                                                                                                                                                                                                                          | `string`                            | N         | `BASIC_PADDING`          |
| borderRadius                  | 모달의 테두리 반경입니다.                                                                                                                                                                                                                                        | `string`                            | N         | `BASIC_BORDER_RADIUS`    |
| backgroundColor               | 모달과 배경의 배경색입니다.                                                                                                                                                                                                                                      | `Background`                        | N         | `BASIC_BACKGROUND_COLOR` |
| title                         | 모달의 제목입니다.                                                                                                                                                                                                                                               | `ReactNode`                         | Y         | -                        |
| contents                      | 모달의 내용입니다.                                                                                                                                                                                                                                               | `ReactNode`                         | Y         | -                        |
| buttonContainerJustifyContent | 버튼 컨테이너의 정렬 방식입니다.                                                                                                                                                                                                                                 | `ButtonContainerJustifyContent`     | Y         | -                        |
| button                        | AlertModal의 버튼입니다.                                                                                                                                                                                                                                         | `ReactNode`                         | Y         | -                        |
| modalTargetEl                 | <ul><li>모달이 띄워지는 element로, 모달의 너비,마진은 modalTargetEl의 너비와 마진값을 따릅니다.</li> <li>보통은 body 하위에 #root element가 있다면 이를 사용하시면 됩니다.</li> <li>modalTargetEl의 값을 찾지 못하면 width은100vw, margin값은 0입니다.</li></ul> | `HTMLElement or null`               | Y         | -                        |
| boxShadow                     | 모달의 box shadow, box shadow을 사용하지 않으려면 빈문자열을 사용하면 됩니다.                                                                                                                                                                                    | `string`                            | N         | BASIC_BOX_SHADOW         |

#### BottomModal

| Props             | 설명                                                                                                                                                                                                                                                            | 타입                                | 필수 여부 | 기본값                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- | --------------------- |
| openModal         | 모달의 가시성을 제어합니다.                                                                                                                                                                                                                                     | `boolean`                           | Y         | -                     |
| setOpenModal      | openModal의 상태를 설정하는 함수입니다.                                                                                                                                                                                                                         | `Dispatch<SetStateAction<boolean>>` | Y         | -                     |
| isCloseOnEscEsc   | 키를 눌렀을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                          | `boolean`                           | N         | `true`                |
| isCloseOnBackdrop | 배경을 클릭했을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                      | `boolean`                           | N         | `true`                |
| contentsPadding   | 모달 내용의 패딩입니다.                                                                                                                                                                                                                                         | `string`                            | N         | `BASIC_PADDING`       |
| borderRadius      | 모달의 테두리 반경입니다.                                                                                                                                                                                                                                       | `string`                            | N         | `BASIC_BORDER_RADIUS` |
| backgroundColor   | 모달과 배경의 배경색입니다.                                                                                                                                                                                                                                     | `Background`                        | N         | -                     |
| children          | 모달의 내용입니다.                                                                                                                                                                                                                                              | `ReactNode`                         | Y         | -                     |
| animationDuration | 애니메이션의 지속 시간(밀리초)입니다.                                                                                                                                                                                                                           | `number`                            | N         | 600                   |
| isNeedAnimation   | 애니메이션이 필요한지 여부를 결정합니다.                                                                                                                                                                                                                        | `boolean`                           | N         | `true`                |
| modalTargetEl     | <ul><li>모달이 띄워지는 element로, 모달의 너비,마진은 modalTargetEl의 너비와 마진값을 따릅니다.</li> <li>보통은 body 하위에 #root element가 있다면 이를 사용하시면 됩니다.</li><li>modalTargetEl의 값을 찾지 못하면 width은100vw, margin값은 0입니다.</li></ul> | `HTMLElement or null`               | Y         | -                     |
| boxShadow         | 모달의 box shadow, box shadow을 사용하지 않으려면 빈문자열을 사용하면 됩니다.                                                                                                                                                                                   | `string`                            | N         | BASIC_BOX_SHADOW      |

#### CenterModal

| Props             | 설명                                                                                                                                                                                                                                                            | 타입                                | 필수 여부 | 기본값                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- | --------------------- |
| openModal         | 모달의 가시성을 제어합니다.                                                                                                                                                                                                                                     | `boolean`                           | Y         | -                     |
| setOpenModal      | openModal의 상태를 설정하는 함수입니다.                                                                                                                                                                                                                         | `Dispatch<SetStateAction<boolean>>` | Y         | -                     |
| isCloseOnEscEsc   | 키를 눌렀을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                          | `boolean`                           | N         | `true`                |
| isCloseOnBackdrop | 배경을 클릭했을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                      | `boolean`                           | N         | `true`                |
| contentsPadding   | 모달 내용의 패딩입니다.                                                                                                                                                                                                                                         | `string`                            | N         | `BASIC_PADDING`       |
| borderRadius      | 모달의 테두리 반경입니다.                                                                                                                                                                                                                                       | `string`                            | N         | `BASIC_BORDER_RADIUS` |
| backgroundColor   | 모달과 배경의 배경색입니다.                                                                                                                                                                                                                                     | `Background`                        | N         | -                     |
| children          | 모달의 내용입니다.                                                                                                                                                                                                                                              | `ReactNode`                         | Y         | -                     |
| modalTargetEl     | <ul><li>모달이 띄워지는 element로, 모달의 너비,마진은 modalTargetEl의 너비와 마진값을 따릅니다.</li> <li>보통은 body 하위에 #root element가 있다면 이를 사용하시면 됩니다.</li><li>modalTargetEl의 값을 찾지 못하면 width은100vw, margin값은 0입니다.</li></ul> | `HTMLElement or null`               | Y         | -                     |
| boxShadow         | 모달의 box shadow, box shadow을 사용하지 않으려면 빈문자열을 사용하면 됩니다.                                                                                                                                                                                   | `string`                            | N         | BASIC_BOX_SHADOW      |

#### ConfirmModal

| Props                         | 설명                                                                                                                                                                                                                                                            | 타입                                | 필수 여부 | 기본값                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- | ------------------------ |
| openModal                     | 모달의 가시성을 제어합니다.                                                                                                                                                                                                                                     | `boolean`                           | Y         | -                        |
| setOpenModal                  | openModal의 상태를 설정하는 함수입니다.                                                                                                                                                                                                                         | `Dispatch<SetStateAction<boolean>>` | Y         | -                        |
| isCloseOnEscEsc               | 키를 눌렀을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                          | `boolean`                           | N         | true                     |
| isCloseOnBackdrop             | 배경을 클릭했을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                      | `boolean`                           | N         | true                     |
| contentsPadding               | 모달 내용의 패딩입니다.                                                                                                                                                                                                                                         | `string`                            | N         | `BASIC_PADDING`          |
| borderRadius                  | 모달의 테두리 반경입니다.                                                                                                                                                                                                                                       | `string`                            | N         | `BASIC_BORDER_RADIUS`    |
| backgroundColor               | 모달과 배경의 배경색입니다.                                                                                                                                                                                                                                     | `Background`                        | N         | `BASIC_BACKGROUND_COLOR` |
| contents                      | 모달의 내용입니다.                                                                                                                                                                                                                                              | `ReactNode`                         | Y         | -                        |
| buttonContainerJustifyContent | 버튼 컨테이너의 정렬 방식입니다.                                                                                                                                                                                                                                | `ButtonContainerJustifyContent`     | N         | -                        |
| children                      | <ul><li>확인,취소 버튼으로 사용할 버튼들을 children으로 설정해주세요. </li><li>children안의 버튼이 클릭 되면 모달이 닫히는 기능이 작동합니다.</li></ul>                                                                                                         | `ReactNode`                         | Y         | -                        |
| modalTargetEl                 | <ul><li>모달이 띄워지는 element로, 모달의 너비,마진은 modalTargetEl의 너비와 마진값을 따릅니다.</li> <li>보통은 body 하위에 #root element가 있다면 이를 사용하시면 됩니다.</li><li>modalTargetEl의 값을 찾지 못하면 width은100vw, margin값은 0입니다.</li></ul> | `HTMLElement or null`               | Y         | -                        |
| boxShadow                     | 모달의 box shadow, box shadow을 사용하지 않으려면 빈문자열을 사용하면 됩니다.                                                                                                                                                                                   | `string`                            | N         | BASIC_BOX_SHADOW         |

#### PromptModal

| Props                         | 설명                                                                                                                                                                                                                                                            | 타입                                | 필수 여부 | 기본값                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- | ------------------------ |
| openModal                     | 모달의 가시성을 제어합니다                                                                                                                                                                                                                                      | .`boolean`                          | Y         | -                        |
| setOpenModal                  | openModal의 상태를 설정하는 함수입니다.                                                                                                                                                                                                                         | `Dispatch<SetStateAction<boolean>>` | Y         | -                        |
| isCloseOnEscEsc               | 키를 눌렀을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                          | `boolean`                           | N         | true                     |
| isCloseOnBackdrop             | 배경을 클릭했을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                      | `boolean`                           | N         | true                     |
| contentsPadding               | 모달 내용의 패딩입니다.                                                                                                                                                                                                                                         | `string`                            | N         | `BASIC_PADDING`          |
| borderRadius                  | 모달의 테두리 반경입니다.                                                                                                                                                                                                                                       | `string`                            | N         | `BASIC_BORDER_RADIUS`    |
| backgroundColor               | 모달과 배경의 배경색입니다.                                                                                                                                                                                                                                     | `Background`                        | N         | `BASIC_BACKGROUND_COLOR` |
| title                         | 모달의 제목입니다.                                                                                                                                                                                                                                              | `ReactNode`                         | N         | -                        |
| buttonContainerJustifyContent | 버튼 컨테이너의 정렬 방식입니다.                                                                                                                                                                                                                                | `ButtonContainerJustifyContent`     | N         | -                        |
| children                      | <ul><li>확인,취소 버튼으로 사용할 버튼들을 children으로 설정해주세요. </li><li>children안의 버튼이 클릭 되면 모달이 닫히는 기능이 작동합니다.</li></ul>                                                                                                         | `ReactNode`                         | Y         | -                        |
| label                         | 입력 필드의 레이블입니다.                                                                                                                                                                                                                                       | `string`                            | Y         | -                        |
| input                         | 입력 필드의 구성입니다.                                                                                                                                                                                                                                         | `ReactElement<HTMLInputElement>`    | Y         | -                        |
| modalTargetEl                 | <ul><li>모달이 띄워지는 element로, 모달의 너비,마진은 modalTargetEl의 너비와 마진값을 따릅니다.</li> <li>보통은 body 하위에 #root element가 있다면 이를 사용하시면 됩니다.</li><li>modalTargetEl의 값을 찾지 못하면 width은100vw, margin값은 0입니다.</li></ul> | `HTMLElement or null`               | Y         | -                        |
| boxShadow                     | 모달의 box shadow, box shadow을 사용하지 않으려면 빈문자열을 사용하면 됩니다.                                                                                                                                                                                   | `string`                            | N         | BASIC_BOX_SHADOW         |

#### TostModal

| Props             | 설명                                                                                                                                                                                                                                                            | 타입                                | 필수 여부 | 기본값                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- | ------------------------ |
| openModal         | 모달의 가시성을 제어합니다.                                                                                                                                                                                                                                     | `boolean`                           | Y         | -                        |
| setOpenModal      | openModal의 상태를 설정하는 함수입니다.                                                                                                                                                                                                                         | `Dispatch<SetStateAction<boolean>>` | Y         | -                        |
| isCloseOnEscEsc   | 키를 눌렀을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                          | `boolean`                           | N         | `true`                   |
| isCloseOnBackdrop | 배경을 클릭했을 때 모달이 닫혀야 하는지 여부를 결정합니다.                                                                                                                                                                                                      | `boolean`                           | N         | `true`                   |
| contentsPadding   | 모달 내용의 패딩입니다.                                                                                                                                                                                                                                         | `string`                            | N         | `BASIC_PADDING`          |
| borderRadius      | 모달의 테두리 반경입니다.                                                                                                                                                                                                                                       | `string`                            | N         | `BASIC_BORDER_RADIUS`    |
| backgroundColor   | 모달과 배경의 배경색입니다                                                                                                                                                                                                                                      | .Background                         | N         | `BASIC_BACKGROUND_COLOR` |
| children          | 모달의 내용입니다.                                                                                                                                                                                                                                              | `ReactNode`                         | Y         | -                        |
| animationDuration | 애니메이션의 지속 시간(밀리초)입니다.                                                                                                                                                                                                                           | `number`                            | N         | 6000                     |
| isNeedAnimation   | 애니메이션이 필요한지 여부를 결정합니다.                                                                                                                                                                                                                        | `boolean`                           | N         | -                        |
| position          | 토스트 모달의 위치입니다.                                                                                                                                                                                                                                       | `ModalPosition`                     | Y         | -                        |
| toastDuration     | 토스트 모달의 지속 시간(밀리초)입니다.                                                                                                                                                                                                                          | `number`                            | N         | 6000                     |
| modalTargetEl     | <ul><li>모달이 띄워지는 element로, 모달의 너비,마진은 modalTargetEl의 너비와 마진값을 따릅니다.</li> <li>보통은 body 하위에 #root element가 있다면 이를 사용하시면 됩니다.</li><li>modalTargetEl의 값을 찾지 못하면 width은100vw, margin값은 0입니다.</li></ul> | `HTMLElement or null`               | Y         | -                        |
| boxShadow         | 모달의 box shadow, box shadow을 사용하지 않으려면 빈문자열을 사용하면 됩니다.                                                                                                                                                                                   | `string`                            | N         | BASIC_BOX_SHADOW         |

### 제공하는 기능

#### 모달

- Modal : 합성 컴포넌트로 필요한 부분들을 가지고 사용자가 원하는 모달을 만들 수 있습니다.

**기본으로 제공하는 모달**
|모달|설명|
|---|---|
|AlertModal| 사용자에게 메시지를 전달하고 확인 버튼만 제공|
|BottomModal|페이지 하단에서 등장하는 모달|
|CenterModal|배경을 뒤로 하고 중앙에 띄어지는 모달|
|ConfirmModal|사용자에게 선택지를 제공하고 확인 및 취소 버튼 제공|
|PromptModal|사용자로부터 입력값을 받을 수 있는 입력 필드와 확인/취소 버튼 제공|
|ToastModal|일정 시간 나타났다가 사라지는 모달|

- [스토리북 바로가기](https://6620c65c99e8a4a3cde004a4-yuticamspc.chromatic.com/)

#### 커스텀 훅

<br/>

**useBottomModalAnimation**

- Bottom Modal 등장,퇴장 시 효과를 주는 훅입니다.
- isNeedAnimation의 값이 true일 경우에만 등장,퇴장 효과가 생성됩니다.
- Bottom Modal에서는 isNeedAnimation의 기본값이 true 입니다.

```tsx
function useBottomModalAnimation({ isNeedAnimation, animationDuration, closeModal }: UseBottomModalAnimationProps): {
  isOn: boolean;
  fadeOutModal: () => void;
  timeout: number;
};
```

<br/>

**useModalContext**

- Context로 전해지는 Context의 값이 없으면, 오류를 던지고 해당 값이 있다면 이를 반환하는 hook입니다.

<br/>

**usePosition**

- Tost Modal에서 모달이 열린 장소를 찾는 데 사용할 수 았는 hook입니다.

  ```ts
  function usePosition(targetElement: HTMLElement | null | undefined): {
    position: ModalPosition;
  };
  ```

  <br/>

**useToastModalAnimation**

- Tost Modal의 등장,퇴장 시 효과를 주는 훅입니다.
- isNeedAnimation의 값이 true일 경우에만 등장,퇴장 효과가 생성됩니다.
- Tost Modal에서는 isNeedAnimation의 기본값이 false 입니다.

```tsx
function useToastModalAnimation(): {
  isOn: boolean;
  position: ModalPosition | undefined;
  timeout: number;
};
```

#### context

**BottomModalContext**

- BottomModal 의 등장,퇴장 애니메이션이 적용된 모달 닫기 기능을 BottomModal 내에서 어디서든 사용할 수 있도록 제공된 context입니다.

**ModalContainerContext**

- ModalContainer의 내부에서 ModalContainer의 props를 쓸 수 있도록 하는 context입니다.

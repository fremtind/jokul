import{r as l,R as e}from"./index-siqcju79.js";import{B as o}from"./Button-Bm5jRD6q.js";import{I as v}from"./InputGroup-BJwbXp8L.js";import{B as y}from"./BaseTextInput-BcWqlF22.js";import{P as C}from"./PopupTip-CTc2k1KN.js";import{d as m,a as i,c as s,M as d,e as u,f as c,g as p,b as M}from"./Modal-DkEi8KmZ.js";import{u as b}from"./useModal-PTsSX8Wr.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./IconButton-BsqD9nTf.js";import"./QuestionIcon-FRW8RpkI.js";import"./TooltipTrigger-CBbkTK_V.js";import"./getThemeAndDensity-CIeob-5A.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./CloseIcon-bvBUMA_V.js";import"./index-Chjiymov.js";const ae={title:"Komponenter/Modal",component:M,subcomponents:{ModalActions:p,ModalBody:c,ModalCloseButton:u,ModalContainer:d,ModalHeader:s,ModalOverlay:i,ModalTitle:m},parameters:{layout:"centered"},tags:["autodocs"]},n={args:{role:"document"},render:w=>{const[r,f]=l.useState(!1),a="Bekreft sletting",[t,{title:B,overlay:E,container:h,modal:g,closeButton:k}]=b({title:a});return l.useEffect(()=>{t&&t.show()},[t]),e.createElement(e.Fragment,null,e.createElement(o,{onClick:S=>f(!r)},"Vis modal"),r&&e.createElement(d,{...h},e.createElement(i,{...E}),e.createElement(M,{...g},e.createElement(s,null,e.createElement(m,{...B},a),e.createElement(u,{...k})),e.createElement(c,null,"Er du sikker på at du vil slette Foo Bar Baz?",e.createElement(v,{label:"Fødselsnummer",helpLabel:void 0,errorLabel:void 0,tooltip:e.createElement(C,{content:e.createElement(e.Fragment,null,"Du må fylle ut fødelsnummer eller D-nummer. Se hvordan du finner D-nummer.")})},e.createElement(y,null))),e.createElement(p,null,e.createElement(o,{onClick:()=>{t?.hide()}},"Bekreft"),e.createElement(o,{onClick:()=>t?.hide()},"Avbryt")))))}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    role: "document"
  },
  render: args => {
    const [showModal, setShowModal] = useState(false);
    const heading = "Bekreft sletting";
    const [instance, {
      title,
      overlay,
      container,
      modal,
      closeButton
    }] = useModal({
      title: heading
    });
    useEffect(() => {
      if (!instance) {
        return;
      }
      instance.show();
    }, [instance]);
    return <>
                <Button onClick={e => setShowModal(!showModal)}>
                    Vis modal
                </Button>
                {showModal && <ModalContainer {...container}>
                        <ModalOverlay {...overlay} />
                        <ModalComponent {...modal}>
                            <ModalHeader>
                                <ModalTitle {...title}>{heading}</ModalTitle>
                                <ModalCloseButton {...closeButton} />
                            </ModalHeader>
                            <ModalBody>
                                Er du sikker på at du vil slette Foo Bar Baz?
                                <InputGroup label="Fødselsnummer" helpLabel={undefined} errorLabel={undefined} tooltip={<PopupTip content={<>
                                                    Du må fylle ut fødelsnummer
                                                    eller D-nummer. Se hvordan
                                                    du finner D-nummer.
                                                </>} />}>
                                    <BaseTextInput />
                                </InputGroup>
                            </ModalBody>
                            <ModalActions>
                                <Button onClick={() => {
              instance?.hide();
            }}>
                                    Bekreft
                                </Button>
                                <Button onClick={() => instance?.hide()}>
                                    Avbryt
                                </Button>
                            </ModalActions>
                        </ModalComponent>
                    </ModalContainer>}
            </>;
  }
}`,...n.parameters?.docs?.source}}};const le=["Modal"];export{n as Modal,le as __namedExportsOrder,ae as default};

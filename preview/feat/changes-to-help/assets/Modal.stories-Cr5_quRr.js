import{r as s,j as n}from"./iframe-DfW9cJKP.js";import{B as t}from"./Button-C_mgjBq6.js";import{H as g}from"./Help-Dl0Owtme.js";import{I as k}from"./InputGroup-BaU-3Cwm.js";import{B as v}from"./BaseTextInput-BACKDeZQ.js";import{d as l,a as d,c as i,M as m,e as u,f as c,g as p,b as M}from"./Modal-DNTSszDn.js";import{u as C}from"./useModal-DZUJumfS.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-C9-dcbV6.js";import"./Loader-CRuOj7_2.js";import"./useDelayedRender-DuPNSOeZ.js";import"./Icon-DNTsqUX2.js";import"./useId-Ds-Qzrvb.js";import"./Label-R_qJvIG4.js";import"./SupportLabel-CJCkv5SX.js";import"./WarningIcon-CZSJ9Q8z.js";import"./IconButton-fqOSs0Q8.js";import"./CloseIcon-DmxvWPJS.js";import"./index-Ce0--t75.js";import"./index-Chjiymov.js";const U={title:"Komponenter/Modal",component:M,subcomponents:{ModalActions:p,ModalBody:c,ModalCloseButton:u,ModalContainer:m,ModalHeader:i,ModalOverlay:d,ModalTitle:l},parameters:{layout:"centered"},tags:["autodocs"]},o={args:{role:"document"},render:b=>{const[r,h]=s.useState(!1),a="Bekreft sletting",[e,{title:f,overlay:B,container:x,modal:j,closeButton:y}]=C({title:a});return s.useEffect(()=>{e&&e.show()},[e]),n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:w=>h(!r),children:"Vis modal"}),r&&n.jsxs(m,{...x,children:[n.jsx(d,{...B}),n.jsxs(M,{...j,children:[n.jsxs(i,{children:[n.jsx(l,{...f,children:a}),n.jsx(u,{...y})]}),n.jsxs(c,{children:["Er du sikker på at du vil slette Foo Bar Baz?",n.jsx(k,{label:"Fødselsnummer",tooltip:n.jsx(g,{buttonText:"Hva betyr dette?",children:"Du må fylle ut fødelsnummer eller D-nummer. Se hvordan du finner D-nummer."}),children:n.jsx(v,{})})]}),n.jsxs(p,{children:[n.jsx(t,{onClick:()=>e?.hide(),children:"Avbryt"}),n.jsx(t,{onClick:()=>{e?.hide()},children:"Bekreft"})]})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                                <InputGroup label="Fødselsnummer" tooltip={<Help buttonText="Hva betyr dette?">
                                            Du må fylle ut fødelsnummer eller
                                            D-nummer. Se hvordan du finner
                                            D-nummer.
                                        </Help>}>
                                    <BaseTextInput />
                                </InputGroup>
                            </ModalBody>
                            <ModalActions>
                                <Button onClick={() => instance?.hide()}>
                                    Avbryt
                                </Button>
                                <Button onClick={() => {
              instance?.hide();
            }}>
                                    Bekreft
                                </Button>
                            </ModalActions>
                        </ModalComponent>
                    </ModalContainer>}
            </>;
  }
}`,...o.parameters?.docs?.source}}};const W=["Modal"];export{o as Modal,W as __namedExportsOrder,U as default};

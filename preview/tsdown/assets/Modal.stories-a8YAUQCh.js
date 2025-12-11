import{r as s,j as n}from"./iframe-R6aOaHTp.js";import{B as t}from"./Button-C0SOP0LI.js";import{B as y}from"./Help-Bqo-s8zn.js";import{I as g}from"./InputGroup-CC2tJpd7.js";import{B as v}from"./BaseTextInput-Bp-ifYh-.js";import{d as l,a as i,c as d,M as m,e as u,f as c,g as p,b as M}from"./Modal-Dq10ojrf.js";import{u as C}from"./useModal-DUbp29yc.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CCARFBdV.js";import"./Loader-QOLoLy5_.js";import"./useDelayedRender-BujkK-5i.js";import"./Icon-C_eqd1IE.js";import"./useId-BUKv216K.js";import"./Label-DcGKuD_n.js";import"./SupportLabel-BXNMeyuh.js";import"./WarningIcon-BajwyuyY.js";import"./IconButton-CFeFpgTl.js";import"./CloseIcon-B0dW8kqr.js";import"./index-CbWzkF4J.js";import"./index-Chjiymov.js";const Y={title:"Komponenter/Modal",component:M,subcomponents:{ModalActions:p,ModalBody:c,ModalCloseButton:u,ModalContainer:m,ModalHeader:d,ModalOverlay:i,ModalTitle:l}},o={args:{role:"document"},render:b=>{const[r,h]=s.useState(!1),a="Bekreft sletting",[e,{title:B,overlay:f,container:x,modal:j,closeButton:k}]=C({title:a});return s.useEffect(()=>{e&&e.show()},[e]),n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:E=>h(!r),children:"Vis modal"}),r&&n.jsxs(m,{...x,children:[n.jsx(i,{...f}),n.jsxs(M,{...j,children:[n.jsxs(d,{children:[n.jsx(l,{...B,children:a}),n.jsx(u,{...k})]}),n.jsxs(c,{children:["Er du sikker på at du vil slette Foo Bar Baz?",n.jsx(g,{label:"Fødselsnummer",tooltip:n.jsx(y,{buttonText:"Hva betyr dette?",children:"Du må fylle ut fødelsnummer eller D-nummer. Se hvordan du finner D-nummer."}),children:n.jsx(v,{})})]}),n.jsxs(p,{children:[n.jsx(t,{onClick:()=>e?.hide(),children:"Avbryt"}),n.jsx(t,{onClick:()=>{e?.hide()},children:"Bekreft"})]})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                                <InputGroup label="Fødselsnummer" tooltip={<BETA_Help buttonText="Hva betyr dette?">
                                            Du må fylle ut fødelsnummer eller
                                            D-nummer. Se hvordan du finner
                                            D-nummer.
                                        </BETA_Help>}>
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
}`,...o.parameters?.docs?.source}}};const Z=["Modal"];export{o as Modal,Z as __namedExportsOrder,Y as default};

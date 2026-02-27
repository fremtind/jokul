import{r as s,j as n}from"./iframe-D6gxZXQA.js";import{B as t}from"./Button-C4hDRz8E.js";import{H as g}from"./Help-CAkhQNIi.js";import{I as k}from"./InputGroup-DXuagj_E.js";import{B as v}from"./BaseTextInput-C1c0PKR1.js";import{d as l,a as d,c as i,M as m,e as u,f as c,g as p,b as M}from"./Modal-BQuYyBz0.js";import{u as C}from"./useModal-5wsOf5iW.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CCOPQvuR.js";import"./Loader-C4kRQ-t6.js";import"./useDelayedRender-pYcCEWP7.js";import"./Icon-eM4sgDhL.js";import"./useId-BiB6JU1v.js";import"./Label-DhbsXhQ3.js";import"./SupportLabel-DjKk6OXO.js";import"./WarningIcon-C8W7bkvr.js";import"./IconButton-IDJjymnd.js";import"./CloseIcon-D1iDhHDW.js";import"./index-B-PIDyqm.js";import"./index-Chjiymov.js";const U={title:"Komponenter/Modal",component:M,subcomponents:{ModalActions:p,ModalBody:c,ModalCloseButton:u,ModalContainer:m,ModalHeader:i,ModalOverlay:d,ModalTitle:l},parameters:{layout:"centered"},tags:["autodocs"]},o={args:{role:"document"},render:b=>{const[r,h]=s.useState(!1),a="Bekreft sletting",[e,{title:f,overlay:B,container:x,modal:j,closeButton:y}]=C({title:a});return s.useEffect(()=>{e&&e.show()},[e]),n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:w=>h(!r),children:"Vis modal"}),r&&n.jsxs(m,{...x,children:[n.jsx(d,{...B}),n.jsxs(M,{...j,children:[n.jsxs(i,{children:[n.jsx(l,{...f,children:a}),n.jsx(u,{...y})]}),n.jsxs(c,{children:["Er du sikker på at du vil slette Foo Bar Baz?",n.jsx(k,{label:"Fødselsnummer",tooltip:n.jsx(g,{buttonText:"Hva betyr dette?",children:"Du må fylle ut fødelsnummer eller D-nummer. Se hvordan du finner D-nummer."}),children:n.jsx(v,{})})]}),n.jsxs(p,{children:[n.jsx(t,{onClick:()=>e?.hide(),children:"Avbryt"}),n.jsx(t,{onClick:()=>{e?.hide()},children:"Bekreft"})]})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

import{r as s,j as n}from"./iframe-DJFnyI4A.js";import{B as t}from"./Button-i_JDvLmW.js";import{B as g}from"./Help-CQ_MAcyM.js";import{I as k}from"./InputGroup-Cn6uGgey.js";import{B as v}from"./BaseTextInput-BdHfiDmD.js";import{d as l,a as d,c as i,M as m,e as u,f as c,g as p,b as M}from"./Modal-DV770HTl.js";import{u as C}from"./useModal-o1YeC_8G.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-_GbTL7WZ.js";import"./Loader-Dpe4R-8z.js";import"./useDelayedRender-DH0N0t3K.js";import"./Icon-DwPjshoC.js";import"./useId-BTaRkWFQ.js";import"./Label-sX2X8X0T.js";import"./SupportLabel-DPOzf6ju.js";import"./WarningIcon-D6HxpDC7.js";import"./IconButton-Ds98TXAP.js";import"./CloseIcon-Og4dX3zV.js";import"./index-BNfI_nme.js";import"./index-Chjiymov.js";const U={title:"Komponenter/Modal",component:M,subcomponents:{ModalActions:p,ModalBody:c,ModalCloseButton:u,ModalContainer:m,ModalHeader:i,ModalOverlay:d,ModalTitle:l},parameters:{layout:"centered"},tags:["autodocs"]},o={args:{role:"document"},render:b=>{const[r,h]=s.useState(!1),a="Bekreft sletting",[e,{title:B,overlay:f,container:x,modal:j,closeButton:y}]=C({title:a});return s.useEffect(()=>{e&&e.show()},[e]),n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:E=>h(!r),children:"Vis modal"}),r&&n.jsxs(m,{...x,children:[n.jsx(d,{...f}),n.jsxs(M,{...j,children:[n.jsxs(i,{children:[n.jsx(l,{...B,children:a}),n.jsx(u,{...y})]}),n.jsxs(c,{children:["Er du sikker på at du vil slette Foo Bar Baz?",n.jsx(k,{label:"Fødselsnummer",tooltip:n.jsx(g,{buttonText:"Hva betyr dette?",children:"Du må fylle ut fødelsnummer eller D-nummer. Se hvordan du finner D-nummer."}),children:n.jsx(v,{})})]}),n.jsxs(p,{children:[n.jsx(t,{onClick:()=>e?.hide(),children:"Avbryt"}),n.jsx(t,{onClick:()=>{e?.hide()},children:"Bekreft"})]})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const W=["Modal"];export{o as Modal,W as __namedExportsOrder,U as default};

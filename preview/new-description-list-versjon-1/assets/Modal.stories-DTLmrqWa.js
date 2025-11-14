import{r as l,R as e}from"./index-siqcju79.js";import{B as o}from"./Button-Dng0c-UK.js";import{B as k}from"./Help-Bgo9mvhT.js";import{I as v}from"./InputGroup-jkm-2-wj.js";import{B as C}from"./BaseTextInput-Un_Ktj_I.js";import{d as s,a as m,c as i,M as d,e as u,f as c,g as p,b as M}from"./Modal-Cy5d9IMJ.js";import{u as b}from"./useModal-PTsSX8Wr.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./Icon-mINJCSxV.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./IconButton-B7cUPyFx.js";import"./CloseIcon-bvBUMA_V.js";import"./index-yL1brwCS.js";import"./index-Chjiymov.js";const Z={title:"Komponenter/Modal",component:M,subcomponents:{ModalActions:p,ModalBody:c,ModalCloseButton:u,ModalContainer:d,ModalHeader:i,ModalOverlay:m,ModalTitle:s},parameters:{layout:"centered"},tags:["autodocs"]},n={args:{role:"document"},render:T=>{const[a,B]=l.useState(!1),r="Bekreft sletting",[t,{title:f,overlay:E,container:h,modal:y,closeButton:g}]=b({title:r});return l.useEffect(()=>{t&&t.show()},[t]),e.createElement(e.Fragment,null,e.createElement(o,{onClick:w=>B(!a)},"Vis modal"),a&&e.createElement(d,{...h},e.createElement(m,{...E}),e.createElement(M,{...y},e.createElement(i,null,e.createElement(s,{...f},r),e.createElement(u,{...g})),e.createElement(c,null,"Er du sikker på at du vil slette Foo Bar Baz?",e.createElement(v,{label:"Fødselsnummer",tooltip:e.createElement(k,{buttonText:"Hva betyr dette?"},"Du må fylle ut fødelsnummer eller D-nummer. Se hvordan du finner D-nummer.")},e.createElement(C,null))),e.createElement(p,null,e.createElement(o,{onClick:()=>t?.hide()},"Avbryt"),e.createElement(o,{onClick:()=>{t?.hide()}},"Bekreft")))))}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ee=["Modal"];export{n as Modal,ee as __namedExportsOrder,Z as default};

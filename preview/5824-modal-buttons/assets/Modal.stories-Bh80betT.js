import{r as s,j as n}from"./iframe-BRQ1N0J2.js";import{B as e}from"./Button-D5gHP5UF.js";import{d as l,a as d,c as i,M as c,e as m,f as u,g as M,b as p}from"./Modal-D_JrM-r7.js";import{u as k}from"./useModal-Kc5Gl4di.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-C9h1KbP0.js";import"./Loader-DbkTn-2h.js";import"./useDelayedRender-B9Um1iZ6.js";import"./IconButton-VXmSPVI1.js";import"./CloseIcon-DtcFpFNZ.js";import"./Icon-BE0_XbeF.js";import"./index-B4iGw4vZ.js";import"./index-Chjiymov.js";import"./useId-B7EFyzwZ.js";const z={title:"Komponenter/Modal",component:p,subcomponents:{ModalActions:M,ModalBody:u,ModalCloseButton:m,ModalContainer:c,ModalHeader:i,ModalOverlay:d,ModalTitle:l},parameters:{layout:"centered"},tags:["autodocs"]},o={args:{role:"document"},render:y=>{const[a,h]=s.useState(!1),r="Bekreft sletting",[t,{title:B,overlay:x,container:f,modal:g,closeButton:j}]=k({title:r});return s.useEffect(()=>{t&&t.show()},[t]),n.jsxs(n.Fragment,{children:[n.jsx(e,{onClick:C=>h(!a),children:"Vis modal"}),a&&n.jsxs(c,{...f,children:[n.jsx(d,{...x}),n.jsxs(p,{...g,children:[n.jsxs(i,{children:[n.jsx(l,{...B,children:r}),n.jsx(m,{...j})]}),n.jsx(u,{children:"Er du sikker på at du vil slette dette dokumentet?"}),n.jsxs(M,{children:[n.jsx(e,{variant:"primary",onClick:()=>{t?.hide()},children:"Slett"}),n.jsx(e,{onClick:()=>t?.hide(),children:"Avbryt"})]})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                                Er du sikker på at du vil slette dette
                                dokumentet?
                            </ModalBody>
                            <ModalActions>
                                <Button variant="primary" onClick={() => {
              instance?.hide();
            }}>
                                    Slett
                                </Button>
                                <Button onClick={() => instance?.hide()}>
                                    Avbryt
                                </Button>
                            </ModalActions>
                        </ModalComponent>
                    </ModalContainer>}
            </>;
  }
}`,...o.parameters?.docs?.source}}};const D=["Modal"];export{o as Modal,D as __namedExportsOrder,z as default};

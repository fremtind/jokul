import{r as s,j as n}from"./iframe-BNRMIAKF.js";import{B as e}from"./Button-BJjnIjoR.js";import{d as l,a as d,c as i,M as c,e as m,f as u,g as M,b as p}from"./Modal-DjlWq8G_.js";import{u as k}from"./useModal-DycXneAy.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Bw9F1Kob.js";import"./Loader-DBAxIuzH.js";import"./useDelayedRender-BlQhCnGN.js";import"./IconButton-DYWTdgDk.js";import"./CloseIcon-DyfdtRWb.js";import"./Icon-BecDbs86.js";import"./index-LlLbEURV.js";import"./index-Chjiymov.js";import"./useId-CbaOJCXX.js";const z={title:"Komponenter/Modal",component:p,subcomponents:{ModalActions:M,ModalBody:u,ModalCloseButton:m,ModalContainer:c,ModalHeader:i,ModalOverlay:d,ModalTitle:l},parameters:{layout:"centered"},tags:["autodocs"]},o={args:{role:"document"},render:y=>{const[a,h]=s.useState(!1),r="Bekreft sletting",[t,{title:B,overlay:x,container:f,modal:g,closeButton:j}]=k({title:r});return s.useEffect(()=>{t&&t.show()},[t]),n.jsxs(n.Fragment,{children:[n.jsx(e,{onClick:C=>h(!a),children:"Vis modal"}),a&&n.jsxs(c,{...f,children:[n.jsx(d,{...x}),n.jsxs(p,{...g,children:[n.jsxs(i,{children:[n.jsx(l,{...B,children:r}),n.jsx(m,{...j})]}),n.jsx(u,{children:"Er du sikker på at du vil slette dette dokumentet?"}),n.jsxs(M,{children:[n.jsx(e,{variant:"primary",onClick:()=>{t?.hide()},children:"Slett"}),n.jsx(e,{onClick:()=>t?.hide(),children:"Avbryt"})]})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

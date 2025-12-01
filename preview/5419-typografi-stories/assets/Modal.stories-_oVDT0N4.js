import{j as n}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{B as t}from"./Button-fpmiG8ZH.js";import{B as f}from"./Help-Dh1MmQ1D.js";import{I as j}from"./InputGroup-BFZ5w6w_.js";import{B as y}from"./BaseTextInput-DDvdNY7P.js";import{d as a,a as l,c as s,M as i,e as d,f as m,g as p,b as u}from"./Modal-gnVwype-.js";import{u as v}from"./useModal-f6dEk1_n.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./Icon-DnRkF4CO.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./IconButton-CwYjR4Na.js";import"./CloseIcon-CGR_BR3u.js";import"./index-DpflvY8d.js";import"./index-Chjiymov.js";const W={title:"Komponenter/Modal",component:u,subcomponents:{ModalActions:p,ModalBody:m,ModalCloseButton:d,ModalContainer:i,ModalHeader:s,ModalOverlay:l,ModalTitle:a},parameters:{layout:"centered"},tags:["autodocs"]},e={args:{role:"document"},render:g=>{const r="Bekreft sletting",[o,{title:c,overlay:B,container:M,modal:h,closeButton:x}]=v({title:r});return n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"primary",onClick:k=>o.show(),children:"Vis modal"}),n.jsxs(i,{...M,children:[n.jsx(l,{...B}),n.jsxs(u,{...h,children:[n.jsxs(s,{children:[n.jsx(a,{...c,children:r}),n.jsx(d,{...x})]}),n.jsxs(m,{children:["Er du sikker på at du vil slette Foo Bar Baz?",n.jsx(j,{label:"Fødselsnummer",tooltip:n.jsx(f,{buttonText:"Hva betyr dette?",children:"Du må fylle ut fødelsnummer eller D-nummer. Se hvordan du finner D-nummer."}),children:n.jsx(y,{})})]}),n.jsxs(p,{children:[n.jsx(t,{onClick:()=>o?.hide(),children:"Avbryt"}),n.jsx(t,{onClick:()=>{o?.hide()},children:"Bekreft"})]})]})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    role: "document"
  },
  render: args => {
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
    return <>
                <Button variant="primary" onClick={e => instance.show()}>
                    Vis modal
                </Button>
                <ModalContainer {...container}>
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
                                        D-nummer. Se hvordan du finner D-nummer.
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
                </ModalContainer>
            </>;
  }
}`,...e.parameters?.docs?.source}}};const X=["Modal"];export{e as Modal,X as __namedExportsOrder,W as default};

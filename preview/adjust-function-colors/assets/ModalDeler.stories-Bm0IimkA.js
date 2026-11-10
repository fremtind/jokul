import{j as e}from"./iframe-zYjFaosY.js";import{B as t}from"./Button-Dj06Y6lY.js";import{a as r,b as o,M as l,c as n,d as i,e as d,f as s,g as m}from"./Modal-C1DwJcH2.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BbkcQkq-.js";import"./Loader-DsFj8iJe.js";import"./types-BlFGa32c.js";import"./useDelayedRender-BXvnSIuQ.js";import"./IconButton-fNszgCr3.js";import"./CloseIcon-d5HK31Pf.js";import"./Icon-BeP4i7i2.js";const g={title:"Komponenter/Modal/Deler",parameters:{controls:{disable:!0},docs:{disable:!0}}},a={name:"Struktur",render:()=>e.jsxs(r,{id:"modal-container",role:"document","aria-hidden":!1,"aria-modal":!0,"aria-labelledby":"modal-title",children:[e.jsx(o,{}),e.jsxs(l,{role:"document",children:[e.jsxs(n,{children:[e.jsx(i,{"aria-level":1,role:"heading",id:"modal-title",children:"Tittel"}),e.jsx(d,{type:"button","aria-label":"Lukk"})]}),e.jsx(s,{children:"Brukes til layouttesting av deler."}),e.jsxs(m,{children:[e.jsx(t,{children:"Avbryt"}),e.jsx(t,{variant:"primary",children:"Bekreft"})]})]})]})},S=["Struktur"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Struktur",
  render: () => <ModalContainer id="modal-container" role="document" aria-hidden={false} aria-modal aria-labelledby="modal-title">
            <ModalOverlay />
            <Modal role="document">
                <ModalHeader>
                    {/* biome-ignore lint/a11y/useSemanticElements: Kun for utvikling */}
                    <ModalTitle aria-level={1} role="heading" id="modal-title">
                        Tittel
                    </ModalTitle>
                    <ModalCloseButton type="button" aria-label="Lukk" />
                </ModalHeader>
                <ModalBody>Brukes til layouttesting av deler.</ModalBody>
                <ModalActions>
                    <Button>Avbryt</Button>
                    <Button variant="primary">Bekreft</Button>
                </ModalActions>
            </Modal>
        </ModalContainer>
}`,...a.parameters?.docs?.source}}};export{a as Struktur,S as __namedExportsOrder,g as default};

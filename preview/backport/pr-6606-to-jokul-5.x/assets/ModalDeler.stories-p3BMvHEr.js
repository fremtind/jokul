import{j as e}from"./iframe-DP8Xf_qW.js";import{B as t}from"./Button-6hsN6QCv.js";import{a as r,b as o,M as l,c as n,d as i,e as d,f as s,g as m}from"./Modal-C8hUmA9i.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DKNtJSDr.js";import"./Loader-BxavIFyp.js";import"./types-IsTkoTmK.js";import"./useDelayedRender-DoXz-Ftb.js";import"./IconButton-DAuzWytR.js";import"./CloseIcon-DOvl4PHi.js";import"./Icon-k8xo1fZn.js";const g={title:"Komponenter/Modal/Deler",parameters:{controls:{disable:!0},docs:{disable:!0}}},a={name:"Struktur",render:()=>e.jsxs(r,{id:"modal-container",role:"document","aria-hidden":!1,"aria-modal":!0,"aria-labelledby":"modal-title",children:[e.jsx(o,{}),e.jsxs(l,{role:"document",children:[e.jsxs(n,{children:[e.jsx(i,{"aria-level":1,role:"heading",id:"modal-title",children:"Tittel"}),e.jsx(d,{type:"button","aria-label":"Lukk"})]}),e.jsx(s,{children:"Brukes til layouttesting av deler."}),e.jsxs(m,{children:[e.jsx(t,{children:"Avbryt"}),e.jsx(t,{variant:"primary",children:"Bekreft"})]})]})]})},S=["Struktur"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

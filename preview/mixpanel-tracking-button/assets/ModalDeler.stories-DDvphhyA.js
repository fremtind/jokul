import{j as e}from"./iframe-BnNwtD6d.js";import{B as t}from"./Button-C91pUX_n.js";import{a as r,b as o,M as l,c as n,d,e as i,f as s,g as m}from"./Modal-MTFXWjDM.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-0oBbtvMM.js";import"./Loader-DjgubrLs.js";import"./useDelayedRender-CjPEgd5p.js";import"./IconButton-Dm-4to0h.js";import"./CloseIcon-CKbx5LYE.js";import"./Icon-Bivm725_.js";const f={title:"Komponenter/Modal/Deler",parameters:{controls:{disable:!0},docs:{disable:!0}}},a={name:"Struktur",render:()=>e.jsxs(r,{id:"modal-container",role:"document","aria-hidden":!1,"aria-modal":!0,"aria-labelledby":"modal-title",children:[e.jsx(o,{}),e.jsxs(l,{role:"document",children:[e.jsxs(n,{children:[e.jsx(d,{"aria-level":1,role:"heading",id:"modal-title",children:"Tittel"}),e.jsx(i,{type:"button","aria-label":"Lukk"})]}),e.jsx(s,{children:"Brukes til layouttesting av deler."}),e.jsxs(m,{children:[e.jsx(t,{children:"Avbryt"}),e.jsx(t,{variant:"primary",children:"Bekreft"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const g=["Struktur"];export{a as Struktur,g as __namedExportsOrder,f as default};

import{j as e}from"./iframe-DI75odmg.js";import{B as t}from"./Button-KLNxW5QR.js";import{a as r,b as o,M as l,c as n,d,e as i,f as s,g as m}from"./Modal-CX6wTvOo.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Byry3Rm5.js";import"./Loader-DXZ2M8RA.js";import"./useDelayedRender-jQjbBc1d.js";import"./IconButton-DVythnRR.js";import"./CloseIcon-PbSP7a43.js";import"./Icon-CsmWZ9EA.js";const f={title:"Komponenter/Modal/Deler",parameters:{controls:{disable:!0},docs:{disable:!0}}},a={name:"Struktur",render:()=>e.jsxs(r,{id:"modal-container",role:"document","aria-hidden":!1,"aria-modal":!0,"aria-labelledby":"modal-title",children:[e.jsx(o,{}),e.jsxs(l,{role:"document",children:[e.jsxs(n,{children:[e.jsx(d,{"aria-level":1,role:"heading",id:"modal-title",children:"Tittel"}),e.jsx(i,{type:"button","aria-label":"Lukk"})]}),e.jsx(s,{children:"Brukes til layouttesting av deler."}),e.jsxs(m,{children:[e.jsx(t,{children:"Avbryt"}),e.jsx(t,{variant:"primary",children:"Bekreft"})]})]})]})},g=["Struktur"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as Struktur,g as __namedExportsOrder,f as default};

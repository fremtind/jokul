import{j as e}from"./iframe-DBTjUgp-.js";import{B as o}from"./Button-Dzk-K1co.js";import{M as t,a as n,b as l,c as d,d as i,e as s,f as m,g as c}from"./Modal-De2Q0me2.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-D2eVRh5A.js";import"./Loader-CXDS803X.js";import"./useDelayedRender-B66dwaTw.js";import"./IconButton-D_nns4TJ.js";import"./CloseIcon-hlFMG0jH.js";import"./Icon-KRhdj7hg.js";const k={title:"Komponenter/Modal/CompleteModal",component:t,parameters:{layout:"centered"}},a={args:{id:"modal-container",role:"document","aria-hidden":!1,"aria-modal":!0,"aria-labelledby":"modal-title"},render:r=>e.jsxs(t,{...r,children:[e.jsx(n,{}),e.jsxs(l,{role:"document",children:[e.jsxs(d,{children:[e.jsx(i,{"aria-level":1,role:"heading",id:"",children:"Tittel"}),e.jsx(s,{type:"button","aria-label":"close"})]}),e.jsx(m,{children:"Er du sikker på at du vil slette Foo Bar Baz?"}),e.jsxs(c,{children:[e.jsx(o,{children:"Avbryt"}),e.jsx(o,{variant:"primary","data-testid":"confirm-modal",children:"Slett"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: "modal-container",
    role: "document",
    "aria-hidden": false,
    "aria-modal": true,
    "aria-labelledby": "modal-title"
  },
  render: args => <ModalContainer {...args}>
            <ModalOverlay />
            <Modal role="document">
                <ModalHeader>
                    {/* biome-ignore lint/a11y/useSemanticElements: Dette fikser vi på en bedre måte ved refaktorering av komponenten */}
                    <ModalTitle aria-level={1} role="heading" id={""}>
                        Tittel
                    </ModalTitle>
                    <ModalCloseButton type="button" aria-label="close" />
                </ModalHeader>
                <ModalBody>
                    Er du sikker på at du vil slette Foo Bar Baz?
                </ModalBody>
                <ModalActions>
                    <Button>Avbryt</Button>
                    <Button variant="primary" data-testid="confirm-modal">
                        Slett
                    </Button>
                </ModalActions>
            </Modal>
        </ModalContainer>
}`,...a.parameters?.docs?.source}}};const A=["CompleteModal"];export{a as CompleteModal,A as __namedExportsOrder,k as default};

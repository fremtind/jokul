import{j as e}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{B as o}from"./Button-ezu_9wT-.js";import{M as t,a as n,b as l,c as d,d as i,e as s,f as m,g as c}from"./Modal-CqP1mKMQ.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./IconButton-CwYjR4Na.js";import"./CloseIcon-BPFAU_ZX.js";import"./Icon-CqyKskc7.js";const A={title:"Komponenter/Modal/CompleteModal",component:t,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{id:"modal-container",role:"document","aria-hidden":!1,"aria-modal":!0,"aria-labelledby":"modal-title"},render:r=>e.jsxs(t,{...r,children:[e.jsx(n,{}),e.jsxs(l,{role:"document",children:[e.jsxs(d,{children:[e.jsx(i,{"aria-level":1,role:"heading",id:"",children:"Tittel"}),e.jsx(s,{type:"button","aria-label":"close"})]}),e.jsx(m,{children:"Er du sikker på at du vil slette Foo Bar Baz?"}),e.jsxs(c,{children:[e.jsx(o,{children:"Avbryt"}),e.jsx(o,{variant:"primary","data-testid":"confirm-modal",children:"Slett"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const E=["CompleteModal"];export{a as CompleteModal,E as __namedExportsOrder,A as default};

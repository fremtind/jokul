import{R as e}from"./index-siqcju79.js";import{B as t}from"./Button-Bm5jRD6q.js";import{M as o,a as r,b as n,c as d,d as i,e as m,f as s,g as c}from"./Modal-DkEi8KmZ.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./IconButton-BsqD9nTf.js";import"./CloseIcon-bvBUMA_V.js";import"./Icon-mINJCSxV.js";const T={title:"Komponenter/Modal/CompleteModal",component:o,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{id:"modal-container",role:"document","aria-hidden":!1,"aria-modal":!0,"aria-labelledby":"modal-title"},render:l=>e.createElement(o,{...l},e.createElement(r,null),e.createElement(n,{role:"document"},e.createElement(d,null,e.createElement(i,{"aria-level":1,role:"heading",id:""},"Tittel"),e.createElement(m,{type:"button","aria-label":"close"})),e.createElement(s,null,"Er du sikker på at du vil slette Foo Bar Baz?"),e.createElement(c,null,e.createElement(t,{variant:"primary","data-testid":"confirm-modal"},"Slett"),e.createElement(t,null,"Avbryt"))))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                    <Button variant="primary" data-testid="confirm-modal">
                        Slett
                    </Button>
                    <Button>Avbryt</Button>
                </ModalActions>
            </Modal>
        </ModalContainer>
}`,...a.parameters?.docs?.source}}};const h=["CompleteModal"];export{a as CompleteModal,h as __namedExportsOrder,T as default};

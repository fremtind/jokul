import{j as e}from"./jsx-runtime-CfatFE5O.js";import"./index-ClcD9ViR.js";import{B as o}from"./Button-2w50jndb.js";import{M as l,a as i,b as s,c as m,d as c,e as p,f as u,g as M}from"./Modal-BFVIq01w.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-D76q0nBx.js";import"./Loader-CKZhAlI9.js";import"./useDelayedRender-CJkH27Ob.js";import"./IconButton-B0Cys9hZ.js";import"./CloseIcon-DzZb9AcM.js";import"./Icon-Op3enNBI.js";const S={title:"Komponenter/Modal/CompleteModal",component:l,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{id:"modal-container",role:"document","aria-hidden":!1,"aria-modal":!0,"aria-labelledby":"modal-title"},render:d=>e.jsxs(l,{...d,children:[e.jsx(i,{}),e.jsxs(s,{role:"document",children:[e.jsxs(m,{children:[e.jsx(c,{"aria-level":1,role:"heading",id:"",children:"Tittel"}),e.jsx(p,{type:"button","aria-label":"close"})]}),e.jsx(u,{children:"Er du sikker på at du vil slette Foo Bar Baz?"}),e.jsxs(M,{children:[e.jsx(o,{variant:"primary","data-testid":"confirm-modal",children:"Slett"}),e.jsx(o,{children:"Avbryt"})]})]})]})};var t,r,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const H=["CompleteModal"];export{a as CompleteModal,H as __namedExportsOrder,S as default};

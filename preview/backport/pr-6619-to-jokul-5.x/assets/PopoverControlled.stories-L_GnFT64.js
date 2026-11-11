import{j as o,r as a}from"./iframe-B9dYvTtQ.js";import{B as m}from"./Button-BydWb-u6.js";import{P as r}from"./Popover-q-nGv30g.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Corn-zfT.js";import"./Loader-DLkWIjTo.js";import"./useDelayedRender-COUFaxzb.js";import"./floating-ui.react-DmQp7t8D.js";import"./index-ClI6gOqC.js";import"./index-kAvh9uJW.js";import"./getThemeAndSize-CZAj3IXt.js";const S={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})},_=["PopoverControlled"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};export{e as PopoverControlled,_ as __namedExportsOrder,S as default};

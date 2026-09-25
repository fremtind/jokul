import{j as o,r as a}from"./iframe-DfQU3pFC.js";import{B as m}from"./Button-6u6xSrl3.js";import{P as r}from"./Popover-Cv7aMz2W.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BVkXxQ4V.js";import"./serializeTracking-CnAc4iKu.js";import"./Loader-jV6QPgiS.js";import"./useDelayedRender-DZzZ11aQ.js";import"./floating-ui.react-SPYvXzEF.js";import"./index-DhJ4K0e2.js";import"./index-BzwZtKLY.js";import"./getThemeAndSize-CZAj3IXt.js";const _={title:"Komponenter/Popover/PopoverControlled",component:r},l=n=>{const{open:t,...i}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...i,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(m,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(l,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...e.parameters?.docs?.source}}};const k=["PopoverControlled"];export{e as PopoverControlled,k as __namedExportsOrder,_ as default};

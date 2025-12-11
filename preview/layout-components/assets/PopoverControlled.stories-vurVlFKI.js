import{j as o}from"./jsx-runtime-D9p_MChh.js";import{r as a}from"./index-CRL2yuNo.js";import{B as c}from"./Button-BPhaSTk9.js";import{P as r}from"./Popover-C7q5Q7_y.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B4HAJZS8.js";import"./Loader-BBBxl9FC.js";import"./useDelayedRender-ClAGw7sE.js";import"./getThemeAndDensity-h_pKpmQq.js";import"./index-DO_xWACW.js";import"./index-BI6CK2Jw.js";const k={title:"Komponenter/Popover/PopoverControlled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},u=n=>{const{open:t,...d}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...d,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(c,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(u,{...n})};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const A=["PopoverControlled"];export{e as PopoverControlled,A as __namedExportsOrder,k as default};

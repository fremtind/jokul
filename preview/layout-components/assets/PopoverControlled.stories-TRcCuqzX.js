import{j as o}from"./jsx-runtime-BbjHj44Y.js";import{r as a}from"./index-C6mWTJJr.js";import{B as c}from"./Button-V_7JZhcr.js";import{P as r}from"./Popover-CeCk011M.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";import"./getThemeAndDensity-BFFxI1sw.js";import"./index-zunobDwC.js";const _={title:"Komponenter/Popover/PopoverControlled",component:r,parameters:{layout:"centered"},tags:["autodocs"]},u=n=>{const{open:t,...d}=n,[p,s]=a.useState(t);return a.useEffect(()=>{s(t)},[t]),o.jsxs(r,{...d,open:p,onOpenChange:s,children:[o.jsx(r.Trigger,{onClick:()=>s(!p),"aria-expanded":p,asChild:!0,children:o.jsx(c,{variant:"primary",children:"Åpne popover"})}),o.jsx(r.Content,{padding:24,children:"Dette er innholdet i Popover"})]})},e={args:{open:!1,onOpenChange:()=>{},roleOptions:{role:"menu"}},render:n=>o.jsx(u,{...n})};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    roleOptions: {
      role: "menu"
    }
  },
  render: args => <PopoverControlledComponent {...args} />
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const k=["PopoverControlled"];export{e as PopoverControlled,k as __namedExportsOrder,_ as default};

import{j as o}from"./jsx-runtime-BbjHj44Y.js";import{T as i,a as p,b as l}from"./TooltipTrigger-Dv1YWU0A.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./getThemeAndDensity-DZpqJRtY.js";import"./index-zunobDwC.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-BilM7jlK.js";import"./useId-Cim48cX5.js";const f={title:"Komponenter/Tooltip",component:i,subcomponents:{TooltipTrigger:p,TooltipContent:l},tags:["autodocs"],argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},t={args:{children:o.jsx("p",{children:"Klikk for å kopiere til utklippstavlen"}),delay:2e3,initialOpen:!1,placement:"top",triggerOn:"hover"},render:s=>o.jsxs("p",{children:["Kontonummer:"," ",o.jsxs(i,{...s,children:[o.jsx(p,{children:"1602 44 54979"}),o.jsx(l,{children:"Klikk for å kopiere til utklippstavlen"})]})]})};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    children: <p>Klikk for å kopiere til utklippstavlen</p>,
    delay: 2000,
    initialOpen: false,
    placement: "top",
    triggerOn: "hover"
  },
  render: args => <p>
            Kontonummer:{" "}
            <TooltipComponent {...args}>
                <TooltipTrigger>1602 44 54979</TooltipTrigger>
                <TooltipContent>
                    Klikk for å kopiere til utklippstavlen
                </TooltipContent>
            </TooltipComponent>
        </p>
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const x=["Tooltip"];export{t as Tooltip,x as __namedExportsOrder,f as default};

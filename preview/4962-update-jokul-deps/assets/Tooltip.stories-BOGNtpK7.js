import{j as o}from"./jsx-runtime-CfatFE5O.js";import"./index-ClcD9ViR.js";import{T as i,a as p,b as l}from"./TooltipTrigger-DlqwF13-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./getThemeAndDensity-BSLHRK6G.js";import"./index-CN14f-u1.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-B9pblqFL.js";import"./useId-qNfMkXex.js";const f={title:"Komponenter/Tooltip",component:i,subcomponents:{TooltipTrigger:p,TooltipContent:l},tags:["autodocs"],argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},t={args:{children:o.jsx("p",{children:"Klikk for å kopiere til utklippstavlen"}),delay:2e3,initialOpen:!1,placement:"top",triggerOn:"hover"},render:s=>o.jsxs("p",{children:["Kontonummer:"," ",o.jsxs(i,{...s,children:[o.jsx(p,{children:"1602 44 54979"}),o.jsx(l,{children:"Klikk for å kopiere til utklippstavlen"})]})]})};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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

import{j as o}from"./jsx-runtime-D9p_MChh.js";import"./index-CRL2yuNo.js";import{b as i,a as p,T as l}from"./TooltipTrigger-Bew01w0J.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./getThemeAndDensity-h_pKpmQq.js";import"./index-DO_xWACW.js";import"./index-BI6CK2Jw.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-pnXkstjW.js";import"./useId-BJAJhdYZ.js";const x={title:"Komponenter/Tooltip",component:l,subcomponents:{TooltipTrigger:p,TooltipContent:i},tags:["autodocs"],argTypes:{delay:{control:"number"},initialOpen:{control:"boolean"},placement:{control:"select",options:["top","top-start","top-end","left","right"]},triggerOn:{control:"select",options:["click","hover"]}}},t={args:{children:o.jsx("p",{children:"Klikk for å kopiere til utklippstavlen"}),delay:2e3,initialOpen:!1,placement:"top",triggerOn:"hover"},render:s=>o.jsxs("p",{children:["Kontonummer:"," ",o.jsxs(l,{...s,children:[o.jsx(p,{children:"1602 44 54979"}),o.jsx(i,{children:"Klikk for å kopiere til utklippstavlen"})]})]})};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const j=["Tooltip"];export{t as Tooltip,j as __namedExportsOrder,x as default};

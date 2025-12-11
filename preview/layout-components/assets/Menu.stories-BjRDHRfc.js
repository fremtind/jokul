import{j as e}from"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";import{G as a}from"./Button-V_7JZhcr.js";import{M as t}from"./Menu-BiLSdoNb.js";import{M as n}from"./MenuItem-O6UCCD1G.js";/* empty css               */import{C as p}from"./ChevronDownIcon-Cfz6obIC.js";import{E as d}from"./ErrorIcon-B0wgdey8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";import"./getThemeAndDensity-BFFxI1sw.js";import"./index-zunobDwC.js";import"./index-DcfIKM1A.js";import"./useId-Cim48cX5.js";import"./useBrowserPreferences-Cx8DRHte.js";import"./ChevronRightIcon-BRebPSul.js";import"./Icon-CZwjvlw8.js";import"./OpenInNewIcon-CtTg2px0.js";const w={title:"Komponenter/Menu/Menu",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{triggerElement:e.jsx(a,{icon:e.jsx(p,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Ola Nordmann"}),keepOpenOnClickOutside:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Forsikringsprofil"}),e.jsxs(t,{triggerElement:e.jsx(n,{expandable:!0,children:"Dokumenter"}),children:[" ",e.jsx(n,{as:"a",href:"https://jokul.fremtind.no/",children:"Jøkuls hjemmeside"}),e.jsx(n,{as:"a",href:"https://fremtind.no/",children:"Fremtind Forsikring"})]}),e.jsx(n,{icon:e.jsx(d,{}),children:"Skadesaker"})]}),isOpen:!1},render:({...m})=>e.jsx(t,{...m})};var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    triggerElement: <GhostButton icon={<ChevronDownIcon bold />} iconPosition="right" data-testid="open-menu">
                Ola Nordmann
            </GhostButton>,
    keepOpenOnClickOutside: false,
    children: <>
                <MenuItem>Forsikringsprofil</MenuItem>
                <MenuComponent triggerElement={<MenuItem expandable={true}>Dokumenter</MenuItem>}>
                    {" "}
                    <MenuItem as="a" href="https://jokul.fremtind.no/">
                        Jøkuls hjemmeside
                    </MenuItem>
                    <MenuItem as="a" href="https://fremtind.no/">
                        Fremtind Forsikring
                    </MenuItem>
                </MenuComponent>

                <MenuItem icon={<ErrorIcon />}>Skadesaker</MenuItem>
            </>,
    isOpen: false
  },
  render: ({
    ...args
  }) => <MenuComponent {...args} />
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const J=["Menu"];export{r as Menu,J as __namedExportsOrder,w as default};

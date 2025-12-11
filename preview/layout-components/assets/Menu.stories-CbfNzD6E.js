import{j as e}from"./jsx-runtime-D9p_MChh.js";import"./index-CRL2yuNo.js";import{G as a}from"./Button-BPhaSTk9.js";import{M as t}from"./Menu-B_VylnY5.js";import{M as n}from"./MenuItem-QeAjl3KD.js";/* empty css               */import{E as p}from"./ErrorIcon-1chdNO9D.js";import{C as d}from"./ChevronDownIcon-CY7c70Lg.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B4HAJZS8.js";import"./Loader-BBBxl9FC.js";import"./useDelayedRender-ClAGw7sE.js";import"./getThemeAndDensity-h_pKpmQq.js";import"./index-DO_xWACW.js";import"./index-BI6CK2Jw.js";import"./index-BpBQ4hf7.js";import"./useId-BJAJhdYZ.js";import"./useBrowserPreferences-pnXkstjW.js";import"./ChevronRightIcon-yS8Hxovu.js";import"./Icon-BsB2AusX.js";import"./OpenInNewIcon-CvBhAQWK.js";const J={title:"Komponenter/Menu/Menu",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{triggerElement:e.jsx(a,{icon:e.jsx(d,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Ola Nordmann"}),keepOpenOnClickOutside:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Forsikringsprofil"}),e.jsxs(t,{triggerElement:e.jsx(n,{expandable:!0,children:"Dokumenter"}),children:[" ",e.jsx(n,{as:"a",href:"https://jokul.fremtind.no/",children:"Jøkuls hjemmeside"}),e.jsx(n,{as:"a",href:"https://fremtind.no/",children:"Fremtind Forsikring"})]}),e.jsx(n,{icon:e.jsx(p,{}),children:"Skadesaker"})]}),isOpen:!1},render:({...m})=>e.jsx(t,{...m})};var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const N=["Menu"];export{r as Menu,N as __namedExportsOrder,J as default};

import{j as e}from"./iframe-C14rEe6T.js";import{B as s}from"./Button-CsPti0SN.js";import{M as t}from"./Menu-DGIEGnni.js";import{M as n}from"./MenuItem-C_V0weLB.js";/* empty css               */import{C as i}from"./ChevronDownIcon-BA0jGyC9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BEeFFqBd.js";import"./Loader-CfAlB_nW.js";import"./useDelayedRender-Ce5eOaMc.js";import"./floating-ui.react-3hzDm4-U.js";import"./index-LLA-Sj3o.js";import"./index-5GJL9cFn.js";import"./useBrowserPreferences-BJYaDPCV.js";import"./SlotComponent-D_CQXGfD.js";import"./mergeRefs-DctfpK3d.js";import"./ChevronRightIcon-f5pkUJBw.js";import"./Icon-CusSDIhm.js";import"./OpenInNewIcon-BOcBOQ-G.js";const B={title:"Komponenter/Menu/Menu",component:t},r={argTypes:{isOpen:{control:{disable:!0}}},args:{triggerElement:e.jsx(s,{variant:"ghost",icon:e.jsx(i,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Meny"}),keepOpenOnClickOutside:!1,children:null},render:({isOpen:a,children:m,...o})=>e.jsxs(t,{...o,children:[e.jsx(n,{as:"a",href:"#forsikringene-dine",children:"Forsikringene dine"}),e.jsx(n,{onClick:()=>console.log("test"),children:"Meld skade"}),e.jsx(n,{as:"a",href:"#skadesakene-dine",children:"Skadesakene dine"}),e.jsxs(t,{triggerElement:e.jsx(n,{expandable:!0,children:"Skjemaoppgaver"}),children:[e.jsx(n,{as:"a",href:"#flytte-forsikring",children:"Flytte forsikring"}),e.jsx(n,{onClick:()=>console.log("test"),children:"Endre forsikring"}),e.jsx(n,{as:"a",href:"#oppsigelse",children:"Oppsigelse av forsikring"})]}),e.jsx(n,{as:"a",href:"#kontakt-oss",children:"Kontakt oss"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        disable: true
      }
    }
  },
  args: {
    triggerElement: <Button variant="ghost" icon={<ChevronDownIcon bold />} iconPosition="right" data-testid="open-menu">
                Meny
            </Button>,
    keepOpenOnClickOutside: false,
    children: null
  },
  render: ({
    isOpen,
    children,
    ...args
  }) => <MenuComponent {...args}>
            <MenuItem as="a" href="#forsikringene-dine">
                Forsikringene dine
            </MenuItem>
            <MenuItem onClick={() => console.log("test")}>Meld skade</MenuItem>
            <MenuItem as="a" href="#skadesakene-dine">
                Skadesakene dine
            </MenuItem>
            <MenuComponent triggerElement={<MenuItem expandable={true}>Skjemaoppgaver</MenuItem>}>
                <MenuItem as="a" href="#flytte-forsikring">
                    Flytte forsikring
                </MenuItem>
                <MenuItem onClick={() => console.log("test")}>
                    Endre forsikring
                </MenuItem>
                <MenuItem as="a" href="#oppsigelse">
                    Oppsigelse av forsikring
                </MenuItem>
            </MenuComponent>
            <MenuItem as="a" href="#kontakt-oss">
                Kontakt oss
            </MenuItem>
        </MenuComponent>
}`,...r.parameters?.docs?.source}}};const F=["Menu"];export{r as Menu,F as __namedExportsOrder,B as default};

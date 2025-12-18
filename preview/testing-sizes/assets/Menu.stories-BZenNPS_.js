import{j as e}from"./iframe-DCpqq2AI.js";import{B as s}from"./Button-CbDctsOI.js";import{M as t}from"./Menu-DwNrdy9d.js";import{M as n}from"./MenuItem-BU7_9k0d.js";/* empty css               */import{C as i}from"./ChevronDownIcon-DOn98Ndm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-B7X8RurM.js";import"./Loader-CgOCa8qe.js";import"./useDelayedRender-2S0rpx6n.js";import"./floating-ui.react-CRpQiq2s.js";import"./index-DHy5-8MO.js";import"./index-DZ6G_cP9.js";import"./useBrowserPreferences-B9zISmEv.js";import"./SlotComponent-BQq6lLuj.js";import"./mergeRefs-C-dc4a47.js";import"./ChevronRightIcon-Ciq-sowq.js";import"./Icon-BsOVuiL5.js";import"./OpenInNewIcon-CQ0RCPUf.js";const B={title:"Komponenter/Menu/Menu",component:t},r={argTypes:{isOpen:{control:{disable:!0}}},args:{triggerElement:e.jsx(s,{variant:"ghost",icon:e.jsx(i,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Meny"}),keepOpenOnClickOutside:!1,children:null},render:({isOpen:a,children:m,...o})=>e.jsxs(t,{...o,children:[e.jsx(n,{as:"a",href:"#forsikringene-dine",children:"Forsikringene dine"}),e.jsx(n,{onClick:()=>console.log("test"),children:"Meld skade"}),e.jsx(n,{as:"a",href:"#skadesakene-dine",children:"Skadesakene dine"}),e.jsxs(t,{triggerElement:e.jsx(n,{expandable:!0,children:"Skjemaoppgaver"}),children:[e.jsx(n,{as:"a",href:"#flytte-forsikring",children:"Flytte forsikring"}),e.jsx(n,{onClick:()=>console.log("test"),children:"Endre forsikring"}),e.jsx(n,{as:"a",href:"#oppsigelse",children:"Oppsigelse av forsikring"})]}),e.jsx(n,{as:"a",href:"#kontakt-oss",children:"Kontakt oss"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

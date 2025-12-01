import{j as e}from"./jsx-runtime-BOJBhsC5.js";import"./index-Bv6P490N.js";import{B as i}from"./Button-7xZWz2K4.js";import{M as t}from"./Menu-CdOScDku.js";import{M as n}from"./MenuItem-PD4rFooc.js";/* empty css               */import{C as o}from"./ChevronDownIcon-ulgFH_bH.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CFxVqUaX.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";import"./floating-ui.react-JBEcfi09.js";import"./index-BPlpgERE.js";import"./index-cKcTyOJX.js";import"./useBrowserPreferences-1XLPz9Eq.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";import"./ChevronRightIcon-B1bQ5uAI.js";import"./Icon-DYEEOjBa.js";import"./OpenInNewIcon-ClN_GWe9.js";const S={title:"Komponenter/Menu/Menu",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={argTypes:{isOpen:{control:{disable:!0}}},args:{triggerElement:e.jsx(i,{variant:"ghost",icon:e.jsx(o,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Meny"}),keepOpenOnClickOutside:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{as:"a",href:"#forsikringene-dine",children:"Forsikringene dine"}),e.jsx(n,{as:"a",href:"#meld-skade",children:"Meld skade"}),e.jsx(n,{as:"a",href:"#skadesakene-dine",children:"Skadesakene dine"}),e.jsxs(t,{triggerElement:e.jsx(n,{expandable:!0,children:"Skjemaoppgaver"}),children:[e.jsx(n,{as:"a",href:"#flytte-forsikring",children:"Flytte forsikring"}),e.jsx(n,{as:"a",href:"#endre-forsikring",children:"Endre forsikring"}),e.jsx(n,{as:"a",href:"#oppsigelse",children:"Oppsigelse av forsikring"})]}),e.jsx(n,{as:"a",href:"#kontakt-oss",children:"Kontakt oss"})]})},render:({isOpen:a,...s})=>e.jsx(t,{...s})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    children: <>
                <MenuItem as="a" href="#forsikringene-dine">
                    Forsikringene dine
                </MenuItem>
                <MenuItem as="a" href="#meld-skade">
                    Meld skade
                </MenuItem>
                <MenuItem as="a" href="#skadesakene-dine">
                    Skadesakene dine
                </MenuItem>
                <MenuComponent triggerElement={<MenuItem expandable={true}>Skjemaoppgaver</MenuItem>}>
                    <MenuItem as="a" href="#flytte-forsikring">
                        Flytte forsikring
                    </MenuItem>
                    <MenuItem as="a" href="#endre-forsikring">
                        Endre forsikring
                    </MenuItem>
                    <MenuItem as="a" href="#oppsigelse">
                        Oppsigelse av forsikring
                    </MenuItem>
                </MenuComponent>
                <MenuItem as="a" href="#kontakt-oss">
                    Kontakt oss
                </MenuItem>
            </>
  },
  render: ({
    isOpen,
    ...args
  }) => <MenuComponent {...args} />
}`,...r.parameters?.docs?.source}}};const B=["Menu"];export{r as Menu,B as __namedExportsOrder,S as default};

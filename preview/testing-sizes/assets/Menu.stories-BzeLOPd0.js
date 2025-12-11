import{j as e}from"./iframe-D6vAkaa1.js";import{B as i}from"./Button-BA1_GkKx.js";import{M as s}from"./Menu-CBkaurtI.js";import{M as n}from"./MenuItem-xs15HV1u.js";/* empty css               */import{C as o}from"./ChevronDownIcon-26kFYc-6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BXgrSxM0.js";import"./Loader-B9rKsSj3.js";import"./useDelayedRender-CBj0b0ja.js";import"./floating-ui.react-aMLegARa.js";import"./index-DLkFFomS.js";import"./index-Ni6ZqyQ-.js";import"./useBrowserPreferences-B9WI62dc.js";import"./SlotComponent-DuJ66kWA.js";import"./mergeRefs-Bj7lbeTE.js";import"./ChevronRightIcon-BF-pArya.js";import"./Icon-BNJErtNk.js";import"./OpenInNewIcon-DSTAY-pp.js";const F={title:"Komponenter/Menu/Menu",component:s},r={argTypes:{isOpen:{control:{disable:!0}}},args:{triggerElement:e.jsx(i,{variant:"ghost",icon:e.jsx(o,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Meny"}),keepOpenOnClickOutside:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{as:"a",href:"#forsikringene-dine",children:"Forsikringene dine"}),e.jsx(n,{as:"a",href:"#meld-skade",children:"Meld skade"}),e.jsx(n,{as:"a",href:"#skadesakene-dine",children:"Skadesakene dine"}),e.jsxs(s,{triggerElement:e.jsx(n,{expandable:!0,children:"Skjemaoppgaver"}),children:[e.jsx(n,{as:"a",href:"#flytte-forsikring",children:"Flytte forsikring"}),e.jsx(n,{as:"a",href:"#endre-forsikring",children:"Endre forsikring"}),e.jsx(n,{as:"a",href:"#oppsigelse",children:"Oppsigelse av forsikring"})]}),e.jsx(n,{as:"a",href:"#kontakt-oss",children:"Kontakt oss"})]})},render:({isOpen:a,...t})=>e.jsx(s,{...t})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const S=["Menu"];export{r as Menu,S as __namedExportsOrder,F as default};

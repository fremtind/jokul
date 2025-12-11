import{j as e}from"./iframe-XXWDj_k0.js";import{B as i}from"./Button-BqE5XfOP.js";import{M as s}from"./Menu-CM3y1ONx.js";import{M as n}from"./MenuItem-Kb6mT26c.js";/* empty css               */import{C as o}from"./ChevronDownIcon-7bTN6JMZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BM4IPd0t.js";import"./Loader-B-6tRH1P.js";import"./useDelayedRender-CK5k7ifp.js";import"./floating-ui.react-orOkj84j.js";import"./index-Cm0tpgpt.js";import"./index-XDSuswVX.js";import"./useBrowserPreferences-L-YH2Io9.js";import"./SlotComponent-YW0u6-qR.js";import"./mergeRefs-nXp4u0MO.js";import"./ChevronRightIcon-BN4C5XOr.js";import"./Icon-BjQbLDKK.js";import"./OpenInNewIcon-DO1QJ85K.js";const F={title:"Komponenter/Menu/Menu",component:s},r={argTypes:{isOpen:{control:{disable:!0}}},args:{triggerElement:e.jsx(i,{variant:"ghost",icon:e.jsx(o,{bold:!0}),iconPosition:"right","data-testid":"open-menu",children:"Meny"}),keepOpenOnClickOutside:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{as:"a",href:"#forsikringene-dine",children:"Forsikringene dine"}),e.jsx(n,{as:"a",href:"#meld-skade",children:"Meld skade"}),e.jsx(n,{as:"a",href:"#skadesakene-dine",children:"Skadesakene dine"}),e.jsxs(s,{triggerElement:e.jsx(n,{expandable:!0,children:"Skjemaoppgaver"}),children:[e.jsx(n,{as:"a",href:"#flytte-forsikring",children:"Flytte forsikring"}),e.jsx(n,{as:"a",href:"#endre-forsikring",children:"Endre forsikring"}),e.jsx(n,{as:"a",href:"#oppsigelse",children:"Oppsigelse av forsikring"})]}),e.jsx(n,{as:"a",href:"#kontakt-oss",children:"Kontakt oss"})]})},render:({isOpen:a,...t})=>e.jsx(s,{...t})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

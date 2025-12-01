import{R as e}from"./index-siqcju79.js";import{G as m}from"./Button-Dng0c-UK.js";import{M as r}from"./Menu-gw2tFKwu.js";import{M as n}from"./MenuItem-DjdHl0XH.js";/* empty css               */import{E as a}from"./ErrorIcon-BUXYVAIL.js";import{C as i}from"./ChevronDownIcon-fl1APhkk.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./getThemeAndDensity-Cbjmkdw-.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-BdKvcPYQ.js";import"./index-yL1brwCS.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./SlotComponent-CWN6EcE2.js";import"./ChevronRightIcon-DUrPUeX8.js";import"./Icon-mINJCSxV.js";import"./OpenInNewIcon-BZd1ooy-.js";const B={title:"Komponenter/Menu/Menu",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{triggerElement:e.createElement(m,{icon:e.createElement(i,{bold:!0}),iconPosition:"right","data-testid":"open-menu"},"Ola Nordmann"),keepOpenOnClickOutside:!1,children:e.createElement(e.Fragment,null,e.createElement(n,null,"Forsikringsprofil"),e.createElement(r,{triggerElement:e.createElement(n,{expandable:!0},"Dokumenter")}," ",e.createElement(n,{as:"a",href:"https://jokul.fremtind.no/"},"Jøkuls hjemmeside"),e.createElement(n,{as:"a",href:"https://fremtind.no/"},"Fremtind Forsikring")),e.createElement(n,{icon:e.createElement(a,null)},"Skadesaker")),isOpen:!1},render:({...o})=>e.createElement(r,{...o})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const S=["Menu"];export{t as Menu,S as __namedExportsOrder,B as default};

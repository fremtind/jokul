import{j as a}from"./iframe-DX9D7YYS.js";/* empty css               */import{T as e,a as r,b as l,c as s}from"./Tabs-BdYS5x3z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-jAx_OowT.js";const m={title:"Komponenter/Tabs/Tabs",component:s,subcomponents:{TabList:l,TabPanel:r,Tab:e},argTypes:{defaultTab:{control:"number",table:{defaultValue:{summary:void 0}}}}},n={name:"Tabs",args:{children:a.jsx("p",{})},render:t=>a.jsx("div",{style:{maxWidth:"300px"},children:a.jsxs(s,{...t,children:[a.jsxs(l,{"aria-label":"Avtale-filter",children:[a.jsx(e,{children:"Alle avtaler"}),a.jsx(e,{children:"NICE"}),a.jsx(e,{children:"Prolife"}),a.jsx(e,{children:"Paris"})]}),a.jsx(r,{children:"Alle avtaler"}),a.jsx(r,{children:"NICE-avtaler"}),a.jsx(r,{children:"Prolife-avtaler"}),a.jsx(r,{children:"Paris-avtaler"})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Tabs",
  args: {
    children: <p />
  },
  render: args => <div style={{
    maxWidth: "300px"
  }}>
            <Tabs {...args}>
                <TabList aria-label="Avtale-filter">
                    <Tab>Alle avtaler</Tab>
                    <Tab>NICE</Tab>
                    <Tab>Prolife</Tab>
                    <Tab>Paris</Tab>
                </TabList>

                <TabPanel>Alle avtaler</TabPanel>

                <TabPanel>NICE-avtaler</TabPanel>

                <TabPanel>Prolife-avtaler</TabPanel>

                <TabPanel>Paris-avtaler</TabPanel>
            </Tabs>
        </div>
}`,...n.parameters?.docs?.source}}};const p=["TabsStory"];export{n as TabsStory,p as __namedExportsOrder,m as default};

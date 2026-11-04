import{r as p,j as i}from"./iframe-TIqCcbB-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DMydj5vV.js";import{CheckboxStory as c}from"./Checkbox.stories-BsBd9O79.js";import k from"./Help.stories-DXyB55EO.js";import u from"./RadioButton.stories-g2NpkonB.js";import{RadioPanel as g}from"./RadioPanel.stories-BIwAinym.js";import{F as h}from"./FieldGroup-D15hpqbv.js";import{C as b}from"./Checkbox-rSTEY8kL.js";import{R as x}from"./RadioPanel-DTQ2wE0X.js";import{H as C}from"./Help-DSJQwNru.js";import{R as G}from"./RadioButton-5cZN2PVW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C_qj62a8.js";import"./clsx-B-dksMZM.js";import"./Flex-BSK7tAiA.js";import"./SlotComponent-BryIovtF.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CHyZM9uY.js";import"./usePreviousValue-BKF6vily.js";import"./Loader-Bnnb3y3m.js";import"./useDelayedRender-BlkiaII2.js";import"./useId-DDTBisqU.js";import"./Label-DjOncwEe.js";import"./SupportLabel-T1eCS7wS.js";import"./SuccessIcon-DTJEzCP4.js";import"./Icon-B9EdndMp.js";import"./WarningIcon-C90NMcDz.js";import"./BaseRadioButton.stories-Cw0f3Nos.js";import"./BaseRadioButton-BwZtN0VY.js";import"./Title-D6LterYB.js";import"./Card-CXWCT21h.js";import"./Text-CSiU0tma.js";import"./Tag-BUm87igs.js";import"./ExpandablePanel-BttuRmaB.js";import"./useAnimatedHeightBetween-Bs9EsVpz.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DLl-2lC8.js";import"./Expander-OojGruiq.js";import"./ChevronUpIcon-MfhQN5h3.js";import"./ListItem-C1Qz4YzH.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Checkbox panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <CheckboxPanel {...CheckboxPanelStory.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </CheckboxPanel>)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Radio panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStory.args} key={value} value={value} name="kontaktmetode" label={value} />)
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};

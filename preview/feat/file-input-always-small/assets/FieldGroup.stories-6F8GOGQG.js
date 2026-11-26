import{r as p,j as s}from"./iframe-Bb6hSxAD.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BjPZK6Pb.js";import{CheckboxStory as c}from"./Checkbox.stories-DxC3gp-6.js";import k from"./Help.stories-BNYhxtZp.js";import u from"./RadioButton.stories-Bp7h7-FN.js";import{RadioPanel as g}from"./RadioPanel.stories-BqClDzm4.js";import{F as h}from"./FieldGroup-DeKz2z6j.js";import{C as b}from"./Checkbox-DbBm9uMF.js";import{R as x}from"./RadioPanel-evz0pb_D.js";import{H as C}from"./Help-NfUmaSbG.js";import{R as G}from"./RadioButton-AKD9jmkn.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-82cX4lCC.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DECzcEeY.js";import"./SlotComponent-X6ko4yft.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BIesmK9f.js";import"./usePreviousValue-p-gqGbz3.js";import"./Loader-DpQqeLnz.js";import"./useDelayedRender-D9sz0mmN.js";import"./useId-o42BfMX2.js";import"./Label-CdtnS82U.js";import"./SupportLabel-CSd4AkXd.js";import"./SuccessIcon-CXewzJnl.js";import"./Icon-BSvMylBh.js";import"./WarningIcon-DQW0lgOD.js";import"./BaseRadioButton.stories-Cx7cfrTl.js";import"./BaseRadioButton-QkU3tOQY.js";import"./Title-B7rXJ2Ca.js";import"./Card-DjSWPOk2.js";import"./Text-B2QNQrN6.js";import"./Tag-q1xvWmDP.js";import"./ExpandablePanel-DaZXQPYh.js";import"./useAnimatedHeightBetween-BOP9jsfD.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BlEXlb6E.js";import"./Expander-BEIZjtwR.js";import"./ChevronDownIcon-ggc81D8D.js";import"./ChevronUpIcon-Bter2oER.js";import"./ListItem-Rte5nubf.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};

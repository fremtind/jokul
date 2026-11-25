import{r as p,j as s}from"./iframe-BJ_mJici.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-EFjyFSAH.js";import{CheckboxStory as c}from"./Checkbox.stories-B45Y3nQ7.js";import k from"./Help.stories-eSdXcwG3.js";import u from"./RadioButton.stories-CpfYwA9e.js";import{RadioPanel as g}from"./RadioPanel.stories-DrkgkDoC.js";import{F as h}from"./FieldGroup-CrQbachv.js";import{C as b}from"./Checkbox-BkUdKEpB.js";import{R as x}from"./RadioPanel-CUxjavGZ.js";import{H as C}from"./Help-CVhJul8T.js";import{R as G}from"./RadioButton-5AxrsIcx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DaJLk-mq.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BpARvV0c.js";import"./SlotComponent-C0-Anlfn.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BSIpUmSM.js";import"./usePreviousValue-C_qketvK.js";import"./Loader-D-6HSL9h.js";import"./useDelayedRender-DYkij-dj.js";import"./useId-DFpnkjgS.js";import"./Label-BYsnujlo.js";import"./SupportLabel-BuImmtdx.js";import"./SuccessIcon-BEeJ4VKh.js";import"./Icon-B9qwA0Hc.js";import"./WarningIcon-DbX7k76e.js";import"./BaseRadioButton.stories-C3eb6x1S.js";import"./BaseRadioButton-B1S2OdDu.js";import"./Title-gXA7Sx5h.js";import"./Card-Ct7tPsHv.js";import"./Text-DpndKmO3.js";import"./Tag-rjDmLqYl.js";import"./ExpandablePanel-CLUdKb4k.js";import"./useAnimatedHeightBetween-BWbNYhm-.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D3MLd9y3.js";import"./Expander-DnBY8Z9e.js";import"./ChevronDownIcon-zgfOnbiU.js";import"./ChevronUpIcon-zSLQdI_w.js";import"./ListItem-C3WttezX.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

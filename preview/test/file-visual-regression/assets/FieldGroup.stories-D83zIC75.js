import{r as p,j as s}from"./iframe-DEp7TuSU.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Dw-3ysCf.js";import{CheckboxStory as c}from"./Checkbox.stories-MzubpLis.js";import k from"./Help.stories-Cx3Ya6H4.js";import u from"./RadioButton.stories-4Y_9nGo_.js";import{RadioPanel as g}from"./RadioPanel.stories-D_1q0yMB.js";import{F as h}from"./FieldGroup-Doj1UwLe.js";import{C as b}from"./Checkbox-Bzmok6Cb.js";import{R as x}from"./RadioPanel-CRCd6iE2.js";import{H as C}from"./Help-B1_zI2XI.js";import{R as G}from"./RadioButton-CgK5pEma.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bj4Fw805.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BNfjuLsj.js";import"./SlotComponent-BdtRrqjQ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Yb6JANyb.js";import"./usePreviousValue-CN26swNn.js";import"./Loader-DDkyYrxb.js";import"./useDelayedRender-BBpUSCvU.js";import"./useId-nteQJo5V.js";import"./Label-Dx_W1dhF.js";import"./SupportLabel-DwKTrBGC.js";import"./SuccessIcon-joNuZVhC.js";import"./Icon-Ch5N_p1U.js";import"./WarningIcon-DT-qy095.js";import"./BaseRadioButton.stories-CVDle3H4.js";import"./BaseRadioButton-DMaKYBv_.js";import"./Title-yYciiLDx.js";import"./Card-BIkSNlY4.js";import"./Text-B6-sKVFu.js";import"./Tag-Br097Bp8.js";import"./ExpandablePanel-Dz1CrVO4.js";import"./useAnimatedHeightBetween-CrUo5OcB.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences--yIQp1ih.js";import"./Expander-WI0Wizep.js";import"./ChevronDownIcon-CQT5vWre.js";import"./ChevronUpIcon-COeVJxXL.js";import"./ListItem-4rsSTbtb.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

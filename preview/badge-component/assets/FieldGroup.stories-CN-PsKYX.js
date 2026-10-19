import{r as n,j as i}from"./iframe-BTNDLQS0.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DpZYG-jv.js";import{CheckboxStory as c}from"./Checkbox.stories-JOJKp4ln.js";import d from"./Help.stories-oH3wGlhQ.js";import k from"./RadioButton.stories-ipZkHXF0.js";import{RadioPanel as u}from"./RadioPanel.stories-Dv3p2DwZ.js";import{F as g}from"./FieldGroup-OxZbhaoq.js";import{C as h}from"./Checkbox-B5U-SjM3.js";import{R as b}from"./RadioPanel-B2ZBwyno.js";import{H as x}from"./Help-Dtw3sVIS.js";import{R as C}from"./RadioButton-DlYcLUaU.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dfrw5Nx1.js";import"./clsx-B-dksMZM.js";import"./Flex-Bb1xMqmm.js";import"./SlotComponent-X-Ck8yzz.js";import"./mergeRefs-CYfDLgu2.js";import"./Button-CluMO73U.js";import"./usePreviousValue-DI-nEpjM.js";import"./Loader-CgoaFSIi.js";import"./useDelayedRender-FyDY47co.js";import"./useId-CW4vpR0h.js";import"./Label-Ck_aY_nF.js";import"./SupportLabel-BCu03UWK.js";import"./SuccessIcon-C0WdRvUg.js";import"./Icon--nJMA7m6.js";import"./WarningIcon-qNyXqKXK.js";import"./BaseRadioButton.stories-CARFB6Ob.js";import"./BaseRadioButton-B6A5vt_Y.js";import"./Title-BdvqiRQK.js";import"./Card-Dgw9LcUf.js";import"./Text-DBEYfOY5.js";import"./Tag-BStzRo4R.js";import"./ExpandablePanel-Bw3t_Il9.js";import"./useAnimatedHeightBetween-CH_4bzab.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DlcLU6Xa.js";import"./Expander-M_iF02U6.js";import"./ChevronUpIcon-CBBMMKcY.js";import"./ListItem-DCjnp4G8.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};

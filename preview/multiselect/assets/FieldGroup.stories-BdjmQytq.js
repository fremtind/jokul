import{r as p,j as i}from"./iframe-B3OBNPfZ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DQ9F8DoC.js";import l from"./Help.stories-DQnHUYLI.js";import c from"./RadioButton.stories-99AvBMRt.js";import{F as d}from"./FieldGroup-OQF6L8uK.js";import{C as k,a as u}from"./CheckboxPanel.stories-CnE6rTG7.js";import{RadioPanel as g}from"./RadioPanel.stories-Cz4eRlYM.js";import{C as h}from"./Checkbox-BOyFHshm.js";import{R as b}from"./RadioPanel-DESepriD.js";import{H as x}from"./Help-Bdy1JH4b.js";import{R as C}from"./RadioButton-9sZTnqvf.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DCsClKZS.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-dfe4zjzj.js";import"./mergeRefs-MkmfroCC.js";import"./BaseRadioButton.stories-W0r7vPHT.js";import"./BaseRadioButton-zO1n8P0T.js";import"./useId-CTTBrnb0.js";import"./Label-CXz6xjLA.js";import"./SupportLabel-CdvBOKd1.js";import"./SuccessIcon-JpeI1IXf.js";import"./Icon-Bgejj3-4.js";import"./WarningIcon-Ch14NOxE.js";import"./InputPanel-xcUTv-lL.js";import"./Button-C3bxyZpq.js";import"./usePreviousValue-CDoV_SSc.js";import"./Loader-vtfXofmL.js";import"./useDelayedRender-CpUcbWpm.js";import"./Title-0jcGWevR.js";import"./Card-BST2mMMW.js";import"./Text-D1us5bsy.js";import"./Tag-CyaeecDt.js";import"./ExpandablePanel-M1Y1oMNk.js";import"./useAnimatedHeightBetween-DJPuIcBR.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Ikz72ElP.js";import"./Expander-CqAp8iES.js";import"./ChevronDownIcon-DBdzMBxx.js";import"./ChevronUpIcon-DUA_3nJC.js";import"./ListItem-D9eS-QTA.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};

import{r as p,j as i}from"./iframe-DdzKESVa.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DvLfRvbf.js";import l from"./Help.stories-CPA-gQhL.js";import c from"./RadioButton.stories-BdMGGPRr.js";import{F as d}from"./FieldGroup-KBAOYqCH.js";import{C as k,a as u}from"./CheckboxPanel.stories-B9PlAPNI.js";import{RadioPanel as g}from"./RadioPanel.stories-CjPPELP_.js";import{C as h}from"./Checkbox-n7vAqZG3.js";import{R as b}from"./RadioPanel-DePHWe0o.js";import{H as x}from"./Help-CX0oDbyb.js";import{R as C}from"./RadioButton-P4qxEFvf.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C5uZ6mnA.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CxbiuVBb.js";import"./mergeRefs-BXCcGfwD.js";import"./BaseRadioButton.stories-kLR3JTGT.js";import"./BaseRadioButton-Cpn2CTrh.js";import"./useId-BAHfi6Xv.js";import"./Label-94K3vMYq.js";import"./SupportLabel-DthX4J-b.js";import"./SuccessIcon-RD5j-PrQ.js";import"./Icon-D0RjNUF1.js";import"./WarningIcon-DeIMtJhR.js";import"./InputPanel-DcVZFcS7.js";import"./Button-C3Htq6Vb.js";import"./usePreviousValue-CGQXf2Ev.js";import"./Loader-KDzCV-em.js";import"./useDelayedRender-DkTKnDQj.js";import"./Title-CRAFxwlO.js";import"./Card-DXBrvQld.js";import"./Text-DDC0Rugw.js";import"./Tag-BGubXYG8.js";import"./ExpandablePanel-xT1Pp64i.js";import"./useAnimatedHeightBetween-CbKPeGZa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C5K1IrBy.js";import"./Expander-DohAriB9.js";import"./ChevronDownIcon-C7BNLdnx.js";import"./ChevronUpIcon-CujaekYR.js";import"./ListItem-jw5EbVSx.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

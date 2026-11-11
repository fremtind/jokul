import{r as n,j as i}from"./iframe-BsCurwi4.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Brg8YK_j.js";import{CheckboxStory as c}from"./Checkbox.stories-BdiNx4MR.js";import d from"./Help.stories-CIqBlREu.js";import k from"./RadioButton.stories-Crt49D6B.js";import{RadioPanel as u}from"./RadioPanel.stories-BA1k_Fb7.js";import{F as g}from"./FieldGroup-DOA9t90_.js";import{C as h}from"./Checkbox-BVPnG2s5.js";import{R as b}from"./RadioPanel-WmQPXf_p.js";import{H as x}from"./Help-D7DsQSfu.js";import{R as C}from"./RadioButton-MQY9y_4g.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BNSEybxH.js";import"./clsx-B-dksMZM.js";import"./Flex-BDjab_iD.js";import"./SlotComponent-CBOvyZNM.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CuB-R2hM.js";import"./usePreviousValue-BFGHBLB5.js";import"./Loader-DhU2g74r.js";import"./useDelayedRender-BwE6lMIu.js";import"./useId-CFcGbzVQ.js";import"./Label-DJLTHcQO.js";import"./SupportLabel-C9n_BrD1.js";import"./SuccessIcon-DWwJlfmW.js";import"./Icon-xyydWcx_.js";import"./WarningIcon-ClbMRUPO.js";import"./BaseRadioButton.stories-B88BXRL3.js";import"./BaseRadioButton-Bud73pnD.js";import"./Title-BJKvGHnt.js";import"./Card-CwiSnTix.js";import"./Text-Ca0kAgJ-.js";import"./Tag-DpNMdz8E.js";import"./ExpandablePanel-BKsyAaMb.js";import"./useAnimatedHeightBetween-0u_g69H_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C5Z5x6D3.js";import"./Expander-BqF5yGvq.js";import"./ChevronUpIcon-DCI2cr8t.js";import"./ListItem-DzMfShsu.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};

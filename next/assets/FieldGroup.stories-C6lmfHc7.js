import{r as n,j as i}from"./iframe-Dhoj6gWh.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BxkPhk5-.js";import{CheckboxStory as c}from"./Checkbox.stories-CRxsV3il.js";import d from"./Help.stories-BsYnsrrz.js";import k from"./RadioButton.stories-D_qZy9d_.js";import{RadioPanel as u}from"./RadioPanel.stories-Dp2yv807.js";import{F as g}from"./FieldGroup-CaqPFQDF.js";import{C as h}from"./Checkbox-DgMbiD1p.js";import{R as b}from"./RadioPanel-DYPlZTxE.js";import{H as x}from"./Help-Cir2g0ui.js";import{R as C}from"./RadioButton-DQ0OIPFk.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CVhDvfdZ.js";import"./clsx-B-dksMZM.js";import"./Flex-CatbUa1S.js";import"./SlotComponent-DHZKPo87.js";import"./mergeRefs-CuLWnGYH.js";import"./Button-KnGVqPq9.js";import"./usePreviousValue-CTLjszY_.js";import"./Loader-BPjaVXoH.js";import"./useDelayedRender-bsE1PXFI.js";import"./useId-C53Hlqdd.js";import"./Label-D3eD4LEe.js";import"./SupportLabel-ewM0OFrs.js";import"./SuccessIcon-Cb_bwlD9.js";import"./Icon--p5HIDpU.js";import"./WarningIcon-CfG_2gsk.js";import"./BaseRadioButton.stories-Dc6pWX5p.js";import"./BaseRadioButton-BznhIioJ.js";import"./Title-CRi2jwZ2.js";import"./Card-4o05sTDe.js";import"./Text-snerHtcP.js";import"./Tag-Dtgipwp_.js";import"./ExpandablePanel-BsUccvWl.js";import"./useAnimatedHeightBetween-DMEoZzE_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DSMDwbSV.js";import"./Expander-DtV7mNUY.js";import"./ChevronUpIcon-BBYo67TG.js";import"./ListItem-COgMryIy.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

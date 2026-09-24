import{r as n,j as i}from"./iframe-BQerbkwm.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D-oKZmSY.js";import{CheckboxStory as c}from"./Checkbox.stories-s3r1lER0.js";import d from"./Help.stories-BHZEiAxb.js";import k from"./RadioButton.stories-DEJZ4Tph.js";import{RadioPanel as u}from"./RadioPanel.stories-OxNdhw9N.js";import{F as g}from"./FieldGroup-FXW2WkyQ.js";import{C as h}from"./Checkbox-BbPFPw2I.js";import{R as b}from"./RadioPanel-D48VRsma.js";import{H as x}from"./Help-DlY_VyUx.js";import{R as C}from"./RadioButton-BXiubB-h.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BCbQ90Ls.js";import"./clsx-B-dksMZM.js";import"./Flex-k1FjYAyT.js";import"./SlotComponent-1n9dkVmg.js";import"./mergeRefs-ewT2oxqw.js";import"./Button-DcNm9BVt.js";import"./usePreviousValue-jta-vKxe.js";import"./Loader-GglCmBkZ.js";import"./useDelayedRender-BaJct5qE.js";import"./useId-MJyWuP-j.js";import"./Label-BR5JoVQV.js";import"./SupportLabel-C9G7mGhA.js";import"./SuccessIcon-D82GtEHe.js";import"./Icon-C7xQyW88.js";import"./WarningIcon-GsHgUlaY.js";import"./BaseRadioButton.stories-C12q3aym.js";import"./BaseRadioButton-CjkwzsYa.js";import"./Title-D3Sz9xtn.js";import"./Card-BSAgP6Ds.js";import"./Text-CCzhHKh3.js";import"./Tag-BNm_ILyB.js";import"./ExpandablePanel-Bh0xqxbn.js";import"./useAnimatedHeightBetween-D8uONsyp.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-8GfDVUEd.js";import"./Expander-B0J2Pg8S.js";import"./ChevronUpIcon-DbrFZfip.js";import"./ListItem-jIej8FWd.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

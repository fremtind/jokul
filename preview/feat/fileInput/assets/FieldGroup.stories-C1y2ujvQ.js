import{r as p,j as i}from"./iframe-5QOiqkiQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BW8FkDhx.js";import l from"./Help.stories-CySXFQ7j.js";import c from"./RadioButton.stories-Dlli71KD.js";import{F as d}from"./FieldGroup-DEh3_Tp7.js";import{C as k,a as u}from"./CheckboxPanel.stories-DwqN7nZ_.js";import{RadioPanel as g}from"./RadioPanel.stories-Tgs9JfFu.js";import{C as h}from"./Checkbox-CrDV4Lh_.js";import{R as b}from"./RadioPanel-6Pp-HtgN.js";import{H as x}from"./Help--aBb1xdt.js";import{R as C}from"./RadioButton-C-LcDeXV.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-C3kb-uNn.js";import"./BaseRadioButton-YGZSDoju.js";import"./clsx-B-dksMZM.js";import"./useId-DqHnhI76.js";import"./Label-P-s7X2MK.js";import"./SupportLabel-CATdItl_.js";import"./SuccessIcon-D4xC0GbU.js";import"./Icon-CXt3jEIW.js";import"./WarningIcon-DC5V0LeS.js";import"./InputPanel-Bke7tNqP.js";import"./Flex-CMOtH6H4.js";import"./SlotComponent-DVugLIbU.js";import"./mergeRefs-q09EVS5Y.js";import"./Button-B-cyYvte.js";import"./usePreviousValue-BJcayKWp.js";import"./Loader-75b8MGLl.js";import"./useDelayedRender-BkSks0dU.js";import"./Title-ByZQqpRr.js";import"./Card--xPp0R9x.js";import"./Text-E1vYIUIr.js";import"./Tag-Db-9Y6j_.js";import"./ExpandablePanel-CrP8iuHd.js";import"./useAnimatedHeightBetween-CYcbuye-.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Btv28mqZ.js";import"./Expander-BRTQyYr9.js";import"./ChevronDownIcon-CPXPp-ip.js";import"./ChevronUpIcon-C-iRwmow.js";import"./ListItem-BKE5HPqB.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};

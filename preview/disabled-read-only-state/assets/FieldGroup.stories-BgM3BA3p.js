import{r as p,j as i}from"./iframe-Cc0lsbEP.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-BaY0Uytf.js";import{CheckboxStory as l}from"./Checkbox.stories-DQD51RNZ.js";import c from"./Help.stories-OlW2ZjT1.js";import d from"./RadioButton.stories-CW9Od8i7.js";import{RadioPanel as k}from"./RadioPanel.stories-0FV3Qo3d.js";import{F as u}from"./FieldGroup-C3vgeZbo.js";import{C as g}from"./Checkbox-VJMAcHiI.js";import{C as h}from"./CheckboxPanel-DVj51Xgl.js";import{R as b}from"./RadioPanel-VAvu496e.js";import{H as x}from"./Help-Um9qD44z.js";import{R as C}from"./RadioButton-C_pE1xJB.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BcrmyNfa.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CrToIbEs.js";import"./mergeRefs--gaMb34L.js";import"./Button-qZbBNQgb.js";import"./usePreviousValue-CRmLqYMP.js";import"./Loader-BMORs4ha.js";import"./useDelayedRender-AVQE6CwH.js";import"./InputPanel-VPNiShX8.js";import"./useId-BEqUuJdd.js";import"./SupportLabel-D8Vv-TW6.js";import"./SuccessIcon-CM5mryur.js";import"./Icon-BPBN9EvZ.js";import"./WarningIcon-C3tmYzoj.js";import"./BaseRadioButton-DZ53ihvM.js";import"./Label-8650UV_r.js";import"./BaseRadioButton.stories-BnqMQ-rz.js";import"./Title-CEikqLt6.js";import"./Card-BJb3te5Y.js";import"./Text-CuHi8qQB.js";import"./Tag-DfuHuSFb.js";import"./ExpandablePanel-C8HEf7hk.js";import"./useAnimatedHeightBetween-CYrZok_G.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bsl7Vz_o.js";import"./Expander-CywJdhAG.js";import"./ChevronUpIcon-Cb2y_e_M.js";import"./ListItem-nL5BTVKl.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

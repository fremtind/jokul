import{r as p,j as i}from"./iframe-bZjd5nQc.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-50ZnnmZW.js";import{CheckboxStory as c}from"./Checkbox.stories-Dv8lWl50.js";import d from"./Help.stories-DDnGdQSy.js";import k from"./RadioButton.stories-owQcNbTp.js";import{RadioPanel as u}from"./RadioPanel.stories-DtV6up-Y.js";import{F as g}from"./FieldGroup-DvCdx3ZL.js";import{C as h}from"./Checkbox-DAISFpi9.js";import{R as b}from"./RadioPanel-B4I90FQv.js";import{H as x}from"./Help-DkO9G2Ft.js";import{R as C}from"./RadioButton-B-uYhBHO.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DzB8blJ9.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./Flex-CKMnuUKf.js";import"./SlotComponent-BdhLlCAs.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-pfNZJUzF.js";import"./usePreviousValue-Nn7mUyBi.js";import"./Loader-C5Olidp4.js";import"./useDelayedRender-BYG5RtFZ.js";import"./BaseRadioButton.stories-D-W96nCm.js";import"./BaseRadioButton-DzpPmW1R.js";import"./useId-B70GVnSD.js";import"./Title-Dm4VLVZ-.js";import"./Card-DgbRseTy.js";import"./Text-BKkkLRAF.js";import"./Tag-NznRNqnY.js";import"./ExpandablePanel-CHr_gCvf.js";import"./useAnimatedHeightBetween-Txp_5X5n.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-ZaPcXquG.js";import"./Expander-DnRbaJqG.js";import"./ChevronDownIcon-BuzDVW9C.js";import"./Icon-BxLlLgud.js";import"./ChevronUpIcon-BYj9-Ncl.js";import"./ListItem-76wGDmrL.js";import"./Label-DN-fX9C-.js";import"./SupportLabel-2m9ieIZu.js";import"./SuccessIcon-C-xIXmG5.js";import"./WarningIcon-Dz-U58Do.js";const se={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};

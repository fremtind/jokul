import{r as p,j as i}from"./iframe-AbheQuCm.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DLWPP6YX.js";import{CheckboxStory as c}from"./Checkbox.stories-BeZV-Dgs.js";import k from"./Help.stories-DpcOaWiz.js";import u from"./RadioButton.stories-Bm-pUj-G.js";import{RadioPanel as g}from"./RadioPanel.stories-CPxQh-7w.js";import{F as h}from"./FieldGroup-Dl8FLa1G.js";import{C as b}from"./Checkbox-CntfPi7t.js";import{R as x}from"./RadioPanel-CDYEB-jg.js";import{H as C}from"./Help-WJ2jxzaE.js";import{R as G}from"./RadioButton-DLFE-pV-.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ezEeb9w0.js";import"./clsx-B-dksMZM.js";import"./Flex-sR_g7IDE.js";import"./SlotComponent-B6d_zKSR.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-G2ZzHRX9.js";import"./usePreviousValue-DxsrTVcC.js";import"./Loader-Dd1KnYpr.js";import"./useDelayedRender-BjKBq6wu.js";import"./useId-BYQEEJ4f.js";import"./Label-CCcXrvXR.js";import"./SupportLabel-DJrXhS5s.js";import"./SuccessIcon-CsSgpsDq.js";import"./Icon-BhiY9ggd.js";import"./WarningIcon-9tweJswl.js";import"./BaseRadioButton.stories-fIPG5HsC.js";import"./BaseRadioButton-IwDiBe6M.js";import"./Title-hVeyBGku.js";import"./Card-l6MAt2dT.js";import"./Text-B6mN41rC.js";import"./Tag-guUaZG13.js";import"./ExpandablePanel-DrC98evk.js";import"./useAnimatedHeightBetween-wX82fhTf.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B3XzGC34.js";import"./Expander-BHoCeC4K.js";import"./ChevronUpIcon-B1PnKa4t.js";import"./ListItem-C5YCGEQv.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};

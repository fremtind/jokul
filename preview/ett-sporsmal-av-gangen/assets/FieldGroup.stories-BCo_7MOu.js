import{r as p,j as i}from"./iframe-FLdELv7d.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-k7M-A3nL.js";import{CheckboxStory as c}from"./Checkbox.stories-BFiu7AJp.js";import k from"./Help.stories-2M7tO6Y-.js";import u from"./RadioButton.stories-C7E7Cjtv.js";import{RadioPanel as g}from"./RadioPanel.stories-CEXbQcJh.js";import{F as h}from"./FieldGroup-Bw1EkzCt.js";import{C as b}from"./Checkbox-Dgnel8wo.js";import{R as x}from"./RadioPanel-DN74nZRk.js";import{H as C}from"./Help-DNY_eHvj.js";import{R as G}from"./RadioButton-36lubvIr.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-up71FA2C.js";import"./clsx-B-dksMZM.js";import"./Flex-Lqmn7cS1.js";import"./SlotComponent-BsszmkBW.js";import"./mergeRefs-BLM-lzxy.js";import"./Button-Ba0dip0C.js";import"./usePreviousValue-BnFcxNTs.js";import"./Loader-DAMD4eJn.js";import"./useDelayedRender-DB6dhcxG.js";import"./useId-D5Nr1i6z.js";import"./Label-CwqYwVaF.js";import"./SupportLabel-DTec24sd.js";import"./SuccessIcon-CpHdLTov.js";import"./Icon-D0Tk7Syc.js";import"./WarningIcon-9p3ao5nb.js";import"./BaseRadioButton.stories-DXWQt4Qv.js";import"./BaseRadioButton-DUxMk2Ze.js";import"./Title-CXAiQMe5.js";import"./Card-DNrok3aE.js";import"./Text-BaXUdjc8.js";import"./Tag-BJCml0Sz.js";import"./ExpandablePanel-ufkhZwVm.js";import"./useAnimatedHeightBetween-B4iWYStv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-byHyAbM5.js";import"./Expander-gYJVFy8F.js";import"./ChevronUpIcon-DXidX96t.js";import"./ListItem-DkmZQGTv.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};

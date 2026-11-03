import{r as p,j as i}from"./iframe-DgpoztGT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DckJrEGr.js";import{CheckboxStory as c}from"./Checkbox.stories-CCZpRHeq.js";import k from"./Help.stories-B8Zt-XIn.js";import u from"./RadioButton.stories-D-AOwkvy.js";import{RadioPanel as g}from"./RadioPanel.stories-C2gyWA3z.js";import{F as h}from"./FieldGroup-oe7Un3d3.js";import{C as b}from"./Checkbox-B9KPGJMt.js";import{R as x}from"./RadioPanel-Do1TQBGk.js";import{H as C}from"./Help-pRIW-swY.js";import{R as G}from"./RadioButton-CYHfmpp2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BJXWcXAl.js";import"./clsx-B-dksMZM.js";import"./Flex-BGzTPt7i.js";import"./SlotComponent-CBDXMlhs.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DpdmrmUW.js";import"./usePreviousValue-B91sAc6T.js";import"./Loader-CgVqXrdr.js";import"./useDelayedRender-euIXWs4d.js";import"./useId-B71GOAp2.js";import"./Label-2gUN2bMr.js";import"./SupportLabel-DtaPXGGO.js";import"./SuccessIcon-D4kAr62N.js";import"./Icon-DRXG0bUE.js";import"./WarningIcon-CAephRV_.js";import"./BaseRadioButton.stories-B7e6TFIf.js";import"./BaseRadioButton-DWTbmLzK.js";import"./Title-Dh2y08kr.js";import"./Card-BhpijpHo.js";import"./Text-DUcGjfGU.js";import"./Tag-Bup-7hlf.js";import"./ExpandablePanel-DS1E9tZn.js";import"./useAnimatedHeightBetween-C6zJza4R.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-5FbasdJQ.js";import"./Expander-DBdPqMeE.js";import"./ChevronUpIcon-CN7V7AR8.js";import"./ListItem-BeN8dVv_.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

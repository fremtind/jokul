import{r as p,j as i}from"./iframe-B4KLYGkp.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-hxuU-lsA.js";import{CheckboxStory as c}from"./Checkbox.stories-DObiBE5S.js";import k from"./Help.stories-B-Sx3Onj.js";import u from"./RadioButton.stories-CyvQXh6h.js";import{RadioPanel as g}from"./RadioPanel.stories-D8KvURdj.js";import{F as h}from"./FieldGroup-BZmevCC6.js";import{C as b}from"./Checkbox-D244YpXR.js";import{R as x}from"./RadioPanel-C6_P_8z-.js";import{H as C}from"./Help-C9nTmXKA.js";import{R as G}from"./RadioButton-Bt2q5Goz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C2OKaDQA.js";import"./clsx-B-dksMZM.js";import"./Flex-Dz14es2v.js";import"./SlotComponent-DX64g0JV.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-QwpvAuZR.js";import"./usePreviousValue-BgVlf557.js";import"./Loader-CNb9RH3s.js";import"./useDelayedRender-B5Rc7U0_.js";import"./useId-DOWz6JeV.js";import"./Label-CUg7Ob47.js";import"./SupportLabel-D782y5qv.js";import"./SuccessIcon-Beimj-cm.js";import"./Icon-6RD9-nin.js";import"./WarningIcon-Cex47dBo.js";import"./BaseRadioButton.stories-Zm_BUsXI.js";import"./BaseRadioButton-CElH_dm-.js";import"./Title-BT5tkyTa.js";import"./Card-Bxk5NiQe.js";import"./Text-DdN7AwSH.js";import"./Tag--9Lb1XN2.js";import"./ExpandablePanel-bGvOKRjy.js";import"./useAnimatedHeightBetween-DxGhEAiy.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D2jWAk7d.js";import"./Expander-ChArGiUD.js";import"./ChevronUpIcon-BxxcmvrU.js";import"./ListItem-BlN7jsvN.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

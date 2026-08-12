import{r as p,j as i}from"./iframe-eiGRV8yZ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-TOB5ZAEK.js";import l from"./Help.stories-D1cHXdEw.js";import c from"./RadioButton.stories-D9jjREKN.js";import{F as d}from"./FieldGroup-DSMc2FKy.js";import{C as k,a as u}from"./CheckboxPanel.stories-BivQ0QP-.js";import{RadioPanel as g}from"./RadioPanel.stories-Y_QndBrA.js";import{C as h}from"./Checkbox-C0Gv3SN9.js";import{R as b}from"./RadioPanel-DJqPHSL0.js";import{H as x}from"./Help-BjBCavNg.js";import{R as C}from"./RadioButton-DjgdXPbs.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CwdzbWOD.js";import"./BaseRadioButton-BM005YVt.js";import"./clsx-B-dksMZM.js";import"./useId-C8_qHlzR.js";import"./Label-DuvC3dWZ.js";import"./SupportLabel-DntUgqpu.js";import"./SuccessIcon-3Hj9B2_B.js";import"./Icon-C1SPYF0C.js";import"./WarningIcon-B6qWTavB.js";import"./InputPanel-DEueJdew.js";import"./Flex-BoAUorIK.js";import"./SlotComponent-Cy0v55wT.js";import"./mergeRefs-d5jx2iof.js";import"./Button-2tTRn1gx.js";import"./usePreviousValue-CUyXOqbo.js";import"./Loader-DEyiWbLX.js";import"./useDelayedRender-CqA6lI6c.js";import"./Title-DCmsPXzX.js";import"./Card-B10I0Kig.js";import"./Text-COwu8ak1.js";import"./Tag-BEOfsgeY.js";import"./ExpandablePanel-CPa9_bX6.js";import"./useAnimatedHeightBetween-D63hUWeo.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CQ-TOzxp.js";import"./Expander-Ck_-qMZw.js";import"./ChevronDownIcon-BR9uyTkK.js";import"./ChevronUpIcon-0jGNweab.js";import"./ListItem-Bh5AgxRC.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

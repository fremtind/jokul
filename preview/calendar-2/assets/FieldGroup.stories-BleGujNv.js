import{r as p,j as i}from"./iframe-BLh5WKhB.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BUU0JHdK.js";import l from"./Help.stories-Ch2BECts.js";import c from"./RadioButton.stories-B1DRxESa.js";import{F as d}from"./FieldGroup-Dc7YxU2G.js";import{C as k,a as u}from"./CheckboxPanel.stories-DBk0GGLa.js";import{RadioPanel as g}from"./RadioPanel.stories-C9lLjri1.js";import{C as h}from"./Checkbox-DFDv5Z7O.js";import{R as b}from"./RadioPanel-Cnb0Ea7k.js";import{H as x}from"./Help-RqIC77y9.js";import{R as C}from"./RadioButton-B7HZlpEu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C-iNBN64.js";import"./Label-BNHUVq9R.js";import"./SupportLabel-BkI7YTN8.js";import"./SuccessIcon-DgzhIWdX.js";import"./Icon-B5LLWZHv.js";import"./WarningIcon-2X_4-MaP.js";/* empty css               *//* empty css               */import"./Flex-B-iJaz2h.js";import"./SlotComponent-3HYlCzDm.js";import"./mergeRefs-DNIMpV3J.js";import"./BaseRadioButton.stories-DI9v-UOi.js";import"./BaseRadioButton-BA370TwV.js";import"./InputPanel-BpIaOZqe.js";import"./Button-ovN0c6NN.js";import"./usePreviousValue-wPtrC9qx.js";import"./Loader-BE0h-rDF.js";import"./useDelayedRender-BOA9U0a4.js";import"./Title-Wy_73xr0.js";import"./Card-BXwFw-TH.js";import"./Text-D0hZovtq.js";import"./Tag-CJqB60al.js";import"./ExpandablePanel-D4YiCn3N.js";import"./useAnimatedHeightBetween-Cjw1y3sP.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cx9yFzFd.js";import"./Expander-BGr9pztI.js";import"./ChevronUpIcon-BiZMgUd2.js";import"./ListItem-flCKHavR.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};

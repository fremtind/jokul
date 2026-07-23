import{r as p,j as i}from"./iframe-BHKoyZan.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CuAwhQ9c.js";import l from"./Help.stories-DHZt3Y0W.js";import c from"./RadioButton.stories-CYB1KK4b.js";import{F as d}from"./FieldGroup-CJcSMtcy.js";import{C as k,a as u}from"./CheckboxPanel.stories-f2cUw7al.js";import{RadioPanel as g}from"./RadioPanel.stories-Dvdp_p8p.js";import{C as h}from"./Checkbox-CFW4KQnG.js";import{R as b}from"./RadioPanel-B-OVISiJ.js";import{H as x}from"./Help-CGI6aSS9.js";import{R as C}from"./RadioButton-BMrk_ezi.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-UwYwSAQz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CBk-e24G.js";import"./mergeRefs-CYWfzqJg.js";import"./BaseRadioButton.stories-DHKWVNtu.js";import"./BaseRadioButton-DhaRQYqj.js";import"./useId-CcaEkITv.js";import"./Label-CkB5x300.js";import"./SupportLabel-Dx1lbbdA.js";import"./SuccessIcon-CSQL8TyS.js";import"./Icon-DmBpoKoZ.js";import"./WarningIcon-CJF_o28q.js";import"./InputPanel-CyM08zHL.js";import"./Button-DvCE8Yrw.js";import"./usePreviousValue-Dj7LcGYv.js";import"./Loader-CD0jJ5N5.js";import"./useDelayedRender-DX4QND8z.js";import"./Title-C2YS8UxP.js";import"./Card-CvrgiONM.js";import"./Text-D97jyDej.js";import"./Tag-BN8jFzUd.js";import"./ExpandablePanel-HJXnqo5Q.js";import"./useAnimatedHeightBetween-QehYoF5D.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BKKPN5ac.js";import"./Expander-Dm40POss.js";import"./ChevronDownIcon-DzdxTSms.js";import"./ChevronUpIcon-B0Jm3M_f.js";import"./ListItem-gG9y5VG7.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};

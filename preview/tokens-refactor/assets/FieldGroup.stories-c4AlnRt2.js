import{j as m,r as a}from"./iframe-DqKAaGIj.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-D1zcxkKq.js";import i from"./RadioButton.stories-CEgEyCCu.js";import{P as s}from"./PopupTip-COa73tJL.js";import c from"./Popuptip.stories-rkdlnEl1.js";import{F as d}from"./FieldGroup-BgDFLn9l.js";import{R as l}from"./RadioButton-DBqCjRPC.js";import{C as u}from"./Checkbox-Dyt4hpcx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Co5yWd1e.js";import"./Label-Bs0SDrWM.js";import"./SupportLabel-97elPIx7.js";import"./WarningIcon-dc2vh5UU.js";import"./Icon-D1P-eTYM.js";import"./BaseRadioButton.stories-CnlJ4zxo.js";import"./BaseRadioButton-_daBi5_u.js";import"./QuestionIcon-Ds1Pq9tk.js";import"./TooltipTrigger-sXnbDCwD.js";import"./floating-ui.react-DlfZNYp7.js";import"./index-OG3ILWjF.js";import"./index-COaHBGmL.js";import"./TooltipContent-CjnkeE2U.js";import"./useBrowserPreferences-4IjMHadG.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <PopupTip {...PopuptipStories.args} content="Du kan bare velge en metode" />
  }
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,z as __namedExportsOrder,w as default};

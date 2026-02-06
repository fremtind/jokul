import{j as m,r as a}from"./iframe-Bod2Eaf_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-CtXJzCj-.js";import i from"./RadioButton.stories-9sKKVjaR.js";import{P as s}from"./PopupTip-D9CSlDpl.js";import c from"./Popuptip.stories-v-DCNwAg.js";import{F as d}from"./FieldGroup-D4Y4i77q.js";import{R as l}from"./RadioButton-Baw0zJh2.js";import{C as u}from"./Checkbox-CV1ePHVD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C8BUmCzf.js";import"./Label-CGH2RL4n.js";import"./SupportLabel-0sgkUrKS.js";import"./WarningIcon-purSLHgO.js";import"./Icon-CvPejPZc.js";import"./BaseRadioButton.stories-Dby0Ghxq.js";import"./BaseRadioButton-DpFBBQV8.js";import"./QuestionIcon-CViaFSnI.js";import"./TooltipTrigger-BWrx39f9.js";import"./floating-ui.react-CKbtqMo-.js";import"./index-ztP5gO-m.js";import"./index-CkUjHU3H.js";import"./TooltipContent-B9YANX3Y.js";import"./useBrowserPreferences-DSblijBA.js";import"./getThemeAndSize-CIzqY74s.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

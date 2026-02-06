import{j as m,r as a}from"./iframe-Bn9GMK04.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as n}from"./Checkbox.stories-fI5k8Gr2.js";import i from"./RadioButton.stories-BoHn4HVT.js";import{P as s}from"./PopupTip-Dnnr1sQq.js";import c from"./Popuptip.stories-Br5peQJP.js";import{F as d}from"./FieldGroup-Du0uITyv.js";import{R as l}from"./RadioButton-DA5Hg-MW.js";import{C as u}from"./Checkbox-D7aV0BEe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-c-N57eks.js";import"./Label-QdmwoVe-.js";import"./SupportLabel-Bi1C0Y4H.js";import"./WarningIcon-taAK45rf.js";import"./Icon-D7PrWAfT.js";import"./BaseRadioButton.stories-BYVySVFx.js";import"./BaseRadioButton-bP70PBtN.js";import"./QuestionIcon-C8MB71_s.js";import"./TooltipTrigger-BXuP7jJW.js";import"./floating-ui.react-CmxB37kU.js";import"./index-CBnVe5u_.js";import"./index-DPPXBzE8.js";import"./TooltipContent-BHF9p_8V.js";import"./useBrowserPreferences-Ca-xAoRl.js";import"./getThemeAndDensity-v_O0Epee.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>a.createElement(l,{...i.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>a.createElement(u,{...n.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:m.jsx(s,{...c.args,content:"Du kan bare velge en metode"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

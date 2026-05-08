import{j as e}from"./iframe-CLrGhnM6.js";import{C as r}from"./_index-Dm5WbWly.js";import{F as t}from"./Flex-D0t1qed2.js";import{F as d}from"./FieldGroup-BX9OFFxt.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CuSOdlzm.js";import"./clsx-B-dksMZM.js";import"./Checkbox-DCHV8zM5.js";import"./useId-Dh0QkaKz.js";import"./RadioButton-BbP4K8Of.js";import"./SupportLabel-DOTia-HN.js";import"./WarningIcon-DmLTyzXF.js";import"./Icon-CsGblwbZ.js";import"./BaseRadioButton-B9sNRsIB.js";import"./SlotComponent-Bib68mBL.js";import"./mergeRefs-SxiKDVxR.js";import"./Label-DWTjtgpc.js";const C={title:"Visuell regresjonstesting/CheckboxPanel",component:r,args:{label:"Kasko",description:"En forsikring som passer de fleste biler. Dekker det meste av skader, også de du selv er ansvarlig for.",alwaysOpen:!0,"aria-invalid":!1},parameters:{layout:"padded"},decorators:[a=>e.jsx("form",{name:"test",children:e.jsx(a,{})})],tags:["visual","!autodocs"]},l=a=>e.jsxs(t,{gap:"xs",direction:"column",as:d,legend:"Velg dekninger",style:{maxWidth:"580px",width:"100%"},children:[e.jsx(r,{...a,name:"minikasko",label:"Kasko",amount:"300 kr/mnd",value:"kasko",defaultChecked:!0}),e.jsx(r,{...a,name:"minikasko",label:"Minikasko",amount:"200 kr/mnd",value:"minikasko"}),e.jsx(r,{...a,name:"ansvar",label:"Ansvar",amount:"100 kr/mnd",value:"ansvar"})]}),n={name:"Lys, medium",globals:{theme:"light",size:"medium"},render:l},s={name:"Mørk, medium",globals:{theme:"dark",size:"medium"},render:l},i={name:"Lys, liten",globals:{theme:"light",size:"small"},render:l},o={name:"Mørk, liten",globals:{theme:"dark",size:"small"},render:l},m={name:"Med feil (lys)",globals:{theme:"light",size:"medium"},render:a=>e.jsxs(t,{gap:"xs",direction:"column",as:d,legend:"Velg dekninger",style:{maxWidth:"580px",width:"100%"},children:[e.jsx(r,{...a,name:"minikasko",label:"Kasko",amount:"300 kr/mnd",value:"kasko","aria-invalid":"true"}),e.jsx(r,{...a,name:"minikasko",label:"Minikasko",amount:"200 kr/mnd",value:"minikasko","aria-invalid":"true"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Lys, medium",
  globals: {
    theme: "light",
    size: "medium"
  },
  render: renderPanels
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Mørk, medium",
  globals: {
    theme: "dark",
    size: "medium"
  },
  render: renderPanels
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Lys, liten",
  globals: {
    theme: "light",
    size: "small"
  },
  render: renderPanels
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Mørk, liten",
  globals: {
    theme: "dark",
    size: "small"
  },
  render: renderPanels
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Med feil (lys)",
  globals: {
    theme: "light",
    size: "medium"
  },
  render: args => <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger" style={{
    maxWidth: "580px",
    width: "100%"
  }}>
            <CheckboxPanel {...args} name="minikasko" label="Kasko" amount="300 kr/mnd" value="kasko" aria-invalid="true" />
            <CheckboxPanel {...args} name="minikasko" label="Minikasko" amount="200 kr/mnd" value="minikasko" aria-invalid="true" />
        </Flex>
}`,...m.parameters?.docs?.source}}};const D=["LysDefault","MoerkDefault","LysLiten","MoerkLiten","MedFeil"];export{n as LysDefault,i as LysLiten,m as MedFeil,s as MoerkDefault,o as MoerkLiten,D as __namedExportsOrder,C as default};

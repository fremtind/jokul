import{j as e}from"./iframe-B6t6YqCc.js";import{C as n}from"./Checkbox-BEc1s3fG.js";/* empty css               */import{F as s}from"./FieldGroup-C1g7n2fk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CAwgnIkD.js";import"./Label-BFy386Ar.js";import"./SupportLabel-Bn8GTQSZ.js";import"./WarningIcon-CgvETRxr.js";import"./Icon-BFk3_Um7.js";const C={title:"Komponenter/Checkbox",component:n,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks"}},r={},o={args:{helpLabel:"Du kan velge én eller flere typer kjeks"},render:({helpLabel:c,...t})=>e.jsxs(s,{legend:"Velg kjeks",helpLabel:c,children:[e.jsx(n,{...t,value:"ritz",children:"Ritz"}),e.jsx(n,{...t,value:"biscoff",children:"Biscoff"}),e.jsx(n,{...t,value:"tuc",children:"Tuc Paprika"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Du kan velge én eller flere typer kjeks"
  },
  render: ({
    helpLabel,
    ...checkboxArgs
  }) => {
    return <FieldGroup legend="Velg kjeks" helpLabel={helpLabel}>
                <CheckboxComponent {...checkboxArgs} value="ritz">
                    Ritz
                </CheckboxComponent>
                <CheckboxComponent {...checkboxArgs} value="biscoff">
                    Biscoff
                </CheckboxComponent>
                <CheckboxComponent {...checkboxArgs} value="tuc">
                    Tuc Paprika
                </CheckboxComponent>
            </FieldGroup>;
  }
}`,...o.parameters?.docs?.source}}};const f=["Checkbox","CheckboxGroup"];export{r as Checkbox,o as CheckboxGroup,f as __namedExportsOrder,C as default};

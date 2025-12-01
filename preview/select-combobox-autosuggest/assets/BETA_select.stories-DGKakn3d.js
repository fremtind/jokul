import{r as E,R as e}from"./index-siqcju79.js";import{c as S}from"./clsx-B-dksMZM.js";import{g as q}from"./valuePair-Bn6SadUn.js";import{I as T}from"./InputGroup-BJwbXp8L.js";/* empty css               */import{F as _}from"./Flex-DP-fj2ie.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";const n=E.forwardRef((r,o)=>{const{label:p,className:m,errorLabel:c,helpLabel:u,items:d,labelProps:g,placeholder:s="Velg",supportLabelProps:b,required:k=!0,...y}=r,v={label:p,errorLabel:c,helpLabel:u,labelProps:g,supportLabelProps:b};return e.createElement(T,{...v,labelProps:{srOnly:!!r["aria-labelledby"]},className:S("NEW_jkl-select expressive",m),"data-testid":"jkl-select",render:f=>e.createElement("select",{ref:o,required:k,...f,...y},s&&e.createElement("option",{disabled:!0,value:""},s),d.map(q).map(l=>e.createElement("option",{"data-testid":"jkl-select__option",key:l.value,value:l.value},l.label)))})});n.__docgenInfo={description:"BETA: Denne komponenten er enda under utvikling, og kan gjerne brukes i løsnignene ute, men vil gå gjennom breaking changes fortløpende.",methods:[],displayName:"BETA_Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:`Merk som ugyldig uten å sende inn en errorLabel.
NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.`},placeholder:{required:!1,tsType:{name:"string"},description:`Setter inn et placeholderelement som vises når ingenting er valgt i nedtrekkslisten.
@default "Velg"`},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"string | ValuePair",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    value: string;
    label: string;
    description?: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}}]}}]}],raw:"Array<string | ValuePair>"},description:""},selectClassName:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit","SelectHTMLAttributes"]};const i=[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"}],R={title:"Komponenter/Select/BETA Select",component:n,parameters:{layout:"centered"},args:{name:"Select",label:"Merke",items:i,placeholder:"Velg merke",helpLabel:"Du kan kun velge ett merke",required:!0},argTypes:{defaultValue:{control:"select",options:["",...i.map(r=>r.value)]}},tags:["autodocs","beta"]},t={name:"Select"},a={name:"Select i skjema (bak)",parameters:{layout:"fullscreen"},render:r=>e.createElement(_,{direction:"column",gap:24,style:{padding:"24px"}},e.createElement("h2",{id:"question-title"},"Hvilket merke er mobilen din?"),e.createElement("p",{id:"question-description"},r.helpLabel),e.createElement(n,{...r,"aria-labelledby":"question-title","aria-describedby":"question-description"}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Select i skjema (bak)",
  parameters: {
    layout: "fullscreen"
  },
  render: args => <Flex direction="column" gap={24} style={{
    padding: "24px"
  }}>
            <h2 id="question-title">Hvilket merke er mobilen din?</h2>
            <p id="question-description">{args.helpLabel}</p>
            <BETA_Select {...args} aria-labelledby="question-title" aria-describedby="question-description" />
        </Flex>
}`,...a.parameters?.docs?.source}}};const H=["BETASelect","BETA_IN_FORM_Select"];export{t as BETASelect,a as BETA_IN_FORM_Select,H as __namedExportsOrder,R as default};

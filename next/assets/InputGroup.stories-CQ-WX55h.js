import{j as e}from"./iframe-DUSK3EL0.js";import{B as i}from"./BaseTextInput-D2KH68zo.js";import{I as p}from"./InputGroup-DLD7jAjz.js";/* empty css               *//* empty css               */import s from"./Help.stories-BX1H6exV.js";import l from"./BaseTextInput.stories-Oh7KOKH9.js";import{H as a}from"./Help-C8pQgRSG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-4jqpd5-j.js";import"./useId-BWR4YtCt.js";import"./Label-CGfkNRAN.js";import"./SupportLabel-BWHNu2on.js";import"./SuccessIcon-31L3ixE1.js";import"./Icon-OvV2KghW.js";import"./WarningIcon-CwQuELVA.js";import"./Button-Cenx_Ne3.js";import"./usePreviousValue-2Ty8ukGF.js";import"./Loader-B40sQrz-.js";import"./useDelayedRender-C68oFPg3.js";const T={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(i,{...l.args,defaultValue:"12345 123456"})}},r={args:{}},o={name:"Input Group med tooltip",args:{tooltip:e.jsx(a,{...s.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},t={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(a,{...s.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(a,{...s.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Input Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args}>
                Vi bruker fødselsnummer for å identifisere deg i systemene våre.
            </Help>
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Input Group med label over flere linjer",
  args: {
    label: <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>,
    description: undefined,
    tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Input Group med lang label og description",
  args: {
    label: <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>,
    tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>
  }
}`,...n.parameters?.docs?.source}}};const k=["_InputGroup","InputGroupTooltip","MultiLineLabel","MultiLineLabelAndDescription"];export{o as InputGroupTooltip,t as MultiLineLabel,n as MultiLineLabelAndDescription,r as _InputGroup,k as __namedExportsOrder,T as default};

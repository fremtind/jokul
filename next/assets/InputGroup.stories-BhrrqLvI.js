import{j as e}from"./iframe-HcF1Ni7Z.js";import{B as i}from"./BaseTextInput-C1U-d2O6.js";import{I as p}from"./InputGroup-DCeBenfV.js";/* empty css               *//* empty css               */import s from"./Help.stories-CpR719zE.js";import m from"./BaseTextInput.stories-vYqcDtTA.js";import{H as a}from"./Help-DoTXC84_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-BhmoRHuu.js";import"./useId-C1Uqa4iT.js";import"./types-BlFGa32c.js";import"./Label-BQTXb4CM.js";import"./SupportLabel-CPfJgJUU.js";import"./SuccessIcon-FSu6pBYw.js";import"./Icon-BjtCMmoX.js";import"./WarningIcon-CR9EQvbZ.js";import"./Button-Pvv7l0um.js";import"./usePreviousValue-DD5DxBjp.js";import"./Loader-BCrQsFT6.js";import"./useDelayedRender-CbzLBtns.js";const _={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(i,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},o={name:"Input Group med tooltip",args:{tooltip:e.jsx(a,{...s.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},t={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(a,{...s.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(a,{...s.args,children:"Vi er bare nysgjerrige 😏"})}},T=["_InputGroup","InputGroupTooltip","MultiLineLabel","MultiLineLabelAndDescription"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{o as InputGroupTooltip,t as MultiLineLabel,n as MultiLineLabelAndDescription,r as _InputGroup,T as __namedExportsOrder,_ as default};

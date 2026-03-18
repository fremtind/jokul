import{j as e}from"./iframe-BHanZNHf.js";import{B as i}from"./BaseTextInput-Bzypcg3C.js";import{I as p}from"./InputGroup-BLQUUXXj.js";/* empty css               *//* empty css               */import{H as s,m as a}from"./Help.stories-CumEa3WJ.js";import m from"./BaseTextInput.stories-Bfu_HSpq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-Bxg55Kei.js";import"./useId-Dlpf33gm.js";import"./Label-BhxZRB-7.js";import"./SupportLabel-DjAwP0Su.js";import"./WarningIcon-CFB0ODQ5.js";import"./Icon-3SmRXZEX.js";import"./Button-BvewUOl8.js";import"./usePreviousValue-CP1Y0qOy.js";import"./Loader-ptbOnOHY.js";import"./useDelayedRender-DfnYjEci.js";/* empty css               *//* empty css               */import"./Flex-C8hhOzba.js";import"./SlotComponent-DcvSKkHy.js";import"./mergeRefs-CDzaJv6g.js";const B={title:"Komponenter/Input Group",component:p,args:{label:"Fødeselsnummer",description:"Fødselsnummer består av 11 siffer.",children:e.jsx(i,{...m.args,defaultValue:"12345 123456"})}},r={args:{}},t={name:"Input Group med tooltip",args:{tooltip:e.jsx(s,{...a.args,children:"Vi bruker fødselsnummer for å identifisere deg i systemene våre."})}},o={name:"Input Group med label over flere linjer",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),description:void 0,tooltip:e.jsx(s,{...a.args,children:"Vi er bare nysgjerrige 😏"})}},n={name:"Input Group med lang label og description",args:{label:e.jsxs(e.Fragment,{children:["Har du noen gang vært",e.jsx("br",{}),"i utlandet på ferie?"]}),tooltip:e.jsx(s,{...a.args,children:"Vi er bare nysgjerrige 😏"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Input Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args}>
                Vi bruker fødselsnummer for å identifisere deg i systemene våre.
            </Help>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Input Group med label over flere linjer",
  args: {
    label: <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>,
    description: undefined,
    tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Input Group med lang label og description",
  args: {
    label: <>
                Har du noen gang vært
                <br />i utlandet på ferie?
            </>,
    tooltip: <Help {...HelpStories.args}>Vi er bare nysgjerrige 😏</Help>
  }
}`,...n.parameters?.docs?.source}}};const D=["_InputGroup","InputGroupTooltip","MultiLineLabel","MultiLineLabelAndDescription"];export{t as InputGroupTooltip,o as MultiLineLabel,n as MultiLineLabelAndDescription,r as _InputGroup,D as __namedExportsOrder,B as default};

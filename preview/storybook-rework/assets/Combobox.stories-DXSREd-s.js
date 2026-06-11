import{C as c}from"./Combobox-4I86IYn5.js";/* empty css               */import"./iframe-C4dhTlAs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-BBq9k9JB.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bmr49A5p.js";import"./usePreviousValue-CMkx7laA.js";import"./useId-CNj6Voav.js";import"./useListNavigation-CPovo0gA.js";import"./Chip-ImZv6Q8H.js";import"./CheckIcon-DrAyBqgW.js";import"./Icon-JgCnYFH5.js";import"./CloseIcon-P9-qmZB_.js";import"./IconButton-iWZrvoq2.js";import"./ArrowVerticalAnimated-DN--rDXH.js";import"./ArrowDownIcon-EWeyvGCO.js";import"./InputGroup-BiyrnfK5.js";import"./Label-BEqVZLqD.js";import"./SupportLabel-DiaJg8H9.js";import"./WarningIcon-C9VdE4pm.js";import"./TooltipTrigger-BYYMvnPZ.js";import"./floating-ui.react-G-ZkKSOM.js";import"./index-D2_U-rkX.js";import"./index-CBdqo7tg.js";import"./TooltipContent-BlmvpM8D.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,R={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:()=>s(),onBlur:()=>s(),onFocus:()=>s(),id:"combobox",value:[{...n[0]}]}},e={args:{value:void 0}},a={play:async()=>{await l.tab()}},r={play:async({canvasElement:i})=>{const m=p(i).getByTestId("jkl-combobox__button");await l.click(m)}},o={args:{errorLabel:"Feilmelding"}},t={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("jkl-combobox__button");
    await userEvent.click(button);
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Feilmelding"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: comboboxItems
  }
}`,...t.parameters?.docs?.source}}};const Y=["Default","FocusState","OpenState","ErrorState","HasValue"];export{e as Default,o as ErrorState,a as FocusState,t as HasValue,r as OpenState,Y as __namedExportsOrder,R as default};

import{C as c}from"./Combobox-CFqabum-.js";/* empty css               */import"./iframe-2CDGeqKK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-DcV3jz4A.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CKqOfLl1.js";import"./usePreviousValue-BwI7IMt4.js";import"./useId-DH6fwIQQ.js";import"./useListNavigation-CsGjp0aw.js";import"./Chip-DOnlDxpW.js";import"./CheckIcon-CURwaSv5.js";import"./Icon-fvP8p-C6.js";import"./CloseIcon-BjaGeFrW.js";import"./IconButton-DUfa0__m.js";import"./ArrowVerticalAnimated-vyFeF2VF.js";import"./ArrowDownIcon-DPE1u6_X.js";import"./InputGroup-CO4QFWjx.js";import"./Label-DtEvUvd2.js";import"./SupportLabel-v171zuaM.js";import"./WarningIcon-C_LJvm5c.js";import"./TooltipTrigger-jwDx4Uy6.js";import"./floating-ui.react-Bj6cZCn5.js";import"./index-CvZYm1ZW.js";import"./index-Css7utUH.js";import"./TooltipContent-CjC2pq97.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,R={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher søket.",onChange:s(),onBlur:s(),onFocus:s(),id:"combobox",value:[{...n[0]}]}},e={args:{value:void 0}},r={play:async({canvasElement:i})=>{const m=p(i).getByTestId("jkl-combobox__button");await l.click(m)}},a={play:async()=>{await l.tab()}},o={name:"Error",args:{errorLabel:"Feilmelding"}},t={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("jkl-combobox__button");
    await userEvent.click(button);
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Error",
  args: {
    errorLabel: "Feilmelding"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: comboboxItems
  }
}`,...t.parameters?.docs?.source}}};const Y=["Default","Open","KeyboardFocus","ErrorState","HasValue"];export{e as Default,o as ErrorState,t as HasValue,a as KeyboardFocus,r as Open,Y as __namedExportsOrder,R as default};

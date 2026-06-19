import{C as c}from"./Combobox-D1Hr7RAp.js";/* empty css               */import"./iframe-CAz-VHJB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-BRlapcO8.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-mjnGU9Oy.js";import"./usePreviousValue-HwujPgPU.js";import"./useId-ny0kvgWc.js";import"./useListNavigation-BMjMoMs1.js";import"./Chip-EcTNFPqm.js";import"./CheckIcon-DduqCUfx.js";import"./Icon-COJNPfPC.js";import"./CloseIcon-ClWO62d1.js";import"./IconButton-BgC4fkaE.js";import"./ArrowVerticalAnimated-CLjYd3xH.js";import"./ArrowDownIcon-DXzBow8F.js";import"./InputGroup-BJjrfuvw.js";import"./Label-DZ6rAOeV.js";import"./SupportLabel-C9VrhFtr.js";import"./SuccessIcon-BJyQ8q3N.js";import"./WarningIcon-CsASCqxg.js";import"./TooltipTrigger-zTqWz6Cq.js";import"./floating-ui.react-BJmvWpYV.js";import"./index-woP9NzCs.js";import"./index-AmflsTgb.js";import"./TooltipContent-CnrVLtGw.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,Y={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher søket.",onChange:s(),onBlur:s(),onFocus:s(),id:"combobox",value:[{...n[0]}]}},e={args:{value:void 0}},r={play:async({canvasElement:i})=>{const m=p(i).getByTestId("jkl-combobox__button");await l.click(m)}},a={play:async()=>{await l.tab()}},o={name:"Error",args:{errorLabel:"Feilmelding"}},t={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const q=["Default","Open","KeyboardFocus","ErrorState","HasValue"];export{e as Default,o as ErrorState,t as HasValue,a as KeyboardFocus,r as Open,q as __namedExportsOrder,Y as default};

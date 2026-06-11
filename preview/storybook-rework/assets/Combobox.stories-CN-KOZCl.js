import{C as c}from"./Combobox-ccgJJGaW.js";/* empty css               */import"./iframe-BUprc3LF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-BIZABrfa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DcaK8hfg.js";import"./usePreviousValue-B__mXeix.js";import"./useId-GUh6XCYW.js";import"./useListNavigation-BA5moF2Q.js";import"./Chip-D9GxGrtr.js";import"./CheckIcon-DIk2Lky6.js";import"./Icon-BSZAwLB9.js";import"./CloseIcon-Be-9dUdA.js";import"./IconButton-Bw_xemvO.js";import"./ArrowVerticalAnimated-ClraMlo_.js";import"./ArrowDownIcon-BRdFZxXC.js";import"./InputGroup-Bj4yQ8HW.js";import"./Label-DMSbuh6M.js";import"./SupportLabel-Dfn2iHAw.js";import"./WarningIcon-CUVyv9jw.js";import"./TooltipTrigger-BA9Dla9m.js";import"./floating-ui.react-DG6mA-jU.js";import"./index-OoIHfR0v.js";import"./index-DJqAy0vH.js";import"./TooltipContent-DCTsVSjT.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,R={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:()=>s(),onBlur:()=>s(),onFocus:()=>s(),id:"combobox",value:[{...n[0]}]}},e={args:{value:void 0}},a={play:async()=>{await l.tab()}},r={play:async({canvasElement:i})=>{const m=p(i).getByTestId("jkl-combobox__button");await l.click(m)}},o={args:{errorLabel:"Feilmelding"}},t={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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

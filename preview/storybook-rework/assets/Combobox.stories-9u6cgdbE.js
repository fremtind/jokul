import{C as c}from"./Combobox-D8_iPHkE.js";/* empty css               */import"./iframe-Bjv_KgzE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeight-D-pX-izC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DTDFYa14.js";import"./usePreviousValue-CVuRAxUZ.js";import"./useId-Dufhz9ey.js";import"./useListNavigation-DESyGg3R.js";import"./Chip-DFV8LJlL.js";import"./CheckIcon-D-NfpXqo.js";import"./Icon-7NrcGDwC.js";import"./CloseIcon-nHx1NeE8.js";import"./IconButton-DxuaD_Dt.js";import"./ArrowVerticalAnimated-BrfpAmRV.js";import"./ArrowDownIcon-jV2L8X3g.js";import"./InputGroup-BY8Lon_U.js";import"./Label-unL0otln.js";import"./SupportLabel-DZdi5IeT.js";import"./SuccessIcon-CCmZzOHD.js";import"./WarningIcon-CVIKJ5dl.js";import"./TooltipTrigger-CnSt6JZ1.js";import"./floating-ui.react-9pR-V9VU.js";import"./index-C2CXF13h.js";import"./index-zpA_3oGK.js";import"./TooltipContent-Dejz8j4Q.js";import"./getThemeAndSize-CZAj3IXt.js";const n=[{value:"Valg 1",tagLabel:"Valg 1",label:"Valg 1: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 2",tagLabel:"Valg 2",label:"Valg 2: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"},{value:"Valg 3",tagLabel:"Valg 3",label:"Valg 3: Ulik tekst i dropdownen dersom det trengs",description:"En beskrivelse av valget"}],{fn:s,userEvent:l,within:p}=__STORYBOOK_MODULE_TEST__,j={title:"Komponenter/Combobox",component:c,args:{name:"combobox",label:"Velg blant mange",items:n,placeholder:"Velg",inline:!1,invalid:!1,hasTagHover:!1,errorLabel:void 0,labelProps:{srOnly:!1,variant:"small"},width:"23ch",description:"Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",noMatchingOption:"Ingen regelfunn matcher soeket.",onChange:s(),onBlur:s(),onFocus:s(),id:"combobox",value:[]}},e={},a={play:async()=>{await l.tab()}},r={play:async({canvasElement:i})=>{const m=p(i).getByRole("button",{name:/velg blant mange/i});await l.click(m)}},t={args:{errorLabel:"Feilmelding"}},o={args:{value:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await userEvent.tab();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: /velg blant mange/i
    });
    await userEvent.click(button);
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Feilmelding"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: comboboxItems
  }
}`,...o.parameters?.docs?.source}}};const q=["Default","FocusState","OpenState","ErrorState","HasValue"];export{e as Default,t as ErrorState,a as FocusState,o as HasValue,r as OpenState,q as __namedExportsOrder,j as default};

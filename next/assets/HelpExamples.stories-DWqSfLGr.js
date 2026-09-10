import{j as r}from"./iframe-BX-rw-hQ.js";import{H as o}from"./Help-GZ5r5DPa.js";import"./Help.stories-C5prgfx5.js";import{A as c,m as d}from"./Autosuggest.stories-C-e8ygml.js";import g,{ComboboxStory as x}from"./Combobox.stories-54PwLMU_.js";import H from"./FieldGroup.stories-CXCEqf10.js";import b from"./InputGroup.stories-GVmifxzT.js";import S from"./select.stories-C-vVtFMI.js";import j from"./TextArea.stories-XcATYWNZ.js";import{C as f}from"./Combobox-CZHAFU7a.js";import{D as I}from"./DateInput-1LWiteEM.js";import{F as T}from"./FieldGroup-P-zCuALR.js";import{I as G}from"./InputGroup-BcWg2aNT.js";import{S as A}from"./Search-zStBv6Ix.js";import{S as h}from"./Select-OdT-bR9F.js";import{T as v}from"./TextArea-BB2pz5lZ.js";import{T as C}from"./TextInput-BEQnL1BP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ax05Dd50.js";import"./Button-CMbhyutW.js";import"./usePreviousValue-B4iOj-L1.js";import"./Loader-WYb7Xu6g.js";import"./useDelayedRender-CUCq3SRV.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Bi3dtQ2D.js";import"./IconButton-Ctah9Bsk.js";import"./CloseIcon-Ds8j-sxU.js";import"./SearchIcon-CjWJ-vhK.js";import"./PopupTip-BUZbt1QQ.js";import"./QuestionIcon-BwKd4I9g.js";import"./TooltipTrigger-DiAVDk3U.js";import"./floating-ui.react-B9G3WfUC.js";import"./index-B9awIIh6.js";import"./index-BUBOH4tn.js";import"./TooltipContent-vBfyDOAx.js";import"./useBrowserPreferences-DkXPwbC6.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BZglzYzp.js";import"./InputPanel-C40vo70u.js";import"./Checkbox-CVxD_WpN.js";import"./RadioButton-si5cXFy6.js";import"./SupportLabel-CSmjuLil.js";import"./SuccessIcon-C0eFkGBW.js";import"./WarningIcon-Ch1pqErH.js";import"./BaseRadioButton-BkNdyY5n.js";import"./Flex-BG-7qGfU.js";import"./SlotComponent-D7TnFH5f.js";import"./mergeRefs-51r8V3ab.js";import"./Checkbox.stories-jPbyV1DU.js";import"./RadioButton.stories-DaOeEQty.js";import"./BaseRadioButton.stories-CWZtRYOf.js";import"./RadioPanel.stories-DI4JsW2V.js";import"./RadioPanel-Cr3Q-0gt.js";import"./Title-DaKU9xwX.js";import"./Card-tfwezwft.js";import"./Text-DzQDKkCj.js";import"./Tag-iFfISgLM.js";import"./ExpandablePanel-CZzjlV3s.js";import"./useAnimatedHeightBetween-G6hoixlv.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BNAimmnv.js";import"./ChevronUpIcon-DopuLogV.js";import"./ListItem-DoYgqf6r.js";import"./BaseTextInput-BZNT4s_Y.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-k7dv6aRw.js";import"./index.esm-C6MyVBGf.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DONT-s6j.js";import"./useListNavigation-D8D_8-Gx.js";import"./Chip-Bih0owzZ.js";import"./CheckIcon-DPawyKPO.js";import"./ArrowVerticalAnimated-BRGDq5lS.js";import"./ArrowDownIcon-SttHdI4O.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CAcG8nvl.js";import"./TableCaption-D6WEs0GW.js";import"./tableContext-BWG8kgCA.js";import"./CalendarIcon-CoaK31qf.js";import"./Label-DoOtU33q.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Date Input",
  render: args => {
    return <DateInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Combobox",
  render: args => {
    return <Combobox {...ComboboxStories.args} {...ComboboxStory.args} width="300px" tooltip={<Help {...args} />} />;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Text area",
  render: args => {
    return <TextArea {...TextAreaStories.args} tooltip={<Help {...args} />} />;
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Search",
  render: args => {
    return <Search labelProps={{
      srOnly: false
    }} tooltip={<Help {...args} />} />;
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Select",
  render: args => {
    return <Select name="select" label="Hva jobber du som?" items={[]} {...SelectStories.args} tooltip={<Help {...args} />} />;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Autosuggest",
  render: args => {
    return <Autosuggest {...AutosuggestStories.args} tooltip={<Help {...args} />} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Input Group",
  render: args => {
    return <InputGroup {...InputGroupStories.args} label="Fødselsnummer" tooltip={<Help {...args} />} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Field Group",
  render: args => {
    return <FieldGroup {...FieldGroupStories.args} legend="Hvordan kan vi kontakte deg?" tooltip={<Help {...args} />} />;
  }
}`,...u.parameters?.docs?.source}}};const ne=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ne as __namedExportsOrder,me as default};

import{j as r}from"./iframe-CIOLMutx.js";import{H as o}from"./Help-BBri9bOX.js";import"./Help.stories-D6lnvdGH.js";import{A as c,m as d}from"./Autosuggest.stories-D36kabWO.js";import g,{ComboboxStory as x}from"./Combobox.stories-CXmQOVg0.js";import H from"./FieldGroup.stories-Cx5wZCU7.js";import b from"./InputGroup.stories-B0P9uH0f.js";import S from"./select.stories-BTiyzhRF.js";import j from"./TextArea.stories-CymOrojm.js";import{C as f}from"./Combobox-dTwFtwrO.js";import{D as I}from"./DateInput-DoGCRoVA.js";import{F as T}from"./FieldGroup-D_jzkkOR.js";import{I as G}from"./InputGroup-ClUbaZwZ.js";import{S as A}from"./Search-CN7VgGuU.js";import{S as h}from"./Select-CuN4EKFV.js";import{T as v}from"./TextArea-6JNfBRBZ.js";import{T as C}from"./TextInput-DdBvC5DA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DPg7yywr.js";import"./Button-BCVY3AVs.js";import"./usePreviousValue-Cy5BiPRu.js";import"./Loader-CKZZhDxC.js";import"./useDelayedRender-CtFNWS0t.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DK2074m8.js";import"./IconButton-C-XTIliU.js";import"./CloseIcon-782ZZrpi.js";import"./SearchIcon-COpcPlXN.js";import"./PopupTip-CdvmeEIe.js";import"./QuestionIcon-BGwx8h1r.js";import"./TooltipTrigger-Dn90Ic-w.js";import"./floating-ui.react-DtfvAvJ_.js";import"./index-Tm5DGZQ2.js";import"./index-yWSHYkJS.js";import"./TooltipContent-Dm7pKDGa.js";import"./useBrowserPreferences-CjpYbL7v.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-C6OK4uFO.js";import"./InputPanel-CeE_skXO.js";import"./Checkbox-ClMCA2U0.js";import"./RadioButton-Bbt47foh.js";import"./SupportLabel-BOHv0NtA.js";import"./SuccessIcon-BB5U-9ZP.js";import"./WarningIcon-BtpB1UVE.js";import"./BaseRadioButton-D0X6FIS0.js";import"./Flex-CoeccMX8.js";import"./SlotComponent-Yu7wEOiC.js";import"./mergeRefs-BW7uM0jW.js";import"./Checkbox.stories-CBNHU1Fk.js";import"./RadioButton.stories-CL1wTu8W.js";import"./BaseRadioButton.stories-BDRdxP0f.js";import"./RadioPanel.stories-CXKBOwUO.js";import"./RadioPanel-DlLxZdGu.js";import"./Title-8VXC4QZx.js";import"./Card-DrYMgfUj.js";import"./Text-C5Ev5wc-.js";import"./Tag-DTil4h4-.js";import"./ExpandablePanel-D4rjUHst.js";import"./useAnimatedHeightBetween-8yVcz4od.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BN1VOEsF.js";import"./ChevronUpIcon-mw60D1RR.js";import"./ListItem-CP0DbTfQ.js";import"./BaseTextInput-B20XUDV-.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DYUTvn0P.js";import"./index.esm-uaqESW9V.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-vfxPPR6E.js";import"./useListNavigation-Btg77ucu.js";import"./Chip-DFK4AGYY.js";import"./CheckIcon-DbiSlF43.js";import"./ArrowVerticalAnimated-DqHr9DEI.js";import"./ArrowDownIcon-DYikapef.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-D790gdjy.js";import"./TableCaption-B2AiJk4o.js";import"./tableContext-AjR4Laud.js";import"./CalendarIcon-uPGKDCVl.js";import"./Label-DBAOVTri.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

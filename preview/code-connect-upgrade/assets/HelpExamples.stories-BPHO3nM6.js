import{j as r}from"./iframe-ot-30PJH.js";import{H as o}from"./Help-D18-Cd9k.js";import"./Help.stories-DX510ZRv.js";import{A as c,m as d}from"./Autosuggest.stories-Asj526-d.js";import g,{ComboboxStory as x}from"./Combobox.stories-DolQ1tNk.js";import H from"./FieldGroup.stories-03FNNGcb.js";import b from"./InputGroup.stories-htYE0Zuc.js";import S from"./select.stories-iczuvgIk.js";import j from"./TextArea.stories-C-geK8e0.js";import{C as f}from"./Combobox-Cs9b7LgN.js";import{D as I}from"./DateInput-CcLF1bTN.js";import{F as T}from"./FieldGroup-oygE7Knw.js";import{I as G}from"./InputGroup-B9-MwTXB.js";import{S as A}from"./Search-B-eek2HC.js";import{S as h}from"./Select-lcqS31bZ.js";import{T as v}from"./TextArea-Bc_nFoLM.js";import{T as C}from"./TextInput-C1zvXlVW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Z0bG178u.js";import"./Button-BBx8xu1h.js";import"./usePreviousValue-5gxBRrX2.js";import"./Loader-YqIB17oY.js";import"./useDelayedRender-B1OJd3jW.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-NV7sC4Mc.js";import"./IconButton-3xFgOGKx.js";import"./CloseIcon-DPGhOpjP.js";import"./SearchIcon-CPdpjZiC.js";import"./PopupTip-r0rSjpGF.js";import"./QuestionIcon-BJU8hzCI.js";import"./TooltipTrigger-CL-2cO4X.js";import"./floating-ui.react-C_LHwJKf.js";import"./index-CxTdRxZq.js";import"./index-Cv1y4z49.js";import"./TooltipContent-z_AH9ZOW.js";import"./useBrowserPreferences-Bjf6t2Dw.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-DlW6BF7V.js";import"./Checkbox-Mfn8p06Q.js";import"./RadioButton.stories-iKOAHK14.js";import"./RadioButton--9Mrx3Yn.js";import"./SupportLabel-BHj4pd4q.js";import"./SuccessIcon-DCIrkE1P.js";import"./WarningIcon-BiSB6I1j.js";import"./BaseRadioButton-BV4trvWI.js";import"./BaseRadioButton.stories-hVh5XYvw.js";import"./CheckboxPanel.stories-BKPo3i2z.js";import"./InputPanel-mhENPK5I.js";import"./Flex-BnZxp9jA.js";import"./SlotComponent-BUVtTebW.js";import"./mergeRefs-DJXMwTXr.js";import"./RadioPanel.stories-BazcHFwe.js";import"./RadioPanel-BThqKZD0.js";import"./Title-DxoF-qMZ.js";import"./Card-Cm7zrOyu.js";import"./Text-D3t1y8h1.js";import"./Tag-DQlEPLn8.js";import"./ExpandablePanel-C9tHY7Fo.js";import"./useAnimatedHeightBetween-B-hWPjsl.js";import"./tokens-CW-NfdIE.js";import"./Expander-DIWbji7S.js";import"./ChevronUpIcon-DqWCDblO.js";import"./ListItem-BXktjRy-.js";import"./BaseTextInput-BEcBuwps.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-6su9R9T_.js";import"./index.esm-Dp5KOkoV.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DadQugqY.js";import"./useListNavigation-9Es7ivLG.js";import"./Chip-C8LJjtlx.js";import"./CheckIcon-vw3Ov0P7.js";import"./ArrowVerticalAnimated-DudbWN_o.js";import"./ArrowDownIcon-8hbHxm4O.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BfPfwA3S.js";import"./TableCaption-CvE9tnKl.js";import"./tableContext-C7v5G1hn.js";import"./CalendarIcon-CNIOeK0K.js";import"./Label-9OMi940j.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

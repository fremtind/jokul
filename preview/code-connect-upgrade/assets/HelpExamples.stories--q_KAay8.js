import{j as r}from"./iframe-D-3r0_mJ.js";import{H as o}from"./Help-CuI4pKn2.js";import"./Help.stories-D1--Lhlc.js";import{A as c,m as d}from"./Autosuggest.stories-yMM7mlDr.js";import g,{ComboboxStory as x}from"./Combobox.stories-M8EY8ZZ5.js";import H from"./FieldGroup.stories-DOaFzQdC.js";import b from"./InputGroup.stories-CwoYGXEe.js";import S from"./select.stories-Dckb1Eh5.js";import j from"./TextArea.stories-Dq74cD-T.js";import{C as f}from"./Combobox-dJt8-DOH.js";import{D as I}from"./DateInput-CcLZTPxo.js";import{F as T}from"./FieldGroup-sE0uJqS5.js";import{I as G}from"./InputGroup-CPFJ-K2X.js";import{S as A}from"./Search-BaGM3zYu.js";import{S as h}from"./Select-4inSY6Qr.js";import{T as v}from"./TextArea-BlATHIso.js";import{T as C}from"./TextInput-BwY8NcJu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DYCRlo9j.js";import"./Button-CSYVyLYR.js";import"./usePreviousValue-DVQLo-ce.js";import"./Loader-Bzg8Pj0T.js";import"./useDelayedRender-O4YssX_-.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-y6HYKdwv.js";import"./IconButton-BDj1q3Of.js";import"./CloseIcon-BjUJGsi1.js";import"./SearchIcon-DDOOqpXb.js";import"./PopupTip-BfBe_jx9.js";import"./QuestionIcon-B8xBVWy-.js";import"./TooltipTrigger-T1xTDQFG.js";import"./floating-ui.react-qFBMx0st.js";import"./index-Tcsixi_z.js";import"./index-vOC1EiGX.js";import"./TooltipContent-BcTp2zVB.js";import"./useBrowserPreferences-C6TOovjQ.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-CvczEMvD.js";import"./Checkbox-B4djhkKI.js";import"./RadioButton.stories-SSqQVTKd.js";import"./RadioButton-CfqTj0CH.js";import"./SupportLabel-CtVtl_Bv.js";import"./SuccessIcon-H6a8Mnja.js";import"./WarningIcon-DmVzvLUt.js";import"./BaseRadioButton-zAxuXmf2.js";import"./BaseRadioButton.stories-BjTHJO9k.js";import"./CheckboxPanel.stories-C9Lug-XB.js";import"./InputPanel-D5OOOS1D.js";import"./Flex-C1WIuKvo.js";import"./SlotComponent-Da6XoFx6.js";import"./mergeRefs-C9d2QsrK.js";import"./RadioPanel.stories-B2I9SGvJ.js";import"./RadioPanel-D8_UaCFn.js";import"./Title-DubQzFfA.js";import"./Card-DwadqIXI.js";import"./Text-CJ-XTUqF.js";import"./Tag-DuBTl-dx.js";import"./ExpandablePanel-CoNVwCUW.js";import"./useAnimatedHeightBetween-BxR83i6Q.js";import"./tokens-CW-NfdIE.js";import"./Expander-BzbJ8Ec0.js";import"./ChevronUpIcon-Dd7-lrFG.js";import"./ListItem-BXObr-a6.js";import"./BaseTextInput-BHEcUjFF.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DRa7nHMn.js";import"./index.esm-CvYTXVgG.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-kdeMlTCZ.js";import"./useListNavigation-cu0nSwoq.js";import"./Chip-Br3Gd08A.js";import"./CheckIcon-BancqFl3.js";import"./ArrowVerticalAnimated-DxgcUdeq.js";import"./ArrowDownIcon-CvV6nAg5.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DYoMgwHa.js";import"./TableCaption-DHHoASNA.js";import"./tableContext-h-dq2q23.js";import"./CalendarIcon-C5d4CFyM.js";import"./Label-CkCcyU42.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

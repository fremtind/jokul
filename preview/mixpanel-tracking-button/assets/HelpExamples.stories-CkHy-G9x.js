import{j as r}from"./iframe-DeSfocgQ.js";import{H as o}from"./Help-vTsWTKxF.js";import"./Help.stories-D2KfQiH4.js";import{A as c,m as d}from"./Autosuggest.stories-Bd5ezLDq.js";import g,{ComboboxStory as x}from"./Combobox.stories-B6gmqHBx.js";import H from"./FieldGroup.stories-0XLr2-NH.js";import b from"./InputGroup.stories-CjZTdAcw.js";import S from"./select.stories-C46sQmfp.js";import j from"./TextArea.stories-C3UjjwFn.js";import{C as f}from"./Combobox-Txd91mi3.js";import{D as I}from"./DateInput-B6DOmZsx.js";import{F as T}from"./FieldGroup-Cs4yGJys.js";import{I as G}from"./InputGroup-BGBNXHdA.js";import{S as A}from"./Search-wuy-55zD.js";import{S as h}from"./Select-DXUeottF.js";import{T as v}from"./TextArea-B1jst0CC.js";import{T as C}from"./TextInput-BEmE7X28.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-J-LIvZH4.js";import"./Button-DmJ4Ui0p.js";import"./usePreviousValue-B_VZuqDu.js";import"./serializeTracking-CnAc4iKu.js";import"./Loader-ecfToCpj.js";import"./useDelayedRender-CkIj1wpW.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-HdsHRNi4.js";import"./IconButton-C9e21Oqn.js";import"./CloseIcon-TjKIZVw1.js";import"./SearchIcon-DoYhEmag.js";import"./PopupTip-BORCZNjG.js";import"./QuestionIcon-vEVfhyAN.js";import"./TooltipTrigger-C9ou32-9.js";import"./floating-ui.react-C9HzfWPA.js";import"./index-Byasuwej.js";import"./index-COdvyxu_.js";import"./TooltipContent-BAeKgCYz.js";import"./useBrowserPreferences-CU0Kb1Yv.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-Dd6raOXM.js";import"./InputPanel-DcJkUFZg.js";import"./Checkbox-U1pWaM1N.js";import"./RadioButton-gQT0e0By.js";import"./SupportLabel-Bsd_Jdi_.js";import"./SuccessIcon-NYoup3pz.js";import"./WarningIcon-DHLA2Hvc.js";import"./BaseRadioButton-BHIBT-OI.js";import"./Flex-BQVERUic.js";import"./SlotComponent-BJYZAE6C.js";import"./mergeRefs-NXIC-F_0.js";import"./Checkbox.stories-D3DYsKqo.js";import"./RadioButton.stories-D0NiEOwO.js";import"./BaseRadioButton.stories-D4YCHl0D.js";import"./RadioPanel.stories-CmeoIqUP.js";import"./RadioPanel-C6vLkmam.js";import"./Title-zvWqgJZ8.js";import"./Card-CoaTbRu5.js";import"./Text-DIRGvS4o.js";import"./Tag-uQmZimY-.js";import"./ExpandablePanel-WOKmcB0R.js";import"./useAnimatedHeightBetween-YErNtfyF.js";import"./tokens-HKQN8Vn-.js";import"./Expander-B1u2tnGB.js";import"./ChevronUpIcon-DkjP4U6i.js";import"./ListItem-DUyxxODI.js";import"./BaseTextInput-29bbjmq2.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D1sCkn9r.js";import"./index.esm-iJeuo1Kd.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-nhZf3gWN.js";import"./useListNavigation-C7oGNeg1.js";import"./Chip-Cf62du2C.js";import"./CheckIcon-B1IHjkzx.js";import"./ArrowVerticalAnimated-Cp6z0Cs_.js";import"./ArrowDownIcon-8QwCEcJH.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BfUpfUbw.js";import"./TableCaption-gRyN1cit.js";import"./tableContext-ZrwsxcNQ.js";import"./CalendarIcon-FuYSip3C.js";import"./Label-CNKHvCqb.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};

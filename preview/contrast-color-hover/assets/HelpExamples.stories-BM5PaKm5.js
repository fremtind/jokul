import{j as r}from"./iframe-DhpyhEJb.js";import{H as o}from"./Help-CpthvdVS.js";import"./Help.stories-B94oGHIZ.js";import{A as c,m as d}from"./Autosuggest.stories-BjDqpHhG.js";import g,{ComboboxStory as x}from"./Combobox.stories-BF2j-Rq-.js";import H from"./FieldGroup.stories--HUHfpmw.js";import b from"./InputGroup.stories-C2wE6WpO.js";import S from"./select.stories-Dv467Vx7.js";import j from"./TextArea.stories-CqAeMRhO.js";import{C as f}from"./Combobox-DnB3tfXD.js";import{D as I}from"./DateInput-CNgNdD9G.js";import{F as T}from"./FieldGroup-B_DhhR9c.js";import{I as G}from"./InputGroup-N2Uuk88x.js";import{S as A}from"./Search-D7kD8i4g.js";import{S as h}from"./Select-DLgUf8g2.js";import{T as v}from"./TextArea-Db6uOZgr.js";import{T as C}from"./TextInput-CjxJI1jO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DZcN2KYX.js";import"./Button-DoMQJUJ6.js";import"./usePreviousValue-jQQDxSDt.js";import"./Loader-DnxXKUMt.js";import"./useDelayedRender-V2jBqyY4.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DcW_Zgty.js";import"./IconButton-B43rorKa.js";import"./CloseIcon-8LeZZUbj.js";import"./SearchIcon-D0sjbdJj.js";import"./PopupTip-gk1bEvjQ.js";import"./QuestionIcon-CpEDRupa.js";import"./TooltipTrigger-qNmCqfRi.js";import"./floating-ui.react-yyUjXrY5.js";import"./index-jXSZPaHJ.js";import"./index-D7KApapN.js";import"./TooltipContent-BXDxZxNv.js";import"./useBrowserPreferences-BQeS_Huw.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DVsUMf0U.js";import"./InputPanel-CKAQDrKW.js";import"./Checkbox-CE_wI2N6.js";import"./RadioButton-rE7ZXUBf.js";import"./SupportLabel-AffsYaX_.js";import"./SuccessIcon-Dd7Fvii5.js";import"./WarningIcon-DG07b4Om.js";import"./BaseRadioButton-BAci7faq.js";import"./Flex-B4JtBhmy.js";import"./SlotComponent-CvrkS4dq.js";import"./mergeRefs-B4Ecp6pP.js";import"./Checkbox.stories-B2jKD1Fh.js";import"./RadioButton.stories-8kwCP4oc.js";import"./BaseRadioButton.stories-F-de8vdT.js";import"./RadioPanel.stories-DQJs0jmO.js";import"./RadioPanel-B4glR4wM.js";import"./Title-CAi0-6jN.js";import"./Card-bX0aEARA.js";import"./Text-BG9zXfSB.js";import"./Tag-NFy0wYaI.js";import"./ExpandablePanel-C83tJkBA.js";import"./useAnimatedHeightBetween-Cxh4_d88.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BIbZR2LH.js";import"./ChevronUpIcon-4TwB-KF9.js";import"./ListItem-DJg1BYjN.js";import"./BaseTextInput-CmlEfoPk.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D3fBKQYX.js";import"./index.esm-CQUKKhSN.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CgLlpJ0i.js";import"./useListNavigation-D0DInXJN.js";import"./Chip-I4s6wsRv.js";import"./CheckIcon-BAotLu5C.js";import"./ArrowVerticalAnimated-CHh9ii7F.js";import"./ArrowDownIcon-DP_pKXmE.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BH7DLkMQ.js";import"./TableCaption-BonLetIF.js";import"./tableContext-C3F3r-Dt.js";import"./CalendarIcon-DRPWVti5.js";import"./Label-B3waza7o.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

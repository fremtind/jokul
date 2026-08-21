import{j as r}from"./iframe-C1NfLrqi.js";import{H as o}from"./Help-LZHDVp6u.js";import"./Help.stories-B8JMZpJk.js";import{A as c,m as d}from"./Autosuggest.stories-Be04Rlho.js";import g,{ComboboxStory as x}from"./Combobox.stories-B86vFsYX.js";import H from"./FieldGroup.stories-CsDCbr4g.js";import b from"./InputGroup.stories-BaiupQ8N.js";import S from"./select.stories-BnS6tgbL.js";import j from"./TextArea.stories-BCu4ICr4.js";import{C as f}from"./Combobox-Cm-QQmuP.js";import{D as T}from"./DatePicker-BcpUFnrw.js";import{F as k}from"./FieldGroup-DeO9CW0d.js";import{I as G}from"./InputGroup-BNbjphcZ.js";import{S as I}from"./Search-C12VuiW-.js";import{S as A}from"./Select-7Q2WRPU7.js";import{T as h}from"./TextArea-C2oi9SPz.js";import{T as v}from"./TextInput-BMl31-sT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BJWhppgC.js";import"./Button-Z4aJAQ2-.js";import"./usePreviousValue-Crehl5o5.js";import"./Loader-C6_FEmQP.js";import"./useDelayedRender-CFbkWU4J.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Bjjp-Vx3.js";import"./IconButton-DBn4cmtu.js";import"./CloseIcon-5GyDP69M.js";import"./SearchIcon-CTn35m9w.js";import"./PopupTip-CJrH_f0Z.js";import"./QuestionIcon-D4YikS4y.js";import"./TooltipTrigger-Crww0O4B.js";import"./floating-ui.react-DKdAA4lK.js";import"./index-rlcgod5H.js";import"./index-Kl3MGslt.js";import"./TooltipContent-LNLizsCR.js";import"./useBrowserPreferences-Cc06j2Fw.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-BjdnRrbj.js";import"./Checkbox-6dJbHugU.js";import"./RadioButton.stories-C9mUGf1H.js";import"./RadioButton-RpJzYiUV.js";import"./SupportLabel-BjPvgZdU.js";import"./SuccessIcon-DFwI9HyF.js";import"./WarningIcon-BLjGpTsj.js";import"./BaseRadioButton-0sdLgboL.js";import"./BaseRadioButton.stories-CsMXfNMc.js";import"./CheckboxPanel.stories-DMwvmGiB.js";import"./InputPanel-DVvcboQ3.js";import"./Flex-EpAQnfDl.js";import"./SlotComponent-DXDipPW_.js";import"./mergeRefs-Cjjl-jWV.js";import"./RadioPanel.stories-BqwirpVz.js";import"./RadioPanel-CqXVWRl1.js";import"./Title-hGLXGcGP.js";import"./Card-Bc8kAxy-.js";import"./Text-DhihOi8g.js";import"./Tag-C6xEz1Bz.js";import"./ExpandablePanel-BEWGZl1g.js";import"./useAnimatedHeightBetween-B__geQx2.js";import"./tokens-CW-NfdIE.js";import"./Expander-CHozIfWw.js";import"./ChevronDownIcon-C1LEMHn3.js";import"./ChevronUpIcon-B4nHUTal.js";import"./ListItem-CI7BmFat.js";import"./BaseTextInput-DiTTMld7.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BJ1D52qH.js";import"./index.esm-8yf7utlX.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CtUOsgT_.js";import"./useListNavigation-DfNg37KR.js";import"./Chip-D3NzE9QQ.js";import"./CheckIcon-CVHmgW6S.js";import"./ArrowVerticalAnimated-DUw1IGT2.js";import"./ArrowDownIcon-Bl9M-9Hh.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-FMoLYuRG.js";import"./Popover-Dgwnp5yH.js";import"./ArrowRightIcon-BbMjxVly.js";import"./Label-CHYotkOa.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(h,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(I,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(A,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(k,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Date Picker",
  render: args => {
    return <DatePicker label={"Navn"} tooltip={<Help {...args} />} />;
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
}`,...u.parameters?.docs?.source}}};const ne=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDatePicker,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ne as __namedExportsOrder,me as default};

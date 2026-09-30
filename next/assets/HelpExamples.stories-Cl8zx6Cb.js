import{j as r}from"./iframe-DWxbWt70.js";import{H as o}from"./Help-DLVeo2rp.js";import"./Help.stories-CZqcSIcj.js";import{A as c,m as d}from"./Autosuggest.stories-B3hPxoaB.js";import g,{ComboboxStory as x}from"./Combobox.stories-Bxn1Iiae.js";import H from"./FieldGroup.stories-DCJJdaU5.js";import b from"./InputGroup.stories-CL_k77aO.js";import S from"./select.stories-BAP1Y76l.js";import j from"./TextArea.stories-7vbpTf3G.js";import{C as f}from"./Combobox-BISTJakS.js";import{D as I}from"./DateInput-D4pom4bK.js";import{F as T}from"./FieldGroup-C70dbKpW.js";import{I as G}from"./InputGroup-BfL8yc5j.js";import{S as A}from"./Search-B3G1uKdE.js";import{S as h}from"./Select-C3o9AxzE.js";import{T as v}from"./TextArea-BXhu8_v7.js";import{T as C}from"./TextInput-ByPTrP7b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C3RGkisD.js";import"./Button-IODZdWg7.js";import"./usePreviousValue-Bsg7GDXn.js";import"./Loader-Dg2UPqbd.js";import"./useDelayedRender-CNE74hWn.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-D1tX5FZM.js";import"./IconButton-boW-5BSa.js";import"./CloseIcon-D1PlL1_E.js";import"./SearchIcon-D0dwwDx7.js";import"./PopupTip-CxSH_d5J.js";import"./QuestionIcon-UXkzAfjM.js";import"./TooltipTrigger-CmLtoyED.js";import"./floating-ui.react-BigK0wxk.js";import"./index-DlZrAXtE.js";import"./index-B694yJor.js";import"./TooltipContent-P2AZVpF8.js";import"./useBrowserPreferences-DoSBXvpC.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-ZDkNC6_k.js";import"./InputPanel-E3QhR21k.js";import"./Checkbox-6zcJhJFc.js";import"./RadioButton-CR7uVQMv.js";import"./SupportLabel-DxJuaj79.js";import"./SuccessIcon-phR0SfCw.js";import"./WarningIcon-nGje9yUV.js";import"./BaseRadioButton-ql6ZTcQD.js";import"./Flex-lltE-HE9.js";import"./SlotComponent-DYM-dWvd.js";import"./mergeRefs-BkuqJ-BC.js";import"./Checkbox.stories-CBagvRR4.js";import"./RadioButton.stories-CnjGGYod.js";import"./BaseRadioButton.stories-B0k_tjrM.js";import"./RadioPanel.stories-CL_ei9eS.js";import"./RadioPanel-DApDo65Q.js";import"./Title-CmqaV9Bx.js";import"./Card-_Shfd4AP.js";import"./Text-rusiBt5_.js";import"./Tag-DtEuJ0fq.js";import"./ExpandablePanel-DKSOXxpn.js";import"./useAnimatedHeightBetween-CJKMwnv4.js";import"./tokens-HKQN8Vn-.js";import"./Expander-C68AqJog.js";import"./ChevronUpIcon-BbiOY0ub.js";import"./ListItem-DIwNYMON.js";import"./BaseTextInput-B5p13DE_.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CAn6q96z.js";import"./index.esm-D1PiIs8F.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DWm7hpEI.js";import"./useListNavigation-Ny6fTyUP.js";import"./Chip-j7_Bpi0d.js";import"./CheckIcon-CXHD7_Te.js";import"./ArrowVerticalAnimated-Lpgf1t9h.js";import"./ArrowDownIcon-BHRa-5mk.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-C0xHjxJI.js";import"./TableCaption-BX5d6Yyc.js";import"./tableContext-Cft-aX3f.js";import"./CalendarIcon-kJ1VBym1.js";import"./Label-BcupHvVW.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

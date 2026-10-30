import{j as r}from"./iframe-5Ej-9cBK.js";import{H as o}from"./Help-CiTrNeN3.js";import"./Help.stories-DHw_eIZ0.js";import{A as c,m as d}from"./Autosuggest.stories-BC4o5eGt.js";import g,{ComboboxStory as x}from"./Combobox.stories-Bnl9eImQ.js";import H from"./FieldGroup.stories-vJaS0bnA.js";import b from"./InputGroup.stories-uCvDSl74.js";import S from"./select.stories-BY2INp_3.js";import j from"./TextArea.stories-CTM2eniS.js";import{C as f}from"./Combobox-Clhn5Yp7.js";import{D as I}from"./DateInput-Cm-xDSGU.js";import{F as T}from"./FieldGroup-CxVCPM-G.js";import{I as G}from"./InputGroup-C-cn7LSE.js";import{S as A}from"./Search-_sNla4Es.js";import{S as h}from"./Select-D9xJ1sPa.js";import{T as v}from"./TextArea-Ils6uYep.js";import{T as C}from"./TextInput-B20Xwmyh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CwvX68sH.js";import"./Button-6zzjqvkW.js";import"./usePreviousValue-CEvzqZGo.js";import"./Loader-e0yN6epg.js";import"./useDelayedRender-Mb8QHgNB.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Tgr1C5Ky.js";import"./IconButton-DdbIIOHz.js";import"./CloseIcon-D6cUVwyD.js";import"./SearchIcon-3LMzv5CW.js";import"./PopupTip-EtpSgWmv.js";import"./QuestionIcon-BjfKA-bX.js";import"./TooltipTrigger-DR1rL773.js";import"./floating-ui.react-ikesUBlM.js";import"./index-CbRDcNg6.js";import"./index-CSNvjqyu.js";import"./TooltipContent-CRE6_l-K.js";import"./useBrowserPreferences-DkrRe13a.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-B4SGhdir.js";import"./InputPanel-DvdJBO8E.js";import"./Checkbox-CnUdci8a.js";import"./RadioButton-FvVirxey.js";import"./SupportLabel-DVL-dBwI.js";import"./SuccessIcon-DPG-2EwA.js";import"./WarningIcon-CWi4oa_N.js";import"./BaseRadioButton-BM-2-vyR.js";import"./Flex-jC5EYJxR.js";import"./SlotComponent-BxN4NUeE.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-MYqPKENW.js";import"./RadioButton.stories-BZsAGNTP.js";import"./BaseRadioButton.stories-jIAfUbZ1.js";import"./RadioPanel.stories-qjN-rSos.js";import"./RadioPanel-D944ShI0.js";import"./Title-CSnfLiI4.js";import"./Card-IBrjDN0D.js";import"./Text-7bHc8d5f.js";import"./Tag-CCdp_MG0.js";import"./ExpandablePanel-d9Kl3-ID.js";import"./useAnimatedHeightBetween-BC6hRy5P.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CXHmhpqy.js";import"./ChevronUpIcon-DVMTafx_.js";import"./ListItem-ejwqxxz2.js";import"./BaseTextInput-DnOz6kxX.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DqTlm5gy.js";import"./index.esm-D-UHXEP_.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BGJQpCMM.js";import"./useListNavigation-BXKJx_wU.js";import"./Chip-DuQpBqJa.js";import"./CheckIcon-CFWOf4Js.js";import"./ArrowVerticalAnimated-CIXNgzR2.js";import"./ArrowDownIcon-SZ9hXOh5.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-B2WBUfCu.js";import"./TableCaption-CRbF4XRY.js";import"./tableContext-05OinuGz.js";import"./CalendarIcon-CxX5G9fl.js";import"./Label-C0GuFZNe.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-Cs41b2lO.js";import{H as o}from"./Help-cne2d-OX.js";import"./Help.stories-DoB_gu7u.js";import{A as c,m as d}from"./Autosuggest.stories-LJLxapO_.js";import g,{ComboboxStory as x}from"./Combobox.stories-zMbrGUJc.js";import H from"./FieldGroup.stories-C1LJADNX.js";import b from"./InputGroup.stories-uGvYQdMx.js";import S from"./select.stories-G2XXOOrD.js";import j from"./TextArea.stories-D1lV2l92.js";import{C as f}from"./Combobox-D0uhTCmy.js";import{D as T}from"./DatePicker-DhEDMqkG.js";import{F as k}from"./FieldGroup-CV_qjl0j.js";import{I as G}from"./InputGroup-BYvTvjPK.js";import{S as I}from"./Search-CzJW-2iQ.js";import{S as A}from"./Select-04PM_m2A.js";import{T as h}from"./TextArea-IYdYUYIv.js";import{T as v}from"./TextInput-CHk6Wbw-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CV1z8UdD.js";import"./Button-Bmi6x2rL.js";import"./usePreviousValue-BnP7GvtB.js";import"./Loader-Dg42P0PU.js";import"./useDelayedRender-CCSKGh2x.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CwMe2RX3.js";import"./IconButton-izeG1caI.js";import"./CloseIcon-CHMX3qq8.js";import"./SearchIcon-CBIFkhzD.js";import"./PopupTip-DorWQK2g.js";import"./QuestionIcon-BjabvaEo.js";import"./TooltipTrigger-eeXyd7RJ.js";import"./floating-ui.react-BU05fZDG.js";import"./index-CBvCCdS5.js";import"./index-GJ5oiPb-.js";import"./TooltipContent-jfy9wWUW.js";import"./useBrowserPreferences-B3jgG_OQ.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-4jy62F3U.js";import"./Checkbox-Dk0Fa8XM.js";import"./RadioButton.stories-DagsSnYm.js";import"./RadioButton-j5vQ7_Lb.js";import"./SupportLabel-CFeu9Vf9.js";import"./SuccessIcon-t21eX0N1.js";import"./WarningIcon-BRCQnbHs.js";import"./BaseRadioButton-BkONvRRq.js";import"./BaseRadioButton.stories-CTqB6Sno.js";import"./CheckboxPanel.stories-B8lONZ2B.js";import"./InputPanel-BSbP46u9.js";import"./Flex-DS5aRoZh.js";import"./SlotComponent-BqNWYRto.js";import"./mergeRefs-BE6K8DmV.js";import"./RadioPanel.stories-Dw1P-kPI.js";import"./RadioPanel-CBYEwQ68.js";import"./Title-B_tL4EGL.js";import"./Card-CG_XQagd.js";import"./Text-DME4t00G.js";import"./Tag-aE_M2mfd.js";import"./ExpandablePanel-Cx2tm6C5.js";import"./useAnimatedHeightBetween-_5A5rban.js";import"./tokens-CW-NfdIE.js";import"./Expander-CNxrZ6NP.js";import"./ChevronDownIcon-DcCHQdh2.js";import"./ChevronUpIcon-CY_0bzcC.js";import"./ListItem-CbYnXOxr.js";import"./BaseTextInput-CcAbAInz.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D-3tNncb.js";import"./index.esm-33VtICUv.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DHdCT2HB.js";import"./useListNavigation-CNGSuqpH.js";import"./Chip-SoQixbIe.js";import"./CheckIcon-C36M3zZH.js";import"./ArrowVerticalAnimated-DOmqzA2v.js";import"./ArrowDownIcon-DUdWbxPf.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-BMEC0Hwv.js";import"./Popover-CNsSHQ2J.js";import"./ArrowRightIcon-DfejA5jJ.js";import"./Label-CVOYesUO.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(h,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(I,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(A,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(k,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-7_fnrMRC.js";import{H as o}from"./Help-SP0uG90B.js";import"./Help.stories-DyhBQgek.js";import{A as c,m as d}from"./Autosuggest.stories-Cr4UsRyj.js";import g,{ComboboxStory as x}from"./Combobox.stories-GPxyi2f-.js";import S from"./FieldGroup.stories-D_ZjUxLZ.js";import H from"./InputGroup.stories-DFq8N7AE.js";import b,{SelectStory as j}from"./select.stories-Da9wHFJR.js";import f from"./TextArea.stories-Bv6Ohpeo.js";import{C as T}from"./Combobox-9ecjxFQh.js";import{D as k}from"./DatePicker-DhEg-iP6.js";import{F as G}from"./FieldGroup-BJDzxhT7.js";import{I}from"./InputGroup-BCW5sF57.js";import{S as A}from"./Search-DHOnklhy.js";import{S as h}from"./Select-CiFOb5sN.js";import{T as F}from"./TextArea-CAjAWqfi.js";import{T as v}from"./TextInput-DPdMgROQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DBMsta37.js";import"./Button-CD7O9FX2.js";import"./usePreviousValue-DsrO3xOD.js";import"./Loader-Dkk1GOGK.js";import"./useDelayedRender-k6D9c494.js";import"./index-Chjiymov.js";import"./useId-BbNq_aaf.js";import"./IconButton-C6jozOVS.js";import"./CloseIcon-Dekm-5UO.js";import"./SearchIcon-B9Yc99jj.js";import"./PopupTip-B5Pho8SM.js";import"./QuestionIcon-Dc367H0B.js";import"./TooltipTrigger-BQLjf4r_.js";import"./floating-ui.react-OFhTUz5b.js";import"./index-DItivFwC.js";import"./index-B0Q7b3av.js";import"./TooltipContent-jmAOgVnf.js";import"./useBrowserPreferences-DxsIvvzJ.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CHydKXdV.js";import"./InputPanel-CYnut9hk.js";import"./Checkbox-DcGtMnBz.js";import"./RadioButton-c7k4SAzx.js";import"./SupportLabel-DXsK5t_a.js";import"./SuccessIcon-UqAo9RGp.js";import"./WarningIcon-DvL1FK2z.js";import"./BaseRadioButton-wBp3JGxQ.js";import"./Flex-BA23hn0z.js";import"./SlotComponent-BiLao9zq.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-BnDGh4O2.js";import"./RadioButton.stories-BgfW4Ox1.js";import"./BaseRadioButton.stories-DwGMHHUi.js";import"./RadioPanel.stories-b5iHMSkP.js";import"./RadioPanel-Dj7rS9Yg.js";import"./Title-DuqXn-C1.js";import"./Card-DJnKIvSk.js";import"./Text-DAjAYENW.js";import"./Tag-CnNRGd88.js";import"./ExpandablePanel-CvPstB94.js";import"./useAnimatedHeightBetween-BvdrYWBM.js";import"./tokens-CW-NfdIE.js";import"./Expander-BRvqQ3R5.js";import"./ChevronDownIcon-BOLpaw85.js";import"./ChevronUpIcon-BJO0EOIg.js";import"./ListItem-BiStoqAE.js";import"./BaseTextInput-Buo6EoTd.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Uvaq0_zr.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-BcOBCWGG.js";import"./useListNavigation-BazMge51.js";import"./Chip-7KPOnVvS.js";import"./CheckIcon-CZiGsOGT.js";import"./ArrowVerticalAnimated-U7fTdUf7.js";import"./ArrowDownIcon-BeLkB80U.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-CKVHavgB.js";import"./Popover-BYOGmBQY.js";import"./ArrowRightIcon-Ce95-BBN.js";import"./Label-DXV2eElB.js";import"./valuePair-Bn6SadUn.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(k,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(T,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(F,{...f.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(I,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})},ie=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    return <Select {...SelectStories.args} {...SelectStory.args} name="select" label="Hva jobber du som?" items={[]} tooltip={<Help {...args} />} />;
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
}`,...u.parameters?.docs?.source}}};export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDatePicker,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};

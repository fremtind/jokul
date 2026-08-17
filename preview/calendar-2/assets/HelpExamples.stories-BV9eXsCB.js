import{j as r}from"./iframe-C35WIanq.js";import{H as t}from"./Help-hU2EY3qU.js";import"./Help.stories-BC2yQjmi.js";import{A as c,m as d}from"./Autosuggest.stories-BfWfkSYW.js";import g,{ComboboxStory as x}from"./Combobox.stories-Dr64nCN_.js";import S from"./FieldGroup.stories-DLMBZPvp.js";import H from"./InputGroup.stories-AOsGeNxw.js";import b,{SelectStory as j}from"./select.stories-B-74Er9x.js";import f from"./TextArea.stories-Dt-PtOHs.js";import{C as I}from"./Combobox-BxzcZhl_.js";import{D as T}from"./DateInput-fo2gIa01.js";import{F as G}from"./FieldGroup-DiRC3adN.js";import{I as A}from"./InputGroup-ChTzvz9L.js";import{S as h}from"./Search-DlFkcgtb.js";import{S as v}from"./Select-BLL3_v0f.js";import{T as C}from"./TextArea-DighPQdS.js";import{T as F}from"./TextInput-BZ_HzBG1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DN0HpI1L.js";import"./Button-DqDrnJmN.js";import"./usePreviousValue-B80q3YLM.js";import"./Loader-BXVF7U8V.js";import"./useDelayedRender-CPZV_9iF.js";import"./index-Chjiymov.js";import"./useId-BPu9jLLw.js";import"./IconButton-BIwOI8CJ.js";import"./CloseIcon-Cr813Yw1.js";import"./SearchIcon-CYGMhSUb.js";import"./PopupTip-RDfRWZwy.js";import"./QuestionIcon-CqrKkj6Q.js";import"./TooltipTrigger-JEEvsPfo.js";import"./floating-ui.react-DJ0hrm_0.js";import"./index-BkGb_vtL.js";import"./index-DUi_lZI7.js";import"./TooltipContent-CC_WdGat.js";import"./useBrowserPreferences-CUZBswZJ.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-D43zg3qi.js";import"./Checkbox-C8DjLrvt.js";import"./RadioButton.stories-B3DFPTRY.js";import"./RadioButton-B2RCnYRh.js";import"./SupportLabel-rkmmzDmm.js";import"./SuccessIcon-BwGv8Xpt.js";import"./WarningIcon-DJNnNv07.js";import"./BaseRadioButton-CthGHr1r.js";import"./BaseRadioButton.stories-yKyt3ck3.js";import"./CheckboxPanel.stories-DM6Fh19S.js";import"./InputPanel-CmE3tS01.js";import"./Flex-C6NwKZdy.js";import"./SlotComponent-AUfxcm6X.js";import"./mergeRefs-BJe3BZ2X.js";import"./RadioPanel.stories-DozSCGqi.js";import"./RadioPanel-j5juaXSI.js";import"./Title-BzvPE4Tv.js";import"./Card-CnUHzVJv.js";import"./Text-VE30LP8r.js";import"./Tag-IrBcSOn7.js";import"./ExpandablePanel-17xNrij1.js";import"./useAnimatedHeightBetween-D7EbNZZV.js";import"./tokens-CW-NfdIE.js";import"./Expander-CMJBeNM0.js";import"./ChevronUpIcon-DdxMf4MC.js";import"./ListItem-B0OB1mSb.js";import"./BaseTextInput-rQDUMEDc.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-EFbGiIO5.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-BX5vu0WK.js";import"./useListNavigation-okFGrxDM.js";import"./Chip-CHjfYO-x.js";import"./CheckIcon-C-JHEatL.js";import"./ArrowVerticalAnimated-BtMYSozu.js";import"./ArrowDownIcon-WzyELmJc.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-C1w8c7eV.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-r5Sy6vOH.js";import"./TableCaption-C3X1kzC0.js";import"./tableContext-D1jlxC80.js";import"./CalendarIcon-BEji0yMk.js";import"./Label-B5Rs1WcA.js";import"./Popover-BNjjRAxr.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ue=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,o as HelpTextInput,ue as __namedExportsOrder,le as default};

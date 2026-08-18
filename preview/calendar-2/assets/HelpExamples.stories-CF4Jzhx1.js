import{j as r}from"./iframe-B_ZprsNo.js";import{H as t}from"./Help-6NWQrEWa.js";import"./Help.stories-DHeUqjtt.js";import{A as c,m as d}from"./Autosuggest.stories-BKgqZpLa.js";import g,{ComboboxStory as x}from"./Combobox.stories-CaJHTYzW.js";import S from"./FieldGroup.stories-Bj6M_Gnb.js";import H from"./InputGroup.stories-19pKlkBc.js";import b,{SelectStory as j}from"./select.stories-nJKmXhLF.js";import f from"./TextArea.stories-CrYk-R4p.js";import{C as I}from"./Combobox-B-lFA-rA.js";import{D as T}from"./DateInput-gi6JUkFf.js";import{F as G}from"./FieldGroup-Djb4BGsW.js";import{I as A}from"./InputGroup-k1Sfya55.js";import{S as h}from"./Search-BzUs7iBH.js";import{S as v}from"./Select-Bd56Zewv.js";import{T as C}from"./TextArea-CVITTqvk.js";import{T as F}from"./TextInput-BLYTh65a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BrhMsI5_.js";import"./Button-C_ASjeuZ.js";import"./usePreviousValue-m0AryCQV.js";import"./Loader-dm-O8i45.js";import"./useDelayedRender-B8hchlrX.js";import"./index-Chjiymov.js";import"./useId-VjQkGL6A.js";import"./IconButton-C4wBHSm4.js";import"./CloseIcon-VlaKHGZm.js";import"./SearchIcon-DBu0Gvco.js";import"./PopupTip-hNx3syAi.js";import"./QuestionIcon-B05lHuNm.js";import"./TooltipTrigger-CJqvcqyM.js";import"./floating-ui.react-CF4t6Uld.js";import"./index-DuVoPpBU.js";import"./index-mibaTczN.js";import"./TooltipContent-LC6iml8O.js";import"./useBrowserPreferences-DevU_O6D.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-867xvYwn.js";import"./Checkbox-Bm8fS72J.js";import"./RadioButton.stories-CIHfoGQx.js";import"./RadioButton-BUhy9ZpT.js";import"./SupportLabel-C-EZjCMJ.js";import"./SuccessIcon-TRT5yn3z.js";import"./WarningIcon-DpGWfTt7.js";import"./BaseRadioButton-B0Yq9Exm.js";import"./BaseRadioButton.stories-V53aBKMP.js";import"./CheckboxPanel.stories-CsDVriAh.js";import"./InputPanel-CXj7lfIL.js";import"./Flex-CpPVTCYh.js";import"./SlotComponent-xnEExfWS.js";import"./mergeRefs-DBNpWw3s.js";import"./RadioPanel.stories-gG9HTPLY.js";import"./RadioPanel-BKm1ABmT.js";import"./Title-D_X-k5gp.js";import"./Card-BGipi-fU.js";import"./Text-RkN_T9jZ.js";import"./Tag-29cYrhct.js";import"./ExpandablePanel-DbP-UAWf.js";import"./useAnimatedHeightBetween-DPwdEa-m.js";import"./tokens-CW-NfdIE.js";import"./Expander-D_qw5RkA.js";import"./ChevronUpIcon-UeXqFVVQ.js";import"./ListItem-DyWU9ynY.js";import"./BaseTextInput-BCDA9bOI.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BuiuokVW.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-Dj_yEPjk.js";import"./useListNavigation-qDWQ8NrS.js";import"./Chip-D5nJ3UxX.js";import"./CheckIcon-B2U4Bcil.js";import"./ArrowVerticalAnimated-Cy7ykE4B.js";import"./ArrowDownIcon-BwBOcnmF.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-lUuUjCjn.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-CQ4oPNPr.js";import"./TableCaption-B06mJ1bw.js";import"./tableContext-CwkIpvfV.js";import"./CalendarIcon-Bq6-xDej.js";import"./Label-BUzYHGSH.js";import"./Popover-BdNZymFh.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

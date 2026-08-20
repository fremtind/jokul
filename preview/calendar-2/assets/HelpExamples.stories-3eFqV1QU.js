import{j as r}from"./iframe-C8azJzef.js";import{H as t}from"./Help-Cuf18UuX.js";import"./Help.stories-DQbe57-S.js";import{A as c,m as d}from"./Autosuggest.stories-DH8gC_1v.js";import g,{ComboboxStory as x}from"./Combobox.stories-Ct4pUdtu.js";import S from"./FieldGroup.stories-x_puNjO0.js";import H from"./InputGroup.stories-Xv1CJfqG.js";import b,{SelectStory as j}from"./select.stories-DK3Vew9J.js";import f from"./TextArea.stories-NzVXbdgK.js";import{C as I}from"./Combobox-OvsXkgBq.js";import{D as T}from"./DateInput-fBkidMMI.js";import{F as G}from"./FieldGroup-lLNaLqkX.js";import{I as A}from"./InputGroup-1hPQWLV9.js";import{S as h}from"./Search-MVvhCvnC.js";import{S as v}from"./Select-B1srxLT3.js";import{T as C}from"./TextArea-BTGvHJJe.js";import{T as F}from"./TextInput-pZCBWy3o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C1yPPOGm.js";import"./Button-CheAShL5.js";import"./usePreviousValue-Ce7vG723.js";import"./Loader-nES5Dz8n.js";import"./useDelayedRender-BS0paSgE.js";import"./index-Chjiymov.js";import"./useId-C8JbjB_y.js";import"./IconButton-DchFGoMQ.js";import"./CloseIcon-CQylFq_Z.js";import"./SearchIcon-Cyc6zpjg.js";import"./PopupTip-CRSc-SYU.js";import"./QuestionIcon-BtrF0Wlp.js";import"./TooltipTrigger-DNsPk_xu.js";import"./floating-ui.react-y6q3r5EL.js";import"./index-DDCWGjuX.js";import"./index-Bc9JcJDo.js";import"./TooltipContent-_KAb19jH.js";import"./useBrowserPreferences-d4KyiB7H.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-B_KDmMLI.js";import"./Checkbox-CqIm4ZFn.js";import"./RadioButton.stories-BHGlndIK.js";import"./RadioButton-DeJTyjpj.js";import"./SupportLabel-BjI92Bc0.js";import"./SuccessIcon-nC7mNPf6.js";import"./WarningIcon-CLL-pgFO.js";import"./BaseRadioButton-VT-ZcD6A.js";import"./BaseRadioButton.stories-Ba5Mqee2.js";import"./CheckboxPanel.stories-QwnMoGy3.js";import"./InputPanel-B2ChE5Iz.js";import"./Flex-DevwC1Kj.js";import"./SlotComponent-DU78u4S8.js";import"./mergeRefs-C7-tQjus.js";import"./RadioPanel.stories-D5MFU_yr.js";import"./RadioPanel-D7zzh1S-.js";import"./Title-CW_-btlz.js";import"./Card-DMHLLFMN.js";import"./Text-YMrRUWOE.js";import"./Tag-jqbmItj2.js";import"./ExpandablePanel--D1ORVNU.js";import"./useAnimatedHeightBetween-BpHi9B7e.js";import"./tokens-CW-NfdIE.js";import"./Expander-DpMnRGDT.js";import"./ChevronUpIcon-tABnxBs3.js";import"./ListItem-D5mCsP4p.js";import"./BaseTextInput-CJMQ7tfz.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DuzqCVGx.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-D7lQLt1I.js";import"./useListNavigation-Ci9PtwF6.js";import"./Chip-eX-Jy_HG.js";import"./CheckIcon-50wqP2yg.js";import"./ArrowVerticalAnimated-CpA41xVM.js";import"./ArrowDownIcon-Y7rk2ZyI.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-CQ-uC0y5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-DNHAQozy.js";import"./TableCaption-DdsQXTju.js";import"./tableContext-BzEiqU_v.js";import"./CalendarIcon-DycnUq48.js";import"./Label-DjqwG3xy.js";import"./Popover-C2KTYDHQ.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

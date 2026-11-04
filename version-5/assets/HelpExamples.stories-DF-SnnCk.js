import{j as r}from"./iframe-Db6p-EB6.js";import{H as o}from"./Help-CUbE8qU1.js";import"./Help.stories-C0jy5Ek1.js";import{A as c,m as d}from"./Autosuggest.stories-gwpj8caa.js";import g,{ComboboxStory as x}from"./Combobox.stories-BdjZL8zi.js";import S from"./FieldGroup.stories-2WlIvo7S.js";import H from"./InputGroup.stories-t27DiUjr.js";import b,{SelectStory as j}from"./select.stories-BamDFbJU.js";import f from"./TextArea.stories-C5rV3Kqo.js";import{C as T}from"./Combobox-CrbSdP6d.js";import{D as k}from"./DatePicker-BYLjth6A.js";import{F as G}from"./FieldGroup-WvUHMPBA.js";import{I}from"./InputGroup-D7e6J5Lr.js";import{S as A}from"./Search-ZZQxKrhK.js";import{S as h}from"./Select-BxJCLhmT.js";import{T as F}from"./TextArea-SKWg6ycI.js";import{T as v}from"./TextInput-B93AmL24.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B_tgYcrx.js";import"./Button-C1mgjSZK.js";import"./usePreviousValue-BE25Ro9u.js";import"./Loader-DL9pcl2S.js";import"./useDelayedRender-CfmMsd-C.js";import"./index-Chjiymov.js";import"./useId-Dzo3HCRi.js";import"./IconButton-Mctt0PAZ.js";import"./CloseIcon-DMz2vxFc.js";import"./SearchIcon-DBH6Qm__.js";import"./PopupTip-Ba0oajPr.js";import"./QuestionIcon-udbEg-vQ.js";import"./TooltipTrigger-C85GVCyd.js";import"./floating-ui.react-D8-P0qQ-.js";import"./index-Sz88D8Wb.js";import"./index-DG-pA0Bv.js";import"./TooltipContent-DnWYiEHU.js";import"./useBrowserPreferences-DT9tYz8d.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-Bpcz_JO_.js";import"./InputPanel-Aghm0noC.js";import"./Checkbox-937-bqrv.js";import"./RadioButton-FabxIPas.js";import"./SupportLabel-B41NiXmE.js";import"./SuccessIcon-JgyuvB34.js";import"./WarningIcon-vEuKJbtC.js";import"./BaseRadioButton-CIKwRT0W.js";import"./Flex-FRxJTQhA.js";import"./SlotComponent-NxtID-Hd.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-C9f99Q-J.js";import"./RadioButton.stories-CwGgDaK2.js";import"./BaseRadioButton.stories-bcc_CGci.js";import"./RadioPanel.stories-Do_Skj8G.js";import"./RadioPanel-D38Vwihg.js";import"./Title-C1zgZBMJ.js";import"./Card-CBzFE0_c.js";import"./Text-BZX6_IrQ.js";import"./Tag-CEks-L2x.js";import"./ExpandablePanel-C9Dj2pdz.js";import"./useAnimatedHeightBetween--H7QkKE9.js";import"./tokens-CW-NfdIE.js";import"./Expander-zo_SVaPk.js";import"./ChevronDownIcon-Bz5xaL0Y.js";import"./ChevronUpIcon-BvGeZsOz.js";import"./ListItem-B1B4Tlt2.js";import"./BaseTextInput-BEovucEp.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CGE53wCl.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-L5dzJChm.js";import"./useListNavigation-DE4UBQU9.js";import"./Chip-BqQk2BEv.js";import"./CheckIcon-CN5kweh6.js";import"./ArrowVerticalAnimated-CNWKoFDd.js";import"./ArrowDownIcon-DRlhw2GU.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-BRmxHZn_.js";import"./Popover-BqyB3AuQ.js";import"./ArrowRightIcon-vLNqruEj.js";import"./Label-C8h5HMqb.js";import"./valuePair-Bn6SadUn.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(k,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(T,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(F,{...f.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(I,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})},ie=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

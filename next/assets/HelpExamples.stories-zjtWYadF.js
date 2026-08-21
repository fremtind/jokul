import{j as r}from"./iframe-DFYilmda.js";import{H as t}from"./Help-H-7C1hKn.js";import"./Help.stories-DInboNM9.js";import{A as c,m as d}from"./Autosuggest.stories-4mxD25v-.js";import g,{ComboboxStory as x}from"./Combobox.stories-W_3uOt4w.js";import S from"./FieldGroup.stories-A39twUom.js";import H from"./InputGroup.stories-CbaWUcOI.js";import b,{SelectStory as j}from"./select.stories-DIgBFdgs.js";import f from"./TextArea.stories-D9q7Ub8e.js";import{C as I}from"./Combobox-Bt01GiFm.js";import{D as T}from"./DateInput-DNoboDWk.js";import{F as G}from"./FieldGroup-BLYQxaH9.js";import{I as A}from"./InputGroup-PRsYvTMk.js";import{S as h}from"./Search-Ba2I148A.js";import{S as v}from"./Select-DxtS6t5a.js";import{T as C}from"./TextArea-CcU8KIal.js";import{T as F}from"./TextInput-DiW6q4AN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DdZwclia.js";import"./Button-BkFErIc7.js";import"./usePreviousValue-DzyWNXCt.js";import"./Loader-y6NOItUt.js";import"./useDelayedRender-g4dPVVPK.js";import"./index-Chjiymov.js";import"./useId-BZ0LmZpC.js";import"./IconButton-YBnK6_uk.js";import"./CloseIcon-C9NJQaum.js";import"./SearchIcon-d9qz7fOq.js";import"./PopupTip-CEcPdCZ6.js";import"./QuestionIcon-C2lP9J_J.js";import"./TooltipTrigger-CI2_SrlN.js";import"./floating-ui.react-C9lDlwUP.js";import"./index-CDniYdRj.js";import"./index-BUc6NAoG.js";import"./TooltipContent-Bf3RXnS2.js";import"./useBrowserPreferences-3V3llEci.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-rDEA5OK-.js";import"./Checkbox-B7wIbM4K.js";import"./RadioButton.stories-CmOYNRBX.js";import"./RadioButton-DvcT3x0L.js";import"./SupportLabel-DsEmiH1H.js";import"./SuccessIcon-ALBUGROa.js";import"./WarningIcon-WvDENPwA.js";import"./BaseRadioButton-D7Pk-6d6.js";import"./BaseRadioButton.stories-DGxOqxEh.js";import"./CheckboxPanel.stories-DBttpHlp.js";import"./InputPanel-fUq3YYOp.js";import"./Flex-Djs8qx7r.js";import"./SlotComponent-7UfZ29eB.js";import"./mergeRefs-anKcfEnU.js";import"./RadioPanel.stories-BaB3SXBs.js";import"./RadioPanel-CVBdtr3Z.js";import"./Title-DZui1aGl.js";import"./Card-COmLahAx.js";import"./Text-vuppwMIO.js";import"./Tag-Nc8SA-BX.js";import"./ExpandablePanel-BAiNRfTN.js";import"./useAnimatedHeightBetween-CViBHZm3.js";import"./tokens-CW-NfdIE.js";import"./Expander-DAunXCxN.js";import"./ChevronUpIcon-CUdvxQcO.js";import"./ListItem-DP-tmBMC.js";import"./BaseTextInput-CxxVzBoZ.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-VBVRTTlp.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-Cuokp3qe.js";import"./useListNavigation-CokJI_J8.js";import"./Chip-Rs8TlPCy.js";import"./CheckIcon-CBxgivCj.js";import"./ArrowVerticalAnimated-DSR_sGLb.js";import"./ArrowDownIcon-Do7r-5H_.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-dKDTu117.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-CSNlqv_h.js";import"./TableCaption-nC2NRKgD.js";import"./tableContext-Bt97G9AJ.js";import"./CalendarIcon-CizrM94l.js";import"./Label-0KA88Hi4.js";import"./Popover-Cj5ZaSXk.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

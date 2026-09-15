import{j as r}from"./iframe-jg5XoKNS.js";import{H as o}from"./Help-TILt6i9a.js";import"./Help.stories-jzQ8vquE.js";import{A as c,m as d}from"./Autosuggest.stories-CnD6ROv9.js";import g,{ComboboxStory as x}from"./Combobox.stories-zQBNnBLD.js";import H from"./FieldGroup.stories-R_CyuJMj.js";import b from"./InputGroup.stories-BdKzHkLe.js";import S from"./select.stories-C9XSbY9H.js";import j from"./TextArea.stories-BGj2SsiY.js";import{C as f}from"./Combobox-CL2hdfyA.js";import{D as I}from"./DateInput-BSyX9fz5.js";import{F as T}from"./FieldGroup-DQUVkGWM.js";import{I as G}from"./InputGroup-BESdhA9N.js";import{S as A}from"./Search-D9t4E28B.js";import{S as h}from"./Select-B_U88V4w.js";import{T as v}from"./TextArea-gR6rMbyY.js";import{T as C}from"./TextInput-H4mvRBSb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DVRJrGcN.js";import"./Button-C1oZxTwC.js";import"./usePreviousValue-Cn1gxV2N.js";import"./Loader-BstDeGrF.js";import"./useDelayedRender-BnjWFvYK.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CymTfCCJ.js";import"./IconButton-D5vhBqjH.js";import"./CloseIcon-CtfLTHoj.js";import"./SearchIcon-BKZsOJ_q.js";import"./PopupTip-Yew58XBX.js";import"./QuestionIcon-DvhV5oiw.js";import"./TooltipTrigger-FUUjoRuw.js";import"./floating-ui.react-BXxhDlH2.js";import"./index-DUKdj8sr.js";import"./index-FfsJh0Z1.js";import"./TooltipContent-WcAL8uD6.js";import"./useBrowserPreferences-BZI5Jp03.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DXyzEJRJ.js";import"./InputPanel-CDmjnNwx.js";import"./Checkbox-BH76IrXW.js";import"./RadioButton-pZxSqLTD.js";import"./SupportLabel-Bzbqm0ht.js";import"./SuccessIcon-Bqpo6_9K.js";import"./WarningIcon-Cnbdl-7K.js";import"./BaseRadioButton-BXv_Y3NO.js";import"./Flex-BRNkguz8.js";import"./SlotComponent-BkOnCVAs.js";import"./mergeRefs-DJfMmZkb.js";import"./Checkbox.stories-9nIFli6c.js";import"./RadioButton.stories-BY04lvIa.js";import"./BaseRadioButton.stories-CdxDirRp.js";import"./RadioPanel.stories-DyEhIdum.js";import"./RadioPanel-D9ZnKFA5.js";import"./Title-d2rU5CRE.js";import"./Card-Ca7jniVx.js";import"./Text-C41zS4Am.js";import"./Tag-CuQXz6hC.js";import"./ExpandablePanel-DHvi2LP8.js";import"./useAnimatedHeightBetween-BY0h7fMv.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DolhiPOg.js";import"./ChevronUpIcon-2moPOMF0.js";import"./ListItem-DgxzvbfB.js";import"./BaseTextInput-BQWlw3wo.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D-jQ0DMy.js";import"./index.esm-BLYt4NZL.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DM9SR3jy.js";import"./useListNavigation-B4DKwopz.js";import"./Chip-D7AkAXys.js";import"./CheckIcon-C8t00DVd.js";import"./ArrowVerticalAnimated-CsGFZoFN.js";import"./ArrowDownIcon-DUDx-twm.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-Ctdd0tBL.js";import"./TableCaption-Dcrp_7Lm.js";import"./tableContext-CTHi2DgD.js";import"./CalendarIcon-BLb-ijRv.js";import"./Label-8Tm30--N.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

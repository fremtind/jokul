import{j as r}from"./iframe--IbQLLfs.js";import{H as o}from"./Help-DyMcy-dA.js";import"./Help.stories--vk9enbI.js";import{A as c,m as d}from"./Autosuggest.stories-C1S3H35M.js";import g,{ComboboxStory as x}from"./Combobox.stories-Djs3oMBM.js";import H from"./FieldGroup.stories-6pTP6P5v.js";import b from"./InputGroup.stories-BkP0I_1A.js";import S from"./select.stories-bZdIyyZS.js";import j from"./TextArea.stories-Cw4DHGRW.js";import{C as f}from"./Combobox-CsDV7LUH.js";import{D as I}from"./DateInput-CiT5XQd4.js";import{F as T}from"./FieldGroup-BSwBDdYe.js";import{I as G}from"./InputGroup-D0RuYz_B.js";import{S as A}from"./Search-H0bShpTJ.js";import{S as h}from"./Select-Kqv0e_Wm.js";import{T as v}from"./TextArea-BzLXIyPd.js";import{T as C}from"./TextInput-pjsOFqsx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D0ZC9qNb.js";import"./Button-B2ASzhZ8.js";import"./usePreviousValue-KJQ9NLy9.js";import"./Loader-CJofSoJm.js";import"./useDelayedRender-GzQNoP0C.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DNQbD1bB.js";import"./IconButton-DgVSKnAb.js";import"./CloseIcon-BLX8QOHl.js";import"./SearchIcon-Bqaq5uhe.js";import"./PopupTip-BrrsnUi9.js";import"./QuestionIcon-BUiFjIR9.js";import"./TooltipTrigger-BY2P_9ED.js";import"./floating-ui.react-B51OMiOE.js";import"./index-Dank7pEV.js";import"./index--h9eRXtL.js";import"./TooltipContent-DCYNLtKY.js";import"./useBrowserPreferences-Dz1Jb42v.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-su8MDseh.js";import"./InputPanel-Vn6_sc5h.js";import"./Checkbox-CcmssxBG.js";import"./RadioButton-CW6ybf68.js";import"./SupportLabel-qNOnqW6o.js";import"./SuccessIcon-C5g-_u-P.js";import"./WarningIcon-B-lIFyxC.js";import"./BaseRadioButton-Bp6VCFR1.js";import"./Flex-B0mBHPL9.js";import"./SlotComponent-B2EKPTvB.js";import"./mergeRefs-C5kqJ57D.js";import"./Checkbox.stories-D1udEQ8Y.js";import"./RadioButton.stories-DlmyM6kv.js";import"./BaseRadioButton.stories-cd7KtMLH.js";import"./RadioPanel.stories-35OfHz3s.js";import"./RadioPanel-BI28IK6j.js";import"./Title-C-ojDDHy.js";import"./Card-DbhyRH3p.js";import"./Text-HXtzl4eJ.js";import"./Tag-CTzWudbN.js";import"./ExpandablePanel-hyfHxfxA.js";import"./useAnimatedHeightBetween-CPI7nzaP.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DQ80mIr1.js";import"./ChevronUpIcon-CnE-_LJO.js";import"./ListItem-9m-06c4X.js";import"./BaseTextInput-teJ-D1gc.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-B-mxU-mO.js";import"./index.esm-DJQJvyPA.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-D8HsDb6n.js";import"./useListNavigation-B4j5YMbX.js";import"./Chip-D3-2g6ga.js";import"./CheckIcon-BgKj_A8w.js";import"./ArrowVerticalAnimated-CKwfgeEq.js";import"./ArrowDownIcon-C-MGfpwZ.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CKAOmqme.js";import"./TableCaption-Blq383j5.js";import"./tableContext-CHdu3-7a.js";import"./CalendarIcon-DY1vIMVP.js";import"./Label-BB_Vk8H1.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

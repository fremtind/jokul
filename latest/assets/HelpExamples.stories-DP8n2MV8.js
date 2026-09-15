import{j as r}from"./iframe-CSziHxis.js";import{H as o}from"./Help-BHRkMqK3.js";import"./Help.stories-imH-d0Bg.js";import{A as c,m as d}from"./Autosuggest.stories-DHunV3_o.js";import g,{ComboboxStory as x}from"./Combobox.stories-DSo-vvWD.js";import H from"./FieldGroup.stories-Bu_Nlziy.js";import b from"./InputGroup.stories-xCPgJqWJ.js";import S from"./select.stories-C6NFaB-Q.js";import j from"./TextArea.stories-d9nl0FKA.js";import{C as f}from"./Combobox-1CyJiKVn.js";import{D as I}from"./DateInput-COjeZUev.js";import{F as T}from"./FieldGroup-CI-WIWMW.js";import{I as G}from"./InputGroup-BOu96Fx_.js";import{S as A}from"./Search-CDR9McRL.js";import{S as h}from"./Select-BNmvkj3q.js";import{T as v}from"./TextArea-DK8rPRrB.js";import{T as C}from"./TextInput-3FcgPxGc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-qzpIHkwN.js";import"./Button-DOlB8Fx-.js";import"./usePreviousValue-B2W9Uaej.js";import"./Loader-CSqIQzkp.js";import"./useDelayedRender-BhPt8z3e.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DIwfb250.js";import"./IconButton-DLo7mFC2.js";import"./CloseIcon-Bv3IuKT2.js";import"./SearchIcon-BxFkW_vF.js";import"./PopupTip-BnXx1-DG.js";import"./QuestionIcon-IRuUAqgD.js";import"./TooltipTrigger-CjUaOLqW.js";import"./floating-ui.react-BQFJLz-n.js";import"./index-BQxyOJkv.js";import"./index-BrRpF9u5.js";import"./TooltipContent-Ccxc_-3P.js";import"./useBrowserPreferences-DktXlsXT.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DY-kbTh6.js";import"./InputPanel-DBWO8Dj3.js";import"./Checkbox-DlKutg5U.js";import"./RadioButton-BWYuAqAL.js";import"./SupportLabel-EEPTlvFq.js";import"./SuccessIcon-B9IUw-R5.js";import"./WarningIcon-QGxwxL3W.js";import"./BaseRadioButton-yqv0hYA1.js";import"./Flex-mTGQfjfm.js";import"./SlotComponent-DjVyoo0t.js";import"./mergeRefs-D1qIr-df.js";import"./Checkbox.stories-C3Tow5AW.js";import"./RadioButton.stories-BRF41d1d.js";import"./BaseRadioButton.stories-DE6Pr_8x.js";import"./RadioPanel.stories-MVG8J2oS.js";import"./RadioPanel-X8cFE4kM.js";import"./Title-D4I_vXyJ.js";import"./Card-DOozTyJX.js";import"./Text-C6lReFvJ.js";import"./Tag-DNVNn5PE.js";import"./ExpandablePanel-2Cbm1uMZ.js";import"./useAnimatedHeightBetween-i00otPpb.js";import"./tokens-HKQN8Vn-.js";import"./Expander-Dnk3twty.js";import"./ChevronUpIcon-BlJh8xbY.js";import"./ListItem-Dybfm_LO.js";import"./BaseTextInput-CjjmSUFp.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-rosETQMa.js";import"./index.esm-BmUYZlmO.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-r49-bDpW.js";import"./useListNavigation-CRNm_-VK.js";import"./Chip-CqU8W4us.js";import"./CheckIcon-BNeCVevO.js";import"./ArrowVerticalAnimated-kgYjUl-y.js";import"./ArrowDownIcon-_Ryj9yMF.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CXvSvIX2.js";import"./TableCaption-CoqEN5Ht.js";import"./tableContext-C6mmzLbE.js";import"./CalendarIcon-DOLA7R2h.js";import"./Label-Bsn0MuJG.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

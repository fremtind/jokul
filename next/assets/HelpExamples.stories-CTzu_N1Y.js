import{j as r}from"./iframe-C7uVWTA2.js";import{H as o}from"./Help-C0qV7jbP.js";import"./Help.stories-z8qdZe6_.js";import{A as c,m as d}from"./Autosuggest.stories-C3QThJQu.js";import g,{ComboboxStory as x}from"./Combobox.stories-DO_Hh9p3.js";import H from"./FieldGroup.stories-DDNpBtay.js";import b from"./InputGroup.stories-CSZAE5Ta.js";import S from"./select.stories-DHXWk85N.js";import j from"./TextArea.stories-3i3ILAwX.js";import{C as f}from"./Combobox-BZcvJRVC.js";import{D as I}from"./DateInput-Dk9SpEx6.js";import{F as T}from"./FieldGroup-CcYthqoe.js";import{I as G}from"./InputGroup-CD0f3oLc.js";import{S as A}from"./Search-CjWGiObt.js";import{S as h}from"./Select-CxRPAelj.js";import{T as v}from"./TextArea-VbZUiOVd.js";import{T as C}from"./TextInput-CQcXfM5T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-KuSLeMX2.js";import"./Button-DZD2DHCT.js";import"./usePreviousValue-Blnq4Ub8.js";import"./Loader-BTPVBu8_.js";import"./useDelayedRender-CCD_HTMn.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DX3cK7EB.js";import"./IconButton-DTNO5CWY.js";import"./CloseIcon-B30Acpdt.js";import"./SearchIcon-CPb3JY-J.js";import"./PopupTip-DrHjMRgY.js";import"./QuestionIcon-DQVmkh0h.js";import"./TooltipTrigger-aacw7sGg.js";import"./floating-ui.react-BVT1N4At.js";import"./index-CK27-ZEM.js";import"./index-jHPYwZth.js";import"./TooltipContent-Bq-Lo0gP.js";import"./useBrowserPreferences-CYlcBL0R.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BDQJciMG.js";import"./InputPanel-C6rLhyGN.js";import"./Checkbox-Cy1c4vYa.js";import"./RadioButton-DTDfc3kR.js";import"./SupportLabel-BTAO2r9D.js";import"./SuccessIcon-_LN56chc.js";import"./WarningIcon-Cw-tFJ-x.js";import"./BaseRadioButton-CsB-K9lO.js";import"./Flex-DQHSFU3D.js";import"./SlotComponent-CdH-AQMm.js";import"./mergeRefs-CIC6-MOs.js";import"./Checkbox.stories-CaZPSvS5.js";import"./RadioButton.stories-y8Ql_rSZ.js";import"./BaseRadioButton.stories-CuSY9m4_.js";import"./RadioPanel.stories-DUnKe0W7.js";import"./RadioPanel-CcN2YGtc.js";import"./Title-B4ajFW9b.js";import"./Card-CAopJanZ.js";import"./Text-CfWBttW6.js";import"./Tag-Jk1g0YDj.js";import"./ExpandablePanel-D2m7JvaA.js";import"./useAnimatedHeightBetween-HvqlNpfn.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CuG8YrJD.js";import"./ChevronUpIcon-DtpJu2WX.js";import"./ListItem-BIlXHWFv.js";import"./BaseTextInput-BnOJbMTj.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Ci_o5VHr.js";import"./index.esm-BJbOU1aW.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-fzkH_LGv.js";import"./useListNavigation-_zoS3X3M.js";import"./Chip-BV3Wx9_Q.js";import"./CheckIcon-DHuFf6cB.js";import"./ArrowVerticalAnimated-B5q6Nn_t.js";import"./ArrowDownIcon-DN7FG9DV.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BiIYJ3sO.js";import"./TableCaption-DWLisDW4.js";import"./tableContext-C762U11L.js";import"./CalendarIcon-Ckrw_Nmu.js";import"./Label-CSwdBQsh.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

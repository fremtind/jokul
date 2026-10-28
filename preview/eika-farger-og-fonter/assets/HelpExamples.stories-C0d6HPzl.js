import{j as r}from"./iframe-DVw23Bpy.js";import{H as o}from"./Help-C_8OGV4f.js";import"./Help.stories-CP7BsbUu.js";import{A as c,m as d}from"./Autosuggest.stories-CmxoIhm1.js";import g,{ComboboxStory as x}from"./Combobox.stories-C8LntwLb.js";import H from"./FieldGroup.stories-CuLFKrM9.js";import b from"./InputGroup.stories-Dep24w8-.js";import S from"./select.stories-BDmw2oq_.js";import j from"./TextArea.stories-DnSydUZZ.js";import{C as f}from"./Combobox-C_g9sKPe.js";import{D as I}from"./DateInput-Cnb3Q1IF.js";import{F as T}from"./FieldGroup-qZQweBPB.js";import{I as G}from"./InputGroup-D-vUTBfF.js";import{S as A}from"./Search-DhjkLIIZ.js";import{S as h}from"./Select-BGcCq7p0.js";import{T as v}from"./TextArea-DiiTaJSC.js";import{T as C}from"./TextInput-B68xBfmw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-1KZG5T_k.js";import"./Button-DXRTmRrO.js";import"./usePreviousValue-BqdSzGtf.js";import"./Loader-BtaW_8Pr.js";import"./useDelayedRender-CuDIfga-.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-D9wEgd3a.js";import"./IconButton-DD1sKjPd.js";import"./CloseIcon-Cph0ezTK.js";import"./SearchIcon-VFStbDKV.js";import"./PopupTip-D2FJxsOF.js";import"./QuestionIcon-Bx1Lw0Cg.js";import"./TooltipTrigger-jnM2qQaW.js";import"./floating-ui.react-DZN0ZC6s.js";import"./index-BfRPEZqL.js";import"./index-D-njrdkY.js";import"./TooltipContent-B1bjP_9r.js";import"./useBrowserPreferences-emWYSgCr.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-40T8Z3nL.js";import"./InputPanel-zapliVLz.js";import"./Checkbox-CC4lHcis.js";import"./RadioButton-CRalYC_A.js";import"./SupportLabel-ZEai9G4L.js";import"./SuccessIcon-BpgUHIm3.js";import"./WarningIcon-D9DvQy3A.js";import"./BaseRadioButton-DD8cEuwk.js";import"./Flex-5teROPSG.js";import"./SlotComponent-CuIk7Vvi.js";import"./mergeRefs-C6pK9vUt.js";import"./Checkbox.stories-Clmn0Qyp.js";import"./RadioButton.stories-DnV5boiZ.js";import"./BaseRadioButton.stories-8F2fq4EL.js";import"./RadioPanel.stories-DHW8KFUN.js";import"./RadioPanel-CIpSToD2.js";import"./Title-w97GtK2c.js";import"./Card-BCl_SPjn.js";import"./Text-BTz8oCij.js";import"./Tag-BqXDh9MM.js";import"./ExpandablePanel-BjNscPaC.js";import"./useAnimatedHeightBetween-Bv_RzJV0.js";import"./tokens-HKQN8Vn-.js";import"./Expander-NQiipSKI.js";import"./ChevronUpIcon-DOHwksoK.js";import"./ListItem-m4iAEq0O.js";import"./BaseTextInput-B1ewz9bR.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CgIXEZDD.js";import"./index.esm-CJHzaw2Q.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-dwPqmX87.js";import"./useListNavigation-BS2F6QsX.js";import"./Chip-BfLpVXOZ.js";import"./CheckIcon--hJ4_ZjL.js";import"./ArrowVerticalAnimated-gqfjj3x6.js";import"./ArrowDownIcon-D6GJNk6e.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DVGsp6ZJ.js";import"./TableCaption-CCzlCG4w.js";import"./tableContext-DNP_xEOO.js";import"./CalendarIcon-hDoweCJG.js";import"./Label-CJWbEyQv.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

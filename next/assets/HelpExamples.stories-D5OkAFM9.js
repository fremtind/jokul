import{j as r}from"./iframe-BDpPKEIq.js";import{H as o}from"./Help-BxvRuuRv.js";import"./Help.stories-BxbDdHTd.js";import{A as c,m as d}from"./Autosuggest.stories-RrT06Vfh.js";import g,{ComboboxStory as x}from"./Combobox.stories-efnEd0lx.js";import H from"./FieldGroup.stories-CVJU7zdk.js";import b from"./InputGroup.stories-DPospQKx.js";import S from"./select.stories-BZpITVc8.js";import j from"./TextArea.stories-0-VRWSuR.js";import{C as f}from"./Combobox-CL0vASNA.js";import{D as I}from"./DateInput-B859y7lm.js";import{F as T}from"./FieldGroup-DLTjDirK.js";import{I as G}from"./InputGroup-NLBKwSei.js";import{S as A}from"./Search-CSuWiJID.js";import{S as h}from"./Select-5OKJKYaH.js";import{T as v}from"./TextArea-B3Vv-azR.js";import{T as C}from"./TextInput-CgQ37ogv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C5ignaWR.js";import"./Button-Bfqm6Ibk.js";import"./usePreviousValue-CPj_qd7Z.js";import"./Loader-CaGJO6eK.js";import"./useDelayedRender-DXU9-Lq1.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-C_YTq-v4.js";import"./IconButton-DLvWf2bs.js";import"./CloseIcon-DYC_NCsL.js";import"./SearchIcon-CzMM5BCs.js";import"./PopupTip-DH-OPCCe.js";import"./QuestionIcon-qs5QOJNd.js";import"./TooltipTrigger-KMJeWvHl.js";import"./floating-ui.react-BMJ5q8Y2.js";import"./index-D-8DBiav.js";import"./index-DT64uItO.js";import"./TooltipContent-Ga3lwfrP.js";import"./useBrowserPreferences-B0jyOj2G.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CL6e_qJw.js";import"./InputPanel-cBb7h_pD.js";import"./Checkbox-BkU-mMav.js";import"./RadioButton-CcnkU7xn.js";import"./SupportLabel-DrQwQ4NM.js";import"./SuccessIcon-ClZH0MHf.js";import"./WarningIcon-CZeaSyLt.js";import"./BaseRadioButton-DaX9Q4wt.js";import"./Flex-BhCLiRIm.js";import"./SlotComponent-CkzMT1b4.js";import"./mergeRefs-BQ96W6kx.js";import"./Checkbox.stories-CDq27NQR.js";import"./RadioButton.stories-DZd1z2Wz.js";import"./BaseRadioButton.stories-CmHy_plj.js";import"./RadioPanel.stories-JJJzS9pg.js";import"./RadioPanel-DenU-CrO.js";import"./Title-DFVV8n82.js";import"./Card-Bv1Pw9P6.js";import"./Text-FVOC6TNb.js";import"./Tag-D2z8xmd0.js";import"./ExpandablePanel-WIy46OSo.js";import"./useAnimatedHeightBetween-gr3s7urq.js";import"./tokens-HKQN8Vn-.js";import"./Expander-Bth1AXre.js";import"./ChevronUpIcon-biwS7dJt.js";import"./ListItem-DcS_b8uP.js";import"./BaseTextInput-CvcLq5og.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-2c7sVbvu.js";import"./index.esm-DZ7KytnK.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-COt78F9R.js";import"./useListNavigation-CgiS0rWx.js";import"./Chip-pOdWp1TP.js";import"./CheckIcon-Ci-vc0HN.js";import"./ArrowVerticalAnimated-DaM8r_DJ.js";import"./ArrowDownIcon-ByNYoCDF.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DmelDf-7.js";import"./TableCaption-C4INT6Xv.js";import"./tableContext-BDZ0MkeH.js";import"./CalendarIcon-C8z4jJuV.js";import"./Label-BuKALfrN.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

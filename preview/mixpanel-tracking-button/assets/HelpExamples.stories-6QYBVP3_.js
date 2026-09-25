import{j as r}from"./iframe-A5c2Wqvk.js";import{H as o}from"./Help-BjkrYEvC.js";import"./Help.stories-BANVMqdk.js";import{A as c,m as d}from"./Autosuggest.stories-CLhr6WyI.js";import g,{ComboboxStory as x}from"./Combobox.stories-Ds_EqNcy.js";import H from"./FieldGroup.stories-a8WdnIRR.js";import b from"./InputGroup.stories-Bq8PRhQi.js";import S from"./select.stories-CinTDZtt.js";import j from"./TextArea.stories-YgsdAM2o.js";import{C as f}from"./Combobox-TmX0LrIg.js";import{D as I}from"./DateInput-8VBqTvUy.js";import{F as T}from"./FieldGroup-CRltiMYq.js";import{I as G}from"./InputGroup-CI-q_9N6.js";import{S as A}from"./Search-BMPQ_FcE.js";import{S as h}from"./Select-B787s6cx.js";import{T as v}from"./TextArea-BjP4yi1u.js";import{T as C}from"./TextInput-BaNeASNm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-aN8z_x5R.js";import"./Button-CFV1ExI7.js";import"./usePreviousValue-BpHgvnAJ.js";import"./serializeTracking-CnAc4iKu.js";import"./Loader-DB4OEe16.js";import"./useDelayedRender-k-4tZbkM.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BqJ3Mudq.js";import"./IconButton-KQCIkpWC.js";import"./CloseIcon-B9re0XTl.js";import"./SearchIcon-BnqqjpZN.js";import"./PopupTip-BdeX-ZHF.js";import"./QuestionIcon-BzQiStGf.js";import"./TooltipTrigger-VdT6Txrn.js";import"./floating-ui.react-y8OMiMwU.js";import"./index-t_NNrlp2.js";import"./index-BSzvJkJD.js";import"./TooltipContent-BVPsb8HW.js";import"./useBrowserPreferences-DzshHhbr.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-O2XvzT1_.js";import"./InputPanel-BK62h5oE.js";import"./Checkbox-DefGNEWD.js";import"./RadioButton-Wt9zCBFl.js";import"./SupportLabel-CkMYJ3oD.js";import"./SuccessIcon-PvcmUODX.js";import"./WarningIcon-BGoIXnrD.js";import"./BaseRadioButton-Dp4QPNXk.js";import"./Flex-4q2H_Iw0.js";import"./SlotComponent-RUIXAPm3.js";import"./mergeRefs-C1zYPesy.js";import"./Checkbox.stories-Bi_1D2jm.js";import"./RadioButton.stories-BENG6qoR.js";import"./BaseRadioButton.stories-Bj4VYy6y.js";import"./RadioPanel.stories-Bh1b7Gab.js";import"./RadioPanel-C4rkzMnI.js";import"./Title-DHd5KV4g.js";import"./Card-B48Q6bQ1.js";import"./Text-DChhKQum.js";import"./Tag-p-x_1BKF.js";import"./ExpandablePanel-CJy5i908.js";import"./useAnimatedHeightBetween-JikCsOI7.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BXk0xJ02.js";import"./ChevronUpIcon-Dk_V3XqI.js";import"./ListItem-DvSCzo9Z.js";import"./BaseTextInput-B4QVYW5d.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DQKNdMS-.js";import"./index.esm-mdq-c9xQ.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BK0o1bzc.js";import"./useListNavigation-DRHIFzsb.js";import"./Chip-D2JMj9Cn.js";import"./CheckIcon-CrUw98Gl.js";import"./ArrowVerticalAnimated-DIDhAv2R.js";import"./ArrowDownIcon-P7TVz6LG.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CH9dsBCv.js";import"./TableCaption-BJ1ssJNw.js";import"./tableContext-CfqvWcFU.js";import"./CalendarIcon-t07cphum.js";import"./Label-B8MgGNDM.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};

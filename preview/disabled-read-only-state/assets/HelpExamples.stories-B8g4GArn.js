import{j as r}from"./iframe-BNYFmsG_.js";import{H as o}from"./Help-BIyHNpSC.js";import"./Help.stories-DtWz03QL.js";import{A as c,m as d}from"./Autosuggest.stories-aDMvlAyl.js";import g,{ComboboxStory as x}from"./Combobox.stories-Drrhbewn.js";import H from"./FieldGroup.stories-DqPs83XD.js";import b from"./InputGroup.stories-DSie-bEK.js";import S from"./select.stories-DYieZv1g.js";import j from"./TextArea.stories-CECPpQnz.js";import{C as f}from"./Combobox-B7wod-Oq.js";import{D as I}from"./DateInput-DRyevBDz.js";import{F as T}from"./FieldGroup-CPe-neRc.js";import{I as G}from"./InputGroup-Bwsxndsv.js";import{S as A}from"./Search-7v40zsEf.js";import{S as h}from"./Select-Bf7c8Vvw.js";import{T as v}from"./TextArea-Y2cCHBot.js";import{T as C}from"./TextInput-B4TxotMx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-1GIiArJa.js";import"./Button-B3rCCuYL.js";import"./usePreviousValue-DxlhbZGD.js";import"./Loader-BEVUKKmW.js";import"./useDelayedRender-NZm3ARlE.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BC4CVPX0.js";import"./IconButton-BpDCvnDf.js";import"./CloseIcon-DL2v20sj.js";import"./SearchIcon-DvGJzw7X.js";import"./PopupTip-DbZxV76y.js";import"./QuestionIcon-BUpEKx0h.js";import"./TooltipTrigger-BoLo__bO.js";import"./floating-ui.react-1luiOFh-.js";import"./index-DOswxnxy.js";import"./index-C7c4ufuw.js";import"./TooltipContent-B2xhNMyH.js";import"./useBrowserPreferences-BRzCTpma.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-C3jO3UhK.js";import"./CheckboxPanel-DqcgaSXf.js";import"./InputPanel-GaV1Cv44.js";import"./Checkbox-JHs6FcCy.js";import"./RadioButton-DBaAJI1l.js";import"./SupportLabel-CoWXPnrM.js";import"./SuccessIcon-TfnEVVuA.js";import"./WarningIcon-CJJewKK_.js";import"./BaseRadioButton-ChNWsqMi.js";import"./Flex-CUUbswY4.js";import"./SlotComponent-DKvP6kcx.js";import"./mergeRefs-B3I4I1O5.js";import"./Checkbox.stories-BNCThgxR.js";import"./RadioButton.stories-BSdrxeiK.js";import"./BaseRadioButton.stories-B7b0fNou.js";import"./RadioPanel.stories-CUqf56VU.js";import"./RadioPanel-DfKEJiZW.js";import"./Title-95aMgiMG.js";import"./Card-DOmTo7Q7.js";import"./Text-DEr-tyyZ.js";import"./Tag-TnTRQ2QN.js";import"./ExpandablePanel-DJp5KTEf.js";import"./useAnimatedHeightBetween-qmGPDvbI.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DHj5ry8_.js";import"./ChevronUpIcon-BupZL5MQ.js";import"./ListItem-D4j7DRS-.js";import"./BaseTextInput-CIvGHUlr.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CNXuGIaW.js";import"./index.esm-CDXGv6JC.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CeeZ8tOa.js";import"./useListNavigation-YNrLi-8N.js";import"./Chip-DPqL3vfD.js";import"./CheckIcon-D8LLSTOS.js";import"./ArrowVerticalAnimated-DpoXwHLr.js";import"./ArrowDownIcon-BRp7mx0d.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BDR3rG6R.js";import"./TableCaption-BcapVpNP.js";import"./tableContext-CFEDq9C7.js";import"./CalendarIcon-BTtE_Id-.js";import"./Label-W1tkSAD6.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

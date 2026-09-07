import{j as r}from"./iframe-BXo3axTj.js";import{H as o}from"./Help-i8SyBLO8.js";import"./Help.stories-CP130UpW.js";import{A as c,m as d}from"./Autosuggest.stories-D5is36JN.js";import g,{ComboboxStory as x}from"./Combobox.stories-CDz9SKV9.js";import H from"./FieldGroup.stories-BN-rL26t.js";import b from"./InputGroup.stories-Yc5SoZ1i.js";import S from"./select.stories-BBSQAd5k.js";import j from"./TextArea.stories-Cx569IWd.js";import{C as f}from"./Combobox-BnWmT9DP.js";import{D as I}from"./DateInput-BJmlkFvJ.js";import{F as T}from"./FieldGroup-BrrYsz-e.js";import{I as G}from"./InputGroup-C3tfJA39.js";import{S as A}from"./Search-Cq12SiXe.js";import{S as h}from"./Select-DsX84wCk.js";import{T as v}from"./TextArea-l--j8qtc.js";import{T as C}from"./TextInput-CboYmGH8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D1qumIKY.js";import"./Button-BmvcjpA0.js";import"./usePreviousValue-Dw1VHpYd.js";import"./Loader-HQ4RrwGR.js";import"./useDelayedRender-Q4e2wRxQ.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-D5akchpY.js";import"./IconButton-Bl2mr05U.js";import"./CloseIcon-DmHrbuXP.js";import"./SearchIcon-DDihrBBV.js";import"./PopupTip-B9r7Fq78.js";import"./QuestionIcon-G9yzP6BW.js";import"./TooltipTrigger-C0_3vJkK.js";import"./floating-ui.react-CNrVwq0r.js";import"./index-5oLdXrEK.js";import"./index-B7kwOv1Y.js";import"./TooltipContent-CiOkltRa.js";import"./useBrowserPreferences-CdQNdhcP.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-uMmBv-TH.js";import"./InputPanel-Bzi5Lyut.js";import"./Checkbox-ChSX5ADS.js";import"./RadioButton-a2IC6bFw.js";import"./SupportLabel-D54Hdxq7.js";import"./SuccessIcon-DYm8P-W_.js";import"./WarningIcon-BN3HDFv8.js";import"./BaseRadioButton-Cu2wFZlZ.js";import"./Flex-D7UZvTHJ.js";import"./SlotComponent-FF344ZXF.js";import"./mergeRefs-QyskOXO3.js";import"./Checkbox.stories-D0cI70oF.js";import"./RadioButton.stories-YSX0bkqy.js";import"./BaseRadioButton.stories-Zjycie1c.js";import"./RadioPanel.stories-CLLbm1YJ.js";import"./RadioPanel-BhVJkfR1.js";import"./Title-B6LCoBDe.js";import"./Card-CiBCA5ED.js";import"./Text-BUmgISur.js";import"./Tag-cTclZrNM.js";import"./ExpandablePanel-a7l0PTkr.js";import"./useAnimatedHeightBetween-Bj7PRgZu.js";import"./tokens-CW-NfdIE.js";import"./Expander-CbYPISPz.js";import"./ChevronUpIcon-BLpW9RdR.js";import"./ListItem-CITPFxcX.js";import"./BaseTextInput-b-BFdIT9.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DfHbpX0e.js";import"./index.esm-CW9MWAzA.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-mccaV_pN.js";import"./useListNavigation-CloXq-vu.js";import"./Chip-HafzCsCt.js";import"./CheckIcon-CyUlUK2v.js";import"./ArrowVerticalAnimated-J0UDirgn.js";import"./ArrowDownIcon-DpeEk9ll.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BiGd3Z_0.js";import"./TableCaption-D6O72vcI.js";import"./tableContext-C9Sg6xZT.js";import"./CalendarIcon-Dx8FRwwX.js";import"./Label-DL96_w0E.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

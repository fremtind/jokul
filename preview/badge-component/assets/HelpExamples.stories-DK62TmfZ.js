import{j as r}from"./iframe-aA0p6r9-.js";import{H as o}from"./Help-Ciho57hf.js";import"./Help.stories-CXS5oShU.js";import{A as c,m as d}from"./Autosuggest.stories-Dne9THmU.js";import g,{ComboboxStory as x}from"./Combobox.stories-Hqms7b_Z.js";import H from"./FieldGroup.stories-CHEQkwWy.js";import b from"./InputGroup.stories-D5rCMp22.js";import S from"./select.stories-B_Dg6EJh.js";import j from"./TextArea.stories-7DkpbJXc.js";import{C as f}from"./Combobox-B53F-J-5.js";import{D as I}from"./DateInput-DKMeYsjV.js";import{F as T}from"./FieldGroup-E-EiDxL6.js";import{I as G}from"./InputGroup-BvjqsNq3.js";import{S as A}from"./Search-n6wCcOZy.js";import{S as h}from"./Select-DnOfLakX.js";import{T as v}from"./TextArea-imn1CWma.js";import{T as C}from"./TextInput-CEcYIDaz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D0i0JE_A.js";import"./Button-CdYLx6ZN.js";import"./usePreviousValue-IfhV82Fh.js";import"./Loader-DQ5Gcow2.js";import"./useDelayedRender-B9M9aGfC.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-B_2pWImO.js";import"./IconButton-B-WfmXBS.js";import"./CloseIcon-Dt216M9P.js";import"./SearchIcon-BmcfI2kN.js";import"./PopupTip-FJgr6d3R.js";import"./QuestionIcon-BD_1dDPH.js";import"./TooltipTrigger-BUCDzyAR.js";import"./floating-ui.react-CA-Fa3_f.js";import"./index-DCSMpfX5.js";import"./index-DxQbSn8V.js";import"./TooltipContent-C04bHdiZ.js";import"./useBrowserPreferences-BvUXglgP.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DrbauK7a.js";import"./InputPanel-D7Gd6NwN.js";import"./Checkbox-XpTN1L4M.js";import"./RadioButton-9eNJkh2F.js";import"./SupportLabel-DJ4BJ0rY.js";import"./SuccessIcon-Dx0xVnBH.js";import"./WarningIcon-w6FDkGov.js";import"./BaseRadioButton-kdxek_td.js";import"./Flex-DsUrarOr.js";import"./SlotComponent-BnCqk5vE.js";import"./mergeRefs-BPd1H58I.js";import"./Checkbox.stories-FZOK4IFA.js";import"./RadioButton.stories-DPpH_Nxf.js";import"./BaseRadioButton.stories-CE1zHvVE.js";import"./RadioPanel.stories-7h17ZIPB.js";import"./RadioPanel-DG8nJzoR.js";import"./Title-BBmmqhHV.js";import"./Card-BMbm6_HI.js";import"./Text-ojEYY4zz.js";import"./Tag-DSIqX5Fo.js";import"./ExpandablePanel-CFhZht6w.js";import"./useAnimatedHeightBetween-BwY01ktg.js";import"./tokens-HKQN8Vn-.js";import"./Expander-D6L00C5i.js";import"./ChevronUpIcon-BQsRSg1v.js";import"./ListItem-_Pevu7Fy.js";import"./BaseTextInput-BAW7SWFd.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BIQl46Z7.js";import"./index.esm-BgXThCQS.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CotNyp4Q.js";import"./useListNavigation-Crg0PZiq.js";import"./Chip-Bh9JXz1H.js";import"./CheckIcon-hG17bcvX.js";import"./ArrowVerticalAnimated-GpJZMoft.js";import"./ArrowDownIcon-Duw4Umtf.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-COGBfpiF.js";import"./TableCaption-DhVbDBk9.js";import"./tableContext-0GWo1cR0.js";import"./CalendarIcon-YZYSkDto.js";import"./Label-DXqbslAE.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

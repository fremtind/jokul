import{j as r}from"./iframe-DnRExBud.js";import{H as o}from"./Help-D9HPP9hz.js";import"./Help.stories-CkrgVxXu.js";import{A as c,m as d}from"./Autosuggest.stories-fT3FHGjl.js";import g,{ComboboxStory as x}from"./Combobox.stories-BFfASJP4.js";import H from"./FieldGroup.stories-B1cEOgNt.js";import b from"./InputGroup.stories-B3QAKQoI.js";import S from"./select.stories-B2d4_UBf.js";import j from"./TextArea.stories-D3rrGETA.js";import{C as f}from"./Combobox-Dw0lF_M6.js";import{D as I}from"./DateInput-BoiQeNlv.js";import{F as T}from"./FieldGroup-D-ZpkdA0.js";import{I as G}from"./InputGroup-Cjx9tMWC.js";import{S as A}from"./Search-GOmvYNIS.js";import{S as h}from"./Select-79sqOaQD.js";import{T as v}from"./TextArea-xxDQ_mSh.js";import{T as C}from"./TextInput-CdTBHFr_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CLXkx6jQ.js";import"./Button-DsAn8mSk.js";import"./usePreviousValue-B_KPbwHu.js";import"./Loader-CnOilW-W.js";import"./useDelayedRender-BhgVB_Gj.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Lck2z_DJ.js";import"./IconButton-BJ0tBRep.js";import"./CloseIcon-C32qa3_g.js";import"./SearchIcon-fYzOboJY.js";import"./PopupTip-BE324hjq.js";import"./QuestionIcon-BH_yl6_n.js";import"./TooltipTrigger-BJRblyl5.js";import"./floating-ui.react-teF8wZu9.js";import"./index-DnPeqL-2.js";import"./index-BAUadPdX.js";import"./TooltipContent-CaFwJI86.js";import"./useBrowserPreferences-BCVlB5a4.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-CDXeE5qb.js";import"./Checkbox-CBOs-QtP.js";import"./RadioButton.stories-DTCX2eWq.js";import"./RadioButton-BdKEe5hT.js";import"./SupportLabel-CelV0EeM.js";import"./SuccessIcon-DCqlBIn4.js";import"./WarningIcon-YAijWfWH.js";import"./BaseRadioButton-tFpKDmWg.js";import"./BaseRadioButton.stories-COy1y_74.js";import"./CheckboxPanel.stories-CT1ezmo7.js";import"./InputPanel-BsR3n9HF.js";import"./Flex-C-WOQ05m.js";import"./SlotComponent-B9X1XYZn.js";import"./mergeRefs-BN-50vhA.js";import"./RadioPanel.stories-srh1q108.js";import"./RadioPanel-BjKnn-fG.js";import"./Title-BKeDD6E0.js";import"./Card-CswNjZ5v.js";import"./Text-B8fJqWSj.js";import"./Tag-Bwo-NNj4.js";import"./ExpandablePanel-C9zAaBsK.js";import"./useAnimatedHeightBetween-Boucq0Qa.js";import"./tokens-CW-NfdIE.js";import"./Expander-DNKPXdNc.js";import"./ChevronUpIcon-Dq6J0d9-.js";import"./ListItem-BN7M1T5y.js";import"./BaseTextInput-CkPRaXDx.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CfK48Yll.js";import"./index.esm-Y1nItAxE.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CwjRmfA0.js";import"./useListNavigation-Daq9PAcM.js";import"./Chip-BcX-o4pJ.js";import"./CheckIcon-ze8ZRQWW.js";import"./ArrowVerticalAnimated-BctJZ5cI.js";import"./ArrowDownIcon-KmwiYTdI.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-fjubqAoz.js";import"./TableCaption-D7L_Kjpl.js";import"./tableContext-2aotGqCt.js";import"./CalendarIcon-ofe78cIY.js";import"./Label-CmpEAZsq.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

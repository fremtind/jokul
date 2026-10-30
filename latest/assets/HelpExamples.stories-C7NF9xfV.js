import{j as r}from"./iframe-CetG-oL2.js";import{H as o}from"./Help-C1YyiIVl.js";import"./Help.stories-C_gIEoXH.js";import{A as c,m as d}from"./Autosuggest.stories-C_xNuFyw.js";import g,{ComboboxStory as x}from"./Combobox.stories-jV0Epde-.js";import H from"./FieldGroup.stories-Di8jXfhL.js";import b from"./InputGroup.stories-BS9KVD1a.js";import S from"./select.stories-D1u1IWhx.js";import j from"./TextArea.stories-DshxI3xc.js";import{C as f}from"./Combobox-CEdkVrjx.js";import{D as I}from"./DateInput-Do04s6f5.js";import{F as T}from"./FieldGroup-DQsdH8cU.js";import{I as G}from"./InputGroup-CO70e-wo.js";import{S as A}from"./Search-CXEw8u8D.js";import{S as h}from"./Select-TlMqwFZH.js";import{T as v}from"./TextArea-C7Ec_JEI.js";import{T as C}from"./TextInput-DWaO-zc5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BUSQt2z_.js";import"./Button-DWTVd3Dr.js";import"./usePreviousValue-ClTjmLm-.js";import"./Loader-pDsxSv4m.js";import"./useDelayedRender-D0kvpeh8.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CoAx-v4p.js";import"./IconButton-DhG0ZekC.js";import"./CloseIcon-BZZuJnvY.js";import"./SearchIcon-C6PeK-oB.js";import"./PopupTip-ByGwPrUD.js";import"./QuestionIcon-Dk-d3Doh.js";import"./TooltipTrigger-Cyfy7Zt6.js";import"./floating-ui.react-I1w-kn5G.js";import"./index-C4Iqkm4g.js";import"./index-CaQYldWi.js";import"./TooltipContent-CATmrq7y.js";import"./useBrowserPreferences-kkNUTkR1.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-Pi_SrYwR.js";import"./InputPanel-DMshVmnq.js";import"./Checkbox-CPtRdLpZ.js";import"./RadioButton-DZpu1YvE.js";import"./SupportLabel-1RhHNd6r.js";import"./SuccessIcon-DbocgTOA.js";import"./WarningIcon-wDUI3aNi.js";import"./BaseRadioButton-BfSxhDvQ.js";import"./Flex-DY_P_WR-.js";import"./SlotComponent-r3gGKljf.js";import"./mergeRefs-D4Wbo9Iy.js";import"./Checkbox.stories-Dr53WX73.js";import"./RadioButton.stories-DMeJsc0a.js";import"./BaseRadioButton.stories-B5MQIO48.js";import"./RadioPanel.stories-fc34JsYW.js";import"./RadioPanel-B0cG_KKX.js";import"./Title-CAZK1h9e.js";import"./Card-CEIbq_So.js";import"./Text-BQV7bg2o.js";import"./Tag-Dm9q-8-k.js";import"./ExpandablePanel-BTv4ghN9.js";import"./useAnimatedHeightBetween-CsikI8Nd.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BM5rGSPN.js";import"./ChevronUpIcon-BZGoj2pt.js";import"./ListItem-C881_bOy.js";import"./BaseTextInput-BHRBtrbV.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-tHy3lcDS.js";import"./index.esm-CodJkoVt.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CAQklFvj.js";import"./useListNavigation-3NfvXhnv.js";import"./Chip-r4JoADwq.js";import"./CheckIcon-CXBszJ2v.js";import"./ArrowVerticalAnimated-BYEClpQS.js";import"./ArrowDownIcon-57w6gH-T.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-Eb4Gm_Z9.js";import"./TableCaption-DXrrHumK.js";import"./tableContext-BBNG3cTg.js";import"./CalendarIcon-CL8JW_gU.js";import"./Label-B3qsxmMe.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

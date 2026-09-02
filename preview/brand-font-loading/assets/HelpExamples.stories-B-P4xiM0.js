import{j as r}from"./iframe-CZGuvWz9.js";import{H as o}from"./Help-lX3zP8l9.js";import"./Help.stories-D7xj9-jy.js";import{A as c,m as d}from"./Autosuggest.stories-CqEkzVem.js";import g,{ComboboxStory as x}from"./Combobox.stories-BdNcL5GE.js";import H from"./FieldGroup.stories-C8hRVYEg.js";import b from"./InputGroup.stories-B-MeS4qz.js";import S from"./select.stories-DT_IViTI.js";import j from"./TextArea.stories-BL3DSJ0p.js";import{C as f}from"./Combobox-K5oFiR4D.js";import{D as I}from"./DateInput-DMUG6EfC.js";import{F as T}from"./FieldGroup-ftoCr09m.js";import{I as G}from"./InputGroup-CYkBmpyd.js";import{S as A}from"./Search-De3mCaVm.js";import{S as h}from"./Select-DeQi2cNh.js";import{T as v}from"./TextArea-DS4RNC9a.js";import{T as C}from"./TextInput-CLafj6ni.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BUgVbsfK.js";import"./Button-u8DDX69H.js";import"./usePreviousValue-UdSFGDlk.js";import"./Loader-C4HDQSss.js";import"./useDelayedRender-CNwVi-ZM.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BXnQ38d8.js";import"./IconButton-D5oMT6Ns.js";import"./CloseIcon-CszCthh1.js";import"./SearchIcon-C-6Jrxid.js";import"./PopupTip-BRMlFmEg.js";import"./QuestionIcon-k4xSvQ2r.js";import"./TooltipTrigger-BK2_m9zg.js";import"./floating-ui.react-DJUlJoDw.js";import"./index-BoC7YLRP.js";import"./index--y3bgWZz.js";import"./TooltipContent-BhuTyJdA.js";import"./useBrowserPreferences-Cl2tXgLC.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-xCqTWoOF.js";import"./Checkbox-DqMstbDo.js";import"./RadioButton.stories-B_ibQbbu.js";import"./RadioButton-CwWaHN7M.js";import"./SupportLabel-BjPrZoWM.js";import"./SuccessIcon-D53BCjs3.js";import"./WarningIcon-Gsp5750W.js";import"./BaseRadioButton-BjNrrzhv.js";import"./BaseRadioButton.stories-DUL8fd5K.js";import"./CheckboxPanel.stories-B19BZ4-W.js";import"./InputPanel-wsQ_vFbp.js";import"./Flex-BPTlQpPV.js";import"./SlotComponent-DPeoQ6O-.js";import"./mergeRefs-Cw9DO2Ch.js";import"./RadioPanel.stories-D0gNnz6L.js";import"./RadioPanel-Cg68Wshw.js";import"./Title-evbYkkal.js";import"./Card-BQnTwpzm.js";import"./Text-bJPFqlqB.js";import"./Tag-Skm73Z2m.js";import"./ExpandablePanel-DJk6sT-_.js";import"./useAnimatedHeightBetween-UfSBVUzE.js";import"./tokens-CW-NfdIE.js";import"./Expander-BbD55i9h.js";import"./ChevronUpIcon-pTv6xhFm.js";import"./ListItem-Bkh7m-9c.js";import"./BaseTextInput-CUzl4QPW.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CEA_LeCR.js";import"./index.esm-CWP7yAYS.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-C6Ayty2W.js";import"./useListNavigation-CzU2BVXK.js";import"./Chip-GiM48nRk.js";import"./CheckIcon-BP5EhPQo.js";import"./ArrowVerticalAnimated-DmcIYW9Y.js";import"./ArrowDownIcon-CgAwiJ22.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DqnegVDO.js";import"./TableCaption-DgXPK_i-.js";import"./tableContext-CkBSSJ3X.js";import"./CalendarIcon-B7q9rr5e.js";import"./Label-D4OwJwTQ.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

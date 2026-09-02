import{j as r}from"./iframe-Bi9tQunh.js";import{H as o}from"./Help-D8eEwug1.js";import"./Help.stories-CIlbrCOW.js";import{A as c,m as d}from"./Autosuggest.stories-Da83sp4c.js";import g,{ComboboxStory as x}from"./Combobox.stories-SfSEzA_M.js";import H from"./FieldGroup.stories-DTjHTiSv.js";import b from"./InputGroup.stories-CMt9xG9c.js";import S from"./select.stories-Czmf0iBP.js";import j from"./TextArea.stories-Cg51K3vG.js";import{C as f}from"./Combobox-c8JVWybx.js";import{D as I}from"./DateInput-t9tuv1rg.js";import{F as T}from"./FieldGroup-DjSldw8i.js";import{I as G}from"./InputGroup-rzjeFJAO.js";import{S as A}from"./Search-vJNR1Mlu.js";import{S as h}from"./Select-CIYrpux3.js";import{T as v}from"./TextArea-CdAhncGy.js";import{T as C}from"./TextInput-BOcEw5Ed.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BDcmw2PU.js";import"./Button-MbgQ_3Fu.js";import"./usePreviousValue-3PrSSQM3.js";import"./Loader-Dnv9Z3dF.js";import"./useDelayedRender-BiDQVcK9.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CZKWnnNJ.js";import"./IconButton-6ZMA5RtX.js";import"./CloseIcon-v7s6zKx7.js";import"./SearchIcon-D4rOE1-m.js";import"./PopupTip-BNleB-cS.js";import"./QuestionIcon-Dn38vHYC.js";import"./TooltipTrigger-BSBipe7c.js";import"./floating-ui.react-CD2cw9Nj.js";import"./index-CuVJmC9A.js";import"./index-Dq8jkUtW.js";import"./TooltipContent-C_Sb9Txg.js";import"./useBrowserPreferences-KxUtPrwQ.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-C_gc56us.js";import"./Checkbox-C1zxShTX.js";import"./RadioButton.stories-INXjybF_.js";import"./RadioButton-C-PsCyqv.js";import"./SupportLabel-D5Wy-aKY.js";import"./SuccessIcon-qA8jJps2.js";import"./WarningIcon-BnaCrBil.js";import"./BaseRadioButton-BtiJjB6a.js";import"./BaseRadioButton.stories-o8Ea_lhV.js";import"./CheckboxPanel.stories-0_MkxAQD.js";import"./InputPanel-KmeUT44P.js";import"./Flex-BZZjEPnJ.js";import"./SlotComponent-BMZjz7Gh.js";import"./mergeRefs-Co1Fv4IU.js";import"./RadioPanel.stories-DeIWjrS4.js";import"./RadioPanel-Blh6Ji9D.js";import"./Title-uMqEdz8b.js";import"./Card-CskLGuDk.js";import"./Text-DLgRzYxB.js";import"./Tag-e3LFhPhp.js";import"./ExpandablePanel-3qXsXA38.js";import"./useAnimatedHeightBetween-DX3qRdZW.js";import"./tokens-CW-NfdIE.js";import"./Expander-CY52Pbvr.js";import"./ChevronUpIcon-CwkndeJw.js";import"./ListItem-D-WmtlEv.js";import"./BaseTextInput-DkjvyMGL.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-gv_iBIou.js";import"./index.esm-B-3Bbeqy.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BSCBTurU.js";import"./useListNavigation-zUvqnn3y.js";import"./Chip-DtNG2fAB.js";import"./CheckIcon-DH3ilkZP.js";import"./ArrowVerticalAnimated-DQGrgjs1.js";import"./ArrowDownIcon-DXwJQq1F.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-Nt1q58wM.js";import"./TableCaption-cMffJUmZ.js";import"./tableContext-HnnKRyRR.js";import"./CalendarIcon-D_cRg8ab.js";import"./Label-BMC-8UjK.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

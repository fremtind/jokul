import{j as r}from"./iframe-D7upYY5c.js";import{H as o}from"./Help-Bzc7-Oy4.js";import"./Help.stories-CooTm_da.js";import{A as c,m as d}from"./Autosuggest.stories-BKD9pnI7.js";import g,{ComboboxStory as x}from"./Combobox.stories-B1t-m9b-.js";import H from"./FieldGroup.stories-CaayrdP9.js";import b from"./InputGroup.stories-C2ax6m4i.js";import S from"./select.stories-DW3O2qbo.js";import j from"./TextArea.stories-jW-VCu-w.js";import{C as f}from"./Combobox-DaSwH6KH.js";import{D as I}from"./DateInput-CeBSVDDS.js";import{F as T}from"./FieldGroup-CJKRsCxy.js";import{I as G}from"./InputGroup-DAhVQWVj.js";import{S as A}from"./Search-7aLJHjAO.js";import{S as h}from"./Select-xfT3mC4e.js";import{T as v}from"./TextArea-CTvixABk.js";import{T as C}from"./TextInput-CaX5dHnq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DikkJyQA.js";import"./Button-zY7tvP5K.js";import"./usePreviousValue-zWvAZfDp.js";import"./Loader-BpfQvpCK.js";import"./useDelayedRender-D0vDkmzN.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DbCQwEhX.js";import"./IconButton-BBTWXEdB.js";import"./CloseIcon-DiMLIvH_.js";import"./SearchIcon-6IRAvp3G.js";import"./PopupTip-D5aAKdhe.js";import"./QuestionIcon-Bzg1F1xq.js";import"./TooltipTrigger-DW6kFgEN.js";import"./floating-ui.react-CVRz2aiK.js";import"./index-DvWvB7kP.js";import"./index-CaYMG9FM.js";import"./TooltipContent-DF5OzjcF.js";import"./useBrowserPreferences-iRPyTOm1.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BVRdyRCD.js";import"./InputPanel-B7xt53Fn.js";import"./Checkbox-Cl3pupzn.js";import"./RadioButton-x8tSoRbG.js";import"./SupportLabel-Cc-OmoOL.js";import"./SuccessIcon-BrqVnmDE.js";import"./WarningIcon-8eiyg0RW.js";import"./BaseRadioButton-BI2Rb3Rm.js";import"./Flex-Zq4juz9d.js";import"./SlotComponent-CVs4UBRo.js";import"./mergeRefs-jfUaLMSN.js";import"./Checkbox.stories-Deo3dRO8.js";import"./RadioButton.stories-QXyJVAqC.js";import"./BaseRadioButton.stories-4Bll_9te.js";import"./RadioPanel.stories-o9xrzQZJ.js";import"./RadioPanel-C-xPzy9t.js";import"./Title-BRzdY8Fb.js";import"./Card-D7QEc_m0.js";import"./Text-DVQDvN0F.js";import"./Tag-ZSAYWdNH.js";import"./ExpandablePanel-DKT-SPCC.js";import"./useAnimatedHeightBetween-DeOPNVqM.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BNZrmkYK.js";import"./ChevronUpIcon-DHkyq0H4.js";import"./ListItem-6IJlCaCY.js";import"./BaseTextInput-848pKHNX.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-WL2WxGHk.js";import"./index.esm-BpohXAqB.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CsnQ9bsN.js";import"./useListNavigation-DY2KCS3O.js";import"./Chip-C4r1AOmn.js";import"./CheckIcon-bPcLvCLw.js";import"./ArrowVerticalAnimated-XKPnmbtw.js";import"./ArrowDownIcon-Co1URVl0.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DJhtJqwb.js";import"./TableCaption-CvjF1t0S.js";import"./tableContext-BwOiJzUp.js";import"./CalendarIcon-CmR2RkpB.js";import"./Label-Dv_2Lq2P.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

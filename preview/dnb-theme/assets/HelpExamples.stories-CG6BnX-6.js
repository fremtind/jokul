import{j as r}from"./iframe-C2ZmbiLT.js";import{H as o}from"./Help-aEqo6tmz.js";import"./Help.stories-D7oMNQCi.js";import{A as c,m as d}from"./Autosuggest.stories-DEtSczsI.js";import g,{ComboboxStory as x}from"./Combobox.stories-E00_vGDz.js";import H from"./FieldGroup.stories-QSl-_6uK.js";import b from"./InputGroup.stories-BxXbc3yF.js";import S from"./select.stories-BiDtwNe2.js";import j from"./TextArea.stories-NPPd-HA0.js";import{C as f}from"./Combobox-CltPVXtL.js";import{D as I}from"./DateInput-B6EOHEyS.js";import{F as T}from"./FieldGroup-CU0O-JpF.js";import{I as G}from"./InputGroup-CuTPsFU2.js";import{S as A}from"./Search-DNgN5qdx.js";import{S as h}from"./Select-IY7aTh-Y.js";import{T as v}from"./TextArea-BrUSSMjf.js";import{T as C}from"./TextInput-8FSg82MH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D9NnWShw.js";import"./Button-tNdC8uhg.js";import"./usePreviousValue-CFHszDuJ.js";import"./Loader-DSxBMOP6.js";import"./useDelayedRender-B0VUcnao.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BV6BdQbq.js";import"./IconButton-tEhhKjpE.js";import"./CloseIcon-BuoMUlCl.js";import"./SearchIcon-BIgtL_yh.js";import"./PopupTip-DMpzWAKC.js";import"./QuestionIcon-BQ44xSRe.js";import"./TooltipTrigger-DKAUxEk6.js";import"./floating-ui.react-csUnX0pO.js";import"./index-Cmc2hI1W.js";import"./index-B2-elW0Q.js";import"./TooltipContent-Btxh7lF6.js";import"./useBrowserPreferences-C8x3m3YM.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-DhMoJ0UC.js";import"./Checkbox-C8TT1tj1.js";import"./RadioButton.stories-Dn0LdKSg.js";import"./RadioButton-DI2eiBhT.js";import"./SupportLabel-B1Q9_Ai7.js";import"./SuccessIcon-CM_pQSDj.js";import"./WarningIcon-DagbCNzO.js";import"./BaseRadioButton-DAcZUZao.js";import"./BaseRadioButton.stories-BYehcocz.js";import"./CheckboxPanel.stories-BKgszND-.js";import"./InputPanel-fQ2JrfZo.js";import"./Flex-DXgRj_RO.js";import"./SlotComponent-yzNv9ntj.js";import"./mergeRefs-DU_-6hD9.js";import"./RadioPanel.stories-DY9TlWfB.js";import"./RadioPanel-DugA-SHP.js";import"./Title-DcCIQ10L.js";import"./Card-mIWygaZK.js";import"./Text-C7WQDxJ_.js";import"./Tag-DXyEWjg6.js";import"./ExpandablePanel-D3qRyJC4.js";import"./useAnimatedHeightBetween-D3zKAzgX.js";import"./tokens-CW-NfdIE.js";import"./Expander-CSQBf0Mm.js";import"./ChevronUpIcon-BaX_kUk2.js";import"./ListItem-CR2MGq6X.js";import"./BaseTextInput-GlKmlwj9.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DL_L5mb6.js";import"./index.esm-pE36E7Ia.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BCZLAjx_.js";import"./useListNavigation-DNepErDL.js";import"./Chip-BuO4CSxd.js";import"./CheckIcon-CZufBerx.js";import"./ArrowVerticalAnimated--DYuFSEb.js";import"./ArrowDownIcon-BMRkAmcl.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CHqbV6C1.js";import"./TableCaption-Dj7ctJcn.js";import"./tableContext-2AIMcFVo.js";import"./CalendarIcon-Bz2Wyf3s.js";import"./Label-ChzpXHc6.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-C0Y3wDi7.js";import{H as o}from"./Help-CcFQ2gKs.js";import"./Help.stories-8ppd3fb_.js";import{A as c,m as d}from"./Autosuggest.stories-jV6njn2w.js";import g,{ComboboxStory as x}from"./Combobox.stories-CGgC5LZA.js";import H from"./FieldGroup.stories-D59Hfc2G.js";import b from"./InputGroup.stories-E4AQG28b.js";import S from"./select.stories-CHdZa1Yl.js";import j from"./TextArea.stories-4QKH6BxP.js";import{C as f}from"./Combobox-_xU9HYoY.js";import{D as I}from"./DateInput-Czq70h25.js";import{F as T}from"./FieldGroup-6RGKZePZ.js";import{I as G}from"./InputGroup-MiJwr0ha.js";import{S as A}from"./Search-saCwGyO4.js";import{S as h}from"./Select-BzQ2RykI.js";import{T as v}from"./TextArea-B2C9UZPW.js";import{T as C}from"./TextInput-CFAvTFLH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-4PG1SCb5.js";import"./Button-BiZnIxWg.js";import"./usePreviousValue-QBpXuitz.js";import"./Loader-B9LEv4j-.js";import"./useDelayedRender-CGH0l5Yp.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BIT4_iZo.js";import"./IconButton-C8E5GPbO.js";import"./CloseIcon-BzXdmhMr.js";import"./SearchIcon-3CdvvbkC.js";import"./PopupTip-CpkiRilx.js";import"./QuestionIcon-BLO14eXU.js";import"./TooltipTrigger-yT-2AhBJ.js";import"./floating-ui.react-Cy6xqTds.js";import"./index-DnfBHDQ6.js";import"./index-u6fvgp02.js";import"./TooltipContent-2zxC0x2R.js";import"./useBrowserPreferences-DG8kGfYd.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-wMqzCcpM.js";import"./InputPanel-DkHgHjxj.js";import"./Checkbox-4nJB5Dhr.js";import"./RadioButton-BVDeYcyo.js";import"./SupportLabel-Dr52jW1z.js";import"./SuccessIcon-fZcXy8Dn.js";import"./WarningIcon-pwXlUoGO.js";import"./BaseRadioButton-B_snwjrs.js";import"./Flex-CSX-uLWZ.js";import"./SlotComponent-98n-jNbl.js";import"./mergeRefs-B2XQxXrA.js";import"./Checkbox.stories-ARgzpHqe.js";import"./RadioButton.stories-Xr7XHatb.js";import"./BaseRadioButton.stories-BvNHJgvx.js";import"./RadioPanel.stories-BMc5e_Ae.js";import"./RadioPanel-zMozWGDc.js";import"./Title-9Mwq8PkY.js";import"./Card-CN8f1okb.js";import"./Text-5GOkSThw.js";import"./Tag-BEt9-ptX.js";import"./ExpandablePanel-CgSvEtjU.js";import"./useAnimatedHeightBetween-CxqU92e7.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CGEJMxNR.js";import"./ChevronUpIcon-x1g5Q8qI.js";import"./ListItem-CAivnTWI.js";import"./BaseTextInput-CdjaXMkT.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DXFdm_sJ.js";import"./index.esm-DDEb0rzw.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-ltHynri0.js";import"./useListNavigation-OO9TIHnd.js";import"./Chip-IhFN7M9s.js";import"./CheckIcon-CsvQW2J4.js";import"./ArrowVerticalAnimated-CMaQZQnP.js";import"./ArrowDownIcon-yJEFrX1M.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-D30ytlkj.js";import"./TableCaption-BJ3wagE8.js";import"./tableContext-B7Vh0CPr.js";import"./CalendarIcon-C7gBx_1s.js";import"./Label-Dg5qriYV.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

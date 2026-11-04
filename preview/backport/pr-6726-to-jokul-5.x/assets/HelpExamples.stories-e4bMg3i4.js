import{j as r}from"./iframe-DnPksqQY.js";import{H as o}from"./Help-BLOzfgAU.js";import"./Help.stories-BCy-sn0z.js";import{A as c,m as d}from"./Autosuggest.stories-BjClvXel.js";import g,{ComboboxStory as x}from"./Combobox.stories-CRf6tkyy.js";import S from"./FieldGroup.stories-BN-V8yN8.js";import H from"./InputGroup.stories-B8TXmXSD.js";import b,{SelectStory as j}from"./select.stories-o2ecNlkl.js";import f from"./TextArea.stories-BqNMBvoR.js";import{C as T}from"./Combobox-Cl1IahL1.js";import{D as k}from"./DatePicker-FzJJdzbP.js";import{F as G}from"./FieldGroup-BEAxHlzf.js";import{I}from"./InputGroup-ciuHJZ3T.js";import{S as A}from"./Search-BKDhL9EG.js";import{S as h}from"./Select-Dm4hyKa-.js";import{T as F}from"./TextArea-C_V2CQNx.js";import{T as v}from"./TextInput-BmBd28iv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-NSBMx9J8.js";import"./Button-PDQxU0BG.js";import"./usePreviousValue-CCR_n0k_.js";import"./Loader-aeE-Wa29.js";import"./useDelayedRender-CTM14jLN.js";import"./index-Chjiymov.js";import"./useId-wOffNkIQ.js";import"./IconButton-C5Taye74.js";import"./CloseIcon-CBHUGqmi.js";import"./SearchIcon-DGgJw5D-.js";import"./PopupTip-CklObOpO.js";import"./QuestionIcon-Llzl2ceu.js";import"./TooltipTrigger-Df6HJuaQ.js";import"./floating-ui.react-DtI_Jn8Z.js";import"./index-BXJ-Jznz.js";import"./index-CMyjr3Fy.js";import"./TooltipContent-B9THrYEz.js";import"./useBrowserPreferences-C_Eb2LAy.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-1Ot5O30i.js";import"./InputPanel-BU1ndDeC.js";import"./Checkbox-D9YRE4sq.js";import"./RadioButton-ByoZePMa.js";import"./SupportLabel-w8GocdPi.js";import"./SuccessIcon-CXZ-EGdn.js";import"./WarningIcon-zzN2vqr5.js";import"./BaseRadioButton-DNnTllT_.js";import"./Flex-D0V1C2Oo.js";import"./SlotComponent-B57yDTAW.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-zh4TJDkR.js";import"./RadioButton.stories-CeeoaoX8.js";import"./BaseRadioButton.stories-BIcUaQ9v.js";import"./RadioPanel.stories-CY-33yb_.js";import"./RadioPanel-CJXWS8mD.js";import"./Title-C6MXiqst.js";import"./Card-DWlGfm4-.js";import"./Text-hl521JYw.js";import"./Tag-BBdbijmn.js";import"./ExpandablePanel-BFvjMDWB.js";import"./useAnimatedHeightBetween-Ds2KFtjG.js";import"./tokens-CW-NfdIE.js";import"./Expander-B-tEbpiP.js";import"./ChevronDownIcon-DUhz7ZZp.js";import"./ChevronUpIcon-CMpz4Mc_.js";import"./ListItem-DOEyuzly.js";import"./BaseTextInput-O6EAUNdi.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-K0raasdo.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-DeP9YRn3.js";import"./useListNavigation-DXv8WJWy.js";import"./Chip-B14422hI.js";import"./CheckIcon-CJux5KIi.js";import"./ArrowVerticalAnimated-BUgAQreH.js";import"./ArrowDownIcon-fTSublxP.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-BrlqMPbI.js";import"./Popover-Dd-uLt_P.js";import"./ArrowRightIcon-CVY1mRC-.js";import"./Label-Dxyvup6o.js";import"./valuePair-Bn6SadUn.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(k,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(T,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(F,{...f.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(I,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})},ie=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Date Picker",
  render: args => {
    return <DatePicker label={"Navn"} tooltip={<Help {...args} />} />;
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
    return <Select {...SelectStories.args} {...SelectStory.args} name="select" label="Hva jobber du som?" items={[]} tooltip={<Help {...args} />} />;
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
}`,...u.parameters?.docs?.source}}};export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDatePicker,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};

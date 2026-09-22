import{j as r}from"./iframe-ConuVp4c.js";import{H as o}from"./Help-tts8lHL4.js";import"./Help.stories-DZUI3BNz.js";import{A as c,m as d}from"./Autosuggest.stories-WuwfXzFZ.js";import g,{ComboboxStory as x}from"./Combobox.stories-Dl0-Fg9G.js";import H from"./FieldGroup.stories-IQaA3awX.js";import b from"./InputGroup.stories-CS7p-x7i.js";import S from"./select.stories-BzU1h38I.js";import j from"./TextArea.stories-BG9HrZam.js";import{C as f}from"./Combobox-BkQDS9gI.js";import{D as I}from"./DateInput-B1rJHNBT.js";import{F as T}from"./FieldGroup-BTlFRKwV.js";import{I as G}from"./InputGroup-DYmjts2c.js";import{S as A}from"./Search-B0j5ye81.js";import{S as h}from"./Select-gyovIz1F.js";import{T as v}from"./TextArea-m7Xj8-5W.js";import{T as C}from"./TextInput-r5MX3Utk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DbXTBHUo.js";import"./Button-Cg9lS_ZE.js";import"./usePreviousValue-bTzS6NZh.js";import"./Loader-SlVYOWgL.js";import"./useDelayedRender-DvsgWYMW.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BU8mB7Vl.js";import"./IconButton-_sf4L8Qt.js";import"./CloseIcon-CwHRWgub.js";import"./SearchIcon-CA6ceBH4.js";import"./PopupTip-BkC5bcR3.js";import"./QuestionIcon-DWtUQV4Y.js";import"./TooltipTrigger-NPIh9aJD.js";import"./floating-ui.react-aR3cu7BA.js";import"./index-DWIhN4p4.js";import"./index-CYFTiQLb.js";import"./TooltipContent-opVVxYaW.js";import"./useBrowserPreferences-BGmdYO4C.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DDRQ7cer.js";import"./InputPanel-BqtSpfuO.js";import"./Checkbox-XQtro9mH.js";import"./RadioButton-Cnv6j9iG.js";import"./SupportLabel-CYmL6leB.js";import"./SuccessIcon-CRlriY24.js";import"./WarningIcon-WCqs-vqM.js";import"./BaseRadioButton-DnKrnj3P.js";import"./Flex-CEJ1nrPN.js";import"./SlotComponent-BI1jSRyQ.js";import"./mergeRefs-CaXPicPQ.js";import"./Checkbox.stories-grAEBMlV.js";import"./RadioButton.stories-DOrzO1JD.js";import"./BaseRadioButton.stories-BaaaYWUb.js";import"./RadioPanel.stories-CBYynXTF.js";import"./RadioPanel-dHa4Xn-L.js";import"./Title-D7z0JHIH.js";import"./Card-D3bGNRa9.js";import"./Text-BACOFemI.js";import"./Tag-DX1m1JK8.js";import"./ExpandablePanel-YF2AnaHo.js";import"./useAnimatedHeightBetween-DjFxrKxq.js";import"./tokens-HKQN8Vn-.js";import"./Expander-B8a1Xvt9.js";import"./ChevronUpIcon-Dl-mRA34.js";import"./ListItem-CYVfYoio.js";import"./BaseTextInput-CQUsijjO.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CJ9QicHm.js";import"./index.esm-CKGciFxi.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-ioluqIMc.js";import"./useListNavigation-BlHbIaC3.js";import"./Chip-CiZQhAjw.js";import"./CheckIcon-BxlxSXDq.js";import"./ArrowVerticalAnimated-BHT6dDv8.js";import"./ArrowDownIcon-CuiJYxz-.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BiJQri6q.js";import"./TableCaption-CJJCmN51.js";import"./tableContext-Bvvpr_AQ.js";import"./CalendarIcon-qoiKXklA.js";import"./Label-lqNFCtL5.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

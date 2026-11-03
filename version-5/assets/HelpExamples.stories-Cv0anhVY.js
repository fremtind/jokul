import{j as r}from"./iframe-CKVt722I.js";import{H as o}from"./Help-C9FmEYqz.js";import"./Help.stories-0786vHWe.js";import{A as c,m as d}from"./Autosuggest.stories-BiOaMKXl.js";import g,{ComboboxStory as x}from"./Combobox.stories-eKQLSXHe.js";import S from"./FieldGroup.stories-CFWKBM4f.js";import H from"./InputGroup.stories-QKhUTVWB.js";import b,{SelectStory as j}from"./select.stories-DDolE052.js";import f from"./TextArea.stories-BYFn98St.js";import{C as T}from"./Combobox-bImtSHJ8.js";import{D as k}from"./DatePicker-fismHxaU.js";import{F as G}from"./FieldGroup-Cn6k31-9.js";import{I}from"./InputGroup-CAsu_5VY.js";import{S as A}from"./Search-BHDz_upb.js";import{S as h}from"./Select-BBnqmCC1.js";import{T as F}from"./TextArea-BKlYtX_T.js";import{T as v}from"./TextInput-D4j7v5f9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D8CVEmzD.js";import"./Button-sqaY-zUa.js";import"./usePreviousValue-DUALEIYt.js";import"./Loader-DZD5UyAz.js";import"./useDelayedRender-Cs4WMokj.js";import"./index-Chjiymov.js";import"./useId-Bq5viX2P.js";import"./IconButton-CQyN-WtV.js";import"./CloseIcon-RUtjzFIq.js";import"./SearchIcon-CpMbN3xe.js";import"./PopupTip-DF2S3Iga.js";import"./QuestionIcon-9PTnY7Gd.js";import"./TooltipTrigger-ElosSZo5.js";import"./floating-ui.react-C5i3ztKD.js";import"./index-CI_oZK1B.js";import"./index-P1EFiiTL.js";import"./TooltipContent-YYZpefO2.js";import"./useBrowserPreferences-DHptwcDD.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-D_ieDinx.js";import"./InputPanel-DfkmO9U4.js";import"./Checkbox-38Elfahm.js";import"./RadioButton-BH26btRb.js";import"./SupportLabel-BRyq9M8s.js";import"./SuccessIcon-CR9l8rRS.js";import"./WarningIcon-B8zyywpE.js";import"./BaseRadioButton-BA51dVIx.js";import"./Flex-DtGi11Ds.js";import"./SlotComponent-Bznce0-G.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-KTJMRI7q.js";import"./RadioButton.stories-Cf1c4cBp.js";import"./BaseRadioButton.stories-CUBAPgvY.js";import"./RadioPanel.stories-BE_Zegl3.js";import"./RadioPanel-DrEU2c8c.js";import"./Title-CDIpaUwK.js";import"./Card-CnRHT6o0.js";import"./Text-CQaL9l4r.js";import"./Tag-D7XmWI_1.js";import"./ExpandablePanel-M-bAU0aT.js";import"./useAnimatedHeightBetween-tgtP0OeK.js";import"./tokens-CW-NfdIE.js";import"./Expander-B8dAZ8U7.js";import"./ChevronDownIcon-DdGDEi7B.js";import"./ChevronUpIcon-BDEK_3Od.js";import"./ListItem-Cgymiec3.js";import"./BaseTextInput-pvl8snnm.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BW0dx95Y.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-DBA0vE4z.js";import"./useListNavigation-BfbbWj0S.js";import"./Chip-D2-NwdK7.js";import"./CheckIcon-CL0-PV1u.js";import"./ArrowVerticalAnimated-D03jz8qb.js";import"./ArrowDownIcon-vJsa7_1S.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-BgPlctL3.js";import"./Popover-rdm9tF7F.js";import"./ArrowRightIcon-FmHmrKeN.js";import"./Label-CEkw0Pdg.js";import"./valuePair-Bn6SadUn.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(k,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(T,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(F,{...f.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(I,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})},ie=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

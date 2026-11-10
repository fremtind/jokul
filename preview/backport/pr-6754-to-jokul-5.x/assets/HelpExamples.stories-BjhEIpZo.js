import{j as r}from"./iframe-DEs6YADE.js";import{H as o}from"./Help-CfstW7X6.js";import"./Help.stories-DZzud51e.js";import{A as c,m as d}from"./Autosuggest.stories-BXDrNYqs.js";import g,{ComboboxStory as x}from"./Combobox.stories-BddZPYYS.js";import S from"./FieldGroup.stories-97lN9WGf.js";import H from"./InputGroup.stories-D5wx6rea.js";import b,{SelectStory as j}from"./select.stories-CPs7vE7U.js";import f from"./TextArea.stories-fs6_wmGe.js";import{C as T}from"./Combobox-C3CBDJ-F.js";import{D as k}from"./DatePicker-D0eTPmrP.js";import{F as G}from"./FieldGroup-B_Bp7kU4.js";import{I}from"./InputGroup-DNAbcwkF.js";import{S as A}from"./Search-CXflehSp.js";import{S as h}from"./Select-BU2T-Jh9.js";import{T as F}from"./TextArea--KRCGKp0.js";import{T as v}from"./TextInput-TeiijJ7Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BNZMkMg-.js";import"./Button-CT1x9DUo.js";import"./usePreviousValue-5KkKKKgr.js";import"./Loader-CwJ5OFSm.js";import"./useDelayedRender-R_OYw0EE.js";import"./index-Chjiymov.js";import"./useId-TnKhD2lu.js";import"./IconButton-CafA1uyd.js";import"./CloseIcon-2u1QizVa.js";import"./SearchIcon-BbAvGEHy.js";import"./PopupTip-DT0fUmFM.js";import"./QuestionIcon-BQbp0gN-.js";import"./TooltipTrigger-DbUNtxFf.js";import"./floating-ui.react-CmrViYu-.js";import"./index-YRW8sBoW.js";import"./index-XZlU7sjc.js";import"./TooltipContent-Dq50x630.js";import"./useBrowserPreferences-B1X51dlc.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CbeY1cvK.js";import"./InputPanel-AF7hR-px.js";import"./Checkbox-BhUYwjEi.js";import"./RadioButton-CETkUQy-.js";import"./SupportLabel-CB_CLwp6.js";import"./SuccessIcon-BsHmD4L8.js";import"./WarningIcon-BqsL-VR0.js";import"./BaseRadioButton-DUqDoZgq.js";import"./Flex-DU0QtDQ_.js";import"./SlotComponent-CmDioNHK.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-CMizHcUo.js";import"./RadioButton.stories-DrTFhu1_.js";import"./BaseRadioButton.stories-D_D0ykxi.js";import"./RadioPanel.stories-BEP_DwkI.js";import"./RadioPanel-Cu5QVeGC.js";import"./Title-Byg6S49t.js";import"./Card-3j4Ryjjo.js";import"./Text-CSFVICIo.js";import"./Tag-CH4DKNBk.js";import"./ExpandablePanel-1ZBOAfit.js";import"./useAnimatedHeightBetween-C0Z1ApW-.js";import"./tokens-CW-NfdIE.js";import"./Expander-C3D36dfh.js";import"./ChevronDownIcon-g8ebhTW9.js";import"./ChevronUpIcon-B3fSpYeo.js";import"./ListItem-BKlNWEG3.js";import"./BaseTextInput-BHYVtVjG.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DgLWYbR0.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-DZg7T9uL.js";import"./useListNavigation-Rq_Zuzl7.js";import"./Chip-hxYJUe2N.js";import"./CheckIcon-KqNblQ-3.js";import"./ArrowVerticalAnimated-DjZ6eU-D.js";import"./ArrowDownIcon-BzXT66na.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-DjScVqf3.js";import"./Popover-D1ANkphw.js";import"./ArrowRightIcon-DRbIUyQc.js";import"./Label-Bq-yY8_D.js";import"./valuePair-Bn6SadUn.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(k,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(T,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(F,{...f.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(I,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})},ie=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

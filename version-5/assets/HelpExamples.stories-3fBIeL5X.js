import{j as r}from"./iframe-BLABJ3iD.js";import{H as o}from"./Help-C7Q42FF3.js";import"./Help.stories-Xvz2jYFs.js";import{A as c,m as d}from"./Autosuggest.stories-CLQmnW-o.js";import g,{ComboboxStory as x}from"./Combobox.stories-D2nuErdw.js";import S from"./FieldGroup.stories-BY735j1E.js";import H from"./InputGroup.stories-yvKJg1fZ.js";import b,{SelectStory as j}from"./select.stories-D1G52KsM.js";import f from"./TextArea.stories-DVpMBZPk.js";import{C as T}from"./Combobox-uqimrC3M.js";import{D as k}from"./DatePicker-Bpz8vTiX.js";import{F as G}from"./FieldGroup-Cmkj36s5.js";import{I}from"./InputGroup-CLxRYWAm.js";import{S as A}from"./Search-JqIPYcM-.js";import{S as h}from"./Select-BSQIQ3au.js";import{T as F}from"./TextArea-6MzHmjOp.js";import{T as v}from"./TextInput-G5j6R5zM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D8XFtDiR.js";import"./Button-BJxOhhJD.js";import"./usePreviousValue-CcUaPHlR.js";import"./Loader-Cuyz55I5.js";import"./useDelayedRender-CLCUedrq.js";import"./index-Chjiymov.js";import"./useId-NvNCEdLm.js";import"./IconButton-BbvymwOi.js";import"./CloseIcon-CHhyjM4w.js";import"./SearchIcon-CzXi_Zne.js";import"./PopupTip-oDPOaign.js";import"./QuestionIcon-CVnvEjUL.js";import"./TooltipTrigger-dl1n0Ag8.js";import"./floating-ui.react-Dm8sYSF6.js";import"./index-BbgE8avy.js";import"./index-kKBft4FE.js";import"./TooltipContent-C0ZKNxre.js";import"./useBrowserPreferences-fDr6ELdn.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-_EemcLwV.js";import"./InputPanel-3v73h5X4.js";import"./Checkbox-TCpNDMEW.js";import"./RadioButton-B__QtOwH.js";import"./SupportLabel-MrAnXVUt.js";import"./SuccessIcon-BgtLAz9o.js";import"./WarningIcon-EM5ZCrHi.js";import"./BaseRadioButton-D9e5pcDN.js";import"./Flex-BYwY84qO.js";import"./SlotComponent-lFNk34b4.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-CEO4fX1h.js";import"./RadioButton.stories-ByFAxJ8D.js";import"./BaseRadioButton.stories-DkuhARJI.js";import"./RadioPanel.stories-DBWCdgFZ.js";import"./RadioPanel-B_FISOi9.js";import"./Title-B34-l2Nb.js";import"./Card-CD6V5QGP.js";import"./Text-BYzh2cav.js";import"./Tag-KMDhZbxF.js";import"./ExpandablePanel-CkvAur29.js";import"./useAnimatedHeightBetween-BY59Jv8f.js";import"./tokens-CW-NfdIE.js";import"./Expander-D--Gu_u-.js";import"./ChevronDownIcon-CMe4KqJh.js";import"./ChevronUpIcon-BAzj7pfc.js";import"./ListItem-BWhwR-nJ.js";import"./BaseTextInput-CB7XnXcU.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BoX5eE9H.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-CdTZJje1.js";import"./useListNavigation-Ce5ZPvpg.js";import"./Chip-DeErg4uQ.js";import"./CheckIcon-BGMGYsmN.js";import"./ArrowVerticalAnimated-ChKOs27v.js";import"./ArrowDownIcon-BIwXDOe1.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-BK_FGl6Q.js";import"./Popover-BSJJLlVG.js";import"./ArrowRightIcon-ipnapFBr.js";import"./Label-D-2eToUe.js";import"./valuePair-Bn6SadUn.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(k,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(T,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(F,{...f.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(I,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})},ie=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

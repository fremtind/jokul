import{j as r}from"./iframe-BPDBDSZd.js";import{H as o}from"./Help-D7CiSVTk.js";import"./Help.stories-zSvgg-Jx.js";import{A as c,m as d}from"./Autosuggest.stories-CrLI5nNx.js";import g,{ComboboxStory as x}from"./Combobox.stories-ROzhAd08.js";import H from"./FieldGroup.stories-BoEb5yie.js";import b from"./InputGroup.stories-B8ZgK-zt.js";import S from"./select.stories-DMnfzaeF.js";import j from"./TextArea.stories-Bnwp3Aw7.js";import{C as f}from"./Combobox-DnX8a2eD.js";import{D as I}from"./DateInput-DhXwWpYq.js";import{F as T}from"./FieldGroup-BCnkko5i.js";import{I as G}from"./InputGroup-hE_-B-jb.js";import{S as A}from"./Search-BDgBM5Ib.js";import{S as h}from"./Select-BddBF6HB.js";import{T as v}from"./TextArea-CtnVQcvv.js";import{T as C}from"./TextInput-BXonUCmP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CTyq0hst.js";import"./Button-B4VKDnUC.js";import"./usePreviousValue-C82w6f0n.js";import"./Loader--gk4K4B0.js";import"./useDelayedRender-CyiARD8C.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-VjG_-abN.js";import"./IconButton-DOAm9r5I.js";import"./CloseIcon-B7hw_vJa.js";import"./SearchIcon-CDReL2Cz.js";import"./PopupTip-CxSkBxZ3.js";import"./QuestionIcon-CNCQh5Xc.js";import"./TooltipTrigger-DwgFVBQ7.js";import"./floating-ui.react-C-pO-xu2.js";import"./index-LCTRqod2.js";import"./index-BcLpFwBX.js";import"./TooltipContent-Cq07jdzb.js";import"./useBrowserPreferences-B_-E2XHB.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CDLJQZRc.js";import"./InputPanel-DzujB0yg.js";import"./Checkbox-Chn-BIx7.js";import"./RadioButton--QNJBwlG.js";import"./SupportLabel-c09phDRK.js";import"./SuccessIcon-BoYUFLX5.js";import"./WarningIcon-DnldtVax.js";import"./BaseRadioButton-DXag9LzA.js";import"./Flex-CuB7FlOE.js";import"./SlotComponent-nhhI2t7R.js";import"./mergeRefs-DeruHcJ6.js";import"./Checkbox.stories-oFpE7wZI.js";import"./RadioButton.stories-oApTmctk.js";import"./BaseRadioButton.stories-C8zzNHaa.js";import"./RadioPanel.stories-DHNBMukB.js";import"./RadioPanel-DzQlZWIS.js";import"./Title-Bks-UBRq.js";import"./Card-DCUBu4sL.js";import"./Text-B4Z3toJD.js";import"./Tag-CVRi1JH1.js";import"./ExpandablePanel-CyFGXxTF.js";import"./useAnimatedHeightBetween-C-b4nIn1.js";import"./tokens-HKQN8Vn-.js";import"./Expander-u1Q1Us1B.js";import"./ChevronUpIcon-CxCsT7Sj.js";import"./ListItem-CRcfPmd2.js";import"./BaseTextInput-CM53aeOe.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CgIQEumo.js";import"./index.esm-CSzDxkBa.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DuedF6GS.js";import"./useListNavigation-Bcq31QfO.js";import"./Chip-DroWxNr8.js";import"./CheckIcon-VHCkZS1a.js";import"./ArrowVerticalAnimated-CzXdVtB7.js";import"./ArrowDownIcon-DI6Bi69s.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BEkzBA7Q.js";import"./TableCaption-OJooHfVL.js";import"./tableContext-CfmZRa4Y.js";import"./CalendarIcon--0fgkEaH.js";import"./Label-CoLeSM6P.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

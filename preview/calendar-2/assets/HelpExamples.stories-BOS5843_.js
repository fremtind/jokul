import{j as r}from"./iframe-CyrJbBlo.js";import{H as t}from"./Help-CUIaM9ZZ.js";import"./Help.stories-DgjjhCeK.js";import{A as c,m as d}from"./Autosuggest.stories-BoupP1Wf.js";import g,{ComboboxStory as x}from"./Combobox.stories-Co7fBY4G.js";import S from"./FieldGroup.stories-B1u-8_bL.js";import H from"./InputGroup.stories-DA2LjvsU.js";import b,{SelectStory as j}from"./select.stories-OustztDO.js";import f from"./TextArea.stories-CVQHdOYU.js";import{C as I}from"./Combobox-pdGezTWb.js";import{D as T}from"./DateInput-odadLREs.js";import{F as G}from"./FieldGroup-DDMfY21Q.js";import{I as A}from"./InputGroup-DI6lz_u7.js";import{S as h}from"./Search-JdfV0ZD4.js";import{S as v}from"./Select-Bm4hI3-r.js";import{T as C}from"./TextArea-TYTq1iAw.js";import{T as F}from"./TextInput-Lpam6-ZD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BYjPRixs.js";import"./Button-B-DtqlXv.js";import"./usePreviousValue-DInnFQmh.js";import"./Loader-C0s6KtRr.js";import"./useDelayedRender-C6CUE9CL.js";import"./index-Chjiymov.js";import"./useId-neBOdzM_.js";import"./IconButton-DnQdPQPa.js";import"./CloseIcon-cjXE320A.js";import"./SearchIcon-WbMqQ1au.js";import"./PopupTip-kzqrdcAY.js";import"./QuestionIcon-CV8avzw0.js";import"./TooltipTrigger-D3EOWFz2.js";import"./floating-ui.react-D2YsYY9n.js";import"./index-BklK6Omg.js";import"./index-GWBIzFTr.js";import"./TooltipContent-T9DCWMj0.js";import"./useBrowserPreferences-BFi-4lji.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-B8SBZZ8g.js";import"./Checkbox-BJ4gfYsQ.js";import"./RadioButton.stories-DhrhHH7O.js";import"./RadioButton-C67WzjJV.js";import"./SupportLabel-dJKsD1aS.js";import"./SuccessIcon-Cw02K339.js";import"./WarningIcon-CQqoM3EL.js";import"./BaseRadioButton-BtKSxHwA.js";import"./BaseRadioButton.stories-r6_a0Atw.js";import"./CheckboxPanel.stories-DtM8A8Qc.js";import"./InputPanel-DOOGSILc.js";import"./Flex-Byj1CJ6K.js";import"./SlotComponent-CUzbrRlE.js";import"./mergeRefs-CT5vwrg5.js";import"./RadioPanel.stories-CnJUO_y2.js";import"./RadioPanel-Uz4-f4Zc.js";import"./Title-DMVODo0Y.js";import"./Card-wII7D4i5.js";import"./Text-Byii7RZs.js";import"./Tag-CPbFqJo2.js";import"./ExpandablePanel-CFLZifqp.js";import"./useAnimatedHeightBetween-BiPMLZ4V.js";import"./tokens-CW-NfdIE.js";import"./Expander-COL64hw1.js";import"./ChevronUpIcon--gGswejP.js";import"./ListItem-BrcHPBEs.js";import"./BaseTextInput-DZdmgjSi.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BcVgRF4T.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-xlBmrL5H.js";import"./useListNavigation-wFt5InMm.js";import"./Chip-179yakP4.js";import"./CheckIcon-BX49yx6K.js";import"./ArrowVerticalAnimated-DK4EbfDk.js";import"./ArrowDownIcon-D6ZHvxPf.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-DyHQ2Tcs.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-rqK0k60M.js";import"./TableCaption-Dj2b3k2H.js";import"./tableContext-CeJ6gmHv.js";import"./CalendarIcon-ClOnpxeo.js";import"./Label-BemHmtrl.js";import"./Popover-DRTNUJ7h.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ue=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,o as HelpTextInput,ue as __namedExportsOrder,le as default};

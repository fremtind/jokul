import{j as r}from"./iframe-DQUDbCoN.js";import{H as t}from"./Help-hkVD4QDf.js";import"./Help.stories-BYQWS_KT.js";import{A as c,m as d}from"./Autosuggest.stories-D9UmEkKe.js";import g,{ComboboxStory as x}from"./Combobox.stories-Bwzeg2YK.js";import S from"./FieldGroup.stories-dB2twQ3S.js";import H from"./InputGroup.stories-DvhjEnAQ.js";import b,{SelectStory as j}from"./select.stories-Dx4zviyq.js";import f from"./TextArea.stories-B-93_gMb.js";import{C as I}from"./Combobox-B_4Egkha.js";import{D as T}from"./DateInput-2wzTDpef.js";import{F as G}from"./FieldGroup-pjO5PstP.js";import{I as A}from"./InputGroup-Dpjnb4UN.js";import{S as h}from"./Search-aTLu56a4.js";import{S as v}from"./Select-DWjZQTks.js";import{T as C}from"./TextArea-Dc_JQXBU.js";import{T as F}from"./TextInput-DD9r5BeW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BizY6quD.js";import"./Button-CDLG3dM-.js";import"./usePreviousValue-DMkgRIJf.js";import"./Loader-jukOASqX.js";import"./useDelayedRender-DkUq9VJl.js";import"./index-Chjiymov.js";import"./useId-DQ9J6z34.js";import"./IconButton-XLZDQ4KZ.js";import"./CloseIcon-BIZveHld.js";import"./SearchIcon-BJInwqn3.js";import"./PopupTip-DpPhSUNq.js";import"./QuestionIcon-CBjw0yWX.js";import"./TooltipTrigger-Cr-7RSgO.js";import"./floating-ui.react-DtGwjwgI.js";import"./index-Cr0Gabs8.js";import"./index-CnL2-5wq.js";import"./TooltipContent-ZwLeMYKG.js";import"./useBrowserPreferences-B1Q8nB_Y.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-CZdKZhIh.js";import"./Checkbox-Cvy2q5yH.js";import"./RadioButton.stories-BJeqo7PW.js";import"./RadioButton-BY6KM3oJ.js";import"./SupportLabel-Cfz-xF7B.js";import"./SuccessIcon-BO9Ft9aW.js";import"./WarningIcon-OFjcIXeu.js";import"./BaseRadioButton-5y0Fog6R.js";import"./BaseRadioButton.stories-DKHy815Q.js";import"./CheckboxPanel.stories-Crbe42h9.js";import"./InputPanel-DQ4Dyo-h.js";import"./Flex-CJNaDuqK.js";import"./SlotComponent-B2GT7XWY.js";import"./mergeRefs-oT5GhjUE.js";import"./RadioPanel.stories-CBb80s9N.js";import"./RadioPanel-DmujoLRS.js";import"./Title-DUyaqa9s.js";import"./Card-DwwDPK-C.js";import"./Text-x3EkVC0_.js";import"./Tag-BilbDlGR.js";import"./ExpandablePanel-BYrGWPUR.js";import"./useAnimatedHeightBetween-DuG__Em0.js";import"./tokens-CW-NfdIE.js";import"./Expander-ClvhiQon.js";import"./ChevronUpIcon-7V-u13Rx.js";import"./ListItem-w0KCigbb.js";import"./BaseTextInput-BuoKTODW.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CP9zoGol.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-Z6ubuTi2.js";import"./useListNavigation-Bb4Ojavu.js";import"./Chip-DPIDT256.js";import"./CheckIcon-CAqoJOlD.js";import"./ArrowVerticalAnimated-CrWk6lGy.js";import"./ArrowDownIcon-DImDmYw9.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-BZ7G4y3s.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-DCMJgxL7.js";import"./TableCaption-CrXsVm68.js";import"./tableContext-DmG081xp.js";import"./CalendarIcon-DX1T_tlc.js";import"./Label-DR8RTLzT.js";import"./Popover-C_dt6Sh4.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

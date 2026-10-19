import{j as r}from"./iframe-BpMAOOay.js";import{H as o}from"./Help-kL64redQ.js";import"./Help.stories-D1TvCnAV.js";import{A as c,m as d}from"./Autosuggest.stories-wNcr0UyQ.js";import g,{ComboboxStory as x}from"./Combobox.stories-Bic4Y1_Y.js";import H from"./FieldGroup.stories-vBgPVdP2.js";import b from"./InputGroup.stories-DNUUX1Lr.js";import S from"./select.stories-BT4Pj16t.js";import j from"./TextArea.stories-CEOhhQTP.js";import{C as f}from"./Combobox-BzAaX4gx.js";import{D as I}from"./DateInput-BtdefzFp.js";import{F as T}from"./FieldGroup-CoA5FIL5.js";import{I as G}from"./InputGroup-yCG5p2xF.js";import{S as A}from"./Search-DYGN1mP6.js";import{S as h}from"./Select-BjMNEc0u.js";import{T as v}from"./TextArea-gkfR7_Ja.js";import{T as C}from"./TextInput-D1bE5m4d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BOeDsiIE.js";import"./Button-B-Y2dyyr.js";import"./usePreviousValue-BA6l5tvX.js";import"./Loader-bG_0gSLb.js";import"./useDelayedRender-DsJ84E5w.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-D3GDJ60I.js";import"./IconButton-BU53ymdq.js";import"./CloseIcon-DT2R0JQn.js";import"./SearchIcon-Bz4cVzJG.js";import"./PopupTip-CEyUwEtL.js";import"./QuestionIcon-Bo0iGeo8.js";import"./TooltipTrigger-C8D2aoms.js";import"./floating-ui.react-TcA0cXLh.js";import"./index-f9q3trir.js";import"./index-UcaWO6EB.js";import"./TooltipContent-BDg8iaUk.js";import"./useBrowserPreferences-c7jzJX8H.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-Bi9a42ik.js";import"./InputPanel-DbER9jxR.js";import"./Checkbox-3Z7xVQGN.js";import"./RadioButton-D-OOW65h.js";import"./SupportLabel-CE3b_Xvb.js";import"./SuccessIcon-BUzW7O1C.js";import"./WarningIcon-P7PnRx0A.js";import"./BaseRadioButton-CGWbPLiv.js";import"./Flex-Dy184GMw.js";import"./SlotComponent-DS17Buiv.js";import"./mergeRefs-PbmvZlSD.js";import"./Checkbox.stories-CQxUqhZM.js";import"./RadioButton.stories-BcxZVl53.js";import"./BaseRadioButton.stories-CKTDwZB5.js";import"./RadioPanel.stories-B7smscvM.js";import"./RadioPanel-C8_AB-Md.js";import"./Title-DwGVOQfn.js";import"./Card-DwXvQNUP.js";import"./Text-D7xF_efs.js";import"./Tag-BseNQesH.js";import"./ExpandablePanel-BgNSQb8q.js";import"./useAnimatedHeightBetween-D2CAsr4j.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DxGW0cT3.js";import"./ChevronUpIcon-2IPeYa5w.js";import"./ListItem-oteb0uP6.js";import"./BaseTextInput-jTvqP4fZ.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-iGdx7rqp.js";import"./index.esm-DZRVwHCm.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-SRXEq7gk.js";import"./useListNavigation-C3hkBh-t.js";import"./Chip-CQ6dGIVq.js";import"./CheckIcon-B_ECtw6t.js";import"./ArrowVerticalAnimated-Dn2lykNB.js";import"./ArrowDownIcon-DDTlXDix.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DAtBhs_6.js";import"./TableCaption-zgWK1aON.js";import"./tableContext-DY8Icv_l.js";import"./CalendarIcon-Gf5tKp5f.js";import"./Label-C0zsIoNN.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

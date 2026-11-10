import{j as r}from"./iframe-Bn7VsF7L.js";import{H as o}from"./Help-31dXzVUT.js";import"./Help.stories-CGO8JFP7.js";import{A as c,m as d}from"./Autosuggest.stories-CW63fncu.js";import g,{ComboboxStory as x}from"./Combobox.stories-B3ti-MfE.js";import S from"./FieldGroup.stories-TkhQAubp.js";import H from"./InputGroup.stories-ikobwz7_.js";import b,{SelectStory as j}from"./select.stories-f9Em0wnZ.js";import f from"./TextArea.stories-WyWLDWQk.js";import{C as T}from"./Combobox-C84M-45Z.js";import{D as k}from"./DatePicker-CP7yFWgA.js";import{F as G}from"./FieldGroup-_3N7_gl1.js";import{I}from"./InputGroup-S3KiBXq7.js";import{S as A}from"./Search-DnC4D6uu.js";import{S as h}from"./Select-Cu1GTgVB.js";import{T as F}from"./TextArea-Bom__F3a.js";import{T as v}from"./TextInput-DZO3MqK-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CBTH6Uzi.js";import"./Button-DLiVVAIG.js";import"./usePreviousValue-CFFgWC0U.js";import"./Loader-BjEmL99U.js";import"./useDelayedRender-CDOLUM0u.js";import"./index-Chjiymov.js";import"./useId-YQFeCZS-.js";import"./IconButton-BOrgpVew.js";import"./CloseIcon-Clb1ZDqH.js";import"./SearchIcon-D-7V0Pao.js";import"./PopupTip-rXNdTHMh.js";import"./QuestionIcon-B6bOteON.js";import"./TooltipTrigger-BcGrlatf.js";import"./floating-ui.react-D-eLvC2e.js";import"./index-CBr6z14G.js";import"./index-BVFvUTrB.js";import"./TooltipContent-D1kfM4Ao.js";import"./useBrowserPreferences-CqISP3SK.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-KTKafFlJ.js";import"./InputPanel-Dd4ACpbd.js";import"./Checkbox-qmdrzwI4.js";import"./RadioButton-CBZtDtxZ.js";import"./SupportLabel-8hJIeuft.js";import"./SuccessIcon-33TG4sbU.js";import"./WarningIcon-D4U4Rico.js";import"./BaseRadioButton-B1J8Ri6E.js";import"./Flex-fXCpFTfT.js";import"./SlotComponent-R7OjPauN.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-CDY1SSG_.js";import"./RadioButton.stories-BLRgfm4r.js";import"./BaseRadioButton.stories-CPGaSUPW.js";import"./RadioPanel.stories-CX6GvZbo.js";import"./RadioPanel-CjfiqdNi.js";import"./Title-IIBPdjeH.js";import"./Card-C5mn-8Cy.js";import"./Text-CaqFTnbg.js";import"./Tag-DCbienle.js";import"./ExpandablePanel-Dq0ACsv_.js";import"./useAnimatedHeightBetween-CeGjafJ4.js";import"./tokens-CW-NfdIE.js";import"./Expander-p7i54_mZ.js";import"./ChevronDownIcon-DmIbdb7A.js";import"./ChevronUpIcon-B22pzTtO.js";import"./ListItem-BCqvZYWo.js";import"./BaseTextInput-BnsxaY8H.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Cxo8FLb1.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-jMFU5QID.js";import"./useListNavigation-CsYZt1HC.js";import"./Chip-C0eqE0Va.js";import"./CheckIcon-BGZWW_no.js";import"./ArrowVerticalAnimated-COPrNhy2.js";import"./ArrowDownIcon-BXK4yAu1.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-DfQ6IlJf.js";import"./Popover-DMb-Umbm.js";import"./ArrowRightIcon-COHGYUQ_.js";import"./Label-5Fya-z7U.js";import"./valuePair-Bn6SadUn.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(k,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(T,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(F,{...f.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(I,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})},ie=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

import{j as r}from"./iframe-BaF8H7Ap.js";import{H as o}from"./Help-D6ljkTsE.js";import"./Help.stories-CCMUP6_0.js";import{A as c,m as d}from"./Autosuggest.stories-CI7LHHSt.js";import g,{ComboboxStory as x}from"./Combobox.stories-C6VKYQ6P.js";import H from"./FieldGroup.stories-BP5LGW5Q.js";import b from"./InputGroup.stories-C1-VJjTy.js";import S from"./select.stories-BXd0wyS7.js";import j from"./TextArea.stories-DfKTlpx0.js";import{C as f}from"./Combobox-wIG3b--8.js";import{D as I}from"./DateInput-DNP1r766.js";import{F as T}from"./FieldGroup-BbPGg3vj.js";import{I as G}from"./InputGroup-BPXkmgdG.js";import{S as A}from"./Search-rpJiBV9-.js";import{S as h}from"./Select-Do3qXJ_8.js";import{T as v}from"./TextArea-CwNMzIPB.js";import{T as C}from"./TextInput-Bn0HHs5_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-eS2heO-V.js";import"./Button-CZpwOv6p.js";import"./usePreviousValue-BZuuYFks.js";import"./Loader-DcNcnzwY.js";import"./useDelayedRender-DDIuNtQD.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-C08FyA_S.js";import"./IconButton-BrUpISBH.js";import"./CloseIcon-q7itC_S6.js";import"./SearchIcon-l8XeY_Wn.js";import"./PopupTip-rN6tEYBE.js";import"./QuestionIcon-COLrR7NA.js";import"./TooltipTrigger-DME5RZD8.js";import"./floating-ui.react-Che03kNT.js";import"./index-CuLST3KG.js";import"./index-Cc7Anxxf.js";import"./TooltipContent-DfdInn0a.js";import"./useBrowserPreferences-CqnT0nYG.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DRIoi3fT.js";import"./InputPanel-JwHrqlB_.js";import"./Checkbox-Bv7Ff3nV.js";import"./RadioButton-0MbM3pk4.js";import"./SupportLabel-5Us-ppHQ.js";import"./SuccessIcon-BS68v-w2.js";import"./WarningIcon-GIgFV64w.js";import"./BaseRadioButton-GwpafNIv.js";import"./Flex-DU4Aqcmx.js";import"./SlotComponent-CQSJwdwa.js";import"./mergeRefs-DJ3mhAHf.js";import"./Checkbox.stories-DRRD0lhc.js";import"./RadioButton.stories-D5ZhkTgc.js";import"./BaseRadioButton.stories-BguD7Chu.js";import"./RadioPanel.stories-Cob_h9kJ.js";import"./RadioPanel-COtxfr0Z.js";import"./Title-BEZ7eIw0.js";import"./Card-BRVGN04c.js";import"./Text-C7kB12zG.js";import"./Tag-DMwNA9dH.js";import"./ExpandablePanel-B05h25YF.js";import"./useAnimatedHeightBetween-CIxIOQ2p.js";import"./tokens-HKQN8Vn-.js";import"./Expander-D-dRnvpc.js";import"./ChevronUpIcon-Cyq8eHQ3.js";import"./ListItem-D_LqeZHT.js";import"./BaseTextInput-BdD4F4Rh.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CWGWSRbV.js";import"./index.esm-DZtZdX5j.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-zhJFu7EL.js";import"./useListNavigation-C4f2ytD1.js";import"./Chip-DS8zjqve.js";import"./CheckIcon-BGiymg1P.js";import"./ArrowVerticalAnimated-u61lP5nZ.js";import"./ArrowDownIcon-BvJ8fYgF.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-PRXCp3Zy.js";import"./TableCaption-D7AFIJh3.js";import"./tableContext-BtwsWZZo.js";import"./CalendarIcon-BoThWUTo.js";import"./Label-cVb9HkEc.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

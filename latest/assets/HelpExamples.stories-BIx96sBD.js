import{j as r}from"./iframe-S4b2atIM.js";import{H as o}from"./Help-BynW2XQo.js";import"./Help.stories-CvuA5aC8.js";import{A as c,m as d}from"./Autosuggest.stories-CyZkr2_G.js";import g,{ComboboxStory as x}from"./Combobox.stories-DPhsv8DF.js";import H from"./FieldGroup.stories-Dp6qnZJ1.js";import b from"./InputGroup.stories-DCVsSkaL.js";import S from"./select.stories-hwEiqDZ0.js";import j from"./TextArea.stories-C-9jediQ.js";import{C as f}from"./Combobox-BMjNynt3.js";import{D as I}from"./DateInput-DFptDu8W.js";import{F as T}from"./FieldGroup-CeMK_Fvn.js";import{I as G}from"./InputGroup-DkpLTGcy.js";import{S as A}from"./Search-CaykApgf.js";import{S as h}from"./Select-DiLmSWkH.js";import{T as v}from"./TextArea-DvcB2NNU.js";import{T as C}from"./TextInput-Db3JQ6e0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-1n65_1AZ.js";import"./Button-C6hnHFE7.js";import"./usePreviousValue-DzZTtW1B.js";import"./Loader-CZo7spAp.js";import"./useDelayedRender-HHcHH8gD.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-YMAIXpHw.js";import"./IconButton-CmU5KfuX.js";import"./CloseIcon-DIR9tHWi.js";import"./SearchIcon-YP0chdA-.js";import"./PopupTip-BzjeMy72.js";import"./QuestionIcon-YX-k1znO.js";import"./TooltipTrigger-Cst5En8c.js";import"./floating-ui.react-DuUhCeqT.js";import"./index-BjUSyKgf.js";import"./index-BkBTkBEV.js";import"./TooltipContent-Dz1rDaLN.js";import"./useBrowserPreferences-DmYDVFDF.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BuCeH0Vd.js";import"./InputPanel-CBHEwQGJ.js";import"./Checkbox-BlLGg1gx.js";import"./RadioButton-C4M1ZDSj.js";import"./SupportLabel-Dld-TH6V.js";import"./SuccessIcon-DiSh9XHe.js";import"./WarningIcon-R63AtuIA.js";import"./BaseRadioButton-DQkwwsuF.js";import"./Flex-CD-zFw47.js";import"./SlotComponent-COIbIqEm.js";import"./mergeRefs-Bmx4IUbL.js";import"./Checkbox.stories-DAA5K7OR.js";import"./RadioButton.stories-CU8bd7T6.js";import"./BaseRadioButton.stories-Di4Kdpcx.js";import"./RadioPanel.stories-Bw9BwU29.js";import"./RadioPanel-BrJicWt8.js";import"./Title-BT6sS2Hi.js";import"./Card-9oyCVw-k.js";import"./Text-CRu9ittu.js";import"./Tag-DW2rC2o1.js";import"./ExpandablePanel-CG-RiwoX.js";import"./useAnimatedHeightBetween-DxJb59lh.js";import"./tokens-HKQN8Vn-.js";import"./Expander-Cr5Z_pSl.js";import"./ChevronUpIcon-DVVJ65y0.js";import"./ListItem-Du9qlW6y.js";import"./BaseTextInput-qRLn9XT4.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CsEeHEjK.js";import"./index.esm-DbdzV5jx.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DX1NdpA4.js";import"./useListNavigation-d8PuYPaf.js";import"./Chip-Ckeo4YfR.js";import"./CheckIcon-DXTwgqUp.js";import"./ArrowVerticalAnimated-B69_2VOj.js";import"./ArrowDownIcon-CEM3bLxG.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DAYrEf8b.js";import"./TableCaption-CyWGSDg_.js";import"./tableContext-BGrlwluw.js";import"./CalendarIcon-C9X975KS.js";import"./Label-ioH_zT9p.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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

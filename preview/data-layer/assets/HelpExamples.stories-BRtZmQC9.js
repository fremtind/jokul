import{j as r}from"./iframe-BUbBSyiw.js";import{H as o}from"./Help-C56ORjZe.js";import"./Help.stories-Jyxjya7S.js";import{A as c,m as d}from"./Autosuggest.stories-C3q1vePS.js";import g,{ComboboxStory as x}from"./Combobox.stories-C7xlxTtb.js";import H from"./FieldGroup.stories-CxqnKyhV.js";import b from"./InputGroup.stories-DU1S6PZh.js";import S from"./select.stories-Cqi5h4l-.js";import j from"./TextArea.stories-BWjkvoyd.js";import{C as f}from"./Combobox-C66F0bdM.js";import{D as I}from"./DateInput-IBkI349K.js";import{F as T}from"./FieldGroup-DhKHWOBn.js";import{I as G}from"./InputGroup-DiJK7z84.js";import{S as A}from"./Search-B-Nav5sB.js";import{S as h}from"./Select-BrT-jfmO.js";import{T as v}from"./TextArea-B-sDWh7t.js";import{T as C}from"./TextInput-BKk0EwOJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-htbjGrII.js";import"./types-YjSsgwWY.js";import"./Button-Cs4uBu2S.js";import"./usePreviousValue-BHO3qPzR.js";import"./Loader-BWspS2NN.js";import"./useDelayedRender-3Rp08eCg.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DaXUHhtD.js";import"./IconButton-mrnNJURe.js";import"./CloseIcon-Bo1AR9_0.js";import"./SearchIcon-DogwhhlA.js";import"./PopupTip-BfegqcQG.js";import"./QuestionIcon-BlC6shVN.js";import"./TooltipTrigger-dWp0rD9Y.js";import"./floating-ui.react-DyL8AuNW.js";import"./index-CGxpdhO2.js";import"./index-Bv09xDwm.js";import"./TooltipContent-BBIh4YO4.js";import"./useBrowserPreferences-TnJ4C37x.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-C9KJxo3Z.js";import"./InputPanel-S3uMwJ7T.js";import"./Checkbox-CRaOF7zd.js";import"./RadioButton-B__rfS45.js";import"./SupportLabel-B-VOgB55.js";import"./SuccessIcon-BcZ3HLj5.js";import"./WarningIcon-COjD6mvs.js";import"./BaseRadioButton-r6mbQb4Y.js";import"./Flex-ZJ7ENCoC.js";import"./SlotComponent-wF8n1cD3.js";import"./mergeRefs-BRb42Tlc.js";import"./Checkbox.stories-Bi7caGFg.js";import"./RadioButton.stories-BngD5jwP.js";import"./BaseRadioButton.stories-CcjPtAdX.js";import"./RadioPanel.stories-2nmqSD6t.js";import"./RadioPanel-TUXR6sac.js";import"./Title-NfVZLNX7.js";import"./Card-DcO-Tj2K.js";import"./Text-BQFyaz9s.js";import"./Tag-CLVSpPGj.js";import"./ExpandablePanel-BwNxSDDZ.js";import"./useAnimatedHeightBetween-Br1D0cbZ.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BBGnMzP5.js";import"./ChevronUpIcon-B_cjzhx9.js";import"./ListItem-_p1qNvAy.js";import"./BaseTextInput-z_3Bz__f.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DLKFRc87.js";import"./index.esm-D-Whr-6G.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CCbpwFJQ.js";import"./useListNavigation-xsZYlkBL.js";import"./Chip-CyP5sBae.js";import"./CheckIcon-ygdcXT3R.js";import"./ArrowVerticalAnimated-Ebp02mlT.js";import"./ArrowDownIcon-DbCjJfyt.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DlraKQsq.js";import"./TableCaption-Dvi0I54K.js";import"./tableContext-Czst7G0F.js";import"./CalendarIcon-CqvzB0sN.js";import"./Label-BvDrY9Fk.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};

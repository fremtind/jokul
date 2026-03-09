import{j as e}from"./iframe-D59NJKqy.js";import{P as o}from"./PopupTip-BJa5MzrM.js";import{S as a}from"./Select-rQl7gzHY.js";/* empty css               */import{F as s}from"./Flex-CXz4wHfY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DEbPFP1-.js";import"./Icon-Dqb6vLJj.js";import"./TooltipTrigger-DefQX44F.js";import"./floating-ui.react-BYKf2cOj.js";import"./index-1KokshOd.js";import"./index-DNEQkL9K.js";import"./TooltipContent-D0GNZjn7.js";import"./useBrowserPreferences-kW4pwfWf.js";import"./useId-686O8784.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-f2-3AVxT.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-JzaJQ8dE.js";import"./useListNavigation-BF7WyGW8.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B2VizptS.js";import"./ArrowDownIcon-D2b1TqU_.js";import"./InputGroup-BIUoZn3d.js";import"./Label-CAy7cakq.js";import"./SupportLabel-DWsMGi0f.js";import"./WarningIcon-Cwp7Fm-X.js";import"./SlotComponent-hDkt9d4w.js";import"./mergeRefs-Cp9jyST8.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hva jobber du som?",
    items: ["Frontend-utvikler", "Backend-utvikler", "Visuell designer", "Interaksjonsdesigner", "Tjenestedesigner"],
    inline: true,
    value: "Frontend-utvikler",
    description: "",
    helpLabel: ""
  },
  render: args => {
    return <Flex gap="xs" alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...n.parameters?.docs?.source}}};const M=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,M as __namedExportsOrder,L as default};

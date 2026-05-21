import{j as e}from"./iframe-CkyTt8ht.js";import{P as o}from"./PopupTip-TFamIFK2.js";import{S as a}from"./Select-BJJ4bk_V.js";/* empty css               */import{F as s}from"./Flex-B9K096Jj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-zy9xeQwD.js";import"./Icon-DKSFJicx.js";import"./TooltipTrigger-wHy3GKaj.js";import"./floating-ui.react-CHmKwbAG.js";import"./index-DcLeMLlZ.js";import"./index-D7k3oBTo.js";import"./TooltipContent-Cn9FOO6S.js";import"./useBrowserPreferences-Bu_4lAZt.js";import"./useId-DX9Wy9sW.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-CcAalbGQ.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-B1zRh8Cg.js";import"./useListNavigation-WU9UY5oJ.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DwU4xE7-.js";import"./ArrowDownIcon-C6fKwUoV.js";import"./InputGroup-CJiQ25jJ.js";import"./Label-Ba_2O1yB.js";import"./SupportLabel-DvwgCOpD.js";import"./WarningIcon-B9xzQhsW.js";import"./SlotComponent-CwdD2PU4.js";import"./mergeRefs-DzNHacE-.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

import{j as e}from"./iframe-C4HFfLA6.js";import{P as o}from"./PopupTip-C9pbcLfi.js";import{S as a}from"./Select-DRqK4puh.js";/* empty css               */import{F as s}from"./Flex-s-FZrgym.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-D6t7qgdB.js";import"./Icon-BAk8PW5T.js";import"./TooltipTrigger-B-hJtWax.js";import"./floating-ui.react-C7bKfh9l.js";import"./index-CXstum-W.js";import"./index-CZlIr_b0.js";import"./TooltipContent-DHt6UYJR.js";import"./useBrowserPreferences-DXI477_E.js";import"./useId-DC6qAwyH.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-BxlRHGsq.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-BC-k2ngt.js";import"./useListNavigation-CelXrGVW.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Ir7896bD.js";import"./ArrowDownIcon-BYEa35DA.js";import"./InputGroup-rU6aIfwt.js";import"./Label-c8oyiAcg.js";import"./SupportLabel-CxLl5vcv.js";import"./WarningIcon-BnzyzgJ1.js";import"./SlotComponent-BRxhFwXN.js";import"./mergeRefs-D0mmDY1K.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

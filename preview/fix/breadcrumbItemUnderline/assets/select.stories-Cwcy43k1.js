import{j as e}from"./iframe-qzPpoKpx.js";import{P as o}from"./PopupTip-DyOD7kl2.js";import{S as a}from"./Select-u7TLP4x_.js";/* empty css               */import{F as s}from"./Flex-B4VQLD3v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CpfBOD2g.js";import"./Icon-BjOLH1hg.js";import"./TooltipTrigger-ClysN1hg.js";import"./floating-ui.react-DIE84q4m.js";import"./index-DgXUTt4m.js";import"./index-DEeGSqx1.js";import"./TooltipContent-D5qUTToP.js";import"./useBrowserPreferences-CkUIzEA5.js";import"./useId-DNUUO0QD.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-B8H_PajB.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-B9gOvgAP.js";import"./useListNavigation-DItz8FBr.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B7vwT5XY.js";import"./ArrowDownIcon-CD9VpOOA.js";import"./InputGroup-Dn1l4sIw.js";import"./Label-vCzN8szW.js";import"./SupportLabel-CiTcR3Ub.js";import"./WarningIcon-C1XzLhPH.js";import"./SlotComponent-CP9anN-l.js";import"./mergeRefs-9MXFj1xp.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

import{R as a}from"./index-siqcju79.js";import{p as x,n as c,f as C}from"./formatNumber-DzIwhxNg.js";import{F as o}from"./Flex-DP-fj2ie.js";import{E as h}from"./Tag-5cfiG99-.js";import{C as F,a as N,b as d}from"./types-CisFmCLD.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./clsx-B-dksMZM.js";const l={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function k(t,s){const e=x(t);if(Number.isNaN(e))return t.toString();const p=Number.isInteger(e)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},i=l.suffix,{prefix:m,...u}={...l,...p,...s},f=m?.length?`${m}${c}`:"",g=i?.length?`${c}${i}`:"",b=C(e,u);return`${f}${b}${g}`}const O={title:"Komponenter/Card",component:d,parameters:{layout:"centered"},tags:["autodocs"],args:{clickable:!1},argTypes:{variant:{control:"select",options:N},padding:{control:"select",options:F}}},r={args:{padding:"m",variant:"outlined",children:"Hei, verden!"}},n={name:"Card med fakturainformasjon",args:{padding:"m",clickable:!0,variant:"outlined",children:""},render:({asChild:t,as:s,...e})=>a.createElement(d,{asChild:!0,...e},a.createElement(o,{as:"a",href:"#test",colGap:40},a.createElement(o,{direction:"column",gap:4},a.createElement("p",{className:"jkl-heading-2"},k(18856),a.createElement("span",{"aria-hidden":!0}," →")),a.createElement("p",{className:"jkl-body"},"Frist 20.03.2023")),a.createElement(o,{direction:"column",gap:12},a.createElement(h,null,"Ubetalt"),a.createElement("p",{className:"jkl-body"},"Purring"))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    padding: "m",
    variant: "outlined",
    children: "Hei, verden!"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Card med fakturainformasjon",
  args: {
    padding: "m",
    clickable: true,
    variant: "outlined",
    children: ""
  },
  render: ({
    asChild,
    as,
    ...props
  }) => <CardComponent asChild {...props}>
            <Flex as="a" href="#test" colGap={40}>
                <Flex direction="column" gap={4}>
                    <p className="jkl-heading-2">
                        {formatValuta(18856)}
                        <span aria-hidden> →</span>
                    </p>
                    <p className="jkl-body">Frist 20.03.2023</p>
                </Flex>
                <Flex direction="column" gap={12}>
                    <ErrorTag>Ubetalt</ErrorTag>
                    <p className="jkl-body">Purring</p>
                </Flex>
            </Flex>
        </CardComponent>
}`,...n.parameters?.docs?.source}}};const _=["Card","Fakturainformasjon"];export{r as Card,n as Fakturainformasjon,_ as __namedExportsOrder,O as default};

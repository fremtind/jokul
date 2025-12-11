import{R as e}from"./index-siqcju79.js";import{p as x,n as c,f as F}from"./formatNumber-DzIwhxNg.js";import{F as o}from"./Flex-DP-fj2ie.js";import{E as N}from"./Tag-5cfiG99-.js";import{C as p}from"./Card-fliJQsdw.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./clsx-B-dksMZM.js";const l={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function b(t,s){const r=x(t);if(Number.isNaN(r))return t.toString();const d=Number.isInteger(r)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},i=l.suffix,{prefix:m,...u}={...l,...d,...s},g=m?.length?`${m}${c}`:"",f=i?.length?`${c}${i}`:"",h=F(r,u);return`${g}${h}${f}`}const C=["s","m","l","xl"],E=["outlined","high","low"],O={title:"Komponenter/Card",component:p,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:E},padding:{control:"select",options:C}}},a={args:{padding:"m",variant:"outlined",children:"Hei, verden!"}},n={args:{padding:"m",clickable:!0,variant:"outlined",children:""},render:({asChild:t,as:s,...r})=>e.createElement(p,{asChild:!0,...r},e.createElement(o,{as:"a",href:"#test",colGap:40},e.createElement(o,{direction:"column",gap:4},e.createElement("p",{className:"jkl-heading-2"},b(18856),e.createElement("span",{"aria-hidden":!0}," →")),e.createElement("p",{className:"jkl-body"},"Frist 20.03.2023")),e.createElement(o,{direction:"column",gap:12},e.createElement(N,null,"Ubetalt"),e.createElement("p",{className:"jkl-body"},"Purring"))))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    padding: "m",
    variant: "outlined",
    children: "Hei, verden!"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const _=["Card","Fakturainformasjon"];export{a as Card,n as Fakturainformasjon,_ as __namedExportsOrder,O as default};

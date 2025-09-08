import{R as e}from"./index-siqcju79.js";import{p as h,n as l,f as F}from"./formatNumber-DzIwhxNg.js";import{F as o}from"./Flex-BxJRczDo.js";import{E as N}from"./Tag-5cfiG99-.js";import{C as d}from"./Card-COn4eOcS.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CWN6EcE2.js";const c={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function b(t,s){const r=h(t);if(Number.isNaN(r))return t.toString();const p=Number.isInteger(r)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},i=c.suffix,{prefix:m,...u}={...c,...p,...s},g=m?.length?`${m}${l}`:"",f=i?.length?`${l}${i}`:"",x=F(r,u);return`${g}${x}${f}`}const C=["s","m","l","xl"],E=["outlined","high","low"],R={title:"Komponenter/Card",component:d,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:E},padding:{control:"select",options:C}}},n={args:{padding:"m",variant:"outlined",children:"Hei, verden!"}},a={args:{padding:"m",clickable:!0,variant:"outlined",children:""},render:({asChild:t,as:s,...r})=>e.createElement(d,{asChild:!0,...r},e.createElement(o,{as:"a",href:"#test",gap:"none xl"},e.createElement(o,{direction:"column",gap:"xs"},e.createElement("p",{className:"jkl-heading-2"},b(18856),e.createElement("span",{"aria-hidden":!0}," →")),e.createElement("p",{className:"jkl-body"},"Frist 20.03.2023")),e.createElement(o,{direction:"column",gap:"sm"},e.createElement(N,null,"Ubetalt"),e.createElement("p",{className:"jkl-body"},"Purring"))))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    padding: "m",
    variant: "outlined",
    children: "Hei, verden!"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <Flex as="a" href="#test" gap="none xl">
                <Flex direction="column" gap="xs">
                    <p className="jkl-heading-2">
                        {formatValuta(18856)}
                        <span aria-hidden> →</span>
                    </p>
                    <p className="jkl-body">Frist 20.03.2023</p>
                </Flex>
                <Flex direction="column" gap="sm">
                    <ErrorTag>Ubetalt</ErrorTag>
                    <p className="jkl-body">Purring</p>
                </Flex>
            </Flex>
        </CardComponent>
}`,...a.parameters?.docs?.source}}};const T=["Card","Fakturainformasjon"];export{n as Card,a as Fakturainformasjon,T as __namedExportsOrder,R as default};

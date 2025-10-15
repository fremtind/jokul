import{j as r}from"./jsx-runtime-D9p_MChh.js";import"./index-CRL2yuNo.js";import{p as k,n as l,f as D}from"./formatNumber-DzIwhxNg.js";import{F as i}from"./Flex-C2kqvdXP.js";import{E as $}from"./Tag-CDfcxRZt.js";import{C as f}from"./Card-Bmy16ATk.js";/* empty css               */import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./tokens-NmszT_nq.js";const m={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function v(o,c){const n=k(o);if(Number.isNaN(n))return o.toString();const j=Number.isInteger(n)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},a=m.suffix,{prefix:e,...F}={...m,...j,...c},N=e!=null&&e.length?`${e}${l}`:"",b=a!=null&&a.length?`${l}${a}`:"",C=D(n,F);return`${N}${C}${b}`}const S=["s","m","l","xl"],y=["outlined","high","low"],H={title:"Komponenter/Card",component:f,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:y},padding:{control:"select",options:S}}},t={args:{padding:"m",variant:"outlined",children:"Hei, verden!"}},s={args:{padding:"m",clickable:!0,variant:"outlined",children:""},render:({asChild:o,as:c,...n})=>r.jsx(f,{asChild:!0,...n,children:r.jsxs(i,{as:"a",href:"#test",colGap:40,children:[r.jsxs(i,{direction:"column",gap:4,children:[r.jsxs("p",{className:"jkl-heading-2",children:[v(18856),r.jsx("span",{"aria-hidden":!0,children:" →"})]}),r.jsx("p",{className:"jkl-body",children:"Frist 20.03.2023"})]}),r.jsxs(i,{direction:"column",gap:12,children:[r.jsx($,{children:"Ubetalt"}),r.jsx("p",{className:"jkl-body",children:"Purring"})]})]})})};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    padding: "m",
    variant: "outlined",
    children: "Hei, verden!"
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const U=["Card","Fakturainformasjon"];export{t as Card,s as Fakturainformasjon,U as __namedExportsOrder,H as default};

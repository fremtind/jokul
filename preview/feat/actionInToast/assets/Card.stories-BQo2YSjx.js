import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{n as k,f as y,p as F}from"./formatNumber-DzIwhxNg.js";import{S as T,F as u}from"./Flex-Bxl3x-bI.js";import{E as D}from"./Tag-Bu5SvFBL.js";import{c as R}from"./clsx-B-dksMZM.js";import{R as S}from"./index-C6mWTJJr.js";/* empty css               */import"./tokens-DyQL8Q6a.js";import"./_commonjsHelpers-BosuxZz1.js";const f={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function A(t,s){const n=F(t);if(Number.isNaN(n))return t.toString();const l=Number.isInteger(n)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},r=f.suffix,{prefix:a,...d}={...f,...l,...s},m=a!=null&&a.length?`${a}${k}`:"",c=r!=null&&r.length?`${k}${r}`:"",p=y(n,d);return`${m}${p}${c}`}const g=S.forwardRef(function(s,n){const{className:l,clickable:r=!1,padding:a="s",variant:d="high",asChild:m,as:c="div",...p}=s,N=m?T:c;return e.jsx(N,{"data-testid":"jkl-card","data-clickable":r,"data-padding":a,className:R("jkl-card",`jkl-card--${d}`,l),...p,ref:n})});g.__docgenInfo={description:`En allsidig kortkomponent som brukes for å gruppere innhold på en side.
Komponenten rendres til vanlig som en \`<div>\`, men du kan velge å rendre
den som andre elementer eller komponenter der du trenger annen semantikk
eller funksjonalitet.`,methods:[],displayName:"Card",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},className:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CARD_PADDINGS)[number]"},description:`Setter padding på kortet. Tilsvarer samme property i Figma.
@default "s"`},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CARD_VARIANTS)[number]"},description:`Angir hvilken kortvariant du vil bruke. Velg en variant som gir god kontrast
til bakgrunnen på siden, slik at det er enkelt å skille innholdet fra hverandre.
@default "high"`},clickable:{required:!1,tsType:{name:"boolean"},description:"Angir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre\nkortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra\net ruting-bibliotek) og gi det en `href` eller `onClick`-handler.\nHUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke\nskal lese alt innholdet i kortet."}}};const E=["s","m","l","xl"],$=["outlined","high","low"],K={title:"Komponenter/Card",component:g,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:$},padding:{control:"select",options:E}}},o={args:{padding:"m",variant:"outlined",children:"Hei, verden!"}},i={args:{padding:"m",clickable:!0,variant:"outlined",children:""},render:({asChild:t,as:s,...n})=>e.jsx(g,{asChild:!0,...n,children:e.jsxs(u,{as:"a",href:"#test",colGap:40,children:[e.jsxs(u,{direction:"column",gap:4,children:[e.jsxs("p",{className:"jkl-heading-2",children:[A(18856),e.jsx("span",{"aria-hidden":!0,children:" →"})]}),e.jsx("p",{className:"jkl-body",children:"Frist 20.03.2023"})]}),e.jsxs(u,{direction:"column",gap:12,children:[e.jsx(D,{children:"Ubetalt"}),e.jsx("p",{className:"jkl-body",children:"Purring"})]})]})})};var h,b,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    padding: "m",
    variant: "outlined",
    children: "Hei, verden!"
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var j,v,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const L=["Card","Fakturainformasjon"];export{o as Card,i as Fakturainformasjon,L as __namedExportsOrder,K as default};

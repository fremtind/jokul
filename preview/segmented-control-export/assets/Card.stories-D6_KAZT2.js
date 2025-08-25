import{R as e}from"./index-siqcju79.js";import{p as b,n as f,f as v}from"./formatNumber-DzIwhxNg.js";import{F as u}from"./Flex-DP-fj2ie.js";import{E as C}from"./Tag-5cfiG99-.js";import{c as N}from"./clsx-B-dksMZM.js";import{S as x}from"./SlotComponent-CWN6EcE2.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";const k={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function y(r,a){const n=b(r);if(Number.isNaN(n))return r.toString();const l=Number.isInteger(n)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},t=k.suffix,{prefix:o,...m}={...k,...l,...a},d=o?.length?`${o}${f}`:"",c=t?.length?`${f}${t}`:"",p=v(n,m);return`${d}${p}${c}`}const g=e.forwardRef(function(a,n){const{className:l,clickable:t=!1,padding:o="s",variant:m="high",asChild:d,as:c="div",...p}=a,h=d?x:c;return e.createElement(h,{"data-testid":"jkl-card","data-clickable":t,"data-padding":o,className:N("jkl-card",`jkl-card--${m}`,l),...p,ref:n})});g.__docgenInfo={description:`En allsidig kortkomponent som brukes for å gruppere innhold på en side.
Komponenten rendres til vanlig som en \`<div>\`, men du kan velge å rendre
den som andre elementer eller komponenter der du trenger annen semantikk
eller funksjonalitet.`,methods:[],displayName:"Card",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<ElementType>["ref"]'},description:""},className:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CARD_PADDINGS)[number]"},description:`Setter padding på kortet. Tilsvarer samme property i Figma.
@default "s"`},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CARD_VARIANTS)[number]"},description:`Angir hvilken kortvariant du vil bruke. Velg en variant som gir god kontrast
til bakgrunnen på siden, slik at det er enkelt å skille innholdet fra hverandre.
@default "high"`},clickable:{required:!1,tsType:{name:"boolean"},description:"Angir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre\nkortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra\net ruting-bibliotek) og gi det en `href` eller `onClick`-handler.\nHUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke\nskal lese alt innholdet i kortet."}}};const E=["s","m","l","xl"],F=["outlined","high","low"],P={title:"Komponenter/Card",component:g,parameters:{layout:"centered"},tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:F},padding:{control:"select",options:E}}},s={args:{padding:"m",variant:"outlined",children:"Hei, verden!"}},i={args:{padding:"m",clickable:!0,variant:"outlined",children:""},render:({asChild:r,as:a,...n})=>e.createElement(g,{asChild:!0,...n},e.createElement(u,{as:"a",href:"#test",colGap:40},e.createElement(u,{direction:"column",gap:4},e.createElement("p",{className:"jkl-heading-2"},y(18856),e.createElement("span",{"aria-hidden":!0}," →")),e.createElement("p",{className:"jkl-body"},"Frist 20.03.2023")),e.createElement(u,{direction:"column",gap:12},e.createElement(C,null,"Ubetalt"),e.createElement("p",{className:"jkl-body"},"Purring"))))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    padding: "m",
    variant: "outlined",
    children: "Hei, verden!"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const q=["Card","Fakturainformasjon"];export{s as Card,i as Fakturainformasjon,q as __namedExportsOrder,P as default};

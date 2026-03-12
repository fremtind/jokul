import{j as e}from"./iframe-D4OqJuqI.js";import{F as o}from"./Flex-DUVlCVxA.js";import{T as i}from"./_index-CvrMKcdg.js";/* empty css               */import{T as r}from"./_index-BxsKyyq9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B_y2UWaq.js";import"./mergeRefs-CP4UnLZn.js";const A={title:"Beta/Title + Text",component:i,parameters:{layout:"padded",docs:{disable:!0}},tags:["!autodocs","grouping content"]},a=`
    <Title as="h2" size={4}>Dekning og pris for bilen din</Title>
    <Text size={3}>
        Du kan velge mellom delkasko og kasko.
    </Text>
    <Text size={2} weight={700}>
        Egenandel fra 4 000 kr.
    </Text>
    <Text size={2}>
        Endringer trer i kraft fra første betalingsdato.
    </Text>
    /* Uten forstyrrelser fra BETA støy og flex komponent */`,l=`<Flex direction="column" gap="s">
    <BETA_Title as="h2" size={4}>
        Dekning og pris for bilen din
    </BETA_Title>
    <BETA_Text size={3}>
        Du kan velge mellom delkasko og kasko.
    </BETA_Text>
    <BETA_Text size={2} weight={700}>
        Egenandel fra 4 000 kr.
    </BETA_Text>
    <BETA_Text size={2}>
        Endringer trer i kraft fra første betalingsdato.
    </BETA_Text>
</Flex>`,d=`<Flex direction="column" gap="m">
    <Flex direction="column" gap="2xs">
        <BETA_Title as="h3" size={5}>Kort tittel med ingress</BETA_Title>
        <BETA_Text as="p" size={3}>Brødtekst</BETA_Text>
        <BETA_Text as="p" size={2}>Sekundær tekst</BETA_Text>
    </Flex>

    <Flex direction="column" gap="2xs">
        <BETA_Title as="h4" size={6}>Viktig informasjon</BETA_Title>
        <BETA_Text as="p" size={2} weight={700}>Uthevet tekst</BETA_Text>
        <BETA_Text as="p" size={2}>Supplerende tekst</BETA_Text>
    </Flex>
</Flex>`,t={render:()=>e.jsx("pre",{children:e.jsx("code",{children:a})})},n={render:()=>e.jsxs(o,{direction:"column",gap:"2xs",children:[e.jsx(i,{as:"h2",size:4,children:"Dekning og pris for bilen din"}),e.jsx(r,{size:3,children:"Du kan velge mellom delkasko og kasko. Vi anbefaler kasko for nyere biler og delkasko for eldre biler med lavere verdi."}),e.jsx(r,{size:2,weight:700,children:"Egenandel fra 4 000 kr."}),e.jsx(r,{size:2,children:"Endringer trer i kraft fra første betalingsdato etter at du bekrefter valgene dine."}),e.jsx("pre",{children:e.jsx("code",{children:l})})]})},s={render:()=>e.jsxs(o,{direction:"column",gap:"2xs",children:[e.jsx(i,{as:"h3",size:5,children:"Kort tittel med ingress"}),e.jsxs(r,{as:"p",size:3,children:["Bruk ",e.jsx("strong",{children:"Title"})," for overskrift og"," ",e.jsx("strong",{children:"Text"})," for brødtekst med tydelig størrelse."]}),e.jsx(r,{as:"p",size:2,children:"Dette er en sekundær tekstlinje med mindre størrelse."}),e.jsx(i,{as:"h4",size:6,children:"Viktig informasjon"}),e.jsx(r,{as:"p",size:2,weight:700,children:"Frist for endring er 31. mars."}),e.jsx(r,{as:"p",size:2,children:"Etter fristen gjelder nye vilkår fra neste hovedforfall."}),e.jsx("pre",{children:e.jsx("code",{children:d})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <pre>
            <code>{CleanPattern}</code>
        </pre>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="2xs">
            <BETA_Title as="h2" size={4}>
                Dekning og pris for bilen din
            </BETA_Title>
            <BETA_Text size={3}>
                Du kan velge mellom delkasko og kasko. Vi anbefaler kasko for
                nyere biler og delkasko for eldre biler med lavere verdi.
            </BETA_Text>
            <BETA_Text size={2} weight={700}>
                Egenandel fra 4 000 kr.
            </BETA_Text>
            <BETA_Text size={2}>
                Endringer trer i kraft fra første betalingsdato etter at du
                bekrefter valgene dine.
            </BETA_Text>
            <pre>
                <code>{recommendedPatternCode}</code>
            </pre>
        </Flex>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="2xs">
            <BETA_Title as="h3" size={5}>
                Kort tittel med ingress
            </BETA_Title>
            <BETA_Text as="p" size={3}>
                Bruk <strong>Title</strong> for overskrift og{" "}
                <strong>Text</strong> for brødtekst med tydelig størrelse.
            </BETA_Text>
            <BETA_Text as="p" size={2}>
                Dette er en sekundær tekstlinje med mindre størrelse.
            </BETA_Text>

            <BETA_Title as="h4" size={6}>
                Viktig informasjon
            </BETA_Title>
            <BETA_Text as="p" size={2} weight={700}>
                Frist for endring er 31. mars.
            </BETA_Text>
            <BETA_Text as="p" size={2}>
                Etter fristen gjelder nye vilkår fra neste hovedforfall.
            </BETA_Text>
            <pre>
                <code>{apiOverviewCode}</code>
            </pre>
        </Flex>
}`,...s.parameters?.docs?.source}}};const B=["EnkeltAPIEksempel","RecommendedPattern","ApiOverview"];export{s as ApiOverview,t as EnkeltAPIEksempel,n as RecommendedPattern,B as __namedExportsOrder,A as default};

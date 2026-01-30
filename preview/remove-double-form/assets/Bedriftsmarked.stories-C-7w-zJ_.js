import{j as n,r as f}from"./iframe-CFM47A3t.js";import{a as j,B as p}from"./BreadcrumbItem-DdtsiagW.js";import{B as t}from"./Button-Dp47oiLc.js";import{LinkCard as b}from"./Card.stories-BM-G3ZhU.js";import{F as e}from"./Flex-BGasP5Df.js";import{L as g}from"./Link-B0ynnpyw.js";import{L as x}from"./Logo-CbHHKLe4.js";import{N as y}from"./NavLink-5zAK9-7L.js";import{c as F,b as C,T as l,a as B}from"./Tabs-CBawfPtP.js";import{N as T}from"./unicode-DWvs0Pen.js";import{C as i}from"./Card-DeTHxVNS.js";import{T as h}from"./Tag-DQwW0gof.js";import{C as S}from"./CardImage-DQh5v4q6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DrtMfFLW.js";import"./Loader-M1HgHEhs.js";import"./useDelayedRender-hyDrsfGg.js";import"./Image-eqXuhr9o.js";import"./mergeRefs-BrGXFy4h.js";import"./CheckIcon-BaEOChrB.js";import"./Icon-D4OObDPq.js";import"./CopyIcon-5t6EBahM.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-BSSCBbUa.js";import"./useId-CqyZTF6Z.js";import"./ArrowRightIcon-CVweNNBX.js";const w={full:/^(\d{3})(\d{3})(\d{3})$/};function k(r,a){const s=r.replace(/[\s-.]/g,""),d=w.full,c=s.match(d);return c?c.slice(1).filter(Boolean).join(T):r}const rn={title:"Skjermbilder/Bedriftsmarked",args:{forretningsnavn:"Bedrift AS",organisasjonsnummer:994111126},parameters:{layout:"fullscreen"}},u=()=>n.jsx(i,{children:n.jsx(e,{justifyContent:"center",as:"header",children:n.jsx("img",{src:"https://www.sparebank1.no/content/dam/SB1/ikoner/GUI-ikoner/logo-sparebank1.svg",height:"54",alt:"Sparebank 1 logo"})})}),v=({name:r="B",number:a=84})=>n.jsx(i,{variant:"low",as:"nav",padding:"l",style:{maxWidth:"25ch",minWidth:"25ch"},children:n.jsxs(e,{direction:"column",children:[n.jsxs(e,{direction:"column",gap:"none",children:[n.jsx("p",{children:r}),n.jsx("p",{children:k(a.toString())})]}),n.jsx("hr",{style:{color:"var(--jkl-color-border-separator)",width:"100%"}}),n.jsxs(e,{direction:"column",gap:"l",children:[[["Hjem","Forsikringer","Faktura","Dokumenter","Kjøp forsikring"],["Meld inn/ut ansatte","Endre antall ansatte","Tilganger - Bedrift AS"],["Endre kontaktinformasjon","Kontakt oss"]].map(s=>n.jsx(e,{direction:"column",gap:"xs",children:s.map(d=>n.jsx(y,{href:"#",children:d},d))},s.toString())),n.jsx("hr",{style:{color:"var(--jkl-color-border-separator)",width:"100%"}}),n.jsxs(e,{wrap:"wrap",children:[n.jsx(t,{children:"Logg ut"}),n.jsx(t,{children:"Bytt bedrift"})]}),n.jsx(e,{direction:"column",children:["Gå til pensjon","Meld skade"].map(s=>n.jsx(g,{href:"#",target:"_blank",children:s},s))})]})]})}),o={render:r=>n.jsxs("div",{style:{display:"grid",gridTemplateRows:"auto 1fr auto",minHeight:"100svh"},children:[n.jsx(u,{}),n.jsxs(e,{gap:"none",fill:!0,children:[n.jsx(v,{name:r.forretningsnavn,number:r.organisasjonsnummer}),n.jsxs(e,{as:"main",direction:"column",style:{padding:"4ex 2em",maxWidth:"1240px"},gap:"m",children:[n.jsxs(e,{as:"header",direction:"column",children:[n.jsx(j,{children:n.jsx(p,{isLastElement:!0,children:"Hjem"})}),n.jsxs("div",{children:[n.jsx("h1",{className:"jkl-heading-1",children:r.forretningsnavn}),n.jsxs("p",{children:["Organisasjonsnummer:"," ",k(r.organisasjonsnummer.toString())]})]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--jkl-unit-30)"},children:[n.jsx("h2",{style:{gridColumn:"1 / -1"},children:"Oppgaver"}),n.jsx(i,{padding:"l",style:{gridColumn:"1 / 3"},children:n.jsxs(e,{direction:"column",gap:"s",children:[n.jsx(e,{children:n.jsx(h,{variant:"warning",children:"Viktig"})}),n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-5",children:"Kilometerstand må oppdatertes for kjøretøy →"}),n.jsxs("p",{children:["For å få full erstatning ved en skade, må kilometerstanden være riktig."," "]})]})]})}),n.jsx("h2",{style:{gridColumn:"1 / -1"},children:"Snarveier"}),n.jsx(i,{padding:"l",children:n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-5",children:"Forsikringer →"}),n.jsx("p",{children:"Avtalene dere har hos oss"})]})}),n.jsx(i,{padding:"l",children:n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-5",children:"Faktura →"}),n.jsx("p",{children:"Se alle fakturaer for virksomheten din"})]})}),n.jsx(i,{padding:"l",children:n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-5",children:"Dokumenter →"}),n.jsx("p",{children:"Informasjon vi har sendt virksomheten din"})]})}),n.jsx("h2",{style:{gridColumn:"1 / -1"},children:"Aktuelt"}),n.jsxs(i,{padding:"l",children:[n.jsx(S,{alt:"Bil"}),n.jsxs(e,{direction:"column",gap:"s",children:[n.jsx(e,{children:n.jsx(h,{variant:"info",children:"Kjøretøy"})}),n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-5",children:"Kjøp bilforsikring →"}),n.jsx("p",{children:"Trenger dere ny bilforsikring eller ønsker å flytte forsikring fra annet selskap?"})]})]})]}),n.jsx("h2",{style:{gridColumn:"1 / -1"},children:"Ser du etter disse?"}),n.jsx(i,{padding:"l",children:n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-5",children:"Pensjon →"}),n.jsx("p",{children:"Oversikt over pensjonssparingen din"})]})}),n.jsx(i,{padding:"l",children:n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-5",children:"Gå til privatforsikringer →"}),n.jsx("p",{children:"Forsikringer registrert på deg som person"})]})})]})]})]}),n.jsx(i,{"data-theme":"dark",variant:"high",as:"footer",padding:"l",children:n.jsxs(e,{justifyContent:"space-between",children:[n.jsx(e,{gap:"m",children:["Samtykke","Fremtind Forsikring AS","Personvern og vilkår","Bruk av informasjonskapsler"].map(a=>n.jsx(g,{target:"_blank",children:a},a))}),n.jsx(x,{style:{width:"112px"}})]})})]})},m={render:r=>n.jsxs("div",{style:{display:"grid",gridTemplateRows:"auto 1fr auto",minHeight:"100svh"},children:[n.jsx(u,{}),n.jsxs(e,{gap:"none",fill:!0,children:[n.jsx(v,{name:r.forretningsnavn,number:r.organisasjonsnummer}),n.jsxs(e,{as:"main",direction:"column",style:{padding:"4ex 2em",maxWidth:"1240px"},gap:"m",children:[n.jsxs(e,{as:"header",direction:"column",children:[n.jsxs(j,{children:[n.jsx(p,{children:"Hjem"}),n.jsx(p,{isLastElement:!0,children:"Forsikringer"})]}),n.jsxs(e,{justifyContent:"space-between",children:[n.jsx("h1",{className:"jkl-heading-1",children:"Forsikringer"}),n.jsxs(e,{alignItems:"center",children:[n.jsx(t,{variant:"primary",children:"Meld skade"}),n.jsx(t,{children:"Lag ansattbrosjyre"}),n.jsx(t,{children:"Eksporter til Excel"})]})]})]}),n.jsx(e,{direction:"column",gap:"none",children:n.jsxs(F,{children:[n.jsxs(C,{children:[n.jsx(l,{children:"Alle forsikringer"}),n.jsx(l,{children:"Ansatte"}),n.jsx(l,{children:"Drift og eiendom"}),n.jsx(l,{children:"Kjøretøy"})]}),n.jsx(B,{children:n.jsx(e,{gap:"m",wrap:"wrap",style:{padding:"var(--jkl-spacing-m) var(--jkl-spacing-0)"},children:[1,2,3,4,5,6,7].map(a=>f.createElement(i,{...b.args,key:a}))})})]})})]})]}),n.jsx(i,{"data-theme":"dark",variant:"high",as:"footer",padding:"l",children:n.jsxs(e,{justifyContent:"space-between",children:[n.jsx(e,{gap:"m",children:["Samtykke","Fremtind Forsikring AS","Personvern og vilkår","Bruk av informasjonskapsler"].map(a=>n.jsx(g,{target:"_blank",children:a},a))}),n.jsx(x,{style:{width:"112px"}})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  //@ts-ignore
  render: (args: {
    forretningsnavn: string;
    organisasjonsnummer: number;
  }) => {
    return <div style={{
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      minHeight: "100svh"
    }}>
                <Header />
                <Flex gap="none" fill>
                    <Sidebar name={args.forretningsnavn} number={args.organisasjonsnummer} />
                    <Flex as="main" direction="column" style={{
          padding: "4ex 2em",
          maxWidth: "1240px"
        }} gap="m">
                        <Flex as="header" direction="column">
                            <Breadcrumb>
                                <BreadcrumbItem isLastElement>
                                    Hjem
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div>
                                <h1 className="jkl-heading-1">
                                    {args.forretningsnavn}
                                </h1>
                                <p>
                                    Organisasjonsnummer:{" "}
                                    {formatOrganisasjonsnummer(args.organisasjonsnummer.toString())}
                                </p>
                            </div>
                        </Flex>
                        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--jkl-unit-30)"
          }}>
                            <h2 style={{
              gridColumn: "1 / -1"
            }}>Oppgaver</h2>
                            <Card padding="l" style={{
              gridColumn: "1 / 3"
            }}>
                                <Flex direction="column" gap="s">
                                    <Flex>
                                        <Tag variant="warning">Viktig</Tag>
                                    </Flex>

                                    <div>
                                        <p className="jkl-heading-5">
                                            Kilometerstand må oppdatertes for
                                            kjøretøy →
                                        </p>
                                        <p>
                                            For å få full erstatning ved en
                                            skade, må kilometerstanden være
                                            riktig.{" "}
                                        </p>
                                    </div>
                                </Flex>
                            </Card>

                            <h2 style={{
              gridColumn: "1 / -1"
            }}>Snarveier</h2>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">
                                        Forsikringer →
                                    </p>
                                    <p>Avtalene dere har hos oss</p>
                                </div>
                            </Card>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">Faktura →</p>
                                    <p>
                                        Se alle fakturaer for virksomheten din
                                    </p>
                                </div>
                            </Card>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">
                                        Dokumenter →
                                    </p>
                                    <p>
                                        Informasjon vi har sendt virksomheten
                                        din
                                    </p>
                                </div>
                            </Card>

                            <h2 style={{
              gridColumn: "1 / -1"
            }}>Aktuelt</h2>
                            <Card padding="l">
                                <CardImage alt="Bil" />
                                <Flex direction="column" gap="s">
                                    <Flex>
                                        <Tag variant="info">Kjøretøy</Tag>
                                    </Flex>

                                    <div>
                                        <p className="jkl-heading-5">
                                            Kjøp bilforsikring →
                                        </p>
                                        <p>
                                            Trenger dere ny bilforsikring eller
                                            ønsker å flytte forsikring fra annet
                                            selskap?
                                        </p>
                                    </div>
                                </Flex>
                            </Card>

                            <h2 style={{
              gridColumn: "1 / -1"
            }}>
                                Ser du etter disse?
                            </h2>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">Pensjon →</p>
                                    <p>Oversikt over pensjonssparingen din</p>
                                </div>
                            </Card>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">
                                        Gå til privatforsikringer →
                                    </p>
                                    <p>
                                        Forsikringer registrert på deg som
                                        person
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </Flex>
                </Flex>
                <Card data-theme="dark" variant="high" as="footer" padding="l">
                    <Flex justifyContent="space-between">
                        <Flex gap="m">
                            {["Samtykke", "Fremtind Forsikring AS", "Personvern og vilkår", "Bruk av informasjonskapsler"].map(link => <Link key={link} target="_blank">
                                    {link}
                                </Link>)}
                        </Flex>
                        <Logo style={{
            width: "112px"
          }} />
                    </Flex>
                </Card>
            </div>;
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  //@ts-ignore
  render: (args: {
    forretningsnavn: string;
    organisasjonsnummer: number;
  }) => {
    return <div style={{
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      minHeight: "100svh"
    }}>
                <Header />
                <Flex gap="none" fill>
                    <Sidebar name={args.forretningsnavn} number={args.organisasjonsnummer} />
                    <Flex as="main" direction="column" style={{
          padding: "4ex 2em",
          maxWidth: "1240px"
        }} gap="m">
                        <Flex as="header" direction="column">
                            <Breadcrumb>
                                <BreadcrumbItem>Hjem</BreadcrumbItem>
                                <BreadcrumbItem isLastElement>
                                    Forsikringer
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <Flex justifyContent="space-between">
                                <h1 className="jkl-heading-1">Forsikringer</h1>
                                <Flex alignItems="center">
                                    <Button variant="primary">
                                        Meld skade
                                    </Button>
                                    <Button>Lag ansattbrosjyre</Button>
                                    <Button>Eksporter til Excel</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction="column" gap="none">
                            <Tabs>
                                <TabList>
                                    <Tab>Alle forsikringer</Tab>
                                    <Tab>Ansatte</Tab>
                                    <Tab>Drift og eiendom</Tab>
                                    <Tab>Kjøretøy</Tab>
                                </TabList>
                                <TabPanel>
                                    <Flex gap="m" wrap="wrap" style={{
                  padding: "var(--jkl-spacing-m) var(--jkl-spacing-0)"
                }}>
                                        {[1, 2, 3, 4, 5, 6, 7].map(number => <Card {...LinkCard.args} key={number} />)}
                                    </Flex>
                                </TabPanel>
                            </Tabs>
                        </Flex>
                    </Flex>
                </Flex>
                <Card data-theme="dark" variant="high" as="footer" padding="l">
                    <Flex justifyContent="space-between">
                        <Flex gap="m">
                            {["Samtykke", "Fremtind Forsikring AS", "Personvern og vilkår", "Bruk av informasjonskapsler"].map(link => <Link key={link} target="_blank">
                                    {link}
                                </Link>)}
                        </Flex>
                        <Logo style={{
            width: "112px"
          }} />
                    </Flex>
                </Card>
            </div>;
  }
}`,...m.parameters?.docs?.source}}};const an=["Hjem","Forsikringsoversikt"];export{m as Forsikringsoversikt,o as Hjem,an as __namedExportsOrder,rn as default};

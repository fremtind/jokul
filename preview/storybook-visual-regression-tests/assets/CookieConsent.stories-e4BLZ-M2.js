import{j as e}from"./iframe-CLrGhnM6.js";import{B as j}from"./Button-BrnhCQ2Y.js";import{C as p,a as h,u as y}from"./_index-DNFyIeeP.js";import{F as a}from"./Flex-D0t1qed2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DDRBhUQf.js";import"./Loader-CVFMSfu6.js";import"./useDelayedRender-D6IsmX0V.js";import"./index-Dz2TraFa.js";import"./index-MiJZldQf.js";import"./Modal-CqOzTL4R.js";import"./IconButton-CC5JNDu4.js";import"./CloseIcon-DWnMkYYs.js";import"./Icon-CsGblwbZ.js";import"./useModal-CGtJP_C-.js";import"./index-Chjiymov.js";import"./useId-Dh0QkaKz.js";import"./Link-CaLpo0Hy.js";import"./SlotComponent-Bib68mBL.js";import"./mergeRefs-SxiKDVxR.js";const{expect:C,screen:m,waitFor:L}=__STORYBOOK_MODULE_TEST__;function d({cookieName:n,functional:t=!0,statistics:i=!0,aboutPage:l,aboutPageLinkText:g,blocking:k=!1,heading:c,body:u,openLabel:b,openTestId:v="open-cookie-consent"}){const x=()=>{const{openConsentModal:f}=y();return e.jsx(j,{onClick:()=>f(),"data-testid":v,children:b})};return e.jsx("div",{style:{maxWidth:"40rem"},children:e.jsx(h,{cookieName:n,functional:t,statistics:i,children:e.jsxs(a,{direction:"column",gap:"m",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c}),u]}),e.jsx("div",{children:e.jsx(x,{})}),e.jsx(p,{blocking:k,aboutPage:l,aboutPageLinkText:g})]})})})}const A={title:"Komponenter/CookieConsent",component:p,parameters:{layout:"centered"},args:{cookieName:"demo-consent-cookie",functional:!0,statistics:!0,blocking:!1,aboutPage:"https://www.fremtind.no/informasjonskapsler",aboutPageLinkText:"Les mer om hvordan vi bruker informasjons­kapsler",openTestId:"open-cookie-consent"},argTypes:{heading:{table:{disable:!0}},body:{table:{disable:!0}},openLabel:{table:{disable:!0}},openTestId:{table:{disable:!0}},cookieName:{control:"text",table:{defaultValue:{summary:"demo-consent-cookie"}}},functional:{control:"boolean",table:{defaultValue:{summary:"true"}}},statistics:{control:"boolean",table:{defaultValue:{summary:"true"}}},blocking:{control:"boolean",table:{defaultValue:{summary:"false"}}},aboutPage:{control:"text",table:{defaultValue:{summary:"https://www.fremtind.no/informasjonskapsler"}}},aboutPageLinkText:{control:"text",table:{defaultValue:{summary:"Les mer om hvordan vi bruker informasjons­kapsler"}}}},tags:["autodocs"],play:async({canvas:n,userEvent:t,step:i})=>{await i("Åpne cookie consent",async()=>{const l=n.getByTestId("open-cookie-consent");await t.click(l),await L(()=>{C(m.queryByRole("dialog")||m.queryByRole("alertdialog")).toBeInTheDocument()})})}},r={name:"Personverninnstillinger",args:{heading:"Personverninnstillinger",body:e.jsxs(a,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Brukeren kan når som helst åpne samtykkedialogen igjen fra en side for personvern eller innstillinger."}),e.jsx("p",{children:"Dette er den vanligste integrasjonen: en vanlig knapp som åpner modalen ved behov."})]}),openLabel:"Endre samtykke"},render:n=>e.jsx(d,{...n})},o={name:"Førstegangsvalg",args:{heading:"Samtykke ved første besøk",body:e.jsxs(a,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Når brukeren må ta stilling før de går videre, kan modalen være blokkerende."}),e.jsx("p",{children:"Denne varianten bruker `blocking`, som gjør dialogen til et `alertdialog`."})]}),openLabel:"Vis samtykkedialog",blocking:!0},render:n=>e.jsx(d,{...n})},s={name:"Tilpasset lenketekst",args:{heading:"Lenke til egen informasjonsside",body:e.jsxs(a,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Dersom løsningen har egen ordlyd for personvern eller informasjonskapsler, kan lenketeksten tilpasses."}),e.jsx("p",{children:"Selve dialogen forblir lik, men lenken kan følge språk og begreper i produktet ditt."})]}),openLabel:"Åpne personvernvalg",aboutPageLinkText:"Se hvordan vi bruker informasjons­kapsler i løsningen"},render:n=>e.jsx(d,{...n})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Personverninnstillinger",
  args: {
    heading: "Personverninnstillinger",
    body: <Flex direction="column" gap="m">
                <p>
                    Brukeren kan når som helst åpne samtykkedialogen igjen fra
                    en side for personvern eller innstillinger.
                </p>
                <p>
                    Dette er den vanligste integrasjonen: en vanlig knapp som
                    åpner modalen ved behov.
                </p>
            </Flex>,
    openLabel: "Endre samtykke"
  },
  render: args => <CookieConsentExample {...args} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Førstegangsvalg",
  args: {
    heading: "Samtykke ved første besøk",
    body: <Flex direction="column" gap="m">
                <p>
                    Når brukeren må ta stilling før de går videre, kan modalen
                    være blokkerende.
                </p>
                <p>
                    Denne varianten bruker \`blocking\`, som gjør dialogen til et
                    \`alertdialog\`.
                </p>
            </Flex>,
    openLabel: "Vis samtykkedialog",
    blocking: true
  },
  render: args => <CookieConsentExample {...args} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Tilpasset lenketekst",
  args: {
    heading: "Lenke til egen informasjonsside",
    body: <Flex direction="column" gap="m">
                <p>
                    Dersom løsningen har egen ordlyd for personvern eller
                    informasjonskapsler, kan lenketeksten tilpasses.
                </p>
                <p>
                    Selve dialogen forblir lik, men lenken kan følge språk og
                    begreper i produktet ditt.
                </p>
            </Flex>,
    openLabel: "Åpne personvernvalg",
    aboutPageLinkText: "Se hvordan vi bruker informasjons­kapsler i løsningen"
  },
  render: args => <CookieConsentExample {...args} />
}`,...s.parameters?.docs?.source}}};const G=["Personverninnstillinger","Forstegangsvalg","TilpassetLenketekst"];export{o as Forstegangsvalg,r as Personverninnstillinger,s as TilpassetLenketekst,G as __namedExportsOrder,A as default};

import{R as O,r as d,j as e}from"./iframe-CjhOYAjm.js";import{B as j}from"./Button-DEF8fr-M.js";import{R as M}from"./index-Ct9qkqRv.js";import{a as S,b as P,M as F,c as D,d as _,f as B,g as I}from"./Modal-JT5ats9f.js";import{u as R}from"./useModal-BhRIF5vT.js";import{F as f}from"./Flex-B1RN7dDk.js";import{L as V}from"./Link-BgpnMHWT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CIM55qh4.js";import"./Loader-B2z-mgWd.js";import"./useDelayedRender-Ci1uhvRH.js";import"./index-Cumdrt7-.js";import"./IconButton-DIb7b6Sv.js";import"./CloseIcon-BxcKpaZ1.js";import"./Icon-CqRapZls.js";import"./index-Chjiymov.js";import"./useId-BN9niFOX.js";import"./SlotComponent-Boc56lp2.js";import"./mergeRefs-D5cOfkrA.js";const N=n=>{if(typeof document>"u")return;const o=document.cookie.split(";").map(t=>t.trim().split("=")).find(t=>t[0]===n);if(o)return o},$=({adapter:n,name:o})=>{const t=N(o);if(t)return JSON.parse(t[1]);if(n)return n()},q=10368e3,A=({consent:n,maxAge:o=q,name:t,domain:r,path:s})=>{document.cookie=[`${t}=${JSON.stringify(n)}`,`max-age=${o}`,"SameSite=Lax",!!r&&`domain=${r}`,!!s&&`path=${s}`].filter(a=>a).join(";")},J=(n,o)=>{if(!o)return Object.values(n).some(s=>s);const t=new Map(Object.entries(o)),r=Object.entries(n);for(const[s,a]of r)if(a&&t.get(s)===null)return!0;return!1},K=({functional:n,statistics:o})=>({...n&&{functional:n},...o&&{statistics:o}}),U="fremtind-cookie-consent",C=O.createContext(void 0),H=({children:n,cookieAdapter:o,functional:t,statistics:r,cookieName:s=U,cookieDomain:a,cookiePath:m})=>{const[p,u]=d.useState(()=>Date.now()),l=d.useMemo(()=>K({functional:t,statistics:r}),[t,r]),c=d.useMemo(()=>$({adapter:o,name:s})??{functional:null,statistics:null},[o,s,p]),[k,i]=d.useState(()=>J(l,c));return e.jsx(C.Provider,{value:{isOpen:k,setIsOpen:i,updateCurrentConsents:()=>u(Date.now()),requirement:l,currentConsent:c,cookieName:s,cookieDomain:a,cookiePath:m},children:n})},G=()=>{const n=O.useContext(C);if(n===void 0)throw new Error("CookieConsent must be used within a CookieConsentProvider");return n},W=()=>{const n=d.useContext(C);if(n===void 0)throw new Error("useCookieConsent must be used within a CookieConsentProvider");const o=()=>{n.setIsOpen(!0)},t=n.currentConsent;return{openConsentModal:o,consents:t}},T=({blocking:n,onAccept:o,aboutPage:t="https://www.fremtind.no/informasjonskapsler",aboutPageLinkText:r="Les mer om hvilke informasjons­kapsler vi lagrer her",...s})=>{const{currentConsent:a,cookieName:m,cookieDomain:p,cookiePath:u,isOpen:l,setIsOpen:c,updateCurrentConsents:k}=G(),[i,b]=R({id:`jkl-cookie-modal-${d.useId()}`,role:n?"alertdialog":"dialog",title:"Informasjonskapsler"});if(d.useEffect(()=>{l?i?.show():i?.hide()},[i,l]),d.useEffect(()=>{const g=()=>c(!1);return i?.on("hide",g),()=>{i?.off("hide",g)}},[i,c]),typeof document>"u")return null;if(typeof navigator<"u"&&!navigator.cookieEnabled)return o?.({functional:"denied",statistics:"denied",marketing:"denied"}),null;const w=g=>{const L={...a,functional:g,statistics:g,marketing:"denied"};A({consent:L,name:m,domain:p,path:u}),o?.(L),k(),i?.hide()};return M.createPortal(e.jsxs(S,{...b.container,...s,"data-cookie-consent-open":l,children:[e.jsx(P,{...b.overlay}),e.jsxs(F,{...b.modal,children:[e.jsx(D,{children:e.jsx(_,{...b.title,children:"Får vi bruke valgfrie informasjons­kapsler?"})}),e.jsx(B,{children:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Fremtind ønsker å samle anonym statistikk for å forstå hvordan nettsidene våre brukes. Det hjelper oss til å gjøre innhold og løsninger bedre og mer brukervennlige."}),e.jsxs("p",{children:[e.jsx(V,{href:t,target:"_blank",children:r}),"."]})]})}),e.jsxs(I,{children:[e.jsx(j,{variant:"secondary","data-testid":"jkl-cookie-consent-godta",type:"button",onClick:()=>w("accepted"),children:"Ja, det er greit"}),e.jsx(j,{variant:"secondary","data-testid":"jkl-cookie-consent-nekt",type:"button",onClick:()=>w("denied"),children:"Nei takk"})]})]})]}),document.body)},{expect:X,screen:E,waitFor:Y}=__STORYBOOK_MODULE_TEST__;function y({cookieName:n,functional:o=!0,statistics:t=!0,aboutPage:r,aboutPageLinkText:s,blocking:a=!1,heading:m,body:p,openLabel:u,openTestId:l="open-cookie-consent"}){const c=()=>{const{openConsentModal:k}=W();return e.jsx(j,{onClick:()=>k(),"data-testid":l,children:u})};return e.jsx("div",{style:{maxWidth:"40rem"},children:e.jsx(H,{cookieName:n,functional:o,statistics:t,children:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsxs("div",{children:[e.jsx("h2",{children:m}),p]}),e.jsx("div",{children:e.jsx(c,{})}),e.jsx(T,{blocking:a,aboutPage:r,aboutPageLinkText:s})]})})})}const be={title:"Komponenter/CookieConsent",component:T,parameters:{layout:"centered"},args:{cookieName:"demo-consent-cookie",functional:!0,statistics:!0,blocking:!1,aboutPage:"https://www.fremtind.no/informasjonskapsler",aboutPageLinkText:"Les mer om hvordan vi bruker informasjons­kapsler",openTestId:"open-cookie-consent"},argTypes:{heading:{table:{disable:!0}},body:{table:{disable:!0}},openLabel:{table:{disable:!0}},openTestId:{table:{disable:!0}},cookieName:{control:"text",table:{defaultValue:{summary:"demo-consent-cookie"}}},functional:{control:"boolean",table:{defaultValue:{summary:"true"}}},statistics:{control:"boolean",table:{defaultValue:{summary:"true"}}},blocking:{control:"boolean",table:{defaultValue:{summary:"false"}}},aboutPage:{control:"text",table:{defaultValue:{summary:"https://www.fremtind.no/informasjonskapsler"}}},aboutPageLinkText:{control:"text",table:{defaultValue:{summary:"Les mer om hvordan vi bruker informasjons­kapsler"}}}},tags:["autodocs"],play:async({canvas:n,userEvent:o,step:t})=>{await t("Åpne cookie consent",async()=>{const r=n.getByTestId("open-cookie-consent");await o.click(r),await Y(()=>{X(E.queryByRole("dialog")||E.queryByRole("alertdialog")).toBeInTheDocument()})})}},v={name:"Personverninnstillinger",args:{heading:"Personverninnstillinger",body:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Brukeren kan når som helst åpne samtykkedialogen igjen fra en side for personvern eller innstillinger."}),e.jsx("p",{children:"Dette er den vanligste integrasjonen: en vanlig knapp som åpner modalen ved behov."})]}),openLabel:"Endre samtykke"},render:n=>e.jsx(y,{...n})},h={name:"Førstegangsvalg",args:{heading:"Samtykke ved første besøk",body:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Når brukeren må ta stilling før de går videre, kan modalen være blokkerende."}),e.jsx("p",{children:"Denne varianten bruker `blocking`, som gjør dialogen til et `alertdialog`."})]}),openLabel:"Vis samtykkedialog",blocking:!0},render:n=>e.jsx(y,{...n})},x={name:"Tilpasset lenketekst",args:{heading:"Lenke til egen informasjonsside",body:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Dersom løsningen har egen ordlyd for personvern eller informasjonskapsler, kan lenketeksten tilpasses."}),e.jsx("p",{children:"Selve dialogen forblir lik, men lenken kan følge språk og begreper i produktet ditt."})]}),openLabel:"Åpne personvernvalg",aboutPageLinkText:"Se hvordan vi bruker informasjons­kapsler i løsningen"},render:n=>e.jsx(y,{...n})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ve=["Personverninnstillinger","Forstegangsvalg","TilpassetLenketekst"];export{h as Forstegangsvalg,v as Personverninnstillinger,x as TilpassetLenketekst,ve as __namedExportsOrder,be as default};

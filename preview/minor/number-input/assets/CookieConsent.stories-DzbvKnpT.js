import{R as E,r as d,j as e}from"./iframe-DlK-yrS2.js";import{B as x}from"./Button-CG2JCdVS.js";import{R as P}from"./index-WWGyqG3O.js";import{a as M,b as D,M as F,c as _,d as N,f as R,g as q}from"./Modal-CYa8fFQY.js";import{u as B}from"./useModal-DNZsWnh_.js";import{F as f}from"./Flex-CnDuwEbz.js";import{L as I}from"./Link-CWDvrafy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BJMiXRDL.js";import"./Loader-CIMey_Nh.js";import"./useDelayedRender-BxSuNTzg.js";import"./index-DWNxxjzM.js";import"./IconButton-Buy7xEWQ.js";import"./CloseIcon-BLVhbVw6.js";import"./Icon-cI81DBuh.js";import"./index-Chjiymov.js";import"./useId-Blr-lK5N.js";import"./SlotComponent-DlJjMPLM.js";import"./mergeRefs-_UajqyUr.js";const V=n=>{if(typeof document>"u")return;const t=document.cookie.split(";").map(o=>o.trim().split("=")).find(o=>o[0]===n);if(t)return t},A=({adapter:n,name:t})=>{const o=V(t);if(o)return JSON.parse(o[1]);if(n)return n()},$=10368e3,J=({consent:n,maxAge:t=$,name:o,domain:r,path:s})=>{document.cookie=[`${o}=${JSON.stringify(n)}`,`max-age=${t}`,"SameSite=Lax",!!r&&`domain=${r}`,!!s&&`path=${s}`].filter(a=>a).join(";")},K=(n,t)=>{if(!t)return Object.values(n).some(s=>s);const o=new Map(Object.entries(t)),r=Object.entries(n);for(const[s,a]of r)if(a&&o.get(s)===null)return!0;return!1},U=({functional:n,statistics:t})=>({...n&&{functional:n},...t&&{statistics:t}}),H="fremtind-cookie-consent",C=E.createContext(void 0),S=({children:n,cookieAdapter:t,functional:o,statistics:r,cookieName:s=H,cookieDomain:a,cookiePath:m})=>{const[u,p]=d.useState(()=>Date.now()),l=d.useMemo(()=>U({functional:o,statistics:r}),[o,r]),c=d.useMemo(()=>A({adapter:t,name:s})??{functional:null,statistics:null},[t,s,u]),[k,i]=d.useState(()=>K(l,c));return e.jsx(C.Provider,{value:{isOpen:k,setIsOpen:i,updateCurrentConsents:()=>p(Date.now()),requirement:l,currentConsent:c,cookieName:s,cookieDomain:a,cookiePath:m},children:n})},G=()=>{const n=E.useContext(C);if(n===void 0)throw new Error("CookieConsent must be used within a CookieConsentProvider");return n},W=()=>{const n=d.useContext(C);if(n===void 0)throw new Error("useCookieConsent must be used within a CookieConsentProvider");const t=()=>{n.setIsOpen(!0)},o=n.currentConsent;return{openConsentModal:t,consents:o}};S.__docgenInfo={description:"",methods:[],displayName:"CookieConsentProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},cookieAdapter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Consent | undefined",signature:{arguments:[],return:{name:"union",raw:"Consent | undefined",elements:[{name:"signature",type:"object",raw:`{
    functional?: ConsentState;
    statistics?: ConsentState;
    marketing?: ConsentState;
}`,signature:{properties:[{key:"functional",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}},{key:"statistics",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}},{key:"marketing",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}}]}},{name:"undefined"}]}}},description:""},cookieName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"fremtind-cookie-consent"',computed:!1}},cookieDomain:{required:!1,tsType:{name:"string"},description:""},cookiePath:{required:!1,tsType:{name:"string"},description:""}}};const O=({blocking:n,onAccept:t,aboutPage:o="https://www.fremtind.no/informasjonskapsler",aboutPageLinkText:r="Les mer om hvilke informasjons­kapsler vi lagrer her",...s})=>{const{currentConsent:a,cookieName:m,cookieDomain:u,cookiePath:p,isOpen:l,setIsOpen:c,updateCurrentConsents:k}=G(),[i,v]=B({id:`jkl-cookie-modal-${d.useId()}`,role:n?"alertdialog":"dialog",title:"Informasjonskapsler"});if(d.useEffect(()=>{l?i?.show():i?.hide()},[i,l]),d.useEffect(()=>{const g=()=>c(!1);return i?.on("hide",g),()=>{i?.off("hide",g)}},[i,c]),typeof document>"u")return null;if(typeof navigator<"u"&&!navigator.cookieEnabled)return t?.({functional:"denied",statistics:"denied",marketing:"denied"}),null;const w=g=>{const T={...a,functional:g,statistics:g,marketing:"denied"};J({consent:T,name:m,domain:u,path:p}),t?.(T),k(),i?.hide()};return P.createPortal(e.jsxs(M,{...v.container,...s,"data-cookie-consent-open":l,children:[e.jsx(D,{...v.overlay}),e.jsxs(F,{...v.modal,children:[e.jsx(_,{children:e.jsx(N,{...v.title,children:"Får vi bruke valgfrie informasjons­kapsler?"})}),e.jsx(R,{children:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Fremtind ønsker å samle anonym statistikk for å forstå hvordan nettsidene våre brukes. Det hjelper oss til å gjøre innhold og løsninger bedre og mer brukervennlige."}),e.jsxs("p",{children:[e.jsx(I,{href:o,target:"_blank",children:r}),"."]})]})}),e.jsxs(q,{children:[e.jsx(x,{variant:"secondary","data-testid":"jkl-cookie-consent-godta",type:"button",onClick:()=>w("accepted"),children:"Ja, det er greit"}),e.jsx(x,{variant:"secondary","data-testid":"jkl-cookie-consent-nekt",type:"button",onClick:()=>w("denied"),children:"Nei takk"})]})]})]}),document.body)},{expect:X,screen:L,waitFor:Y}=__STORYBOOK_MODULE_TEST__;function y({cookieName:n,functional:t=!0,statistics:o=!0,aboutPage:r,aboutPageLinkText:s,blocking:a=!1,heading:m,body:u,openLabel:p,openTestId:l="open-cookie-consent"}){const c=()=>{const{openConsentModal:k}=W();return e.jsx(x,{onClick:()=>k(),"data-testid":l,children:p})};return e.jsx("div",{style:{maxWidth:"40rem"},children:e.jsx(S,{cookieName:n,functional:t,statistics:o,children:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsxs("div",{children:[e.jsx("h2",{children:m}),u]}),e.jsx("div",{children:e.jsx(c,{})}),e.jsx(O,{blocking:a,aboutPage:r,aboutPageLinkText:s})]})})})}const ve={title:"Komponenter/CookieConsent",component:O,parameters:{layout:"centered"},args:{cookieName:"demo-consent-cookie",functional:!0,statistics:!0,blocking:!1,aboutPage:"https://www.fremtind.no/informasjonskapsler",aboutPageLinkText:"Les mer om hvordan vi bruker informasjons­kapsler",openTestId:"open-cookie-consent"},argTypes:{heading:{table:{disable:!0}},body:{table:{disable:!0}},openLabel:{table:{disable:!0}},openTestId:{table:{disable:!0}},cookieName:{control:"text",table:{defaultValue:{summary:"demo-consent-cookie"}}},functional:{control:"boolean",table:{defaultValue:{summary:"true"}}},statistics:{control:"boolean",table:{defaultValue:{summary:"true"}}},blocking:{control:"boolean",table:{defaultValue:{summary:"false"}}},aboutPage:{control:"text",table:{defaultValue:{summary:"https://www.fremtind.no/informasjonskapsler"}}},aboutPageLinkText:{control:"text",table:{defaultValue:{summary:"Les mer om hvordan vi bruker informasjons­kapsler"}}}},tags:["autodocs"],play:async({canvas:n,userEvent:t,step:o})=>{await o("Åpne cookie consent",async()=>{const r=n.getByTestId("open-cookie-consent");await t.click(r),await Y(()=>{X(L.queryByRole("dialog")||L.queryByRole("alertdialog")).toBeInTheDocument()})})}},b={name:"Personverninnstillinger",args:{heading:"Personverninnstillinger",body:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Brukeren kan når som helst åpne samtykkedialogen igjen fra en side for personvern eller innstillinger."}),e.jsx("p",{children:"Dette er den vanligste integrasjonen: en vanlig knapp som åpner modalen ved behov."})]}),openLabel:"Endre samtykke"},render:n=>e.jsx(y,{...n})},h={name:"Førstegangsvalg",args:{heading:"Samtykke ved første besøk",body:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Når brukeren må ta stilling før de går videre, kan modalen være blokkerende."}),e.jsx("p",{children:"Denne varianten bruker `blocking`, som gjør dialogen til et `alertdialog`."})]}),openLabel:"Vis samtykkedialog",blocking:!0},render:n=>e.jsx(y,{...n})},j={name:"Tilpasset lenketekst",args:{heading:"Lenke til egen informasjonsside",body:e.jsxs(f,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Dersom løsningen har egen ordlyd for personvern eller informasjonskapsler, kan lenketeksten tilpasses."}),e.jsx("p",{children:"Selve dialogen forblir lik, men lenken kan følge språk og begreper i produktet ditt."})]}),openLabel:"Åpne personvernvalg",aboutPageLinkText:"Se hvordan vi bruker informasjons­kapsler i løsningen"},render:n=>e.jsx(y,{...n})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const be=["Personverninnstillinger","Forstegangsvalg","TilpassetLenketekst"];export{h as Forstegangsvalg,b as Personverninnstillinger,j as TilpassetLenketekst,be as __namedExportsOrder,ve as default};

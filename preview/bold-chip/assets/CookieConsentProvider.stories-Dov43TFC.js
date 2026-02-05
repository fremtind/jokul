import{r as d,j as o,R as T}from"./iframe-DLN0b-4F.js";import{B as y}from"./Button-Cg9lJLCj.js";import{R as E}from"./index-DsJ7d7fO.js";import{M as I,a as _,b as N,c as S,d as R,f as D,g as q}from"./Modal-b7x8_BH0.js";import{u as A}from"./useModal-CdQ5gLd8.js";import{F as P}from"./Flex-D11C1CZz.js";import{L as F}from"./Link-8ZWjBPba.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-By_-BZPv.js";import"./Loader-DzlZJrDT.js";import"./useDelayedRender-Dr0HCIXK.js";import"./index-Dq-2xu2D.js";import"./IconButton-DTRMJQC9.js";import"./CloseIcon-CV1LrAhR.js";import"./Icon-DLt8tIui.js";import"./index-Chjiymov.js";import"./useId-CBOygkYO.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-DKOCD_CW.js";import"./mergeRefs-BDUwfDvk.js";const L=e=>{if(typeof document>"u")return;const t=document.cookie.split(";").map(n=>n.trim().split("=")).find(n=>n[0]===e);if(t)return t},$=({adapter:e,name:t})=>{const n=L(t);if(n)return JSON.parse(n[1]);if(e)return e()},J=10368e3,O=({consent:e,maxAge:t=J,name:n,domain:s,path:a})=>{document.cookie=[`${n}=${JSON.stringify(e)}`,`max-age=${t}`,"SameSite=Lax",!!s&&`domain=${s}`,!!a&&`path=${a}`].filter(c=>c).join(";")},K=(e,t)=>{if(!t)return Object.values(e).some(a=>a);const n=new Map(Object.entries(t)),s=Object.entries(e);for(const[a,c]of s)if(c&&n.get(a)===null)return!0;return!1},U=({functional:e,statistics:t})=>({...e&&{functional:e},...t&&{statistics:t}}),H="fremtind-cookie-consent",j=T.createContext(void 0),M=({children:e,cookieAdapter:t,functional:n,statistics:s,cookieName:a=H,cookieDomain:c,cookiePath:l})=>{const[g,m]=d.useState(()=>Date.now()),p=d.useMemo(()=>U({functional:n,statistics:s}),[n,s]),C=d.useMemo(()=>$({adapter:t,name:a})??{functional:null,statistics:null},[t,a,g]),[r,u]=d.useState(()=>K(p,C));return o.jsx(j.Provider,{value:{isOpen:r,setIsOpen:u,updateCurrentConsents:()=>m(Date.now()),requirement:p,currentConsent:C,cookieName:a,cookieDomain:c,cookiePath:l},children:e})},V=()=>{const e=T.useContext(j);if(e===void 0)throw new Error("CookieConsent must be used within a CookieConsentProvider");return e},G=()=>{const e=d.useContext(j);if(e===void 0)throw new Error("useCookieConsent must be used within a CookieConsentProvider");const t=()=>{e.setIsOpen(!0)},n=e.currentConsent;return{openConsentModal:t,consents:n}};M.__docgenInfo={description:"",methods:[],displayName:"CookieConsentProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},cookieAdapter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Consent | undefined",signature:{arguments:[],return:{name:"union",raw:"Consent | undefined",elements:[{name:"signature",type:"object",raw:`{
    functional?: ConsentState;
    statistics?: ConsentState;
    marketing?: ConsentState;
}`,signature:{properties:[{key:"functional",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}},{key:"statistics",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}},{key:"marketing",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}}]}},{name:"undefined"}]}}},description:""},cookieName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"fremtind-cookie-consent"',computed:!1}},cookieDomain:{required:!1,tsType:{name:"string"},description:""},cookiePath:{required:!1,tsType:{name:"string"},description:""}}};const B=({blocking:e,onAccept:t,aboutPage:n="https://www.fremtind.no/informasjonskapsler",...s})=>{const{currentConsent:a,cookieName:c,cookieDomain:l,cookiePath:g,isOpen:m,setIsOpen:p,updateCurrentConsents:C}=V(),[r,u]=A({id:`jkl-cookie-modal-${d.useId()}`,role:e?"alertdialog":"dialog",title:"Informasjonskapsler"});if(d.useEffect(()=>{m?r?.show():r?.hide()},[r,m]),d.useEffect(()=>{const k=()=>p(!1);return r?.on("hide",k),()=>{r?.off("hide",k)}},[r,p]),typeof document>"u")return null;if(typeof navigator<"u"&&!navigator.cookieEnabled)return t?.({functional:"denied",statistics:"denied",marketing:"denied"}),null;const h=k=>{const v={...a,functional:k,statistics:k,marketing:"denied"};O({consent:v,name:c,domain:l,path:g}),t?.(v),C(),r?.hide()};return E.createPortal(o.jsxs(I,{...u.container,...s,"data-cookie-consent-open":m,children:[o.jsx(_,{...u.overlay}),o.jsxs(N,{...u.modal,children:[o.jsx(S,{children:o.jsx(R,{...u.title,children:"Får vi bruke valgfrie informasjonskapsler?"})}),o.jsx(D,{children:o.jsxs(P,{direction:"column",gap:"m",children:[o.jsx("p",{children:"Vi ønsker å samle anonym statistikk for å forstå hvordan nettsidene våre brukes. Det hjelper oss til å gjøre innhold og løsninger bedre og mer brukervennlige."}),o.jsxs("p",{children:[o.jsx(F,{href:n,target:"_blank",children:"Les mer om hvilke informasjonskapsler vi lagrer her"}),"."]})]})}),o.jsxs(q,{children:[o.jsx(y,{variant:"secondary","data-testid":"jkl-cookie-consent-godta",type:"button",onClick:()=>h("accepted"),children:"Ja, det er greit"}),o.jsx(y,{variant:"secondary","data-testid":"jkl-cookie-consent-nekt",type:"button",onClick:()=>h("denied"),children:"Nei takk"})]})]})]}),document.body)},{expect:i,screen:x,waitFor:b}=__STORYBOOK_MODULE_TEST__,W=({children:e})=>{const{openConsentModal:t}=G();return o.jsxs("div",{children:[o.jsx(y,{onClick:()=>t(),"data-testid":"open-button",children:"Åpne samtykker"}),e]})},fe={title:"Komponenter/CookieConsent",component:M,subcomponents:{CookieConsent:B},args:{cookieName:"demo-consent-cookie",functional:!0,statistics:!0,children:o.jsx(W,{children:o.jsx(B,{aboutPage:"https://www.fremtind.no/informasjonskapsler"})})}},f={},w={tags:["test"],play:async({canvas:e,userEvent:t,step:n})=>{await b(()=>{O({consent:{functional:null,statistics:null},name:"demo-consent-cookie",maxAge:22}),i(document.cookie)}),await n("Ingen eksisterende cookies",async()=>{await i(document.cookie).toContain("null"),await i(document.cookie).not.toContain('"accepted"'),await i(document.cookie).not.toContain('"denied"')});const s=e.getByTestId("open-button");await n("Åpne modal",async()=>{await t.click(s),await b(()=>{const l=x.getByRole("document");i(l).toBeInTheDocument()})});const a=x.getByTestId("jkl-cookie-consent-godta"),c=x.getByTestId("jkl-cookie-consent-nekt");await n("Aksepter cookies",async()=>{await t.click(a),await i(document.cookie).toContain('"functional":"accepted"'),await i(document.cookie).toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"functional":"denied"')}),await n("Nekt cookies",async()=>{await t.click(c),await i(document.cookie).toContain('"functional":"denied"'),await i(document.cookie).toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"functional":"accepted"')}),await n("Nekt cookies dersom man klikker utenfor",async()=>{await t.click(s),await i(document.cookie).toContain('"functional":"denied"'),await i(document.cookie).toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"functional":"accepted"')})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ["test"],
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    await waitFor(() => {
      setConsentCookie({
        consent: {
          functional: null,
          statistics: null
        },
        name: "demo-consent-cookie",
        maxAge: 22
      });
      expect(document.cookie);
    });
    await step("Ingen eksisterende cookies", async () => {
      await expect(document.cookie).toContain("null");
      await expect(document.cookie).not.toContain('"accepted"');
      await expect(document.cookie).not.toContain('"denied"');
    });
    const openCookieConsentButton = canvas.getByTestId("open-button");
    await step("Åpne modal", async () => {
      await userEvent.click(openCookieConsentButton);
      await waitFor(() => {
        const modal = screen.getByRole("document");
        expect(modal).toBeInTheDocument();
      });
    });
    const acceptButton = screen.getByTestId("jkl-cookie-consent-godta");
    const rejectButton = screen.getByTestId("jkl-cookie-consent-nekt");
    await step("Aksepter cookies", async () => {
      await userEvent.click(acceptButton);
      await expect(document.cookie).toContain('"functional":"accepted"');
      await expect(document.cookie).toContain('"statistics":"accepted"');
      await expect(document.cookie).not.toContain('"statistics":"denied"');
      await expect(document.cookie).not.toContain('"functional":"denied"');
    });
    await step("Nekt cookies", async () => {
      await userEvent.click(rejectButton);
      await expect(document.cookie).toContain('"functional":"denied"');
      await expect(document.cookie).toContain('"statistics":"denied"');
      await expect(document.cookie).not.toContain('"statistics":"accepted"');
      await expect(document.cookie).not.toContain('"functional":"accepted"');
    });
    await step("Nekt cookies dersom man klikker utenfor", async () => {
      await userEvent.click(openCookieConsentButton);
      await expect(document.cookie).toContain('"functional":"denied"');
      await expect(document.cookie).toContain('"statistics":"denied"');
      await expect(document.cookie).not.toContain('"statistics":"accepted"');
      await expect(document.cookie).not.toContain('"functional":"accepted"');
    });
  }
}`,...w.parameters?.docs?.source}}};const we=["_CookieConsent","CookieTest"];export{w as CookieTest,f as _CookieConsent,we as __namedExportsOrder,fe as default};

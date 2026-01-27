import{r as d,j as n,R as B}from"./iframe-C4i0NNfR.js";import{B as j}from"./Button-BHMvz0L8.js";import{R as I}from"./index-D9u-frv1.js";import{M as _,a as N,b as S,c as R,d as D,f as q,g as A}from"./Modal-D8npyEm7.js";import{u as P}from"./useModal-DLexOkqV.js";import{F}from"./Flex-CgdYTTLc.js";import{L}from"./Link-QlQWooly.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DtCmT4mm.js";import"./Loader-BT7Y7zot.js";import"./useDelayedRender-nCn3wdbE.js";import"./index-Cj-qcwny.js";import"./IconButton-V32n220F.js";import"./CloseIcon-CAbmsTFW.js";import"./Icon-DH207LI6.js";import"./index-Chjiymov.js";import"./useId-B-P1y7ia.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-Dweam0jL.js";import"./mergeRefs-DBSZzeh6.js";const $=e=>{if(typeof document>"u")return;const t=document.cookie.split(";").map(o=>o.trim().split("=")).find(o=>o[0]===e);if(t)return t},J=({adapter:e,name:t})=>{const o=$(t);if(o)return JSON.parse(o[1]);if(e)return e()},K=10368e3,T=({consent:e,maxAge:t=K,name:o,domain:s,path:a})=>{document.cookie=[`${o}=${JSON.stringify(e)}`,`max-age=${t}`,"SameSite=Lax",!!s&&`domain=${s}`,!!a&&`path=${a}`].filter(c=>c).join(";")},U=(e,t)=>{if(!t)return Object.values(e).some(a=>a);const o=new Map(Object.entries(t)),s=Object.entries(e);for(const[a,c]of s)if(c&&o.get(a)===null)return!0;return!1},H=({functional:e,statistics:t})=>({...e&&{functional:e},...t&&{statistics:t}}),V="fremtind-cookie-consent",h=B.createContext(void 0),O=({children:e,cookieAdapter:t,functional:o,statistics:s,cookieName:a=V,cookieDomain:c,cookiePath:m})=>{const[x,p]=d.useState(()=>Date.now()),k=d.useMemo(()=>H({functional:o,statistics:s}),[o,s]),C=d.useMemo(()=>J({adapter:t,name:a})??{functional:null,statistics:null},[t,a,x]),[r,l]=d.useState(()=>U(k,C));return n.jsx(h.Provider,{value:{isOpen:r,setIsOpen:l,updateCurrentConsents:()=>p(Date.now()),requirement:k,currentConsent:C,cookieName:a,cookieDomain:c,cookiePath:m},children:e})},G=()=>{const e=B.useContext(h);if(e===void 0)throw new Error("CookieConsent must be used within a CookieConsentProvider");return e},W=()=>{const e=d.useContext(h);if(e===void 0)throw new Error("useCookieConsent must be used within a CookieConsentProvider");const t=()=>{e.setIsOpen(!0)},o=e.currentConsent;return{openConsentModal:t,consents:o}};O.__docgenInfo={description:"",methods:[],displayName:"CookieConsentProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},cookieAdapter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Consent | undefined",signature:{arguments:[],return:{name:"union",raw:"Consent | undefined",elements:[{name:"signature",type:"object",raw:`{
    functional?: ConsentState;
    statistics?: ConsentState;
}`,signature:{properties:[{key:"functional",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}},{key:"statistics",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}}]}},{name:"undefined"}]}}},description:""},cookieName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"fremtind-cookie-consent"',computed:!1}},cookieDomain:{required:!1,tsType:{name:"string"},description:""},cookiePath:{required:!1,tsType:{name:"string"},description:""}}};const v=({blocking:e,onAccept:t,aboutPage:o="https://www.fremtind.no/informasjonskapsler",...s})=>{const{currentConsent:a,cookieName:c,cookieDomain:m,cookiePath:x,isOpen:p,setIsOpen:k,updateCurrentConsents:C}=G(),[r,l]=P({id:`jkl-cookie-modal-${d.useId()}`,role:e?"alertdialog":"dialog",title:"Informasjonskapsler"});if(d.useEffect(()=>{p?r?.show():r?.hide()},[r,p]),d.useEffect(()=>{const u=()=>k(!1);return r?.on("hide",u),()=>{r?.off("hide",u)}},[r,k]),typeof document>"u")return null;if(typeof navigator<"u"&&!navigator.cookieEnabled)return t&&t({functional:"denied",statistics:"denied"}),null;const g=u=>{const E={...a,functional:u,statistics:u};T({consent:E,name:c,domain:m,path:x}),C(),r?.hide()},M=u=>{u.preventDefault(),g("denied")};return I.createPortal(n.jsxs(_,{...l.container,...s,"data-cookie-consent-open":p,children:[n.jsx(N,{...l.overlay}),n.jsx(S,{component:"form",...l.modal,onSubmit:M,children:n.jsxs("form",{children:[n.jsx(R,{children:n.jsx(D,{...l.title,children:"Får vi bruke valgfrie informasjonskapsler?"})}),n.jsx(q,{children:n.jsxs(F,{direction:"column",gap:"m",children:[n.jsx("p",{children:"Vi ønsker å samle anonym statistikk for å forstå hvordan nettsidene våre brukes. Det hjelper oss til å gjøre innhold og løsninger bedre og mer brukervennlige."}),n.jsxs("p",{children:[n.jsx(L,{href:o,target:"_blank",children:"Les mer om hvilke informasjonskapsler vi lagrer her"}),"."]})]})}),n.jsxs(A,{children:[n.jsx(j,{variant:"secondary","data-testid":"jkl-cookie-consent-godta",type:"button",onClick:()=>g("accepted"),children:"Ja, det er greit"}),n.jsx(j,{variant:"secondary","data-testid":"jkl-cookie-consent-nekt",type:"button",onClick:()=>g("denied"),children:"Nei takk"})]})]})})]}),document.body)},{expect:i,screen:y,waitFor:b}=__STORYBOOK_MODULE_TEST__,X=({children:e})=>{const{openConsentModal:t}=W();return n.jsxs("div",{children:[n.jsx(j,{onClick:()=>t(),"data-testid":"open-button",children:"Åpne samtykker"}),e]})},we={title:"Komponenter/CookieConsent",component:O,subcomponents:{CookieConsent:v},args:{cookieName:"demo-consent-cookie",functional:!0,statistics:!0,children:n.jsx(X,{children:n.jsx(v,{aboutPage:"https://www.fremtind.no/informasjonskapsler"})})}},f={},w={tags:["test"],play:async({canvas:e,userEvent:t,step:o})=>{await b(()=>{T({consent:{functional:null,statistics:null},name:"demo-consent-cookie",maxAge:22}),i(document.cookie)}),await o("Ingen eksisterende cookies",async()=>{await i(document.cookie).toContain("null"),await i(document.cookie).not.toContain('"accepted"'),await i(document.cookie).not.toContain('"denied"')});const s=e.getByTestId("open-button");await o("Åpne modal",async()=>{await t.click(s),await b(()=>{const m=y.getByRole("document");i(m).toBeInTheDocument()})});const a=y.getByTestId("jkl-cookie-consent-godta"),c=y.getByTestId("jkl-cookie-consent-nekt");await o("Aksepter cookies",async()=>{await t.click(a),await i(document.cookie).toContain('"functional":"accepted"'),await i(document.cookie).toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"functional":"denied"')}),await o("Nekt cookies",async()=>{await t.click(c),await i(document.cookie).toContain('"functional":"denied"'),await i(document.cookie).toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"functional":"accepted"')}),await o("Nekt cookies dersom man klikker utenfor",async()=>{await t.click(s),await i(document.cookie).toContain('"functional":"denied"'),await i(document.cookie).toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"functional":"accepted"')})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const xe=["_CookieConsent","CookieTest"];export{w as CookieTest,f as _CookieConsent,xe as __namedExportsOrder,we as default};

import{r as d,j as o,R as B}from"./iframe-CkUZajGp.js";import{B as j}from"./Button-DufbU4DM.js";import{R as I}from"./index-5MkEyyw6.js";import{M as _,a as S,b as N,c as R,d as D,f as q,g as A}from"./Modal-DQZeCOwA.js";import{u as P}from"./useModal-_wxTu2DB.js";import{F}from"./Flex-CnfWgdHw.js";import{L}from"./Link-CG_Dtdts.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CosXfNl8.js";import"./Loader-Dl11C0dH.js";import"./useDelayedRender-SQiFEMjL.js";import"./index-DomMjxUJ.js";import"./IconButton-CBukf6ss.js";import"./CloseIcon-D3KYF8hJ.js";import"./Icon-nOYdfBZm.js";import"./index-Chjiymov.js";import"./useId-TcHNNZxY.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-BdUm4zNE.js";import"./mergeRefs-B58G5JYe.js";const $=e=>{if(typeof document>"u")return;const t=document.cookie.split(";").map(n=>n.trim().split("=")).find(n=>n[0]===e);if(t)return t},J=({adapter:e,name:t})=>{const n=$(t);if(console.log(n),n)return JSON.parse(n[1]);if(e)return e()},K=10368e3,T=({consent:e,maxAge:t=K,name:n,domain:s,path:a})=>{document.cookie=[`${n}=${JSON.stringify(e)}`,`max-age=${t}`,"SameSite=Lax",!!s&&`domain=${s}`,!!a&&`path=${a}`].filter(c=>c).join(";")},U=(e,t)=>{if(!t)return Object.values(e).some(a=>a);const n=new Map(Object.entries(t)),s=Object.entries(e);for(const[a,c]of s)if(c&&n.get(a)===null)return!0;return!1},H=({functional:e,statistics:t})=>({...e&&{functional:e},...t&&{statistics:t}}),V="fremtind-cookie-consent",h=B.createContext(void 0),O=({children:e,cookieAdapter:t,functional:n,statistics:s,cookieName:a=V,cookieDomain:c,cookiePath:m})=>{const[g,p]=d.useState(()=>Date.now()),k=d.useMemo(()=>H({functional:n,statistics:s}),[n,s]),C=d.useMemo(()=>J({adapter:t,name:a})??{functional:null,statistics:null},[t,a,g]),[r,l]=d.useState(()=>U(k,C));return o.jsx(h.Provider,{value:{isOpen:r,setIsOpen:l,updateCurrentConsents:()=>p(Date.now()),requirement:k,currentConsent:C,cookieName:a,cookieDomain:c,cookiePath:m},children:e})},G=()=>{const e=B.useContext(h);if(e===void 0)throw new Error("CookieConsent must be used within a CookieConsentProvider");return e},W=()=>{const e=d.useContext(h);if(e===void 0)throw new Error("useCookieConsent must be used within a CookieConsentProvider");const t=()=>{e.setIsOpen(!0)},n=e.currentConsent;return{openConsentModal:t,consents:n}};O.__docgenInfo={description:"",methods:[],displayName:"CookieConsentProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},cookieAdapter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Consent | undefined",signature:{arguments:[],return:{name:"union",raw:"Consent | undefined",elements:[{name:"signature",type:"object",raw:`{
    functional?: ConsentState;
    statistics?: ConsentState;
    marketing?: ConsentState;
}`,signature:{properties:[{key:"functional",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}},{key:"statistics",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}},{key:"marketing",value:{name:"union",raw:'null | "denied" | "accepted"',elements:[{name:"null"},{name:"literal",value:'"denied"'},{name:"literal",value:'"accepted"'}],required:!1}}]}},{name:"undefined"}]}}},description:""},cookieName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"fremtind-cookie-consent"',computed:!1}},cookieDomain:{required:!1,tsType:{name:"string"},description:""},cookiePath:{required:!1,tsType:{name:"string"},description:""}}};const v=({blocking:e,onAccept:t,aboutPage:n="https://www.fremtind.no/informasjonskapsler",...s})=>{const{currentConsent:a,cookieName:c,cookieDomain:m,cookiePath:g,isOpen:p,setIsOpen:k,updateCurrentConsents:C}=G(),[r,l]=P({id:`jkl-cookie-modal-${d.useId()}`,role:e?"alertdialog":"dialog",title:"Informasjonskapsler"});if(d.useEffect(()=>{p?r?.show():r?.hide()},[r,p]),d.useEffect(()=>{const u=()=>k(!1);return r?.on("hide",u),()=>{r?.off("hide",u)}},[r,k]),typeof document>"u")return null;if(typeof navigator<"u"&&!navigator.cookieEnabled)return t&&t({functional:"denied",statistics:"denied",marketing:"denied"}),null;const x=u=>{const E={...a,functional:u,statistics:u,marketing:"denied"};T({consent:E,name:c,domain:m,path:g}),C(),r?.hide()},M=u=>{u.preventDefault(),x("denied")};return I.createPortal(o.jsxs(_,{...l.container,...s,"data-cookie-consent-open":p,children:[o.jsx(S,{...l.overlay}),o.jsx(N,{component:"form",...l.modal,onSubmit:M,children:o.jsxs("form",{children:[o.jsx(R,{children:o.jsx(D,{...l.title,children:"Får vi bruke valgfrie informasjonskapsler?"})}),o.jsx(q,{children:o.jsxs(F,{direction:"column",gap:"m",children:[o.jsx("p",{children:"Vi ønsker å samle anonym statistikk for å forstå hvordan nettsidene våre brukes. Det hjelper oss til å gjøre innhold og løsninger bedre og mer brukervennlige."}),o.jsxs("p",{children:[o.jsx(L,{href:n,target:"_blank",children:"Les mer om hvilke informasjonskapsler vi lagrer her"}),"."]})]})}),o.jsxs(A,{children:[o.jsx(j,{variant:"secondary","data-testid":"jkl-cookie-consent-godta",type:"button",onClick:()=>x("accepted"),children:"Ja, det er greit"}),o.jsx(j,{variant:"secondary","data-testid":"jkl-cookie-consent-nekt",type:"button",onClick:()=>x("denied"),children:"Nei takk"})]})]})})]}),document.body)},{expect:i,screen:y,waitFor:b}=__STORYBOOK_MODULE_TEST__,X=({children:e})=>{const{openConsentModal:t}=W();return o.jsxs("div",{children:[o.jsx(j,{onClick:()=>t(),"data-testid":"open-button",children:"Åpne samtykker"}),e]})},we={title:"Komponenter/CookieConsent",component:O,subcomponents:{CookieConsent:v},args:{cookieName:"demo-consent-cookie",functional:!0,statistics:!0,children:o.jsx(X,{children:o.jsx(v,{aboutPage:"https://www.fremtind.no/informasjonskapsler"})})}},f={},w={tags:["test"],play:async({canvas:e,userEvent:t,step:n})=>{await b(()=>{T({consent:{functional:null,statistics:null},name:"demo-consent-cookie",maxAge:22}),i(document.cookie)}),await n("Ingen eksisterende cookies",async()=>{await i(document.cookie).toContain("null"),await i(document.cookie).not.toContain('"accepted"'),await i(document.cookie).not.toContain('"denied"')});const s=e.getByTestId("open-button");await n("Åpne modal",async()=>{await t.click(s),await b(()=>{const m=y.getByRole("document");i(m).toBeInTheDocument()})});const a=y.getByTestId("jkl-cookie-consent-godta"),c=y.getByTestId("jkl-cookie-consent-nekt");await n("Aksepter cookies",async()=>{await t.click(a),await i(document.cookie).toContain('"functional":"accepted"'),await i(document.cookie).toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"functional":"denied"')}),await n("Nekt cookies",async()=>{await t.click(c),await i(document.cookie).toContain('"functional":"denied"'),await i(document.cookie).toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"functional":"accepted"')}),await n("Nekt cookies dersom man klikker utenfor",async()=>{await t.click(s),await i(document.cookie).toContain('"functional":"denied"'),await i(document.cookie).toContain('"statistics":"denied"'),await i(document.cookie).not.toContain('"statistics":"accepted"'),await i(document.cookie).not.toContain('"functional":"accepted"')})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const ge=["_CookieConsent","CookieTest"];export{w as CookieTest,f as _CookieConsent,ge as __namedExportsOrder,we as default};

import{j as e}from"./iframe-CLrGhnM6.js";import{B as g}from"./Button-BrnhCQ2Y.js";import{a as C,C as y,u as h,s as j}from"./_index-DNFyIeeP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DDRBhUQf.js";import"./Loader-CVFMSfu6.js";import"./useDelayedRender-D6IsmX0V.js";import"./index-Dz2TraFa.js";import"./index-MiJZldQf.js";import"./Modal-CqOzTL4R.js";import"./IconButton-CC5JNDu4.js";import"./CloseIcon-DWnMkYYs.js";import"./Icon-CsGblwbZ.js";import"./useModal-CGtJP_C-.js";import"./index-Chjiymov.js";import"./useId-Dh0QkaKz.js";import"./Flex-D0t1qed2.js";import"./SlotComponent-Bib68mBL.js";import"./mergeRefs-SxiKDVxR.js";import"./Link-CaLpo0Hy.js";const{expect:x,screen:d,waitFor:b}=__STORYBOOK_MODULE_TEST__,u="visual-test-consent-cookie";typeof document<"u"&&j({consent:{functional:"denied",statistics:"denied"},name:u});function o({blocking:m=!1}){const c=()=>{const{openConsentModal:p}=h();return e.jsx(g,{onClick:()=>p(),"data-testid":"open-cookie-consent",children:"Åpne cookie-innstillinger"})};return e.jsxs(C,{cookieName:u,children:[e.jsx(c,{}),e.jsx(y,{blocking:m,aboutPage:"https://www.fremtind.no/informasjonskapsler"})]})}const F={title:"Visuell regresjonstesting/CookieConsent",tags:["visual","!autodocs"],parameters:{layout:"fullscreen"}},l=async({canvas:m,userEvent:c,step:p})=>{await p("Åpne cookie consent",async()=>{const k=m.getByTestId("open-cookie-consent");await c.click(k),await b(()=>{x(d.queryByRole("dialog")||d.queryByRole("alertdialog")).toBeInTheDocument()})})},s={name:"Lys, medium",globals:{theme:"light",size:"medium"},render:()=>e.jsx(o,{}),play:l},n={name:"Interaksjon (ikke visuell)",tags:["!visual","!autodocs"],globals:{theme:"light",size:"medium"},render:()=>e.jsx(o,{})},a={name:"Interaksjon blokkerende (ikke visuell)",tags:["!visual","!autodocs"],globals:{theme:"light",size:"medium"},render:()=>e.jsx(o,{blocking:!0})},t={globals:{theme:"dark",size:"medium"},render:()=>e.jsx(o,{}),play:l},r={globals:{theme:"light",size:"small"},render:()=>e.jsx(o,{}),play:l},i={globals:{theme:"dark",size:"small"},render:()=>e.jsx(o,{}),play:l};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Lys, medium",
  globals: {
    theme: "light",
    size: "medium"
  },
  render: () => <CookieConsentVisualExample />,
  play: openModalPlay
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Interaksjon (ikke visuell)",
  tags: ["!visual", "!autodocs"],
  globals: {
    theme: "light",
    size: "medium"
  },
  render: () => <CookieConsentVisualExample />
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Interaksjon blokkerende (ikke visuell)",
  tags: ["!visual", "!autodocs"],
  globals: {
    theme: "light",
    size: "medium"
  },
  render: () => <CookieConsentVisualExample blocking />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark",
    size: "medium"
  },
  render: () => <CookieConsentVisualExample />,
  play: openModalPlay
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light",
    size: "small"
  },
  render: () => <CookieConsentVisualExample />,
  play: openModalPlay
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark",
    size: "small"
  },
  render: () => <CookieConsentVisualExample />,
  play: openModalPlay
}`,...i.parameters?.docs?.source}}};const U=["LysDefault","Interaksjon","InteraksjonBlokkerende","MoerkDefault","LysLiten","MoerkLiten"];export{n as Interaksjon,a as InteraksjonBlokkerende,s as LysDefault,r as LysLiten,t as MoerkDefault,i as MoerkLiten,U as __namedExportsOrder,F as default};

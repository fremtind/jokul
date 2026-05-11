import{j as e}from"./iframe-By8gZeFG.js";import{B as m}from"./Button-BOH3L-ZW.js";import{a as u,C as d,u as k,s as C}from"./_index-B1dmVVEk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-Bwf-JQ7i.js";import"./Loader-DoZC8Oyb.js";import"./useDelayedRender-Da3qcKI6.js";import"./index-CB-DLo0S.js";import"./index-j24mElt4.js";import"./Modal-BTkkx9a9.js";import"./IconButton-aJZkYU4n.js";import"./CloseIcon-CBbX31KV.js";import"./Icon-CqozMsi7.js";import"./useModal-VloKR7IM.js";import"./index-Chjiymov.js";import"./useId-Cdnxfj6t.js";import"./Flex-Tg7YYwJB.js";import"./SlotComponent-CFDzT8eL.js";import"./mergeRefs-Dmn1bJAP.js";import"./Link-BX0YLM6Q.js";const{expect:g,screen:c,waitFor:y}=__STORYBOOK_MODULE_TEST__,p="visual-test-consent-cookie";typeof document<"u"&&C({consent:{functional:"denied",statistics:"denied"},name:p});function i({blocking:s=!1}){const r=()=>{const{openConsentModal:a}=k();return e.jsx(m,{onClick:()=>a(),"data-testid":"open-cookie-consent",children:"Åpne cookie-innstillinger"})};return e.jsxs(u,{cookieName:p,children:[e.jsx(r,{}),e.jsx(d,{blocking:s,aboutPage:"https://www.fremtind.no/informasjonskapsler"})]})}const N={title:"Visuell regresjonstesting/CookieConsent",tags:["visual","!autodocs"],parameters:{layout:"fullscreen"}},o={render:()=>e.jsx(i,{}),play:async({canvas:s,userEvent:r,step:a})=>{await a("Åpne cookie consent",async()=>{const l=s.getByTestId("open-cookie-consent");await r.click(l),await y(()=>{g(c.queryByRole("dialog")||c.queryByRole("alertdialog")).toBeInTheDocument()})})}},n={tags:["!visual"],render:()=>e.jsx(i,{})},t={tags:["!visual"],render:()=>e.jsx(i,{blocking:!0})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <CookieConsentVisualExample />,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    await step("Åpne cookie consent", async () => {
      const openButton = canvas.getByTestId("open-cookie-consent");
      await userEvent.click(openButton);
      await waitFor(() => {
        expect(screen.queryByRole("dialog") || screen.queryByRole("alertdialog")).toBeInTheDocument();
      });
    });
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ["!visual"],
  render: () => <CookieConsentVisualExample />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ["!visual"],
  render: () => <CookieConsentVisualExample blocking />
}`,...t.parameters?.docs?.source}}};const P=["Default","Interaksjon","InteraksjonBlokkerende"];export{o as Default,n as Interaksjon,t as InteraksjonBlokkerende,P as __namedExportsOrder,N as default};

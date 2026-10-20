import{j as e}from"./iframe-DG4ODjOJ.js";import{F as d}from"./Flex-BtUDcQWz.js";import{N as n}from"./_index-Dmtauwv4.js";import{B as l}from"./Button-DNaVwgFW.js";import{I as u}from"./Icon-CKf8FPKn.js";import{I as j}from"./IconButton-DqpczKRl.js";import{C as x}from"./Chip-CfVKjidJ.js";import{M as f}from"./Menu-6QDmWiZ3.js";import{M as k}from"./MenuItem-Bl4pxCn4.js";import{T as b,a as v,b as h,c as E}from"./TabPanel-XSMgWwwt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DfIqjJGl.js";import"./mergeRefs-rjBz1fQO.js";import"./usePreviousValue-DEFzHm6P.js";import"./Loader-CU9-LaZm.js";import"./useDelayedRender-6UBVe6jC.js";import"./CheckIcon-BnqgOPyp.js";import"./CloseIcon-C8QdPVfz.js";import"./floating-ui.react-CxM3mkaT.js";import"./index-IKIN7ZEp.js";import"./index-YuwjiKpT.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-BAnT8Fn1.js";import"./ChevronRightIcon-dphXiJUA.js";import"./OpenInNewIcon-QA6aagkb.js";const Q={title:"Komponenter/Notification",component:n,args:{count:1,max:99,hideCounter:!1,urgent:!1}},p=r=>e.jsx(n,{...r,children:e.jsx(l,{children:"Eksempel"})}),g=r=>e.jsxs(d,{direction:"column",gap:"xl",children:[e.jsxs(d,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(n,{...r,children:e.jsx(l,{variant:"primary",children:"Eksempel"})}),e.jsx(n,{...r,label:r.count>1?"1 produkt":`${r.count} produkter`,children:e.jsx(l,{icon:e.jsx(u,{children:"shopping_bag"}),variant:"primary","aria-label":"Handlekurv"})}),e.jsx(n,{...r,label:r.count>1?"1 produkt":`${r.count} produkter`,children:e.jsx(j,{"aria-label":"Handlekurv",children:e.jsx(u,{children:"shopping_bag"})})}),e.jsx(n,{...r,children:e.jsx(x,{variant:"filter",children:"Eksempel"})}),e.jsx(n,{...r,children:e.jsx(x,{variant:"input",children:"Eksempel"})})]}),e.jsxs(d,{gap:"xl",alignItems:"start",wrap:!0,children:[e.jsxs(f,{triggerElement:e.jsx(l,{icon:e.jsx(u,{children:"menu"}),variant:"ghost"}),children:[e.jsx(k,{children:"Forsikringer"}),e.jsx(k,{children:"Skadesaker"}),e.jsxs(k,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsxs(b,{children:[e.jsxs(v,{children:[e.jsx(h,{children:"Forsikringer"}),e.jsx(h,{children:"Skadesaker"}),e.jsxs(h,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsx(E,{children:"Test"})]})]})]}),t={parameters:{docs:{description:{story:"Uten children vises varselet der det står i innholdet, uten posisjonering."}}}},s={name:"På et element",args:{count:3},parameters:{docs:{description:{story:"Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det."}}},render:p},o={name:"Bare prikk",args:{count:120,hideCounter:!0},parameters:{docs:{description:{story:"Med `hideCounter` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere."}}},render:p},a={name:"Uten antall",args:{count:0},parameters:{docs:{description:{story:"Ved 0 skjules varselet, men ankeret rendres som normalt."}}},render:p},i={name:"Eget tak",args:{count:120,max:50},parameters:{docs:{description:{story:"`max` bestemmer når antallet forkortes. Taket trenger ikke være en hel tierpotens."}}},render:p},m={name:"På ulike komponenter",args:{count:3,max:9},render:r=>e.jsx(g,{...r})},c={name:"Prikk på ulike komponenter",args:{count:3,hideCounter:!0},render:r=>e.jsx(g,{...r})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uten children vises varselet der det står i innholdet, uten posisjonering."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "På et element",
  args: {
    count: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det."
      }
    }
  },
  render: anchoredToButton
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Bare prikk",
  args: {
    count: 120,
    hideCounter: true
  },
  parameters: {
    docs: {
      description: {
        story: "Med \`hideCounter\` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere."
      }
    }
  },
  render: anchoredToButton
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Uten antall",
  args: {
    count: 0
  },
  parameters: {
    docs: {
      description: {
        story: "Ved 0 skjules varselet, men ankeret rendres som normalt."
      }
    }
  },
  render: anchoredToButton
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Eget tak",
  args: {
    count: 120,
    max: 50
  },
  parameters: {
    docs: {
      description: {
        story: "\`max\` bestemmer når antallet forkortes. Taket trenger ikke være en hel tierpotens."
      }
    }
  },
  render: anchoredToButton
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "På ulike komponenter",
  args: {
    count: 3,
    max: 9
  },
  render: args => <AnchorExamples {...args} />
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Prikk på ulike komponenter",
  args: {
    count: 3,
    hideCounter: true
  },
  render: args => <AnchorExamples {...args} />
}`,...c.parameters?.docs?.source}}};const W=["Notification","PaaEtElement","BarePrikk","UtenAntall","EgetTak","PaaUlikeKomponenter","PrikkPaaUlikeKomponenter"];export{o as BarePrikk,i as EgetTak,t as Notification,s as PaaEtElement,m as PaaUlikeKomponenter,c as PrikkPaaUlikeKomponenter,a as UtenAntall,W as __namedExportsOrder,Q as default};

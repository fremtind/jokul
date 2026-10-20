import{j as e}from"./iframe--IbQLLfs.js";import{F as p}from"./Flex-B0mBHPL9.js";import{N as n}from"./_index-BKD3_obn.js";import{B as c}from"./Button-B2ASzhZ8.js";import{I as u}from"./Icon-D0ZC9qNb.js";import{I as j}from"./IconButton-DgVSKnAb.js";import{C as x}from"./Chip-D3-2g6ga.js";import{T as f}from"./Tag-CTzWudbN.js";import{M as v}from"./Menu-DauKlCg2.js";import{M as k}from"./MenuItem-CXGOAEPw.js";import{T as b,a as E,b as h,c as T}from"./TabPanel-CC5L2YYq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B2EKPTvB.js";import"./mergeRefs-C5kqJ57D.js";import"./usePreviousValue-KJQ9NLy9.js";import"./Loader-CJofSoJm.js";import"./useDelayedRender-GzQNoP0C.js";import"./CheckIcon-BgKj_A8w.js";import"./CloseIcon-BLX8QOHl.js";import"./floating-ui.react-B51OMiOE.js";import"./index-Dank7pEV.js";import"./index--h9eRXtL.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-Dz1Jb42v.js";import"./ChevronRightIcon-EISFjBq7.js";import"./OpenInNewIcon-CKcZodG8.js";const X={title:"Komponenter/Notification",component:n,args:{count:1,max:99,hideCounter:!1},argTypes:{count:{control:"number",description:"Antall varsler. Ved 0 skjules varselet helt, så antallet kan sendes rett inn uten at du må vise og skjule komponenten selv."},max:{control:"number",description:"Høyeste antall som vises før det forkortes med en pluss, for eksempel «99+»."},hideCounter:{control:"boolean",description:"Viser bare en prikk i stedet for tallet. Antallet leses fortsatt opp av skjermlesere."},children:{control:!1,description:"Elementet varselet skal plasseres på. Uten children vises varselet der det står i innholdet."}}},d=r=>e.jsx(n,{...r,children:e.jsx(c,{children:"Eksempel"})}),g=r=>e.jsxs(p,{direction:"column",gap:"xl",children:[e.jsxs(p,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(n,{...r,children:e.jsx(c,{children:"Eksempel"})}),e.jsx(n,{...r,children:e.jsx(c,{icon:e.jsx(u,{children:"shopping_bag"}),variant:"ghost","aria-label":"Handlekurv"})}),e.jsx(n,{...r,children:e.jsx(j,{"aria-label":"Handlekurv",children:e.jsx(u,{children:"shopping_bag"})})}),e.jsx(n,{...r,children:e.jsx(x,{variant:"filter",children:"Eksempel"})}),e.jsx(n,{...r,children:e.jsx(x,{variant:"input",children:"Eksempel"})}),e.jsxs(f,{children:["Eksempel",e.jsx(n,{...r})]})]}),e.jsxs(p,{gap:"xl",alignItems:"start",wrap:!0,children:[e.jsxs(v,{triggerElement:e.jsx(c,{icon:e.jsx(u,{children:"menu"}),variant:"ghost"}),children:[e.jsx(k,{children:"Forsikringer"}),e.jsx(k,{children:"Skadesaker"}),e.jsxs(k,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsxs(b,{children:[e.jsxs(E,{children:[e.jsx(h,{children:"Forsikringer"}),e.jsx(h,{children:"Skadesaker"}),e.jsxs(h,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsx(T,{children:"Test"})]})]})]}),t={parameters:{docs:{description:{story:"Uten children vises varselet der det står i innholdet, uten posisjonering."}}}},s={name:"På et element",args:{count:3},parameters:{docs:{description:{story:"Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det."}}},render:d},o={name:"Bare prikk",args:{count:120,hideCounter:!0},parameters:{docs:{description:{story:"Med `hideCounter` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere."}}},render:d},a={name:"Uten antall",args:{count:0},parameters:{docs:{description:{story:"Ved 0 skjules varselet, men ankeret rendres som normalt."}}},render:d},i={name:"Eget tak",args:{count:120,max:50},parameters:{docs:{description:{story:"`max` bestemmer når antallet forkortes. Taket trenger ikke være en hel tierpotens."}}},render:d},l={name:"På ulike komponenter",args:{count:3,max:9},render:r=>e.jsx(g,{...r})},m={name:"Prikk på ulike komponenter",args:{count:3,hideCounter:!0},render:r=>e.jsx(g,{...r})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "På ulike komponenter",
  args: {
    count: 3,
    max: 9
  },
  render: args => <AnchorExamples {...args} />
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Prikk på ulike komponenter",
  args: {
    count: 3,
    hideCounter: true
  },
  render: args => <AnchorExamples {...args} />
}`,...m.parameters?.docs?.source}}};const Y=["Notification","PaaEtElement","BarePrikk","UtenAntall","EgetTak","PaaUlikeKomponenter","PrikkPaaUlikeKomponenter"];export{o as BarePrikk,i as EgetTak,t as Notification,s as PaaEtElement,l as PaaUlikeKomponenter,m as PrikkPaaUlikeKomponenter,a as UtenAntall,Y as __namedExportsOrder,X as default};

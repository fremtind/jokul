import{j as e}from"./iframe-1ffnmLT_.js";import{F as u}from"./Flex-RWZ32G2D.js";import{N as n}from"./_index-DhA727NK.js";import{B as d}from"./Button-BxWlYtbc.js";import{I as k}from"./Icon-oZqmbVJA.js";import{I as b}from"./IconButton-Bd2cZUli.js";import{C as x}from"./Chip-M6laghz-.js";import{M as f}from"./Menu-D0N1PCLz.js";import{M as g}from"./MenuItem-DkkkPqfB.js";import{T as E,a as v,b as h,c as T}from"./TabPanel-DOlyu27n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-OoyranDD.js";import"./mergeRefs-B6sgCD8e.js";import"./usePreviousValue-DTnPmkC9.js";import"./Loader-D3uk9gUw.js";import"./useDelayedRender-zLKME6WS.js";import"./CheckIcon-Cvx43AU_.js";import"./CloseIcon-CRB8w-2B.js";import"./floating-ui.react-uQ4WEePt.js";import"./index-BNdc-rTH.js";import"./index-7MzX68su.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-DPtpm4MA.js";import"./ChevronRightIcon-B5hS5SfI.js";import"./OpenInNewIcon-jVwAdJrx.js";const W={title:"Komponenter/Notification",component:n,args:{count:1,max:99,hideCounter:!1,urgent:!1}},t=r=>e.jsx(n,{...r,children:e.jsx(d,{children:"Eksempel"})}),j=r=>e.jsxs(u,{direction:"column",gap:"xl",children:[e.jsxs(u,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(n,{...r,children:e.jsx(d,{variant:"primary",children:"Eksempel"})}),e.jsx(n,{...r,label:"produkt/produkter",children:e.jsx(d,{icon:e.jsx(k,{children:"shopping_bag"}),variant:"primary","aria-label":"Handlekurv"})}),e.jsx(n,{...r,label:"produkt/produkter",children:e.jsx(b,{"aria-label":"Handlekurv",children:e.jsx(k,{children:"shopping_bag"})})}),e.jsx(n,{...r,children:e.jsx(x,{variant:"filter",children:"Eksempel"})}),e.jsx(n,{...r,children:e.jsx(x,{variant:"input",children:"Eksempel"})})]}),e.jsxs(u,{gap:"xl",alignItems:"start",wrap:!0,children:[e.jsxs(f,{triggerElement:e.jsx(d,{icon:e.jsx(k,{children:"menu"}),variant:"ghost"}),children:[e.jsx(g,{children:"Forsikringer"}),e.jsx(g,{children:"Skadesaker"}),e.jsxs(g,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsxs(E,{children:[e.jsxs(v,{children:[e.jsx(h,{children:"Forsikringer"}),e.jsx(h,{children:"Skadesaker"}),e.jsxs(h,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsx(T,{children:"Test"})]})]})]}),s={parameters:{docs:{description:{story:"Uten children vises varselet der det står i innholdet, uten posisjonering."}}}},a={name:"På et element",args:{count:3},parameters:{docs:{description:{story:"Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det."}}},render:t},o={name:"Bare prikk",args:{count:120,hideCounter:!0},parameters:{docs:{description:{story:"Med `hideCounter` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere."}}},render:t},i={name:"Uten antall",args:{count:0},parameters:{docs:{description:{story:"Ved 0 skjules varselet, men ankeret rendres som normalt."}}},render:t},l={name:"Eget tak",args:{count:120,max:50},parameters:{docs:{description:{story:"`max` bestemmer når antallet forkortes. Taket trenger ikke være en hel tierpotens."}}},render:t},m={name:"Egen label",args:{count:4,label:"produkt/produkter"},parameters:{docs:{description:{story:"`label` tar et `entall/flertall`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Her blir det «4 produkter» i stedet for «4 varsler»."}}},render:t},c={name:"På ulike komponenter",args:{count:3,max:9},render:r=>e.jsx(j,{...r})},p={name:"Prikk på ulike komponenter",args:{count:3,hideCounter:!0},render:r=>e.jsx(j,{...r})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uten children vises varselet der det står i innholdet, uten posisjonering."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Egen label",
  args: {
    count: 4,
    label: "produkt/produkter"
  },
  parameters: {
    docs: {
      description: {
        story: "\`label\` tar et \`entall/flertall\`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Her blir det «4 produkter» i stedet for «4 varsler»."
      }
    }
  },
  render: anchoredToButton
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "På ulike komponenter",
  args: {
    count: 3,
    max: 9
  },
  render: args => <AnchorExamples {...args} />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Prikk på ulike komponenter",
  args: {
    count: 3,
    hideCounter: true
  },
  render: args => <AnchorExamples {...args} />
}`,...p.parameters?.docs?.source}}};const X=["Notification","PaaEtElement","BarePrikk","UtenAntall","EgetTak","EgenLabel","PaaUlikeKomponenter","PrikkPaaUlikeKomponenter"];export{o as BarePrikk,m as EgenLabel,l as EgetTak,s as Notification,a as PaaEtElement,c as PaaUlikeKomponenter,p as PrikkPaaUlikeKomponenter,i as UtenAntall,X as __namedExportsOrder,W as default};

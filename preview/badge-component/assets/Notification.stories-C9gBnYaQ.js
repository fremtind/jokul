import{r as I,j as e,R as N}from"./iframe-CfUEMfU7.js";import{F as f}from"./Flex-Dekyhgar.js";import{c as x}from"./clsx-B-dksMZM.js";import{B as k}from"./Button-D-vu1QAj.js";import{I as j}from"./Icon-DjnECpDJ.js";import{I as U}from"./IconButton-DdBgt5n_.js";import{C as _}from"./Chip-COQNIwKR.js";import{M as V}from"./Menu-BcsClUka.js";import{M as b}from"./MenuItem-CSMRJFCi.js";import{c as L,b as M,T as v,a as H}from"./TabPanel-BVjbjVkH.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-DYbDkr5T.js";import"./mergeRefs-CBI3zFGr.js";import"./usePreviousValue-C3YtWb7k.js";import"./Loader-CTGu9eW-.js";import"./useDelayedRender-CHR3nUvx.js";import"./CheckIcon-DeAnkm7O.js";import"./CloseIcon-B31aSgTh.js";import"./floating-ui.react-BUkADOgg.js";import"./index-BZyr4nNe.js";import"./index-BgNbWu5F.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-DKgHN-45.js";import"./ChevronRightIcon-CcuEuE2i.js";import"./OpenInNewIcon-DxRYbP_h.js";const q="varsel/varsler";function $(r,n){return r>n?`${n}+`:r}function K(r,n){const[a,g=a]=n.split("/");return`${r} ${r===1?a:g}`}const t=({className:r,children:n,count:a,max:g=99,hideCounter:E,urgent:C=!1,label:F=q,...y})=>{const T=I.useId(),P=`jkl-notification-${T}`,B=`--jkl-notification-anchor-${T.replace(/[^a-z0-9]/gi,"")}`,h=a>0,S=h?K(a,F):void 0;return e.jsxs(e.Fragment,{children:[N.isValidElement(n)?N.cloneElement(n,{"aria-describedby":x(n.props["aria-describedby"],h&&P)||void 0,className:x(n.props.className,"jkl-notification-anchor"),style:{...n.props.style,"--jkl-notification-anchor-name":B},title:n.props.title??S}):n,h?e.jsxs("div",{className:x("jkl-notification",E&&"jkl-notification--dot",r),"data-urgent":C,"data-count":a,...y,style:{...y.style,"--jkl-notification-anchor-name":B},id:P,children:[E?null:e.jsx("span",{"aria-hidden":"true",children:$(a,g)}),e.jsx("div",{className:"jkl-sr-only",children:S})]}):null]})};try{t.displayName="Notification",t.__docgenInfo={description:"",displayName:"Notification",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!0,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},hideCounter:{defaultValue:null,description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet varselet skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:"varsel/varsler"},description:`Dersom du bruker komponenten for noe annet enn "varslinger" kan du endre beskrivelsen av dem.
Dette brukes for å gi tilstrekkelig kontekst for tilgjengelighetsverktøy.
@example 1 ulest melding / 4 uleste meldinger
@example 1 produkt / 4 produkter`,name:"label",required:!1,type:{name:"string"}},urgent:{defaultValue:{value:"false"},description:"Endrer farge fra kontrastfarge til en rød-farge. Fargen påvirkes også av brand.",name:"urgent",required:!1,type:{name:"boolean"}}}}}catch{}const ue={title:"Komponenter/Notification",component:t,args:{count:1,max:99,hideCounter:!1,urgent:!1}},s=r=>e.jsx(t,{...r,children:e.jsx(k,{children:"Eksempel"})}),A=r=>e.jsxs(f,{direction:"column",gap:"xl",children:[e.jsxs(f,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(t,{...r,children:e.jsx(k,{variant:"primary",children:"Eksempel"})}),e.jsx(t,{...r,label:"produkt/produkter",children:e.jsx(k,{icon:e.jsx(j,{children:"shopping_bag"}),variant:"primary","aria-label":"Handlekurv"})}),e.jsx(t,{...r,label:"produkt/produkter",children:e.jsx(U,{"aria-label":"Handlekurv",children:e.jsx(j,{children:"shopping_bag"})})}),e.jsx(t,{...r,children:e.jsx(_,{variant:"filter",children:"Eksempel"})}),e.jsx(t,{...r,children:e.jsx(_,{variant:"input",children:"Eksempel"})})]}),e.jsxs(f,{gap:"xl",alignItems:"start",wrap:!0,children:[e.jsxs(V,{triggerElement:e.jsx(k,{icon:e.jsx(j,{children:"menu"}),variant:"ghost"}),children:[e.jsx(b,{children:"Forsikringer"}),e.jsx(b,{children:"Skadesaker"}),e.jsxs(b,{children:["Tilbud",e.jsx(t,{...r})]})]}),e.jsxs(L,{children:[e.jsxs(M,{children:[e.jsx(v,{children:"Forsikringer"}),e.jsx(v,{children:"Skadesaker"}),e.jsxs(v,{children:["Tilbud",e.jsx(t,{...r})]})]}),e.jsx(H,{children:"Test"})]})]})]}),o={parameters:{docs:{description:{story:"Uten children vises varselet der det står i innholdet, uten posisjonering."}}}},i={name:"På et element",args:{count:3},parameters:{docs:{description:{story:"Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det."}}},render:s},l={name:"Bare prikk",args:{count:120,hideCounter:!0},parameters:{docs:{description:{story:"Med `hideCounter` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere."}}},render:s},d={name:"Uten antall",args:{count:0},parameters:{docs:{description:{story:"Ved 0 rendres ikke varselet i det hele tatt, men ankeret rendres som normalt."}}},render:s},c={name:"Eget tak",args:{count:120,max:50},parameters:{docs:{description:{story:"`max` bestemmer når antallet forkortes. Taket trenger ikke være en hel tierpotens."}}},render:s},m={name:"Egen label",args:{count:4,label:"produkt/produkter"},parameters:{docs:{description:{story:"`label` tar et `entall/flertall`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Her blir det «4 produkter» i stedet for «4 varsler»."}}},render:s},p={name:"På ulike komponenter",args:{count:3,max:9},render:r=>e.jsx(A,{...r})},u={name:"Prikk på ulike komponenter",args:{count:3,hideCounter:!0},render:r=>e.jsx(A,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uten children vises varselet der det står i innholdet, uten posisjonering."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Uten antall",
  args: {
    count: 0
  },
  parameters: {
    docs: {
      description: {
        story: "Ved 0 rendres ikke varselet i det hele tatt, men ankeret rendres som normalt."
      }
    }
  },
  render: anchoredToButton
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "På ulike komponenter",
  args: {
    count: 3,
    max: 9
  },
  render: args => <AnchorExamples {...args} />
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Prikk på ulike komponenter",
  args: {
    count: 3,
    hideCounter: true
  },
  render: args => <AnchorExamples {...args} />
}`,...u.parameters?.docs?.source}}};const ke=["Notification","PaaEtElement","BarePrikk","UtenAntall","EgetTak","EgenLabel","PaaUlikeKomponenter","PrikkPaaUlikeKomponenter"];export{l as BarePrikk,m as EgenLabel,c as EgetTak,o as Notification,i as PaaEtElement,p as PaaUlikeKomponenter,u as PrikkPaaUlikeKomponenter,d as UtenAntall,ke as __namedExportsOrder,ue as default};

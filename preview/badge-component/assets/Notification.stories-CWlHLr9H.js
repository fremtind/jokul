import{r as M,j as e,R as _}from"./iframe-Cx70xiMg.js";import{F as b}from"./Flex-B9KIr_vX.js";import{c as v}from"./clsx-B-dksMZM.js";import{B as f}from"./Button-CN0rp5Rl.js";import{I as E}from"./Icon-Dx1gILGr.js";import{I as U}from"./IconButton-CR5qdkXk.js";import{C as o}from"./Chip-CppZIaGw.js";import{M as L}from"./Menu-CtfrZiaK.js";import{M as y}from"./MenuItem-CJs2gC1s.js";import{c as H,b as q,T,a as $}from"./TabPanel-C9vISzCp.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-1k9K_awE.js";import"./mergeRefs-lcgULuLA.js";import"./usePreviousValue-bZi5XsEw.js";import"./Loader-BAT5ahbI.js";import"./useDelayedRender-BzKcOIFx.js";import"./CheckIcon-kF1YT315.js";import"./CloseIcon-DWaI6zar.js";import"./floating-ui.react-Doa58AmK.js";import"./index-_b6GX1O8.js";import"./index-CfoMrHsY.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-Bn6V1x4s.js";import"./ChevronRightIcon-RHyLZRlR.js";import"./OpenInNewIcon-1lXBGlag.js";const K="varsel/varsler";function R(r,t){return r>t?`${t}+`:r}function D(r,t){const[a,j=a]=t.split("/");return`${r} ${r===1?a:j}`}const n=({className:r,children:t,count:a,max:j=99,hideCounter:P,urgent:F=!1,label:I=K,...B})=>{const C=M.useId(),S=`jkl-notification-${C}`,V=`--jkl-notification-anchor-${C.replace(/[^a-z0-9]/gi,"")}`,x=a>0,N=x?D(a,I):void 0;return e.jsxs(e.Fragment,{children:[_.isValidElement(t)?_.cloneElement(t,{"aria-describedby":v(t.props["aria-describedby"],x&&S)||void 0,className:v(t.props.className,"jkl-notification-anchor"),style:{...t.props.style,"--jkl-notification-anchor-name":V},title:t.props.title??N}):t,x?e.jsxs("div",{className:v("jkl-notification",P&&"jkl-notification--dot",r),"data-urgent":F,"data-count":a,...B,style:{...B.style,"--jkl-notification-anchor-name":V},id:S,children:[P?null:e.jsx("span",{"aria-hidden":"true",children:R(a,j)}),e.jsx("div",{className:"jkl-sr-only",children:N})]}):null]})};try{n.displayName="Notification",n.__docgenInfo={description:"",displayName:"Notification",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!0,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},hideCounter:{defaultValue:null,description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet varselet skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:"varsel/varsler"},description:`Dersom du bruker komponenten for noe annet enn "varslinger" kan du endre beskrivelsen av dem.
Dette brukes for å gi tilstrekkelig kontekst for tilgjengelighetsverktøy.
@example 1 ulest melding / 4 uleste meldinger
@example 1 produkt / 4 produkter`,name:"label",required:!1,type:{name:"string"}},urgent:{defaultValue:{value:"false"},description:"Endrer farge fra kontrastfarge til en rød-farge. Fargen påvirkes også av brand.",name:"urgent",required:!1,type:{name:"boolean"}}}}}catch{}const ge={title:"Komponenter/Notification",component:n,args:{count:1,max:99,hideCounter:!1,urgent:!1}},s=r=>e.jsx(n,{...r,children:e.jsx(f,{children:"Eksempel"})}),A=r=>e.jsxs(b,{direction:"column",gap:"xl",children:[e.jsxs(b,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(n,{...r,children:e.jsx(f,{variant:"primary",children:"Eksempel"})}),e.jsx(n,{...r,label:"produkt/produkter",children:e.jsx(f,{icon:e.jsx(E,{children:"shopping_bag"}),variant:"primary","aria-label":"Handlekurv"})}),e.jsx(n,{...r,label:"produkt/produkter",children:e.jsx(U,{"aria-label":"Handlekurv",children:e.jsx(E,{children:"shopping_bag"})})}),e.jsx(n,{...r,children:e.jsx(o,{variant:"filter",children:"Eksempel"})}),e.jsx(n,{...r,children:e.jsx(o,{variant:"input",children:"Eksempel"})}),e.jsxs(o,{variant:"filter","aria-pressed":!0,children:["Eksempel",e.jsx(n,{...r})]}),e.jsxs(o,{variant:"input",children:["Eksempel",e.jsx(n,{...r})]}),e.jsxs(o,{variant:"filter","aria-pressed":!0,children:[e.jsx(n,{...r}),"Eksempel"]}),e.jsxs(o,{variant:"input",children:[e.jsx(n,{...r}),"Eksempel"]})]}),e.jsxs(b,{gap:"xl",alignItems:"start",wrap:!0,children:[e.jsxs(L,{triggerElement:e.jsx(f,{icon:e.jsx(E,{children:"menu"}),variant:"ghost"}),children:[e.jsx(y,{children:"Forsikringer"}),e.jsx(y,{children:"Skadesaker"}),e.jsxs(y,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsxs(H,{children:[e.jsxs(q,{children:[e.jsx(T,{children:"Forsikringer"}),e.jsx(T,{children:"Skadesaker"}),e.jsxs(T,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsx($,{children:"Test"})]})]})]}),i={parameters:{docs:{description:{story:"Uten children vises varselet der det står i innholdet, uten posisjonering."}}}},l={name:"På et element",args:{count:3},parameters:{docs:{description:{story:"Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det."}}},render:s},d={name:"Bare prikk",args:{count:120,hideCounter:!0},parameters:{docs:{description:{story:"Med `hideCounter` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere."}}},render:s},c={args:{count:3,urgent:!0},parameters:{docs:{description:{story:"Med `urgent` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren gjør noe."}}},render:s},m={name:"Viktig prikk",args:{count:3,urgent:!0,hideCounter:!0},parameters:{docs:{description:{story:"`urgent` kan kombineres med `hideCounter`."}}},render:s},p={name:"Uten antall",args:{count:0},parameters:{docs:{description:{story:"Ved 0 rendres ikke varselet i det hele tatt, men ankeret rendres som normalt."}}},render:s},u={name:"Eget tak",args:{count:120,max:50},parameters:{docs:{description:{story:"`max` bestemmer når antallet forkortes. Taket trenger ikke være en hel tierpotens."}}},render:s},k={name:"Egen label",args:{count:4,label:"produkt/produkter"},parameters:{docs:{description:{story:"`label` tar et `entall/flertall`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Her blir det «4 produkter» i stedet for «4 varsler»."}}},render:s},g={name:"På ulike komponenter",args:{count:3,max:9},render:r=>e.jsx(A,{...r})},h={name:"Prikk på ulike komponenter",args:{count:3,hideCounter:!0},render:r=>e.jsx(A,{...r})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uten children vises varselet der det står i innholdet, uten posisjonering."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    urgent: true
  },
  parameters: {
    docs: {
      description: {
        story: "Med \`urgent\` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren gjør noe."
      }
    }
  },
  render: anchoredToButton
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Viktig prikk",
  args: {
    count: 3,
    urgent: true,
    hideCounter: true
  },
  parameters: {
    docs: {
      description: {
        story: "\`urgent\` kan kombineres med \`hideCounter\`."
      }
    }
  },
  render: anchoredToButton
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "På ulike komponenter",
  args: {
    count: 3,
    max: 9
  },
  render: args => <AnchorExamples {...args} />
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Prikk på ulike komponenter",
  args: {
    count: 3,
    hideCounter: true
  },
  render: args => <AnchorExamples {...args} />
}`,...h.parameters?.docs?.source}}};const he=["Notification","PaaEtElement","BarePrikk","Viktig","ViktigPrikk","UtenAntall","EgetTak","EgenLabel","PaaUlikeKomponenter","PrikkPaaUlikeKomponenter"];export{d as BarePrikk,k as EgenLabel,u as EgetTak,i as Notification,l as PaaEtElement,g as PaaUlikeKomponenter,h as PrikkPaaUlikeKomponenter,p as UtenAntall,c as Viktig,m as ViktigPrikk,he as __namedExportsOrder,ge as default};

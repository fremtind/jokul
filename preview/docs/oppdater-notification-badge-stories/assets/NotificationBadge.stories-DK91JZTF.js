import{r as y,j as e,R as x}from"./iframe-AbheQuCm.js";import{c as k}from"./clsx-B-dksMZM.js";import{c as N,b as B,T as m,a as p}from"./TabPanel-74bo1XAd.js";import{a as s}from"./LinkList-BsvorFSd.js";import{B as E}from"./Button-G2ZzHRX9.js";import{I as T}from"./Icon-BhiY9ggd.js";import"./preload-helper-PPVm8Dsz.js";import"./usePreviousValue-DxsrTVcC.js";import"./Loader-Dd1KnYpr.js";import"./useDelayedRender-BjKBq6wu.js";const I="varsler";function P(n,a){return n>a?`${a}+`:n}const t=({className:n,children:a,count:o,max:h=99,hideCounter:d,urgent:L=!1,label:v=I,...u})=>{const g=y.useId(),f=`jkl-notification-badge-${g}`,b=`--jkl-notification-badge-anchor-${g.replace(/[^a-z0-9]/gi,"")}`,c=o>0,j=c?v:void 0;return e.jsxs(e.Fragment,{children:[x.isValidElement(a)?x.cloneElement(a,{"aria-describedby":k(a.props["aria-describedby"],c&&f)||void 0,className:k(a.props.className,"jkl-notification-badge-anchor"),style:{...a.props.style,"--jkl-notification-badge-anchor-name":b},title:a.props.title??j}):a,c?e.jsxs("div",{className:k("jkl-notification-badge",d&&"jkl-notification-badge--dot",n),"data-urgent":L,"data-count":o,"data-hide-counter":d,...u,style:{...u.style,"--jkl-notification-badge-anchor-name":b},id:f,children:[d?null:e.jsx("span",{"aria-hidden":"true",children:P(o,h)}),e.jsx("div",{className:"jkl-sr-only",children:j})]}):null]})};try{t.displayName="NotificationBadge",t.__docgenInfo={description:"",displayName:"NotificationBadge",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/notification-badge/NotificationBadge.tsx",methods:[],props:{count:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"}],description:"Antall varsler",name:"count",parent:{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"},required:!0,tags:{},type:{name:"number"}},max:{defaultValue:{value:"99"},declarations:[{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"}],description:'Høyeste tall som vises før det blir "+".',name:"max",parent:{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"},required:!1,tags:{default:"99"},type:{name:"number"}},hideCounter:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"}],description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",parent:{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"},required:!1,tags:{},type:{name:"boolean"}},children:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"}],description:"Elementet varselet skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",parent:{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"},required:!1,tags:{},type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:"varsler"},declarations:[{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"}],description:`Teksten skjermlesere får, og tittelen på ankeret. Brukes ordrett, slik du
sender den inn.

Antallet vises bare visuelt, så dette er eneste sted skjermlesere kan få
det. Ta det med i strengen, og hold den i takt med \`count\`.`,name:"label",parent:{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"},required:!1,tags:{example:'`${antallMeldinger} uleste meldinger`\n"4 produkter"',default:"varsler"},type:{name:"string"}},urgent:{defaultValue:{value:"false"},declarations:[{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"}],description:"Endrer farge fra kontrastfarge til en rød-farge.",name:"urgent",parent:{fileName:"jokul/packages/jokul/src/components/notification-badge/types.ts",name:"NotificationBadgeProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{}}}catch{}const w={title:"Komponenter/NotificationBadge",component:t,args:{count:3,max:99,hideCounter:!1,urgent:!0}},r={name:"Varselbjelle",parameters:{docs:{description:{story:"Det vanligste mønsteret: en ikonknapp (ghost, uten tekst) med varselbjelle som bærer antallet uleste varsler. Bruk `urgent` når varselet krever at brukeren gjør noe. `aria-label` på knappen sier hva knappen gjør, mens `label` på badgen sier hva tallet er og må følge `count`. Antallet vises bare visuelt, så `label` må alltid være med."}}},render:n=>e.jsx(t,{...n,label:`${n.count} uleste varsler`,children:e.jsx(E,{variant:"ghost","aria-label":"Varsler",icon:e.jsx(T,{children:"notifications"})})})},i={name:"I faner",args:{urgent:!1},parameters:{docs:{description:{story:"Uten `children` ligger badgen i flyten og tar plass etter fanens tekst. Sett `label` til noe som beskriver fanen, ikke bare «varsler», slik at skjermlesere ikke får samme tekst på hver fane."}}},render:n=>e.jsxs(N,{children:[e.jsxs(B,{children:[e.jsx(m,{children:"Forsikringer"}),e.jsxs(m,{children:["Skadesaker",e.jsx(t,{...n,count:2,label:"2 nye skadesaker"})]}),e.jsxs(m,{children:["Tilbud",e.jsx(t,{...n,count:5,label:"5 nye tilbud"})]})]}),e.jsx(p,{children:"Dine forsikringer"}),e.jsx(p,{children:"Dine skadesaker"}),e.jsx(p,{children:"Dine tilbud"})]})},l={name:"I linkliste",args:{count:120,urgent:!1},parameters:{docs:{description:{story:"Inline-modusen i en linkliste. Lenken er en flex-container med `space-between`, så badgen får `margin-inline-end: auto` for å stå rett etter teksten mens pilen blir liggende helt til høyre. Over `max` vises antallet som «99+», mens `label` kan gi skjermlesere det faktiske tallet."}}},render:n=>e.jsxs(s,{label:"Min side",hideLabel:!1,outlined:!0,children:[e.jsx(s.Link,{href:"#",children:"Forsikringer"}),e.jsxs(s.Link,{href:"#",children:["Innboks",e.jsx(t,{...n,label:`${n.count} uleste meldinger`,style:{marginInlineEnd:"auto"}})]}),e.jsx(s.Link,{href:"#",children:"Fakturaer"}),e.jsx(s.Link,{href:"#",children:"Skadesaker"}),e.jsx(s.Link,{href:"#",children:"Dokumenter"})]})},C=["Varselbjelle","IFaner","ILinkliste"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'{\n  name: "Varselbjelle",\n  parameters: {\n    docs: {\n      description: {\n        story: "Det vanligste mønsteret: en ikonknapp (ghost, uten tekst) med varselbjelle som bærer antallet uleste varsler. Bruk `urgent` når varselet krever at brukeren gjør noe. `aria-label` på knappen sier hva knappen gjør, mens `label` på badgen sier hva tallet er og må følge `count`. Antallet vises bare visuelt, så `label` må alltid være med."\n      }\n    }\n  },\n  render: args => <NotificationBadge {...args} label={`${args.count} uleste varsler`}>\n            <Button variant="ghost" aria-label="Varsler" icon={<Icon>notifications</Icon>} />\n        </NotificationBadge>\n}',...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "I faner",
  args: {
    urgent: false
  },
  parameters: {
    docs: {
      description: {
        story: "Uten \`children\` ligger badgen i flyten og tar plass etter fanens tekst. Sett \`label\` til noe som beskriver fanen, ikke bare «varsler», slik at skjermlesere ikke får samme tekst på hver fane."
      }
    }
  },
  render: args => <Tabs>
            <TabList>
                <Tab>Forsikringer</Tab>
                <Tab>
                    Skadesaker
                    <NotificationBadge {...args} count={2} label="2 nye skadesaker" />
                </Tab>
                <Tab>
                    Tilbud
                    <NotificationBadge {...args} count={5} label="5 nye tilbud" />
                </Tab>
            </TabList>
            <TabPanel>Dine forsikringer</TabPanel>
            <TabPanel>Dine skadesaker</TabPanel>
            <TabPanel>Dine tilbud</TabPanel>
        </Tabs>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "I linkliste",
  args: {
    count: 120,
    urgent: false
  },
  parameters: {
    docs: {
      description: {
        story: "Inline-modusen i en linkliste. Lenken er en flex-container med \`space-between\`, så badgen får \`margin-inline-end: auto\` for å stå rett etter teksten mens pilen blir liggende helt til høyre. Over \`max\` vises antallet som «99+», mens \`label\` kan gi skjermlesere det faktiske tallet."
      }
    }
  },
  render: args => <LinkList label="Min side" hideLabel={false} outlined>
            <LinkList.Link href="#">Forsikringer</LinkList.Link>
            <LinkList.Link href="#">
                Innboks
                <NotificationBadge {...args} label={\`\${args.count} uleste meldinger\`} style={{
        marginInlineEnd: "auto"
      }} />
            </LinkList.Link>
            <LinkList.Link href="#">Fakturaer</LinkList.Link>
            <LinkList.Link href="#">Skadesaker</LinkList.Link>
            <LinkList.Link href="#">Dokumenter</LinkList.Link>
        </LinkList>
}`,...l.parameters?.docs?.source}}};export{i as IFaner,l as ILinkliste,r as Varselbjelle,C as __namedExportsOrder,w as default};

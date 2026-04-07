import{j as e}from"./iframe-B93scUG8.js";import{c as u}from"./clsx-B-dksMZM.js";import{I as c}from"./Icon-B9uNnDz3.js";import{B as h}from"./Button-BF_GrdPK.js";/* empty css               *//* empty css               */import{F as o}from"./Flex-7Yom15uD.js";const s=({position:l="top",buttonText:t="Hjelp",showButtonText:i=!1,iconPosition:p="left",className:d,children:m,...a})=>e.jsxs("div",{className:u("jkl-help",d),children:[e.jsx(h,{...a,title:t||a.title,iconPosition:p,variant:"ghost",className:"jkl-help-trigger",icon:e.jsx(c,{"aria-hidden":"true",children:"help"}),"data-testid":"jkl-help-trigger",popovertarget:`${t}-popover`,style:{anchorName:`${t}-popover`},children:i&&t}),e.jsx("output",{"aria-live":"assertive",children:e.jsx("div",{"data-position":l,popover:"auto",id:`${t}-popover`,className:"jkl-help-popover",children:m})})]});s.__docgenInfo={description:"",methods:[],displayName:"Help",props:{position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:`Initiell plassering av popoveren i forhold til triggeren.
@default "top"`,defaultValue:{value:'"top"',computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:`@default "left"

@deprecated siden teksten ikke lenger skal vises vil heller ikke posisjon være relevant`,defaultValue:{value:'"left"',computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Teksten på knappen som åpner help-popover.",defaultValue:{value:'"Hjelp"',computed:!1}},showButtonText:{required:!1,tsType:{name:"boolean"},description:`@default false

@deprecated dersom du vil vise tekst knyttet til en hjelpetekst bruk heller Button`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Innholdet i tooltipen."}}};const v={title:"Komponenter/Help",component:s,args:{position:"top",showButtonText:!1,buttonText:"Hjelp",children:"Jeg er en hjelpetekst",iconPosition:"left"}},n={},r={args:{buttonText:"Pris på tjenesten",children:"Reise SMS er en gratistjeneste levert av telefonoperatøren din."},render:l=>e.jsxs(o,{gap:"m",direction:"column",style:{maxWidth:"40ch"},children:["skal vi dokumentere denne use casen noe mer?",e.jsxs(o,{gap:"2xs",alignItems:"center",children:[e.jsx("h1",{className:"jkl-heading-1",children:"Reise SMS"}),e.jsx(s,{...l})]}),e.jsx("p",{children:"Når du kommer til et nytt land, vil du få en SMS med påminnelse om hva du skal gjøre når noe skjer, og hvor du kan få hjelp. Døgnet rundt i hele verden."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: "Pris på tjenesten",
    children: "Reise SMS er en gratistjeneste levert av telefonoperatøren din."
  },
  render: args => <Flex gap="m" direction="column" style={{
    maxWidth: "40ch"
  }}>
            skal vi dokumentere denne use casen noe mer?
            <Flex gap="2xs" alignItems="center">
                <h1 className="jkl-heading-1">Reise SMS</h1>
                <Help {...args} />
            </Flex>
            <p>
                Når du kommer til et nytt land, vil du få en SMS med påminnelse
                om hva du skal gjøre når noe skjer, og hvor du kan få hjelp.
                Døgnet rundt i hele verden.
            </p>
        </Flex>
}`,...r.parameters?.docs?.source}}};const f=["_Help","TekstMedHelp"],T=Object.freeze(Object.defineProperty({__proto__:null,TekstMedHelp:r,_Help:n,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{s as H,T as a,v as m};

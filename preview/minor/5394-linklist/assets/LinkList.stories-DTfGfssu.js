import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{R as m,r as p}from"./index-siqcju79.js";import{c as L}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DaWZu8wl.js";const k=m.forwardRef(function(i,o){const{as:l="a",children:s,className:d,...c}=i;return e.jsx("li",{className:L("jkl-link-list-item",d),children:e.jsx(l,{className:"jkl-link-list-link",ref:o,...c,children:s})})});k.__docgenInfo={description:"",methods:[],displayName:"LinkListLink",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""}}};const n=({label:r,variant:i,className:o,...l})=>{const s=p.useId(),d=i==="ordered"?"ol":"ul";return e.jsxs("nav",{className:L("jkl-link-list",o),"aria-labelledby":`list-${s}-label`,children:[e.jsx("p",{className:"jkl-link-list-title",id:`list-${s}-label`,children:r}),e.jsx(d,{...l})]})};n.Link=k;n.__docgenInfo={description:"",methods:[],displayName:"LinkList",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"union",raw:'"unordered" | "ordered"',elements:[{name:"literal",value:'"unordered"'},{name:"literal",value:'"ordered"'}]},description:""}}};const j={title:"Komponenter/LinkList",component:n,subcomponents:{LinkListLink:k},args:{variant:"unordered",label:"Lenker"},argTypes:{variant:{control:"radio",options:["ordered","unordered"]}},tags:["autodocs"]},g=["Sparebank 1","DNB","LOFavør","Norsk Sykepleierforbund","Marker og Eidsberg Sparebank","Evje og Hornnes Sparebank","Høland og Setskog Sparebank","Sparebanken Møre","JBF","Penger.no"].sort(),t={name:"Innholdsfortegnelse",args:{variant:"ordered",label:"Sideinnhold"},render:r=>e.jsxs(n,{...r,children:[e.jsx(n.Link,{href:"#",children:"Ledige stillinger"}),e.jsx(n.Link,{href:"#",children:"Hvorfor Fremtind?"}),e.jsx(n.Link,{href:"#",children:"Fordeler og goder"}),e.jsx(n.Link,{href:"#",children:"Kultur"}),e.jsx(n.Link,{href:"#",children:"Teknologi"})]})},a={name:"Lenkeliste",args:{variant:"unordered",label:"Våre distributører"},render:r=>e.jsx(n,{...r,children:g.map(i=>e.jsx(n.Link,{href:"#",children:i},i))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Innholdsfortegnelse",
  args: {
    variant: "ordered",
    label: "Sideinnhold"
  },
  render: args => <LinkList {...args}>
            <LinkList.Link href="#">Ledige stillinger</LinkList.Link>
            <LinkList.Link href="#">Hvorfor Fremtind?</LinkList.Link>
            <LinkList.Link href="#">Fordeler og goder</LinkList.Link>
            <LinkList.Link href="#">Kultur</LinkList.Link>
            <LinkList.Link href="#">Teknologi</LinkList.Link>
        </LinkList>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Lenkeliste",
  args: {
    variant: "unordered",
    label: "Våre distributører"
  },
  render: args => <LinkList {...args}>
            {banks.map(link => <LinkList.Link href="#" key={link}>
                    {link}
                </LinkList.Link>)}
        </LinkList>
}`,...a.parameters?.docs?.source}}};const x=["OrderedList","_LinkList"];export{t as OrderedList,a as _LinkList,x as __namedExportsOrder,j as default};

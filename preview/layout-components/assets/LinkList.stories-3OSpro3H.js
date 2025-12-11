import{j as n}from"./jsx-runtime-D9p_MChh.js";import{R as p}from"./index-CRL2yuNo.js";import{c as L}from"./clsx-B-dksMZM.js";import{A as f}from"./ArrowRightIcon-CVxI1i1Y.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Icon-BsB2AusX.js";const h=({className:e,...r})=>n.jsx("li",{className:L("jkl-link-list-item",e),...r}),u=p.forwardRef(function(r,t){const{as:o="a",children:m,className:d,...c}=r;return n.jsxs(o,{className:L("jkl-link-list-link",d),ref:t,...c,children:[m,n.jsx(f,{className:"jkl-link-list-link__arrow"})]})}),i=({variant:e,className:r,...t})=>{const o=e==="ordered"?"ol":"ul";return n.jsx(o,{className:L("jkl-link-list",r,{"jkl-link-list--ordered":e==="ordered","jkl-link-list--unordered":e==="unordered"}),...t})};i.Link=u;i.Item=h;i.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ className, ...rest }",optional:!1,type:null}],returns:null}],displayName:"LinkList"};const S={title:"Komponenter/List/LinkList",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["ordered","unordered"]}}},s={name:"LinkList",args:{variant:"unordered"},render:e=>n.jsxs(i,{style:{minWidth:"50vw"},...e,children:[n.jsx(i.Item,{children:n.jsx(i.Link,{href:"#",children:"SpareBank 1"})}),n.jsx(i.Item,{children:n.jsx(i.Link,{href:"#",children:"DNB"})}),n.jsx(i.Item,{children:n.jsx(i.Link,{href:"#",children:"LOfavør"})}),n.jsx(i.Item,{children:n.jsx(i.Link,{href:"#",children:"Norsk Sykepleierforbund"})})]})};var a,k,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "LinkList",
  args: {
    variant: "unordered"
  },
  render: props => <LinkList style={{
    minWidth: "50vw"
  }} {...props}>
            <LinkList.Item>
                <LinkList.Link href="#">SpareBank 1</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">DNB</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">LOfavør</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">Norsk Sykepleierforbund</LinkList.Link>
            </LinkList.Item>
        </LinkList>
}`,...(l=(k=s.parameters)==null?void 0:k.docs)==null?void 0:l.source}}};const _=["LinkListStory"];export{s as LinkListStory,_ as __namedExportsOrder,S as default};

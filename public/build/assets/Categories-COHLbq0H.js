var R=Object.defineProperty;var v=(r,t,o)=>t in r?R(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var p=(r,t,o)=>(v(r,typeof t!="symbol"?t+"":t,o),o);import{j as s}from"./AboutHeader-CpM0iYLI.js";import{r as n}from"./index-B80Lgev0.js";import{c as w}from"./ReactAppend-CBRQCQGz.js";import{B as C}from"./Base-BRjzs9sS.js";import{C as j}from"./CreateReactScript-B4L7iD9b.js";import{T as B,R as D,D as d}from"./ReactAppend-CG--zxq8.js";import{M as E}from"./Modal-Dbgjpj-3.js";import{T as F}from"./TextareaFormGroup-BFYMlwZm.js";import{S}from"./SwitchFormGroup-BZWeWgGS.js";import{S as T}from"./Email-9J8hnlEf.js";import{I as y}from"./InputFormGroup-aNCWUTCq.js";import{B as G}from"./Results-CGjdirJh.js";import"./index-DO3Aws4m.js";import"./tippy-react.esm-CHhA99mn.js";/* empty css              */import"./main-B2CtU6ez.js";import"./___vite-browser-external_commonjs-proxy-C9-083JZ.js";import"./index.esm-Cu-mVv1q.js";/* empty css               */class k extends G{constructor(){super(...arguments);p(this,"path","admin/categories")}}const a=new k,N=()=>{const r=n.useRef(),t=n.useRef(),o=n.useRef(),c=n.useRef(),l=n.useRef(),[x,u]=n.useState(!1),m=e=>{e!=null&&e.id?u(!0):u(!1),o.current.value=(e==null?void 0:e.id)??"",c.current.value=(e==null?void 0:e.name)??"",l.current.value=(e==null?void 0:e.description)??"",$(t.current).modal("show")},g=async e=>{e.preventDefault();const i={id:o.current.value||void 0,name:c.current.value,description:l.current.value};await a.save(i)&&($(r.current).dxDataGrid("instance").refresh(),$(t.current).modal("hide"))},h=async({id:e,value:i})=>{await a.boolean({id:e,field:"visible",value:i})&&$(r.current).dxDataGrid("instance").refresh()},b=async e=>{const{isConfirmed:i}=await T.fire({title:"Eliminar registro",text:"¿Estas seguro de eliminar este registro?",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",cancelButtonText:"Cancelar"});!i||!await a.delete(e)||$(r.current).dxDataGrid("instance").refresh()};return s.jsxs(s.Fragment,{children:[s.jsx(B,{gridRef:r,title:"Categorías",rest:a,toolBar:e=>{e.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(r.current).dxDataGrid("instance").refresh()}}),e.unshift({widget:"dxButton",location:"after",options:{icon:"plus",text:"Nuevo registro",hint:"Nuevo registro",onClick:()=>m()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"name",caption:"Categoría",width:"30%"},{dataField:"description",caption:"Descripción",width:"50%"},{dataField:"visible",caption:"Visible",dataType:"boolean",cellTemplate:(e,{data:i})=>{$(e).empty(),D(e,s.jsx(S,{checked:i.visible==1,onChange:()=>h({id:i.id,value:!i.visible})}))}},{caption:"Acciones",cellTemplate:(e,{data:i})=>{e.css("text-overflow","unset"),e.append(d({className:"btn btn-xs btn-soft-primary",title:"Editar",icon:"fa fa-pen",onClick:()=>m(i)})),e.append(d({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>b(i.id)}))},allowFiltering:!1,allowExporting:!1}]}),s.jsx(E,{modalRef:t,title:x?"Editar categoría":"Agregar categoría",onSubmit:g,size:"md",children:s.jsxs("div",{className:"row",id:"faqs-container",children:[s.jsx("input",{ref:o,type:"hidden"}),s.jsx(y,{eRef:c,label:"Categoría",col:"col-12",required:!0}),s.jsx(F,{eRef:l,label:"Descripción",rows:3})]})})]})};j((r,t)=>{w(r).render(s.jsx(C,{...t,title:"Categorías",children:s.jsx(N,{...t})}))});
var B=Object.defineProperty;var E=(r,n,o)=>n in r?B(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o;var g=(r,n,o)=>(E(r,typeof n!="symbol"?n+"":n,o),o);import{j as s}from"./AboutHeader-CpM0iYLI.js";import{r as t}from"./index-B80Lgev0.js";import{c as I}from"./ReactAppend-CBRQCQGz.js";import{B as _}from"./Base-1lDDkOv7.js";import{C as G}from"./CreateReactScript-B4L7iD9b.js";import{T as A,D}from"./DxButton-Cze-ypGT.js";import{M as L}from"./Modal-DUfP1iw0.js";import{I as m}from"./InputFormGroup-C_l38x1H.js";import{R as j}from"./ReactAppend-C-tNgxIf.js";import{S as N}from"./SwitchFormGroup-Cv62QkRk.js";import{I as V}from"./ImageFormGroup-CUCbODBj.js";import{S as q}from"./sweetalert2.all-Dh0rZL5X.js";import{B as H}from"./Results-B7SuXOZ7.js";import{r as v}from"./DxBox-CdMuSyGE.js";import{T as S}from"./TextareaFormGroup-BkvHoRll.js";import"./index-DO3Aws4m.js";import"./tippy-react.esm-CHhA99mn.js";/* empty css              */import"./Logout-CuE5mwZG.js";import"./main-B2CtU6ez.js";import"./___vite-browser-external_commonjs-proxy-C9-083JZ.js";import"./index.esm-Cu-mVv1q.js";/* empty css               */class O extends H{constructor(){super(...arguments);g(this,"path","admin/ads");g(this,"hasFiles",!0)}}const u=new O,P=({})=>{const r=t.useRef(),n=t.useRef(),o=t.useRef(),p=t.useRef(),d=t.useRef(),c=t.useRef(),f=t.useRef(),x=t.useRef(),h=t.useRef(),b=t.useRef(),a=t.useRef(),[y,R]=t.useState(!1),w=e=>{e!=null&&e.id?R(!0):R(!1),o.current.value=(e==null?void 0:e.id)??"",p.current.value=(e==null?void 0:e.name)??"",d.current.value=(e==null?void 0:e.description)??"",c.image.src=`/api/ads/media/${e==null?void 0:e.image}`,c.current.value=null,f.current.value=(e==null?void 0:e.date_begin)??"",x.current.value=(e==null?void 0:e.date_end)??"",h.current.value=(e==null?void 0:e.seconds)??0,b.current.value=(e==null?void 0:e.link)??"",e!=null&&e.invasivo?$(a.current).prop("checked",!1).trigger("click"):$(a.current).prop("checked",!0).trigger("click"),$(n.current).modal("show")},M=async e=>{e.preventDefault();const i={id:o.current.value||void 0,name:p.current.value,description:d.current.value,date_begin:f.current.value,date_end:x.current.value,seconds:h.current.value||0,link:b.current.value,invasivo:a.current.checked?1:0},l=new FormData;for(const F in i)l.append(F,i[F]);const k=c.current.files[0];k&&l.append("image",k),await u.save(l)&&($(r.current).dxDataGrid("instance").refresh(),$(n.current).modal("hide"))},T=async({id:e,value:i})=>{await u.boolean({id:e,field:"visible",value:i})&&$(r.current).dxDataGrid("instance").refresh()},C=async e=>{const{isConfirmed:i}=await q.fire({title:"Eliminar anuncio",text:"¿Estás seguro de eliminar este anuncio?",icon:"warning",showCancelButton:!0,confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar"});!i||!await u.delete(e)||$(r.current).dxDataGrid("instance").refresh()};return s.jsxs(s.Fragment,{children:[s.jsx(A,{gridRef:r,title:"Anuncios",rest:u,toolBar:e=>{e.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(r.current).dxDataGrid("instance").refresh()}}),e.unshift({widget:"dxButton",location:"after",options:{icon:"plus",text:"Nuevo anuncio",hint:"Nuevo anuncio",onClick:()=>w()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"image",caption:"Imagen",width:"60px",allowFiltering:!1,cellTemplate:(e,{data:i})=>{j(e,s.jsx("img",{src:`/api/ads/media/${i.image}`,style:{width:"50px",aspectRatio:1,objectFit:"contain",objectPosition:"center",borderRadius:"4px"}}))}},{dataField:"name",caption:"Contenido",width:"50%",cellTemplate:(e,{data:i})=>{j(e,i.name||i.description?s.jsxs("p",{className:"mb-0",style:{width:"100%"},children:[s.jsx("b",{className:"d-block",children:i.name}),s.jsx("small",{className:"text-wrap text-muted",style:{overflow:"hidden",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2},children:i.description})]}):s.jsx("i",{className:"text-muted",children:"- Sin contenido textual -"}))}},{dataField:"date_begin",caption:"Mostrar",cellTemplate:(e,{data:i})=>{e.html(v(s.jsxs(s.Fragment,{children:[i.date_begin&&i.date_end?s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-0",children:[s.jsx("b",{children:"Desde:"})," ",moment(i.date_begin).format("DD [de] MMMM")]}),s.jsxs("p",{className:"mb-0",children:[s.jsx("b",{children:"Hasta:"})," ",moment(i.date_end).format("DD [de] MMMM")]})]}):s.jsxs("p",{className:"mb-0",children:[s.jsx("b",{children:"Visible:"})," Siempre"]}),s.jsxs("p",{className:"mb-0",children:[s.jsx("b",{children:"Se muestra:"})," ",i.seconds>0?s.jsxs(s.Fragment,{children:["Después de ",i.seconds,"s"]}):s.jsx(s.Fragment,{children:"Al cargar la página"})]}),s.jsxs("p",{className:"mb-0",children:[s.jsx("b",{children:"Invasivo:"})," ",i.invasivo?"Si":"No"]})]})))}},{dataField:"link",caption:"Link",cellTemplate:(e,{data:i})=>{i.link?e.html(v(s.jsx("a",{href:i.link,children:i.link}))):e.html(v(s.jsx("i",{className:"text-muted",children:"- Sin link -"})))}},{dataField:"visible",caption:"Visible",dataType:"boolean",width:"120px",cellTemplate:(e,{data:i})=>{j(e,s.jsx(N,{checked:i.visible,onChange:l=>T({id:i.id,value:l.target.checked})}))}},{caption:"Acciones",cellTemplate:(e,{data:i})=>{e.css("text-overflow","unset"),e.append(D({className:"btn btn-xs btn-soft-primary",title:"Editar",icon:"fa fa-pen",onClick:()=>w(i)})),e.append(D({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>C(i.id)}))},allowFiltering:!1,allowExporting:!1}]}),s.jsx(L,{modalRef:n,title:y?"Editar anuncio":"Agregar anuncio",onSubmit:M,size:"md",children:s.jsxs("div",{className:"row",id:"principal-container",children:[s.jsx("input",{ref:o,type:"hidden"}),s.jsx(V,{eRef:c,label:"Imagen",col:"col-md-4",aspect:1,fit:"contain",required:!0}),s.jsxs("div",{className:"col-md-8",children:[s.jsx(N,{eRef:a,label:"¿El anuncio es invasivo?",specification:"Solo se mostrará este anuncio y no los demás"}),s.jsx(S,{eRef:p,label:"Título",rows:1}),s.jsx(S,{eRef:d,label:"Descripción",rows:2})]}),s.jsx("label",{children:"Mostrar"}),s.jsx(m,{eRef:f,label:"Desde",type:"date",col:"col-md-6"}),s.jsx(m,{eRef:x,label:"Hasta",type:"date",col:"col-md-6"}),s.jsx(m,{eRef:h,label:"Mostrar despues de (segundos)",type:"number"}),s.jsx(m,{eRef:b,label:"Link"})]})})]})};G((r,n)=>{I(r).render(s.jsx(_,{...n,title:"Pop-ups",children:s.jsx(P,{...n})}))});
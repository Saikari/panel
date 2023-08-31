(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function v(){}function F(e){return e()}function I(){return Object.create(null)}function L(e){e.forEach(F)}function K(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function V(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function W(e,t,n){e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function w(){return X(" ")}function N(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Y(e){return function(t){return t.preventDefault(),e.call(this,t)}}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Z(e){return Array.from(e.childNodes)}function P(e,t){e.value=t??""}let q;function E(e){q=e}const b=[],M=[];let x=[];const B=[],k=Promise.resolve();let S=!1;function ee(){S||(S=!0,k.then(z))}function j(e){x.push(e)}const A=new Set;let $=0;function z(){if($!==0)return;const e=q;do{try{for(;$<b.length;){const t=b[$];$++,E(t),te(t.$$)}}catch(t){throw b.length=0,$=0,t}for(E(null),b.length=0,$=0;M.length;)M.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];A.has(n)||(A.add(n),n())}x.length=0}while(b.length);for(;B.length;)B.pop()();S=!1,A.clear(),E(e)}function te(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}function ne(e){const t=[],n=[];x.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),x=t}const C=new Set;let re;function G(e,t){e&&e.i&&(C.delete(e),e.i(t))}function oe(e,t,n,o){if(e&&e.o){if(C.has(e))return;C.add(e),re.c.push(()=>{C.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function se(e){e&&e.c()}function H(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||j(()=>{const l=e.$$.on_mount.map(F).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...l):L(l),e.$$.on_mount=[]}),i.forEach(j)}function J(e,t){const n=e.$$;n.fragment!==null&&(ne(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(b.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,o,r,i,l,f=[-1]){const a=q;E(e);const s=e.$$={fragment:null,ctx:[],props:i,update:v,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:I(),dirty:f,skip_bound:!1,root:t.target||a.$$.root};l&&l(s.root);let m=!1;if(s.ctx=n?n(e,t.props||{},(u,g,..._)=>{const y=_.length?_[0]:g;return s.ctx&&r(s.ctx[u],s.ctx[u]=y)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](y),m&&ie(e,u)),g}):[],s.update(),m=!0,L(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const u=Z(t.target);s.fragment&&s.fragment.l(u),u.forEach(U)}else s.fragment&&s.fragment.c();t.intro&&G(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),z()}E(a)}class R{$destroy(){J(this,1),this.$destroy=v}$on(t,n){if(!K(n))return v;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!V(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ue(e){let t,n,o,r,i,l,f,a,s,m,u,g,_,y,D;return{c(){t=h("main"),n=h("h1"),n.textContent="Login",o=w(),r=h("form"),i=h("label"),i.textContent="Username:",l=w(),f=h("input"),a=w(),s=h("label"),s.textContent="Password:",m=w(),u=h("input"),g=w(),_=h("button"),_.textContent="Login",d(n,"class","svelte-x2ybtr"),d(i,"for","username"),d(f,"type","text"),d(f,"id","username"),d(s,"for","password"),d(u,"type","password"),d(u,"id","password"),d(_,"type","submit"),d(t,"class","svelte-x2ybtr")},m(p,O){W(p,t,O),c(t,n),c(t,o),c(t,r),c(r,i),c(r,l),c(r,f),P(f,e[0]),c(r,a),c(r,s),c(r,m),c(r,u),P(u,e[1]),c(r,g),c(r,_),y||(D=[N(f,"input",e[3]),N(u,"input",e[4]),N(r,"submit",Y(e[2]))],y=!0)},p(p,[O]){O&1&&f.value!==p[0]&&P(f,p[0]),O&2&&u.value!==p[1]&&P(u,p[1])},i:v,o:v,d(p){p&&U(t),y=!1,L(D)}}}function le(e,t,n){let o="",r="";async function i(a){a.preventDefault();try{const m=await(await fetch("users.txt")).text(),[u,g]=m.split(":");o===u.trim()&&r===g.trim()?console.log("Login successful!"):console.log("Invalid login credentials. Please try again.")}catch(s){console.log("Error reading file:",s.message)}}function l(){o=this.value,n(0,o)}function f(){r=this.value,n(1,r)}return[o,r,i,l,f]}class fe extends R{constructor(t){super(),Q(this,t,le,ue,T,{})}}function ce(e){let t,n;return t=new fe({}),{c(){se(t.$$.fragment)},m(o,r){H(t,o,r),n=!0},p:v,i(o){n||(G(t.$$.fragment,o),n=!0)},o(o){oe(t.$$.fragment,o),n=!1},d(o){J(t,o)}}}class ae extends R{constructor(t){super(),Q(this,t,null,ce,T,{})}}new ae({target:document.querySelector("#app")});
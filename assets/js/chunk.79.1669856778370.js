(self.webpackChunkultimate_jekyll=self.webpackChunkultimate_jekyll||[]).push([[79,44],{79:function(e){function t(){this.id=0}t.prototype.init=function(){var e=this;Manager.dom().select("form.slapform").each((function(t,r){console.log("Initialized slapform",r,t),Manager.dom().select(t).on("submit",(function(t){t.preventDefault(),e.process(t)})),Manager.dom().select(t.querySelector('button[type="submit"]')).removeAttribute("disabled").removeClass("disabled")}))},t.prototype.process=function(e){e.target.id=e.target.id||"slapform-"+this.id++;var t=Manager.dom(),r={},a="#"+e.target.id,s=e.target.dataset.slapType||"form",o=e.target.getAttribute("action");u(!0);var i;t.select(a+" input, "+a+" select, "+a+" textarea").each((function(e,s){var o=t.select(e),n=o.getAttribute("type"),l=o.getAttribute("name"),u=o.getAttribute("required");u=!(null==u),r[l]="checkbox"==n||"radio"==n?t.select(a+" *[name='"+l+"']").getValue():o.getValue();var d="checkbox"==n?(r[l]||[])[0]:r[l];if(i=!u||u&&!!d,console.log(l,r[l],"required = "+u,"pass = "+i),!i)return c(new Error("Please fill out all of the required fields.")),!1})),r._source="ultimate-jekyll",r._version="",r._referrer=window.location.href;try{var n=firebase.auth().currentUser;r.uid=n.uid,r.email||r.slap_replyto||(r.slap_replyto=n.email)}catch(e){}if(Manager.log(r),i)if("form"===s){var l=new URL(o);Object.keys(r).forEach(((e,t)=>{l.searchParams.set(e,r[e])})),window.location.href=l.toString()}else fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){c("success")})).catch((function(e){c(e),u(!1)}));else u(!1);function c(r,a){var s=t.select(e.target.getElementsByClassName("slapform-error")[0]),o=t.select(e.target.getElementsByClassName("slapform-success")[0]);s.setAttribute("hidden",!0),o.setAttribute("hidden",!0),r instanceof Error?s.removeAttribute("hidden").setInnerHTML(r):"success"===r&&o.removeAttribute("hidden").setInnerHTML(a||"Success! Please allow a few business days for our team to get back to you.")}function u(e){Manager.log("setting disalbed = ",e);var r=t.select(a+" button[type='submit']");e?r.setAttribute("disabled",e):r.removeAttribute("disabled")}},e.exports=t,window._SlapformProcessor=t}}]);
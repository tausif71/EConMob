(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1OYU":function(e,t,s){"use strict";s.r(t),s.d(t,"DHCModule",function(){return $});var o=s("ofXK"),i=s("tyNb"),n=s("fXoL"),r=s("HfUu"),a=s("3Pt+"),c=s("0zL+"),b=s("iKI+"),u=s("pqM3"),l=s("hzby");function d(e,t){if(1&e&&(n.Tb(0,"option",30),n.Jc(1),n.Sb()),2&e){const e=t.$implicit;n.oc("value",e.SAPCode),n.Ab(1),n.Mc(" ",e.SAPCode,"-",e.Name,"")}}function f(e,t){if(1&e&&(n.Tb(0,"option",30),n.Jc(1),n.Sb()),2&e){const e=t.$implicit;n.oc("value",e.Code),n.Ab(1),n.Lc(" ",e.Desc,"")}}function g(e,t){1&e&&(n.Rb(0),n.Tb(1,"h5",31),n.Jc(2,"No Data Found"),n.Sb(),n.Qb())}function m(e,t){if(1&e){const e=n.Ub();n.Tb(0,"div",33),n.Tb(1,"div",34),n.Tb(2,"table",35),n.Tb(3,"tr"),n.Tb(4,"td"),n.Jc(5,"Issue No"),n.Sb(),n.Tb(6,"td"),n.Tb(7,"span",36),n.dc("click",function(){n.Bc(e);const s=t.$implicit;return n.hc(2).UpdateIssue(s.Issue_No)}),n.Jc(8),n.Sb(),n.Sb(),n.Sb(),n.Tb(9,"tr"),n.Tb(10,"td"),n.Jc(11,"Customer"),n.Sb(),n.Tb(12,"td"),n.Jc(13),n.Sb(),n.Sb(),n.Tb(14,"tr"),n.Tb(15,"td"),n.Jc(16,"Raise Date"),n.Sb(),n.Tb(17,"td"),n.Jc(18),n.Sb(),n.Sb(),n.Tb(19,"tr"),n.Tb(20,"td"),n.Jc(21,"Division"),n.Sb(),n.Tb(22,"td"),n.Jc(23),n.Sb(),n.Sb(),n.Tb(24,"tr"),n.Tb(25,"td"),n.Jc(26,"Status"),n.Sb(),n.Tb(27,"td"),n.Tb(28,"span",37),n.Jc(29),n.Sb(),n.Sb(),n.Sb(),n.Tb(30,"tr"),n.Tb(31,"td"),n.Jc(32,"Description"),n.Sb(),n.Tb(33,"td"),n.Tb(34,"span",38),n.Jc(35),n.Sb(),n.Ob(36,"br"),n.Jc(37),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb()}if(2&e){const e=t.$implicit;n.Ab(8),n.Kc(e.Issue_No),n.Ab(5),n.Mc("",e.Issue_Raise_For,"-",e.CA_Cust_Display_Name,""),n.Ab(5),n.Kc(e.Issue_Raise_Date),n.Ab(5),n.Kc(e.Division),n.Ab(5),n.Gc("color","Open"==e.Issue_Status?"red":"green"),n.Ab(1),n.Lc(" ",e.Issue_Status,""),n.Ab(6),n.Kc(e.CategoryName),n.Ab(2),n.Lc(" ",e.Issue_Description," ")}}function p(e,t){if(1&e&&(n.Rb(0),n.Hc(1,m,38,10,"div",32),n.Qb()),2&e){const e=n.hc();n.Ab(1),n.oc("ngForOf",e.IssueDetailList)}}const h=function(){return{dateInputFormat:"DD/MM/YYYY"}};let S=(()=>{class e{constructor(e,t,s,o,i,n){this._authService=e,this.fb=t,this._customer=s,this._DHCService=o,this._router=i,this._EncDecService=n,this.userid=""}ngOnInit(){this.datePipe=new o.f("en-US"),this.userid=this._authService.getLoggedInUserid(),this.searchIssueForm=this.fb.group({CustCode:[""],CategoryID:[""],Status:[""],FromDate:[""],ToDate:[""],IssueNo:[""],UserID:this.userid}),this.GetCustomerAccountList(this._authService.getLoggedInUserid()),this.GetCategoryList(),this.SearchIssue()}GetCustomerAccountList(e){this._customer.GetCustomerAccount(e).subscribe(e=>{this.customerAccountList=e.Data._UserInfo[0].CustomerAccountList})}GetCategoryList(){this._DHCService.GetCategoryList().subscribe(e=>{this.CategoryList=e.Data.CategoryList})}changeDateFormat(e,t){e=this.datePipe.transform(e,"dd/MM/yyyy"),"fromdate"==t?this.searchIssueForm.get("FromDate").setValue(e):this.searchIssueForm.get("ToDate").setValue(e)}SearchIssue(){const e=this.searchIssueForm.getRawValue();""!=e.FromDate&&null!=e.FromDate&&(e.FromDate=e.FromDate.split("/").reverse().join("-")),""!=e.ToDate&&null!=e.ToDate&&(e.ToDate=e.ToDate.split("/").reverse().join("-")),console.log(e),this._DHCService.SearchIssueDetail(e).subscribe(e=>{"Success"==e.Message?(this.IssueDetailList=e.Data.DHCHeaderList,console.log(e.Data.DHCHeaderList)):this.IssueDetailList=null})}UpdateIssue(e){this._router.navigate(["DHC/update-issue",this._EncDecService.set(e)])}GoToHome(){this._router.navigate(["/dashboard"])}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(r.a),n.Nb(a.d),n.Nb(c.b),n.Nb(b.a),n.Nb(i.c),n.Nb(u.a))},e.\u0275cmp=n.Hb({type:e,selectors:[["app-issuedashboard"]],decls:55,vars:9,consts:[[1,"col-12","mt-2","text-right"],["routerLink","/DHC/raise-issue",1,"btn","btn-danger","btn-sm"],[1,"fa","fa-pen"],[3,"formGroup"],[1,"col-12"],[1,""],["for","CustomerCode"],["type","text","formControlName","CustCode",1,"custom-select","custom-select-sm","tx-12"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","fromdate"],[1,"fa","fa-calendar"],["type","text","formControlName","FromDate","autocomplete","off","id","fromdate","bsDatepicker","","onkeydown","return false;",1,"form-control","form-control-sm",3,"bsConfig","bsValueChange"],["for","todate"],["type","text","formControlName","ToDate","id","todate","autocomplete","off","bsDatepicker","","onkeydown","return false;",1,"form-control","form-control-sm","datepicker","date",3,"bsConfig","bsValueChange"],["for","issueno"],["type","text","formControlName","IssueNo","autocomplete","off","id","issueno",1,"form-control","form-control-sm"],["for","CategoryID"],["type","text","formControlName","CategoryID",1,"custom-select","custom-select-sm","tx-12"],["for","Status"],["type","text","formControlName","Status",1,"custom-select","custom-select-sm","tx-12"],["value","0"],["value","10"],["value","20"],[2,"margin-top","4%"],["type","button",1,"btn","btn-sm","btn-primary",2,"width","48%","float","left",3,"click"],["type","button",1,"btn","btn-sm","btn-primary",2,"width","48%","float","right",3,"click"],[1,"clearfix"],[1,"col-sm-12","col-xl-12",2,"padding-left","5px","padding-right","5px"],[4,"ngIf"],[3,"value"],[2,"text-align","center","color","red","font-weight","bold","margin-top","5%"],["class","card card-hover card-customer-score",4,"ngFor","ngForOf"],[1,"card","card-hover","card-customer-score"],[1,"card-body","pd-t-10"],[1,"table","table-sm","table-bordered"],[2,"font-weight","bold","text-decoration","underline","cursor","pointer",3,"click"],[2,"font-weight","bold"],[2,"text-decoration","underline"]],template:function(e,t){1&e&&(n.Tb(0,"div",0),n.Tb(1,"a",1),n.Ob(2,"i",2),n.Jc(3,"\xa0 Raise New Issue"),n.Sb(),n.Sb(),n.Tb(4,"form",3),n.Tb(5,"div",4),n.Tb(6,"div",5),n.Tb(7,"label",6),n.Jc(8,"User Account"),n.Sb(),n.Tb(9,"select",7),n.Tb(10,"option",8),n.Jc(11,"---Select Account List---"),n.Sb(),n.Hc(12,d,2,3,"option",9),n.Sb(),n.Sb(),n.Tb(13,"div",5),n.Tb(14,"label",10),n.Jc(15," From Date(DD/MM/YYYY)\xa0"),n.Ob(16,"i",11),n.Sb(),n.Tb(17,"input",12),n.dc("bsValueChange",function(e){return t.changeDateFormat(e,"fromdate")}),n.Sb(),n.Sb(),n.Tb(18,"div",5),n.Tb(19,"label",13),n.Jc(20,"To Date(DD/MM/YYYY)\xa0"),n.Ob(21,"i",11),n.Sb(),n.Tb(22,"input",14),n.dc("bsValueChange",function(e){return t.changeDateFormat(e,"todate")}),n.Sb(),n.Sb(),n.Tb(23,"div",5),n.Tb(24,"label",15),n.Jc(25,"Issue No"),n.Sb(),n.Ob(26,"input",16),n.Sb(),n.Tb(27,"div",5),n.Tb(28,"label",17),n.Jc(29,"Category"),n.Sb(),n.Tb(30,"select",18),n.Tb(31,"option",8),n.Jc(32,"---Select Category---"),n.Sb(),n.Hc(33,f,2,2,"option",9),n.Sb(),n.Sb(),n.Tb(34,"div",5),n.Tb(35,"label",19),n.Jc(36,"Status"),n.Sb(),n.Tb(37,"select",20),n.Tb(38,"option",8),n.Jc(39,"---Select All---"),n.Sb(),n.Tb(40,"option",21),n.Jc(41,"Pending"),n.Sb(),n.Tb(42,"option",22),n.Jc(43,"WIP"),n.Sb(),n.Tb(44,"option",23),n.Jc(45,"Closed"),n.Sb(),n.Sb(),n.Sb(),n.Tb(46,"div",24),n.Tb(47,"button",25),n.dc("click",function(){return t.SearchIssue()}),n.Jc(48,"SUBMIT"),n.Sb(),n.Tb(49,"button",26),n.dc("click",function(){return t.GoToHome()}),n.Jc(50," CANCEL "),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Ob(51,"div",27),n.Tb(52,"div",28),n.Hc(53,g,3,0,"ng-container",29),n.Hc(54,p,2,1,"ng-container",29),n.Sb()),2&e&&(n.Ab(4),n.oc("formGroup",t.searchIssueForm),n.Ab(8),n.oc("ngForOf",t.customerAccountList),n.Ab(5),n.oc("bsConfig",n.rc(7,h)),n.Ab(5),n.oc("bsConfig",n.rc(8,h)),n.Ab(11),n.oc("ngForOf",t.CategoryList),n.Ab(20),n.oc("ngIf",null==t.IssueDetailList),n.Ab(1),n.oc("ngIf",null!=t.IssueDetailList))},directives:[i.d,a.v,a.m,a.g,a.t,a.l,a.e,a.p,a.w,o.n,a.b,l.b,l.a,o.o],styles:["table.table.table-sm.issuetable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:12px}table.table.table-sm.issuetable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{background-color:#7fffd4;width:40%}table.table.table-sm.table-bordered[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child{background-color:#eee}table.table.table-sm.table-bordered[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.card[_ngcontent-%COMP%]{border:none}.card-body[_ngcontent-%COMP%]{padding-left:9px;padding-right:9px}table.table.table-sm.table-bordered[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:35%}"]}),e})();var I=s("tk/3");function C(e,t){if(1&e&&(n.Tb(0,"option",16),n.Jc(1),n.Sb()),2&e){const e=t.$implicit;n.oc("value",e.SAPCode),n.Ab(1),n.Mc(" ",e.SAPCode,"-",e.Name,"")}}function D(e,t){1&e&&(n.Tb(0,"div",18),n.Jc(1," Customer code is required. "),n.Sb())}function v(e,t){if(1&e&&(n.Tb(0,"div"),n.Hc(1,D,2,0,"div",17),n.Sb()),2&e){const e=n.hc();n.Ab(1),n.oc("ngIf",null==e.RaiseIssueForm.get("CustomerCode").errors?null:e.RaiseIssueForm.get("CustomerCode").errors.required)}}function T(e,t){if(1&e&&(n.Tb(0,"option",16),n.Jc(1),n.Sb()),2&e){const e=t.$implicit;n.oc("value",e.Code),n.Ab(1),n.Lc(" ",e.Desc,"")}}function _(e,t){1&e&&(n.Tb(0,"div",18),n.Jc(1," Category is required. "),n.Sb())}function A(e,t){if(1&e&&(n.Tb(0,"div"),n.Hc(1,_,2,0,"div",17),n.Sb()),2&e){const e=n.hc();n.Ab(1),n.oc("ngIf",null==e.RaiseIssueForm.get("CategoryID").errors?null:e.RaiseIssueForm.get("CategoryID").errors.required)}}function y(e,t){1&e&&(n.Tb(0,"div",18),n.Jc(1," Description is required. "),n.Sb())}function F(e,t){if(1&e&&(n.Tb(0,"div"),n.Hc(1,y,2,0,"div",17),n.Sb()),2&e){const e=n.hc();n.Ab(1),n.oc("ngIf",null==e.RaiseIssueForm.get("Description").errors?null:e.RaiseIssueForm.get("Description").errors.required)}}let L=(()=>{class e{constructor(e,t,s,o,i,n){this._authService=e,this.fb=t,this._customer=s,this._DHCService=o,this._router=i,this.http=n,this.userid=""}ngOnInit(){this.userid=this._authService.getLoggedInUserid(),this.RaiseIssueForm=this.fb.group({CustomerCode:["",a.u.required],CategoryID:["",a.u.required],Division:["I2"],Description:["",a.u.required],FileString:[""],UserID:this.userid,Extension:[""]}),this.GetCustomerAccountList(this._authService.getLoggedInUserid()),this.GetCategoryList()}GetCustomerAccountList(e){this._customer.GetCustomerAccount(e).subscribe(e=>{this.customerAccountList=e.Data._UserInfo[0].CustomerAccountList})}GetCategoryList(){this._DHCService.GetCategoryList().subscribe(e=>{this.CategoryList=e.Data.CategoryList})}SubmitIssueDetail(){this._DHCService.RaiseIssue(this.RaiseIssueForm.value).subscribe(e=>{"Success"==e.Message&&(alert("Feedback submitted successfully."),this._router.navigate(["DHC/issue-dashboard"]))})}onFileSelect(e){const t=new RegExp("(.*?).(bmp|gif|png|jpg|jpeg|doc|doc|xls|mp4|docx|xlsx|txt|pdf)$");if(e.target.files.length>0){let s=e.target.files[0].name.lastIndexOf(".");if(s=e.target.files[0].name.slice(s),t.test(s)){const t=e.target.files[0],s=e.target.value.slice(2+(e.target.value.lastIndexOf(".")-1>>>0)),o=new FileReader;o.onloadend=()=>{var e=o.result.toString().split(";base64,")[1];console.log(e),this.RaiseIssueForm.get("FileString").setValue(e),this.RaiseIssueForm.get("Extension").setValue(s),this.RaiseIssueForm.enable()},e.target.files[0]&&o.readAsDataURL(t)}else alert("Please select correct file format"),this.RaiseIssueForm.disable()}}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(r.a),n.Nb(a.d),n.Nb(c.b),n.Nb(b.a),n.Nb(i.c),n.Nb(I.b))},e.\u0275cmp=n.Hb({type:e,selectors:[["app-raise-issue"]],decls:35,vars:7,consts:[[2,"text-align","center","background","#eee","padding","6px"],["enctype","multipart/form-data",3,"formGroup"],[1,"col-12"],[1,""],["for","CustomerCode"],["type","text","required","","formControlName","CustomerCode",1,"custom-select","custom-select-sm","tx-12"],["value",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["for","CategoryID"],["type","text","required","","formControlName","CategoryID",1,"custom-select","custom-select-sm","tx-12"],["for","Description"],["formControlName","Description","required","",1,"form-control","form-control-sm",2,"min-height","100px","resize","none"],["for","fileupload"],["type","file",1,"form-control",2,"padding","4px",3,"change"],["type","button",1,"btn","btn-sm","btn-primary","btn-block",2,"padding-top","2px","padding-bottom","2px","margin-top","3%",3,"disabled","click"],[3,"value"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(e,t){1&e&&(n.Tb(0,"h5",0),n.Jc(1,"Raise New Issue"),n.Sb(),n.Tb(2,"form",1),n.Tb(3,"div",2),n.Tb(4,"div",3),n.Tb(5,"label",4),n.Jc(6,"User Account"),n.Sb(),n.Tb(7,"select",5),n.Tb(8,"option",6),n.Jc(9,"---Select Account List---"),n.Sb(),n.Hc(10,C,2,3,"option",7),n.Sb(),n.Hc(11,v,2,1,"div",8),n.Sb(),n.Sb(),n.Tb(12,"div",2),n.Tb(13,"div",3),n.Tb(14,"label",9),n.Jc(15,"Category"),n.Sb(),n.Tb(16,"select",10),n.Tb(17,"option",6),n.Jc(18,"---Select Category---"),n.Sb(),n.Hc(19,T,2,2,"option",7),n.Sb(),n.Hc(20,A,2,1,"div",8),n.Sb(),n.Sb(),n.Tb(21,"div",2),n.Tb(22,"div",3),n.Tb(23,"label",11),n.Jc(24,"Please Describe the Issue here"),n.Sb(),n.Ob(25,"textarea",12),n.Hc(26,F,2,1,"div",8),n.Sb(),n.Sb(),n.Tb(27,"div",2),n.Tb(28,"div",3),n.Tb(29,"label",13),n.Jc(30,"File Upload"),n.Sb(),n.Tb(31,"input",14),n.dc("change",function(e){return t.onFileSelect(e)}),n.Sb(),n.Sb(),n.Sb(),n.Tb(32,"div",2),n.Tb(33,"button",15),n.dc("click",function(){return t.SubmitIssueDetail()}),n.Jc(34,"SUBMIT"),n.Sb(),n.Sb(),n.Sb()),2&e&&(n.Ab(2),n.oc("formGroup",t.RaiseIssueForm),n.Ab(8),n.oc("ngForOf",t.customerAccountList),n.Ab(1),n.oc("ngIf",!t.RaiseIssueForm.get("CustomerCode").valid&&t.RaiseIssueForm.get("CustomerCode").touched),n.Ab(8),n.oc("ngForOf",t.CategoryList),n.Ab(1),n.oc("ngIf",!t.RaiseIssueForm.get("CategoryID").valid&&t.RaiseIssueForm.get("CategoryID").touched),n.Ab(6),n.oc("ngIf",!t.RaiseIssueForm.get("Description").valid&&t.RaiseIssueForm.get("Description").touched),n.Ab(7),n.oc("disabled",!t.RaiseIssueForm.valid))},directives:[a.v,a.m,a.g,a.t,a.s,a.l,a.e,a.p,a.w,o.n,o.o,a.b],styles:[""]}),e})();function H(e,t){if(1&e&&(n.Tb(0,"div",11),n.Jc(1,"Update Concern Status"),n.Ob(2,"br"),n.Jc(3),n.Sb()),2&e){const e=n.hc();n.Ab(3),n.Kc(e.IssueDetailList[0].Issue_No)}}function x(e,t){if(1&e){const e=n.Ub();n.Rb(0),n.Tb(1,"tr"),n.Tb(2,"td"),n.Jc(3,"Name"),n.Sb(),n.Tb(4,"td"),n.Jc(5),n.Sb(),n.Sb(),n.Tb(6,"tr"),n.Tb(7,"td"),n.Jc(8,"Product Category"),n.Sb(),n.Tb(9,"td"),n.Jc(10),n.Sb(),n.Sb(),n.Tb(11,"tr"),n.Tb(12,"td"),n.Jc(13,"Raise On Date"),n.Sb(),n.Tb(14,"td"),n.Jc(15),n.Sb(),n.Sb(),n.Tb(16,"tr"),n.Tb(17,"td"),n.Jc(18,"Issue Status"),n.Sb(),n.Tb(19,"td"),n.Jc(20),n.Sb(),n.Sb(),n.Tb(21,"tr"),n.Tb(22,"td"),n.Jc(23,"Issue"),n.Sb(),n.Tb(24,"td"),n.Jc(25),n.Sb(),n.Sb(),n.Tb(26,"tr"),n.Tb(27,"td"),n.Jc(28,"Issue Description"),n.Sb(),n.Tb(29,"td"),n.Jc(30),n.Sb(),n.Sb(),n.Tb(31,"tr"),n.Tb(32,"td"),n.Jc(33,"Expected Resolution Date"),n.Sb(),n.Tb(34,"td"),n.Jc(35),n.Sb(),n.Sb(),n.Tb(36,"tr"),n.Tb(37,"td"),n.Jc(38,"Attachment"),n.Sb(),n.Tb(39,"td"),n.Tb(40,"span",13),n.dc("click",function(){n.Bc(e);const s=t.$implicit;return n.hc(2).DownloadFile(s.Issue_FilePath)}),n.Jc(41,"Download Attachment"),n.Sb(),n.Sb(),n.Sb(),n.Qb()}if(2&e){const e=t.$implicit;n.Ab(5),n.Mc("",e.Issue_Raise_For,"-",e.CA_Cust_Display_Name,""),n.Ab(5),n.Kc(e.Division),n.Ab(5),n.Kc(e.Issue_Raise_Date),n.Ab(5),n.Kc(e.CurrentStatus),n.Ab(5),n.Kc(e.CategoryName),n.Ab(5),n.Kc(e.Issue_Description),n.Ab(5),n.Kc(""==e.Issue_Resolution_Date?"NA":e.Issue_Resolution_Date)}}function w(e,t){if(1&e&&(n.Rb(0),n.Hc(1,x,42,8,"ng-container",12),n.Qb()),2&e){const e=n.hc();n.Ab(1),n.oc("ngForOf",e.IssueDetailList)}}function J(e,t){1&e&&(n.Rb(0),n.Tb(1,"h6",14),n.Jc(2,"No Data Found"),n.Sb(),n.Qb())}function R(e,t){1&e&&(n.Tb(0,"div",21),n.Jc(1," Description is required. "),n.Sb())}function O(e,t){if(1&e&&(n.Tb(0,"div"),n.Hc(1,R,2,0,"div",20),n.Sb()),2&e){const e=n.hc(2);n.Ab(1),n.oc("ngIf",null==e.updateIssueForm.get("IssueComment").errors?null:e.updateIssueForm.get("IssueComment").errors.required)}}function M(e,t){1&e&&(n.Tb(0,"div",23),n.Jc(1,"Note : This request is already closed."),n.Sb())}function N(e,t){if(1&e&&(n.Rb(0),n.Hc(1,M,2,0,"div",22),n.Qb()),2&e){const e=n.hc(2);n.Ab(1),n.oc("ngIf","20"==e.IssueDetailList[0].Issue_Status)}}function k(e,t){if(1&e){const e=n.Ub();n.Tb(0,"div",15),n.Tb(1,"form",16),n.Ob(2,"textarea",17),n.Hc(3,O,2,1,"div",5),n.Tb(4,"button",18),n.dc("click",function(){return n.Bc(e),n.hc().UpdateIssue()}),n.Jc(5,"Save"),n.Sb(),n.Tb(6,"button",19),n.dc("click",function(){return n.Bc(e),n.hc().ResolvedIssue()}),n.Jc(7,"Resolved"),n.Sb(),n.Hc(8,N,2,1,"ng-container",5),n.Sb(),n.Sb()}if(2&e){const e=n.hc();n.Ab(1),n.oc("formGroup",e.updateIssueForm),n.Ab(2),n.oc("ngIf",!e.updateIssueForm.get("IssueComment").valid&&e.updateIssueForm.get("IssueComment").touched),n.Ab(1),n.oc("disabled",!e.updateIssueForm.valid),n.Ab(2),n.oc("disabled",!e.updateIssueForm.valid),n.Ab(2),n.oc("ngIf",null!=e.IssueDetailList)}}function P(e,t){1&e&&(n.Rb(0),n.Tb(1,"li"),n.Jc(2,"No Conversation found"),n.Sb(),n.Qb())}function U(e,t){if(1&e&&(n.Tb(0,"h6",30),n.Jc(1,"Customer: "),n.Tb(2,"span"),n.Jc(3),n.Sb(),n.Sb()),2&e){const e=n.hc().$implicit;n.Ab(3),n.Kc(e.Create_Date)}}function E(e,t){if(1&e&&(n.Tb(0,"h6",30),n.Jc(1,"Sales Person: "),n.Tb(2,"span"),n.Jc(3),n.Sb(),n.Sb()),2&e){const e=n.hc().$implicit;n.Ab(3),n.Kc(e.Create_Date)}}function G(e,t){if(1&e&&(n.Rb(0),n.Tb(1,"li",24),n.Tb(2,"div",25),n.Tb(3,"span",26),n.Ob(4,"i",27),n.Sb(),n.Sb(),n.Tb(5,"div",28),n.Hc(6,U,4,1,"h6",29),n.Hc(7,E,4,1,"h6",29),n.Tb(8,"p"),n.Tb(9,"span",27),n.Jc(10),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Qb()),2&e){const e=t.$implicit;n.Ab(1),n.oc("ngClass","SP"==e.flag?"reverse":""),n.Ab(2),n.oc("ngClass","ED"==e.flag?"userClass":"salesPersonClass"),n.Ab(1),n.oc("ngClass","SP"==e.flag?"fa fa-tty":"fa fa-user"),n.Ab(2),n.oc("ngIf","ED"==e.flag),n.Ab(1),n.oc("ngIf","SP"==e.flag),n.Ab(2),n.oc("ngClass","ED"==e.flag?"userClass":""),n.Ab(1),n.Kc(e.Remarks)}}function q(e,t){if(1&e&&(n.Rb(0),n.Hc(1,G,11,7,"ng-container",12),n.Qb()),2&e){const e=n.hc();n.Ab(1),n.oc("ngForOf",e.IssueDetailList[0].Remarks)}}s("Iab2");const K=[{path:"issue-dashboard",component:S},{path:"raise-issue",component:L},{path:"update-issue/:issueno",component:(()=>{class e{constructor(e,t,s,o,i,n){this._AuthService=e,this._DHCService=t,this._EncDecService=s,this._router=o,this._activeRoute=i,this.fb=n}ngOnInit(){this.userid=this._AuthService.getLoggedInUserid(),this.updateIssueForm=this.fb.group({CustomerCode:[""],IssueHeaderID:[""],IssueDetailID:[""],IssueResolution:[""],IssueResolutionDate:[""],CategoryID:[""],Division:[""],Status:[""],IssueComment:["",a.u.required],IssueNo:[""],Action:[""],UserID:this.userid}),this._activeRoute.params.subscribe(e=>{let t=e.issueno;null!=t&&(t=this._EncDecService.get(t),this.GetIssueDetailbyIssueNo(t))})}GetIssueDetailbyIssueNo(e){this._DHCService.GetIssueDetailByIssueNo({IssueNo:e,UserID:this._AuthService.getLoggedInUserid()}).subscribe(e=>{console.log(e.Data.DHCHeaderList),"Success"==e.Message?(this.IssueDetailList=e.Data.DHCHeaderList,this.updateIssueForm.patchValue({CustomerCode:e.Data.DHCHeaderList[0].Issue_Raise_For,IssueHeaderID:e.Data.DHCHeaderList[0].Issue_Detail_ID,IssueDetailID:e.Data.DHCHeaderList[0].ID,IssueResolution:e.Data.DHCHeaderList[0].Issue_Resolution,IssueResolutionDate:e.Data.DHCHeaderList[0].Issue_Resolution_Date,CategoryID:e.Data.DHCHeaderList[0].Issue_Category_ID,IssueNo:e.Data.DHCHeaderList[0].Issue_No,Division:e.Data.DHCHeaderList[0].Issue_Prod_Category}),"20"==e.Data.DHCHeaderList[0].Issue_Status&&this.updateIssueForm.disable()):this.IssueDetailList=null})}UpdateIssue(){this.updateIssueForm.get("Action").setValue("Save"),this.updateIssueForm.get("Status").setValue("0"),this._DHCService.UpdateIssueDetail(this.updateIssueForm.value).subscribe(e=>{"Success"==e.Message&&(alert("Feedback submitted successfully."),this._router.navigate(["DHC/issue-dashboard"]))})}DownloadFile(e){window.open(e,"_blank")}ResolvedIssue(){this.updateIssueForm.get("Action").setValue("update"),this.updateIssueForm.get("Status").setValue("20"),this._DHCService.UpdateIssueDetail(this.updateIssueForm.value).subscribe(e=>{"Success"==e.Message&&(alert("Feedback closed successfully."),this._router.navigate(["DHC/issue-dashboard"]))})}DownloadAttachment(e){this._DHCService.DownloadAttachment(e).subscribe(e=>{"Success"!=e.Message&&alert("something went wrong")})}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(r.a),n.Nb(b.a),n.Nb(u.a),n.Nb(i.c),n.Nb(i.a),n.Nb(a.d))},e.\u0275cmp=n.Hb({type:e,selectors:[["app-update-issue"]],decls:15,vars:6,consts:[[1,"content-body",2,"padding","4px"],[1,"card"],["class","card-header tx-medium",4,"ngIf"],[1,"card-body",2,"padding","0px"],[1,"table","table-sm","table-bordered","issuetable"],[4,"ngIf"],["class","col","style","padding-left: 4px;padding-right: 4px;",4,"ngIf"],[1,"mt-3",2,"padding","10px","background","#e4e4e4","font-weight","bold"],[1,"fa","fa-comments"],[2,"min-height","300px","max-height","200px","overflow","scroll"],[1,"chat-msg-list"],[1,"card-header","tx-medium"],[4,"ngFor","ngForOf"],[2,"text-decoration","underline","color","blue",3,"click"],[1,"text-center","mt-4",2,"color","red"],[1,"col",2,"padding-left","4px","padding-right","4px"],[3,"formGroup"],["required","","formControlName","IssueComment",1,"form-control","form-control-sm",2,"min-height","100px"],["type","button",1,"btn","btn-primary","btn-w48","mt-2",3,"disabled","click"],["type","button",1,"btn","btn-danger","btn-w48","mt-2",2,"float","right",3,"disabled","click"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["style","font-size: 13px;color: #eeeded;background: #ff0024;font-weight: bold;font-family: inherit;margin-top: 2%;padding-left: 8px;",4,"ngIf"],[2,"font-size","13px","color","#eeeded","background","#ff0024","font-weight","bold","font-family","inherit","margin-top","2%","padding-left","8px"],[1,"msg-item",3,"ngClass"],[1,"avatar","avatar-sm"],[1,"avatar-initial","rounded-circle",3,"ngClass"],[3,"ngClass"],[1,"msg-body"],["class","msg-user",4,"ngIf"],[1,"msg-user"]],template:function(e,t){1&e&&(n.Tb(0,"div",0),n.Tb(1,"div",1),n.Hc(2,H,4,1,"div",2),n.Tb(3,"div",3),n.Tb(4,"table",4),n.Hc(5,w,2,1,"ng-container",5),n.Hc(6,J,3,0,"ng-container",5),n.Sb(),n.Hc(7,k,9,5,"div",6),n.Tb(8,"h6",7),n.Ob(9,"i",8),n.Jc(10," Comment(s)"),n.Sb(),n.Tb(11,"div",9),n.Tb(12,"ul",10),n.Hc(13,P,3,0,"ng-container",5),n.Hc(14,q,2,1,"ng-container",5),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb()),2&e&&(n.Ab(2),n.oc("ngIf",null!=t.IssueDetailList),n.Ab(3),n.oc("ngIf",null!=t.IssueDetailList),n.Ab(1),n.oc("ngIf",null==t.IssueDetailList),n.Ab(1),n.oc("ngIf",null!=t.IssueDetailList),n.Ab(6),n.oc("ngIf",null==t.IssueDetailList),n.Ab(1),n.oc("ngIf",null!=t.IssueDetailList))},directives:[o.o,o.n,a.v,a.m,a.g,a.b,a.s,a.l,a.e,o.m],styles:[".issuetable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:12px}table.table.table-sm.table-bordered.issuetable[_ngcontent-%COMP%]:first-child   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{background:#2289d5;color:#fff;width:40%}.card-header[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #fff;color:#000;margin-bottom:0;padding:6px!important;text-align:center}.btn-w48[_ngcontent-%COMP%]{width:48%}.msg-user[_ngcontent-%COMP%]{font-size:.8125rem;margin-bottom:6px}.userClass[_ngcontent-%COMP%]{background-color:#ff0158;color:#fff}.salesPersonClass[_ngcontent-%COMP%]{background-color:#5556fd;color:#fff}"]}),e})()}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[i.e.forChild(K)],i.e]}),e})();var V=s("To8U"),B=s("dlKe"),Y=s("xJkR");let $=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[o.c,j,V.a,a.i,a.r,l.c,B.b,Y.b]]}),e})()},Iab2:function(e,t,s){var o,i;void 0===(i="function"==typeof(o=function(){"use strict";function t(e,t,s){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){r(o.response,t,s)},o.onerror=function(){console.error("could not download file")},o.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(s)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,n=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(e,n,r){var a=i.URL||i.webkitURL,c=document.createElement("a");c.download=n=n||e.name||"download",c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):s(c.href)?t(e,n,r):o(c,c.target="_blank")):(c.href=a.createObjectURL(e),setTimeout(function(){a.revokeObjectURL(c.href)},4e4),setTimeout(function(){o(c)},0))}:"msSaveOrOpenBlob"in navigator?function(e,i,n){if(i=i||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,n),i);else if(s(e))t(e,i,n);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout(function(){o(r)})}}:function(e,s,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,s,o);var a="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,b=/CriOS\/[\d]+/.test(navigator.userAgent);if((b||a&&c||n)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=b?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},u.readAsDataURL(e)}else{var l=i.URL||i.webkitURL,d=l.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout(function(){l.revokeObjectURL(d)},4e4)}});i.saveAs=r.saveAs=r,e.exports=r})?o.apply(t,[]):o)||(e.exports=i)}}]);
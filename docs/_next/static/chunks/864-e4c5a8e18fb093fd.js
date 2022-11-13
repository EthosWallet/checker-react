"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{7864:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var isNumeric=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,mathceil=Math.ceil,mathfloor=Math.floor,bignumberError="[BigNumber Error] ",tooManyDigits=bignumberError+"Number primitive has more than 15 significant digits: ",POWS_TEN=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function bitFloor(n){var i=0|n;return n>0||n===i?i:i-1}function coeffToString(a){for(var s,z,i=1,j=a.length,r=a[0]+"";i<j;){for(z=14-(s=a[i++]+"").length;z--;s="0"+s);r+=s}for(j=r.length;48===r.charCodeAt(--j););return r.slice(0,j+1||1)}function compare(x,y){var a,b,xc=x.c,yc=y.c,i=x.s,j=y.s,k=x.e,l=y.e;if(!i||!j)return null;if(a=xc&&!xc[0],b=yc&&!yc[0],a||b)return a?b?0:-j:i;if(i!=j)return i;if(a=i<0,b=k==l,!xc||!yc)return b?0:!xc^a?1:-1;if(!b)return k>l^a?1:-1;for(i=0,j=(k=xc.length)<(l=yc.length)?k:l;i<j;i++)if(xc[i]!=yc[i])return xc[i]>yc[i]^a?1:-1;return k==l?0:k>l^a?1:-1}function intCheck(n,min,max,name){if(n<min||n>max||n!==mathfloor(n))throw Error(bignumberError+(name||"Argument")+("number"==typeof n?n<min||n>max?" out of range: ":" not an integer: ":" not a primitive number: ")+String(n))}function isOdd(n){var k=n.c.length-1;return bitFloor(n.e/14)==k&&n.c[k]%2!=0}function toExponential(str,e){return(str.length>1?str.charAt(0)+"."+str.slice(1):str)+(e<0?"e":"e+")+e}function toFixedPoint(str,e,z){var len,zs;if(e<0){for(zs=z+".";++e;zs+=z);str=zs+str}else if(len=str.length,++e>len){for(zs=z,e-=len;--e;zs+=z);str+=zs}else e<len&&(str=str.slice(0,e)+"."+str.slice(e));return str}var BigNumber=function clone(configObject){var random53bitInt,basePrefix,dotAfter,dotBefore,isInfinityOrNaN,whitespaceOrPlus,div,convertBase,parseNumeric,P=BigNumber.prototype={constructor:BigNumber,toString:null,valueOf:null},ONE=new BigNumber(1),DECIMAL_PLACES=20,ROUNDING_MODE=4,TO_EXP_NEG=-7,TO_EXP_POS=21,MIN_EXP=-1e7,MAX_EXP=1e7,CRYPTO=!1,MODULO_MODE=1,POW_PRECISION=0,FORMAT={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},ALPHABET="0123456789abcdefghijklmnopqrstuvwxyz",alphabetHasNormalDecimalDigits=!0;function BigNumber(v,b){var alphabet,c,caseChanged,e,i,isNum,len,str,x=this;if(!(x instanceof BigNumber))return new BigNumber(v,b);if(null==b){if(v&&!0===v._isBigNumber){x.s=v.s,!v.c||v.e>MAX_EXP?x.c=x.e=null:v.e<MIN_EXP?x.c=[x.e=0]:(x.e=v.e,x.c=v.c.slice());return}if((isNum="number"==typeof v)&&0*v==0){if(x.s=1/v<0?(v=-v,-1):1,v===~~v){for(e=0,i=v;i>=10;i/=10,e++);e>MAX_EXP?x.c=x.e=null:(x.e=e,x.c=[v]);return}str=String(v)}else{if(!isNumeric.test(str=String(v)))return parseNumeric(x,str,isNum);x.s=45==str.charCodeAt(0)?(str=str.slice(1),-1):1}(e=str.indexOf("."))>-1&&(str=str.replace(".","")),(i=str.search(/e/i))>0?(e<0&&(e=i),e+=+str.slice(i+1),str=str.substring(0,i)):e<0&&(e=str.length)}else{if(intCheck(b,2,ALPHABET.length,"Base"),10==b&&alphabetHasNormalDecimalDigits)return round(x=new BigNumber(v),DECIMAL_PLACES+x.e+1,ROUNDING_MODE);if(str=String(v),isNum="number"==typeof v){if(0*v!=0)return parseNumeric(x,str,isNum,b);if(x.s=1/v<0?(str=str.slice(1),-1):1,BigNumber.DEBUG&&str.replace(/^0\.0*|\./,"").length>15)throw Error(tooManyDigits+v)}else x.s=45===str.charCodeAt(0)?(str=str.slice(1),-1):1;for(alphabet=ALPHABET.slice(0,b),e=i=0,len=str.length;i<len;i++)if(0>alphabet.indexOf(c=str.charAt(i))){if("."==c){if(i>e){e=len;continue}}else if(!caseChanged&&(str==str.toUpperCase()&&(str=str.toLowerCase())||str==str.toLowerCase()&&(str=str.toUpperCase()))){caseChanged=!0,i=-1,e=0;continue}return parseNumeric(x,String(v),isNum,b)}isNum=!1,(e=(str=convertBase(str,b,10,x.s)).indexOf("."))>-1?str=str.replace(".",""):e=str.length}for(i=0;48===str.charCodeAt(i);i++);for(len=str.length;48===str.charCodeAt(--len););if(str=str.slice(i,++len)){if(len-=i,isNum&&BigNumber.DEBUG&&len>15&&(v>9007199254740991||v!==mathfloor(v)))throw Error(tooManyDigits+x.s*v);if((e=e-i-1)>MAX_EXP)x.c=x.e=null;else if(e<MIN_EXP)x.c=[x.e=0];else{if(x.e=e,x.c=[],i=(e+1)%14,e<0&&(i+=14),i<len){for(i&&x.c.push(+str.slice(0,i)),len-=14;i<len;)x.c.push(+str.slice(i,i+=14));i=14-(str=str.slice(i)).length}else i-=len;for(;i--;str+="0");x.c.push(+str)}}else x.c=[x.e=0]}function format(n,i,rm,id){var c0,e,ne,len,str;if(null==rm?rm=ROUNDING_MODE:intCheck(rm,0,8),!n.c)return n.toString();if(c0=n.c[0],ne=n.e,null==i)str=coeffToString(n.c),str=1==id||2==id&&(ne<=TO_EXP_NEG||ne>=TO_EXP_POS)?toExponential(str,ne):toFixedPoint(str,ne,"0");else if(e=(n=round(new BigNumber(n),i,rm)).e,len=(str=coeffToString(n.c)).length,1==id||2==id&&(i<=e||e<=TO_EXP_NEG)){for(;len<i;str+="0",len++);str=toExponential(str,e)}else if(i-=ne,str=toFixedPoint(str,e,"0"),e+1>len){if(--i>0)for(str+=".";i--;str+="0");}else if((i+=e-len)>0)for(e+1==len&&(str+=".");i--;str+="0");return n.s<0&&c0?"-"+str:str}function maxOrMin(args,method){for(var n,i=1,m=new BigNumber(args[0]);i<args.length;i++)if((n=new BigNumber(args[i])).s)method.call(m,n)&&(m=n);else{m=n;break}return m}function normalise(n,c,e){for(var i=1,j=c.length;!c[--j];c.pop());for(j=c[0];j>=10;j/=10,i++);return(e=i+14*e-1)>MAX_EXP?n.c=n.e=null:e<MIN_EXP?n.c=[n.e=0]:(n.e=e,n.c=c),n}function round(x,sd,rm,r){var d,i,j,k,n,ni,rd,xc=x.c;if(xc){out:{for(d=1,k=xc[0];k>=10;k/=10,d++);if((i=sd-d)<0)i+=14,j=sd,rd=(n=xc[ni=0])/POWS_TEN[d-j-1]%10|0;else if((ni=mathceil((i+1)/14))>=xc.length){if(r){for(;xc.length<=ni;xc.push(0));n=rd=0,d=1,i%=14,j=i-14+1}else break out}else{for(d=1,n=k=xc[ni];k>=10;k/=10,d++);i%=14,rd=(j=i-14+d)<0?0:n/POWS_TEN[d-j-1]%10|0}if(r=r||sd<0||null!=xc[ni+1]||(j<0?n:n%POWS_TEN[d-j-1]),r=rm<4?(rd||r)&&(0==rm||rm==(x.s<0?3:2)):rd>5||5==rd&&(4==rm||r||6==rm&&(i>0?j>0?n/POWS_TEN[d-j]:0:xc[ni-1])%10&1||rm==(x.s<0?8:7)),sd<1||!xc[0])return xc.length=0,r?(sd-=x.e+1,xc[0]=POWS_TEN[(14-sd%14)%14],x.e=-sd||0):xc[0]=x.e=0,x;if(0==i?(xc.length=ni,k=1,ni--):(xc.length=ni+1,k=POWS_TEN[14-i],xc[ni]=j>0?mathfloor(n/POWS_TEN[d-j]%POWS_TEN[j])*k:0),r)for(;;){if(0==ni){for(i=1,j=xc[0];j>=10;j/=10,i++);for(j=xc[0]+=k,k=1;j>=10;j/=10,k++);i!=k&&(x.e++,1e14==xc[0]&&(xc[0]=1));break}if(xc[ni]+=k,1e14!=xc[ni])break;xc[ni--]=0,k=1}for(i=xc.length;0===xc[--i];xc.pop());}x.e>MAX_EXP?x.c=x.e=null:x.e<MIN_EXP&&(x.c=[x.e=0])}return x}function valueOf(n){var str,e=n.e;return null===e?n.toString():(str=coeffToString(n.c),str=e<=TO_EXP_NEG||e>=TO_EXP_POS?toExponential(str,e):toFixedPoint(str,e,"0"),n.s<0?"-"+str:str)}return BigNumber.clone=clone,BigNumber.ROUND_UP=0,BigNumber.ROUND_DOWN=1,BigNumber.ROUND_CEIL=2,BigNumber.ROUND_FLOOR=3,BigNumber.ROUND_HALF_UP=4,BigNumber.ROUND_HALF_DOWN=5,BigNumber.ROUND_HALF_EVEN=6,BigNumber.ROUND_HALF_CEIL=7,BigNumber.ROUND_HALF_FLOOR=8,BigNumber.EUCLID=9,BigNumber.config=BigNumber.set=function(obj){var p,v;if(null!=obj){if("object"==typeof obj){if(obj.hasOwnProperty(p="DECIMAL_PLACES")&&(intCheck(v=obj[p],0,1e9,p),DECIMAL_PLACES=v),obj.hasOwnProperty(p="ROUNDING_MODE")&&(intCheck(v=obj[p],0,8,p),ROUNDING_MODE=v),obj.hasOwnProperty(p="EXPONENTIAL_AT")&&((v=obj[p])&&v.pop?(intCheck(v[0],-1e9,0,p),intCheck(v[1],0,1e9,p),TO_EXP_NEG=v[0],TO_EXP_POS=v[1]):(intCheck(v,-1e9,1e9,p),TO_EXP_NEG=-(TO_EXP_POS=v<0?-v:v))),obj.hasOwnProperty(p="RANGE")){if((v=obj[p])&&v.pop)intCheck(v[0],-1e9,-1,p),intCheck(v[1],1,1e9,p),MIN_EXP=v[0],MAX_EXP=v[1];else if(intCheck(v,-1e9,1e9,p),v)MIN_EXP=-(MAX_EXP=v<0?-v:v);else throw Error(bignumberError+p+" cannot be zero: "+v)}if(obj.hasOwnProperty(p="CRYPTO")){if(!!(v=obj[p])===v){if(v){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))CRYPTO=v;else throw CRYPTO=!v,Error(bignumberError+"crypto unavailable")}else CRYPTO=v}else throw Error(bignumberError+p+" not true or false: "+v)}if(obj.hasOwnProperty(p="MODULO_MODE")&&(intCheck(v=obj[p],0,9,p),MODULO_MODE=v),obj.hasOwnProperty(p="POW_PRECISION")&&(intCheck(v=obj[p],0,1e9,p),POW_PRECISION=v),obj.hasOwnProperty(p="FORMAT")){if("object"==typeof(v=obj[p]))FORMAT=v;else throw Error(bignumberError+p+" not an object: "+v)}if(obj.hasOwnProperty(p="ALPHABET")){if("string"!=typeof(v=obj[p])||/^.?$|[+\-.\s]|(.).*\1/.test(v))throw Error(bignumberError+p+" invalid: "+v);alphabetHasNormalDecimalDigits="0123456789"==v.slice(0,10),ALPHABET=v}}else throw Error(bignumberError+"Object expected: "+obj)}return{DECIMAL_PLACES:DECIMAL_PLACES,ROUNDING_MODE:ROUNDING_MODE,EXPONENTIAL_AT:[TO_EXP_NEG,TO_EXP_POS],RANGE:[MIN_EXP,MAX_EXP],CRYPTO:CRYPTO,MODULO_MODE:MODULO_MODE,POW_PRECISION:POW_PRECISION,FORMAT:FORMAT,ALPHABET:ALPHABET}},BigNumber.isBigNumber=function(v){if(!v||!0!==v._isBigNumber)return!1;if(!BigNumber.DEBUG)return!0;var i,n,c=v.c,e=v.e,s=v.s;out:if("[object Array]"==({}).toString.call(c)){if((1===s||-1===s)&&e>=-1e9&&e<=1e9&&e===mathfloor(e)){if(0===c[0]){if(0===e&&1===c.length)return!0;break out}if((i=(e+1)%14)<1&&(i+=14),String(c[0]).length==i){for(i=0;i<c.length;i++)if((n=c[i])<0||n>=1e14||n!==mathfloor(n))break out;if(0!==n)return!0}}}else if(null===c&&null===e&&(null===s||1===s||-1===s))return!0;throw Error(bignumberError+"Invalid BigNumber: "+v)},BigNumber.maximum=BigNumber.max=function(){return maxOrMin(arguments,P.lt)},BigNumber.minimum=BigNumber.min=function(){return maxOrMin(arguments,P.gt)},BigNumber.random=(random53bitInt=9007199254740992*Math.random()&2097151?function(){return mathfloor(9007199254740992*Math.random())}:function(){return(1073741824*Math.random()|0)*8388608+(8388608*Math.random()|0)},function(dp){var a,b,e,k,v,i=0,c=[],rand=new BigNumber(ONE);if(null==dp?dp=DECIMAL_PLACES:intCheck(dp,0,1e9),k=mathceil(dp/14),CRYPTO){if(crypto.getRandomValues){for(a=crypto.getRandomValues(new Uint32Array(k*=2));i<k;)(v=131072*a[i]+(a[i+1]>>>11))>=9e15?(b=crypto.getRandomValues(new Uint32Array(2)),a[i]=b[0],a[i+1]=b[1]):(c.push(v%1e14),i+=2);i=k/2}else if(crypto.randomBytes){for(a=crypto.randomBytes(k*=7);i<k;)(v=(31&a[i])*281474976710656+1099511627776*a[i+1]+4294967296*a[i+2]+16777216*a[i+3]+(a[i+4]<<16)+(a[i+5]<<8)+a[i+6])>=9e15?crypto.randomBytes(7).copy(a,i):(c.push(v%1e14),i+=7);i=k/7}else throw CRYPTO=!1,Error(bignumberError+"crypto unavailable")}if(!CRYPTO)for(;i<k;)(v=random53bitInt())<9e15&&(c[i++]=v%1e14);for(k=c[--i],dp%=14,k&&dp&&(v=POWS_TEN[14-dp],c[i]=mathfloor(k/v)*v);0===c[i];c.pop(),i--);if(i<0)c=[e=0];else{for(e=-1;0===c[0];c.splice(0,1),e-=14);for(i=1,v=c[0];v>=10;v/=10,i++);i<14&&(e-=14-i)}return rand.e=e,rand.c=c,rand}),BigNumber.sum=function(){for(var i=1,args=arguments,sum=new BigNumber(args[0]);i<args.length;)sum=sum.plus(args[i++]);return sum},convertBase=function(){var decimal="0123456789";function toBaseOut(str,baseIn,baseOut,alphabet){for(var j,arrL,arr=[0],i=0,len=str.length;i<len;){for(arrL=arr.length;arrL--;arr[arrL]*=baseIn);for(arr[0]+=alphabet.indexOf(str.charAt(i++)),j=0;j<arr.length;j++)arr[j]>baseOut-1&&(null==arr[j+1]&&(arr[j+1]=0),arr[j+1]+=arr[j]/baseOut|0,arr[j]%=baseOut)}return arr.reverse()}return function(str,baseIn,baseOut,sign,callerIsToString){var alphabet,d,e,k,r,x,xc,y,i=str.indexOf("."),dp=DECIMAL_PLACES,rm=ROUNDING_MODE;for(i>=0&&(k=POW_PRECISION,POW_PRECISION=0,str=str.replace(".",""),x=(y=new BigNumber(baseIn)).pow(str.length-i),POW_PRECISION=k,y.c=toBaseOut(toFixedPoint(coeffToString(x.c),x.e,"0"),10,baseOut,decimal),y.e=y.c.length),e=k=(xc=toBaseOut(str,baseIn,baseOut,callerIsToString?(alphabet=ALPHABET,decimal):(alphabet=decimal,ALPHABET))).length;0==xc[--k];xc.pop());if(!xc[0])return alphabet.charAt(0);if(i<0?--e:(x.c=xc,x.e=e,x.s=sign,xc=(x=div(x,y,dp,rm,baseOut)).c,r=x.r,e=x.e),i=xc[d=e+dp+1],k=baseOut/2,r=r||d<0||null!=xc[d+1],r=rm<4?(null!=i||r)&&(0==rm||rm==(x.s<0?3:2)):i>k||i==k&&(4==rm||r||6==rm&&1&xc[d-1]||rm==(x.s<0?8:7)),d<1||!xc[0])str=r?toFixedPoint(alphabet.charAt(1),-dp,alphabet.charAt(0)):alphabet.charAt(0);else{if(xc.length=d,r)for(--baseOut;++xc[--d]>baseOut;)xc[d]=0,d||(++e,xc=[1].concat(xc));for(k=xc.length;!xc[--k];);for(i=0,str="";i<=k;str+=alphabet.charAt(xc[i++]));str=toFixedPoint(str,e,alphabet.charAt(0))}return str}}(),div=function(){function multiply(x,k,base){var m,temp,xlo,xhi,carry=0,i=x.length,klo=k%1e7,khi=k/1e7|0;for(x=x.slice();i--;)m=khi*(xlo=x[i]%1e7)+(xhi=x[i]/1e7|0)*klo,carry=((temp=klo*xlo+m%1e7*1e7+carry)/base|0)+(m/1e7|0)+khi*xhi,x[i]=temp%base;return carry&&(x=[carry].concat(x)),x}function compare(a,b,aL,bL){var i,cmp;if(aL!=bL)cmp=aL>bL?1:-1;else for(i=cmp=0;i<aL;i++)if(a[i]!=b[i]){cmp=a[i]>b[i]?1:-1;break}return cmp}function subtract(a,b,aL,base){for(var i=0;aL--;)a[aL]-=i,i=a[aL]<b[aL]?1:0,a[aL]=i*base+a[aL]-b[aL];for(;!a[0]&&a.length>1;a.splice(0,1));}return function(x,y,dp,rm,base){var cmp,e,i,more,n,prod,prodL,q,qc,rem,remL,rem0,xi,xL,yc0,yL,yz,s=x.s==y.s?1:-1,xc=x.c,yc=y.c;if(!xc||!xc[0]||!yc||!yc[0])return new BigNumber(x.s&&y.s&&(xc?!yc||xc[0]!=yc[0]:yc)?xc&&0==xc[0]||!yc?0*s:s/0:NaN);for(qc=(q=new BigNumber(s)).c=[],s=dp+(e=x.e-y.e)+1,base||(base=1e14,e=bitFloor(x.e/14)-bitFloor(y.e/14),s=s/14|0),i=0;yc[i]==(xc[i]||0);i++);if(yc[i]>(xc[i]||0)&&e--,s<0)qc.push(1),more=!0;else{for(xL=xc.length,yL=yc.length,i=0,s+=2,(n=mathfloor(base/(yc[0]+1)))>1&&(yc=multiply(yc,n,base),xc=multiply(xc,n,base),yL=yc.length,xL=xc.length),xi=yL,remL=(rem=xc.slice(0,yL)).length;remL<yL;rem[remL++]=0);yz=[0].concat(yz=yc.slice()),yc0=yc[0],yc[1]>=base/2&&yc0++;do{if(n=0,(cmp=compare(yc,rem,yL,remL))<0){if(rem0=rem[0],yL!=remL&&(rem0=rem0*base+(rem[1]||0)),(n=mathfloor(rem0/yc0))>1)for(n>=base&&(n=base-1),prodL=(prod=multiply(yc,n,base)).length,remL=rem.length;1==compare(prod,rem,prodL,remL);)n--,subtract(prod,yL<prodL?yz:yc,prodL,base),prodL=prod.length,cmp=1;else 0==n&&(cmp=n=1),prodL=(prod=yc.slice()).length;if(prodL<remL&&(prod=[0].concat(prod)),subtract(rem,prod,remL,base),remL=rem.length,-1==cmp)for(;1>compare(yc,rem,yL,remL);)n++,subtract(rem,yL<remL?yz:yc,remL,base),remL=rem.length}else 0===cmp&&(n++,rem=[0]);qc[i++]=n,rem[0]?rem[remL++]=xc[xi]||0:(rem=[xc[xi]],remL=1)}while((xi++<xL||null!=rem[0])&&s--);more=null!=rem[0],qc[0]||qc.splice(0,1)}if(1e14==base){for(i=1,s=qc[0];s>=10;s/=10,i++);round(q,dp+(q.e=i+14*e-1)+1,rm,more)}else q.e=e,q.r=+more;return q}}(),basePrefix=/^(-?)0([xbo])(?=\w[\w.]*$)/i,dotAfter=/^([^.]+)\.$/,dotBefore=/^\.([^.]+)$/,isInfinityOrNaN=/^-?(Infinity|NaN)$/,whitespaceOrPlus=/^\s*\+(?=[\w.])|^\s+|\s+$/g,parseNumeric=function(x,str,isNum,b){var base,s=isNum?str:str.replace(whitespaceOrPlus,"");if(isInfinityOrNaN.test(s))x.s=isNaN(s)?null:s<0?-1:1;else{if(!isNum&&(s=s.replace(basePrefix,function(m,p1,p2){return base="x"==(p2=p2.toLowerCase())?16:"b"==p2?2:8,b&&b!=base?m:p1}),b&&(base=b,s=s.replace(dotAfter,"$1").replace(dotBefore,"0.$1")),str!=s))return new BigNumber(s,base);if(BigNumber.DEBUG)throw Error(bignumberError+"Not a"+(b?" base "+b:"")+" number: "+str);x.s=null}x.c=x.e=null},P.absoluteValue=P.abs=function(){var x=new BigNumber(this);return x.s<0&&(x.s=1),x},P.comparedTo=function(y,b){return compare(this,new BigNumber(y,b))},P.decimalPlaces=P.dp=function(dp,rm){var c,n,v;if(null!=dp)return intCheck(dp,0,1e9),null==rm?rm=ROUNDING_MODE:intCheck(rm,0,8),round(new BigNumber(this),dp+this.e+1,rm);if(!(c=this.c))return null;if(n=((v=c.length-1)-bitFloor(this.e/14))*14,v=c[v])for(;v%10==0;v/=10,n--);return n<0&&(n=0),n},P.dividedBy=P.div=function(y,b){return div(this,new BigNumber(y,b),DECIMAL_PLACES,ROUNDING_MODE)},P.dividedToIntegerBy=P.idiv=function(y,b){return div(this,new BigNumber(y,b),0,1)},P.exponentiatedBy=P.pow=function(n,m){var half,isModExp,i,k,more,nIsBig,nIsNeg,nIsOdd,y,x=this;if((n=new BigNumber(n)).c&&!n.isInteger())throw Error(bignumberError+"Exponent not an integer: "+valueOf(n));if(null!=m&&(m=new BigNumber(m)),nIsBig=n.e>14,!x.c||!x.c[0]||1==x.c[0]&&!x.e&&1==x.c.length||!n.c||!n.c[0])return y=new BigNumber(Math.pow(+valueOf(x),nIsBig?2-isOdd(n):+valueOf(n))),m?y.mod(m):y;if(nIsNeg=n.s<0,m){if(m.c?!m.c[0]:!m.s)return new BigNumber(NaN);(isModExp=!nIsNeg&&x.isInteger()&&m.isInteger())&&(x=x.mod(m))}else{if(n.e>9&&(x.e>0||x.e<-1||(0==x.e?x.c[0]>1||nIsBig&&x.c[1]>=24e7:x.c[0]<8e13||nIsBig&&x.c[0]<=9999975e7)))return x.s<0&&isOdd(n),k=-0,x.e>-1&&(k=1/k),new BigNumber(nIsNeg?1/k:k);POW_PRECISION&&(k=mathceil(POW_PRECISION/14+2))}for(nIsBig?(half=new BigNumber(.5),nIsNeg&&(n.s=1),nIsOdd=isOdd(n)):nIsOdd=(i=Math.abs(+valueOf(n)))%2,y=new BigNumber(ONE);;){if(nIsOdd){if(!(y=y.times(x)).c)break;k?y.c.length>k&&(y.c.length=k):isModExp&&(y=y.mod(m))}if(i){if(0===(i=mathfloor(i/2)))break;nIsOdd=i%2}else if(round(n=n.times(half),n.e+1,1),n.e>14)nIsOdd=isOdd(n);else{if(0==(i=+valueOf(n)))break;nIsOdd=i%2}x=x.times(x),k?x.c&&x.c.length>k&&(x.c.length=k):isModExp&&(x=x.mod(m))}return isModExp?y:(nIsNeg&&(y=ONE.div(y)),m?y.mod(m):k?round(y,POW_PRECISION,ROUNDING_MODE,more):y)},P.integerValue=function(rm){var n=new BigNumber(this);return null==rm?rm=ROUNDING_MODE:intCheck(rm,0,8),round(n,n.e+1,rm)},P.isEqualTo=P.eq=function(y,b){return 0===compare(this,new BigNumber(y,b))},P.isFinite=function(){return!!this.c},P.isGreaterThan=P.gt=function(y,b){return compare(this,new BigNumber(y,b))>0},P.isGreaterThanOrEqualTo=P.gte=function(y,b){return 1===(b=compare(this,new BigNumber(y,b)))||0===b},P.isInteger=function(){return!!this.c&&bitFloor(this.e/14)>this.c.length-2},P.isLessThan=P.lt=function(y,b){return 0>compare(this,new BigNumber(y,b))},P.isLessThanOrEqualTo=P.lte=function(y,b){return -1===(b=compare(this,new BigNumber(y,b)))||0===b},P.isNaN=function(){return!this.s},P.isNegative=function(){return this.s<0},P.isPositive=function(){return this.s>0},P.isZero=function(){return!!this.c&&0==this.c[0]},P.minus=function(y,b){var i,j,t,xLTy,a=this.s;if(b=(y=new BigNumber(y,b)).s,!a||!b)return new BigNumber(NaN);if(a!=b)return y.s=-b,this.plus(y);var xe=this.e/14,ye=y.e/14,xc=this.c,yc=y.c;if(!xe||!ye){if(!xc||!yc)return xc?(y.s=-b,y):new BigNumber(yc?this:NaN);if(!xc[0]||!yc[0])return yc[0]?(y.s=-b,y):new BigNumber(xc[0]?this:-0)}if(xe=bitFloor(xe),ye=bitFloor(ye),xc=xc.slice(),a=xe-ye){for((xLTy=a<0)?(a=-a,t=xc):(ye=xe,t=yc),t.reverse(),b=a;b--;t.push(0));t.reverse()}else for(j=(xLTy=(a=xc.length)<(b=yc.length))?a:b,a=b=0;b<j;b++)if(xc[b]!=yc[b]){xLTy=xc[b]<yc[b];break}if(xLTy&&(t=xc,xc=yc,yc=t,y.s=-y.s),(b=(j=yc.length)-(i=xc.length))>0)for(;b--;xc[i++]=0);for(b=1e14-1;j>a;){if(xc[--j]<yc[j]){for(i=j;i&&!xc[--i];xc[i]=b);--xc[i],xc[j]+=1e14}xc[j]-=yc[j]}for(;0==xc[0];xc.splice(0,1),--ye);return xc[0]?normalise(y,xc,ye):(y.s=3==ROUNDING_MODE?-1:1,y.c=[y.e=0],y)},P.modulo=P.mod=function(y,b){var q,s;return(y=new BigNumber(y,b),this.c&&y.s&&(!y.c||y.c[0]))?y.c&&(!this.c||this.c[0])?(9==MODULO_MODE?(s=y.s,y.s=1,q=div(this,y,0,3),y.s=s,q.s*=s):q=div(this,y,0,MODULO_MODE),(y=this.minus(q.times(y))).c[0]||1!=MODULO_MODE||(y.s=this.s),y):new BigNumber(this):new BigNumber(NaN)},P.multipliedBy=P.times=function(y,b){var c,e,i,j,k,m,xcL,xlo,xhi,ycL,ylo,yhi,zc,xc=this.c,yc=(y=new BigNumber(y,b)).c;if(!xc||!yc||!xc[0]||!yc[0])return this.s&&y.s&&(!xc||xc[0]||yc)&&(!yc||yc[0]||xc)?(y.s*=this.s,xc&&yc?(y.c=[0],y.e=0):y.c=y.e=null):y.c=y.e=y.s=null,y;for(e=bitFloor(this.e/14)+bitFloor(y.e/14),y.s*=this.s,(xcL=xc.length)<(ycL=yc.length)&&(zc=xc,xc=yc,yc=zc,i=xcL,xcL=ycL,ycL=i),i=xcL+ycL,zc=[];i--;zc.push(0));for(i=ycL;--i>=0;){for(c=0,ylo=yc[i]%1e7,yhi=yc[i]/1e7|0,k=xcL,j=i+k;j>i;)m=yhi*(xlo=xc[--k]%1e7)+(xhi=xc[k]/1e7|0)*ylo,c=((xlo=ylo*xlo+m%1e7*1e7+zc[j]+c)/1e14|0)+(m/1e7|0)+yhi*xhi,zc[j--]=xlo%1e14;zc[j]=c}return c?++e:zc.splice(0,1),normalise(y,zc,e)},P.negated=function(){var x=new BigNumber(this);return x.s=-x.s||null,x},P.plus=function(y,b){var t,a=this.s;if(b=(y=new BigNumber(y,b)).s,!a||!b)return new BigNumber(NaN);if(a!=b)return y.s=-b,this.minus(y);var xe=this.e/14,ye=y.e/14,xc=this.c,yc=y.c;if(!xe||!ye){if(!xc||!yc)return new BigNumber(a/0);if(!xc[0]||!yc[0])return yc[0]?y:new BigNumber(xc[0]?this:0*a)}if(xe=bitFloor(xe),ye=bitFloor(ye),xc=xc.slice(),a=xe-ye){for(a>0?(ye=xe,t=yc):(a=-a,t=xc),t.reverse();a--;t.push(0));t.reverse()}for((a=xc.length)-(b=yc.length)<0&&(t=yc,yc=xc,xc=t,b=a),a=0;b;)a=(xc[--b]=xc[b]+yc[b]+a)/1e14|0,xc[b]=1e14===xc[b]?0:xc[b]%1e14;return a&&(xc=[a].concat(xc),++ye),normalise(y,xc,ye)},P.precision=P.sd=function(sd,rm){var c,n,v;if(null!=sd&&!!sd!==sd)return intCheck(sd,1,1e9),null==rm?rm=ROUNDING_MODE:intCheck(rm,0,8),round(new BigNumber(this),sd,rm);if(!(c=this.c))return null;if(n=14*(v=c.length-1)+1,v=c[v]){for(;v%10==0;v/=10,n--);for(v=c[0];v>=10;v/=10,n++);}return sd&&this.e+1>n&&(n=this.e+1),n},P.shiftedBy=function(k){return intCheck(k,-9007199254740991,9007199254740991),this.times("1e"+k)},P.squareRoot=P.sqrt=function(){var m,n,r,rep,t,c=this.c,s=this.s,e=this.e,dp=DECIMAL_PLACES+4,half=new BigNumber("0.5");if(1!==s||!c||!c[0])return new BigNumber(!s||s<0&&(!c||c[0])?NaN:c?this:1/0);if(0==(s=Math.sqrt(+valueOf(this)))||s==1/0?(((n=coeffToString(c)).length+e)%2==0&&(n+="0"),s=Math.sqrt(+n),e=bitFloor((e+1)/2)-(e<0||e%2),n=s==1/0?"5e"+e:(n=s.toExponential()).slice(0,n.indexOf("e")+1)+e,r=new BigNumber(n)):r=new BigNumber(s+""),r.c[0]){for((s=(e=r.e)+dp)<3&&(s=0);;)if(t=r,r=half.times(t.plus(div(this,t,dp,1))),coeffToString(t.c).slice(0,s)===(n=coeffToString(r.c)).slice(0,s)){if(r.e<e&&--s,"9999"!=(n=n.slice(s-3,s+1))&&(rep||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(round(r,r.e+DECIMAL_PLACES+2,1),m=!r.times(r).eq(this));break}if(!rep&&(round(t,t.e+DECIMAL_PLACES+2,0),t.times(t).eq(this))){r=t;break}dp+=4,s+=4,rep=1}}return round(r,r.e+DECIMAL_PLACES+1,ROUNDING_MODE,m)},P.toExponential=function(dp,rm){return null!=dp&&(intCheck(dp,0,1e9),dp++),format(this,dp,rm,1)},P.toFixed=function(dp,rm){return null!=dp&&(intCheck(dp,0,1e9),dp=dp+this.e+1),format(this,dp,rm)},P.toFormat=function(dp,rm,format){var str;if(null==format)null!=dp&&rm&&"object"==typeof rm?(format=rm,rm=null):dp&&"object"==typeof dp?(format=dp,dp=rm=null):format=FORMAT;else if("object"!=typeof format)throw Error(bignumberError+"Argument not an object: "+format);if(str=this.toFixed(dp,rm),this.c){var i,arr=str.split("."),g1=+format.groupSize,g2=+format.secondaryGroupSize,groupSeparator=format.groupSeparator||"",intPart=arr[0],fractionPart=arr[1],isNeg=this.s<0,intDigits=isNeg?intPart.slice(1):intPart,len=intDigits.length;if(g2&&(i=g1,g1=g2,g2=i,len-=i),g1>0&&len>0){for(i=len%g1||g1,intPart=intDigits.substr(0,i);i<len;i+=g1)intPart+=groupSeparator+intDigits.substr(i,g1);g2>0&&(intPart+=groupSeparator+intDigits.slice(i)),isNeg&&(intPart="-"+intPart)}str=fractionPart?intPart+(format.decimalSeparator||"")+((g2=+format.fractionGroupSize)?fractionPart.replace(RegExp("\\d{"+g2+"}\\B","g"),"$&"+(format.fractionGroupSeparator||"")):fractionPart):intPart}return(format.prefix||"")+str+(format.suffix||"")},P.toFraction=function(md){var d,d0,d1,d2,e,exp,n,n0,n1,q,r,s,xc=this.c;if(null!=md&&(!(n=new BigNumber(md)).isInteger()&&(n.c||1!==n.s)||n.lt(ONE)))throw Error(bignumberError+"Argument "+(n.isInteger()?"out of range: ":"not an integer: ")+valueOf(n));if(!xc)return new BigNumber(this);for(d=new BigNumber(ONE),n1=d0=new BigNumber(ONE),d1=n0=new BigNumber(ONE),s=coeffToString(xc),e=d.e=s.length-this.e-1,d.c[0]=POWS_TEN[(exp=e%14)<0?14+exp:exp],md=!md||n.comparedTo(d)>0?e>0?d:n1:n,exp=MAX_EXP,MAX_EXP=1/0,n=new BigNumber(s),n0.c[0]=0;q=div(n,d,0,1),1!=(d2=d0.plus(q.times(d1))).comparedTo(md);)d0=d1,d1=d2,n1=n0.plus(q.times(d2=n1)),n0=d2,d=n.minus(q.times(d2=d)),n=d2;return d2=div(md.minus(d0),d1,0,1),n0=n0.plus(d2.times(n1)),d0=d0.plus(d2.times(d1)),n0.s=n1.s=this.s,e*=2,r=1>div(n1,d1,e,ROUNDING_MODE).minus(this).abs().comparedTo(div(n0,d0,e,ROUNDING_MODE).minus(this).abs())?[n1,d1]:[n0,d0],MAX_EXP=exp,r},P.toNumber=function(){return+valueOf(this)},P.toPrecision=function(sd,rm){return null!=sd&&intCheck(sd,1,1e9),format(this,sd,rm,2)},P.toString=function(b){var str,n=this,s=n.s,e=n.e;return null===e?s?(str="Infinity",s<0&&(str="-"+str)):str="NaN":(null==b?str=e<=TO_EXP_NEG||e>=TO_EXP_POS?toExponential(coeffToString(n.c),e):toFixedPoint(coeffToString(n.c),e,"0"):10===b&&alphabetHasNormalDecimalDigits?str=toFixedPoint(coeffToString((n=round(new BigNumber(n),DECIMAL_PLACES+e+1,ROUNDING_MODE)).c),n.e,"0"):(intCheck(b,2,ALPHABET.length,"Base"),str=convertBase(toFixedPoint(coeffToString(n.c),e,"0"),10,b,s,!0)),s<0&&n.c[0]&&(str="-"+str)),str},P.valueOf=P.toJSON=function(){return valueOf(this)},P._isBigNumber=!0,P[Symbol.toStringTag]="BigNumber",P[Symbol.for("nodejs.util.inspect.custom")]=P.valueOf,null!=configObject&&BigNumber.set(configObject),BigNumber}();__webpack_exports__.Z=BigNumber}}]);
 var textoOriginal = document.getElementById("input") ;
 var meuclickcrip = document.getElementById("criptografa");
 var meuclickdescrip = document.getElementById("descriptografa");
 var textoConvertido = document.getElementById("txtstart") ;
 var copyTexto = document.getElementById("copytx");
 var textoFinal;
 var trocada1;
 var trocada2;  

 function capturarTexto (){

 }

 function converterTexto(){
         var myFrase = textoOriginal.value;              
         trocada1 = myFrase.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
         textoFinal = trocada1;         
         
         document.getElementById('txtstart').value= trocada1;
         
 }     
 
 function cripParaTexto(){
         var myFrase = textoOriginal.value;              
         trocada2 = myFrase.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
         textoFinal = trocada2;          
         console.log(textoFinal);
         document.getElementById('txtstart').value= trocada2;
         
 }  

 
 
 function copiarTexto() {
         let textoCopiado = document.getElementById("txtstart");
         textoCopiado.select();
         textoCopiado.setSelectionRange(0, 99999)
         document.execCommand("copy");
         
 }

 //texte//
 
 meuclickcrip.onclick = function(){                
         
         converterTexto();  

 }
 
 meuclickdescrip.onclick = function(){                
         
         cripParaTexto();
   
 }

 copyTexto.onclick = function(){                
         
         execCopy();

 }
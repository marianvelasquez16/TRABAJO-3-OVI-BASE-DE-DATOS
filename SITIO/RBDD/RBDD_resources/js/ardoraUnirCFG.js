//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#1C1CFF"; colorText="#676767"; colorSele="#FF9428";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime=""; messageError="VUELVE A INTENTARLO"; messageErrorG="VUELVE A INTENTARLO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UkJERA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["QmFzZSBkZSBEYXRvcw", "RXMgdW4gY29uanVudG8gZGUgZGF0b3MgcGVydGVuZWNpZW50ZXMgYSB1biBtaXNtbyBjb250ZXh0byB5IGFsbWFjZW5hZG9zIHNpc3RlbeF0aWNhbWVudGUgcGFyYSBzdSBwb3N0ZXJpb3IgdXNv"]];
var c=[[13,111]];
var con1=["Base de Datos"];
var con2=["Es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso","Es una herramienta cliente/servidor para la gestión de base de datos de gran potencia, es una de las mayores compañías de software del mundo","Es uno de los populares Sistema de Gestión de Base de Datos Relacional. Es principalmente conveniente para la creación de aplicaciones de almacenamiento de datos a gran escala.","Es una representación simbólica de un atributo o variable cuantitativa o cualitativa.","Es un sistema de gestión de base de datos relacional o SGBD. Este gestor de base de datos en multihilo y multiusuario, lo que le permite ser utilizado por varias personas al mismo tiempo.","Es un sistema de base de datos de Microsoft que está diseñado para el entorno empresarial, se utiliza en el procesamiento de transacciones en línea a gran escala."];
var sel1=""; join1=[]; join2=[];

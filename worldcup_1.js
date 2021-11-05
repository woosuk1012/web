


var already=[];
var chang=[];
var nextlevel=[];
var nFail=[];

// 메인
// 동물랜덤 선택
//randompick();

// 클릭시 넥스트 레벨 설정
function clickevent (n){


    nextlevel.push('challenger'+chang[n]);

    var round = document.getElementById('round');
        round.innerHTML = challenger.length + "강 진행....(" + (nextlevel.length+1) + "/" +( challenger.length/2) +")" ;

/*var list_succes = document.getElementById('list_succes');
    list_succes.innerHTML = "";
var winn_ani ="";
var list_ani ="";

 for(var i=0; i <nextlevel.length; i++){
    winn_ani = nextlevel[i];
//    list_succes.innerHTML +=  eval(winn_ani.toString())[0];
//list_succes.innerHTML +=  ", ";
    list_ani +=  eval(winn_ani.toString())[0];
    list_ani +=  ", ";

 }
  list_ani = list_ani.substring(0,list_ani.length-2);
  list_succes.innerHTML = list_ani;*/








  chang=[];
  start();
}

// 랜덤 선택
function randompick (){

  var round = document.getElementById('round');
      round.innerHTML = challenger.length + "강 진행(" + (nextlevel.length+1) + "/" +( challenger.length/2) +")" ;
      //document.getElementById("startid").style.display="none";
      document.getElementById("restartid").style.display="grid";
      document.getElementById("tableid").style.display="grid";


  do{
      var random= Math.floor(Math.random()*16)+1;
      // 랜덤값 기존값에 존재여부 체크
      if(challenger.includes("challenger"+random))
      {
        if(already.includes(random))  {
            continue;
        }
        else {
          chang.push(random);
          already.push(random);
        }
    }
    else {
      continue;
    }
  }while(chang.length<2);
  imgClick();
}

function imgClick(){

//  document.querySelector(".img").style.width="50%";

//  document.write('<img class="img" src="challenger'+chang[0]+'.jpg" onclick=clickevent(0)>');
//  document.write('<img class="img" src="challenger'+chang[1]+'.jpg" onclick=clickevent(1)>');

var left_file = document.getElementById('left_file');
var desc= 'challenger'+chang[0];

left_file.innerHTML='<img class="img" src="'+eval(desc.toString())[1]+'"  onclick=clickevent(0) style="cursor:pointer"><br>';
left_file.innerHTML += eval(desc.toString())[0];

//alert(challenger16[0]);
var right_file = document.getElementById('right_file');
    var desc= 'challenger'+chang[1];
    right_file.innerHTML='<img class="img" src="'+eval(desc.toString())[1]+'"  onclick=clickevent(1) style="cursor:pointer"><br>';

right_file.innerHTML+=eval(desc.toString())[0];

//    console.log('<img class="img" src="challenger'+chang[0]+'.jpg" width=100% onclick=clickevent(0)>');
//    console.log('<img class="img" src="challenger'+chang[1]+'.jpg" width=100% onclick=clickevent(1)>');



//document.getElementsByName('right_file').innerHTML ="<div style='color:red'>A</div>";






}
// 클릭시 조회 구분 체크
function start (){
  // 결과 조회인지 재챌린져 조회 여부 체크
  if(nextlevel.length==challenger.length/2)
  {
//        console.log('-----------------');
//        console.log(challenger[0]);
//        console.log('-----------------');
    if(challenger.length==2){

      document.getElementById("round").style.display="none";
      document.getElementById("left_file").style.display="none";
      document.getElementById("right_file").style.display="none";

      document.getElementById("result_display1").style.display="";
      document.getElementById("result_display2").style.display="";

      var fin_result = document.getElementById('fin_result');
      //var desc = eval(nextlevel.toString())[1];
          fin_result.innerHTML='<img class="img" src="'+eval(nextlevel.toString())[1]+'" width=100%><br>';
        //  var desc= nextlevel;
        //  fin_result.innerHTML+=eval(desc.toString())[0];
        /*var right_file = document.getElementById('right_file');
            var desc= 'challenger'+chang[1];
            right_file.innerHTML='<img class="img" src="'+eval(desc.toString())[1]+'"  onclick=clickevent(1) style="cursor:pointer"><br>';

        right_file.innerHTML+=eval(desc.toString())[0];*/

    //  location.href="worldcup_result.html";
    }
    else
    {
      challenger=[];
      already=[]
      challenger=nextlevel.slice();
      nextlevel=[];
      randompick();
    }
  }
  else{
  randompick();
  }
}

 //화면 재로딩
function reload (){
  location.reload(1);
}

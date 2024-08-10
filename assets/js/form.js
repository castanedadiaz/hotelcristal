function sendMail(params){
    $.ajax({
        url: 'assets/php/mail2.php',
        data : params,
        type: 'POST',
        timeout: 1000,
        error: function(){
            alert("Mensaje enviado.\nEn breve contactaremos con usted.\nMuchas gracias");
        },
        success: function(data){
            alert("Mensaje enviado.\nA la brevedad contactaremos con usted.\nMuchas gracias");
            //console.log(JSON.stringify(data));
        }
    });
}
 ///////////
 function getFormParams(form){
     //\"{ \'Ajax\': \'Alta Cheque\',
     params="";
    $('#'+form +' input:text , #'+form +':radio , #'+form +' input:password , #'+form +' textarea , #'+form +' select , #'+form +' :hidden , #'+form +' :checked').each(function(){				
        //console.log('::Params: \''+$(this).attr('name')+'\' : \'' +$(this).val()+'\' ,');
        if($(this).attr('name') && $(this).val()!=""){
            /*if($(this).attr('rel')){
                params+=' \"'+$(this).attr('rel')+'\" : \"' +$(this).val()+'\" ,';
            }else{
                params+=' \"'+$(this).attr('name')+'\" : \"' +$(this).val()+'\" ,';
            }*/
            if($(this).is('select')){
                params+=$(this).attr('name')+'=' +$(this).find(":selected").text()+'&';
            }else if($(this).attr('rel')){
                params+=$(this).attr('rel')+'=' +$(this).val()+'&';
            }
            else{
                params+=$(this).attr('name')+'=' +$(this).val()+'&';
            }
        }
        
    });

    params=params.substr(0,params.length-1);
    console.log('::Params:'+params);
    return params;
 }
////////////
 
 function validateForm(form){
    console.log('validate');
    $("#"+currentCategory+" .status").animate({ opacity: 0 }, 100 );
    $("#"+currentCategory+" .status").html("");
    valid=true;
    email=true;
    number=true;
    message="";
    x_pos=0;
    y_pos=0;
    function getDateNum(date){
         var temp = new Array();
         temp =date.split('-');
         temp.reverse();
         return parseInt(temp.join(""));
     }
    function getMessage($obj,text){
        if(y_pos==0){
        var position = $obj.position();
        x_pos=position.left;
        y_pos=position.top;
        message=text;
        $obj.focus();
        console.log(position.top+'position-->>'+y_pos);
        }
     }
    //var form='form';
    $('#'+form +' :text , #'+form +' textarea  , #'+form +' select , #'+form +' :password').each(function(){
        //label=$('label[for="'+$(this).attr("id")+'"]').text();
        if ($(this).attr("required") == "required" ) {
            //console.log('-->>'+$(this).attr("name")+'..'+$(this).val());
            if ($(this).val() == "" || $(this).val() == "<br>") {
                $( this ).addClass('bad');
                $('li.editors iframe').css('background-color','#ffe289');
                if(valid)valid=false;
                if(y_pos==0)getMessage($(this),"Complete los campos requeridos");
            }else{
                $( this ).removeClass('bad');
                $('li.editors iframe').css('background-color','#fafafa');
            }
            if($(this).attr("name")=="Adultos" ) {
                if(!/^\d+$/.test($(this).val())){;
                //console.log(number+'Number-->>');
                $(this).addClass('bad');
                if(y_pos==0)getMessage($(this),"Ingrese un numero en los campos de cantidad");
                if(valid)valid=false; 
                }
            }
             if ($(this).attr("name").indexOf("Email") >= 0) {
                if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test($(this).val())){
                    if(y_pos==0)getMessage($(this),"Ingrese una direción<br />de email válida");
                    $(this).addClass('bad');
                    if(valid)valid=false;
                }
                //console.log(email+'-->>'+$(this).attr("name")+'.'+$(this).val());
            }
            ////
             if($(this).attr("name")=="to" && $('#from').val()!="" && $(this).val()!=""
                 || $(this).attr("name")=="from" && $('#to').val()!="" && $(this).val()!="" ) {
                 var tempFrom = getDateNum($('#from').val());
                 var tempTo = getDateNum($('#to').val());
                 console.log("DIAS"+(tempTo - tempFrom));
                 //myInteger = parseInt(myString);
                 if((tempTo - tempFrom)<0){;
                     console.log(number+' gerger #'+$(this).attr("name")+'_img');
                     $(this).addClass('bad');
                     $('#'+$(this).attr("name")+'_img').delay(1800).click();
                         if(y_pos==0)getMessage($(this),"La fecha de ingreso es posterior a la de salida");
                         if(valid)valid=false; 
                         
                 }
             }
             ////
        }
        if($(this).attr("name")=="Menores" && $(this).val()!="" ) {
        if(!/^\d+$/.test($(this).val())){;
        //console.log(number+'Number-->>');
        $(this).addClass('bad');
        if(y_pos==0)getMessage($(this),"Ingrese un numero en los campos de cantidad");
        if(valid)valid=false; 
        }else{
            $( this ).removeClass('bad');
        }
    }
     });
    $("#"+currentCategory+" .status").css({'left' : x_pos, 'z-index':'15000'});
    if(!valid){
        $("#"+currentCategory+" .status").html(message);
        $("#"+currentCategory+" .cat-container").css('margin-top',"0px");
        console.log("A "+$("#"+currentCategory+" .status").outerHeight());
        $("#"+currentCategory+" .status").animate({
            opacity: 1,
            top : y_pos 
          }, 300 );
    }
    
    return valid;
}
///////////////
$('input[name="submit"]').removeAttr("disabled");
$('input[name="submit"]').click(function() {
    console.log("parent "+ $(this).attr('rel'));
    formId=$(this).attr('rel');
    if(validateForm(formId)){
        $(this).attr("disabled", "disabled");
        sendMail(getFormParams(formId))};
});
$('form input , form select').keyup(function(event){
    if(event.keyCode == 13){
        $('#'+currentCategory+' input[name="submit"]').click();
    }
 });
var amts=[50,100,150,200,225,250,300];

$(function() {
$('#yearSlider').slider({
    min:0,
    max:amts.length-1,
    step:1,
    value:0,
    change:function(event, ui){
        //alert(amts[$(this).slider("value")]);
        //alert($(this).slider("value"));
        $('#lbl_amt').val(amts[$(this).slider("value")]);
    },
    slide:function(event, ui){
        $('#lbl_amt').val(amts[$(this).slider("value")]);
    }
});

});
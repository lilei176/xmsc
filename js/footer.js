$(function(){
  $.ajax({
    url:"footer.html",
    type:"get",
    async:false,
    success:function(result){
      $(result).replaceAll("footer");
      $(`<link rel="stylesheet" href="../css/footer.css">`).appendTo("footer")
    }
  })

})
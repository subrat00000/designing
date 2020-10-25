$(".search-btn").click(function(){
  $(".search-input").addClass("active").focus;
  $(this).addClass("animate");
  $(".search-close").addClass("hello").focus;
});
$(".search-close").click(function(){
  $(".search-input").removeClass("active").focus;
  $(".search-btn").removeClass("animate");
  $(".search-close").removeClass("hello").focus;
})


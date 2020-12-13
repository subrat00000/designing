var target = $("div#target");
var xyz = [];
var mydata = [];
function check() {
  var c_diff = mydata.filter((x) => !xyz.includes(x));
  return c_diff;
}
function uncheck() {
  console.log("mydata" + mydata);
  var difference = xyz.filter((x) => !mydata.includes(x));
  console.log("unchecked" + difference);

  return difference;
}
function calculateSize() {
  console.log("mydata" + mydata);
  console.log("check" + check());
  // $("#active-size" + check()).text(check());
  xyz = mydata;
}

var newInput = function () {
  var div = $("<div/>", {
    class: "input-group"
  });
  // var span = $("<span />", {
  //   id: "active-size" + check()
  // });
  var prepand = $("<div />", {
    class: "input-group-prepend"
  });
  var data = $("<span />", {
    class: "input-group-text",
    text: check()
  })
  var input = $("<input>", {
    class: "form-control"
  });

  var col = $("<div/>", {
    class: "form-group col-xs-1",
    id: "newInput-" + check()
  });
  $(data).appendTo(prepand);
  $(prepand).appendTo(div);
  // $(span).appendTo(div);
  $(input).appendTo(div);

  $(div).appendTo(col);
  return col;
};

$(" #add input[type=checkbox]").on("change", function () {
  

  var a = $("#add input[type=checkbox]:checked").each(function () {
    
    mydata.push($(this).val());
  });

  if (this.checked) {
    $(newInput()).appendTo(target);
  } else if (!this.checked) {
    var abc = $("#target").find("#newInput-" + uncheck());
    $(abc).remove();
  }
  calculateSize();
  mydata = [];
});

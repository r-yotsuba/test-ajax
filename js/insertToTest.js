let div = $("<div>").attr("id", "testDiv");
$("<p>").text("test string on <a>").appendTo(div);

div.appendTo("#test");
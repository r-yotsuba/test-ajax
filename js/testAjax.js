$.ajax({
  type: "get",
  url: "json/test.json",
  data: {name: 'firstname'},
  dataType: "json",
  success: function(data, dataType){

    var array = data.character;
    
      $.each(array, function(i){
        $(".nameData").append("<p>id: " + array[i].id + "　firstName: " + array[i].firstname + "　　(age: " + array[i].age + ")</p>");
      });

  }
});

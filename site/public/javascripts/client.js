//COLUMN 1
$('.btn-group').button();

//replace these with ajax calls
items = [{name:"Dumplings",id:1,price:"$0.50"}];
sauces = [{name:"Jawyi",id:1,price:"$0.25"},{name:"Hoison",id:2,price:"$0.25"},{name:"Sweet Soy",id:3,price:"$0.25"}]

var add_option = function(old,type,name,id,price){
	$(old).remove();
	var button = $('<div class=".'+type+'" align="center"><button type="button" class="btn btn-sunny text-uppercase">'+name+'</button></div>');
	$("#"+type).append(button);

	$(button).data("type",type);
	$(button).data("id",id);
	$(button).click(function(){
		add_order(button,type,name,id,price);
	});
};

var add_order = function(old,type,name,id,price){
	$(old).remove();

	var div = $('<div class="order" align="center">');
	$("#order").append(div);
	$(div).append('<p>'+name+' '+price+' ea.</p><input class="input-xsmall" size="4"></input>');
	var button = $('<button type="button" class="btn btn-hot text-capitalize btn-xs">Remove</button>');
	$(div).append(button);
	$(div).data("type",type);
	$(div).data("id",id);
	$(div).data("data",name);
	$(button).click(function(){
		add_option(div,type,name,id,price);
	});
};
for(var i in items){
	add_option({},"items",items[i].name,items[i].id,items[i].price);
}

for(var i in sauces){
	add_option({},"sauces",sauces[i].name,sauces[i].id,sauces[i].price);
}


//COLUMN 2
var Address = {};

var delivery_setup = function(){
	$("#search-address").click(function(){
		var addr = $("#address").val();
		var zip = $("#zip-code").val();
		var apt = $("#apartment").val();
		$.ajax({
			url:'https://maps.googleapis.com/maps/api/geocode/json?address='+addr+', '+zip+'&key=AIzaSyCAENqOFS5zBT_q9G2C4qBoVOU2bztfj_4',
			success:function(data){
				results = data.results;
				$("#addresses").empty();
				for(var i in results){
					$("#addresses").append(results[i].formatted_address);
					if(apt){$("#addresses").append(': Apt '+apt);}
					var button = $('<p><a class="btn btn-default" href="#" role="button">Use this address</a></p><br>');
					$("#addresses").append(button);
					$(button).click(function(){
						Address.formatted_address=results[i].formatted_address;
						Address.apartment = apt;
						$("#addresses").empty();
						$("#addresses").append('<p>Using address:<br> "'+Address.formatted_address+'<br>');
						if(apt){$("#addresses").append('Apt '+apt);}
						$("#addresses").append('</p>');
					});
					if(i>5){
						break;
					}
				}
			}
		});
	});
};
delivery_setup();


$("[name='my-checkbox']").bootstrapSwitch();

$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state){
	$("#user-information").empty();
	if(state){
		$("#user-information").append('<p>Name&nbsp;&nbsp;&nbsp;<input type="text" id="cust-name"></input></p><p>Phone Number&nbsp;&nbsp;&nbsp;<input type="text" id="number"></input></p><p>Street Address&nbsp;&nbsp;&nbsp;<input type="text" id="address"></input></p><p>Zip Code&nbsp;&nbsp;&nbsp;<input type="text" id="zip-code" size="5"></input>&nbsp;&nbsp;&nbsp;Apartment Number&nbsp;&nbsp;&nbsp;<input type="text" id="apartment" size="4"></input></p><button id="search-address">Find Address</button><br><div id="addresses"></div><br>');
		delivery_setup();
	}
	else{
		$("#user-information").append('<p>Name&nbsp;&nbsp;&nbsp;<input type="text" id="cust-name"></input></p><p>Phone Number&nbsp;&nbsp;&nbsp;<input type="text" id="number"></input></p><br><br><br>C u soon ;)');
	}
});




//COLUMN 3
$("#submit").click(function(){
	
});

var numberPattern = /\d+/g;

'something102asdfkj1948948'.match( numberPattern )

var handler = StripeCheckout.configure({
    key: 'pk_test_4RTA2hU2UfIShnXdZqhtP0Iy',
    image: 'data:image/jpeg;base64,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',
    token: function(token) {
    }
});

var validate_order = function(){

};

document.getElementById('credit_button').addEventListener('click', function(e) {
    // Open Checkout with further options
    var data = [];
    
    $(".order").each(function( index ) {
		console.log( index + ": " + $( this ).text() );
	});

    $.ajax({
    	url:'./api/value',
    	data:data,
    	success:function(res){
		    handler.open({
		        name: 'Dumpling Hut',
		        description: res.msg,
		        amount: res.price
		    });
		    // implement api call after token generated
     	}
    });
    e.preventDefault();
});

$("#cash_button").click(function(){

});
$("#pass").click({
	$.ajax({
		url:'/api/orders',
		success:function(res){
			if(res.result == "F"){
				$("body").empty();
				$("body").append("not in my house");
			}
			else{
				for(var i in res.orders){
					var order = res.orders[i];
					$("body").empty();
					var p = $("<p>"+order.items + " ### " + order.address+"</p>")
					$("body").append(p);
					var butt = $("<button>Complete Order</button>");
					$(p).append(butt);
					$(butt).click(function(){
						$.ajax({
							url:'/api/order_ready',
							type:'POST',
							success:function(){
								$(p).remove();
							}
					});
				}
			}
		}
	});
});
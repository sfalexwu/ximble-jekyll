$(document).ready(function(){
	$("#scheduling").change(function (event){
		if(event.target.checked){
			$("#scheduling-standard-card").removeClass("highlighted");
		}else {
			$("#scheduling-standard-card").addClass("highlighted");
		}
	});
	
	$( "#pricing-anually" ).click(function(event){
		$("#pricing-monthly").removeAttr("disabled");
		$("#pricing-anually").attr("disabled", "disabled");
		$("#paymentType").val('anually');
		
		ReCalcPricing();
	});
	
	$( "#pricing-monthly" ).click(function(event){
		$("#pricing-anually").removeAttr("disabled");
		$("#pricing-monthly").attr("disabled", "disabled");
		$("#paymentType").val('monthly');
		
		ReCalcPricing();
	});
	
	$( "#TABscheduling" ).click(function(event){
		$("#planType").val('scheduling');
		ReCalcPricing();
	});
	
	$( "#TABtimetracking" ).click(function(event){
		$("#planType").val('timetracking');
		ReCalcPricing();
	});
	
	$( "#TABboth" ).click(function(event){
		$("#planType").val('both');
		ReCalcPricing();
	});
	
	function ReCalcPricing () {
		var paymentType = $("#paymentType").val();
		var planType = $("#planType").val();
		
		if (paymentType == "monthly") {
				if ((planType == "scheduling") || (planType == "timetracking")) {
					$('#price-standard').html("$1.10");
					$('#price-enterprise').html("$2.20");
				}
				if (planType == "both") {
					$('#price-standard').html("$1.54");
					$('#price-enterprise').html("$3.08");
				}
			} else {
				if ((planType == "scheduling") || (planType == "timetracking")) {
					$('#price-standard').html("$1.00");
					$('#price-enterprise').html("$2.00");
				}
				if (planType == "both") {
					$('#price-standard').html("$1.40");
					$('#price-enterprise').html("$2.80");
				}
			}
	}
})
var BASE_VALUE = $('#BASE_VALUE').val();

function editreligion(id){
	var url = BASE_VALUE+'Informationajax/editreligion?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								$('#religion').val(data['religion']);
								
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
function editcaste(id){
	var url = BASE_VALUE+'Informationajax/editcaste?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								$('#religion').val(data['religion_id']);
								$('#caste').val(data['caste']);
								
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
	
function editsurname(id){
	var url = BASE_VALUE+'Informationajax/editsurname?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								getcaste(data['religion_id']);
								$('#religion').val(data['religion_id']);
								$('#surname').val(data['surname']);
								
								setTimeout(function(){  $('#caste').val(data['caste_id']);  }, 1000);
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
	
	function editcountry(id){
	var url = BASE_VALUE+'Informationajax/editcountry?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								$('#country').val(data['country']);
								
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
	
	function editstate(id){
	var url = BASE_VALUE+'Informationajax/editstate?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								$('#country').val(data['country_id']);
								$('#state').val(data['state']);
								
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
	
	function editcity(id){
	var url = BASE_VALUE+'Informationajax/editcity?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								getstate(data['country_id']);
								$('#country').val(data['country_id']);
								$('#city').val(data['city']);
								
								setTimeout(function(){  $('#state').val(data['state_id']);  }, 1000);
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
	
	function editpincode(id){
	var url = BASE_VALUE+'Informationajax/editpincode?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								getstate(data['country_id']);
								$('#country').val(data['country_id']);
								$('#pincode').val(data['pincode']);
								
								setTimeout(function(){  $('#state').val(data['state_id']); 
								
								}, 1000);
								
								setTimeout(function(){ getcity(data['state_id']); 
								
								}, 1000);
								
								setTimeout(function(){  $('#city').val(data['city_id']); 
								}, 1500);
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
	
	function editrelation(id){
	var url = BASE_VALUE+'Informationajax/editrelation?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								$('#relation').val(data['relation']);
								
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	} 
	
	function editusers(id){
	var url = BASE_VALUE+'Informationajax/editusers?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								$('#users').val(data['users']);
								
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
	
	function edityourpost(id){
	var url = BASE_VALUE+'Informationajax/edityourpost?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								$('#yourpost').val(data['yourpost']);
								
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
	
	function editevent(id){
	var url = BASE_VALUE+'Informationajax/editevent?id='+id;
	$.ajax({
                type: 'POST',
                url: url,
                data: {},
				processdata:false,
				cache: false,
				success: function (r) {
                    var values = JSON.parse(r);
					  if (values.status == 1) {
						
							$.each(values.result, function (index, data) {
								$('#idforupdate').val(data['id']);
								$('#event').val(data['event']);
								
							});
						}
						
						
						$('.collapse').collapse('show')
            }	
		})
	}
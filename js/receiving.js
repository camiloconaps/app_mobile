$(function(){
	//$('#receiving_form div').hide();
	$('#lab_awb_numer').hide();
	$('#lab_awb_number').hide();
	$('#lab_origin_country').hide();
	$('#lab_origin_city').hide();
	$('#lab_customer').hide();
	$('#lab_receiving_date').hide();
	$('#lab_time').hide();
	$('#lab_weight').hide();
	$('#lab_tip_weight').hide();
	$('#lab_temp').hide();
	$('#lab_fbe_master').hide();
	$('#lab_pieces_master').hide();
	$('#lab_status').hide();
	$('#lab_notes').hide();
	$.ajax({
		type: 'post',
		url: '../controller/ctrreceiving.php',
		data: {
			action: 'receivingTable',
		},
		dataType: 'json',
	}).done(function(result){
		if(result.bool){
			var data = $.parseJSON(result.msg);
			var html = '';
			html += '<table class="table table-striped table-bordered display" id="table_receiving">';
			html += '<thead>';
			html += '<tr>';
			//html += '<th></th>';
			html += '<th>AWB</th>';
			html += '<th>Date</th>';
			html += '<th>Customer</th>';
			html += '<th>Carrier</th>';
			html += '<th>City</th>';
			html += '<th>Temp</th>';
			html += '<th>PCS</th>';
			html += '<th>FBE</th>';
			html += '<th>Status</th>';
			html += '</tr>';
			html += '</thead>';
			html += '<tbody>';
			$.each(data, function(i, row){
				html += '<tr onclick="javascript: pageContent(\'handling/receiving/form\', \'id_receiving='+row.id_receiving+'\');" style="cursor:pointer;">';
				//html += '<td><button type="button" class="btn btn-info btn-sm" onclick="javascript: pageContent(\'handling/receiving/form\', \'id_receiving='+row.id_receiving+'\');"><span class="glyphicon glyphicon-search"></span></button></td>';
				html += '<td>'+row.id_receiving+'</td>';
				html += '<td>'+row.date+'</td>';
				html += '<td>'+row.customer+'</td>';
				html += '<td></td>';
				html += '<td>'+row.city+'</td>';
				html += '<td>'+row.temp+'</td>';
				html += '<td>'+row.pieces_master+'</td>';
				html += '<td>'+row.fbe_master+'</td>';
				html += '<td><span class="label label-'+row.background+' pull-right">'+row.status+'</span></td>';
				html += '</tr>';
			});
			html += '</tbody>';
			html += '<tfoot>';
			html += '<tr>';
			//html += '<th></th>';
			html += '<th>AWB</th>';
			html += '<th>Date</th>';
			html += '<th>Customer</th>';
			html += '<th>Carrier</th>';
			html += '<th>City</th>';
			html += '<th>Temp</th>';
			html += '<th>PCS</th>';
			html += '<th>FBE</th>';
			html += '<th>Status</th>';
			html += '</tr>';
			html += '</tfoot>';
			html += '</table>';
			$('#data_awb_list').html(html);
			$('#table_receiving').dataTable();
		} else {
			console.log('Error: '+result.msg);
		}
	});
	//Ajax Origin Customer
	$.ajax({
		type: 'post',
		url: '../controller/ctraccounts.php',
		data: {
			action: 'customer',
		},
		dataType: 'json',
	}).done(function(result){
		if(result.bool){
			var data = $.parseJSON(result.msg);
			$('#customer').append($('<option>', {
					value: 0,
					text: "Choose Option"
				}));
			$.each(data, function(i, row){
				$('#customer').append($('<option>', {
					value: row.id,
					text: row.name_company
				}));
			});
		} else {
			console.log('Error: '+result.msg);
		}
	});
	// Ajax Origin City
	$( "#origin_country" ).change(function() {
				origin_cityNow=$('#origin_city').val();
				$('#origin_city').empty();
				var selCountry = $( "#origin_country" ).val();
				$.ajax({
					type: 'post',
					url: '../controller/ctrreceiving.php',
					data: {
						action: 'receivingCity',
						country: selCountry,
					},
					dataType: 'json',
				}).done(function(result){
					if(result.bool){
						var data = $.parseJSON(result.msg);
						var html = '';
						$('#origin_city').append($('<option>', {
								value: 0,
								text: "Choose Option"
							}));
						$.each(data, function(i, row){
								
								$('#origin_city').append($('<option>', {
									value: row.id,
									text: row.city
								}));
							
						});
						
					} else {
						console.log('Error: '+result.msg);
					}
				});
			});	
	//Ajax Origin Country
	$.ajax({
		type: 'post',
		url: '../controller/ctrreceiving.php',
		data: {
			action: 'receivingCountry',
		},
		dataType: 'json',
	}).done(function(result){
		if(result.bool){
			var data = $.parseJSON(result.msg);
			var html = '';
				$('#origin_country').append($('<option>', {
					value: 0,
					text: "Choose Option"
				}));
			$.each(data, function(i, row){
				$('#origin_country').append($('<option>', {
					value: row.id_country,
					text: row.country
				}));
			});
		} else {
			console.log('Error: '+result.msg);
		}
	});
	$('#tip_weight').append($('<option>', {
		value: '0',
		text: 'Choose Option'
	}));
	$('#tip_weight').append($('<option>', {
		value: 'KG',
		text: 'KG'
	}));
	$('#tip_weight').append($('<option>', {
		value: 'LBS',
		text: 'LBS'
	}));
	$( "#awb_number" ).focus(function() {
		hideDivShow('awb_number');
	});
	$( "#origin_country" ).focus(function() {
		hideDivShow('origin_country');
	});
	$( "#origin_city" ).focus(function() {
		hideDivShow('origin_city');
	});
	$( "#customer" ).focus(function() {
		hideDivShow('customer');
	});
	$( "#receiving_date" ).focus(function() {
		hideDivShow('receiving_date');
	});
	$( "#time" ).focus(function() {
		hideDivShow('time');
	});
	$( "#weight" ).focus(function() {
		hideDivShow('weight');
	});
	$( "#tip_weight" ).focus(function() {
		hideDivShow('tip_weight');
	});
	$( "#temp" ).focus(function() {
		hideDivShow('temp');
	});
	$( "#fbe_master" ).focus(function() {
		hideDivShow('fbe_master');
	});
	$( "#pieces_master" ).focus(function() {
		hideDivShow('pieces_master');
	});
	$( "#status" ).focus(function() {
		hideDivShow('status');
	});
	$( "#notes" ).focus(function() {
		hideDivShow('notes');
	});
	//
	$('#receiving_form').submit(function(e){
		e.preventDefault();
		$('#action').val('receivingCreate');
		var data = $('#receiving_form').serialize();
		$.ajax({
			type: 'post',
			url: '../controller/ctrreceiving.php',
			data: data,
			dataType: 'json',
		}).done(function(result){
			if(result.bool){
				swal({
					title: "¡Success!",
					text: result.msg,
					type: 'success',
					showCancelButton: false,
					confirmButtonClass: "btn-success",
					confirmButtonText: "Aceptar",
					closeOnConfirm: true,
				},function(){
					pageContent('handling/receiving/index');
				});
			} else {
				swal('Error!',result.msg,'error');
				console.log('Error: '+result.msg);
			}
		});
	});
	//
	function hideDivShow(fieldFocus){
		if(fieldFocus=="awb_number"){$('#lab_awb_numer').show();}else{$('#lab_awb_numer').hide();}
		if(fieldFocus=="origin_country"){$('#lab_origin_country').show();}else{$('#lab_origin_country').hide();}
		if(fieldFocus=="origin_city"){$('#lab_origin_city').show();}else{$('#lab_origin_city').hide();}
		if(fieldFocus=="customer"){$('#lab_customer').show();}else{$('#lab_customer').hide();}
		if(fieldFocus=="receiving_date"){$('#lab_receiving_date').show();}else{$('#lab_receiving_date').hide();}
		if(fieldFocus=="time"){$('#lab_time').show();}else{$('#lab_time').hide();}
		if(fieldFocus=="weight"){$('#lab_weight').show();}else{$('#lab_weight').hide();}
		if(fieldFocus=="temp"){$('#lab_temp').show();}else{$('#lab_temp').hide();}
		if(fieldFocus=="fbe_master"){$('#lab_fbe_master').show();}else{$('#lab_fbe_master').hide();}
		if(fieldFocus=="pieces_master"){$('#lab_pieces_master').show();}else{$('#lab_pieces_master').hide();}
		if(fieldFocus=="status"){$('#lab_status').show();}else{$('#lab_status').hide();}
		if(fieldFocus=="notes"){$('#lab_notes').show();}else{$('#lab_notes').hide();}
	}
});
function txtModal(line){
	$("#lineModal").val(line);
	$('#po').empty();
	$.ajax({
		type: 'post',
		url: '../controller/ctrreceiving.php',
		data: {
			action: 'receivingLinesPO',
		},
		dataType: 'json',
	}).done(function(result){
		if(result.bool){
			var data = $.parseJSON(result.msg);
			$('#po').append($('<option>', {
					value: 0,
					text: "Choose Option"
				}));
			$.each(data, function(i, row){
					$('#po').append($('<option>', {
						value: row.po_product,
						text:row.po_product+" Max:"+row.case_total
					}));
			});
		} else {
			console.log('Error: '+result.msg);
		}
	});
}

//function Add Lines
function addlines(){
	var html = '';
	var count = ($('.line').length)+1;
	$('#lines').val(count);
	html += '<tr class="line" id="line_'+count+'">';
	html += '<td><div class="form-group"><select name="carrie_grower_'+count+'" id="carrie_grower_'+count+'" class="form-control carrie_grower"></select></div></td>';
	html += '<td><div class="form-group"><select name="boxes_'+count+'" id="boxes_'+count+'" class="form-control boxes" onchange="javascript: clearBoxSizeSelect(\''+count+'\');"></select></div></td>';
	html += '<td><div class="form-group"><input type="number" name="pieces_'+count+'" id="pieces_'+count+'" class="form-control pieces" onkeyup="javascript: clearPieces(\''+count+'\');" onchange="sumPieces();"></div></td>';
	html += '<td><div class="form-group"><input type="text" name="fbe_'+count+'" id="fbe_'+count+'" class="form-control fbe" readonly="" placeholder="click to calculate FBE" onclick="javascript: calculateFbe(\''+count+'\',$(\'#boxes_'+count+'\').val(), $(\'#pieces_'+count+'\').val());sumFBE()" ></div></td>';
	html += '<td><div class="form-group"><div class="input-group"><input type="text" name="coments_'+count+'" id="coments_'+count+'" class="form-control coments" readonly></div></td>';
	html += '<td><div class="form-group"><button type="button" class="btn btn-primary btn-sm class="form-control" data-toggle="modal" data-target="#modal-info" onclick="txtModal('+count+');"><span class="glyphicon glyphicon-plus"></span> Add P.O.</button></div></td>';
	html += '<tr>';
	$('#canvas_line').append(html);
	//Ajax Grower
	$.ajax({
		type: 'post',
		url: '../controller/ctraccounts.php',
		data: {
			action: 'grower',
		},
		dataType: 'json',
	}).done(function(result){
		if(result.bool){
			var data = $.parseJSON(result.msg);
			var html = '';
			html += '<option value=""></option>';
			$.each(data, function(i, row){
				html += '<option value="'+row.id+'">'+row.name_company+'</option>';
			});
			$('#carrie_grower_'+count).html(html);
		} else {
			console.log('Error: '+result.msg);
		}
	});
	//Ajax Boxes
	$.ajax({
		type: 'post',
		url: '../controller/ctrboxes.php',
		data: {
			action: 'boxSize',
		},
		dataType: 'json',
	}).done(function(result){
		if(result.bool){
			var data = $.parseJSON(result.msg);
			var html = '';
			html += '<option value=""></option>';
			$.each(data, function(i, row){
				html += '<option value="'+row.id_box_type+'">'+row.code+' - '+row.dimention+'</option>';
			});
			$('#boxes_'+count).html(html);
		} else {
			console.log('Error: '+result.msg);
		}
	});
}
//Calculate FBE
function calculateFbe(count, boxes, pieces){
	if(boxes != ''){
		if (pieces != ''){
			$.ajax({
				type: 'post',
				url: '../controller/ctrboxes.php',
				data: {
					action: 'boxFbe',
					id: boxes
				},
				dataType: 'json',
			}).done(function(result){
				var data = $.parseJSON(result.msg);
				$.each(data, function(i, row){
					var fbeReceiving = (pieces*row.fbe);
					var fbe = "#fbe_"+count;
					$(fbe).val(fbeReceiving);
					sumFBE();
				});
			});
		} else {
			swal('Error!','The required fields are empty','error');	
		}
	} else {
		swal('Error!','The required fields are empty','error');
	}
}
//Clear pieces and fbe
function clearBoxSizeSelect(count){
	var pieces = "#pieces_"+count;
	var fbe = "#fbe_"+count;
	$(pieces).val('');
	$(fbe).val('');
}
//clear fbe
function clearPieces(count){
	var fbe = "#fbe_"+count;
	$(fbe).val('');
}
function poTOcomments(){
	//$('#modal-info').modal('hide');
	var a1= $('#po').val();
	var a2= $('#pieces_po').val();
	var a3= "#coments_"+$('#lineModal').val();
	var a4= $(a3).val();
	if (a4 == ""){
		$(a3).val(a1+"!"+a2);
	}else{
	$(a3).val(a1+"!"+a2+"|"+a4);
	}
}
function sumPieces(){
	var  nlines = $('#lines').val();
	var  sumlines = 0;
	for (var i = 1; i <= nlines; i++) {
		var nsum= "#pieces_"+i;
		var line_i = parseInt($(nsum).val());
		sumlines=sumlines+line_i;
	}
	$('#pieces_master').val(sumlines);
}

function sumFBE(){
	var  nlines = $('#lines').val();
	var  sumlines = 0;
	for (var i = 1; i <= nlines; i++) {
		var nsum= "#fbe_"+i;
		var line_i = Number($(nsum).val());
		sumlines=sumlines+line_i;
		//alert(sumlines);
	}
	$('#fbe_master').val(sumlines);
}
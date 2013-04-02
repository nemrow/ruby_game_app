$(document).ready(function(){
	problems_array = [
		["array = [1,2,3,4,5]", "array[2]", 3],
		[2,2],
		[3,3]
	]
	$('.array_placer').text(problems_array[0][0])
	$('.problem_placer').text(problems_array[0][1])
	$('.answer_placer').text(problems_array[0][2])
	current_array_box = 2
	$('.array_input').live('keypress', function(e) { 
		var code = (e.keyCode ? e.keyCode : e.which);
 		if(code == 13) { 
 			$('.array_input_text_boxes').append('<p>,</p><input class="array_input array_input_'+current_array_box+'" type="text">');
 			$('.array_input_'+current_array_box).focus();
 			current_array_box += 1
 			$('.num_of_elements').text($('.array_input').length)
 		}
	});
})
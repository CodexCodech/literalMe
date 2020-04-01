import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this is the default BS theme as example
import popper from 'popper.js'
global.Popper = popper // fixes some issues with Popper and Meteor

import './main.html';
import '../lib/collection.js';

Template.addBook.events({
	'click .js-save'(event, instance){
		var theTitle = $('#Title').val();
		var theAuthor =$('#Author').val();
		var theDesc =$('#Desc').val();
		var thePath =$('#Path').val();
		var theThumb =$('.thumbtemp').val();

		litbooksdb.insert({
			"Title": theTitle,
			"Path": thePath,
			"Author": theAuthor,
			"Desc": theDesc,
			"thumbtemp": theThumb

		});
		console.log("saving..");
	  	$("#addBookModal").modal("hide");
	  	// $("#Title").val("");
	  	// $("#Path").val("");
	    // $("#Desc").val("");
	  	// $("#Author").val("");
	  	// $(".imgholder").attr("src","imgplaceholder.png");
	},

	'click .js-close'(event, instance){
		console.log("closed..");
	},

	'input #Path'(event,instance){
  		$(".imgholder").attr("src",$("#Path").val());
  		$(".thumbtemp").attr("src",$("#Path").val());
  		console.log($("#Path").val());
  	}, 	

  	// 'hover .js-save'(event, instance){
  	// 	$(".js-view").click(function(){
  	// 		$("#karma").hide();
  	// 		$("#hehe").show();
  	// 	},

  	// }	 	
});

Template.mainBody.events({
	'click .js-view'(event, instance){
		$("#ViewBook").modal("show")
		// $('#ViewBook .modal-body').html('<h5 class="title " id="Title">' + litbooksdb.find({_id:myId}).Title '</h5> <h5 class="author" id="Author">' + litbooksdb.find({_id:myId}).Author + '</h5> <p id="Desc">' + litbooksdb.find({_id:myId}).Desc + '</p>'); 
		console.log("Viewing...");	
		
    },

    'mousemove .js-view'(event, instance){
  			$("#karma").hide();
  			$("#hehe").show();
  		}
});
	

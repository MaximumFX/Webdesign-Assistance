var dir = 'URL';
var fileextension = 'EXT';
$.ajax({
	url: dir,
	success: function (data) {
		$(data).find('a:contains(' + fileextension + ')').each(function() {
			var filename = this.href;
		});
	}
});

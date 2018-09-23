function gen_list_body_up()
{
document.write("\
	<div class=\"header\">\
		<div class=\"header_resize\">\
			<div class=\"logo\"><h1><a href=\"index.html\">WY Space</a></h1></div>\
			<div class=\"clr\"></div>\
            <div class=\"menu\">\
				<ul>\
					<li><a href=\"~\index.html\">Home</a></li>\
					<li><a href=\"~\article.html\" class=\"active\">Article</a></li>\
					<li><a href=\"~\label.html\"> Label </a></li>\
					<li><a href=\"~\tool.html\"> Tool</a></li>\
					<li><a href=\"~\search.html\"> Search</a></li>\
				</ul>\
			</div>\
		</div>\
		<div class=\"clr\"></div>\
	</div>\
	<div class=\"clr\"></div>\
	<div class=\"body\">\
		<div class=\"body_resize\">\
")
	gen_right_menu();
}

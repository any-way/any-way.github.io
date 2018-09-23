function gen_article_body_up()
{
document.write("\
	<div class=\"header\">\
		<div class=\"header_resize\">\
			<div class=\"logo\"><h1><a href=\"index.html\">WY Space</a></h1></div>\
			<div class=\"clr\"></div>\
            <div class=\"menu\">\
				<ul>\
					<li><a href=\"~\index.html\">Home</a></li>\
					<li><a href=\"~\article.html\" class=\"active\">Articles</a></li>\
					<li><a href=\"~\label.html\"> Labels </a></li>\
					<li><a href=\"~\tool.html\"> Tools</a></li>\
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

	var strUrl=window.location.href;
	var arrUrl=strUrl.split("/");
	var strPage=arrUrl[arrUrl.length-1];
	arrUrl=strPage.split(".");
	strPage=arrUrl[arrUrl.length-2];
	
	document.title += " - " + menu[parseInt(strPage)].title;
		
document.write("<div class=\"left_text\">\
")
print_brief_info(parseInt(strPage));document.write("<br><br>");
}

function print_info(id)
{
	document.write("<div class=\"left\">\n");
	if (menu[id].istop)
	{
		document.write("<h2><font color=#EE30A7>[TOP]</font>" + menu[id].title + "<br />\n");
	}
	else
	{
		document.write("<h2><a href=\"~articles/" + menu[id].num + ".html\">" + menu[id].title + "</a><br />\n");
	}
	document.write("<span>" + menu[id].date + "</span> </h2>\n");
	document.write("<p>" + menu[id].abs + "</span> </p>\n");
	document.write("<p>\n");
	for (var i = 0; i < menu[id].labels.length; ++i)
	{
		document.write("<div class=\"label\"><a href=\"~article.html?label=" + menu[id].labels[i] + "\">" + menu[id].labels[i] + "</a></div>\n");
	}
	document.write("</p>\n");
				
				
	document.write("			<br /><br />\n");
	document.write("		</div>\n");
	document.write("		<div class=\"clr\"></div>	<br>\n");
}
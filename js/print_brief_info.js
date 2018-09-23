function print_brief_info(id)
{

	if (menu[id].istop)
	{
		document.write("<h2><font color=#EE30A7>[TOP]</font>" + menu[id].title + "<br />\n");
	}
	else
	{
		document.write("<h2>" + menu[id].title + "<br />\n");
	}
	document.write("<span>" + menu[id].date + "</span> </h2>\n");

	for (var i = 0; i < menu[id].labels.length; ++i)
	{
		document.write("<div class=\"label\"><a href=\"../article.html?label=" + menu[id].labels[i] + "\">" + menu[id].labels[i] + "</a></div>\n");
	}


}
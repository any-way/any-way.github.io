function component_sidebar()
{
	document.write("<div class=\"right\">");
	document.write("<h2> Site Links</h2>");
	document.write("<ul>");
	for (var i = 0; i < guide_column.length; ++i)
	{
		document.write("<li><a href=\"" + guide_column[i].link + "\"> " + guide_column[i].title + "</a></li>");
	}
	document.write("</ul>");
	document.write("<div class=\"clr\"></div>");
	document.write("</div>");
}
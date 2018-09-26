function component_head(col)
{
	document.write("<div class=\"header\">");
	document.write("<div class=\"header_resize\">");
	document.write("<div class=\"logo\"><h1><a href=\"index.html\">" + website_title + "</a></h1></div>");
	document.write("<div class=\"clr\"></div>");
    document.write("<div class=\"menu\">");
	document.write("<ul>");
	
	for (var i = 0; i < head_column.length; ++i)
	{
		if (i == col)
		{
			document.write("<li><a href=\"" + head_column[i].link + "\" class=\"active\">" + head_column[i].title + "</a></li>");
		}
		else
		{
			document.write("<li><a href=\"" + head_column[i].link + "\">" + head_column[i].title + "</a></li>");
		}
		
	}
	document.write("</ul>");
	document.write("</div>");
	document.write("</div>");
	document.write("<div class=\"clr\"></div>");
	document.write("</div>");
}
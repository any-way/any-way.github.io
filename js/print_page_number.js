function print_page_number(page, label)
{
	if (isNaN(page)) page = 0;
	var l = page - 5;
	var r = page + 5;
	if (l < 1) l = 1;
	if (r < l + 10) r = l + 10;
	
	var ls;
	if (label == null) 
		ls = "";
	else
		ls = "&label=" + label;
	
	if (page != 0)
	{
		document.write("<a href=\"/article.html?page=0" + ls + "\"><div class=\"page_num\">O</a></div>\n");
	}
	else
	{
		document.write("<a href=\"/article.html?page=0" + ls + "\"><div class=\"page_num\"><div class=\"page_num\"><font color=#EE82EE>O</font></a></div>\n");
	}
	
	for (var i = l; i <= r; ++i)
	if (i != page)
	{
		document.write("<a href=\"/article.html?page=" + i + ls + "\"><div class=\"page_num\">" + i + "</a></div>\n");
	}
	else
	{
		document.write("<a href=\"/article.html?page=0" + i + ls + "\"><div class=\"page_num\"><font color=#EE82EE>" + i + "</font></a></div>\n");
	}
}
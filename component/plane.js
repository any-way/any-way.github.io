//plane
function component_plane_begin()
{
	document.write("<div class=\"left\">\n");
}

function component_plane_end()
{
	document.write("			<br />\n");
	document.write("		</div>\n");
	document.write("		<div class=\"clr\"></div>	<br>\n");
}

//plane, printing article info
function component_plane_articleInfo(id)
{
	component_plane_begin();
	if (menu[id].istop)
	{
		document.write("<h2><font color=#EE30A7>[TOP]</font><a href=\"/article/" + menu[id].link + "\">" + menu[id].title + "</a><br />\n");
	}
	else
	{
		document.write("<h2><a href=\"/article/" + menu[id].link + "\">" + menu[id].title + "</a><br />\n");
	}
	document.write("<span>" + menu[id].date + "</span> </h2>\n");
	document.write("<p>" + menu[id].abs + "</span> </p>\n");
	document.write("<p>\n");
	for (var i = 0; i < menu[id].tags.length; ++i)
	{
		document.write("<div class=\"label\"><a href=\"/html/article.html?tag=" + encodeURI(encodeURI(menu[id].tags[i])) + "\">" + menu[id].tags[i] + "</a></div>\n");
	}
	document.write("</p>\n");
	component_plane_end();			
}

//plane, printing article info
function component_plane_articleInfoList(cnt)
{
	for (var i = menu.length - 1; i >= 0; --i)
	if (menu[i].istop && menu[i].isshow && cnt > 0)
	{
		component_plane_articleInfo(i);
		--cnt;
	}
	for (var i = menu.length - 1; i >= 0; --i)
	if (!menu[i].istop && menu[i].isshow && cnt > 0)
	{
		component_plane_articleInfo(i);
		--cnt;
	}
}

//plane, containing article
function component_plane_text_begin(id)
{
	document.write("<div class=\"left_text\">\n");
	if (menu[id].istop)
	{
		document.write("<h2><font color=#EE30A7>[TOP]</font><a href=\"/article/" + menu[id].link + "\">" + menu[id].title + "</a><br />\n");
	}
	else
	{
		document.write("<h2><a href=\"/article/" + menu[id].link + "\">" + menu[id].title + "</a><br />\n");
	}
	document.write("<span>" + menu[id].date + "</span> </h2>\n");
}

function component_plane_text_end(id)
{
	document.write("			<br /><br />\n");
	for (var i = 0; i < menu[id].tags.length; ++i)
	{
		document.write("<div class=\"label\"><a href=\"/html/article.html?tag=" + encodeURI(encodeURI(menu[id].tags[i])) + "\">" + menu[id].tags[i] + "</a></div>\n");
	}
	document.write("			<br /><br />\n");
	document.write("		</div>\n");
	document.write("		<div class=\"clr\"></div>	<br>\n");
}

//plane, printing article list
function component_plane_list(title, id)
{
	document.write("<div class=\"left_list\">\n");
	if (title != "")
		document.write("<h2>" + title + "</h2>\n");
	for (var i = 0; i < id.length; ++i)
	{
		if (menu[id[i]].istop)
		{
			document.write("<hr/><a href=\"/article/" + menu[id[i]].link + "\"><font color=#EE30A7>[TOP]</font>" + menu[id[i]].title + "</a>\
			<span>" + menu[id[i]].date + "</span><br />\n");
		}
		else
		{
			document.write("<hr/><a href=\"/article/" + menu[id[i]].link + "\">" + menu[id[i]].title + "</a>\
			<span>" + menu[id[i]].date + "</span><br />\n");
		}
	}
	document.write("<hr/>\n");
	document.write("		</div>\n");
	document.write("		<div class=\"clr\"></div></br>\n");
}

//plane, printing guide article list
function component_plane_guideList()
{
	for (var i = 0; i < guide.length; ++i)
		component_plane_list(guide[i].title, guide[i].id);
		
	var rid = new Array(0);
	for (var i = menu.length - 1; i >= 0; --i)
	if (menu[i].isshow)
	{
		rid[rid.length] = i;
		if (rid.length > n_list_guide_recent) break;
	}
	component_plane_list("最新文章", rid);
}

//plane, printing a message
function component_plane_sign(message)
{
	component_plane_begin();
	document.write("<b><font size=\"4\", color=#C71585>[!]</font><font color=1E90FF>" + message + "</font></b>");
	component_plane_end();	
}

//plane, printing page number
function component_plane_pageNumer(left, mid, right, addr)
{
	document.write("<div class=\"left_page\">\n");
	var num = new Array(0);
	
	document.write("<a href=\"/html/article.html?page=" + left + addr + "\">[First]<a> ");
	if (mid != left)
		document.write("<a href=\"/html/article.html?page=" + (mid - 1) + addr + "\">[prev]<a> ");
	for (var i = max(left + 1, mid - n_number_pageNumber); i < mid; ++i)
		document.write("<a href=\"/html/article.html?page=" + i + addr + "\">[" + i + "]<a> ");
	document.write("<a href=\"/html/article.html?page=" + mid + addr + "\"><b><font color=#C71585>[" + mid + "]</color></b><a> ");	
	for (var i = mid + 1; i < min(right - 1, mid + n_number_pageNumber); ++i)
		document.write("<a href=\"/html/article.html?page=" + i + addr + "\">[" + i + "]<a> ");
	if (mid != right)
		document.write("<a href=\"/html/article.html?page=" + (mid + 1) + addr + "\">[next]<a> ");
	document.write("<a href=\"/html/article.html?page=" + right + addr + "\">[last]<a>");

	document.write("			<br />\n");
	document.write("		</div>\n");
	document.write("		<div class=\"clr\"></div>	<br>\n");
}
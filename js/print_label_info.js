function contain_label(id, label)
{
	if (label == null) return true;
	for (var i = 0; i < menu[id].labels.length; ++i)
	if (menu[id].labels[i] == label)
		return true;
	return false;
}

function print_label_info(page, label)
{
	if (isNaN(page)) page = 0;
	var n_per_page = 10;
	var cur_page = page;
	var cur_n = n_per_page;
	var total = 0;
	for (var id = menu.length - 1; id >= 0; --id)
	if (contain_label(id, label))
	{
		if (cur_page == 0 && cur_n > 0)
		{
			print_info(id);
			++total;
			--cur_n;
		}
		if (cur_page == 0 && cur_n == 0)
		{
			break;
		}
		if ((--cur_n) == 0)
		{
			--cur_page;
			cur_n = n_per_page;
		}
	}
	if (total == 0)
	{
		document.write("<div class=\"left\">");
		document.write("<span> <font size = 5 color = #D8BFD8> empty <font></span>\n");
		document.write("			<br /><br />\n");
		document.write("		</div>\n");
		document.write("		<div class=\"clr\"></div>	<br>\n");
	}
}
function get_n_article(tag)
{
	var cnt = 0;
	for (var i = 0; i < menu.length; ++i)
	if (menu[i].isshow)
	{
		if (tag == null || tag == "")
		{
			++cnt;
		}
		else
		{
			for (var j = 0; j < menu[i].tags.length; ++j)
			if (tag == menu[i].tags[j])
			{
				++cnt;
				break;
			}
		}
	}
	return cnt;
}

function get_article(tag, begin, end)
{
	id = new Array(0);
	var cnt = 0;
	for (var i = menu.length - 1; i >= 0 && cnt < end; --i)
	if (menu[i].isshow)
	{
		if (tag == null || tag == "")
		{
			++cnt;
			if (begin <= cnt && cnt <= end)
				id[id.length] = i;
		}
		else
		{
			for (var j = 0; j < menu[i].tags.length; ++j)
			if (tag == menu[i].tags[j])
			{
				++cnt;
				if (begin <= cnt && cnt <= end)
					id[id.length] = i;
				break;
			}
		}
	}
	return id;
}
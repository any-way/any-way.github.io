function print_home_info()
{
	var n_info = 5;
	for (var id = menu.length - 1; id >= 0; --id)
	{
		if (menu[id].istop == 1 && n_info > 0)
		{
			print_info(id);
			--n_info;
		}
		if (n_info == 0)
		{
			break;
		}
	}
	for (var id = menu.length - 1; id >= 0; --id)
	{
		if (menu[id].istop == 0 && n_info > 0)
		{
			print_info(id);
			--n_info;
		}
		if (n_info == 0)
		{
			break;
		}
	}
}
function component_body_begin()
{
	document.write("<div class=\"clr\"></div>");
	document.write("<div class=\"body\">");
	document.write("	<div class=\"body_resize\">");
	document.write("<table width=900px, frame = void>");
	document.write("	<tr>");
	document.write("	<td width=630px, valign=top>");
}


function component_body_end()
{
	document.write("	</td>");
	document.write("	</td>");
	document.write("	<td width=260px, valign=top>");
	
	component_sidebar();
	
	document.write("	</td>");
	document.write("	</tr>");
	document.write("</table>");
	document.write("</div>");
	
	//FBG
	component_fbg();
	
	//footer
	component_footer();
}

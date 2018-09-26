function get_para(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
}

function max(x, y) { return x > y ? x : y;}
function min(x, y) { return x < y ? x : y;}
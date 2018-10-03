//website
var website_title = "angwuy的个人空间";
var website_icon = "/favicon.ico";

//head component
var head_column = new Array(
{
	title : "主页",
	link : "/index.html"
},
{
	title : "导航",
	link : "/html/guide.html"
},
{
	title : "文章",
	link : "/html/article.html"
},
{
	title : "标签",
	link : "#"
},
{
	title : "搜索",
	link : "#"
}
);

//guide component
var guide_column = new Array(
{
	title : "我的主页",
	link : "/index.html"
},
{
	title : "Github",
	link : "http://github.com"
}
);

//parameter
var n_info_homepage = 10;
var n_number_pageNumber = 5;
var n_list_guide_recent = 20;
var n_list_per_page = 5;


//set page
document.write("<title>" + website_title + "</title>");
document.write("<link rel=\"icon\" href=\"" + website_icon + "\" type=\"img/x-ico\" />");
/** Current page identity */
var idCurrentPage = "introduction";

/**
 * Add header
 */
function addHeader() {
	document.write('<div id="header_block">');
	document.write('	<div id="header_title">');
	document.write('		<img src="images/logo_40x52.png" alt="Mobile Widgets" />');
	document.write('		<h1 class="header_title">Mobile Widgets</h1>');
	document.write('	</div>');
	document.write('	<div id="header_menu">');
	document.write('		<ul>');
	document.write('			<li class="nav_item_begin"><a href="introduction.html">Home</a></li>');
	//document.write('			<li class="nav_item"><a href="#">About</a></li>');
	//document.write('			<li class="nav_item_end"><a href="#">Help</a></li>');
	document.write('		</ul>');
	document.write('	</div>');
	document.write('	');
	document.write('</div>');
}

/**
 * Add footer
 */
function addFooter() {
	document.write('<div id="footer_block">');
	document.write('</div>');
}


function addMenu() {
	document.write('<div id="menu_block">');
	document.write('	<ul>');

	for (var i = 0; i < structure.children.length; i++) {
		structPage = structure.children[i];
		
		li_class = "nav_item";
		if (structPage.isFirst) {
			li_class = "nav_item_begin";
		} else if (structPage.isLast) {
			li_class = "nav_item_end";
		}
		document.write('<li class="' + li_class + '">');
			
		if (structPage.isSubPageSelected(idCurrentPage)) {
			//Display page and sub pages
			document.write('<a ' 
				+ (structPage.isSelected(idCurrentPage) ? 'class="selected" ' : '')
				+ 'href="' + structPage.url() + '">'
				+ structPage.name + '</a>'
			);
			//Display sub pages
			for (var j = 0; j < structPage.children.length; j++) {
				subStructPage = structPage.children[j];
				li_class = "nav_item";
				document.write('<li class="' + li_class + ' lvl3">');
				if (subStructPage.isSelected(idCurrentPage)) {
					//Display page and sub pages
					document.write('<a class="selected" href="' + subStructPage.url() + '">' + subStructPage.name + '</a>');
				} else {
					//Display page only
					document.write('<a href="' + subStructPage.url() + '">' + subStructPage.name + '</a>');
				}
				document.write('</li>');
				
				//Display sub sub pages
				if (subStructPage.isSubPageSelected(idCurrentPage)) {
					for (var k = 0; k < subStructPage.children.length; k++) {
						subSubStructPage = subStructPage.children[k];
						li_class = "nav_item";
						document.write('<li class="' + li_class + ' lvl4">');
						if (subSubStructPage.isSubPageSelected(idCurrentPage)) {
							//Display page and sub pages
							document.write('<a class="selected" href="' + subSubStructPage.url() + '">' + subSubStructPage.name + '</a>');
						} else {
							//Display page only
							document.write('<a href="' + subSubStructPage.url() + '">' + subSubStructPage.name + '</a>');
						}
						document.write('</li>');
					}
				}
			}
			
		} else {
			//Display page only
			document.write('<a href="' + structPage.url() + '">' + structPage.name + '</a>');
		}
		document.write('</li>');
	}
	document.write('	</ul>');
	document.write('</div>');
}


function addTabs() {
	document.write('<div id="tabs_block">');
	document.write('	<ul>');

	for (var i = 0; i < structure.children.length; i++) {
		structPage = structure.children[i];
		li_class = "nav_item";
		if (structPage.isFirst) {
			li_class = "nav_item_begin";
		} else if (structPage.isLast) {
			li_class = "nav_item_end";
		}
		document.write('<li class="' + li_class + '">');
		if (structPage.isSubPageSelected(idCurrentPage)) {
			//Display selected page
			document.write('<a class="selected" href="' + structPage.url() + '">' + structPage.name + '</a>');
		} else {
			//Display page
			document.write('<a href="' + structPage.url() + '">' + structPage.name + '</a>');
		}
		document.write('</li>');
	}

	document.write('	</ul>');
	document.write('</div>');
}




function beginPage() {
	document.write('<div id="main_block">');
	addHeader();
	document.write('	<div class="horizontal_separator"></div>');
	addTabs();
	document.write('	<div class="horizontal_separator"></div>');
	document.write('	<div>');
	addMenu();
	document.write('		<div id="document_block">');
}


function endPage() {
	document.write('		</div>');
	document.write('	</div>');
	document.write('	<div class="horizontal_separator"></div>');
	addFooter();
	document.write('</div>');
}


/**
 * Add back page navigator
 * @param idPreviousPage Previous page
 * @param idNextPage Next page
 */
function addBackPageNavigator (	idPreviousPage,	idNextPage) {
	var previousPage = 
		(idPreviousPage) != '' ? structure.getPage(idPreviousPage) : null;
	var nextPage =
		(idNextPage != '') ? structure.getPage(idNextPage) : null;
	
	document.write('<div id="book-navigation">');
	document.write('<table>');
	document.write('	<tr>');
	document.write('		<td class="previous">');
	if (previousPage != null) {
		document.write('			<a id="previous-page" href="'+ previousPage.url() +'">'+ previousPage.name +'</a>');
	}
	document.write('		</td>');
	document.write('		<td class="top">');
	document.write('		<a id="top-page" href="#">up</a>');
	document.write('		</td>');
	document.write('		<td class="next">');
	if (nextPage != null) {
		document.write('			<a id="next-page" href="'+ nextPage.url() +'">'+ nextPage.name +'</a>');
	}
	document.write('		</td>');
	document.write('	</tr>');
	document.write('</table>');
	document.write('</div>');
}

/**
 * Add title (H1..4)
 * @param title Title
 * @param level Title level (1 to 4)
 */
function addIndex (	) {
	document.write( '<div id="page_index_block">' );
	document.write( '<ul id="page_index"></ul>' );
	document.write( '</div>' );
	document.write( '<br/>' );
}

/**
 * Add title (H1..4)
 * @param title Title
 * @param level Title level (1 to 4)
 */
function addTitle (	title,	level) {
	var titleId   = 'id' + level;
	var titleConv = title.replace('"', '\"');
	
	var len = title.length;
	for (var i = 0; i < len; i++) {
		var c = title.charAt(i);
		if ((c < 60 || c >  71)
		 && (c < 65 || c >  90)
		 && (c < 97 || c > 122)) {
			c = '_';
		}
		titleId = titleId + c;
	}
	
	document.write( '<h'+level+' id="'+ titleId+'">' + title + '</h'+level+'>' );
	
	var nodeIndex = document.getElementById('page_index');
	var oldHTML = nodeIndex.innerHTML; 
	var newHTML = oldHTML + '<li class="lvl'+level+'"><a href="#'+titleId+'">'+title+'</a></li>';
	nodeIndex.innerHTML = newHTML;
}


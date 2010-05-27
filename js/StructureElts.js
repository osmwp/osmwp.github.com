/**
 * A page of structure
 */
function Page (id, name, children) {
	//Page identity
	this.id = id;
	//Page name
	this.name = name;
	//Sub pages
	this.children = children;
	
	// Is the first page 
	this.isFirst = false;
	// Is the last page 
	this.isLast = false;
	
	// Parent page 
	this.parent = null;
	
	//Get if page (or a sub page) is selected
	this.url = function () {
		return this.id + ".html";
	};
	
	//Get if page (or a sub page) is selected
	this.isSelected = function (idCurrentPage) {
		return (this.id == idCurrentPage);
	};
	
	//Get if a sub page is selected
	this.isSubPageSelected  = function (idCurrentPage) {
		//Verify children
		if (this.children != null)
		for(var i = 0; i < this.children.length; i++) {
			var child = this.children[i];
			if (child.isSubPageSelected(idCurrentPage)) {
				//A child of this page is the current page
				return true;
			}
		}
		if (this.id == idCurrentPage) {
			//This page is the current page
			return true;
		}

		// It is not selected
		return false;
	};
	
	//Get a specific sub-page (return null if not found)
	this.getPage = function (idPage) {
		if(this.id == idPage) {
			//This page is the searched page !
			return this;
		} else {
			if (this.children != null) {
				for(var i = 0; i < this.children.length; i++) {
					var child = this.children[i];
					//Search the page in the child tree
					var result = child.getPage(idPage);
					if (result != null) {
						//The child (or a sub child page) is the searched page
						//Return it
						return result;
					}
				}
			}
		}
		return null;
	};
	
	//Initialize page and sub pages
	this.initialize = function () {
		for(var i = 0; i < this.children.length; i++) {
			var child = this.children[i];
			//Child parent is the current page
			child.parent = this;
			//Initialize this child
			child.initialize();
		}
	};
}

/**
 * Structure root
 */
function Pages (children) {
	//Sub pages
	this.children = children;
	
	//Get a specific page (return null if not found)
	this.getPage = function (idPage) {
		var result = null;
		for(var i = 0; i < this.children.length; i++) {
			var child = this.children[i];
			result = child.getPage(idPage);
			if (result != null) {
				return result;
			}
		}
		return result;
	};
	
	//Initialize pages tree
	this.initialize = function () {
		var child = null;
		for(var i = 0; i < this.children.length; i++) {
			child = this.children[i];
			//Flag first element
			if (i == 0 ) { child.isFirst = true; }
			//For root child, parent is null
			child.parent = null;
			//Initialize this child
			child.initialize();
		}
		//Flag last element
		if (child != null) { child.isLast = true; }
	};
}

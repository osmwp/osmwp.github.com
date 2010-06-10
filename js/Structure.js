// Node list generate with: development_node_(.*).html => new Page ( "development_node_$1", "$1 node", new Array() ),
// Javascript list generate with: development_javascript_(.*).html => new Page ( "development_javascript_$1", "$1", new Array() ),
				

/**
 * Structure of web site
 * 
 * Require StructureElts.js file
 */
var structure = new Pages (	new Array (
	new Page ( "introduction", "introduction", new Array() ),

	new Page ( "installation", "installation", new Array(
		new Page ( "installation_java", "Java runtime installation", new Array() ),
		new Page ( "installation_eclipse", "Eclipse installation", new Array() ),
		new Page ( "installation_sdk", "Mobile Widgets SDK installation", new Array() )
	)),

	new Page ( "first_project", "first project", new Array() ),

	new Page ( "widgets_development", "widgets development", new Array(
		new Page ( "widgets_development_sdk", "Mobile Widgets SDK", new Array(
			new Page ( "widgets_sdk_manual", "Mobile Widgets SDK manual", new Array() ),
			new Page ( "widgets_development_vrml_editor", "VRML Editor - User Manual", new Array() )
		)),
		new Page ( "widgets_development_languages", "Mobile Widgets languages", new Array(
			new Page ( "widgets_development_vrml_beginner", "VRML totally beginner's guide", new Array() ),
			new Page ( "widgets_development_nodes_ref", "VRML nodes reference", new Array(
				new Page ( "development_node_Anchor", "Anchor node", new Array() ),
				new Page ( "development_node_Appearance", "Appearance node", new Array() ),
				new Page ( "development_node_AudioClip", "AudioClip node", new Array() ),
				new Page ( "development_node_Bitmap", "Bitmap node", new Array() ),
				new Page ( "development_node_Circle", "Circle node", new Array() ),
				new Page ( "development_node_Color", "Color node", new Array() ),
				new Page ( "development_node_ColorInterpolator", "ColorInterpolator node", new Array() ),
				new Page ( "development_node_CompositeTexture2D", "CompositeTexture2D node", new Array() ),
				new Page ( "development_node_Coordinate", "Coordinate node", new Array() ),
				new Page ( "development_node_Coordinate2D", "Coordinate2D node", new Array() ),
				new Page ( "development_node_CoordinateInterpolator", "CoordinateInterpolator node", new Array() ),
				new Page ( "development_node_CoordinateInterpolator2D", "CoordinateInterpolator2D node", new Array() ),
				new Page ( "development_node_FontStyle", "FontStyle node", new Array() ),
				new Page ( "development_node_Group", "Group node", new Array() ),
				new Page ( "development_node_ImageTexture", "ImageTexture node", new Array() ),
				new Page ( "development_node_IndexedFaceSet2D", "IndexedFaceSet2D node", new Array() ),
				new Page ( "development_node_Inline", "Inline node", new Array() ),
				new Page ( "development_node_InputSensor", "InputSensor node", new Array() ),
				new Page ( "development_node_Interpolators", "Interpolators node", new Array() ),
				new Page ( "development_node_KeySensor", "KeySensor node", new Array() ),
				new Page ( "development_node_Layer2D", "Layer2D node", new Array() ),
				new Page ( "development_node_Material2D", "Material2D node", new Array() ),
				new Page ( "development_node_MediaControl", "MediaControl node", new Array() ),
				new Page ( "development_node_MediaSensor", "MediaSensor node", new Array() ),
				new Page ( "development_node_Message", "Message node", new Array() ),
				new Page ( "development_node_MotionSensor", "MotionSensor node", new Array() ),
				new Page ( "development_node_MovieTexture", "MovieTexture node", new Array() ),
				new Page ( "development_node_Namespace", "Namespace node", new Array() ),
				new Page ( "development_node_OrderedGroup", "OrderedGroup node", new Array() ),
				new Page ( "development_node_OrientationInterpolator", "OrientationInterpolator node", new Array() ),
				new Page ( "development_node_PositionInterpolator", "PositionInterpolator node", new Array() ),
				new Page ( "development_node_PositionInterpolator2D", "PositionInterpolator2D node", new Array() ),
				new Page ( "development_node_RecordTexture", "RecordTexture node", new Array() ),
				new Page ( "development_node_Rectangle", "Rectangle node", new Array() ),
				new Page ( "development_node_RichText", "RichText node", new Array() ),
				new Page ( "development_node_ScalarInterpolator", "ScalarInterpolator node", new Array() ),
				new Page ( "development_node_Script", "Script node", new Array() ),
				new Page ( "development_node_Shape", "Shape node", new Array() ),
				new Page ( "development_node_Sound2D", "Sound2D node", new Array() ),
				new Page ( "development_node_Style", "Style node", new Array() ),
				new Page ( "development_node_Switch", "Switch node", new Array() ),
				new Page ( "development_node_Text", "Text node", new Array() ),
				new Page ( "development_node_TimeSensor", "TimeSensor node", new Array() ),
				new Page ( "development_node_TouchSensor", "TouchSensor node", new Array() ),
				new Page ( "development_node_Transform2D", "Transform2D node", new Array() ),
				new Page ( "development_node_WrapText", "WrapText node", new Array() )
			)),
			new Page ( "widgets_development_javascript_language", "Javascript language", new Array() ),
			new Page ( "widgets_development_javascript_ref", "Javascript reference", new Array(
				new Page ( "development_javascript_Browser", "Browser", new Array() ),
				new Page ( "development_javascript_Contact", "Contact", new Array() ),
				new Page ( "development_javascript_Date", "Date", new Array() ),
				new Page ( "development_javascript_File", "File", new Array() ),
				new Page ( "development_javascript_Http", "Http", new Array() ),
				new Page ( "development_javascript_JSON", "JSON", new Array() ),
				new Page ( "development_javascript_Math", "Math", new Array() ),
				new Page ( "development_javascript_Messaging", "Messaging", new Array() ),
				new Page ( "development_javascript_String", "String", new Array() ),
				new Page ( "development_javascript_Style", "Style", new Array() ),
				new Page ( "development_javascript_XML", "XML", new Array() ),				
				new Page ( "development_javascript_Array", "Array Javascript library", new Array() ),
				new Page ( "development_javascript_Rcp", "Rcp Javascript library", new Array() ),
				new Page ( "development_javascript_Enumeration", "Enumeration Javascript library", new Array() ),
				new Page ( "development_javascript_Persist", "Persist Javascript library", new Array() )
			)),			
			new Page ( "widgets_development_css_language", "CSS language", new Array() )
		)),
		new Page ( "widgets_development_guidelines", "development guidelines", new Array(
			new Page ( "widgets_development_guidelines_rules", "code conventions", new Array() ),
			new Page ( "widgets_development_i18n", "internationalization", new Array() ),
			new Page ( "widgets_development_scalability", "scalability guidelines", new Array() ),
			new Page ( "widgets_development_scalability_tiny", "scalability guidelines (Tiny version)", new Array() ),
			new Page ( "widgets_development_prototypes", "prototypes", new Array(
				new Page ( "prototype_alert", "Alert prototype", new Array() ),
				new Page ( "prototype_background", "Background prototype", new Array() ),
				new Page ( "prototype_bubble", "Bubble prototype", new Array() ),
				new Page ( "prototype_carrousel", "Carousel prototype", new Array() ),
				new Page ( "prototype_focusbar", "FocusBar prototype", new Array() ),
				new Page ( "prototype_list", "List prototype", new Array() ),
				new Page ( "prototype_loader", "Loader prototype", new Array() ),
				new Page ( "prototype_loadermini", "LoaderMini prototype", new Array() ),
				new Page ( "prototype_menu", "Menu prototype", new Array() ),
				new Page ( "prototype_menubar", "MenuBar prototype", new Array() ),
				new Page ( "prototype_minibrowser", "MiniBrowser prototype", new Array() ),
				new Page ( "prototype_mosaic", "Mosaic prototype", new Array() ),
				new Page ( "prototype_pictviewerbutton", "PictViewerButton prototype", new Array() ),
				new Page ( "prototype_progressbar", "ProgressBar prototype", new Array() ),
				new Page ( "prototype_progressbarmenu", "ProgressBarMenu prototype", new Array() ),
				new Page ( "prototype_rating", "Rating prototype", new Array() ),
				new Page ( "prototype_scrollable", "Scrollable prototype", new Array() ),
				new Page ( "prototype_scrollablelist", "ScrollableList prototype", new Array() ),
				new Page ( "prototype_scrollabletext", "ScrollableText prototype", new Array() ),
				new Page ( "prototype_scrollbar", "ScrollBar prototype", new Array() ),
				new Page ( "prototype_scrollingtextver", "ScrollingTextVer prototype", new Array() ),
				new Page ( "prototype_simplelist", "SimpleList prototype", new Array() ),
				new Page ( "prototype_sizenotifier", "SizeNotifier prototype", new Array() ),
				new Page ( "prototype_slider", "Slider prototype", new Array() ),
				new Page ( "prototype_subtitle", "SubTitle prototype", new Array() ),
				new Page ( "prototype_tabcarrousel", "TabCarrousel prototype", new Array() ),
				new Page ( "prototype_tabs", "Tabs prototype", new Array() ),
				new Page ( "prototype_textfield", "TextField prototype", new Array() ),
				new Page ( "prototype_ticker", "Ticker prototype", new Array() ),
				new Page ( "prototype_title", "Title prototype", new Array() ),
				new Page ( "prototype_touchcursor", "TouchCursor prototype", new Array() )
			))
		)),
		new Page ( "widgets_development_advanced", "advanced features", new Array(
			new Page ( "advanced_cache", "caching features", new Array() ),
			new Page ( "advanced_inline", "inlining", new Array() ),
			new Page ( "advanced_memory_tips", "memory tips", new Array() )
		)),
		new Page ( "widgets_development_limitations", "limitations", new Array() ),
		new Page ( "widgets_development_errors", "problems resolutions", new Array() )
	)),

	new Page ( "tutorials", "tutorials and examples", new Array(
		//Mobile Widgets tutorials
		new Page ( "tutorial_shape", "draw shapes", new Array() ),
		new Page ( "tutorial_appearance", "shape appearance", new Array() ),
		new Page ( "tutorial_picture", "draw picture", new Array() ),
		new Page ( "tutorial_text", "draw text", new Array() ),
		new Page ( "tutorial_key_sensor", "input and key sensor", new Array() ),
		new Page ( "tutorial_other_sensor", "other sensors", new Array() ),
		new Page ( "tutorial_move_shape", "move shape", new Array() ),
		new Page ( "tutorial_launch_anim", "launch animation after user action", new Array() ),
		new Page ( "tutorial_more_anim", "more animations", new Array() ),
		new Page ( "tutorial_basic_audio_video", "basic audio and video tutorial", new Array() ),
		new Page ( "tutorial_media_sensor", "MediaSensor and MediaControl", new Array() ),
		new Page ( "tutorial_record_texture", "Recordtexture", new Array() ),
		new Page ( "tutorial_http", "load data via HTTP protocol", new Array() ),
		new Page ( "tutorial_prototype", "write and use a prototype", new Array() ),
		//Tiny Mobile Widgets tutorials
		new Page ( "tutorial_tiny_softkeys", "softkeys tutorial", new Array() ),
		new Page ( "tutorial_tiny_menu", "menu tutorial", new Array() ),
		new Page ( "tutorial_tiny_popup", "popup tutorial", new Array() ),
		new Page ( "tutorial_tiny_progressbar", "progress bar tutorial", new Array() )
	)),

	new Page ( "deployment", "deployment on phone", new Array() ),


	new Page ( "faq", "FAQ", new Array() )
));

/** Initialize the structure */
structure.initialize();

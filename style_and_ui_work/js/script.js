$( document ).ready(function() {
    
    var body = $('body');
    var passages = $("#passages");
    $(passages).show();
    
    if(!$("#header_stripe").length) {
        var header = document.createElement("div");
        header.id = "header_stripe";
        $(header).insertBefore(passages);
        
        var panel_link = $('<a>');
        var panel_link_icon = $('<i>');
        panel_link.attr("href", "#");
        panel_link.attr("class", "panel_link");
        panel_link_icon.attr("class", "fa fa-bars");
        $(panel_link).append(panel_link_icon);
        $(header).append(panel_link);
        
        
            $(".panel_link").click(function(){
                $("#panel").toggle();
                $("#passages").toggle();
            });
        
        
        
    }
    
    
    //  IF NO PANEL, THEN PANEL YOURSELF. YOU DESERVE IT!
    if (!$("#panel").length) {
        
        var panel = document.createElement("div");
        panel.id = "panel";
        $(panel).insertBefore(passages);
        
        $(panel).hide();
       
        var nav_array = [
            
            // link_text, link_name, font-awesome icon name
        
            "Text, text, file-text, #",    // TEXT
            "Video, video, youtube, #",  // VIDEO
            "Audio, audio, soundcloud, #",      // AUDIO
            "Map, map, map-marker, #"      // MAP
            
        ];
        
        function makeNav( nav_ray ) {
            
            var c = nav_ray.length;
            console.log("nav_ray length is: " + c)
            
            var nav = $('<ul>');
            nav.attr("id","panel_nav");
            $(panel).append(nav);
            
            for (i = 0; i < c; i++) {
                
                var params = nav_ray[i].split(", ");
                
                var link_text = params[0];
                var link_name = params[1];
                var icon_name = params[2];
                var target = params[3];
                
                console.log(params[0]);
                
                var list_item = $("<li>");
                    list_item.attr("class", "panel_nav_li " + link_name);

                var icon = $('<i>');
                var checkbox = $('<i>');
                
                    
                    icon.attr("class", " icon fa fa-" + icon_name );
                    
                    checkbox.attr("class", "fa fa-square checkbox");
                    
                    list_item.append( icon );
                    
                    
                    
                $(list_item).append(icon);
                list_item.append( document.createTextNode( link_text ));
                list_item.append( checkbox );
                
                $(nav).append(list_item);
                
                // IF A CHECKBOX IS CLICKED
                $(checkbox).click(function(eve){
                    eve.stopPropagation();
                    // TOGGLE ITS CHECKBOX
                    $(this).toggleClass("fa-check-square");
                    // IF IT CAN SPLIT WITH TEXT, SPLIT IT
                });
                
                // WHEN A LIST ITEM IS CLICKED,
                $(list_item).click(function(){
                    
                    // IF ANY ELEMENTS HAVE CLASS FA-CHECK-SQUARE, REMOVE IT
                        $(".panel_nav_li").children(".checkbox").removeClass("fa-check-square");
                    
                    // IF DOESN'T HAVE CLASS FA-CHECK-SQUARE, TOGGLE IT AND SEND THEM TO THAT VIEW
                        $(this).children(".checkbox").addClass("fa-check-square");
                    
                });
                
                
            }
            
            
        }
        
        makeNav(nav_array);
        
    }
    
    
    
    
    
    
});
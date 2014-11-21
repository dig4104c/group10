$( document ).ready(function() {
    
    var z = 0;
    
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
        
        $(header).append($("<h1>Adventure Story</h1>"))
        
        
            
        
        
        
    }
    
    var numMedia = 1;
    
    
    //  IF NO PANEL, THEN PANEL YOURSELF. YOU DESERVE IT!
    if (!$("#panel").length) {
        
        var panel = document.createElement("div");
        panel.id = "panel";
        $(panel).insertBefore(passages);
       
        
        $(panel).hide();
       
        var nav_array = [
            
            // link_text, link_name, font-awesome icon name
        
            "Text, text, file-text, .body",    // TEXT
            "Video, video, youtube, #videoWrapper",  // VIDEO
            "Audio, audio, soundcloud, #audio",      // AUDIO
            "Map, map, map-marker, #image"      // MAP
            
        ];
        
        var target_array = [];
        
        
        for(u = 0; u < nav_array.length; u ++ ) {
            var items = nav_array[u].split(", ");
            target_array[u] = items[3];
        }
        
        
        
        
        
        
        function makeNav( nav_ray ) {
            
            var c = nav_ray.length;
            
            
            var nav = $('<ul>');
            nav.attr("id","panel_nav");
            $(panel).append(nav);
            
            //  CREATE NECESSARY LIST ITEMS
            for (i = 0; i < c; i++) {
                
                var params = nav_ray[i].split(", ");
                
                var link_text = params[0];
                var link_name = params[1];
                var icon_name = params[2];
                var target = params[3];
                
                
                
                var list_item = $("<li>");
                    list_item.attr("class", "panel_nav_li " + link_name);

                var icon = $('<i>');
                var checkbox = $('<i>');
                
                    
                    icon.attr("class", " icon fa fa-" + icon_name );
                    
                    checkbox.attr("class", "fa fa-square checkbox");
                    
                    list_item.append( icon );
                    
                    
                    
                
                list_item.append( document.createTextNode( link_text ));
                list_item.append( checkbox );
                
                if($(target).length){
                        $("#panel_nav").append(list_item);
                        if($(target).is(":visible")){
                            $(checkbox).toggleClass("fa-check-square");
                        } else if($("#image2").is(":visible")){
                            $(".map").children("i.fa-square").addClass("fa-check-square");
                        }
                        
                }
                
                    // IF TARGET IS THE MAP
                    if(target == "#image"){
                        
                        var fullscreen = $('<i>');
                        fullscreen.attr("class", "fa fa-arrows-alt fullscreen");
                        list_item.append( fullscreen );
                        
                        $("#image2").remove();
                        
                        fullscreen.click(function(){
                            
                            // HIGHLIGHT FULLSCREEN FOR MAP
                            
                            image = $("#image");
                            image2 = $( "#image" ).clone();
                            image.hide();
                            image2.attr("id","image2");
                            
                            image2.show();
                            
                            image2.insertBefore(".body");
                            
                            headerHeight = $("#header_stripe").height();
                            var windowWidth = Math.round(window.innerWidth / 2);
                            var windowHeight = Math.round((window.innerHeight - headerHeight) / 2);
                            var newSize = "size=" + windowWidth +"x" + windowHeight;
                            
                            console.log("map selected");
                            var str   = $("#image > img").attr("src");
                            console.log(str);
                            var regex = /size=\d*[x]\d*/;
                            str = str.replace(regex, newSize);
                            var regex = /scale=\d/;
                            str = str.replace(regex, "scale=2");
                            console.log(str)
                            $(image2).children("img").attr("src",str);

                            
                            // HIDE PANEL
                            $("#panel").hide();
                            $( "#panel_nav" ).remove();
                        
                        // HIDE ALL OTHER TARGETS
                            $(".body").hide();
                            $("#videoWrapper").hide();
                            $("#audio").hide();
                        });
                        
                        $(checkbox).click(function(eve){
                            eve.stopPropagation();
                            // TOGGLE ITS CHECKBOX
                            $(this).toggleClass("fa-check-square");
                            
                            if($(this).hasClass("fa-check-square")){
                                $(".body").show();
                                $("#audio").hide();
                                $("#image").show();
                                $("#videoWrapper").hide();
                                $("#image2").hide();
                                $(".audio").children("i.fa-square").removeClass("fa-check-square");
                                $(".video").children("i.fa-square").removeClass("fa-check-square");
                                if(!$(".text").hasClass("fa-check-square")){
                                    $(".text").children("i.fa-square").addClass("fa-check-square");
                                }
                            } else {
                                $("#image").hide()
                                $("#image2").hide();
                                $(".body").show();
                            }
                            
                            
                        });
                    }
                    
                    // IF TARGET IS TEXT
                    if(target == ".body"){
                        
                        var fullscreen = $('<i>');
                        fullscreen.attr("class", "fa fa-arrows-alt fullscreen");
                        list_item.append( fullscreen );
                        
                        
                        fullscreen.click(function(){
                            $(".body").show();
                            // HIGHLIGHT FULLSCREEN FOR TEXT
                            
                            // HIDE PANEL
                            $("#panel").hide();
                            $( "#panel_nav" ).remove();
                            
                            // HIDE ALL OTHER TARGETS
                            
                            $("#videoWrapper").hide();
                            $("#audio").hide();
                            $("#image").hide();
                        });
                        
                        $(checkbox).click(function(eve){
                            eve.stopPropagation();
                            // TOGGLE ITS CHECKBOX
                            $(this).toggleClass("fa-check-square");
                            if($(this).hasClass("fa-check-square")){
                                $(".body").show();
                                $("#audio").hide();
                                $("#image").hide();
                                $("#videoWrapper").hide();
                                $("#image2").hide();
                                $(".audio").children("i.fa-square").removeClass("fa-check-square");
                                $(".video").children("i.fa-square").removeClass("fa-check-square");
                                $(".map").children("i.fa-square").removeClass("fa-check-square");
                            } else {
                                $("#image").hide()
                                $("#image2").hide();
                            }
                            
                            
                        });
                    }
                    
                    
                    if(target == "#videoWrapper"){
                        $(checkbox).click(function(eve){
                            eve.stopPropagation();
                            // TOGGLE ITS CHECKBOX
                           
                            // IF IT CAN SPLIT WITH TEXT, SPLIT IT
                            $(this).toggleClass("fa-check-square");
                            //$(".text").children("i.fa-square").toggleClass("fa-check-square");
                            if($(this).hasClass("fa-check-square")){
                                $(".body").show();
                                $("#audio").hide();
                                $("#image").hide();
                                $("#videoWrapper").show();
                                $("#image2").hide();
                                $(".map").children("i.fa-square").removeClass("fa-check-square");
                                $(".audio").children("i.fa-square").removeClass("fa-check-square");
                                if(!$(".text").hasClass("fa-check-square")){
                                    $(".text").children("i.fa-square").addClass("fa-check-square");
                                }
                            } else {
                                $("#videoWrapper").hide()
                            }
                            
                        });
                        
                    }
                    
                    if(target == "#audio"){
                        $(checkbox).click(function(eve){
                            eve.stopPropagation();
                            // TOGGLE ITS CHECKBOX
                            $(this).toggleClass("fa-check-square");
                            //$(".text").children("i.fa-square").toggleClass("fa-check-square");
                            if($(this).hasClass("fa-check-square")){
                                $(".body").show();
                                $("#audio").show();
                                $("#image").hide();
                                $("#videoWrapper").hide();
                                $("#image2").hide();
                                $(".map").children("i.fa-square").removeClass("fa-check-square");
                                $(".video").children("i.fa-square").removeClass("fa-check-square");
                                if(!$(".text").hasClass("fa-check-square")){
                                    $(".text").children("i.fa-square").addClass("fa-check-square");
                                }
                            } else {
                                $("#audio").hide()
                            }
                        });
                        
                    }
                    
                    
                    
                    
                    
                
                
                
            // WHEN A LIST ITEM IS CLICKED,
                //$(list_item).click(function(){
                //    
                //    // IF ANY ELEMENTS HAVE CLASS FA-CHECK-SQUARE, REMOVE IT
                //        $(list_item).children(".checkbox").removeClass("fa-check-square");
                //    
                //    // IF DOESN'T HAVE CLASS FA-CHECK-SQUARE, TOGGLE IT AND SEND THEM TO THAT VIEW
                //        $(this).children(".checkbox").addClass("fa-check-square");
                //        
                //    // HIDE ALL OTHER TARGETS, SHOW THIS ONE'S TARGET AT FULL SIZE, HIDE PANEL
                //    for(u = 0; u < target_array.length; u ++ ) {
                //        $("#panel").hide();
                //        $( "#panel_nav" ).remove();
                //
                //
                //    }
                //    
                //    
                //    
                //});
                
            // IF A CHECKBOX IS CLICKED
                
                
            // IF TEXT CHECKBOX IS CLICKED
                // TEXT SHOULD ALWAYS BE CHECKED UNLESS FULLSCREEN IS SELECTED ON AN ITEM
            
            // IF VIDEO CHECKBOX IS CLICKED
                // IF CHECKED
                    // CHECK TO SEE IF AUDIO OR MAP ARE SELECTED & UNCHECK
                    // CHECK TEXT
            
            // IF AUDIO CHECKBOX IS CLICKED
                // IF CHECKED
                    // CHECK TO SEE IF VIDEO OR MAP ARE SELECTED & UNCHECK
                    // CHECK TEXT
            
            // IF MAP CHECKBOX IS CLICKED
                // IF CHECKED
                    // CHECK TO SEE IF VIDEO OR AUDIO ARE SELECTED & UNCHECK
                    // CHECK TEXT
                
                
            }
            
            
            
            
        }
        
        makeNav(nav_array);
        // get targets to highlight, set as array
            // check boxes on panel open
            // show icons on text page
        $("#panel").hide();
        
        
        $(".panel_link").click(function(){
                $( "#panel_nav" ).remove();
                 makeNav(nav_array);
                $("#panel").fadeToggle(function(){
                    if($("#panel").is(':visible')){
                        
                        
                    } else {
                        $( "#panel_nav" ).remove();
                    }
                    
                });
                
        });
        
    }
    
    
   $(function(){
    var wrapped = false;
    var original = $("img");

            $("img").wrap(function(){
      return "<div class='image_container'></div>"
    });


});


    
    

    
    
    
});
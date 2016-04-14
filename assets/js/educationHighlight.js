/**
 * Created by Linus on 14-4-2016.
 */

function highlightCoursesOfType(typeName) {
    $(".educationStyle ul.courseList li").each( function() {
        if( $(this).hasClass(typeName) ) {
            $(this).addClass("highlighted");
        }
        else {
            $(this).removeClass("highlighted");
        }
    });
}



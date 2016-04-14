/**
 * Created by Linus on 14-4-2016.
 */

function highlightCoursesOfType(typeName) {
    function highlightType() {
        if( $(this).hasClass(typeName) ) {
            $(this).addClass("highlighted");
        }
        else {
            $(this).removeClass("highlighted");
        }
    };

    $(".educationStyle ul.courseList li").each(highlightType);
    $(".educationStyle .courseFilter").each(highlightType);
}



var homePillsTab = $('#main-tab a[href="#home"]')
var aboutPillsTab = $('#main-tab a[href="#about"]')
var skillsPillsTab = $('#main-tab a[href="#skills"]')
var projectsPillsTab = $('#main-tab a[href="#projects"]')
var contactsPillsTab = $('#main-tab a[href="#contacts"]')

homePillsTab.on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
})
aboutPillsTab.on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
})
skillsPillsTab.on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
})
projectsPillsTab.on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
})
contactsPillsTab.on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
})

navControls()

$('.skill-container').on('click', function() {
    if ($(this).hasClass('toggle-skill-container')) {
        $(this).removeClass('toggle-skill-container')
    }
    else {
        $(this).addClass('toggle-skill-container')
    }
})

function navControls() {
    var i, items = $('.nav-link'), pane = $('.tab-pane')
    // Next
    $('.nextNav').on('click', function() {
        for(i = 0; i < items.length; i++){
            if($(items[i]).hasClass('active')){
                break;
            }
        }
        if(i < items.length - 1) {
            // for tab
            $(items[i]).removeClass('active').show(200)
            $(items[i+1]).addClass('active').show(200)
            // pane
            $(pane[i]).show(200, function() {
                $(pane[i]).removeClass('show active').removeAttr('style')
            })
            $(pane[i+1]).show(200, function() {
                $(pane[i+1]).addClass('show active').removeAttr('style')
            })
        }
    })
    // Prev
    $('.prevNav').on('click', function(){
        for(i = 0; i < items.length; i++){
            if($(items[i]).hasClass('active') == true){
                break;
            }
        }
        if(i != 0){
            // for tab
            $(items[i]).removeClass('active').show(200)
            $(items[i-1]).addClass('active').show(200)
            // for pane
            $(pane[i]).show(200, function() {
                $(pane[i]).removeClass('show active').removeAttr('style')
            })
            $(pane[i-1]).show(200, function() {
                $(pane[i+1]).addClass('show active').removeAttr('style')
            })
        }
    });
}
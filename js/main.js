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
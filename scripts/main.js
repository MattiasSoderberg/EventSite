$(function() {
    $('#navbar .navHeader i').on('click', function() {
        $('.dropdownNav').slideToggle()
        // $('.container').toggleClass('overlay')
    })

    $('.card-horizontal #card-dropdown-link').on('click', function(e) {
        e.preventDefault()
        let parent = this.closest('.card-horizontal-container')
        $(parent).find('.card-dropdown').slideToggle()
    })

    $('#submitContactForm').on('click', function(e) {
        e.preventDefault()
        $('#contactForm').slideUp('fast', function() {
            $('.successMessage').slideDown('fast')
        })
    })

    $('.image-container img').on('mouseover', function() {
        const expand = 10 / $(this).innerWidth()
        $(this).css('transform', `scale(${expand + 1})`)
    })
    $('.image-container img').on('mouseout', function() {
        $(this).css('transform', 'scale(1)')
    })
})
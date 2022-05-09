$('.navigation a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },
        800
        );
    }
});

function authorEmail(email, id){

    if(document.getElementById(id).innerHTML == '<span></span>' + email){
        if(id == "dominik")
            document.getElementById(id).innerHTML = '<span></span>Dominik Skąpski';
        if(id == "julkaP")
            document.getElementById(id).innerHTML = '<span></span>Julia Podolak';
        if(id == "julkaK")
            document.getElementById(id).innerHTML = '<span></span>Julia Korzekwa';
    }else{
        document.getElementById(id).innerHTML = '<span></span>' + email;
    }
}
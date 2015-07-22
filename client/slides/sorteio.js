Template.sorteio.helpers({
    inscritos: function () {
        var inscr = Inscritos.find({}, {sort: {createdAt: 1}}).fetch();
        _.each(inscr, function(inscrito, index){
            inscrito.index = index + 1;
        });
        return inscr.reverse();;
    },
    count: function () {
        return Inscritos.find({}).count();
    }
});

Template.sorteio.events({
    "click .btn": function (event) {
        var inscrito = {
            nome: $('#nome').val(),
            email: $('#email').val()
        }

        if(inscrito.email) {
            if(validateEmail(inscrito.email)){

                var findInscrito = Inscritos.findOne({email: inscrito.email});
                if(!findInscrito) {
                    Meteor.call('addInscrito', inscrito),
                    $('.new-task').trigger("reset");
                    $('#nome').val("Inscrito com sucesso!!")
                }else{
                    $('.new-task').trigger("reset");
                    $('#nome').val("você já se inscreveu danadinho!!")
                }
            }else{
                $('#email').val("Email inválido!!")
                $('#email').focus();
            }
        }
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
Template.sorteio.helpers({
    inscritos: function () {
        return Inscritos.find({}, {sort: {createdAt: -1}});
    },
    count: function () {
        return Inscritos.find({}).count();
    }
});

Template.sorteio.events({
    "click .btn": function (event) {
        var inscrito = {
            index: Inscritos.find({}).count() + 1,
            nome: $('#nome').val(),
            email: $('#email').val(),
            createdAt: new Date() // current time
        }

        if(inscrito.email) {
            event.preventDefault();

            var findInscrito = Inscritos.findOne({email: inscrito.email});
            if(!findInscrito) {
                Inscritos.insert(inscrito);
                $('.new-task').trigger("reset");
                $('#nome').val("Inscrito com sucesso!!")
            }else{
                $('.new-task').trigger("reset");
                $('#nome').val("você já se inscreveu danadinho!!")
            }
        }
    }
});

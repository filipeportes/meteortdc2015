Meteor.startup(function () {
    //corrige ids dos inscritos a partir da data de cadastro
    var inscritos = Inscritos.find({}, {sort: {createdAt: 1}}).fetch();
    _.each(inscritos, function(inscrito, indexByDate){
        Inscritos.update({_id: inscrito._id}, {
            $set: {
                index: indexByDate
            }
        });
    });
});
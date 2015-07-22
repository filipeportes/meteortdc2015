Meteor.methods({
    addInscrito: function(inscrito) {
        inscrito.createdAt = new Date();
        Inscritos.insert(inscrito);
    }
});

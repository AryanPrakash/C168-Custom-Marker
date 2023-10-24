AFRAME.registerComponent('create-button', {
    init: function() {
        var button1 = document.createElement('button')
        button1.innerHTML = 'RATE-US' //property
        button1.setAttribute('id', 'rating-button');
        button1.setAttribute('class', 'btn btn-1');

        var button2 = document.createElement('button') //to create html element within js file
        button2.innerHTML = 'ORDER NOW' //property to give name to the button
        button2.setAttribute('id', 'order-button');
        button2.setAttribute('class', 'btn btn-warning');
    }
})
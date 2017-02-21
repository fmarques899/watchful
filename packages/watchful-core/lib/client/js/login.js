Template.login.events({
    'click #login-button': function(event) {
        event.preventDefault();
        var username = $("#login-username").val()
        var password = $("#login-password").val()

        if (username === "") {
            alert("The Username field is empty.")
        } else if (password === "") {
            alert("The Password field is empty")
        } else {
            Meteor.loginWithPassword(username, password, function(error) {
                if (error != undefined) {
                    if (error.reason === "User not found") {
                        alert("Username doesn't exists");
                    } else {
                        if (error.reason === "Incorrect password") {
                            alert("Password isn't correct.");
                        } else {
                            // Do nothing
                        }
                    }

                }
            });
            FlowRouter.go('/')
        }
    },
    'submit #watchful-login-form': function(event) {
        event.preventDefault();
        var username = $("#login-username").val()
        var password = $("#login-password").val()

        if (username === "") {
            alert("The Username field is empty.")
        } else if (password === "") {
            alert("The Password field is empty")
        } else {
            Meteor.loginWithPassword(username, password, function(error) {
                if (error != undefined) {
                    if (error.reason === "User not found") {
                        alert("Username doesn't exists");
                    } else {
                        if (error.reason === "Incorrect password") {
                            alert("Password isn't correct.");
                        } else {
                            // Do nothing
                        }
                    }

                }
            });
            FlowRouter.go('/')
        }
    }
});

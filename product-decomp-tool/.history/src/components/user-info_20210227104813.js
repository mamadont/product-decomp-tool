import React from "react";
class UserInfo extends React.Component {
    getUserInfo = (name) => {
        // grab elements
        var close = document.getElementById("close-btn");

        // store data in a cookie
        document.cookie = "name= " + name + "course = cosc236";

        // close button
        close.onclick = () => {
            modal.style.display = "none";
            var x = document.getElementById('comments');
            x.innerHTML = ""; 
        }
    }
    
    render() {
        <div>
            <div id="info-modal">
                <div className="modal-content">
                    <span id="close-btn" className="close">&times;</span>
                    <form>
                        <label>Name: </label>
                        <input placeholder="name" type="text"></input>
                        <button> Submit</button>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default UserInfo;

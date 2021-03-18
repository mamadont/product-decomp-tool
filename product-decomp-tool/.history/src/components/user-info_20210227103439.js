class UserInfo extends React.Component {
    getUserInfo = (name) => {
        // grab elements
        var modal = document.getElementById("modal");
        var close = document.getElementById("close-btn");
        modal.style.display = "block";
        
        close.onclick = () => {
            modal.style.display = "none";
            var x = document.getElementById('comments');
            x.innerHTML = ""; 
        }
    }
    
    render() {
        <div>
            <div id="modal">
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

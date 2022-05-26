const config = require("../config.js");
const io = require(config.DIRNAME + "/server.js");
const auth = require(config.LOGIC + "/auth/authenticator.js");
const DB = require(config.LOGIC + "/helpers/DB.js");
const client = require(config.LOGIC + "/client/client.js");
const {User} = require(config.LOGIC + "/helpers/_DB.js");

io.on("connection", async (socket) => {
    if (!socket.handshake.query) {
        socket.emit("alert", "EMPTY_TOKEN");
        socket.disconnect();
        return;
    }
    const token = socket.handshake.query.token;
    if (!token) {
        socket.emit("alert", "EMPTY_TOKEN")
        socket.disconnect();
        return;
    }
    const id = auth.verify(token);
    if (!id) {
        socket.emit("alert", "WRONG_TOKEN");
        socket.disconnect();
        return;
    }
    const user = await User.findOne({
        where : {
            user_id : id
        }
    });
    if (!user){ 
        socket.emit("alert", "USER_NOT_FOUND");
        socket.disconnect();
        return;
    }
    
    if(io.sockets[id]) {
        io.sockets[id].emit("alert" , "OTHER_CONNECT");
        io.sockets[id].disconnect();
        delete io.sockets[id];
    }
    io.sockets[id] = socket;
    //DB.setUserValue(id, "isOnline", true);
    await user.setData({
        isOnline : true
    });

    //client(io, socket, id);

    socket.on("disconnect", async (data) => {
        //DB.setUserValue(id, "isOnline", false);
        
        const _user = await User.findOne({
            where: {
                user_id: id
            }
        });
        
        await _user.setData({
            isOnline : false
        });
        delete io.sockets[id];
    });
});



module.exports = true;

import { Input } from "@mui/material";
import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import SendIcon from "@mui/icons-material/Send";


function SendMessage() {
    const [message, setMessage] = useState("");
    function SendMessage (e) {
        e.preventDefault(); //再ロードしない

        const {uid, photoURL} = auth.currentUser;

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setMessage("");
    }

  return (
    <div>
      <form onSubmit={SendMessage}>
        
        <div className='sendMsg' >
            <Input
                style={{
                    width: "78%",
                    fontSize: "15px",
                    fontWeight: "550",
                    marginLeft: "5px",
                    marginBottom: "-3px",
                  }}
                
                  placeholder="メッセージを入力"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
            />
        </div>
      </form>
      {/* <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} /> */}
    </div>
  )
}

export default SendMessage

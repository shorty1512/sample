function manage() {
    console.log("hello");
    var bt = document.getElementById('btn');
    let name = document.querySelector("#name").value;
    let chatBox = document.querySelector("#chat-box").value;
    if (name && chatBox != '') {
        bt.disabled = false;
    } else {
        bt.disabled = true;
    }
};

const createMessages = (messages) => {
    let messageDiv = document.createElement("div");
    let content = document.createTextNode(messages.name + ":  " + messages.text);
    messageDiv.appendChild(content);
    let chat = document.querySelector("#chat");
    chat.appendChild(messageDiv);
  };

let messages;
// get saved messages
// loop through saved messages and display in chats
if(localStorage.getItem('item')) {
    messages = JSON.parse(localStorage.getItem('item'))

messages.forEach(createMessages);
}
else {
    messages=[]
};

document.querySelector("#btn").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let chatBox = document.querySelector("#chat-box").value;
  let message = {
    name,
    text: chatBox,
  };

  messages.push(message)
  localStorage.setItem('item', JSON.stringify(messages))

  createMessages(message);
  
  document.querySelector("#name").value = "";
  document.querySelector("#chat-box").value = "";
});







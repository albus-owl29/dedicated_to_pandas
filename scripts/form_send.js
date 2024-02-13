const TOKEN = "6778796489:AAF91fXiQDoePHQZGVh7Yvrc41yDDLStihM";
const CHAT_ID = "-1002040528868";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const button = document.getElementById('btn_1');
document.getElementById('tg').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправить: </b> ${ this.name.value }\n`;
    message += `<b>Номер телефона: </b> ${ this.phoneNumber.value }\n`;
    message += `<b>Идея: </b> ${ this.idea.value }`;

    axios.post(URI_API, {

        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })

    button.textContent = 'Отправлено';
})

function renameBtn() {

    button.textContent = 'Отправить';
  }
  
  setInterval(() => renameBtn(), 5000);

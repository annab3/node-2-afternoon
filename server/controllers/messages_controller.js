const messages = [];
let id = 0;

const Create = (req, res) => {
    messages.push({
        id: id,
        text: req.body.text,
        time: req.body.time
    })
    id++;
    res.status(200).json(messages);
};
const Read = (req, res) => {
    res.status(200).json(messages);
};
const Update = (req, res) => {
    let index = messages.findIndex(message => message.id === +req.params.id);
    messages[index].text = req.body.text;
    res.status(200).json(messages);
};
const Delete = (req, res) => {
    let index = messages.findIndex(message => message.id === +req.params.id)
    messages.splice(index, 1);
    res.status(200).json(messages);
};


module.exports = {
    Create,
    Read,
    Update,
    Delete
}
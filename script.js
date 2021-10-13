const url = 'https://api.agify.io/?name='

const fetchData = async(name) => {
    try { const data = await fetch(url + name);
        const resp = await data.json();
        console.log(resp);
        return (resp);
    } catch (err) {
        console.log(err);
    }
}
// console.log(name);

const getName = () => {
    const myName = document.getElementById('myName').value;
    return myName
}

const createText = async(data) => {
    if (data.age) {
        const string = `${data.name}, I guess you are ${data.age} years old!`;
        const footer = `Based on ${data.count} results registered.`
        return [string, footer];
    } else {
        const string = `${data.name}, I can't guess your age. Not enough data...`;
        const footer = ''
        return [string, footer];
    }
};

const setText = async(string, footer) => {
    document.getElementById('guess').textContent = string;
    document.getElementById('footer').textContent = footer;
};

const clickButton = async() => {
    const name = getName()
    if (!name) return
    const data = await fetchData(name);
    const [string, footer] = await createText(data)
    setText(string, footer)
}

document.getElementById('sendName').addEventListener('click', () => clickButton())
document.addEventListener('keypress', (e) => e.key === 'Enter' && clickButton())
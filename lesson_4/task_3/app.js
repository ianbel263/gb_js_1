const askUser = () => {
    let userData = prompt('Игра "Кто хочет стать миллионером.\nЕсли захотите выйти из текущей игры, при ответе на вопросы наберите exit.\nЖелаете сыграть? (y/n):');
    let game = new Game(data);

    if (userData === 'y') {
        game.start();
        askUser();
    } else if (userData === 'n') {
        game.end();
    } else {
        askUser();
    }
}

askUser();

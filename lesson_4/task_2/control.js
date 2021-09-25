const Control = {
    EXIT: 'Escape',
    UP: 'Numpad8',
    DOWN: 'Numpad2',
    LEFT: 'Numpad4',
    RIGHT: 'Numpad6',
    UP_LEFT: 'Numpad7',
    UP_RIGHT: 'Numpad9',
    DOWN_LEFT: 'Numpad1',
    DOWN_RIGHT: 'Numpad3'
};

const onKeyDown = evt => {
    if (!Object.values(Control).includes(evt.code)) {
        return;
    }

    switch(evt.code) {
        case Control.EXIT:
            map.clear();
            document.removeEventListener('keydown', onKeyDown);
            console.log('Вы вышли из игры.');
        return;

        case Control.UP:
            player.move('UP');
        break;

        case Control.DOWN:
            player.move('DOWN');
        break;

        case Control.LEFT:
            player.move('LEFT');
        break;

        case Control.RIGHT:
            player.move('RIGHT');
        break;

        case Control.UP_LEFT:
            player.move('UP_LEFT');
        break;

        case Control.UP_RIGHT:
            player.move('UP_RIGHT');
        break;

        case Control.DOWN_LEFT:
            player.move('DOWN_LEFT');
        break;

        case Control.DOWN_RIGHT:
            player.move('DOWN_RIGHT');
        break;
    }

    map.rerender();
};

document.addEventListener('keydown', onKeyDown);
  
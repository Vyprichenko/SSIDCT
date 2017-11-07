import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const sources = [
    '/thing.json',
    'https://my-json-server.typicode.com/vyprichenko/ssidct/things/4'
];

const test5 = {
    "@context": "http://schema.org",
    "@type": "Thing",
    "name": "ReactJS with 4s timeout",
    "alternateName": "ozpydkrnma",
    "identifier": "SSIDCT_test5",
    "description": "Проверяется индексирование поисковыми системами данных, добавленных в документ с задержкой."
}

const test6 = 'Проверяется индексирование поисковыми системами текстов в JavaScript. Ключевое слово udgbeuyzdm';

function get(url, then) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            then(xhr.responseText);
        }
    }
    xhr.send();
}

function render(container, things) {
    ReactDOM.render(
        React.createElement(App, { things: things }),
        container
    );
}

document.addEventListener('DOMContentLoaded', function () {
    var appContainer = document.getElementById('app');
    var thingsContainer = document.getElementById('things');
    var things = JSON.parse(thingsContainer.textContent);

    // Выполнить начальные тесты (данные в документе)
    render(appContainer, things);

    // Выполнить тесты Ajax
    sources.forEach(url => {
        get(url, json => {
            if (json) {
                things.push(JSON.parse(json));
                render(appContainer, things);
            }
        });
    });

    // Выполнить тест с задержкой
    window.setTimeout(() => {
        things.push(test5);
        render(appContainer, things);
    }, 4000);
});
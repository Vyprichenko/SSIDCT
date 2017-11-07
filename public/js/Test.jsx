import React from 'react';

export default function Test(props) {
    const { name, identifier, description } = props.test;
    const value = props.test.alternateName;

    return (
        <figure id={identifier}>
            <figcaption>{name}</figcaption>
            <p>{description}</p>
            <div className="alert">
                {
                    value
                        ? <span>Тест считается успешно пройденным, если поиск по слову <strong>{value}</strong> даёт результаты.</span>
                        : <span>Данные для индексирования скрыты, или не загружены.</span>
                }
            </div>
        </figure>
    );
}
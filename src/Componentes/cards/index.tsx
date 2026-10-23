import { useNavigate } from "react-router-dom";
import type { tpCards } from "../../types/cards";

type Props = {
    manga: tpCards;
};

function Card({ manga }: Props) {
    const navegador = useNavigate();

    return (
        <div className="card">

            <div className="card-image-container">
                <img
                    className="card-image"
                    src={manga.coverImageUrl}
                    alt={`Capa do mangá ${manga.title}`}
                />
            </div>

            <div className="card-content">
                <h3>{manga.title}</h3>

                <p>
                    Volume: <b>{manga.volumeNumber}</b>
                </p>

                <p>
                    Autor: <b>{manga.author}</b>
                </p>

                <p>
                    Editora: <b>{manga.publisher}</b>
                </p>

                <p>
                    ISBN: <b>{manga.isbn}</b>
                </p>

                <br />

                <button
                    className="card-button"
                    onClick={() => navegador(`/manga/${manga.id}`)}
                >
                    Ver mais
                </button>
            </div>

        </div>
    );
}

export default Card;
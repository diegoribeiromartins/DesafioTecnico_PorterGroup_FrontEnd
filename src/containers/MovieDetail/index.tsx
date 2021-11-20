import React from "react";
import MoviePoster from "../MoviePoster";

function MovieDetail() {
  return (
    <>
      <div>{/* Aqui vem o poster de fundo do filme */}</div>
      <div>
        <div>
          <MoviePoster />
        </div>

        <div>
          <div>
            <span>Ação</span>
          </div>
          <div>
            Nome do filme
            <small>Tagline do filme</small>
          </div>

          <div>Descrição do filme</div>

          <div>
            <ul>
              <li>
                <span>Título original:</span> Titulo original do filme
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
